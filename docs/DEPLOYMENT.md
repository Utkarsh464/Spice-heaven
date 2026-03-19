# Deployment Guide

## Prerequisites

- Node.js ≥ 18.0
- npm ≥ 9.0

---

## Build for Production

```bash
npm install
npm run build
```

This creates a `dist/` folder with all static assets, optimised and minified.

---

## Deploying to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts — framework is auto-detected as Vite
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deploys on every push.

---

## Deploying to Netlify

**Option A — Drag & Drop:**
1. Run `npm run build`
2. Go to [netlify.com/drop](https://netlify.com/drop)
3. Drag the `dist/` folder

**Option B — CLI:**
```bash
npm i -g netlify-cli
netlify deploy --prod --dir dist
```

---

## Deploying to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

npm run build
npm run deploy
```

Note: Update `vite.config.js` to set the correct `base` path:
```js
export default defineConfig({
  base: "/your-repo-name/",
  // ...
});
```

---

## Custom Domain

After deploying, point your domain's DNS:
- **Vercel/Netlify:** Add an `A` record or `CNAME` per their dashboard instructions
- Set `https://yourdomain.com` in the `og:url` meta tag in `index.html`

---

## Environment Variables

Currently the project has no secrets. If you add a backend (e.g. booking API), create a `.env` file:

```
VITE_API_URL=https://api.yoursite.com
VITE_RECAPTCHA_KEY=xxx
```

Access in code with `import.meta.env.VITE_API_URL`.

> `.env` is already in `.gitignore` — never commit secrets.

---

## Performance Checklist

- [ ] Replace Unsplash URLs with your own CDN (faster, no third-party dependency)
- [ ] Compress all images to WebP format
- [ ] Enable gzip/brotli on your hosting platform
- [ ] Set far-future cache headers for `dist/assets/`
- [ ] Verify Lighthouse score ≥ 90 on mobile
