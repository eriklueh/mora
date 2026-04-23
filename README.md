# Mora Sampaio — Landing

Bilingual (ES/EN) landing page for Mora Sampaio's training programs, built with
[Astro](https://astro.build) and Tailwind v4. Payments via Stripe with PDF
delivery baked in.

## Stack

- **Astro 6** in hybrid mode (`output: 'server'`, per-page prerender)
- **Tailwind v4** via `@tailwindcss/vite`
- **TypeScript** strict
- **Stripe** Checkout Sessions + digital product delivery (email with
  auto-expiring download link)
- Vercel adapter; serverless functions for `/api/*`

## Project layout

```
mora/
├── invoice-*.pdf               # Dummy PDF used by the seed script
├── scripts/
│   └── seed-stripe.mjs         # Idempotent catalog seeder
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── BuyButton.astro     # <form POST> to /api/checkout with price_id
│   │   ├── Nav.astro
│   │   └── sections/…          # One file per landing section
│   ├── content/
│   │   └── landing.ts          # Copy + stripePriceId per product
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── lib/
│   │   └── stripe.ts           # Server-only Stripe client
│   ├── pages/
│   │   ├── index.astro         # prerender=true
│   │   ├── gracias.astro       # prerender=true
│   │   └── api/
│   │       ├── checkout.ts     # POST: create Checkout Session, redirect
│   │       └── webhooks/stripe.ts  # POST: signature-verified event handler
│   ├── styles/global.css
│   └── types/landing.ts
├── astro.config.mjs
└── package.json
```

## Getting started

```bash
npm install
cp .env.example .env.local       # fill STRIPE_* vars
npm run dev                      # http://localhost:4321
```

## Environment variables

| Var | What it is |
|---|---|
| `STRIPE_SECRET_KEY` | Server-side key (`sk_test_…` or `sk_live_…`) |
| `PUBLIC_STRIPE_PUBLISHABLE_KEY` | Client-side key (`pk_test_…` or `pk_live_…`) |
| `STRIPE_WEBHOOK_SECRET` | `whsec_…` from the Stripe CLI or a registered webhook |

⚠️ Never commit `.env.local`. Rotate test keys freely, guard live keys.

## First time: seed Stripe

The seed script creates (or updates, if re-run) the 4 catalog products in your
Stripe account and attaches the dummy PDF for digital delivery.

```bash
STRIPE_SECRET_KEY=sk_test_... npm run seed:stripe
```

It prints 4 `price_…` IDs. Paste them into `src/content/landing.ts`:

```ts
// products.cards[0]
stripePriceId: 'price_1AbC...principiante',
// products.cards[1]
stripePriceId: 'price_1AbC...intermedio',
// products.cards[2]
stripePriceId: 'price_1AbC...challenge',
// products.bundle
stripePriceId: 'price_1AbC...bundle',
```

Also update `REQUIRES_PHONE` in `src/pages/api/checkout.ts` with the Challenge
price ID (so Stripe Checkout asks buyers for their phone — needed for Mora's
WhatsApp follow-up to schedule the 1:1).

## Testing webhooks locally

Install the Stripe CLI and run:

```bash
stripe login
stripe listen --forward-to localhost:4321/api/webhooks/stripe
```

It prints a `whsec_…` — paste it into `.env.local` as `STRIPE_WEBHOOK_SECRET`
and restart `npm run dev`.

Test card: `4242 4242 4242 4242` / any future date / any CVC.

## Production setup

1. Set the same three env vars in **Vercel Project Settings → Environment
   Variables** (use `sk_live_…` / `pk_live_…` once you're done testing).
2. In the Stripe Dashboard (live mode): **Developers → Webhooks → Add endpoint**,
   URL `https://<your-domain>/api/webhooks/stripe`, event `checkout.session.completed`.
   Copy the signing secret into Vercel as `STRIPE_WEBHOOK_SECRET`.
3. Re-run `npm run seed:stripe` against your **live** secret key to create the
   real catalog, copy the new price IDs into `src/content/landing.ts`, redeploy.

## Scripts

```bash
npm run dev          # local dev
npm run build        # production build
npm run preview      # preview built output locally
npm run typecheck    # astro check
npm run seed:stripe  # create/update Stripe catalog (needs STRIPE_SECRET_KEY)
```

## Content model

Every piece of copy lives in `src/content/landing.ts` as typed data:

```ts
{ es: "Tu cuerpo.", en: "Your body." }
```

Components render both spans; `src/styles/global.css` toggles visibility by
`[data-lang]` on `<html>`. The ES/EN toggle in `<Nav>` flips it and persists in
`localStorage`.

## Deploy

`main` → auto-deploy to Vercel. Feature branches get preview deployments. Manual:

```bash
vercel --prod
```
