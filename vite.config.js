import { defineConfig } from "vite";
import { resolve } from "node:path";

// alke.network: static pages, no framework.
//   /        index.html + src/main.js   (welcome page)
//   /join/   join/index.html   (invite links ?ref=CODE: preview tags, then on to /?invite=CODE)
//   /brand/  brand/index.html + src/brand.js   (public brand kit; files in public/brand-kit,
//            zipped into dist/brand-kit/ALKE-Network-Brand-Kit.zip by the deploy workflow)
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        brand: resolve(import.meta.dirname, "brand/index.html"),
        join: resolve(import.meta.dirname, "join/index.html"),
      },
    },
  },
});
