import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Configurado para GitHub Pages con dominio personalizado asesoriabarkala.com.
// El build se versiona en /docs (estrategia "pre-commit" — Pages lee main:/docs).
// El archivo public/CNAME mantiene el dominio personalizado tras cada deploy.
export default defineConfig({
  site: 'https://asesoriabarkala.com',
  trailingSlash: 'ignore',
  outDir: './docs',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
