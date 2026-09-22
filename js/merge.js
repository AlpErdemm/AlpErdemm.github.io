/**
 * The merge, driven by the scroll. Sprint U task U3.
 *
 * Two 1★ cards converge and resolve into one 2★ card as `#merge` scrolls
 * through the viewport — the game's core verb, performed by the visitor's own
 * scroll rather than an autoplay that would already be finished by the time
 * they arrive. `mergeProgress` is pure geometry, importable and testable with
 * no browser at all; everything below it is the DOM wiring, which only ever
 * runs when a `document` exists.
 *
 * No dependencies, no build step (decision 7) — plain ES module JavaScript.
 */

/**
 * How far through the *merge itself* the visitor is: 0 before `#merge` has
 * entered the viewport, 1 once it has fully left, monotonic in between.
 *
 * `top` and `height` are a `getBoundingClientRect()`'s own numbers — read
 * once per scroll tick, never inside this function, which is what keeps this
 * pure and keeps the caller's read/write split intact (read the rect once,
 * then only ever write `transform`/`opacity`, per the binding rule against
 * layout-triggering properties in a scroll handler).
 *
 * `(viewportHeight - top)` is 0 the instant the section's top edge reaches
 * the viewport's bottom edge (not yet entered) and grows to
 * `viewportHeight + height` the instant the section's bottom edge passes the
 * viewport's top edge (fully left) — dividing by that span and clamping to
 * `[0, 1]` is the whole function.
 */
export function mergeProgress({ top, height, viewportHeight }) {
  const span = viewportHeight + height;
  if (span <= 0) return 1;
  const raw = (viewportHeight - top) / span;
  return Math.min(Math.max(raw, 0), 1);
}

/**
 * Where, in the overall scroll-through, the merge itself finishes.
 *
 * The merge completes at the section's halfway point rather than at its very
 * end: the remaining scroll holds the resolved 2★ card steady, giving the
 * visitor a moment to read it before `#merge` scrolls away, instead of the
 * animation finishing exactly as the section leaves the viewport.
 */
export const MERGE_THRESHOLD = 0.5;

/** How far each starting card travels toward the centre, at full merge. */
const CONVERGE_PX = 84;

function initMerge(root) {
  const cardA = root.querySelector('.merge__card--a');
  const cardB = root.querySelector('.merge__card--b');
  const resolved = root.querySelector('.merge__resolved');
  const stage = root.querySelector('.merge__stage');
  if (!cardA || !cardB || !resolved || !stage) return;

  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

  function paint(p) {
    // `p` is 0..1 across the whole *merge*, already normalised by threshold.
    // `translate(-50%, -50%)` is the cards' static centring (`hero.css`);
    // this writes the whole `transform` property each frame, so the centring
    // has to ride along with whatever this frame's own offset is.
    cardA.style.transform = `translate(-50%, -50%) translateX(${p * CONVERGE_PX}px)`;
    cardB.style.transform = `translate(-50%, -50%) translateX(${p * -CONVERGE_PX}px)`;
    const cardOpacity = 1 - p;
    cardA.style.opacity = String(cardOpacity);
    cardB.style.opacity = String(cardOpacity);
    resolved.style.opacity = String(p);
    resolved.style.transform = `translate(-50%, -50%) scale(${0.85 + 0.15 * p})`;
  }

  function still() {
    // The chosen, composed frame for reduced motion: fully resolved, so a
    // visitor who never sees motion still sees the best image in the
    // section rather than the two cards it starts from.
    paint(1);
  }

  function update() {
    if (reduceMotion.matches) {
      still();
      return;
    }
    const rect = stage.getBoundingClientRect(); // the one layout read per tick
    const progress = mergeProgress({ top: rect.top, height: rect.height, viewportHeight: innerHeight });
    paint(Math.min(progress / MERGE_THRESHOLD, 1));
  }

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      update();
      ticking = false;
    });
  }

  reduceMotion.addEventListener('change', update);
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  update();
}

if (typeof document !== 'undefined') {
  const root = document.getElementById('merge');
  if (root) initMerge(root);
}
