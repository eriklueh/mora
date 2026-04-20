import { createClient, type SanityClient } from '@sanity/client';

const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET ?? 'production';
const apiVersion = import.meta.env.SANITY_API_VERSION ?? '2025-01-01';

if (!projectId) {
  throw new Error(
    'Missing SANITY_PROJECT_ID. Copy .env.example to .env.local and fill in the project ID.',
  );
}

export const sanity: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
