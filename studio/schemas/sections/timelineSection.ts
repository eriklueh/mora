import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'timelineSection',
  title: 'Timeline',
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
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'timelineStep',
          fields: [
            defineField({
              name: 'time',
              title: 'Time range',
              type: 'localeString',
              description: 'E.g. "Semana 1–2" / "Week 1–2".',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Step title',
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
            select: { time: 'time.es', title: 'title.es' },
            prepare: ({ time, title }) => ({ title: `${time} — ${title}` }),
          },
        },
      ],
      validation: (Rule) => Rule.max(8),
    }),
  ],
});
