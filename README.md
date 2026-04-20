# Mora Sampaio — Landing

Bilingual (ES/EN) static landing page for Mora Sampaio's training programs,
built with [Astro](https://astro.build) and Tailwind v4.

## Stack

- **Astro 6** (static output)
- **Tailwind v4** via `@tailwindcss/vite`
- **TypeScript** strict mode
- **Zero runtime dependencies** — everything renders at build time

## Project layout

```
mora/
├── legacy/
│   └── mora_ebook_v4.html     # Original monolithic HTML (historical reference)
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Bilingual.astro     # <span class="es">…</span><span class="en">…</span>
│   │   ├── Nav.astro           # Top nav with ES/EN toggle
│   │   ├── SectionHeading.astro # label + title + emphasis + subtitle
│   │   └── sections/           # One file per landing section
│   │       ├── Hero.astro
│   │       ├── About.astro
│   │       ├── Paradigm.astro
│   │       ├── Products.astro
│   │       ├── Preview.astro
│   │       ├── Habits.astro
│   │       ├── Timeline.astro
│   │       └── FooterCta.astro
│   ├── content/
│   │   └── landing.ts          # Single source of truth for all copy (ES/EN)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro         # Composes all sections
│   ├── styles/
│   │   └── global.css          # Design tokens + ported section styles
│   └── types/
│       └── landing.ts          # Types for every section's content
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

### How content is modeled

All copy lives in `src/content/landing.ts` as a single typed `LandingContent`
object. Every piece of translatable text is a `LocaleString`:

```ts
{ es: "Tu cuerpo.", en: "Your body." }
```

Components render both languages inline:

```html
<span class="es">Tu cuerpo.</span><span class="en">Your body.</span>
```

and `src/styles/global.css` toggles visibility via the `data-lang` attribute on
`<html>`:

```css
[data-lang="es"] .en { display: none; }
[data-lang="en"] .es { display: none; }
```

The ES/EN buttons in `<Nav>` set that attribute (and persist the choice in
`localStorage`). No hydration, no framework — just a small inline `<script>`.

### Adding / editing content

Edit `src/content/landing.ts`. Types in `src/types/landing.ts` will tell you
exactly what every section expects. To add a new program card, push an entry
into `landing.products.cards` and it renders automatically.

### Adding a new section

1. Add its type to `src/types/landing.ts` and plug it into `LandingContent`.
2. Add data under a new key in `src/content/landing.ts`.
3. Create `src/components/sections/NewSection.astro` following the pattern.
4. Import and compose it in `src/pages/index.astro`.

## Getting started

```bash
npm install
npm run dev            # http://localhost:4321
npm run build          # static site -> ./dist
npm run preview        # preview the production build
npm run typecheck      # astro check
```

## Deploy

The `main` branch auto-deploys to Vercel (`mora-iota.vercel.app`). Manual deploy:

```bash
vercel --prod
```
