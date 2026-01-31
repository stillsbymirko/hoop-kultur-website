import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'h55l42m0',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});
