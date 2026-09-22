import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

/**
 * The site's shell, read as text.
 *
 * Same pattern as `src/ui/uiCss.test.ts` and `src/render/units/rigLint.test.ts`
 * next door in the game: the document is a *source file* here, not a rendered
 * page, and the things worth pinning — that seven sections exist in one fixed
 * order, that no colour is authored outside `tokens.css`, that nothing points
 * at a third-party origin — are all decidable from the bytes. A vitest run
 * that answers in a second is worth more to five other agents than the same
 * assertion made in Playwright thirty seconds later.
 *
 * The site has no build step (decision 7), so what is on disk is what ships.
 */

const SITE = new URL('../', import.meta.url);
const html = (): string => readFileSync(new URL('index.html', SITE), 'utf8');

/** The section contract, in the contracted order. Orchestration doc, §1. */
const SECTIONS = ['hero', 'merge', 'roster', 'howto', 'art', 'play', 'studio'] as const;

const sectionIds = (): string[] =>
  [...html().matchAll(/<section\s+id="([a-z-]+)"/g)].map(([, id]) => id!);

describe('the site skeleton', () => {
  it('declares every contracted section exactly once', () => {
    const ids = sectionIds();
    expect([...ids].sort()).toEqual([...SECTIONS].sort());
    expect(new Set(ids).size, 'a section id is declared twice').toBe(ids.length);
  });

  it('keeps the contracted section order', () => {
    expect(sectionIds()).toEqual([...SECTIONS]);
  });

  it('names an owner in every section', () => {
    const doc = html();
    for (const id of SECTIONS) {
      const at = doc.indexOf(`<section id="${id}"`);
      expect(at, `#${id} is missing`).toBeGreaterThan(-1);
      const body = doc.slice(at, doc.indexOf('</section>', at));
      expect(body, `#${id} does not say who owns it`).toMatch(/Sprint [STUVWX] owns/);
    }
  });

  it('loads no external resource', () => {
    const refs = [...html().matchAll(/\b(?:src|href)="([^"]*)"/g)].map(([, url]) => url!);
    expect(refs.length, 'the regex found nothing — it is broken, not the document').toBeGreaterThan(0);
    for (const url of refs) {
      expect(/^(https?:)?\/\//.test(url), `${url} is a third-party origin`).toBe(false);
    }
  });

  it('marks itself as a site page', () => {
    // Vite's SPA fallback answers a missing path with the game's index.html
    // and a 200, so a mistyped path loads the *game* rather than 404ing.
    // This attribute is what lets the Playwright suite tell them apart.
    // See `tests/site/helpers.ts`.
    expect(html()).toMatch(/<html[^>]*\sdata-site="tezgah"/);
  });
});

/**
 * The tokens the contract names, and the design token in the game each is
 * lifted from.
 *
 * **This used to read `src/ui/ui.css`.** The game's stylesheet carried a
 * legacy alias layer — `--paper: var(--kt-cream-panel)` and forty more — and
 * this file resolved one hop of it to reach a hex. Ticket 01 collapsed that
 * layer onto the token names, so there is no alias left to resolve and the
 * site's own names are the last place several of them survive. The comparison
 * is made against `src/ui/tokens.css`, the sheet `src/design/tokens.ts`
 * generates, which is where those values were coming from all along.
 *
 * That makes the mapping below the site's half of the contract, written out:
 * the site keeps its own vocabulary (it is a marketing page, not the shell,
 * and `--counter` is its ground) and each name says which of the game's
 * numbers it is. The test compares *values*, so it fails the day somebody
 * retunes the awning red in the game and forgets the site sitting beside it.
 */
const CONTRACT_TOKENS: Record<string, string> = {
  'counter': 'kt-cream',
  'counter-plank': 'kt-cream',
  'counter-seam': 'kt-cream',
  'wood': 'kt-cream-well',
  'wood-dark': 'kt-cream-well',
  'wood-rim': 'kt-ink',
  'wood-lit': 'kt-cream-panel',
  'star-2': 'kt-canvas-tier2',
  'star-3': 'kt-canvas-tier3',
  'star-4': 'kt-canvas-tier4',
  'sign': 'kt-terracotta',
  'sign-dark': 'kt-terracotta-deep',
  'paper': 'kt-cream-panel',
  'paper-ink': 'kt-ink',
  'brass': 'kt-terracotta',
  'brass-lit': 'kt-terracotta-text',
  'ink': 'kt-ink',
  'dim': 'kt-ink-dim',
  /*
   * **`--display` has left the contract too, and for the opposite reason to
   * `--mono` below** (shell polish T7).
   *
   * The game's `--kt-font-display` names a **webfont** now: Baloo 2, two
   * self-hosted woff2 subsets, with the old Georgia stack still behind it as
   * the `font-display: swap` fallback (style-bible §2). This page's **binding
   * rule 6 is that it ships no web font**, and that rule is not this task's to
   * reverse — the captures were taken in these stacks, and a marketing page
   * that pulls 59KB of face to set six headings is the trade the rule exists
   * to refuse.
   *
   * So the two strings cannot be equal any more, and forcing them would mean
   * either naming a face this page does not serve or breaking rule 6. What
   * replaces the equality is the *true* relationship, asserted below rather
   * than dropped: the site's stack is the game's stack **with its webfont
   * taken off the front**. That still fails the day somebody retunes the
   * serif in `tokens.ts`, which is the whole job this row was doing.
   */
  /*
   * **`--mono` has left the contract, because the game no longer has that
   * family.** Ticket 18 retired `TYPE.family.mono`: the shell's figures are the
   * sans with tabular numerals now, and a token that resolves to a face nothing
   * in the game asks for is exactly the alias layer the note above describes.
   * The site keeps its own `--mono` — it sets `<code>`, `<kbd>` and `<samp>`,
   * which is a monospace use in the plain sense and not a game surface — and it
   * is the site's number to tune from here, like `--counter` already is.
   */
  'sans': 'kt-font-sans',
};

/** Pull `--name: value;` pairs out of the first `:root { … }` block. */
function rootTokens(css: string): Map<string, string> {
  const at = css.indexOf(':root {');
  expect(at, 'no :root block').toBeGreaterThan(-1);
  const block = css.slice(at, css.indexOf('\n}', at));
  const out = new Map<string, string>();
  for (const [, name, value] of block.matchAll(/^\s*--([a-z0-9-]+):\s*([^;]+);/gm)) {
    out.set(name!, value!.trim());
  }
  return out;
}

describe('the site palette is the game palette', () => {
  it('every token matches the game', () => {
    const kt = rootTokens(readFileSync(new URL('../src/ui/tokens.css', SITE), 'utf8'));
    const site = rootTokens(readFileSync(new URL('css/tokens.css', SITE), 'utf8'));
    expect(kt.size, 'the tokens.css :root scan found nothing — the regex is broken').toBeGreaterThan(
      20,
    );
    for (const [name, token] of Object.entries(CONTRACT_TOKENS)) {
      expect(kt.has(token), `--${token} is not declared in the game's tokens.css`).toBe(true);
      expect(site.get(name), `--${name} disagrees with the game's --${token}`).toBe(kt.get(token));
    }
  });

  /**
   * The display stack, which is the one token the site cannot simply copy —
   * see `CONTRACT_TOKENS`. The game's names a webfont in front; binding rule 6
   * says this page serves none; so the claim is that the site's stack is the
   * game's fallback exactly, and that the game's addition is a single face.
   */
  it("sets its display stack to the game's, less the webfont rule 6 forbids", () => {
    const kt = rootTokens(readFileSync(new URL('../src/ui/tokens.css', SITE), 'utf8'));
    const site = rootTokens(readFileSync(new URL('css/tokens.css', SITE), 'utf8'));
    const game = kt.get('kt-font-display')!;
    const here = site.get('display')!;
    expect(game, "the game's display token is gone").toBeTruthy();
    expect(
      game.endsWith(here),
      `--display is "${here}" and the game's is "${game}" — the site's stack has to be the ` +
        "game's fallback tail exactly, so a retuned serif still fails here",
    ).toBe(true);
    // And the difference is one face, not a divergent stack: the game may put
    // a webfont in front of the shared fallback and nothing else.
    const front = game.slice(0, game.length - here.length).replace(/,\s*$/, '').trim();
    expect(front.split(',').filter(Boolean), `the game adds more than one face: ${front}`)
      .toHaveLength(1);
    expect(here, 'this page has grown a face of its own').not.toContain('Baloo');
  });

  it('defines no colour outside tokens.css', () => {
    const dir = new URL('css/', SITE);
    const sheets = readdirSync(dir).filter((f) => f.endsWith('.css') && f !== 'tokens.css');
    expect(sheets.length, 'no stylesheet besides tokens.css').toBeGreaterThan(0);
    for (const file of sheets) {
      // Comments are prose, and prose names colours. Strip them first.
      const code = readFileSync(new URL(file, dir), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
      expect(code.match(/#[0-9a-fA-F]{3,8}\b/g) ?? [], `${file} authors a hex colour; use var(--token)`).toEqual([]);
      expect(code.match(/\b(?:rgba?|hsla?)\(/g) ?? [], `${file} authors an rgb()/hsl() colour; use var(--token)`).toEqual([]);
    }
  });
});

/**
 * The unfurl is the first impression.
 *
 * The publisher pastes this link into Slack, and what renders there happens
 * *before* anyone clicks. An Open Graph set that is one tag short renders as
 * a bare URL, which is why this is asserted rather than eyeballed.
 */
describe('the social card', () => {
  const meta = (attr: 'property' | 'name', key: string): string | undefined => {
    const tag = html().match(new RegExp(`<meta[^>]*\\b${attr}="${key}"[^>]*>`));
    return tag?.[0].match(/content="([^"]*)"/)?.[1];
  };

  it('declares the full social card set', () => {
    for (const key of ['og:title', 'og:description', 'og:image', 'og:url', 'og:type']) {
      expect(meta('property', key), `${key} is missing or empty`).toBeTruthy();
    }
    expect(meta('name', 'twitter:card'), 'twitter:card is missing').toBeTruthy();
    expect(meta('name', 'description'), 'meta description is missing').toBeTruthy();
  });

  it('points og:image at a committed file', () => {
    const src = meta('property', 'og:image');
    expect(src, 'og:image is missing').toBeTruthy();
    // An absolute URL is right for a crawler — it does not resolve relative
    // paths the way a browser does — but the file has to be in the repo.
    const path = src!.replace(/^https?:\/\/[^/]+\//, '').replace(/^\/?site\//, '');
    expect(existsSync(new URL(path, SITE)), `${src} is not a committed file`).toBe(true);
  });

  it('sets a favicon', () => {
    expect(html(), 'no favicon link').toMatch(/<link[^>]*rel="icon"[^>]*>/);
  });

  it('draws the wordmark inline, with no font and no request', () => {
    const doc = html();
    const at = doc.indexOf('class="masthead__mark"');
    expect(at, 'no wordmark in the masthead').toBeGreaterThan(-1);
    const mark = doc.slice(at, doc.indexOf('</h1>', at));
    expect(mark, 'the wordmark is not inline SVG').toContain('<svg');
    expect(mark, 'the wordmark does not say Tezgah').toMatch(/Tezgah/);
  });
});

/**
 * The deploy path, written here so it is reviewable before Sprint X needs it.
 *
 * There is no YAML parser in this repo and the site is not worth adding a
 * dependency for, so "it parses" is asserted structurally: no tab character
 * (YAML forbids them outright, and a tab is the one way a hand-written
 * workflow silently fails to load), plus the four things the file has to say.
 */
describe('the Pages workflow', () => {
  const workflow = (): string => readFileSync(new URL('../.github/workflows/pages.yml', SITE), 'utf8');

  it('is valid enough YAML to load', () => {
    const yml = workflow();
    expect(yml.includes('\t'), 'a tab character — YAML will refuse to load this').toBe(false);
    expect(yml, 'no top-level jobs').toMatch(/^jobs:$/m);
    expect(yml, 'no trigger').toMatch(/^on:$/m);
  });

  it('publishes site/ and nothing else', () => {
    const yml = workflow();
    expect(yml).toContain('actions/upload-pages-artifact');
    expect(yml).toContain('actions/deploy-pages');
    expect(yml).toMatch(/path:\s*site\s*$/m);
  });

  it('has no build step', () => {
    // Decision 7. A node setup or an install step here would mean somebody
    // decided the site needs building after all, which is a contract change.
    // Comment lines are stripped first — the file's own header explains the
    // rule, and naming a thing is not doing it.
    const code = workflow()
      .split('\n')
      .filter((line) => !/^\s*#/.test(line))
      .join('\n');
    expect(code, 'the workflow sets up node').not.toContain('setup-node');
    expect(code, 'the workflow runs npm').not.toMatch(/\bnpm\b/);
    expect(code, 'the workflow runs a build').not.toMatch(/\brun:\s*.*\bbuild\b/);
  });

  it('says out loud that it does not run in this repo', () => {
    expect(workflow().slice(0, 900)).toMatch(/does not run|never runs|not run in this repo/i);
  });

  it('asks to be indexed', () => {
    const robots = readFileSync(new URL('robots.txt', SITE), 'utf8');
    expect(robots).toMatch(/^User-agent:\s*\*$/m);
    expect(robots, 'a bare Disallow: / would hide the whole point of the page').toMatch(/^Disallow:\s*$/m);
  });
});
