export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'contables',
    title: 'Servicios Contables',
    shortTitle: 'Contable',
    description:
      'Llevamos la contabilidad de tu empresa con rigor y al día. Libros oficiales, cuentas anuales, depósito en el Registro Mercantil y la información financiera que necesitas para tomar decisiones.',
    icon: 'calculator',
  },
  {
    id: 'fiscales',
    title: 'Servicios Fiscales',
    shortTitle: 'Fiscal',
    description:
      'Gestionamos tus obligaciones con la AEAT y la DEHú: IVA, retenciones, Impuesto sobre Sociedades (modelo 200), renta y todos los modelos tributarios. Planificación fiscal para que pagues lo justo, ni un euro más.',
    icon: 'landmark',
  },
  {
    id: 'laborales',
    title: 'Servicios Laborales',
    shortTitle: 'Laboral',
    description:
      'Nóminas, Seguros Sociales, contratos, altas, bajas, modelos 111 y 190, gestión del CCC y comunicaciones con la TGSS y el SEPE. Tu equipo en regla, sin sobresaltos.',
    icon: 'users',
  },
  {
    id: 'controlling',
    title: 'Controlling Financiero',
    shortTitle: 'Controlling',
    description:
      'Vamos un paso más allá de la contabilidad: control de tesorería, cuenta de pérdidas y ganancias mensual, gestión de impagos y seguimiento de facturación. Información clara para decidir con criterio.',
    icon: 'trending-up',
  },
  {
    id: 'empresarial',
    title: 'Asesoría Empresarial',
    shortTitle: 'Empresarial',
    description:
      'Constitución de sociedades, análisis de inversiones, planes de viabilidad y acompañamiento estratégico. Te ayudamos a crecer con datos y experiencia.',
    icon: 'building',
  },
  {
    id: 'otras',
    title: 'Otras Gestiones',
    shortTitle: 'Gestiones',
    description:
      'Contratos, cancelaciones hipotecarias, outsourcing administrativo y aquellas gestiones que necesitas resolver sin perder tiempo. Si lo puedes delegar, lo gestionamos por ti.',
    icon: 'clipboard',
  },
];
