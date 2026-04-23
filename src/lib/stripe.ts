import Stripe from 'stripe';

const key = import.meta.env.STRIPE_SECRET_KEY;
if (!key) {
  throw new Error(
    'Missing STRIPE_SECRET_KEY. Add it to .env.local (dev) or the Vercel project env (prod).',
  );
}

// Server-only client. Do NOT import this module from .astro files rendered on
// the client or from anything running in the browser.
export const stripe = new Stripe(key, {
  apiVersion: '2026-03-25.dahlia',
  appInfo: {
    name: 'mora-landing',
    url: 'https://mora-iota.vercel.app',
  },
});
