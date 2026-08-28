/**
 * Sprint X: the embed's own behaviour — click-to-load Play, and the sound
 * toggle. No build step (decision 7): plain ES module, served as authored.
 *
 * ## Click-to-load, and why it is not optional
 *
 * `site/play/` is over a megabyte (`scripts/siteSync.test.ts` measures it
 * against the full build). A visitor who scrolls past `#play` without
 * pressing the button must never pay for any of that download — it is also
 * what keeps the *hero*, above the fold, the thing that decides how fast the
 * page feels. The iframe element does not exist in the markup at all; this
 * module creates it the moment `[data-embed-launch]` is clicked, and not
 * before.
 *
 * ## The sound toggle, and decision 8
 *
 * There is no message channel between this page and the embedded build, and
 * `src/audio/settings.ts`'s `load()` only ever runs once, at the game's own
 * boot — so the only lever this page has over the embedded game's audio is
 * the one thing both sides already read: `localStorage['mt.sfx']`, on the
 * same origin (the embed is same-origin with this page, both under
 * `/site/` in dev and both under the published site's root once synced).
 *
 * "No autoplay audio" (decision 8) is about a visitor's *first* impression,
 * not about overriding a choice they already made — so this module seeds a
 * muted default only when no preference exists yet, and never overwrites a
 * returning visitor's own unmute. Toggling sound while the game is already
 * running reloads the iframe: heavier than a live message would be, but
 * honest given there is no bridge, and reasonable for a promo embed a
 * visitor presses at most a few times.
 */

const SFX_KEY = 'mt.sfx';
const IFRAME_SRC = 'play/index.html';
const DEFAULT_FRAME_TITLE = 'Kitchen Tactics — playable build';

function readSfx() {
  try {
    const raw = localStorage.getItem(SFX_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return typeof parsed === 'object' && parsed !== null ? parsed : null;
  } catch {
    return null; // private mode, or a corrupt value — treat as "no preference yet"
  }
}

function writeSfx(next) {
  try {
    localStorage.setItem(SFX_KEY, JSON.stringify(next));
  } catch {
    /* private mode, or no storage at all — the toggle still updates on screen */
  }
}

function initEmbed() {
  const section = document.getElementById('play');
  if (!section) return;

  const launch = section.querySelector('[data-embed-launch]');
  const screen = section.querySelector('[data-embed-screen]');
  const soundButton = section.querySelector('[data-embed-sound]');
  const soundLabel = section.querySelector('[data-embed-sound-label]');
  const frameTitleSource = section.querySelector('[data-embed-frame-title]');
  if (!launch || !screen || !soundButton) return;

  // Seeded muted only when there is no preference recorded yet — a
  // returning visitor who already turned sound on is never re-muted.
  let sfx = readSfx();
  if (!sfx) {
    sfx = { muted: true, volume: 1, music: 1 };
    writeSfx(sfx);
  } else if (typeof sfx.muted !== 'boolean') {
    sfx = { ...sfx, muted: true };
    writeSfx(sfx);
  }

  let iframe = null;

  function frameTitle() {
    const text = frameTitleSource?.textContent?.trim();
    return text && text.length > 0 ? text : DEFAULT_FRAME_TITLE;
  }

  function syncSoundButton() {
    const on = sfx.muted === false;
    soundButton.setAttribute('aria-pressed', String(on));
    if (soundLabel) {
      // The i18n contract (`site/js/i18n.js`, once Sprint W merges) rewrites
      // whatever this key currently holds — flipping the key here rather
      // than hand-writing English keeps that rewrite correct in both
      // locales without this module knowing any locale's text.
      soundLabel.dataset.i18n = on ? 'embed.play.soundOn' : 'embed.play.soundOff';
      if (!soundLabel.dataset.i18nLive) {
        soundLabel.textContent = on ? 'Sound: on' : 'Sound: off';
      }
    }
  }
  syncSoundButton();

  function boot() {
    if (iframe) return;
    iframe = document.createElement('iframe');
    iframe.src = IFRAME_SRC;
    iframe.title = frameTitle();
    screen.replaceChildren(iframe);
    section.classList.add('play--running');
    launch.disabled = true;
    launch.setAttribute('aria-hidden', 'true');
    launch.tabIndex = -1;
  }

  launch.addEventListener('click', boot);

  soundButton.addEventListener('click', () => {
    sfx = { ...sfx, muted: sfx.muted !== true };
    writeSfx(sfx);
    syncSoundButton();
    if (iframe) {
      // No live bridge into the running build — see the header above.
      // Re-pointing `src` is a real reload, applying the new setting the
      // same way a fresh visit would.
      iframe.src = IFRAME_SRC;
    }
  });
}

initEmbed();
