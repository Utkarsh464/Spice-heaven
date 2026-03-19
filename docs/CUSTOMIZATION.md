# Customization Guide

Step-by-step instructions for customizing Spice Haven for a new restaurant client.

---

## Step 1 — Update Site Config

Open `src/constants/config.js` and replace every value:

```js
export const SITE_CONFIG = {
  name: "Your Restaurant Name",
  tagline: "Your Tagline",
  location: "Your City",
  established: "2015",

  // Contact details
  address: "Your full address",
  phone1: "+91 XX XXXX XXXX",
  phone2: "+91 XXXXXXXXXX",
  email1: "reservations@yourrestaurant.com",
  email2: "hello@yourrestaurant.com",
  hours: "Tue–Sun: 12 PM – 11 PM\nClosed Mondays",

  // WhatsApp — digits only, with country code, no +
  whatsappNumber: "91XXXXXXXXXX",

  // Pricing for the sales CTA
  startingPrice: "₹15,000",
  deliveryDays: "7–10",
  maxClientsPerMonth: 4,
};
```

---

## Step 2 — Replace Images

Open `src/constants/images.js`.

Replace the Unsplash URLs with your own CDN links or local paths:

```js
export const IMAGES = {
  hero:  "/images/hero.jpg",         // 1800px wide, landscape
  amb1:  "/images/ambiance-1.jpg",   // 900px wide
  chef:  "/images/chef.jpg",         // portrait, 900px wide
  d1:    "/images/dish-1.jpg",       // 700px wide, square-ish
  // ...
};
```

Place your local files in `src/assets/images/` and use relative imports.

---

## Step 3 — Update the Menu

Open `src/constants/menu.js`.

Each item has the shape:
```js
{
  n: "Dish Name",
  d: "Short description of the dish",
  p: 750,          // price in INR (number, no ₹ symbol)
  img: I.d1,       // image reference from images.js
  tag: "Chef's Signature",  // optional badge label
}
```

Categories are controlled by `MENU_CATEGORIES`:
```js
export const MENU_CATEGORIES = ["Starters", "Main Course", "Desserts", "Drinks"];
```

The `FEATURED_DISHES` array controls the 3 cards shown on the homepage.

---

## Step 4 — Update Gallery

Open `src/constants/gallery.js`.

Each entry:
```js
{ src: I.g1, label: "The Dining Room", big: true }
// big: true → spans 2 columns × 2 rows in the masonry grid
```

---

## Step 5 — Favicon

Replace `public/favicon.svg` with your restaurant's logo/icon.  
Keep it under 1KB for best performance.

---

## Step 6 — Page Title & SEO

Open `index.html` and update the `<title>`, meta description, and OG tags.

---

## Step 7 — Remove / Adjust Sales Sections

If the website is being deployed as the restaurant's live site (not a sales demo), you may want to hide the business CTA sections:

**Option A — Remove sections from `HomePage.jsx`:**
```jsx
// Comment out or delete these lines:
// <AdminDashboard />
// <BusinessCTA />
```

**Option B — Toggle via config:**
Add a flag in `config.js`:
```js
export const SITE_CONFIG = {
  // ...
  showSalesDemo: false,  // set to true for the demo version
};
```

Then in `HomePage.jsx`:
```jsx
import { SITE_CONFIG } from "../constants/config";

// Inside the JSX:
{SITE_CONFIG.showSalesDemo && <AdminDashboard />}
{SITE_CONFIG.showSalesDemo && <BusinessCTA />}
```

---

## Step 8 — Colors (Optional)

All colors are CSS variables in `src/styles/globals.css`.  
To change the accent color from gold to another color, update:

```css
:root {
  --gold:  #C8A05A;   /* primary accent */
  --gold2: #E2BF82;   /* light variant  */
  --gold3: #A07A3A;   /* dark variant   */
}
```

---

## Step 9 — Deploy

```bash
npm run build
# Upload the dist/ folder to Vercel, Netlify, or any static host.
```
