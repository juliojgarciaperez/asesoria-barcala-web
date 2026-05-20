import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Configurado para GitHub Pages en juliojgarciaperez.github.io/asesoria-barcala-web/
// Cambia `site` y elimina `base` si en el futuro se usa un dominio personalizado.
export default defineConfig({
  site: 'https://juliojgarciaperez.github.io',
  base: '/asesoria-barcala-web',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
