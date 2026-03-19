/**
 * Instagram Lead-Gen Utilities
 * All CTAs funnel visitors to @webgrowth.in on Instagram.
 *
 * How pre-typed text works:
 * Instagram does NOT support ?text= in URLs like WhatsApp does.
 * Our approach:
 *   1. Silently copy the message to clipboard
 *   2. Open Instagram DM in a new tab
 *   3. User just pastes (Ctrl+V / long-press Paste) — zero friction
 *
 * This is the industry-standard workaround used by IG lead-gen tools.
 */

const HANDLE  = "webgrowth.in";
const DM_URL  = `https://ig.me/m/${HANDLE}`;
const PROFILE = `https://instagram.com/${HANDLE}`;

export const IG_HANDLE  = HANDLE;
export const IG_PROFILE = PROFILE;
export const IG_DM      = DM_URL;

// ─── Pre-typed messages ───────────────────────────────────────────────────────
export const MESSAGES = {
  getWebsite:  "Hi! I want a website like this for my business 🙌",
  placeOrder:  "Hi! I'd like to order a website like this. Can we talk? 🙌",
  bookTable:   "Hi! I want to book a table at Spice Haven. Please help 🙏",
  requestDemo: "Hi! I'd like to see a live demo of this website 👀",
  adminPanel:  "Hi! I'm interested in getting a website with an admin panel 📊",
  claimSlot:   "Hi! I want to claim a slot for a premium website this month ⚡",
  general:     "Hi! I found your page and I'm interested. Let's connect! 🔥",
};

// ─── Core helper ─────────────────────────────────────────────────────────────
/**
 * openIGDM(messageKey)
 * 1. Copies the pre-typed message to clipboard silently
 * 2. Opens Instagram DM
 * 3. Shows a brief toast so the user knows to paste
 *
 * @param {keyof typeof MESSAGES} messageKey
 */
export function openIGDM(messageKey = "general") {
  const text = MESSAGES[messageKey] || MESSAGES.general;

  // Copy to clipboard (works in all modern browsers)
  try {
    navigator.clipboard.writeText(text).catch(() => {
      // Fallback for older browsers
      const el = document.createElement("textarea");
      el.value = text;
      el.style.cssText = "position:fixed;opacity:0;top:0;left:0;";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    });
  } catch (_) { /* clipboard unavailable — still open IG */ }

  // Small delay so clipboard is ready before IG opens
  setTimeout(() => {
    window.open(DM_URL, "_blank", "noreferrer");
  }, 80);
}

// ─── URL getters (for <a href> usage) ────────────────────────────────────────
// These are plain href values — use openIGDM() for buttons where you want
// clipboard copy. For <a> tags, onClick also calls openIGDM then prevents default.
export const ig = {
  dm:          () => DM_URL,
  profile:     () => PROFILE,
  getWebsite:  () => DM_URL,
  bookTable:   () => DM_URL,
  requestDemo: () => DM_URL,
  adminPanel:  () => DM_URL,
  placeOrder:  () => DM_URL,
  claimSlot:   () => DM_URL,
  general:     () => DM_URL,
};

// Legacy alias
export const DM_HINT = MESSAGES;
