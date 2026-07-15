# DBW — Decor Builders Warehouse · Visual Design Guideline

A design system derived entirely from DBW's own brand assets: the eagle-and-roofline logo,
the 2026 company profile, and the PPE / Farming & Mining catalogues.

---

## 1. Brand essence

> **"Everything your site needs, under one roof."**

- 19-year established building-materials and hardware supplier in Harare, Zimbabwe.
- Serves construction, mining, farming, NGO and institutional clients (Zimplats, Meikles, CBZ, FBC…).
- Personality: **dependable, industrial, quietly premium**. The eagle = vigilance and reach;
  the roofline = shelter and construction.

The site should feel like a modern **trade showroom**: editorial and calm on the surface,
heavy-duty underneath.

## 2. Color palette (sampled from brand assets)

| Token | Hex | Source | Use |
|---|---|---|---|
| `--plum` | `#62376B` | Logo "D", profile panels | Primary brand, buttons, links, accents |
| `--plum-deep` | `#3D2145` | Derived shade | Hero/footer gradients, dark surfaces |
| `--wine` | `#6B3A51` | Catalogue label blocks | Secondary accent, price tags, badges |
| `--slate` | `#767B96` | Profile geometric panels | Muted panels, secondary text on dark |
| `--charcoal` | `#4A4C4B` | Logo "BW" + eagle | Body headings, icons |
| `--ink` | `#221A28` | Derived | Primary text, near-black with plum cast |
| `--paper` | `#F7F5F3` | Catalogue backgrounds | Page background (warm off-white) |
| `--mist` | `#ECE9EF` | Derived tint | Cards, section alternation |
| `--gold` | `#D9A441` | Hard-hat/CAT accents in catalogue imagery | Sparse highlight only (ratings, hover glints) |

Rules:
- Plum leads, wine supports, gold appears < 5% of any screen.
- Dark sections use `plum-deep → ink` gradients, never flat black.
- Product imagery sits on white/paper cards — catalogue photos have white backgrounds.

## 3. Typography

| Role | Face | Why |
|---|---|---|
| Display / headlines | **Fraunces** (serif, 72–40px, weight 500–600) | Mirrors the elegant serif of the 2026 catalogue covers ("CATALOGUE") |
| UI / body | **Jost** (geometric sans, 15–18px) | Near-twin of the logo's geometric letter-spacing ("Decor Builders Warehouse") |

- Headlines: tight leading (1.05), slight negative tracking, sentence case.
- Overlines/labels: Jost, uppercase, `letter-spacing: 0.18em`, plum or wine.
- Numbers (stats, prices): Fraunces for display feel.

## 4. Layout & shape language

- 12-col fluid grid, max-width 1240px, generous 96–140px section rhythm.
- **Roofline motif**: the logo's apex line is used as a section divider and card hover accent.
- **Diamond motif**: the profile's ◇ bullet becomes list markers and section ornaments.
- Corners: 16–24px radius on cards, 999px pills for chips/CTAs.
- Dotted grids (from profile pages) as subtle background texture on dark sections.

## 5. Imagery

- **Exact catalogue product photos** (extracted from the PDFs) on white cards — never
  screenshots of pages.
- Category hero photos from catalogue covers (steel, valves, welding, fencing).
- Team photos from the profile, framed in circles with plum→slate gradient rings
  (as in the profile deck).

## 6. Motion & interaction

- Scroll-reveal: 24px rise + fade, 0.6s cubic-bezier(0.22,1,0.36,1), staggered 80ms.
- Cards: hover lift (-6px) + roofline accent draw-in.
- Client names: infinite marquee, pauses on hover.
- Respect `prefers-reduced-motion`: all transforms collapse to opacity fades.

## 7. 3D (react-three-fiber)

Guided by pmndrs/react-three-fiber — declarative Three.js scenes as React components.

- **Hero scene**: a floating composition of the materials DBW actually sells —
  timber planks, steel round tubes, a brick, an I-beam and a corrugated sheet —
  soft studio lighting, brand-plum environment tint, gentle `Float` animation,
  mouse-parallax on the whole group, `ContactShadows` grounding, sparkle dust motes.
- Materials: physically-based but stylized — matte wood, brushed steel, satin plum.
- Performance: primitive geometries only, no external GLTFs, DPR capped at 2,
  canvas lazy-mounted, static poster fallback for reduced-motion users.
- 3D appears where it earns its place: the hero and the contact CTA band. Nowhere else.

## 8. Voice

- Confident, concrete, supplier-to-builder: "Steel, timber, PPE — priced for projects."
- Prices shown as in catalogue: "from $1.50".
- CTAs: "Get a quote", "Browse the catalogue", "Talk to sales".
