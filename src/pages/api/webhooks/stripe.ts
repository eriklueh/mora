import type { APIRoute } from 'astro';
import type Stripe from 'stripe';
import { stripe } from '@/lib/stripe';

export const prerender = false;

const webhookSecret = import.meta.env.STRIPE_WEBHOOK_SECRET;

export const POST: APIRoute = async ({ request }) => {
  if (!webhookSecret) {
    console.error('[webhook] STRIPE_WEBHOOK_SECRET is not set');
    return new Response('Webhook secret not configured', { status: 500 });
  }

  const signature = request.headers.get('stripe-signature');
  if (!signature) {
    return new Response('Missing stripe-signature header', { status: 400 });
  }

  // Stripe needs the raw body (bytes) to verify the signature — JSON.parse first
  // would break verification.
  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[webhook] signature verification failed:', message);
    return new Response(`Signature verification failed: ${message}`, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      console.log('[webhook] checkout.session.completed', {
        id: session.id,
        customer_email: session.customer_details?.email,
        customer_phone: session.customer_details?.phone,
        amount_total: session.amount_total,
      });
      // PDF delivery is handled by Stripe's built-in digital product email.
      // Hooks for future work (Mora's CRM, analytics, custom emails via Resend)
      // go here.
      break;
    }

    case 'payment_intent.succeeded':
    case 'charge.refunded':
      // Useful signals to log but no action needed for the MVP.
      console.log(`[webhook] ${event.type}`, { id: event.data.object.id });
      break;

    default:
      // Quiet ACK for events we don't care about; avoids noisy 4xx in dashboard.
      break;
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
};
