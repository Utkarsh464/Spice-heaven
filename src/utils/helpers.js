/**
 * Pad a number to 2 digits with leading zero.
 * e.g. 3 → "03"
 */
export const pad2 = (n) => String(n).padStart(2, "0");

/**
 * Format a price number as Indian Rupee string.
 * e.g. 1250 → "₹1,250"
 */
export const formatPrice = (amount) =>
  `₹${Number(amount).toLocaleString("en-IN")}`;

/**
 * Clamp a number between min and max.
 */
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

/**
 * Simple debounce utility.
 */
export function debounce(fn, delay = 150) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
