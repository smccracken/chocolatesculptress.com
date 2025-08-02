// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { resolve } from 'path';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  vite: {
    resolve: {
      alias: {
        '~': resolve('./src'),
      },
    },
  },
});
