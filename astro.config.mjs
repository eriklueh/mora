// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mora.example.com',
  output: 'static',
  integrations: [sitemap(), mdx()],
  vite: {
    // @ts-expect-error - @tailwindcss/vite exposes rolldown plugin types; astro's bundled vite uses rollup types. Harmless at runtime.
    plugins: [tailwindcss()],
  },
});
