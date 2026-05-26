/**
 * Helper para construir URLs de Cloudinary con transformaciones optimizadas
 * (f_auto = formato auto WebP/AVIF según navegador; q_auto = calidad auto).
 *
 * Las imágenes están todas en la carpeta /asesoriabarkala/ del cloud
 * `dvjb4do4c`. Si cambias de cuenta, actualiza CLOUD_NAME aquí.
 */
const CLOUD_NAME = 'dvjb4do4c';
const FOLDER = 'asesoriabarkala';
const EXT = 'png'; // los originales subidos son PNG; f_auto sirve WebP igualmente

export interface CdnOpts {
  width?: number;
  height?: number;
  crop?: 'fill' | 'fit' | 'scale' | 'thumb' | 'lfill';
  gravity?: 'auto' | 'center' | 'face';
  dpr?: 'auto' | number;
}

export function cdn(publicId: string, opts: CdnOpts = {}): string {
  const transforms: string[] = ['f_auto', 'q_auto'];
  if (opts.dpr !== undefined) transforms.push(`dpr_${opts.dpr}`);
  if (opts.width) transforms.push(`w_${opts.width}`);
  if (opts.height) transforms.push(`h_${opts.height}`);
  if (opts.crop) transforms.push(`c_${opts.crop}`);
  if (opts.gravity) transforms.push(`g_${opts.gravity}`);

  const transformStr = transforms.join(',');
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformStr}/${FOLDER}/${publicId}.${EXT}`;
}

/**
 * IDs Cloudinary de cada imagen del sitio. Centralizado para que sea fácil
 * sustituir o renombrar sin tocar componentes.
 */
export const cloudinaryIds = {
  hero: 'hero_oecvxe',
  jardines: 'jardines_aesn3y',
  og: 'og-image_hxycbq',
  services: {
    contables: 'contables_l4sz5r',
    fiscales: 'fiscales_a35wy0',
    laborales: 'laborales_rupeck',
    controlling: 'controlling_na8ybr',
    empresarial: 'empresarial_oacc1s',
    herencias: 'herencias_ahi5wh',
    otras: 'otras_a3fwic',
  },
  team: {
    pablo: 'pablo_em5eia',
    ernesto: 'ernesto_ubv7hg',
  },
} as const;
