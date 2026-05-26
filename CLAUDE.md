# Asesoría Barkala — guía para Claude

Landing web estática para **Asesoría Barkala** (Aranjuez, Madrid).
Construida con **Astro 4 + TypeScript**, desplegada en GitHub Pages
sirviendo directamente desde `main:/docs`.

URL pública: <https://asesoriabarkala.com/>

---

## Stack y filosofía

- **Astro 4.16** con TypeScript estricto. Salida 100% HTML estático,
  cero JS por defecto. Hay JS inline en `Header.astro` (toggle móvil
  + dropdown) y **Google Analytics 4** (gtag.js, ID `G-E53RSKHB9D`)
  inyectado en `SEO.astro` → presente en todas las páginas.
- **Sin frameworks UI**. CSS scoped por componente (`<style>`), tokens
  globales en `src/styles/tokens.css`.
- **Tipografía**: Fraunces (titulares) + Inter (cuerpo), cargadas desde
  Google Fonts en `src/components/SEO.astro`.
- **Iconos**: Lucide inline SVG en `src/components/Icon.astro` (subset
  curado, no toda la librería).
- **Imágenes** servidas desde **Cloudinary** con `f_auto,q_auto`
  (WebP/AVIF adaptativos). Helper en `src/utils/cloudinary.ts`. Los
  public_ids están centralizados en `cloudinaryIds`.
- **Despliegue**: GitHub Pages legacy desde `main:/docs`. NO hay workflow
  de Actions: se eligió este modo para reducir latencia de publicación.

---

## Estructura

```
src/
├── components/
│   ├── Header.astro          # logo PNG, nav desktop con dropdown,
│   │                         # nav móvil acordeón
│   ├── Hero.astro            # H1, CTAs, imagen Cloudinary del Palacio
│   ├── Services.astro        # grid 3×3 (7 tarjetas)
│   ├── ServiceCard.astro     # tarjeta clicable → /servicios/{slug}
│   ├── ServiceDetail.astro   # plantilla compartida del detalle
│   ├── About.astro           # 'Nosotros' + Team al final
│   ├── Team.astro            # Ernesto + Pablo (sin LinkedIn link)
│   ├── Process.astro         # 4 pasos
│   ├── Trust.astro           # 3 KPIs + cita azul
│   ├── Contact.astro         # form mailto + NAP + WhatsApp
│   ├── Footer.astro          # 3 columnas (marca, contacto, web)
│   ├── SEO.astro             # meta tags + JSON-LD AccountingService
│   └── Icon.astro            # SVG inline (lucide-style)
├── layouts/
│   └── Base.astro            # <html lang="es">, skip-link, Header/Footer
├── pages/
│   ├── index.astro           # home single-page con anclas
│   └── servicios/
│       ├── contables.astro
│       ├── fiscales.astro
│       ├── laborales.astro
│       ├── controlling.astro
│       ├── empresarial.astro
│       ├── herencias.astro
│       └── otras.astro       # cada una 4 líneas: importa ServiceDetail
├── data/
│   ├── site.ts               # nombre, NAP, teléfono, email,
│   │                         # whatsappUrl, yearsExperience, foundedYear,
│   │                         # logoFile
│   ├── services.ts           # 7 servicios con tagline, intro, blocks
│   │                         # generales/específicos, imageId Cloudinary
│   └── team.ts               # Ernesto, Pablo (imageId Cloudinary)
├── styles/
│   ├── tokens.css            # colores, tipografía, espacios, sombras
│   └── global.css            # reset, base, .btn, .container, etc.
└── utils/
    ├── url.ts                # url() y absoluteUrl() respetando base
    └── cloudinary.ts         # cdn(publicId, opts) + cloudinaryIds

public/
├── favicon.svg
├── logo.png                  # 1014×112 (logo oficial de Barkala)
├── robots.txt
└── .nojekyll                 # marca para que Pages no procese Jekyll

docs/                         # build de Astro, VERSIONADO (sirve GH Pages)
.husky/
└── pre-commit                # build + git add docs cuando cambian fuentes
```

---

## Despliegue — modelo "pre-commit"

GitHub Pages está configurado como `source: { branch: 'main', path: '/docs' }`
(modo *legacy*, no Actions).

El hook `.husky/pre-commit` ejecuta `npm run build` (que vuelca a `/docs`)
y hace `git add docs` automáticamente **sólo si cambian fuentes**
(`src/`, `public/`, `astro.config.*`, `package*.json`). Para commits que
sólo tocan `docs/` o ficheros sueltos no rebuildea.

**Flujo:** editar → `git commit` → el hook regenera `docs/` y lo añade
al commit → `git push` → GitHub Pages publica en segundos.

**Gotcha conocido**: el archivo generado `docs/_astro/_slug_.*.css`
(de la antigua `[slug].astro`) hacía fallar el deploy de Pages con
"Page build failed". Por eso la página dinámica se refactorizó a 7
estáticas que comparten `ServiceDetail.astro` (commit `4035143`).
**Evitar reintroducir rutas dinámicas Astro** mientras se siga usando
Pages legacy.

`astro.config.mjs`:
```js
site: 'https://asesoriabarkala.com',
trailingSlash: 'ignore',
outDir: './docs',
```

El archivo **`public/CNAME`** (contiene `asesoriabarkala.com`) mantiene el
dominio personalizado en cada deploy. **No borrarlo** — sin él, GitHub
Pages perdería el dominio al republicar.

Para diagnosticar fallos de deploy:
```bash
gh api repos/juliojgarciaperez/asesoria-barcala-web/pages/builds | python3 -c "..."
gh api repos/juliojgarciaperez/asesoria-barcala-web/pages
```

---

## Cloudinary

Todas las imágenes salvo el logo viven en `cloud_name: dvjb4do4c`,
carpeta `asesoriabarkala`. Helper:

```ts
import { cdn, cloudinaryIds } from '../utils/cloudinary';

cdn(cloudinaryIds.hero, { width: 1600, crop: 'fill', gravity: 'auto' });
// → https://res.cloudinary.com/dvjb4do4c/image/upload/
//   f_auto,q_auto,w_1600,c_fill,g_auto/asesoriabarkala/hero_oecvxe.png
```

Public_ids registrados:
- `hero_oecvxe` — hero principal (Palacio de Aranjuez)
- `jardines_aesn3y` — sección Nosotros (jardines)
- `og-image_hxycbq` — Open Graph 1200×630
- Servicios: `contables_l4sz5r`, `fiscales_a35wy0`, `laborales_rupeck`,
  `controlling_na8ybr`, `empresarial_oacc1s`, `herencias_ahi5wh`,
  `otras_a3fwic`
- Equipo: `pablo_em5eia`, `ernesto_ubv7hg` (con `gravity: 'face'`)

**Sin overlays**: cualquier capa de tinte azul sobre las imágenes se
eliminó por petición explícita del cliente (commit `535bb65`). Las
fotos se muestran tal cual las devuelve Cloudinary.

---

## Datos del cliente

En `src/data/site.ts`:

| Dato | Valor actual | Real / placeholder |
|---|---|---|
| Nombre legal | `Asesoría Barkala S.L.` | placeholder |
| CIF | `B-00000000` | placeholder |
| Calle | `Calle Postas, 82` | real |
| CP / Ciudad | `28300 Aranjuez (Madrid)` | real |
| Teléfono | `+34 608 68 36 76` | real (mismo número WhatsApp) |
| WhatsApp | `https://wa.me/34608683676` | real |
| Email | `Administracion@asesoriabarkala.com` | real |
| Año fundación | `2006` | real |
| Años experiencia | `20` | real (derivado: 2026 − 2006) |
| Nº clientes | `300` | placeholder, validar |
| Horario | `9:00–14:00 / 16:00–19:00` | placeholder |
| Lat/Lon | `40.0312, -3.6029` | aprox. Aranjuez centro |

El **logo** está en `public/logo.png` (1014×112), apuntado por
`site.logoFile = 'logo.png'`. Sustituir el archivo cambia el logo.

---

## Servicios — orden y contenido

Definidos en `src/data/services.ts`. Orden actual (importante,
es el del dropdown del header, las tarjetas de la home y los menús):

1. Servicios Contables
2. Servicios Fiscales
3. Servicios Laborales
4. Controlling Financiero
5. Asesoría Empresarial
6. Herencias y Sucesiones
7. Otras Gestiones

Cada servicio tiene `tagline`, `intro` y `blocks[]` con secciones
"Generales" y "Específicos" extraídas del PDF de catálogo del cliente
(`/Users/cx01828/Downloads/Presentación de Servicios.pdf`).

---

## Equipo

Definido en `src/data/team.ts`. Orden: **Ernesto primero, Pablo después**
(decisión del cliente, commit `8bf5b13`).

- **Ernesto López-Tarruella Feria** — Asesor. Bio basada en su LinkedIn
  público (banca corporativa, CEF).
- **Pablo Cabanillas Rodríguez** — Asesor. Bio basada en su LinkedIn
  público (finanzas, Universidad de Huelva).

**Ya NO hay botón "Ver perfil en LinkedIn"** (eliminado por petición
del cliente, commit `a223f24`). Los datos `linkedin` siguen en el
data por si se reactiva.

---

## SEO y accesibilidad

- `<title>` y `description` por página vía `Base.astro` + `SEO.astro`.
- JSON-LD `AccountingService` con NAP, geo, openingHoursSpecification
  y `contactPoint` (con `url` apuntando a WhatsApp).
- Sitemap generado por `@astrojs/sitemap` (`sitemap-index.xml` +
  `sitemap-0.xml`): 8 URLs (home + 7 servicios).
- `robots.txt` en `public/`.
- `<html lang="es">`, skip-link, `:focus-visible` con outline azul.
- Tamaños responsivos del logo: 16/18/20 px (móvil/tablet/desktop) —
  cliente prefirió logo pequeño.

---

## Lo que se quitó deliberadamente

No reintroducir sin pedirlo expresamente:

- **Páginas legales** (Aviso legal, Política de privacidad/cookies).
  Eliminadas en commit `0ac1cb8`. ⚠️ Si se vuelve a un formulario con
  backend (no `mailto:`), revisar requisitos LSSI-CE / RGPD.
- **Campo "Email"** del formulario de contacto: redundante con el
  `mailto:` que abre el cliente de correo del visitante.
- **Checkbox RGPD** del formulario (junto con la página de privacidad).
- **"Hecho con cuidado en Aranjuez"** en el footer.
- **Overlays oscuros** sobre las imágenes Cloudinary (mostrar foto
  cruda).
- **Workflow `.github/workflows/deploy.yml`**: se eliminó al cambiar
  a deploy desde `main:/docs`.
- **Páginas dinámicas `[slug]`**: causan fallos en Pages legacy
  (ver sección Despliegue).

---

## Comandos

```bash
npm install        # incluye husky install
npm run dev        # http://localhost:4321/asesoria-barcala-web/
npm run build      # genera /docs
npm run preview    # sirve /docs en local

# Diagnóstico Pages
gh api repos/juliojgarciaperez/asesoria-barcala-web/pages
gh api repos/juliojgarciaperez/asesoria-barcala-web/pages/builds

# Forzar republicación sin commit
gh api -X POST repos/juliojgarciaperez/asesoria-barcala-web/pages/builds
```

---

## Convenciones para Claude

- **Esperar entre 60–120 s** tras un push antes de comprobar la
  URL pública: GH Pages tarda en propagar.
- **Antes de modificar imágenes**: si la imagen ya está en Cloudinary,
  cambiar el `cloudinaryIds.{key}` o el `imageId` del servicio en lugar
  de añadir archivos a `public/images/`.
- **No restaurar páginas legales ni overlays** sin que el usuario lo
  pida explícitamente.
- **Idioma**: todo el contenido visible en español de España.
- **Formato de commits**: imperativo + cuerpo explicativo si la decisión
  no es obvia. Co-author de Claude al final.
- **No commitear sin pedirlo**; sí pushear cuando se ha pedido commit.
- **Skill `prompts-imagenes.txt`** en la raíz: prompts listos para
  generar las 10 imágenes en ChatGPT cuando se necesiten regenerar.

---

## Histórico de decisiones relevantes

| Commit | Decisión |
|---|---|
| `98ef99a` | Initial commit (Astro + Cloudflare Pages plan) |
| `d370efc` | Cambio a deploy desde `main:/docs` + pre-commit Husky |
| `abc895a` | Refactor servicios a multi-page |
| `4eed257` | Migración a Cloudinary |
| `535bb65` | Quita overlays oscuros sobre imágenes |
| `0ac1cb8` | Elimina páginas legales + checkbox RGPD |
| `4035143` | `[slug].astro` → 7 páginas estáticas (workaround Pages) |
