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
 * The tokens the contract names, and the `src/ui/ui.css` line each is lifted
 * from. Line numbers are documentation — the test compares *values*, so it
 * keeps working when `ui.css` grows a paragraph, and fails the day somebody
 * retunes the awning red in the game and forgets the site sitting beside it.
 */
const CONTRACT_TOKENS = [
  'counter', 'counter-plank', 'counter-seam',   // ui.css:30-32
  'wood', 'wood-dark', 'wood-rim', 'wood-lit',  // ui.css:35-38
  'star-2', 'star-3', 'star-4',                 // ui.css:54, 55, 58
  'sign', 'sign-dark',                          // ui.css:74-75
  'paper', 'paper-ink',                         // ui.css:78, 80
  'brass', 'brass-lit',                         // ui.css:84-85
  'ink', 'dim',                                 // ui.css:89-90
  'display', 'mono', 'sans',                    // ui.css:92, 93, 97
] as const;

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
    const game = rootTokens(readFileSync(new URL('../src/ui/ui.css', SITE), 'utf8'));
    const site = rootTokens(readFileSync(new URL('css/tokens.css', SITE), 'utf8'));
    expect(game.size, 'the ui.css :root scan found nothing — the regex is broken').toBeGreaterThan(20);
    for (const name of CONTRACT_TOKENS) {
      expect(game.has(name), `--${name} is not declared in ui.css`).toBe(true);
      expect(site.get(name), `--${name} disagrees with the game`).toBe(game.get(name));
    }
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
