/**
 * Instagram Lead-Gen Utilities
 * Primary channel: @webgrowth.in
 *
 * How it works:
 * 1. On click, we COPY the pre-filled message to clipboard (silent, one shot).
 * 2. We open https://ig.me/m/<handle> — this reliably opens the Instagram DM
 *    composer directed at your account on ALL devices (mobile app + desktop web).
 * 3. The user just pastes the message (already copied) and hits Send.
 *
 * Why not instagram.com/direct/new/?text=... ?
 * That URL is an internal Instagram web route. It breaks on mobile (the app
 * ignores the ?text= param) and often requires the user to already be logged
 * in on the browser. ig.me/m/<handle> is the official deep-link that always
 * opens the DM composer in the app.
 */

const HANDLE  = "webgrowth.in";
const PROFILE = `https://instagram.com/${HANDLE}`;

export const IG_HANDLE  = HANDLE;
export const IG_PROFILE = PROFILE;

// ─── The DM URL (always reliable) ────────────────────────────────────────────
const DM_BASE = `https://ig.me/m/${HANDLE}`;

// ─── The message that gets pre-copied to clipboard ────────────────────────────
const SITE_LINK = "https://spice-heaven-seven.vercel.app/";

export const MESSAGES = {
  getWebsite:  `Hey I want a website for my business like this ${SITE_LINK}`,
  placeOrder:  `Hey I want a website for my business like this ${SITE_LINK}`,
  bookTable:   `Hey I want a website for my business like this ${SITE_LINK}`,
  requestDemo: `Hey I want a website for my business like this ${SITE_LINK}`,
  adminPanel:  `Hey I want a website for my business like this ${SITE_LINK}`,
  claimSlot:   `Hey I want a website for my business like this ${SITE_LINK}`,
  general:     `Hey I want a website for my business like this ${SITE_LINK}`,
};

// ─── openIGDM ─────────────────────────────────────────────────────────────────
/**
 * 1. Copies the pre-filled message silently to clipboard.
 * 2. Opens ig.me/m/<handle> — works on mobile app and desktop web.
 * Returns true if clipboard copy succeeded (so UI can show a "message copied!" toast).
 */
export async function openIGDM(messageKey = "general") {
  const text = MESSAGES[messageKey] || MESSAGES.general;

  // Try to copy message to clipboard (non-blocking)
  let copied = false;
  try {
    await navigator.clipboard.writeText(text);
    copied = true;
  } catch (_) {
    // Clipboard denied — silently skip; still open the DM
  }

  window.open(DM_BASE, "_blank", "noreferrer");
  return copied;
}

// ─── ig.* URL helpers (for href= attributes) ──────────────────────────────────
export const ig = {
  dm:          () => DM_BASE,
  profile:     () => PROFILE,
  getWebsite:  () => DM_BASE,
  bookTable:   () => DM_BASE,
  requestDemo: () => DM_BASE,
  adminPanel:  () => DM_BASE,
  placeOrder:  () => DM_BASE,
  claimSlot:   () => DM_BASE,
  general:     () => DM_BASE,
};

// Legacy aliases
export const DM_HINT = MESSAGES;
export const IG_DM   = DM_BASE;
