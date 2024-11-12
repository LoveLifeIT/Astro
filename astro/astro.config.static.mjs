import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.ASTRO_SITE_URL || 'https://lovelifedev.org',
  sitemap: true,
  build: {format: 'directory'},
  output: 'static'
});