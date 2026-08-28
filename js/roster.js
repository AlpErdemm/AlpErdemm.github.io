/**
 * Sprint V — the roster gallery, and the art strip.
 *
 * `#howto` is plain, static markup in `index.html`: four or five steps, each
 * an image plus a heading plus at most two sentences, and none of it needs a
 * manifest to build. This file wires the two sections that *do* — `#roster`
 * from `data/rigs.json`, `#art` from `data/styles.json` — so both widen for
 * free the day Sprint T's real fixtures replace the placeholders committed
 * alongside this file (see the note at the top of `data/rigs.json`'s
 * neighbours).
 *
 * **Pure first, DOM second.** `sortedUnits` and `buildCards` take a manifest
 * and return plain data — no `document`, no network — so `roster.test.ts` can
 * exercise them under plain Node. Everything below `mountRoster` touches the
 * page and is exercised by `tests/site/roster.spec.ts` instead.
 *
 * **Inline SVG is the requirement, not a preference.** An `<img src>` cannot
 * be reached by `anim.css` — animating a rig means the rig's own markup is in
 * the DOM. `mountRoster` fetches each unit's SVG text once (`svgCache` dedupes
 * concurrent requests for the same unit) and parses it with `DOMParser`.
 *
 * **Lazy by design.** 26-odd inline SVGs is real weight for a page nobody
 * asked to load yet, so cards below the fold mount on approach
 * (`IntersectionObserver`), not on page load.
 */

// -------------------------------------------------------------- pure layer

/** Stable order: cheapest first, alphabetical within a cost. Never reshuffles. */
export function sortedUnits(units) {
  return [...units].sort((a, b) => a.tier - b.tier || a.id.localeCompare(b.id));
}

function titleCase(id) {
  return id.charAt(0).toUpperCase() + id.slice(1);
}

/**
 * A unit manifest entry -> the plain view-model a card is built from.
 * Every label carries an i18n key (contract §4) plus a readable fallback —
 * the same shape the contract's own `<h2 data-i18n="roster.title">The
 * Roster</h2>` example uses, so the page reads correctly before
 * `site/js/i18n.js` (Sprint W) ever runs `applyTo()` on it.
 */
export function buildCards(manifest) {
  return sortedUnits(manifest.units).map((unit) => ({
    id: unit.id,
    tier: unit.tier,
    attackDur: unit.attackDur,
    svg: unit.svg,
    nameKey: `content.unit.${unit.id}.name`,
    nameFallback: titleCase(unit.id),
    tierKey: `roster.tier.${unit.tier}`,
    tierFallback: `Cost ${unit.tier}`,
    traits: unit.traits.map((trait) => ({
      id: trait,
      key: `content.trait.${trait}`,
      fallback: titleCase(trait),
    })),
  }));
}

/** The inline custom property a card's rig root carries — one source of truth. */
export function attackDurStyle(card) {
  return `--dur-atk: ${card.attackDur}s`;
}

/** `styles.json` entries, unchanged bar a stable sort so the strip doesn't reshuffle. */
export function buildStyleTiles(manifest) {
  return [...manifest.styles].sort((a, b) => a.id.localeCompare(b.id));
}

// --------------------------------------------------------------- DOM layer

const REDUCED_MOTION = () =>
  typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Wires the hover/focus attack cycle onto one mounted rig.
 *
 * The same listener serves `:hover` and `:focus-visible` — `pointerenter` and
 * `focus` both call `playAttack`.
 *
 * **Not `animationend` — measured, not assumed.** Every attack sub-animation
 * in `anim.css` (`atkBody`, `atkShadow`, every `data-atk` archetype clip) is
 * declared `infinite`, on purpose: the engine holds `.st-attack` across
 * however many consecutive attack ticks a unit takes, so the *pose* loops for
 * as long as the state persists rather than playing once. `animationend`
 * therefore never fires for it — confirmed red in `tests/site/roster.spec.ts`
 * ("returns to idle once the attack finishes") before this was written this
 * way. A timer is the only mechanism left, and it stays per-unit: it reads
 * the same `--dur-atk` custom property `attackDurStyle` already put on this
 * rig root in V1, not a shared constant, so it cannot drift between units the
 * way a single hardcoded delay would.
 *
 * A unit whose rig carries `data-atk="none"` (the economy jar) has no attack
 * clip to play at all, so it is left untouched — it never attacks in the game
 * either. Under reduced motion, hovering does nothing: the binding rule is a
 * static fallback, not a stall.
 */
function wireAttackCycle(rigRoot) {
  if (rigRoot.dataset.atk === 'none') return;
  let attacking = false;
  const attackSeconds = () => {
    const n = parseFloat(getComputedStyle(rigRoot).getPropertyValue('--dur-atk'));
    return Number.isFinite(n) && n > 0 ? n : 1.5;
  };
  const playAttack = () => {
    if (attacking || REDUCED_MOTION()) return;
    attacking = true;
    rigRoot.classList.remove('st-idle');
    rigRoot.classList.add('st-attack');
    setTimeout(() => {
      rigRoot.classList.remove('st-attack');
      rigRoot.classList.add('st-idle');
      attacking = false;
    }, attackSeconds() * 1000);
  };
  const card = rigRoot.closest('.card');
  (card ?? rigRoot).addEventListener('pointerenter', playAttack);
  (card ?? rigRoot).addEventListener('focus', playAttack);
}

/** Fetches and parses one rig's SVG text, once, no matter how many cards ask. */
function svgLoader(fetchText) {
  const cache = new Map();
  return (path) => {
    if (!cache.has(path)) {
      cache.set(
        path,
        fetchText(path).then((text) => {
          const parsed = new DOMParser().parseFromString(text, 'image/svg+xml');
          return parsed.documentElement;
        }),
      );
    }
    return cache.get(path).then((el) => el.cloneNode(true));
  };
}

function chip(trait) {
  const el = document.createElement('span');
  el.className = 'card__chip';
  el.dataset.i18n = trait.key;
  el.textContent = trait.fallback;
  return el;
}

function buildCardElement(card, loadSvg) {
  const li = document.createElement('li');
  li.className = 'card';
  li.dataset.unit = card.id;
  li.tabIndex = 0;
  li.setAttribute('aria-label', card.nameFallback);

  const tier = document.createElement('span');
  tier.className = 'card__tier';
  tier.dataset.i18n = card.tierKey;
  tier.textContent = card.tierFallback;
  li.appendChild(tier);

  const rigSlot = document.createElement('div');
  rigSlot.className = 'card__rig';
  rigSlot.setAttribute('aria-hidden', 'true');
  li.appendChild(rigSlot);

  const name = document.createElement('span');
  name.className = 'card__name';
  name.dataset.i18n = card.nameKey;
  name.textContent = card.nameFallback;
  li.appendChild(name);

  const traits = document.createElement('span');
  traits.className = 'card__traits';
  for (const trait of card.traits) traits.appendChild(chip(trait));
  li.appendChild(traits);

  li.dataset.mount = 'pending';
  li.__mount = () => {
    if (li.dataset.mount !== 'pending') return Promise.resolve();
    li.dataset.mount = 'loading';
    return loadSvg(card.svg).then((svg) => {
      svg.classList.add('st-idle');
      svg.setAttribute('style', `${svg.getAttribute('style') ?? ''};${attackDurStyle(card)}`);
      rigSlot.appendChild(svg);
      wireAttackCycle(svg);
      li.dataset.mount = 'done';
    });
  };

  return li;
}

/**
 * Cards near the viewport mount as soon as the browser notices them — that's
 * the perceived-performance win. But a card that never scrolls into view
 * (or a test that never scrolls at all) still needs to end up rendered: the
 * gallery's own contract is "every unit is inline SVG", not "every unit you
 * happened to look at". So idle time (or, failing that, a short timer) mounts
 * whatever the observer hasn't gotten to yet — lazy for the common case,
 * complete for every case.
 */
function lazyMount(cards, IO) {
  if (typeof IO !== 'function') {
    for (const card of cards) card.__mount();
    return;
  }
  const observer = new IO(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.__mount();
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '200px' },
  );
  for (const card of cards) observer.observe(card);

  const mountRest = () => {
    observer.disconnect();
    for (const card of cards) card.__mount();
  };
  if (typeof requestIdleCallback === 'function') {
    requestIdleCallback(mountRest, { timeout: 2000 });
  } else {
    setTimeout(mountRest, 300);
  }
}

/**
 * Fetches `data/rigs.json` and populates `#roster`'s `.roster__grid`.
 *
 * `deps` is overridable so a future test harness can supply fakes without
 * touching the network or the real DOM timing — the default wires the real
 * browser globals.
 */
export async function mountRoster(section, deps = {}) {
  const {
    fetchJSON = (url) => fetch(url).then((r) => r.json()),
    fetchText = (url) => fetch(url).then((r) => r.text()),
    IntersectionObserverCtor = typeof IntersectionObserver === 'function' ? IntersectionObserver : null,
  } = deps;

  const grid = section.querySelector('.roster__grid');
  if (!grid) return;

  const manifest = await fetchJSON('data/rigs.json');
  const cards = buildCards(manifest);
  const loadSvg = svgLoader(fetchText);
  const elements = cards.map((card) => buildCardElement(card, loadSvg));
  for (const el of elements) grid.appendChild(el);
  lazyMount(elements, IntersectionObserverCtor);
  return elements;
}

function buildStyleTile(entry) {
  const li = document.createElement('li');
  li.className = 'style-tile' + (entry.chosen ? ' style-tile--chosen' : '');
  li.dataset.style = entry.id;

  const img = document.createElement('img');
  img.className = 'style-tile__image';
  img.src = entry.file;
  img.alt = `${entry.name} — an early art direction for Kitchen Tactics`;
  img.width = 320;
  img.height = 200;
  img.loading = 'lazy';
  li.appendChild(img);

  const name = document.createElement('span');
  name.className = 'style-tile__name';
  name.textContent = entry.name;
  li.appendChild(name);

  if (entry.chosen) {
    const badge = document.createElement('span');
    badge.className = 'style-tile__badge';
    badge.dataset.i18n = 'art.chosenLabel';
    badge.textContent = 'Chosen';
    li.appendChild(badge);
  }

  const note = document.createElement('p');
  note.className = 'style-tile__note';
  note.textContent = entry.note;
  li.appendChild(note);

  return li;
}

/** Fetches `data/styles.json` and populates `#art`'s `.art__strip`. */
export async function mountArt(section, deps = {}) {
  const { fetchJSON = (url) => fetch(url).then((r) => r.json()) } = deps;

  const strip = section.querySelector('.art__strip');
  if (!strip) return;

  const manifest = await fetchJSON('data/styles.json');
  for (const entry of buildStyleTiles(manifest)) {
    strip.appendChild(buildStyleTile(entry));
  }
}

// ------------------------------------------------------------------- boot

/** Guarded so importing this module for its pure functions never boots the page. */
function init() {
  const roster = document.getElementById('roster');
  const art = document.getElementById('art');
  if (roster) mountRoster(roster).catch((err) => console.error('roster: failed to mount', err));
  if (art) mountArt(art).catch((err) => console.error('art: failed to mount', err));
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}
