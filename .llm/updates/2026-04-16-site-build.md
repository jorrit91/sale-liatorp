# 2026-04-16 — Real site build (replacing the style demo)

Replaced the demo `src/app/page.tsx` with the real 8-section marketing site. Lint, type-check, and prettier all pass. SSR HTML contains all content (including accordion step bodies — see decision below).

## Content conventions (hard rules)

- **`webpage-verkoop-liatorp.md` is the single source of truth for copy.** Don't paraphrase, invent eyebrows/badges, or add connective sentences. Using source section labels ("Basis informatie", "Ligging", "Voorzieningen") as H2s is fine; short labels for image slides (e.g. "Tuin" for the awkward source word "tuinfoto") are acceptable, but prose is verbatim.
- **All text** lives in `src/content/nl/<section>.ts`, combined in `src/content/nl/index.ts` and exported as `nl`. No loose JSX strings anywhere.
- **All image URLs** live in `src/content/images.ts` as arrays. Index maps to the matching content entry. Currently all empty — user fills them.
- Rich text (bold + italic inline) uses `InlineNode` / `RichParagraph` from `src/types/rich-text.ts`, rendered via `src/components/RichText.tsx`.

## File map

```
src/
  app/page.tsx                       # thin: just composes sections in order
  content/
    images.ts                        # 4 empty URL arrays (hero / basic-info / slideshow / location)
    nl/{hero,basic-info,slideshow,location,costs,amenities,buying-process,footer,common,index}.ts
  types/rich-text.ts
  components/
    RichText.tsx
    icons/InstagramIcon.tsx
    sections/{hero,basic-info,slideshow,location,costs,amenities,buying-process,footer}/index.tsx
    ui/{accordion,badge,button,card,separator,tabs}.tsx   # ShadCN
```

## Section → pattern map

| Section        | Pattern                                                                                       | Notes                                                                                 |
| -------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Hero           | `"use client"` — dark bg + auto-crossfade slideshow (6s interval), dot indicators, 3 CTAs     | Gracefully handles 0/1/N images. Gradient overlay on top of image(s).                 |
| BasicInfo      | Icon grid (lucide) + photo column                                                             | 8 specs mapped to icons via `iconMap`. Photo column shows placeholder block if empty. |
| Slideshow      | 2-up figure grid with captions                                                                | Simple grid, not a carousel (only 2 slides in source).                                |
| Location       | Horizontal ShadCN Tabs, dark image card per tab with text overlay                             | Server component — Tabs primitive owns its own client boundary.                       |
| Costs          | Isolated callout panel with Wallet icon                                                       | Single-paragraph section, on `bg-secondary/60`.                                       |
| Amenities      | Vertical ShadCN Tabs on desktop / horizontal on mobile. ⚠️ indicator on Water tab             | Server component.                                                                     |
| BuyingProcess  | `"use client"` — ShadCN Accordion, single-open, step 1 default-open, TL;DR callout below     | See accordion gotcha below.                                                           |
| Footer         | Dark closing block matching hero aesthetic, mail + IG buttons, location caption              | Uses `nl.footer` + `nl.common`.                                                       |

## Gotchas already learned

- **Base UI Accordion lazy-mounts panels.** Without `hiddenUntilFound` + a `defaultValue`, step bodies are missing from SSR HTML (bad for SEO / find-in-page). The current setup uses `hiddenUntilFound` + `defaultValue={[steps[0].key]}`.
- **Base UI Accordion `defaultValue` is always an array**, even with single-open (`multiple={false}`, which is also the default — don't pass it).
- **Brand icons are gone from `lucide-react` 1.x.** Instagram uses the inline SVG in `src/components/icons/InstagramIcon.tsx`. All other icons (Home, Trees, Bed, Bath, CalendarDays, Wind, Hammer, TentTree, Mail, MapPin, Wallet, AlertTriangle) are available.
- **Base UI Button accepts `render={<a href="..." />}`** to render as an anchor while keeping button styling — use this pattern for mailto / external links, not nested `<a><Button>`.

## UI pattern flexibility

Content doc suggestions ("ga bijvoorbeeld voor ShadCN Accordion") are hints, not mandates — user confirmed it's fine to swap if another ShadCN primitive fits better. Default to the suggested one unless there's a clear reason to deviate, and note any swap.

## State right now

- Dev server on `localhost:3000` renders the full page.
- Page content (incl. bold/italic, tab bodies, accordion step bodies) all present in SSR HTML — verified via curl + grep.
- `common.mapsUrl = "#"` — still a placeholder.
- Image arrays empty — fallback UI renders muted placeholder blocks; real `<Image>` only renders when a URL exists.
- Commits: everything is uncommitted on `main` (user hasn't asked to commit yet).

## Next steps

1. **User-provided assets** (blocking):
   - Fill `src/content/images.ts` arrays (heroImages, basicInfoImages, slideshowImages, locationImages). Inline comments describe each slot.
   - Provide the Maps URL → set `common.mapsUrl` in `src/content/nl/common.ts`.
2. **QA in browser** (not yet done — dev server was smoke-tested via curl only):
   - Mobile responsive sweep, especially Location (wrapping tabs) and Amenities (horizontal→vertical switch at `md`).
   - Hero slideshow crossfade timing and dot interaction.
   - Accordion animation (uses `data-open:animate-accordion-down`).
3. **Metadata polish**:
   - `src/app/layout.tsx` currently has a description that paraphrases the hero — consider replacing with source copy or accept the shortened form for SEO.
   - Favicon, OG image, `og:locale=nl_NL`, `twitter:card`.
4. **Possible follow-ups** (not requested):
   - Jump-nav / sticky header with anchor links to each section (`#basis-informatie`, `#ligging`, `#kosten`, `#voorzieningen`, `#kopen`, `#contact` — IDs already on sections).
   - `prefers-reduced-motion` handling for the hero auto-advance.
   - Error boundaries / `not-found.tsx`? Probably overkill for a one-pager.
5. **Deployment**: not discussed yet. Likely Vercel given the stack.

## What NOT to do next session

- Do not paraphrase or add copy that isn't in `webpage-verkoop-liatorp.md`.
- Do not move text inline into JSX — keep the `nl.*` indirection.
- Do not hard-code image paths in components — always via `src/content/images.ts`.
- Do not add dark mode, tests, or a README. Project is short-lived.
