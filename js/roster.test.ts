import { describe, expect, it } from 'vitest';
import { attackDurStyle, buildCards, buildStyleTiles, sortedUnits } from './roster.js';

/**
 * The card builder, pure. No `document`, no network — see the file's own
 * header for why: this is the layer `mountRoster` sits on top of, and the
 * layer that has to survive T's fixture widening from 3 units to 26 (and
 * eventually 28) with no code change here.
 */

const manifest = {
  version: 1,
  units: [
    { id: 'sis', svg: 'assets/rigs/sis.svg', tier: 5, traits: ['ocak', 'oncu'], attackDur: 1.25 },
    { id: 'misir', svg: 'assets/rigs/misir.svg', tier: 3, traits: ['ocak', 'nisanci'], attackDur: 0.9 },
    { id: 'kestane', svg: 'assets/rigs/kestane.svg', tier: 2, traits: ['ocak', 'suikastci'], attackDur: 1.15 },
    { id: 'kofte', svg: 'assets/rigs/kofte.svg', tier: 4, traits: ['ocak', 'dovuscu'], attackDur: 0.9 },
  ],
};

describe('sortedUnits', () => {
  it('orders by tier then id, stably', () => {
    const ids = sortedUnits(manifest.units).map((u) => u.id);
    expect(ids).toEqual(['kestane', 'misir', 'kofte', 'sis']);
  });
});

describe('buildCards', () => {
  it('builds one card per unit', () => {
    expect(buildCards(manifest)).toHaveLength(manifest.units.length);
  });

  it('orders by tier then id — the section must not reshuffle between loads', () => {
    const cards = buildCards(manifest);
    expect(cards.map((c) => c.id)).toEqual(['kestane', 'misir', 'kofte', 'sis']);
  });

  it("carries the attack duration onto the card, per unit, off the manifest — not a shared default", () => {
    const cards = buildCards(manifest);
    const byId = Object.fromEntries(cards.map((c) => [c.id, c]));
    expect(byId.misir.attackDur).toBe(0.9);
    expect(byId.sis.attackDur).toBe(1.25);
    expect(attackDurStyle(byId.misir)).toBe('--dur-atk: 0.9s');
    expect(attackDurStyle(byId.sis)).toBe('--dur-atk: 1.25s');
    // Two units, two different durations — a single shared duration would
    // make every character attack at the same speed.
    expect(attackDurStyle(byId.misir)).not.toBe(attackDurStyle(byId.sis));
  });

  it('keys every label through i18n — never literal-only text', () => {
    for (const card of buildCards(manifest)) {
      expect(card.nameKey, `${card.id} has no i18n key for its name`).toBe(`content.unit.${card.id}.name`);
      expect(card.tierKey, `${card.id} has no i18n key for its tier`).toBe(`roster.tier.${card.tier}`);
      expect(card.traits.length, `${card.id} has no traits to key`).toBeGreaterThan(0);
      for (const trait of card.traits) {
        expect(trait.key, `${card.id}'s trait ${trait.id} has no i18n key`).toBe(`content.trait.${trait.id}`);
      }
      // A fallback has to exist too — the contract's own example ships text
      // alongside the key (`<h2 data-i18n="roster.title">The Roster</h2>`),
      // so the page still reads before Sprint W's engine ever runs.
      expect(card.nameFallback.length).toBeGreaterThan(0);
      expect(card.tierFallback.length).toBeGreaterThan(0);
    }
  });

  it('gives the economy jar and the summon an empty trait list rather than inventing one', () => {
    const withNoAxis = {
      version: 1,
      units: [{ id: 'balkavanozu', svg: 'assets/rigs/balkavanozu.svg', tier: 3, traits: [], attackDur: 0 }],
    };
    const [card] = buildCards(withNoAxis);
    expect(card.traits).toEqual([]);
  });
});

describe('buildStyleTiles', () => {
  const styles = {
    version: 1,
    styles: [
      { id: 'neon', file: 'assets/styles/neon.svg', name: 'Neon', note: 'x', chosen: false },
      { id: 'defter', file: 'assets/styles/defter.svg', name: 'Defter', note: 'x', chosen: false },
      { id: 'tezgah', file: 'assets/styles/tezgah.svg', name: 'Tezgah', note: 'x', chosen: true },
    ],
  };

  it('shows all seven directions — count equals the manifest length', () => {
    expect(buildStyleTiles(styles)).toHaveLength(styles.styles.length);
  });

  it('marks exactly one as chosen', () => {
    const chosen = buildStyleTiles(styles).filter((s) => s.chosen);
    expect(chosen).toHaveLength(1);
  });

  it('names Tezgah as the chosen one', () => {
    const [chosen] = buildStyleTiles(styles).filter((s) => s.chosen);
    expect(chosen!.id).toBe('tezgah');
  });
});
