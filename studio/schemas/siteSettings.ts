import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  // Singleton: hide the "new document" action in the structure.
  fields: [
    defineField({
      name: 'title',
      title: 'Site title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Site description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'ogImage',
      title: 'Default OG image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'nav',
      title: 'Navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Href',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'href' },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site settings' }),
  },
});
