/**
 * Instagram Lead-Gen Utilities
 * Primary channel: @webgrowth.in
 *
 * Pre-filled text trick:
 * instagram.com/direct/new/?text=<encoded> opens the DM composer
 * with the message already typed in — user just hits Send.
 */

const HANDLE  = "webgrowth.in";
const PROFILE = `https://instagram.com/${HANDLE}`;

export const IG_HANDLE  = HANDLE;
export const IG_PROFILE = PROFILE;

// ─── The message that gets pre-typed ─────────────────────────────────────────
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

// ─── URL builder — text pre-filled in Instagram DM composer ──────────────────
const dmUrl = (messageKey = "general") => {
  const text = MESSAGES[messageKey] || MESSAGES.general;
  return `https://www.instagram.com/direct/new/?text=${encodeURIComponent(text)}`;
};

// ─── openIGDM ─────────────────────────────────────────────────────────────────
/**
 * Opens Instagram DM composer with the message already typed.
 * User just presses Send — zero effort.
 */
export function openIGDM(messageKey = "general") {
  window.open(dmUrl(messageKey), "_blank", "noreferrer");
}

// ─── ig.* URL helpers (for href= attributes) ──────────────────────────────────
export const ig = {
  dm:          () => dmUrl("general"),
  profile:     () => PROFILE,
  getWebsite:  () => dmUrl("getWebsite"),
  bookTable:   () => dmUrl("bookTable"),
  requestDemo: () => dmUrl("requestDemo"),
  adminPanel:  () => dmUrl("adminPanel"),
  placeOrder:  () => dmUrl("placeOrder"),
  claimSlot:   () => dmUrl("claimSlot"),
  general:     () => dmUrl("general"),
};

// Legacy alias
export const DM_HINT = MESSAGES;
export const IG_DM   = dmUrl("general");
