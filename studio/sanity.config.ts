import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ??
  process.env.SANITY_PROJECT_ID ??
  'replace-me';

const dataset =
  process.env.SANITY_STUDIO_DATASET ??
  process.env.SANITY_DATASET ??
  'production';

// Document types that are singletons — shown as direct items in the sidebar
// with a fixed document ID, and hidden from the regular "create new" lists.
const SINGLETONS = [
  { id: 'landingPage', type: 'landingPage', title: 'Landing page' },
  { id: 'siteSettings', type: 'siteSettings', title: 'Site settings' },
] as const;

const SINGLETON_TYPES = new Set<string>(SINGLETONS.map((s) => s.type));

export default defineConfig({
  name: 'default',
  title: 'Mora',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            ...SINGLETONS.map((s) =>
              S.listItem()
                .title(s.title)
                .id(s.id)
                .child(S.document().schemaType(s.type).documentId(s.id)),
            ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    // Hide singletons from the "new document" list.
    templates: (templates) =>
      templates.filter(({ schemaType }) => !SINGLETON_TYPES.has(schemaType)),
  },
  document: {
    // Disable the delete action for singletons so editors can't nuke them by accident.
    actions: (input, context) =>
      SINGLETON_TYPES.has(context.schemaType)
        ? input.filter(({ action }) => action !== 'delete' && action !== 'duplicate' && action !== 'unpublish')
        : input,
  },
});
