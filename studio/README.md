# Mora — Sanity Studio

Sanity v3 studio backing the Mora ebook.

## First-time setup

1. **Login** to Sanity:

   ```bash
   npx sanity login
   ```

2. **Create** a Sanity project (or link to an existing one). From the `studio/` directory:

   ```bash
   npx sanity init --env
   ```

   This writes a `.env` file with `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET`.

   Copy those values into the root `.env.local` under `SANITY_PROJECT_ID` and `SANITY_DATASET` so Astro can read them too.

3. **Run** the studio locally:

   ```bash
   npm run dev
   ```

   Default URL: http://localhost:3333

4. **Deploy** the hosted studio (free under the Sanity Free tier):

   ```bash
   npm run deploy
   ```

## Schemas

- `book` — book metadata + ordered references to chapters
- `chapter` — title, slug, order, portable-text body (images, code, quotes)
- `author` — name, bio, photo, socialLinks
- `siteSettings` — singleton for site title, description, OG image, nav

Edit schemas in `schemas/` and re-run `npm run dev`. Sanity hot-reloads.
