import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'heroSection',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'tag',
      title: 'Eyebrow tag',
      type: 'localeString',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeText',
      description: 'Line breaks are preserved. The emphasis fragment goes into "Title emphasis" below.',
    }),
    defineField({
      name: 'titleEmphasis',
      title: 'Title emphasis',
      type: 'localeString',
      description: 'Italic fragment appended at the end of the title (the <em>…</em> part).',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'localeText',
    }),
    defineField({
      name: 'ctas',
      title: 'Call to actions',
      type: 'array',
      of: [{ type: 'cta' }],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'photo',
      title: 'Hero photo',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string' })],
    }),
    defineField({
      name: 'badgeValue',
      title: 'Badge value',
      type: 'localeString',
      description: 'Short label for the badge number+unit, e.g. "3 meses" / "3 months".',
    }),
    defineField({
      name: 'badgeLabel',
      title: 'Badge label',
      type: 'localeText',
      description: 'Supporting line under the badge value.',
    }),
  ],
});
