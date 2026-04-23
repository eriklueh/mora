// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://mora-iota.vercel.app',
  // Server-rendered by default so /api/* routes work. Individual pages opt
  // back into static prerender via `export const prerender = true`.
  output: 'server',
  adapter: vercel(),
  integrations: [sitemap()],
  vite: {
    // @ts-expect-error - @tailwindcss/vite exposes rolldown plugin types; astro's bundled vite uses rollup types. Harmless at runtime.
    plugins: [tailwindcss()],
  },
});
