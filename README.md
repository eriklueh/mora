# Mora Ebook

Migration of the Mora ebook from a monolithic HTML file to a statically-generated site powered by [Astro](https://astro.build) and [Sanity CMS](https://www.sanity.io).

## Stack

- **Astro** (static output) + TypeScript strict
- **Tailwind CSS** for utility styling
- **MDX** for authoring flexibility
- **Sanity v3** as headless CMS (Free tier)
- **@sanity/client** + GROQ for content fetching at build time

## Repository layout

```
mora/
├── legacy/               # Original HTML ebook kept as historical reference
│   └── mora_ebook_v4.html
├── scripts/              # Dev/build utilities (e.g. legacy HTML parser)
├── src/                  # Astro app
│   ├── components/
│   ├── layouts/
│   ├── lib/              # sanity client, GROQ queries
│   ├── pages/
│   ├── styles/
│   └── types/
├── studio/               # Sanity Studio v3 (independent sub-project)
│   └── schemas/
├── astro.config.mjs
└── package.json          # root scripts that orchestrate both projects
```

The project uses a **simple two-project layout** (not a formal monorepo): Astro lives at the root, Sanity Studio lives under `studio/` with its own `package.json`. Root scripts delegate into `studio/` via `cd`.

## Getting started

Install dependencies (once, at the root):

```bash
npm install
cd studio && npm install && cd ..
```

Copy env template and fill in the Sanity project ID:

```bash
cp .env.example .env.local
# Edit .env.local with your SANITY_PROJECT_ID
```

### Dev

```bash
npm run dev            # Astro at http://localhost:4321
npm run studio:dev     # Sanity Studio at http://localhost:3333
```

### Build

```bash
npm run build          # Astro static site → ./dist
npm run preview        # Preview the built site
```

### Deploy Sanity Studio

```bash
npm run studio:deploy  # Deploys studio to *.sanity.studio (free)
```

## Environment variables

| Variable              | Purpose                                      |
|-----------------------|----------------------------------------------|
| `SANITY_PROJECT_ID`   | Sanity project ID (from sanity.io dashboard) |
| `SANITY_DATASET`      | Usually `production`                         |
| `SANITY_API_VERSION`  | Locked API date, e.g. `2025-01-01`           |

See `.env.example` for the template.

## Status

Bootstrap phase: scaffold in place, content migration pending.
