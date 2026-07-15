# DBW — Decor Builders Warehouse

Marketing & catalogue website for Decor Builders Warehouse, a 19-year established
building materials and hardware supplier in Eastlea, Harare, Zimbabwe.

Built with **React + Vite + react-three-fiber** — the home hero is a live 3D scene
of the materials DBW sells (timber, steel tubes, I-beam, brick and the brand diamond),
lit procedurally so the site works fully offline/self-hosted.

All product photography is extracted directly from DBW's printed 2026 catalogues
(PPE Catalogue, Farming & Mining Catalogue) and the 2026 Company Profile —
see `DESIGN.md` for the full visual design guideline derived from those assets.

## Pages

- **Home** — 3D hero, departments, about teaser, best sellers, clients marquee, CTA
- **Catalogue** (`/products`) — all 70 product lines, category filters, search,
  catalogue pricing, quote-list drawer (send via WhatsApp or email)
- **About** — story, sectors, 1/5/10-year goals, team, clients
- **Contact** — phone / WhatsApp / email / address + enquiry form (mailto, no backend)

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

No backend or environment variables required — the site is fully static and can be
deployed to any static host (Netlify, Vercel, cPanel, GitHub Pages with SPA fallback).
