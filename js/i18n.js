/**
 * The site's i18n spine — the contract in the orchestration doc, §Contracts
 * item 4: `t(key)`, `locale()`, `applyTo(root)`. No framework, no build step
 * (decision 7), so this is a plain ES module served exactly as authored.
 *
 * Deliberately the same shape as the game's own `src/i18n/index.ts` — a flat
 * per-locale bundle, a `t()` that falls back to English and then to the key
 * itself, a `localStorage` override guarded the same way `state/comfort.ts`
 * and `audio/settings.ts` guard theirs — but scaled to this pass's five
 * namespaces (`ui`, `content`, `hero`, `roster`, `embed`) rather than the
 * game's ten, and to `{name}` single-brace placeholders rather than the
 * game's `{{name}}` (the sprint plan's own example: `t('x', {n: 3})` over
 * `"{n} units"`).
 *
 * **Loading is a same-origin `fetch`, not a static JSON import.** The game's
 * module can `import x from './x.json' with { type: 'json' }` because it is
 * always run through Vite's build; this file ships to a static host with no
 * bundler at all; a bare-module JSON import assertion is not yet reliable
 * across every browser this site has to open in. `fetch()` of a same-origin
 * `.json` file is boring and universal, which is what a page whose entire job
 * is opening reliably for a stranger needs. See `boot()` below.
 *
 * **Why `loadBundleFrom` is exported separately from `boot`.** `t()`,
 * `applyTo()` and the locale-detection logic are pure/synchronous and are
 * exactly what `i18n.test.ts` exercises; the network fetch is the one part of
 * this module that cannot run under vitest's node environment (no server, no
 * `fetch` target). Splitting the seam here means the whole spine is testable
 * without a DOM library or a mocked network — `loadBundleFrom` lets a test (or
 * `boot`) hand over already-parsed namespace objects, and nothing downstream
 * cares how they got there.
 */

/** The five namespaces this pass ships. Order does not matter for the merge. */
export const NAMESPACES = ['ui', 'content', 'hero', 'roster', 'embed'];

/** The two locales the game ships (decision 4: EN + TR, browser auto-detect). */
export const LOCALES = ['en', 'tr'];

const STORAGE_KEY = 'tezgah.locale';

/** `{name}` — single-brace, per the sprint plan's own example. */
const PLACEHOLDER = /\{(\w+)\}/g;

function isLocale(value) {
  return value === 'en' || value === 'tr';
}

/** Every namespace's flat map, merged, per locale. Populated by `loadBundleFrom`. */
const bundles = { en: {}, tr: {} };

/**
 * Merges `dataByNamespace` (an object keyed by namespace name, each value the
 * parsed contents of that namespace's JSON file) into the bundle for `loc`.
 * Safe to call more than once for the same locale — a later call's keys win,
 * which is exactly what a test re-seeding a single key between `it()` blocks
 * wants, and what `boot()` does once per locale at startup.
 */
export function loadBundleFrom(loc, dataByNamespace) {
  if (!isLocale(loc)) throw new Error(`not a shipped locale: ${loc}`);
  Object.assign(bundles[loc], ...NAMESPACES.map((ns) => dataByNamespace[ns] ?? {}));
}

// ------------------------------------------------------------- detection

function readNavigatorLanguages() {
  try {
    if (typeof navigator === 'undefined' || navigator === undefined) return [];
    if (Array.isArray(navigator.languages) && navigator.languages.length) return navigator.languages;
    return navigator.language ? [navigator.language] : [];
  } catch {
    // No `navigator` at all (node, under vitest) is "nothing to detect", not
    // an error worth surfacing.
    return [];
  }
}

function readStoredOverride() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return isLocale(raw) ? raw : null;
  } catch {
    // Safari private mode throws outright on the property access itself.
    return null;
  }
}

function writeStoredOverride(loc) {
  try {
    if (loc) localStorage.setItem(STORAGE_KEY, loc);
    else localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* private mode, or no storage at all — the in-memory locale still changes */
  }
}

/**
 * Pure function of its two inputs, exactly like the game's `detectLocale` in
 * `src/i18n/index.ts` — a stored override always wins; otherwise the first
 * browser language tag that starts `tr` (case-insensitive) picks Turkish, and
 * anything else, including no language at all, is English.
 */
export function detectLocale(languages, override) {
  if (override) return override;
  for (const lang of languages ?? []) {
    if (typeof lang === 'string' && lang.slice(0, 2).toLowerCase() === 'tr') return 'tr';
  }
  return 'en';
}

let current = 'en';

/** The active locale, right now. */
export function locale() {
  return current;
}

/**
 * Re-derives the active locale from the browser and `localStorage` right now.
 * Exported for tests that stub `navigator`/`localStorage` directly, same
 * reasoning as the game's `refreshLocale`.
 */
export function refreshLocale() {
  current = detectLocale(readNavigatorLanguages(), readStoredOverride());
  return current;
}

/**
 * Sets (or, with `null`, clears) the visitor's explicit override and applies
 * it immediately. Deliberately assigns `current` from `loc` directly rather
 * than persist-then-`refreshLocale()`: if `localStorage` throws, the write is
 * lost, but the override still holds for the rest of this page view.
 */
export function setLocale(loc) {
  writeStoredOverride(loc);
  current = detectLocale(readNavigatorLanguages(), loc);
  return current;
}

// -------------------------------------------------------------------- t()

/**
 * `?pseudo-loc=1` — Task W4's seam for proving the layout survives copy
 * longer than either shipped locale currently is, mirroring the game's own
 * `?pseudo-loc=1` in `src/i18n/index.ts` (same query string, same idea, one
 * page over). Guarded exactly like `readNavigatorLanguages`: absent under
 * node, and not an error.
 */
function isPseudoLoc() {
  try {
    if (typeof location === 'undefined' || location === null) return false;
    return new URLSearchParams(location.search).get('pseudo-loc') === '1';
  } catch {
    return false;
  }
}

/**
 * Inflates `s` by at least 40% of its own length, deterministically. Turkish
 * runs longer than English in most of this site's strings but not
 * reliably — real TR copy does not find every breaking point, so this is
 * cheap insurance beyond it: append a fixed marker until the target length is
 * reached, rather than anything that would need its own translation.
 */
function inflate(s) {
  const target = Math.ceil(s.length * 1.4);
  let out = s;
  while (out.length < target) out += ' ~~';
  return out;
}

/**
 * Looks up `key` in the active locale, falling back to English and then to
 * `key` itself — never a crash, always greppable in the rendered page. `vars`
 * fills `{name}`-style placeholders; a placeholder with no matching var is
 * left untouched rather than silently blanked. Under `?pseudo-loc=1` the
 * interpolated result is inflated rather than returned as-is.
 */
export function t(key, vars) {
  let raw = bundles[current]?.[key] ?? bundles.en?.[key] ?? key;
  if (vars) {
    raw = raw.replace(PLACEHOLDER, (whole, name) =>
      Object.prototype.hasOwnProperty.call(vars, name) ? String(vars[name]) : whole,
    );
  }
  return isPseudoLoc() ? inflate(raw) : raw;
}

// --------------------------------------------------------------- applyTo()

/**
 * Rewrites every `[data-i18n]`, `[data-i18n-alt]` and `[data-i18n-aria-label]`
 * element under `root` (root itself included) — text content, `alt` and
 * `aria-label` respectively. This is the whole mechanism markup hooks into:
 * a sprint that needs a piece of text localized puts a key on the element and
 * never has to know anything else about this module.
 */
export function applyTo(root) {
  rewrite(root, 'data-i18n', (el, value) => {
    el.textContent = value;
  });
  rewrite(root, 'data-i18n-alt', (el, value) => {
    el.setAttribute('alt', value);
  });
  rewrite(root, 'data-i18n-aria-label', (el, value) => {
    el.setAttribute('aria-label', value);
  });
}

function rewrite(root, attr, apply) {
  const selector = `[${attr}]`;
  const targets = root.matches?.(selector) ? [root, ...root.querySelectorAll(selector)] : root.querySelectorAll(selector);
  for (const el of targets) {
    const key = el.getAttribute(attr);
    if (key) apply(el, t(key));
  }
}

// ------------------------------------------------------------------- boot

/**
 * The real, browser-only startup path: fetch every namespace for both
 * locales (so a mid-session `setLocale` toggle never re-fetches), resolve the
 * active locale, and rewrite the document. `base` lets a page under a
 * subpath (or a test harness) point this somewhere other than `locales/`
 * relative to the document.
 *
 * Not called by `i18n.test.ts` — there is no server to fetch against under
 * vitest's node environment, which is exactly why `loadBundleFrom` exists as
 * its own seam above.
 */
export async function boot(base = 'locales/') {
  await Promise.all(
    LOCALES.map(async (loc) => {
      const dataByNamespace = {};
      await Promise.all(
        NAMESPACES.map(async (ns) => {
          const res = await fetch(`${base}${loc}/${ns}.json`);
          dataByNamespace[ns] = await res.json();
        }),
      );
      loadBundleFrom(loc, dataByNamespace);
    }),
  );
  refreshLocale();
  applyDocumentLocale();
  applyTo(document);
  return current;
}

/** `<html lang>` and `<title>` follow the active locale. */
function applyDocumentLocale() {
  try {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = current;
    document.title = t('ui.meta.title');
  } catch {
    /* no DOM at all — node, under vitest */
  }
}
