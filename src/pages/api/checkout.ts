import type { APIRoute } from 'astro';
import { stripe } from '@/lib/stripe';

export const prerender = false;

// Products that include a 1:1 session: collect a phone number so Mora can
// follow up over WhatsApp after checkout.
const REQUIRES_PHONE = new Set<string>([
  'price_1TPEewAf0WNWKogWBYkhjScy', // entrena-como-yo (Challenge — includes 1:1 session)
]);

export const POST: APIRoute = async ({ request, redirect, url }) => {
  const form = await request.formData();
  const priceId = form.get('price_id');

  if (typeof priceId !== 'string' || !priceId.startsWith('price_')) {
    return new Response('Invalid or missing price_id', { status: 400 });
  }

  const origin = url.origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/gracias?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#rutinas`,
      allow_promotion_codes: false,
      billing_address_collection: 'auto',
      phone_number_collection: {
        enabled: REQUIRES_PHONE.has(priceId),
      },
      // Send the mandatory Stripe receipt email (covers PDF download links
      // for digital products). Customer email is collected by Checkout.
      customer_creation: 'if_required',
      payment_intent_data: {
        metadata: { price_id: priceId },
      },
    });

    if (!session.url) {
      return new Response('Stripe did not return a session URL', { status: 500 });
    }
    return redirect(session.url, 303);
  } catch (err) {
    console.error('[checkout]', err);
    const message = err instanceof Error ? err.message : 'Unknown error';
    return new Response(`Checkout error: ${message}`, { status: 500 });
  }
};
