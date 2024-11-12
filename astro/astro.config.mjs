import { defineConfig } from 'astro/config';
import node from "@astrojs/node";

const port = parseInt(process.env.PORT) || 4321;

// https://astro.build/config
export default defineConfig({
  site: process.env.ASTRO_SITE_URL || 'https://love.life',  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  output: 'server',
  build: {format: 'directory',},
  adapter: node({mode: "standalone"}),
  compressHTML: false,
  server: {
    host: '0.0.0.0',
    port,
  },
});