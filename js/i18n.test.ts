import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  LOCALES,
  NAMESPACES,
  applyTo,
  detectLocale,
  loadBundleFrom,
  locale,
  refreshLocale,
  setLocale,
  t,
} from './i18n.js';

/**
 * The site's i18n spine, tested the same way `src/i18n/index.test.ts` and
 * `src/i18n/parity.test.ts` test the game's — this file is deliberately the
 * same shape, scaled to five namespaces instead of ten and to the site's own
 * `{name}` placeholder syntax rather than the game's `{{name}}`.
 *
 * There is no jsdom/happy-dom dependency in this repo (`vite.config.ts`'s
 * `test.include` runs everything under plain node), and adding one mid-pass
 * risks a `package-lock.json` collision with five other agents' worktrees.
 * `applyTo()` only ever calls three DOM methods —
 * `querySelectorAll`/`getAttribute`/`setAttribute`, plus a `textContent`
 * setter — so `FakeElement` below implements exactly that subset rather than
 * pulling in a real DOM. It is not a general-purpose DOM; it is a fixture.
 */

// ---------------------------------------------------------------- fixture

interface FakeNode {
  tagName: string;
  attrs: Map<string, string>;
  children: FakeNode[];
  textContent: string;
  getAttribute(name: string): string | null;
  setAttribute(name: string, value: string): void;
  querySelectorAll(selector: string): FakeNode[];
}

function fakeElement(tagName: string, attrs: Record<string, string> = {}, children: FakeNode[] = []): FakeNode {
  const attrMap = new Map(Object.entries(attrs));
  const node: FakeNode = {
    tagName,
    attrs: attrMap,
    children,
    textContent: '',
    getAttribute(name) {
      return attrMap.has(name) ? attrMap.get(name)! : null;
    },
    setAttribute(name, value) {
      attrMap.set(name, value);
    },
    querySelectorAll(selector) {
      // Only ever called with a single `[data-attr]` selector by `applyTo()`.
      const attr = /^\[([\w-]+)\]$/.exec(selector)?.[1];
      if (!attr) throw new Error(`fake DOM cannot resolve selector: ${selector}`);
      const out: FakeNode[] = [];
      const walk = (n: FakeNode) => {
        for (const child of n.children) {
          if (child.attrs.has(attr)) out.push(child);
          walk(child);
        }
      };
      walk(node);
      return out;
    },
  };
  return node;
}

// ------------------------------------------------------------------ t()

afterEach(() => {
  vi.unstubAllGlobals();
  refreshLocale();
});

describe('t()', () => {
  beforeEach(() => {
    loadBundleFrom('en', { ui: { 'ui.greeting': 'Hello' } });
    loadBundleFrom('tr', { ui: {} });
    vi.stubGlobal('navigator', { languages: ['en-US'] });
    refreshLocale();
  });

  it('returns the string for a key', () => {
    expect(t('ui.greeting')).toBe('Hello');
  });

  it('falls back to the key when a string is missing', () => {
    expect(t('ui.nothing.here')).toBe('ui.nothing.here');
  });

  it('interpolates variables', () => {
    loadBundleFrom('en', { ui: { 'ui.count': '{n} units' } });
    refreshLocale();
    expect(t('ui.count', { n: 3 })).toBe('3 units');
  });

  it('leaves an unmatched placeholder untouched', () => {
    loadBundleFrom('en', { ui: { 'ui.count': '{n} units' } });
    refreshLocale();
    expect(t('ui.count')).toBe('{n} units');
  });
});

describe('pseudo-loc mode', () => {
  // `?pseudo-loc=1` — Task W4's seam, mirroring the game's own
  // `src/i18n/index.ts` convention. Unlike the game's version (which swaps in
  // the longer of the two shipped locale values), the site's inflates the
  // active string directly: it exists to stress layouts beyond what either
  // shipped locale currently reaches, not to pick between two real ones.
  afterEach(() => vi.unstubAllGlobals());

  it('inflates the string by at least 40% under ?pseudo-loc=1', () => {
    loadBundleFrom('en', { ui: { 'ui.hello': 'Hello' } });
    vi.stubGlobal('navigator', { languages: ['en-US'] });
    vi.stubGlobal('location', { search: '?pseudo-loc=1' });
    refreshLocale();
    const out = t('ui.hello');
    expect(out.startsWith('Hello')).toBe(true);
    expect(out.length).toBeGreaterThanOrEqual(Math.ceil('Hello'.length * 1.4));
  });

  it('still interpolates {vars} before inflating', () => {
    loadBundleFrom('en', { ui: { 'ui.count': '{n} units' } });
    vi.stubGlobal('navigator', { languages: ['en-US'] });
    vi.stubGlobal('location', { search: '?pseudo-loc=1' });
    refreshLocale();
    expect(t('ui.count', { n: 3 })).toContain('3 units');
  });

  it('is off by default, and off for any other query string', () => {
    loadBundleFrom('en', { ui: { 'ui.hello': 'Hello' } });
    vi.stubGlobal('navigator', { languages: ['en-US'] });
    vi.stubGlobal('location', { search: '?pseudo-loc=0' });
    refreshLocale();
    expect(t('ui.hello')).toBe('Hello');
  });

  it('survives a missing location entirely — node, under vitest, has none', () => {
    loadBundleFrom('en', { ui: { 'ui.hello': 'Hello' } });
    vi.stubGlobal('navigator', { languages: ['en-US'] });
    vi.stubGlobal('location', undefined);
    expect(() => refreshLocale()).not.toThrow();
    expect(t('ui.hello')).toBe('Hello');
  });
});

// -------------------------------------------------------------- applyTo()

describe('applyTo()', () => {
  beforeEach(() => {
    loadBundleFrom('en', {
      ui: { 'ui.hello': 'Hello', 'ui.icon.alt': 'An awning', 'ui.icon.aria': 'Open the menu' },
    });
    vi.stubGlobal('navigator', { languages: ['en-US'] });
    refreshLocale();
  });

  it('rewrites every data-i18n element under a root', () => {
    const h2 = fakeElement('h2', { 'data-i18n': 'ui.hello' });
    const root = fakeElement('div', {}, [h2]);
    applyTo(root);
    expect(h2.textContent).toBe('Hello');
  });

  it('rewrites attributes too', () => {
    const img = fakeElement('img', { 'data-i18n-alt': 'ui.icon.alt' });
    const button = fakeElement('button', { 'data-i18n-aria-label': 'ui.icon.aria' });
    const root = fakeElement('div', {}, [img, button]);
    applyTo(root);
    expect(img.getAttribute('alt')).toBe('An awning');
    expect(button.getAttribute('aria-label')).toBe('Open the menu');
  });

  it('leaves elements without a key alone', () => {
    const p = fakeElement('p');
    p.textContent = 'untouched';
    const root = fakeElement('div', {}, [p]);
    applyTo(root);
    expect(p.textContent).toBe('untouched');
  });
});

// --------------------------------------------------------- the ten files

const SITE_LOCALES_DIR = fileURLToPath(new URL('../locales/', import.meta.url));

const read = (loc: string, ns: string): Record<string, string> =>
  JSON.parse(readFileSync(`${SITE_LOCALES_DIR}${loc}/${ns}.json`, 'utf8')) as Record<string, string>;

describe('the site locale files', () => {
  it('ships all five namespaces for both locales', () => {
    for (const loc of LOCALES) {
      expect(readdirSync(`${SITE_LOCALES_DIR}${loc}`).sort()).toEqual(NAMESPACES.map((ns) => `${ns}.json`).sort());
    }
  });

  it('has the same key set in both locales', () => {
    for (const ns of NAMESPACES) {
      const en = Object.keys(read('en', ns)).sort();
      const tr = Object.keys(read('tr', ns)).sort();
      expect(tr, `${ns}.json: tr is missing keys en has (or has extra ones)`).toEqual(en);
    }
  });

  it('has no empty string in either locale', () => {
    for (const loc of LOCALES) {
      for (const ns of NAMESPACES) {
        for (const [key, value] of Object.entries(read(loc, ns))) {
          expect(typeof value, `${loc}/${ns}.json ${key}`).toBe('string');
          expect(value.trim(), `${loc}/${ns}.json ${key} is empty`).not.toBe('');
        }
      }
    }
  });
});

// ---------------------------------------------------- detect, toggle, declare

function fakeStorage(seed: Record<string, string> = {}) {
  const map = new Map(Object.entries(seed));
  return {
    getItem: (k: string) => map.get(k) ?? null,
    setItem: (k: string, v: string) => void map.set(k, v),
    removeItem: (k: string) => void map.delete(k),
  };
}

describe('detectLocale()', () => {
  it('picks tr for tr, tr-TR and tr-CY', () => {
    for (const lang of ['tr', 'tr-TR', 'tr-CY']) {
      expect(detectLocale([lang], null), lang).toBe('tr');
    }
  });

  it('picks en for everything else, including unknown tags', () => {
    for (const lang of ['en', 'en-GB', 'de-DE', 'xx-ZZ', '']) {
      expect(detectLocale([lang], null), lang).toBe('en');
    }
    expect(detectLocale([], null)).toBe('en');
    expect(detectLocale(undefined, null)).toBe('en');
  });

  it('prefers a stored choice over the browser', () => {
    expect(detectLocale(['tr-TR'], 'en')).toBe('en');
    expect(detectLocale(['en-US'], 'tr')).toBe('tr');
  });
});

describe('locale() and setLocale()', () => {
  it('survives localStorage throwing', () => {
    const boom = {
      getItem: () => {
        throw new Error('private mode');
      },
      setItem: () => {
        throw new Error('private mode');
      },
      removeItem: () => {
        throw new Error('private mode');
      },
    };
    vi.stubGlobal('navigator', { languages: ['tr-TR'] });
    vi.stubGlobal('localStorage', boom);
    expect(() => refreshLocale()).not.toThrow();
    expect(locale()).toBe('tr');
    expect(() => setLocale('en')).not.toThrow();
    expect(locale()).toBe('en');
  });

  it('setLocale persists and locale() reflects it on the next refresh', () => {
    vi.stubGlobal('navigator', { languages: ['en-US'] });
    const storage = fakeStorage();
    vi.stubGlobal('localStorage', storage);
    refreshLocale();
    expect(locale()).toBe('en');
    setLocale('tr');
    expect(locale()).toBe('tr');
    refreshLocale();
    expect(locale()).toBe('tr');
  });
});
