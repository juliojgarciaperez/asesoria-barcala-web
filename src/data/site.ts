export const site = {
  name: 'Asesoría Barkala',
  shortName: 'Barkala',
  domain: 'juliojgarciaperez.github.io/asesoria-barcala-web',
  url: 'https://juliojgarciaperez.github.io/asesoria-barcala-web',
  // Si tienes el logo original (PNG/SVG/WebP), guárdalo en /public con este nombre
  // y la web lo usará automáticamente. Mantén proporción horizontal ~7:1.
  logoFile: 'logo.svg',

  // Datos de contacto — sustituir por valores reales antes de publicar
  phone: '+34 608 68 36 76',
  phoneDisplay: '608 68 36 76',
  // Número internacional sin '+' ni espacios, formato wa.me
  whatsappNumber: '34608683676',
  whatsappUrl: 'https://wa.me/34608683676',
  email: 'Administracion@asesoriabarkala.com',

  // Dirección
  street: 'Calle Postas, 82',
  postalCode: '28300',
  city: 'Aranjuez',
  region: 'Madrid',
  country: 'ES',

  // Coordenadas (Aranjuez centro, aproximadas — verificar antes de publicar)
  latitude: 40.0312,
  longitude: -3.6029,

  // Horario
  hoursMorning: '9:00 – 14:00',
  hoursAfternoon: '16:00 – 19:00',

  // Cifras de confianza
  yearsExperience: 20,
  numClients: 300,
  foundedYear: 2006,

  // Legal — sustituir
  legalName: 'Asesoría Barkala S.L.',
  cif: 'B-00000000',
} as const;
