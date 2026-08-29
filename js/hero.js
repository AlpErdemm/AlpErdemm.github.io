/**
 * The hero board: a self-playing hex board, replaying a recorded match.
 * Sprint U task U2 (plus the U4 reduced-motion / missing-data fallback).
 *
 * No Pixi, no engine, no simulation here (the data contract, orchestration
 * doc §3) — this renders exactly two files: `data/rigs.json` (which unit is
 * which SVG, and its attack duration) and `data/replay.json` (one recorded
 * match). `replay.js` does the arithmetic; this module is the DOM wiring:
 * fetch once, inline each rig's real SVG (the same `rig.svg` every unit
 * directory under `src/render/units/` authors — copied by Sprint T's asset
 * pipeline into `assets/rigs/`), and put the
 * right `st-*` class on it every tick so `assets/rigs/anim.css` (imported,
 * unmodified, from `hero.css`) does the actual animating.
 *
 * No dependencies beyond `replay.js`, no build step (decision 7).
 */

import { at, hexToPixel, load } from './replay.js';

/** Board geometry: `src/core/hex.ts:220-221` — a fixed 7x8 field. */
const BOARD_WIDTH = 7;
const BOARD_HEIGHT = 8;

/** Used only when `replay.json` cannot be fetched at all (U4). */
const FALLBACK_HEX_SIZE = 26;
const FALLBACK_IDS = ['kabak', 'misir', 'manti', 'kofte', 'borek', 'nar', 'pide', 'simit'];

/** `src/render/units/anim.css`'s five states, and the class each wears. */
const ANIM_CLASS = { idle: 'st-idle', walk: 'st-walk', atk: 'st-attack', hit: 'st-hit', die: 'st-death' };

/** Axial (q, r) -> offset (col, row), inverted: `src/core/hex.ts:225-227`. */
function fromOffset(col, row) {
  return { q: col - ((row - (row & 1)) >> 1), r: row };
}

/** The board's own pixel extent, the way `src/render/layout.ts:15-16` derives it. */
function boardExtent(hexSize) {
  const hexW = Math.sqrt(3) * hexSize;
  const rowStep = 1.5 * hexSize;
  return {
    width: hexW * (BOARD_WIDTH + 0.5),
    height: rowStep * (BOARD_HEIGHT - 1) + 2 * hexSize,
  };
}

/** One pointy-top hex outline, `src/render/layout.ts:206-213`'s corner math. */
function hexPoints(radius) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 180) * (60 * i - 30);
    pts.push(`${(radius * Math.cos(a)).toFixed(2)},${(radius * Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(' ');
}

const SVG_NS = 'http://www.w3.org/2000/svg';

function drawGrid(gridSvg, hexSize, crop = null) {
  gridSvg.innerHTML = '';
  const extent = boardExtent(hexSize);
  const view = crop ?? { x: 0, y: 0, ...extent };
  gridSvg.setAttribute('viewBox', `${view.x} ${view.y} ${view.width} ${view.height}`);
  const points = hexPoints(hexSize * 0.94);
  for (let row = 0; row < BOARD_HEIGHT; row++) {
    for (let col = 0; col < BOARD_WIDTH; col++) {
      const { x, y } = hexToPixel(fromOffset(col, row), hexSize);
      const poly = document.createElementNS(SVG_NS, 'polygon');
      poly.setAttribute('class', 'hero__hex');
      poly.setAttribute('points', points);
      poly.setAttribute('transform', `translate(${x} ${y})`);
      gridSvg.appendChild(poly);
    }
  }
}

/** How tall a rig draws, as a fraction of one hex — a hero-scale approximation
 * of `src/render/layout.ts`'s `ART_H` (which also weighs headroom and
 * same-row daylight; this page draws its own board, not the phone canvas
 * those extra constraints size for). */
const RIG_HEIGHT_HEXES = 2.15;

class HeroBoard {
  constructor(root) {
    this.root = root;
    this.grid = root.querySelector('.hero__grid');
    this.fallback = root.querySelector('.hero__fallback');
    this.hexSize = FALLBACK_HEX_SIZE;
    this.rigMarkup = new Map(); // unit id -> raw SVG text
    this.attackDur = new Map(); // unit id -> seconds
    this.elements = new Map(); // per-frame id -> mounted <svg class="rig">
    this.stateOf = new Map(); // per-frame id -> current st-* class, to avoid restarting a running animation
    this.replay = null;
    this.crop = null;
    this.startedAt = 0;
    this.raf = null;
    this.visible = true;
    this.reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  }

  /**
   * Plain relative-string fetches throughout, deliberately never
   * `new URL(x, import.meta.url)`: Vite's dev server (which serves every
   * module through its plugin pipeline, "no build step" notwithstanding —
   * that rule is about `site/` never running through the *game's* `vite
   * build`, not about the dev server that already answers every request
   * here) statically recognises `new URL(relativeString, import.meta.url)`
   * as an asset reference and rewrites it at transform time — turning
   * `new URL('../', import.meta.url)` into `new URL("/site", import.meta.url)`,
   * silently dropping the trailing slash and sending every fetch here to the
   * wrong path (`/data/rigs.json` instead of `/site/data/rigs.json`).
   * Measured, not assumed. A plain string handed to `fetch()` resolves
   * against the *document's* URL exactly like a normal relative link — which
   * is right regardless of where the site is served from, since `rigs.json`'s
   * own `svg` field (contract §3) is already relative to the same root
   * `index.html` is.
   */
  async loadRigs(rigsPath) {
    const res = await fetch(rigsPath);
    if (!res.ok) throw new Error(`rigs.json: HTTP ${res.status}`);
    return res.json();
  }

  async loadFrameRigs(manifest, frame, ids = null) {
    const wanted = ids ?? [...new Set(frame.units.map((unit) => unit.id))];
    const byId = new Map(manifest.units.map((unit) => [unit.id, unit]));
    await Promise.all(wanted.map(async (id) => {
      const unit = byId.get(id);
      if (!unit || this.rigMarkup.has(id)) return;
      this.attackDur.set(id, unit.attackDur);
      const svgRes = await fetch(unit.svg);
      if (svgRes.ok) this.rigMarkup.set(id, await svgRes.text());
    }));
  }

  async loadReplay(replayPath) {
    const res = await fetch(replayPath);
    if (!res.ok) throw new Error(`replay.json: HTTP ${res.status}`);
    return load(await res.json());
  }

  /** A deterministic tableau built only from whatever rigs loaded — the
   * fallback for reduced motion *and* for a `replay.json` that never
   * answered, so both read as the exact same still (U4). */
  composedFallbackFrame() {
    const ids = [...this.rigMarkup.keys()];
    const units = ids.map((id, i) => {
      const mine = i % 2 === 0;
      const lane = Math.floor(i / 2);
      return {
        id,
        q: 1 + lane * 2,
        r: mine ? BOARD_HEIGHT - 2 : 1,
        side: mine ? 'mine' : 'theirs',
        hp: 1,
        anim: 'idle',
      };
    });
    return { t: 0, units };
  }

  mount(unit, key) {
    const markup = this.rigMarkup.get(unit.id);
    if (!markup) return null;
    const holder = document.createElement('div');
    holder.innerHTML = markup;
    const svg = holder.querySelector('svg');
    if (!svg) return null;
    svg.classList.add('hero__unit');
    const dur = this.attackDur.get(unit.id);
    if (dur !== undefined) svg.style.setProperty('--dur-atk', `${dur}s`);
    svg.style.height = `${(RIG_HEIGHT_HEXES / (boardExtent(this.hexSize).height / this.hexSize)) * 100}%`;
    this.root.appendChild(svg);
    this.elements.set(key, svg);
    return svg;
  }

  /**
   * `static: true` (only from `renderStill`) deliberately never adds any
   * `st-*` class at all, rather than adding one and trusting reduced
   * motion's global `animation-duration: .01ms` (`site/css/base.css`) to
   * hold it still. That collapsed animation still *runs* — for a fraction
   * of a millisecond, still enough real time for two otherwise-identical
   * captures to occasionally land a frame apart mid-tween (measured: a
   * small, inconsistent pixel diff between two runs of the same reduced-
   * motion screenshot, on the rig's limbs specifically). No class means no
   * keyframe animation is ever attached, so the rig sits in its rest pose
   * with zero timing dependency at all.
   */
  paint(frame, { static: isStatic = false } = {}) {
    const seen = new Set();
    for (const [index, unit] of frame.units.entries()) {
      const key = `${unit.id}:${index}`;
      seen.add(key);
      let el = this.elements.get(key);
      if (!el) el = this.mount(unit, key);
      if (!el) continue;

      const { x, y } = hexToPixel({ q: unit.q, r: unit.r }, this.hexSize);
      const extent = this.crop ?? boardExtent(this.hexSize);
      const mirror = unit.side !== 'mine';
      el.style.left = `${((x - (this.crop?.x ?? 0)) / extent.width) * 100}%`;
      el.style.top = `${((y - (this.crop?.y ?? 0)) / extent.height) * 100}%`;
      el.style.transform = `translate(-50%, -78%)${mirror ? ' scaleX(-1)' : ''}`;

      const cls = isStatic ? null : (ANIM_CLASS[unit.anim] ?? 'st-idle');
      if (this.stateOf.get(key) !== cls) {
        for (const other of Object.values(ANIM_CLASS)) el.classList.remove(other);
        if (cls) el.classList.add(cls);
        this.stateOf.set(key, cls);
      }
    }
    // A unit gone from this frame (left the recording entirely) is removed —
    // nothing in this hero's cast currently does, but a shorter fixture or a
    // future recording might.
    for (const [key, el] of this.elements) {
      if (!seen.has(key)) {
        el.remove();
        this.elements.delete(key);
        this.stateOf.delete(key);
      }
    }
  }

  /** A definite computed height is what lets a unit's percentage `height`
   * resolve at all — `.hero__board` has no height of its own otherwise, only
   * absolutely-positioned children, which would collapse it to 0. */
  sizeBoard() {
    const extent = this.crop ?? boardExtent(this.hexSize);
    this.root.style.aspectRatio = `${extent.width} / ${extent.height}`;
  }

  cropTo(frame) {
    const cells = frame.units.map((unit) => fromOffset(unit.q + ((unit.r - (unit.r & 1)) >> 1), unit.r));
    if (!cells.length) return;
    const cols = cells.map((cell) => cell.q + ((cell.r - (cell.r & 1)) >> 1));
    const rows = cells.map((cell) => cell.r);
    const colStart = Math.max(0, Math.min(...cols) - 1);
    const colEnd = Math.min(BOARD_WIDTH - 1, Math.max(...cols) + 1);
    const rowStart = Math.max(0, Math.min(...rows) - 1);
    const rowEnd = Math.min(BOARD_HEIGHT - 1, Math.max(...rows) + 1);
    const w = Math.sqrt(3) * this.hexSize;
    const step = 1.5 * this.hexSize;
    this.crop = { x: colStart * w, y: rowStart * step, width: (colEnd - colStart + 1.5) * w, height: (rowEnd - rowStart) * step + 2 * this.hexSize };
  }

  renderStill(frame) {
    this.sizeBoard();
    drawGrid(this.grid, this.hexSize, this.crop);
    this.paint(frame, { static: true });
  }

  tick(now) {
    if (!this.visible || this.reduceMotion.matches) {
      this.raf = null;
      return;
    }
    const pinned = this.root.dataset.time;
    let t;
    if (pinned !== undefined && pinned !== '') {
      t = Number(pinned);
    } else {
      if (!this.startedAt) this.startedAt = now;
      const elapsed = (now - this.startedAt) / 1000 + this.replay.posterTime;
      t = this.replay.duration > 0 ? elapsed % this.replay.duration : 0;
    }
    this.paint(at(this.replay, t));
    this.raf = requestAnimationFrame((n) => this.tick(n));
  }

  start(replay) {
    this.replay = replay;
    this.hexSize = replay.hexSize;
    this.cropTo(at(replay, replay.posterTime));
    this.sizeBoard();
    drawGrid(this.grid, this.hexSize, this.crop);
    if (this.reduceMotion.matches) {
      // The *same* composed still a missing `replay.json` falls back to
      // (U4): "the hero shows the same still" either way, which a still
      // sampled from the live recording could not promise — this recording
      // ends, a fetch failure has no recording at all, and the two would
      // drift the moment either one changed.
      this.renderStill(at(replay, replay.posterTime));
      return;
    }
    this.raf = requestAnimationFrame((n) => this.tick(n));
  }

  showFallback() {
    this.renderStill(this.composedFallbackFrame());
    if (this.rigMarkup.size === 0 && this.fallback) this.fallback.hidden = false;
  }

  pause() {
    if (this.raf !== null) {
      cancelAnimationFrame(this.raf);
      this.raf = null;
    }
  }

  resume() {
    if (this.raf === null && !this.reduceMotion.matches && this.replay) {
      this.startedAt = 0;
      this.raf = requestAnimationFrame((n) => this.tick(n));
    }
  }

  observe() {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          this.visible = entry.isIntersecting;
          this.root.classList.toggle('paused', !this.visible);
          if (this.visible) this.resume();
          else this.pause();
        }
      },
      { threshold: 0 },
    );
    observer.observe(this.root);

    this.reduceMotion.addEventListener('change', () => {
      this.root.classList.toggle('paused', this.reduceMotion.matches);
      if (this.reduceMotion.matches) {
        this.pause();
        this.renderStill(at(this.replay, this.replay.posterTime));
      } else {
        this.resume();
      }
    });
  }
}

async function init() {
  const root = document.getElementById('hero-board');
  if (!root) return;
  const board = new HeroBoard(root);

  let manifest;
  try {
    manifest = await board.loadRigs('data/rigs.json');
  } catch {
    board.sizeBoard();
    drawGrid(board.grid, board.hexSize);
    if (board.fallback) board.fallback.hidden = false;
    return;
  }

  try {
    const replay = await board.loadReplay('data/replay.json');
    const poster = at(replay, replay.posterTime);
    await board.loadFrameRigs(manifest, poster);
    board.observe();
    board.start(replay);
  } catch {
    try {
      await board.loadFrameRigs(manifest, { units: [] }, FALLBACK_IDS);
      board.showFallback();
    } catch { board.showFallback(); }
  }
}

init();
