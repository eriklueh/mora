import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'previewSection',
  title: 'Sneak peek',
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
      name: 'cards',
      title: 'Preview cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'previewCard',
          fields: [
            defineField({
              name: 'level',
              title: 'Level',
              type: 'localeString',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'name',
              title: 'Name',
              type: 'localeString',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'meta',
              title: 'Meta bullets',
              type: 'array',
              of: [{ type: 'localeString' }],
              description: 'Short meta like "3–4 días/semana", "30–45 min por sesión".',
            }),
            defineField({
              name: 'days',
              title: 'Days',
              type: 'array',
              of: [{ type: 'localeString' }],
              description: 'One entry per training day (e.g. "Día 1 — Piernas y glúteos").',
            }),
            defineField({
              name: 'extra',
              title: 'Extra line',
              type: 'localeText',
              description: 'Footer line such as "+ calentamiento, técnica y guía de cardio".',
            }),
            defineField({
              name: 'cta',
              title: 'CTA',
              type: 'cta',
            }),
            defineField({
              name: 'featured',
              title: 'Featured',
              type: 'boolean',
              initialValue: false,
            }),
          ],
          preview: {
            select: { level: 'level.es', name: 'name.es' },
            prepare: ({ level, name }) => ({ title: name, subtitle: level }),
          },
        },
      ],
    }),
  ],
});
