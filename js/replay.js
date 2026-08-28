/**
 * The replay module: pure and headless. Sprint U task U1.
 *
 * `site/data/replay.json` (the data contract, owned by Sprint T) is one
 * recorded match: a sequence of timestamped frames, each a snapshot of every
 * unit's board position, health and animation state. This module turns that
 * into "what does the board look like at time t", without ever touching a
 * `document` or a `window` — the whole point is to make the hard arithmetic
 * (frame lookup, interpolation, hex-to-pixel) testable in milliseconds under
 * node, so it can be iterated on far faster than anything that needs a
 * browser. `site/js/hero.js` is the only thing that ever wires this to the
 * DOM.
 *
 * No dependencies, no build step (decision 7) — plain ES module JavaScript,
 * imported directly by the browser exactly as authored.
 */

/**
 * `hexToPixel`'s source of truth is `src/render/layout.ts:10-16,141-147`:
 * pointy-top hexes in an "odd-r" offset layout, sized off one `hexSize`.
 * Reproduced here rather than imported — this module has no dependency on
 * `src/**`, per this sprint's file ownership — and evaluated at the game's
 * `BOARD_X = BOARD_Y = 0`: the site draws its own board rather than reusing
 * the game's 430x448 phone canvas, so only the *relative* formula is
 * reproduced, not the game's own margins. `site/js/hero.js` adds whatever
 * origin its own SVG viewport needs.
 */
function hexW(hexSize) {
  return Math.sqrt(3) * hexSize;
}

function rowStep(hexSize) {
  return 1.5 * hexSize;
}

/** Axial (q, r) -> offset (col, row), "odd-r": `src/core/hex.ts:229-231`. */
function toOffset(q, r) {
  return { col: q + ((r - (r & 1)) >> 1), row: r };
}

/** Axial hex -> local pixel, board origin at (0, 0). */
export function hexToPixel(hex, hexSize) {
  const { col, row } = toOffset(hex.q, hex.r);
  const w = hexW(hexSize);
  return {
    x: w * (col + 0.5 * (row & 1)) + w / 2,
    y: rowStep(hexSize) * row + hexSize,
  };
}

/**
 * A loaded replay: the raw frames (sorted by `t`, which the recorder already
 * guarantees, but a defensive copy costs nothing at this size) plus the
 * derived `duration` — the last frame's timestamp, and the point `at()`
 * clamps to. A replay authored to loop seamlessly repeats its first frame's
 * state as its last, so `at(duration)` and `at(0)` read identically; that is
 * a property of the *data*, not something this loader enforces.
 */
export function load(data) {
  const frames = [...data.frames].sort((a, b) => a.t - b.t);
  return {
    hexSize: data.hexSize,
    frames,
    duration: frames.length > 0 ? frames[frames.length - 1].t : 0,
  };
}

/** Binary search: the index of the last frame with `frame.t <= t`, or -1. */
function floorIndex(frames, t) {
  let lo = 0;
  let hi = frames.length - 1;
  let result = -1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (frames[mid].t <= t) {
      result = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return result;
}

/** Linear interpolation, unclamped — callers already know `k` is in [0, 1]. */
function lerp(a, b, k) {
  return a + (b - a) * k;
}

/**
 * The board at time `t`, clamped to `[0, replay.duration]` and interpolated
 * between the two frames that straddle it.
 *
 * Position (`q`, `r`) and `hp` are continuous and lerp; `id`, `side` and
 * `anim` are discrete and are read from the earlier ("floor") frame — a unit
 * halfway between `walk` and `atk` is `walk`, never a blend of the two names,
 * which is what a CSS animation class has to be. A unit present in the floor
 * frame but absent from the next one (or vice versa) is not interpolated —
 * it holds the one frame's values it has.
 */
export function at(replay, t) {
  const { frames, duration } = replay;
  const clamped = Math.min(Math.max(t, 0), duration);

  const i = floorIndex(frames, clamped);
  const floor = frames[Math.max(i, 0)];
  const next = frames[i + 1];

  if (!next || i < 0) {
    return { t: clamped, units: floor.units.map((u) => ({ ...u })) };
  }

  const span = next.t - floor.t;
  const k = span <= 0 ? 0 : (clamped - floor.t) / span;

  const nextById = new Map(next.units.map((u) => [u.id, u]));
  const units = floor.units.map((u) => {
    const partner = nextById.get(u.id);
    if (!partner) return { ...u };
    return {
      ...u,
      q: lerp(u.q, partner.q, k),
      r: lerp(u.r, partner.r, k),
      hp: lerp(u.hp, partner.hp, k),
    };
  });

  return { t: clamped, units };
}
