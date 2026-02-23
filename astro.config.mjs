import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import cssnano from "cssnano";

// https://astro.build/config
export default defineConfig({
  css: {
    postcss: {
      plugins: [cssnano],
    },
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [mdx()],
  prefetch: true,
  site: "https://chocolatesculptress.com",
  trailingSlash: "never",
});
