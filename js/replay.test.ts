import { describe, expect, it } from 'vitest';
import { at, hexToPixel, load } from './replay.js';

/**
 * `replay.js`, pure and headless. Sprint U task U1.
 *
 * Everything here runs against a small hand-written frame array rather than
 * `site/data/replay.json` — that file is Sprint T's fixture and this module's
 * whole point is to be correct arithmetic no matter what recording it is
 * eventually handed. `hexToPixel` reproduces `src/render/layout.ts:141-147`'s
 * formula (`toOffset` + the odd-r pointy-top layout), with the board's own
 * `BOARD_X`/`BOARD_Y` phone-canvas margins left at the caller (the site draws
 * its own board, not the game's 430x448 canvas), so the values below are the
 * game's formula evaluated at local origin (0, 0).
 */

const FIXTURE = {
  version: 1,
  hexSize: 26,
  frames: [
    { t: 0, units: [{ id: 'a', q: 0, r: 0, side: 'mine', hp: 1, anim: 'walk' }] },
    { t: 1, units: [{ id: 'a', q: 2, r: 0, side: 'mine', hp: 0.5, anim: 'atk' }] },
    // The last frame deliberately repeats the first frame's state: a replay
    // that loops seamlessly is authored to, not detected after the fact —
    // see the "loops cleanly" test below.
    { t: 2, units: [{ id: 'a', q: 0, r: 0, side: 'mine', hp: 1, anim: 'walk' }] },
  ],
} as const;

describe('replay.js', () => {
  it('returns the exact frame at an exact timestamp', () => {
    const replay = load(FIXTURE);
    const frame = at(replay, 1);
    expect(frame.units).toEqual([{ id: 'a', q: 2, r: 0, side: 'mine', hp: 0.5, anim: 'atk' }]);
  });

  it('interpolates position between frames', () => {
    const replay = load(FIXTURE);
    const frame = at(replay, 0.5);
    const unit = frame.units.find((u) => u.id === 'a')!;
    expect(unit.q).toBeCloseTo(1, 10);
    expect(unit.r).toBeCloseTo(0, 10);
    expect(unit.hp).toBeCloseTo(0.75, 10);
  });

  it('does not interpolate the animation class', () => {
    const replay = load(FIXTURE);
    // Halfway between frame 0 (walk) and frame 1 (atk): the discrete state is
    // the one the interval started from, never a blend of the two names.
    const unit = at(replay, 0.5).units.find((u) => u.id === 'a')!;
    expect(unit.anim).toBe('walk');
    // An instant after frame 1 begins, the state has switched wholesale.
    const justAfter = at(replay, 1.001).units.find((u) => u.id === 'a')!;
    expect(justAfter.anim).toBe('atk');
  });

  it('clamps before the first and after the last frame', () => {
    const replay = load(FIXTURE);
    expect(at(replay, -5)).toEqual(at(replay, 0));
    expect(at(replay, 500)).toEqual(at(replay, 2));
  });

  it('loops cleanly', () => {
    const replay = load(FIXTURE);
    // The hero runs forever, wrapping elapsed time modulo the duration; a
    // seam at the loop point is the first thing a visitor would notice, so
    // the boundary frames' *rendered state* must read identically. (`t`
    // itself legitimately differs — 0 versus the duration — so only the
    // units are compared.)
    expect(at(replay, replay.duration).units).toEqual(at(replay, 0).units);
  });

  it('converts hex to pixel the way the game does', () => {
    // src/render/layout.ts:141-147, evaluated at BOARD_X = BOARD_Y = 0 —
    // the site draws its own board, not the game's phone canvas, so only the
    // relative formula is reproduced, not the game's own margins.
    expect(hexToPixel({ q: 0, r: 0 }, 26)).toEqual({ x: 22.516660498395403, y: 26 });
    expect(hexToPixel({ q: 1, r: 0 }, 26)).toEqual({ x: 67.54998149518622, y: 26 });
    expect(hexToPixel({ q: 0, r: 1 }, 26)).toEqual({ x: 45.033320996790806, y: 65 });
  });

  it('touches no DOM', () => {
    // Enforced by running under vitest's default node environment (see
    // vite.config.ts) rather than jsdom: this test simply proves the module
    // is importable and usable with neither global defined.
    expect(typeof document).toBe('undefined');
    expect(typeof window).toBe('undefined');
  });
});
