# Component Reference

Quick reference for all reusable components.

---

## UI Components (`src/components/ui/`)

### `<Btn>`
Primary button. Renders as `<button>` or `<a>` depending on props.

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | node | — | Button label |
| `onClick` | function | — | Click handler (for button) |
| `href` | string | — | URL (renders as `<a target="_blank">`) |
| `outline` | boolean | `false` | Ghost/outline variant |
| `style` | object | `{}` | Additional inline styles |

```jsx
<Btn onClick={() => navigate("Booking")}>Book a Table</Btn>
<Btn outline href="https://...">Learn More</Btn>
```

---

### `<WAButton>`
WhatsApp-branded CTA link button.

| Prop | Type | Default | Description |
|---|---|---|---|
| `href` | string | — | `wa.me/...` URL |
| `children` | node | — | Label text |
| `size` | `"sm"` \| `"md"` | `"md"` | Button size |
| `style` | object | `{}` | Additional styles |

```jsx
import { wa } from "../../utils/whatsapp";
<WAButton href={wa.bookTable()}>Book via WhatsApp</WAButton>
```

---

### `<Tag>`
Eyebrow label (small uppercase gold text).

```jsx
<Tag>Our Signature</Tag>
```

---

### `<GoldRule>`
Decorative horizontal gold divider with diamond center.

```jsx
<GoldRule />
```

---

### `<LoadingScreen>`
Branded splash screen. Fades out after 2.2s.

| Prop | Type | Description |
|---|---|---|
| `onDone` | function | Called after fade-out completes |

```jsx
{!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
```

---

### `<WAFloat>`
Fixed floating WhatsApp button (bottom-right corner). Slides in after 3s.  
No props needed — reads `SITE_CONFIG.whatsappNumber` automatically.

```jsx
<WAFloat />
```

---

## Layout Components (`src/components/layout/`)

### `<Navbar>`
Fixed top navigation. Reads current page from `AppContext`.  
No props — fully driven by context.

### `<Footer>`
Full-width footer with link columns, social icons, WhatsApp link, and "Own a Restaurant?" business CTA strip.  
No props — fully driven by context and config.

---

## Section Components (`src/components/sections/`)

All sections read data from `src/constants/` and context. No props required.

| Component | Description |
|---|---|
| `<HeroSection>` | Full-screen hero with premium badge, headline, and CTAs |
| `<FeaturedDishes>` | 3 featured dish cards from `FEATURED_DISHES` |
| `<ChefStory>` | Two-column chef feature section |
| `<Pillars>` | 4-column USP grid |
| `<SpiceBreak>` | Full-width atmospheric interstitial |
| `<Reviews>` | 3 guest testimonial cards |
| `<CTABanner>` | Booking CTA with background image |
| `<AdminDashboard>` | Fake admin panel preview (sales demo) |
| `<BusinessCTA>` | "Own a restaurant?" sales section with feature grid |

---

## Context (`src/context/AppContext.jsx`)

```jsx
const { page, navigate, cart, addToCart, clearCart } = useApp();
```

| Value | Type | Description |
|---|---|---|
| `page` | string | Current active page name |
| `navigate(p)` | function | Navigate to page + scroll to top |
| `cart` | string[] | Array of item names in cart |
| `addToCart(name)` | function | Add item name to cart |
| `clearCart()` | function | Empty the cart |

---

## Hooks (`src/hooks/`)

### `useReveal()`
Attaches IntersectionObserver to all `.rv`, `.rv-l`, `.rv-r` elements.  
Call once at the top of any page component.

```jsx
import { useReveal } from "../hooks/useReveal";

export default function MyPage() {
  useReveal();
  // ...
}
```

---

## Utils (`src/utils/`)

### `whatsapp.js`
```js
import { wa } from "../utils/whatsapp";

wa.bookTable()           // Book a table message
wa.placeOrder()          // General order
wa.orderItem(name, price)// Order specific item
wa.cartOrder(itemsArray) // Send full cart
wa.getWebsite()          // Business inquiry
wa.requestDemo()         // Request live demo
wa.adminPanel()          // Admin panel inquiry
wa.general()             // No pre-filled message
```

### `helpers.js`
```js
import { pad2, formatPrice, clamp, debounce } from "../utils/helpers";

pad2(3)           // → "03"
formatPrice(1250) // → "₹1,250"
clamp(5, 0, 10)   // → 5
debounce(fn, 200) // → debounced function
```
