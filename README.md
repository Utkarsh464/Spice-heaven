# 🍛 Spice Haven — Premium Restaurant Website

A high-converting, luxury restaurant website built with **React + Vite**.  
Dark gold aesthetic · WhatsApp integration · Admin dashboard preview · Business sales demo.

---

## 📁 Project Structure

```
spice-haven/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── images/          # (place local images here)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx   # Fixed navigation bar
│   │   │   └── Footer.jsx   # Footer with business CTA strip
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx       # Full-screen hero
│   │   │   ├── FeaturedDishes.jsx    # 3-up dish cards
│   │   │   ├── ChefStory.jsx         # Two-col chef feature
│   │   │   ├── Pillars.jsx           # 4-col USP grid
│   │   │   ├── SpiceBreak.jsx        # Atmospheric interstitial
│   │   │   ├── Reviews.jsx           # Guest testimonials
│   │   │   ├── CTABanner.jsx         # Booking CTA section
│   │   │   ├── AdminDashboard.jsx    # 🆕 Fake admin panel preview
│   │   │   └── BusinessCTA.jsx       # 🆕 "Own a restaurant?" sales section
│   │   └── ui/
│   │       ├── Btn.jsx          # Primary / outline button
│   │       ├── Tag.jsx          # Eyebrow label
│   │       ├── GoldRule.jsx     # Decorative divider
│   │       ├── WAButton.jsx     # WhatsApp branded CTA
│   │       ├── WAFloat.jsx      # 🆕 Floating WhatsApp bubble
│   │       └── LoadingScreen.jsx # 🆕 Branded splash screen
│   ├── constants/
│   │   ├── config.js    # Site config, WhatsApp number, contact info
│   │   ├── images.js    # All image URLs
│   │   ├── menu.js      # Menu data (dishes, categories, featured)
│   │   └── gallery.js   # Gallery photo list
│   ├── context/
│   │   └── AppContext.jsx  # Global state (page routing + cart)
│   ├── hooks/
│   │   └── useReveal.js   # Intersection Observer scroll reveal
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── MenuPage.jsx
│   │   ├── GalleryPage.jsx
│   │   ├── BookingPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── styles/
│   │   ├── globals.css     # CSS variables, reset, base styles
│   │   ├── animations.css  # All keyframes + reveal utilities
│   │   └── responsive.css  # Media queries
│   ├── utils/
│   │   ├── whatsapp.js  # wa.me URL helpers
│   │   └── helpers.js   # Misc utilities (formatPrice, pad2, debounce)
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
├── .eslintrc.cjs
└── .prettierrc
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (opens at http://localhost:3000)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## ⚙️ Configuration

All client-specific settings live in **`src/constants/config.js`**:

```js
export const SITE_CONFIG = {
  name: "Spice Haven",
  whatsappNumber: "919876543210",  // ← Change this
  address: "12, Connaught Place…",
  phone1: "+91 11 4567 8910",
  // ...
};
```

To customise for a new restaurant client:
1. Update `SITE_CONFIG` in `config.js`
2. Replace image URLs in `images.js`
3. Update `menu.js` with the real menu
4. Replace the favicon in `public/favicon.svg`

---

## 🆕 New Features (Sales Demo Upgrades)

| Feature | File |
|---|---|
| Loading splash screen | `components/ui/LoadingScreen.jsx` |
| Floating WhatsApp button | `components/ui/WAFloat.jsx` |
| WhatsApp CTA buttons (everywhere) | `components/ui/WAButton.jsx` + `utils/whatsapp.js` |
| Admin dashboard preview | `components/sections/AdminDashboard.jsx` |
| Business owner CTA section | `components/sections/BusinessCTA.jsx` |
| Urgency bar ("Limited slots") | Inside `BusinessCTA.jsx` |
| Premium badge on hero | `components/sections/HeroSection.jsx` |
| Per-item WhatsApp ordering | `pages/MenuPage.jsx` |
| Cart → WhatsApp checkout | `pages/MenuPage.jsx` |
| Footer "Get This Website" strip | `components/layout/Footer.jsx` |
| Card lift hover effects | CSS class `.card-lift` in `animations.css` |
| Shimmer text animation | CSS class `.shimmer-text` in `animations.css` |
| Button spring animation | CSS class `.btn-scale` in `animations.css` |

---

## 🎨 Design System

### Colors
| Variable | Value | Use |
|---|---|---|
| `--ink` | `#0A0806` | Page background |
| `--gold` | `#C8A05A` | Primary accent |
| `--gold2` | `#E2BF82` | Light gold (headings) |
| `--cream` | `#F2E8D5` | Body text |
| `--warm` | `#A8916C` | Secondary text |
| `--muted` | `#6B5C45` | Tertiary / placeholder |

### Typography
- **Display / Headings:** Playfair Display (serif)
- **Body / UI:** Jost (sans-serif)

### Animation Classes
- `.rv` — fade up on scroll reveal
- `.rv-l` / `.rv-r` — slide in from left/right
- `.d1`–`.d6` — stagger delays (0.08s increments)
- `.card-lift` — hover lift + shadow
- `.btn-scale` — hover scale + press effect
- `.img-zoom` — image scale on hover
- `.shimmer-text` — gold shimmer gradient text
- `.urgency-dot` — pulsing red dot

---

## 📱 WhatsApp Integration

All WhatsApp links are generated via `src/utils/whatsapp.js`:

```js
import { wa } from "../utils/whatsapp";

// Examples
wa.bookTable()         // → Book a table message
wa.placeOrder()        // → General order message
wa.orderItem(name, p)  // → Order specific item
wa.cartOrder(items)    // → Order cart contents
wa.getWebsite()        // → "I want a website like this"
wa.requestDemo()       // → Request a live demo
```

---

## 🏗️ Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18.2 | UI framework |
| Vite | 5.x | Build tool + dev server |
| ESLint | 8.x | Code linting |
| Prettier | 3.x | Code formatting |

No CSS framework used — all styles are hand-crafted CSS variables and inline styles for maximum control and zero bloat.

---

## 📦 Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag the dist/ folder to netlify.com/drop
```

### Static hosting (any CDN)
```bash
npm run build
# Upload the dist/ folder
```

---

## 📄 License

Built for client delivery. All code is yours upon delivery.  
Images sourced from [Unsplash](https://unsplash.com) — free for commercial use.

---

*Made with ♥ — a ₹50,000+ product, delivered.*

---

## 🆕 v2 Upgrade — New Features

### 1. Full Cart System (`src/components/cart/CartDrawer.jsx`)
- Slide-in drawer from the right — opens automatically on Add to Cart
- Per-item quantity controls (+ / −) with live subtotal
- Tax calculation (5%) + grand total
- Empty cart state with friendly CTA
- **"Place Order via WhatsApp"** — builds a prefilled message with all items + quantities + total, records the order in the admin panel, then opens WhatsApp
- "Book a Table Instead" quick-link

### 2. Admin Panel (`src/pages/admin/`)

**AdminLogin.jsx**
- Clean, branded login page
- Dummy auth: `admin` / `spice2024`
- Accessible via footer "Admin Login" link
- Shows demo credentials hint

**AdminDashboard.jsx**
- 4-tab sidebar: Overview · Bookings · Orders · Menu
- **Overview:** Live stat cards (revenue, bookings, pending orders, expected guests), recent bookings + recent orders side-by-side
- **Bookings:** Full table with filter by status, Confirm / Cancel actions — all bookings from the real booking form appear here instantly
- **Orders:** Card-based order list with filter, "Mark Preparing" / "Mark Served" status cycling — real WhatsApp orders from the cart appear here
- **Menu:** Read-only menu browser by category

### 3. Navbar Upgrades (`src/components/layout/Navbar.jsx`)
- Cart icon button with live badge count
- Admin panel shortcut (shows only when logged in)
- Mobile cart button in hamburger menu

### 4. Cart-Aware AppContext (`src/context/AppContext.jsx`)
- Cart now tracks objects `{ item, qty }` with proper quantity management
- `addToCart`, `removeFromCart`, `updateQty`, `clearCart`
- `cartItems`, `cartCount`, `cartTotal` derived values
- `addBooking` — wires BookingPage form → admin Bookings table
- `addOrder` — wires CartDrawer checkout → admin Orders table
- `adminLogin` / `adminLogout` — persistent via localStorage
- All state persisted to localStorage (survives page refresh)

### 5. Footer Fix
- Admin Login link added to copyright bar
- All navigation links route correctly via context

### 6. MenuPage Upgrade (`src/pages/MenuPage.jsx`)
- "Add to Cart" opens the cart drawer immediately
- "X in cart" badge shows current quantity per item
- Animated ✓ feedback on add
- Cart shortcut button in header when items are in cart

### 7. BookingPage Upgrade
- Form submission now calls `addBooking()` → appears in Admin → Bookings table instantly

---

## 🔑 Admin Access

```
URL:      Click "Admin Login" in the footer
Username: admin
Password: spice2024
```
