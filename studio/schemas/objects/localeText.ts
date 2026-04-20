import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'localeText',
  title: 'Localized text',
  type: 'object',
  fields: [
    defineField({
      name: 'es',
      title: 'Español',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'en',
      title: 'English',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: { es: 'es', en: 'en' },
    prepare: ({ es, en }) => ({
      title: (es || en || '(empty)').slice(0, 60),
      subtitle: es && en ? undefined : es ? 'ES only' : 'EN only',
    }),
  },
});
