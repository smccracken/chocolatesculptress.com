import { defineConfig } from "astro/config";

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
  prefetch: true,
  site: "https://chocolatesculptress.com",
  trailingSlash: "never",
});
