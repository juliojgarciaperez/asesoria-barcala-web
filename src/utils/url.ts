const RAW_BASE = import.meta.env.BASE_URL;
const BASE = RAW_BASE.endsWith('/') ? RAW_BASE : `${RAW_BASE}/`;
const SITE = import.meta.env.SITE ?? '';

/**
 * Devuelve un href correcto teniendo en cuenta el `base` configurado en
 * astro.config.mjs (necesario para que la web funcione tanto en local como
 * publicada bajo /asesoria-barcala-web/ en GitHub Pages).
 *
 * Acepta paths absolutos ('/aviso-legal'), relativos ('aviso-legal'),
 * solo ancla ('#servicios') o combinados ('/#contacto').
 */
export function url(path = ''): string {
  if (!path || path === '/') return BASE;
  if (path.startsWith('#')) return `${BASE}${path}`;
  if (path.startsWith('/#')) return `${BASE}${path.slice(1)}`;
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE}${clean}`;
}

/** Devuelve una URL absoluta (con dominio) lista para meta tags y JSON-LD. */
export function absoluteUrl(path = ''): string {
  const pathname = url(path);
  if (!SITE) return pathname;
  return new URL(pathname, SITE).toString();
}
