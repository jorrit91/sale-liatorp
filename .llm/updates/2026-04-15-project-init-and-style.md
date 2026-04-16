# 2026-04-15 — Project init + visual style

Single-page marketing site to sell a Swedish holiday home in Liatorp, Småland. Content is Dutch-first, sourced from `webpage-verkoop-liatorp.md`. Project rules live in `docs/ai-guidelines.md`.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript (strict)
- Tailwind v4 (via `@tailwindcss/postcss`)
- ShadCN (Nova preset, base color `base`) — components live in `src/components/ui/`
- ESLint (flat config, `eslint-config-next` + `eslint-config-prettier`)
- Prettier (+ `prettier-plugin-tailwindcss`)
- Import alias: `@/*` → `src/*`

Scripts: `dev`, `build`, `start`, `lint`, `format`, `format:check`, `type-check` (`tsc --noEmit`).

No tests, no dark mode, no README — intentional. Project is short-lived.

## Installed ShadCN components

`button`, `card`, `separator`, `badge`. Add more with `npx shadcn@latest add <name>` as needed.

## Brand icons note

`lucide-react` 1.x dropped brand icons (no `Instagram`, etc.). For brand marks, use small inline SVGs — example in `src/app/page.tsx` (`InstagramIcon`).

## Visual style

**Mood:** clean Scandinavian minimal. Airy spacing, editorial serif headings, lots of whitespace, photos carry the weight.

**Palette** (light only, set in `src/app/globals.css` `:root`):

| Token                     | Hex       | Use                            |
| ------------------------- | --------- | ------------------------------ |
| `--background`            | `#FAF8F4` | warm cream page bg             |
| `--foreground`            | `#1C1F1C` | near-black body text           |
| `--card`                  | `#FFFFFF` | elevated blocks                |
| `--primary` / `--accent`  | `#2F4A3A` | deep forest green, CTAs, links |
| `--primary-foreground`    | `#FAF8F4` | text on primary                |
| `--secondary` / `--muted` | `#EFEAE0` | soft warm neutral panels       |
| `--muted-foreground`      | `#6B6F68` | secondary text                 |
| `--border` / `--input`    | `#E6E2D9` | hairlines                      |
| `--ring`                  | `#2F4A3A` | focus ring                     |
| `--radius`                | `0.75rem` | base radius                    |

**Typography** (wired in `layout.tsx` + `globals.css` `@theme inline`):

- Headings — **Fraunces** (`next/font/google`, variable, axes `opsz` + `SOFT`), exposed as `--font-fraunces` → `--font-heading`. Applied via `@layer base` to `h1–h4` with `tracking-tight` and `font-feature-settings: "ss01", "ss02"`.
- Body / UI — **Inter**, exposed as `--font-inter` → `--font-sans` (and `--font-mono`, we don't render code).
- Scale: hero `text-5xl md:text-7xl` weight 400, section titles `text-3xl md:text-5xl`, body `text-base md:text-lg leading-relaxed`.
- Eyebrows: `text-sm uppercase tracking-wide text-muted-foreground`.

**Layout**

- Content width: `max-w-6xl` centered, `px-6 md:px-10`.
- Section rhythm: `py-24 md:py-32` (airy).
- Grids: `gap-6` to `gap-12`.
- Image cards: `rounded-2xl` + `ring-1 ring-border` (no heavy shadows).

**Hero pattern** (see `src/app/page.tsx`)

- `h-[90vh]`, full-bleed dark backdrop (`#1c2a22`) with radial gradient overlay.
- Centered: small outlined badge → Fraunces display title → muted cream subcopy → two CTAs (filled primary `Mail ons`, outline-on-dark `DM op Insta`) → understated `Waar precies?` link with `MapPin`.
- Slideshow controls: bottom-center dot indicators, active dot `w-8` cream, inactive `w-1.5` cream/40.

**Components / interactions**

- Prefer ShadCN over Base-UI everywhere (ai-guidelines decision). Accordion, Tabs, ToggleGroup, etc. will be added via `shadcn add` as sections need them.
- Accordion for the "Hoe koop je een huis in Zweden?" section: single-open only.
- Restrained motion: `transition-colors` on interactive elements, fade/slow-pan on slideshow, no scroll-jacking.

## Content structure (planned, not yet built)

- `src/content/nl.ts` — all copy as one nested object, shaped for easy future translation (no loose JSX strings).
- `src/content/images.ts` — arrays of paths into `/public` so image sets are swappable.
- Sections from the content doc (Hero, BasicInfo, Slideshow, Location tabs, Costs callout, Amenities, BuyingProcess accordion, Footer) → components under `src/components/`, composed in `src/app/page.tsx`. Keep `src/app/**` thin.

## Static facts used in copy

- Price: €145.000 (1.600.000 SEK)
- Contact: `tempelmanjorrit@gmail.com`, Instagram `@jorrit91`
- Key stats: 90 m² woonruimte · 800 m² perceel · 3 slaapkamers · 1 badkamer · bouwjaar 2011 · luchtwarmtepomp · glasvezel · houtkachel
- Maps link: TBD (user will provide a static URL)

## What's next

Build the 8 real sections using the style above, driven by `src/content/nl.ts` + `src/content/images.ts`. The current `src/app/page.tsx` is a style demo and will be replaced. All content should come straight from `webpage-verkoop-liatorp.md`, do NOT change anything about the text.
