export interface ServiceBlock {
  heading: string;
  items: string[];
}

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  // Página de detalle
  tagline: string;
  intro: string;
  blocks: ServiceBlock[];
  // Imagen: ruta relativa dentro de /public. Si el archivo no existe se
  // mostrará un placeholder generado con CSS (gradient + icono grande).
  image: string;
  imageAlt: string;
}

export const services: Service[] = [
  {
    id: 'contables',
    title: 'Servicios Contables',
    shortTitle: 'Contable',
    description:
      'Llevamos la contabilidad de tu empresa con rigor y al día. Libros oficiales, cuentas anuales, depósito en el Registro Mercantil y la información financiera que necesitas para tomar decisiones.',
    icon: 'calculator',
    tagline: 'Tu contabilidad al día, sin esfuerzo por tu parte.',
    intro:
      'Asumimos toda la llevanza contable de tu sociedad a partir de los soportes en formato digital o papel que nos facilitas. Mecanizamos cada operación de acuerdo con el Plan General Contable español y te enviamos los Estados Financieros con periodicidad trimestral, listos para tomar decisiones con datos reales.',
    blocks: [
      {
        heading: 'Servicios contables generales',
        items: [
          'Llevanza completa de la contabilidad de la sociedad a partir de soportes digitales o en papel.',
          'Recopilación de la información necesaria para realizar los registros contables.',
          'Mecanización en nuestro sistema contable de acuerdo con el Plan General Contable español.',
          'Archivo electrónico del soporte contable.',
          'Elaboración de Estados Financieros con periodicidad trimestral.',
          'Resolución por correo electrónico, teléfono o presencial de cualquier consulta contable derivada de tu actividad.',
        ],
      },
      {
        heading: 'Servicios contables específicos',
        items: [
          'Confección y legalización de los Libros Contables (Libro Diario, Libro de Inventario y Cuentas Anuales).',
          'Legalización de los Libros Societarios (Libro de Actas y Libro de Registro de Socios).',
          'Preparación de las Cuentas Anuales, elaboración del certificado y tramitación en el Registro Mercantil para su depósito.',
        ],
      },
    ],
    image: 'images/services/contables.webp',
    imageAlt: 'Mesa de trabajo con documentos contables y calculadora',
  },
  {
    id: 'fiscales',
    title: 'Servicios Fiscales',
    shortTitle: 'Fiscal',
    description:
      'Gestionamos tus obligaciones con la AEAT y la DEHú: IVA, retenciones, Impuesto sobre Sociedades (modelo 200), renta y todos los modelos tributarios. Planificación fiscal para que pagues lo justo, ni un euro más.',
    icon: 'landmark',
    tagline: 'Cumplir con Hacienda sin sobresaltos, ni sorpresas.',
    intro:
      'Nos ocupamos de todas tus obligaciones fiscales: preparación y presentación de modelos, atención a requerimientos de la Administración Tributaria y revisión continua de las novedades normativas que puedan afectarte. Y, sobre todo, planificación: que no pagues ni un euro de más por desconocimiento.',
    blocks: [
      {
        heading: 'Servicios fiscales generales',
        items: [
          'Preparación, desarrollo y presentación de todos los modelos fiscales, incluyendo el Impuesto sobre el Valor Añadido (IVA).',
          'Asistencia en requerimientos de información y comunicaciones realizadas por la Administración Tributaria (AEAT).',
          'Atención y resolución de consultas y dudas fiscales por correo electrónico, teléfono o presencialmente.',
          'Actualización regular sobre las novedades fiscales que puedan afectar a la empresa.',
        ],
      },
      {
        heading: 'Servicios fiscales específicos',
        items: [
          'Descarga y envío, en un plazo de 10 días, de las notificaciones de la AEAT recibidas en la Dirección Electrónica Habilitada Única (DEHú).',
          'Cálculo de la liquidación del Impuesto sobre Sociedades; preparación y presentación del modelo 200.',
        ],
      },
    ],
    image: 'images/services/fiscales.webp',
    imageAlt: 'Detalle de documentación fiscal y un sello de notificación',
  },
  {
    id: 'laborales',
    title: 'Servicios Laborales',
    shortTitle: 'Laboral',
    description:
      'Nóminas, Seguros Sociales, contratos, altas, bajas, modelos 111 y 190, gestión del CCC y comunicaciones con la TGSS y el SEPE. Tu equipo en regla, sin sobresaltos.',
    icon: 'users',
    tagline: 'Tu equipo en regla y tus nóminas, puntuales.',
    intro:
      'Asumimos toda la gestión laboral de tu empresa: cálculo y emisión de nóminas, Seguros Sociales, comunicaciones con la TGSS y el SEPE, modelos de retención y resolución de cualquier inquietud relacionada con tu plantilla. Tú te centras en el negocio; nosotros, en que el equipo esté siempre correcto.',
    blocks: [
      {
        heading: 'Servicios laborales generales',
        items: [
          'Gestión y cálculo de los salarios mensuales, pagas extraordinarias y retribuciones variables.',
          'Asesoramiento por correo o teléfono ante cualquier pregunta o inquietud laboral y de Seguridad Social derivada de las operaciones diarias.',
          'Gestión de los Seguros Sociales mensuales.',
          'Presentación de los Modelos 111 y 190 en colaboración con el departamento de Contabilidad y Cumplimiento Fiscal.',
        ],
      },
      {
        heading: 'Servicios laborales específicos',
        items: [
          'Seguimiento de las notificaciones de la Seguridad Social.',
          'Tramitación de solicitud de Cuenta Cotización de la Seguridad Social (CCC).',
          'Tramitación de Bajas de Incapacidad Laboral.',
        ],
      },
    ],
    image: 'images/services/laborales.webp',
    imageAlt: 'Reunión de equipo profesional revisando documentación',
  },
  {
    id: 'controlling',
    title: 'Controlling Financiero',
    shortTitle: 'Controlling',
    description:
      'Vamos un paso más allá de la contabilidad: control de tesorería, cuenta de pérdidas y ganancias mensual, gestión de impagos y seguimiento de facturación. Información clara para decidir con criterio.',
    icon: 'trending-up',
    tagline: 'Información financiera clara para decidir con criterio.',
    intro:
      'El controlling financiero va más allá de cumplir con la contabilidad: te ayudamos a entender qué está pasando en tu negocio. Cuenta de pérdidas y ganancias mensual, seguimiento semanal de tesorería, control de impagos y trabajo directo con tus proveedores para cuadrar las cifras. Decidir con números, no con intuición.',
    blocks: [
      {
        heading: 'Controlling financiero general',
        items: [
          'Seguimiento semanal o diario de la situación de la tesorería de la sociedad.',
          'Control mensual con informe sobre el estado de Pérdidas y Ganancias.',
          'Desarrollo de herramientas de control sobre impagos de clientes.',
          'Contacto con los diferentes proveedores con el objetivo de verificar el cuadre contable con los mismos.',
        ],
      },
      {
        heading: 'Controlling financiero específico',
        items: [
          'Tratamiento y reclamación de facturas pendientes de cobro.',
        ],
      },
    ],
    image: 'images/services/controlling.webp',
    imageAlt: 'Gráficos de evolución financiera sobre una mesa de trabajo',
  },
  {
    id: 'empresarial',
    title: 'Asesoría Empresarial',
    shortTitle: 'Empresarial',
    description:
      'Constitución de sociedades, análisis de inversiones, planes de viabilidad y acompañamiento estratégico. Te ayudamos a crecer con datos y experiencia.',
    icon: 'building',
    tagline: 'Acompañamiento estratégico en cada etapa de tu negocio.',
    intro:
      'Desde la creación de la sociedad hasta el análisis de oportunidades de crecimiento, ponemos a tu disposición nuestra experiencia para que cada decisión empresarial esté respaldada por datos y un análisis riguroso. Constituir, invertir o transformar tu negocio con la información correcta sobre la mesa.',
    blocks: [
      {
        heading: 'Asesoría empresarial general',
        items: [
          'Gestión de la constitución de sociedades y puesta en total funcionamiento.',
          'Análisis de inversiones empresariales.',
          'Elaboración de planes de viabilidad.',
        ],
      },
    ],
    image: 'images/services/empresarial.webp',
    imageAlt: 'Equipo de profesionales analizando un plan de negocio',
  },
  {
    id: 'herencias',
    title: 'Herencias y Sucesiones',
    shortTitle: 'Herencias',
    description:
      'Tramitamos herencias y sucesiones de principio a fin: certificados, declaración de herederos, cuaderno particional, liquidación de impuestos e inscripciones registrales. Te acompañamos en un momento delicado.',
    icon: 'scroll-text',
    tagline: 'Acompañamiento integral en un momento delicado.',
    intro:
      'Una herencia siempre es un proceso complejo y, con frecuencia, doloroso. Nos encargamos de toda la gestión técnica para que tú no tengas que ocuparte de los trámites: desde la obtención de los certificados iniciales hasta la inscripción registral final. Te explicamos cada paso con claridad y sin tecnicismos innecesarios.',
    blocks: [
      {
        heading: 'Tramitación de la herencia',
        items: [
          'Obtención del certificado de defunción, certificado de últimas voluntades y certificado de contratos de seguros con cobertura de fallecimiento.',
          'Análisis del testamento o, en su defecto, tramitación de la declaración de herederos abintestato.',
          'Inventario y valoración de bienes, derechos y deudas del causante.',
          'Asesoramiento sobre aceptación, repudiación o aceptación a beneficio de inventario.',
          'Preparación del cuaderno particional y coordinación con notaría.',
        ],
      },
      {
        heading: 'Aspectos fiscales y registrales',
        items: [
          'Liquidación del Impuesto sobre Sucesiones y Donaciones (modelos 650 y 651).',
          'Liquidación del Impuesto sobre el Incremento del Valor de los Terrenos de Naturaleza Urbana (plusvalía municipal).',
          'Inscripción de bienes inmuebles heredados en el Registro de la Propiedad.',
          'Cambio de titularidad de cuentas bancarias, vehículos y demás bienes.',
        ],
      },
    ],
    image: 'images/services/herencias.webp',
    imageAlt: 'Documentación notarial sobre una mesa de trabajo',
  },
  {
    id: 'otras',
    title: 'Otras Gestiones',
    shortTitle: 'Gestiones',
    description:
      'Contratos, cancelaciones hipotecarias, outsourcing administrativo y aquellas gestiones que necesitas resolver sin perder tiempo. Si lo puedes delegar, lo gestionamos por ti.',
    icon: 'clipboard',
    tagline: 'Para todo lo que necesitas delegar y olvidarte.',
    intro:
      'Hay gestiones que no encajan en una categoría concreta pero consumen tiempo y energía. Las asumimos para que tú no tengas que ocuparte: redacción de contratos, cancelaciones hipotecarias, outsourcing administrativo y análisis de inversiones puntuales. Tú decides; nosotros, ejecutamos.',
    blocks: [
      {
        heading: 'Otras gestiones disponibles',
        items: [
          'Redacción de contratos.',
          'Servicios de cancelaciones hipotecarias.',
          'Outsourcing administrativo.',
          'Análisis de inversiones.',
        ],
      },
    ],
    image: 'images/services/otras.webp',
    imageAlt: 'Firma de un contrato sobre un escritorio',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.id === slug);
}
