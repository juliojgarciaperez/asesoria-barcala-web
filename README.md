# Asesoría Barkala — Landing web

Landing estática para [Asesoría Barkala](https://barkala.es), construida con [Astro](https://astro.build).

- **Stack:** Astro 4 + TypeScript
- **Tipografía:** Fraunces (titulares) + Inter (cuerpo) — Google Fonts
- **Color primario:** `#1f4e79`
- **Despliegue recomendado:** Cloudflare Pages (build `npm run build`, output `dist/`)

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Comandos

```bash
npm install        # instalar dependencias (también activa el hook de husky)
npm run dev        # arrancar servidor de desarrollo (http://localhost:4321)
npm run build      # construir a /docs (HTML estático que publica GitHub Pages)
npm run preview    # previsualizar el build en local
```

### Despliegue

GitHub Pages está configurado para servir directamente desde `main:/docs`. Hay un
hook `pre-commit` (Husky) que ejecuta `npm run build` y añade `/docs` al commit
cuando se han modificado fuentes (`src/`, `public/`, `astro.config.*`,
`package.json` o `package-lock.json`). Por tanto:

1. Trabaja con normalidad.
2. `git commit` → el hook regenera `/docs` y lo incluye en el commit.
3. `git push` → GitHub Pages publica el nuevo `/docs` en unos segundos.

URL pública: <https://juliojgarciaperez.github.io/asesoria-barcala-web/>

## Estructura

```
src/
├── components/     # Componentes Astro reutilizables
├── data/           # Datos del sitio y servicios (site.ts, services.ts)
├── layouts/        # Base.astro
├── pages/          # Rutas (index + 3 legales)
└── styles/         # tokens.css (variables) + global.css

public/             # Assets estáticos (favicon, imágenes, robots.txt)
```

## Antes de publicar — checklist de placeholders

Edita estos archivos con los datos reales:

1. **`src/data/site.ts`** — teléfono, email, dominio, años de experiencia, nº de clientes, CIF, denominación legal, año de fundación, horario.
2. **`public/images/`** — añadir `aranjuez-hero.webp` y `aranjuez-jardines.webp` (ver `public/images/README.md`).
3. **`public/og-image.jpg`** — crear imagen Open Graph 1200×630 con el logo y tagline.
4. **`src/pages/aviso-legal.astro`** — completar datos registrales del Registro Mercantil.
5. **Páginas legales** — revisar con un profesional antes de publicar.

## SEO

- **Title/description** en `src/components/SEO.astro`.
- **JSON-LD AccountingService** en el mismo archivo (verificar coordenadas y datos).
- **Sitemap** generado automáticamente por `@astrojs/sitemap` en `/sitemap-index.xml`.
- **Robots** en `public/robots.txt`.

## Performance objetivo (Lighthouse)

| Métrica | Objetivo |
|---|---|
| Performance | ≥ 95 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

## Licencia

Privado — todos los derechos reservados.
