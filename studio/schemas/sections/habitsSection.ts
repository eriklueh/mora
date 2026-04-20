import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'habitsSection',
  title: 'Habits',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Section label', type: 'localeString' }),
    defineField({ name: 'title', title: 'Title', type: 'localeText' }),
    defineField({
      name: 'titleEmphasis',
      title: 'Title emphasis',
      type: 'localeString',
    }),
    defineField({ name: 'quote', title: 'Pull quote', type: 'localeText' }),
    defineField({
      name: 'tips',
      title: 'Tips',
      type: 'array',
      of: [{ type: 'localeText' }],
      description: 'Each tip renders as a bulleted line.',
    }),
  ],
});
