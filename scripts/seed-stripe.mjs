#!/usr/bin/env node
// One-off script to create (or upsert) the Mora product catalog in Stripe.
// Idempotent: looks up products by `metadata.slug` and updates instead of
// creating duplicates. Attaches the dummy PDF to each product's digital
// delivery so Stripe emails a download link to buyers automatically.
//
// Usage (test mode):
//   STRIPE_SECRET_KEY=sk_test_... node scripts/seed-stripe.mjs
//
// Re-running with the same slug will UPDATE that product (price cannot be
// mutated, so a new Price is created and the old one is archived).

import Stripe from 'stripe';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const key = process.env.STRIPE_SECRET_KEY;
if (!key) {
  console.error('❌ STRIPE_SECRET_KEY env var is required.');
  console.error('   Run: STRIPE_SECRET_KEY=sk_test_... node scripts/seed-stripe.mjs');
  process.exit(1);
}

const DUMMY_PDF = resolve(ROOT, 'invoice-2000015053293712.pdf');
if (!existsSync(DUMMY_PDF)) {
  console.error(`❌ Dummy PDF not found at ${DUMMY_PDF}`);
  process.exit(1);
}

const stripe = new Stripe(key, { apiVersion: '2026-03-25.dahlia' });

/** @typedef {{
 *   slug: string,
 *   name: string,
 *   description: string,
 *   priceCents: number,
 *   requiresPhone?: boolean,
 * }} ProductDef */

/** @type {ProductDef[]} */
const products = [
  {
    slug: 'tu-primera-vez',
    name: 'Tu primera vez — Principiante',
    description:
      'Programa de entrenamiento para principiantes. Técnica desde el día uno, 3 días por semana, calentamiento + cardio guide.',
    priceCents: 1900,
  },
  {
    slug: 'estoy-lista-para-mas',
    name: 'Estoy lista para más — Intermedio',
    description:
      'Programa intermedio con volumen progresivo, 4 días por semana, guía de progresión semana a semana.',
    priceCents: 3500,
  },
  {
    slug: 'entrena-como-yo',
    name: 'Entrena como yo — Challenge 8 semanas',
    description:
      'Glute & Strength Challenge de 8 semanas con progresión Double Progression, deload week, y sesión 1 a 1 con Mora (30 min).',
    priceCents: 5900,
    requiresPhone: true,
  },
  {
    slug: 'bundle-programa-recetas',
    name: 'Bundle — Programa + 10 recetas fit',
    description:
      'Cualquier programa + 10 recetas fit pensadas por Mora para post-entrenamiento.',
    priceCents: 2500,
  },
];

// ── helpers ─────────────────────────────────────────────────────────────────

async function findProductBySlug(slug) {
  // Stripe doesn't index metadata directly; we list and filter client-side.
  // Low volume so this is cheap.
  for await (const p of stripe.products.list({ limit: 100, active: true })) {
    if (p.metadata?.slug === slug) return p;
  }
  return null;
}

async function uploadDummyFile() {
  const buffer = readFileSync(DUMMY_PDF);
  const file = await stripe.files.create({
    purpose: 'product_image', // any non-restrictive purpose works as a stand-in
    file: {
      data: buffer,
      name: 'mora-programa.pdf',
      type: 'application/pdf',
    },
  });
  return file;
}

async function ensurePrice(productId, priceCents) {
  const existing = await stripe.prices.list({ product: productId, active: true });
  const match = existing.data.find(
    (p) => p.unit_amount === priceCents && p.currency === 'usd' && p.type === 'one_time',
  );
  if (match) return match;

  const created = await stripe.prices.create({
    product: productId,
    unit_amount: priceCents,
    currency: 'usd',
  });
  // Archive any previous active prices so there's only one source of truth.
  for (const old of existing.data) {
    if (old.id !== created.id) {
      await stripe.prices.update(old.id, { active: false });
    }
  }
  return created;
}

// ── main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`Seeding Stripe catalog (mode: ${key.startsWith('sk_test_') ? 'TEST' : 'LIVE'})\n`);

  // Upload the dummy PDF once and reuse it for all products.
  const file = await uploadDummyFile();
  console.log(`📎 Uploaded dummy PDF: ${file.id}\n`);

  const summary = [];

  for (const def of products) {
    const existing = await findProductBySlug(def.slug);

    const product = existing
      ? await stripe.products.update(existing.id, {
          name: def.name,
          description: def.description,
          metadata: {
            slug: def.slug,
            requires_phone: String(def.requiresPhone ?? false),
            dummy_file: file.id,
          },
        })
      : await stripe.products.create({
          name: def.name,
          description: def.description,
          metadata: {
            slug: def.slug,
            requires_phone: String(def.requiresPhone ?? false),
            dummy_file: file.id,
          },
        });

    const price = await ensurePrice(product.id, def.priceCents);

    console.log(`${existing ? '🔄' : '✅'} ${def.slug}`);
    console.log(`   product: ${product.id}`);
    console.log(`   price:   ${price.id}  (USD ${(def.priceCents / 100).toFixed(2)})`);
    console.log('');

    summary.push({ slug: def.slug, product: product.id, price: price.id });
  }

  console.log('─'.repeat(60));
  console.log('PRICE IDs for content/landing.ts:\n');
  for (const s of summary) {
    console.log(`  ${s.slug.padEnd(30)} → ${s.price}`);
  }
  console.log('');
  console.log('⚠️  Remember: if the Challenge price_id changes, update the');
  console.log('   REQUIRES_PHONE set in src/pages/api/checkout.ts.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
