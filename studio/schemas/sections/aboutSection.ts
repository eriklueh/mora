import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'aboutSection',
  title: 'About',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Section label', type: 'localeString' }),
    defineField({ name: 'title', title: 'Title', type: 'localeText' }),
    defineField({
      name: 'titleEmphasis',
      title: 'Title emphasis',
      type: 'localeString',
    }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'localeText' }),
    defineField({ name: 'quote', title: 'Pull quote', type: 'localeText' }),
    defineField({
      name: 'photo',
      title: 'Profile photo',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string' })],
    }),
    defineField({
      name: 'photoBadge',
      title: 'Photo badge',
      type: 'localeString',
      description: 'Label stuck to the photo, e.g. "Personal Trainer Certificada".',
    }),
    defineField({
      name: 'certs',
      title: 'Certifications',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Shown as pills. Certification brand names (not translated).',
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'stat',
          fields: [
            defineField({
              name: 'num',
              title: 'Number (with optional unit)',
              type: 'localeString',
              description: 'E.g. "5" or "3 meses" / "3 months".',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'localeString',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { num: 'num.es', label: 'label.es' },
            prepare: ({ num, label }) => ({ title: num, subtitle: label }),
          },
        },
      ],
    }),
  ],
});
