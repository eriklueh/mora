import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'localeString',
  title: 'Localized string',
  type: 'object',
  fields: [
    defineField({
      name: 'es',
      title: 'Español',
      type: 'string',
    }),
    defineField({
      name: 'en',
      title: 'English',
      type: 'string',
    }),
  ],
  preview: {
    select: { es: 'es', en: 'en' },
    prepare: ({ es, en }) => ({
      title: es || en || '(empty)',
      subtitle: es && en ? undefined : es ? 'ES only' : 'EN only',
    }),
  },
});
