// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mora-iota.vercel.app',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    // @ts-expect-error - @tailwindcss/vite exposes rolldown plugin types; astro's bundled vite uses rollup types. Harmless at runtime.
    plugins: [tailwindcss()],
  },
});
