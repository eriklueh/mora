import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'landingPage',
  title: 'Landing page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero', default: true },
    { name: 'about', title: 'About' },
    { name: 'paradigm', title: 'Paradigm' },
    { name: 'products', title: 'Products' },
    { name: 'preview', title: 'Preview' },
    { name: 'habits', title: 'Habits' },
    { name: 'timeline', title: 'Timeline' },
    { name: 'cta', title: 'Footer CTA' },
  ],
  fields: [
    defineField({ name: 'hero', title: 'Hero', type: 'heroSection', group: 'hero' }),
    defineField({ name: 'about', title: 'About', type: 'aboutSection', group: 'about' }),
    defineField({ name: 'paradigm', title: 'Paradigm', type: 'paradigmSection', group: 'paradigm' }),
    defineField({ name: 'products', title: 'Products', type: 'productsSection', group: 'products' }),
    defineField({ name: 'preview', title: 'Preview', type: 'previewSection', group: 'preview' }),
    defineField({ name: 'habits', title: 'Habits', type: 'habitsSection', group: 'habits' }),
    defineField({ name: 'timeline', title: 'Timeline', type: 'timelineSection', group: 'timeline' }),
    defineField({ name: 'cta', title: 'Footer CTA', type: 'ctaSection', group: 'cta' }),
  ],
  preview: {
    prepare: () => ({ title: 'Landing page' }),
  },
});
