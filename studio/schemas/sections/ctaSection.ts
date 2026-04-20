import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'ctaSection',
  title: 'Footer CTA',
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
    defineField({
      name: 'cta',
      title: 'Call to action',
      type: 'cta',
    }),
  ],
});
