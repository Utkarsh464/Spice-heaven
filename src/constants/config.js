/**
 * Site Configuration
 * Update these values to customize for each client.
 */

export const SITE_CONFIG = {
  name: "Spice Haven",
  tagline: "Fine Indian Cuisine",
  location: "New Delhi",
  established: "2009",
  description:
    "A curated journey through India's most celebrated culinary traditions — reimagined for the contemporary palate.",

  // Contact
  address: "12, Connaught Place\nNew Delhi – 110001, India",
  phone1: "+91 11 4567 8910",
  phone2: "+91 98765 00001",
  email1: "reservations@spicehaven.in",
  email2: "hello@spicehaven.in",
  hours: "Mon–Sun: 12:00 PM – 11:00 PM\nKitchen closes at 10:30 PM",

  // WhatsApp — replace with actual number (country code + number, no +)
  whatsappNumber: "919528073932",

  // Social
  instagram: "https://instagram.com/spicehaven",
  facebook: "https://facebook.com/spicehaven",
  twitter: "https://x.com/spicehaven",
  youtube: "https://youtube.com/spicehaven",

  // Business / Sales demo
  startingPrice: "₹15,000",
  deliveryDays: "7–10",
  maxClientsPerMonth: 4,
};

/** WhatsApp pre-filled message URLs */
export const WA_MESSAGES = {
  bookTable: (num) =>
    `https://wa.me/${num}?text=Hi%20Spice%20Haven!%20I'd%20like%20to%20book%20a%20table.`,
  placeOrder: (num) =>
    `https://wa.me/${num}?text=Hi!%20I'd%20like%20to%20place%20an%20order.`,
  orderItem: (num, item, price) =>
    `https://wa.me/${num}?text=Hi!%20I'd%20like%20to%20order%20${encodeURIComponent(item)}%20(₹${price}).`,
  cartOrder: (num, items) =>
    `https://wa.me/${num}?text=Hi!%20I'd%20like%20to%20order:%20${encodeURIComponent(items.join(", "))}`,
  getWebsite: (num) =>
    `https://wa.me/${num}?text=Hi!%20I%20own%20a%20restaurant%20and%20want%20a%20website%20like%20Spice%20Haven.`,
  requestDemo: (num) =>
    `https://wa.me/${num}?text=I%20want%20to%20see%20a%20live%20demo%20of%20the%20restaurant%20website.`,
  adminPanel: (num) =>
    `https://wa.me/${num}?text=I'm%20interested%20in%20getting%20a%20restaurant%20website%20with%20admin%20panel.`,
};

/** Booking time slots */
export const TIME_SLOTS = [
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
  "9:00 PM", "9:30 PM", "10:00 PM",
];

/** Special occasion options for booking form */
export const OCCASIONS = [
  "None", "Birthday", "Anniversary", "Business Dinner",
  "Proposal", "Family Gathering", "Other",
];

/** Navigation items */
export const NAV_ITEMS = ["Home", "Menu", "Gallery", "Booking", "Contact"];
