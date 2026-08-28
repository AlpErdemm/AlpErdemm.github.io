import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { MAX_ORIGIN_NAME_CHARS, ORIGIN_IDS } from '../../src/core/content/origins.js';
import { MAX_ROLE_NAME_CHARS, ROLE_IDS } from '../../src/core/content/roles.js';
import { MAX_UNIT_NAME_CHARS } from '../../src/core/content/units.js';

/**
 * Task W3 — the English roster, and the highest-stakes task in the pass
 * (decision 10: whatever ships here is canonical).
 *
 * **Why this reads from `../../locales/` (the game's own, at the repo root)
 * rather than parsing `src/core/content/units.ts` for literal strings.** The
 * sprint plan was written to assume `units.ts` still carried literal Turkish
 * name/flavor strings; by the time this sprint runs, an earlier "Poki
 * publish" pass (see `docs/superpowers/plans/2026-08-28-poki-publish-roadmap.md`)
 * had already moved every one of those strings behind `t()`, reading from
 * `locales/{en,tr}/content.json` at the repo root — `units.ts:17-31`'s
 * `contentUnit()` getter is the whole of it. There is no literal Turkish left
 * in `units.ts` to compare against, so "keeps Turkish unchanged" is checked
 * against the file that is actually now the shipped copy.
 *
 * **This is also why the site's own English roster reuses the game's own
 * already-shipped English names** (`locales/en/content.json`) rather than
 * inventing a second set: those names were authored, reviewed and are already
 * live in the build. A second, different English roster on the site would
 * *contradict* the canonical roster instead of leading it, which is the
 * opposite of decision 10's intent. See the sprint's work-done notes for the
 * full reasoning and the finding this produced for the orchestration session.
 */

const ROOT = fileURLToPath(new URL('../../', import.meta.url));
const SITE_LOCALES = fileURLToPath(new URL('../locales/', import.meta.url));
const GAME_LOCALES = `${ROOT}locales/`;

const readJson = (path: string): Record<string, string> => JSON.parse(readFileSync(path, 'utf8')) as Record<string, string>;

const siteContent = (loc: string) => readJson(`${SITE_LOCALES}${loc}/content.json`);
const gameContent = (loc: string) => readJson(`${GAME_LOCALES}${loc}/content.json`);

/** Every unit id the game actually ships a rig for — `props/` and `skills/` are not units. */
function unitIds(): string[] {
  const dir = `${ROOT}src/render/units/`;
  return readdirSync(dir).filter((name) => existsSync(`${dir}${name}/rig.svg`));
}

describe('the English roster', () => {
  it('names every unit the game has', () => {
    const ids = unitIds();
    expect(ids.length, 'the rig scan found nothing — it is broken, not the roster').toBeGreaterThan(0);
    const en = siteContent('en');
    const tr = siteContent('tr');
    for (const id of ids) {
      expect(en[`content.unit.${id}.name`], `en is missing content.unit.${id}.name`).toBeTruthy();
      expect(tr[`content.unit.${id}.name`], `tr is missing content.unit.${id}.name`).toBeTruthy();
    }
  });

  it('fits the card', () => {
    const en = siteContent('en');
    for (const id of unitIds()) {
      const name = en[`content.unit.${id}.name`]!;
      expect(name.length, `"${name}" (${id}) exceeds MAX_UNIT_NAME_CHARS=${MAX_UNIT_NAME_CHARS}`).toBeLessThanOrEqual(
        MAX_UNIT_NAME_CHARS,
      );
    }
    for (const id of ORIGIN_IDS) {
      const name = en[`content.origin.${id}.name`]!;
      expect(name.length, `"${name}" (${id}) exceeds MAX_ORIGIN_NAME_CHARS=${MAX_ORIGIN_NAME_CHARS}`).toBeLessThanOrEqual(
        MAX_ORIGIN_NAME_CHARS,
      );
    }
    for (const id of ROLE_IDS) {
      const name = en[`content.role.${id}.name`]!;
      expect(name.length, `"${name}" (${id}) exceeds MAX_ROLE_NAME_CHARS=${MAX_ROLE_NAME_CHARS}`).toBeLessThanOrEqual(
        MAX_ROLE_NAME_CHARS,
      );
    }
  });

  /**
   * A denylist of literal, dictionary-style renderings explicitly rejected
   * during authoring — crude, and it is the cheapest possible guard against
   * the exact failure mode this task exists to avoid (`Börek` becoming "Meat
   * Pastry", not "Strudel").
   */
  const REJECTED = new Set([
    'meat pastry',
    'cotton candy',
    'sour cherry',
    'pickle juice',
    'fried dough',
    'grape leaf',
    'corn',
    'sweet corn',
  ]);

  it('is not a machine translation', () => {
    const en = siteContent('en');
    for (const id of unitIds()) {
      const name = en[`content.unit.${id}.name`]!;
      expect(REJECTED.has(name.toLowerCase()), `"${name}" (${id}) is on the rejected-literal-translation list`).toBe(
        false,
      );
    }
  });

  it('has no duplicate names within a locale', () => {
    for (const loc of ['en', 'tr']) {
      const content = siteContent(loc);
      const names = unitIds().map((id) => content[`content.unit.${id}.name`]);
      expect(new Set(names).size, `${loc}: two units share a name`).toBe(names.length);
    }
  });

  it('keeps Turkish unchanged from the game\'s own shipped copy', () => {
    const site = siteContent('tr');
    const game = gameContent('tr');
    for (const id of unitIds()) {
      expect(site[`content.unit.${id}.name`], `content.unit.${id}.name`).toBe(game[`content.unit.${id}.name`]);
      expect(site[`content.unit.${id}.flavor`], `content.unit.${id}.flavor`).toBe(game[`content.unit.${id}.flavor`]);
    }
    for (const id of ORIGIN_IDS) {
      expect(site[`content.origin.${id}.name`], `content.origin.${id}.name`).toBe(game[`content.origin.${id}.name`]);
      expect(site[`content.origin.${id}.description`], `content.origin.${id}.description`).toBe(
        game[`content.origin.${id}.description`],
      );
    }
    for (const id of ROLE_IDS) {
      expect(site[`content.role.${id}.name`], `content.role.${id}.name`).toBe(game[`content.role.${id}.name`]);
      expect(site[`content.role.${id}.description`], `content.role.${id}.description`).toBe(
        game[`content.role.${id}.description`],
      );
    }
  });
});
