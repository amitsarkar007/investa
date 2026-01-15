# Investa

Beginner-friendly investing education focused on bonds and long-term thinking. This repo now hosts the React + Vite app that powers the live site.

Live site: [https://investa-amit.netlify.app/](https://investa-amit.netlify.app/)

## What’s in the repo
- `index.html` — Vite entry HTML.
- `src/` — React app source (pages, components, content).
- `public/` — static assets.
- `vite.config.ts` / `tsconfig.json` — build and TypeScript config.

## Key content locations
- `src/data/assetClasses.ts` — all asset-class content, platforms, and categories.
- `src/pages/Home.tsx` — homepage content and layout.
- `src/pages/AssetClassPage.tsx` — shared layout for all asset-class pages.
- `src/components/Navbar.tsx` and `src/components/Footer.tsx` — site chrome.

## Local development
```bash
npm install
npm run dev
```
Vite will print a local URL to open in your browser.

## Build for production
```bash
npm run build
```
The output is generated in `dist/`.

## Notes on deployment
- The app is configured with a relative base path in `vite.config.ts`, which helps when deploying from a subfolder.
- Netlify (or any static host) should serve the `dist/` folder.

## Content updates
To update investment content:
1. Edit `src/data/assetClasses.ts`.
2. Save, then run `npm run dev` to preview.

## License
See `LICENSE`.