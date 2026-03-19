/**
 * Instagram Lead-Gen Utilities
 * All CTAs funnel visitors to @webgrowth.in on Instagram.
 *
 * ig.me/m/<handle>  — opens Instagram DM directly (mobile-aware)
 * instagram.com/<handle> — profile fallback for desktop
 */

const HANDLE = "webgrowth.in";
const DM_BASE = `https://ig.me/m/${HANDLE}`;
const PROFILE = `https://instagram.com/${HANDLE}`;

export const IG_HANDLE  = HANDLE;
export const IG_PROFILE = PROFILE;
export const IG_DM      = DM_BASE;

/**
 * ig.dm(message?)
 * Opens Instagram DM. On mobile: deep-links into the app.
 * Optional message shown as a UI hint — Instagram doesn't support pre-filled DMs
 * the way WhatsApp does, so we show the copy-hint in the UI instead.
 */
export const ig = {
  /** General DM — "DM us" button */
  dm: () => DM_BASE,

  /** Profile page */
  profile: () => PROFILE,

  /** "Get this website" lead */
  getWebsite: () => DM_BASE,

  /** "Book a table" — still goes to IG for demo */
  bookTable: () => DM_BASE,

  /** "Request a live demo" */
  requestDemo: () => DM_BASE,

  /** "Admin panel inquiry" */
  adminPanel: () => DM_BASE,

  /** Cart / place order */
  placeOrder: () => DM_BASE,

  /** Claim slot */
  claimSlot: () => DM_BASE,
};

/**
 * DM hint text shown in UI after redirect (copy-paste prompt)
 * Instagram doesn't support pre-filled message URLs, so we display
 * this text near the CTA so the user knows what to type.
 */
export const DM_HINT = {
  getWebsite:  "Hi, I want a website like this",
  placeOrder:  "Hi, I want a website like this for my business",
  bookDemo:    "Hi, I'd like to see a live demo",
  general:     "Hi, I found you on Instagram!",
};

/**
 * openIG(url)
 * Opens Instagram in a new tab.
 */
export function openIG(url = DM_BASE) {
  window.open(url, "_blank", "noreferrer");
}
