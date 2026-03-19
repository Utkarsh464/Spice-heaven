import { SITE_CONFIG } from "../constants/config";

const NUM = SITE_CONFIG.whatsappNumber;

/**
 * WhatsApp URL helpers
 * All links open wa.me with a pre-filled message.
 */
export const wa = {
  bookTable: () =>
    `https://wa.me/${NUM}?text=Hi%20Spice%20Haven!%20I'd%20like%20to%20book%20a%20table.`,

  placeOrder: () =>
    `https://wa.me/${NUM}?text=Hi!%20I'd%20like%20to%20place%20an%20order.`,

  orderItem: (name, price) =>
    `https://wa.me/${NUM}?text=Hi!%20I'd%20like%20to%20order%20${encodeURIComponent(
      name
    )}%20(%E2%82%B9${price}).`,

  cartOrder: (items) =>
    `https://wa.me/${NUM}?text=Hi!%20I'd%20like%20to%20order:%20${encodeURIComponent(
      items.join(", ")
    )}`,

  getWebsite: () =>
    `https://wa.me/${NUM}?text=Hi!%20I%20own%20a%20restaurant%20and%20want%20a%20website%20like%20Spice%20Haven.`,

  requestDemo: () =>
    `https://wa.me/${NUM}?text=I%20want%20to%20see%20a%20live%20demo%20of%20the%20restaurant%20website.`,

  adminPanel: () =>
    `https://wa.me/${NUM}?text=I'm%20interested%20in%20getting%20a%20restaurant%20website%20with%20an%20admin%20panel.`,

  general: () => `https://wa.me/${NUM}`,
};
