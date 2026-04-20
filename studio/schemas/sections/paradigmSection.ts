import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'paradigmSection',
  title: 'Paradigm',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Section label', type: 'localeString' }),
    defineField({ name: 'title', title: 'Title', type: 'localeText' }),
    defineField({
      name: 'titleEmphasis',
      title: 'Title emphasis',
      type: 'localeString',
    }),
    defineField({
      name: 'pillars',
      title: 'Pillars',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'pillar',
          fields: [
            defineField({
              name: 'num',
              title: 'Number',
              type: 'string',
              description: 'Display number (e.g. "01").',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'localeString',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'desc',
              title: 'Description',
              type: 'localeText',
            }),
          ],
          preview: {
            select: { num: 'num', title: 'title.es' },
            prepare: ({ num, title }) => ({ title: `${num} — ${title}` }),
          },
        },
      ],
      validation: (Rule) => Rule.max(6),
    }),
  ],
});
