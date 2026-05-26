import { cloudinaryIds } from '../utils/cloudinary';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  /** public_id de Cloudinary (resuelto vía cdn() en el componente). */
  imageId: string;
  linkedin: string;
}

// Información pública basada en los perfiles de LinkedIn de los asesores.
// Si algún dato cambia, actualizar aquí.
export const team: TeamMember[] = [
  {
    id: 'ernesto',
    name: 'Ernesto López-Tarruella Feria',
    role: 'Asesor',
    bio: 'Profesional con experiencia en banca corporativa y de inversión, formado en el CEF — Centro de Estudios Financieros. Vinculado a Aranjuez, acompaña a empresas y autónomos en su estrategia fiscal, financiera y empresarial.',
    imageId: cloudinaryIds.team.ernesto,
    linkedin: 'https://www.linkedin.com/in/ernesto-lopez-tarruella-feria/',
  },
  {
    id: 'pablo',
    name: 'Pablo Cabanillas Rodríguez',
    role: 'Asesor',
    bio: 'Especialista en finanzas formado en la Universidad de Huelva, con trayectoria en gestión financiera dentro de compañías internacionales. Aporta visión analítica y rigor en el control financiero y el reporting de los clientes de Barkala.',
    imageId: cloudinaryIds.team.pablo,
    linkedin: 'https://www.linkedin.com/in/pcabanillasrodriguez/',
  },
];
