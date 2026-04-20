import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'productsSection',
  title: 'Products',
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
      title: 'Product cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'productCard',
          fields: [
            defineField({
              name: 'level',
              title: 'Level',
              type: 'localeString',
              description: 'E.g. "Principiante" / "Beginner".',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'name',
              title: 'Name',
              type: 'localeString',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'desc',
              title: 'Description',
              type: 'localeText',
            }),
            defineField({
              name: 'photo',
              title: 'Photo',
              type: 'image',
              options: { hotspot: true },
              fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string' })],
            }),
            defineField({
              name: 'includes',
              title: 'Includes',
              type: 'array',
              of: [{ type: 'localeString' }],
              description: 'Bullet points of what the program includes.',
            }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'string',
              description: 'Numeric price without currency, e.g. "19".',
            }),
            defineField({
              name: 'currency',
              title: 'Currency symbol',
              type: 'string',
              initialValue: '$',
            }),
            defineField({
              name: 'cta',
              title: 'CTA',
              type: 'cta',
            }),
            defineField({
              name: 'featured',
              title: 'Featured card',
              type: 'boolean',
              description: 'Gets the "Most popular" badge and highlight styling.',
              initialValue: false,
            }),
            defineField({
              name: 'featuredLabel',
              title: 'Featured badge label',
              type: 'localeString',
              hidden: ({ parent }) => !parent?.featured,
            }),
          ],
          preview: {
            select: {
              level: 'level.es',
              name: 'name.es',
              price: 'price',
              media: 'photo',
            },
            prepare: ({ level, name, price, media }) => ({
              title: name,
              subtitle: [level, price ? `$${price}` : undefined]
                .filter(Boolean)
                .join(' · '),
              media,
            }),
          },
        },
      ],
    }),
  ],
});
