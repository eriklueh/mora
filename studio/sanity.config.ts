import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

// Project ID is read from sanity.cli.ts at build/dev time via the CLI.
// For the runtime config we accept env overrides so CI/preview can target
// different datasets without editing source.
const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ??
  process.env.SANITY_PROJECT_ID ??
  'replace-me';

const dataset =
  process.env.SANITY_STUDIO_DATASET ??
  process.env.SANITY_DATASET ??
  'production';

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
            S.listItem()
              .title('Site settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings'),
              ),
            S.divider(),
            S.documentTypeListItem('book').title('Books'),
            S.documentTypeListItem('chapter').title('Chapters'),
            S.documentTypeListItem('author').title('Authors'),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
