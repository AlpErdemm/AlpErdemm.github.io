import { describe, expect, it } from 'vitest';
import { MERGE_THRESHOLD, mergeProgress } from './merge.js';

/**
 * `merge.js`'s progress function, pure and headless. Sprint U task U3.
 *
 * The merge is driven by scroll position, not autoplay — the visitor performs
 * it. `mergeProgress` is the one number everything else reads: 0 while the
 * section has not yet entered the viewport, 1 once it has fully left, and
 * monotonic in between, computed from plain geometry rather than a live
 * `getBoundingClientRect()` so it is testable without a browser.
 */

const VIEWPORT = 800;
const HEIGHT = 1200;

describe('mergeProgress', () => {
  it('is 0 before the section enters and 1 after it leaves', () => {
    // Section top still below the viewport's bottom edge: not entered yet.
    expect(mergeProgress({ top: VIEWPORT, height: HEIGHT, viewportHeight: VIEWPORT })).toBe(0);
    expect(mergeProgress({ top: VIEWPORT + 400, height: HEIGHT, viewportHeight: VIEWPORT })).toBe(0);

    // Section bottom already above the viewport's top edge: fully left.
    expect(mergeProgress({ top: -HEIGHT, height: HEIGHT, viewportHeight: VIEWPORT })).toBe(1);
    expect(mergeProgress({ top: -HEIGHT - 500, height: HEIGHT, viewportHeight: VIEWPORT })).toBe(1);
  });

  it('is monotonic across the range', () => {
    const tops = [VIEWPORT, 600, 300, 0, -300, -600, -900, -HEIGHT];
    const values = tops.map((top) => mergeProgress({ top, height: HEIGHT, viewportHeight: VIEWPORT }));
    for (let i = 1; i < values.length; i++) {
      expect(values[i]).toBeGreaterThanOrEqual(values[i - 1]!);
    }
    expect(values[0]).toBe(0);
    expect(values[values.length - 1]).toBe(1);
  });

  it('resolves the star at the contracted threshold', () => {
    // MERGE_THRESHOLD is 0.5, and progress 0.5 falls at `top = -199`/`-200`
    // for this viewport and section height — worked from the same formula
    // `mergeProgress` itself uses, not a value nudged until a screenshot
    // looked right.
    const justBelow = mergeProgress({ top: -199, height: HEIGHT, viewportHeight: VIEWPORT });
    const atThreshold = mergeProgress({ top: -200, height: HEIGHT, viewportHeight: VIEWPORT });
    // Fixing the threshold as a constant, and reading progress off known
    // `top` values, is what stops it drifting into a number that only
    // happens to look right on one screen height.
    expect(justBelow).toBeLessThan(MERGE_THRESHOLD);
    expect(atThreshold).toBeGreaterThanOrEqual(MERGE_THRESHOLD);
  });
});
