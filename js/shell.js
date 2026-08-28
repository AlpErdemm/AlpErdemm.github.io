/**
 * The shell's own script, and the page's only `<head>`-level module.
 *
 * It does one thing: mark the document as JS-enabled. That is not a
 * placeholder — it is the hook a sprint keys a no-JS fallback off. The hero
 * board (U) and the embed (X) both need a static answer for a reader with
 * scripting off, and `html:not([data-js]) .thing` is how they write it
 * without either of them having to boot anything.
 *
 * **Where the other sprints load their code.** `<head>` is Sprint S's region
 * and this file is Sprint S's file, so neither is where U, V, W or X add
 * their module. Each of those sprints puts its own
 * `<script type="module" src="js/whatever.js"></script>` **inside its own
 * `<section>`** — that is legal HTML, it is inside the region that sprint
 * already owns, and module scripts are deferred, so ordering is document
 * order regardless of where the tag sits. Nothing has to be shared, and this
 * file never becomes a manifest five agents edit at once.
 *
 * No build step (decision 7), so this is plain ES module JavaScript served as
 * authored — no bundler, no transpile, no import that is not a real path.
 */

document.documentElement.dataset.js = 'on';
