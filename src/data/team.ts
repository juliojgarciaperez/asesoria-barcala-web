export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  linkedin: string;
}

// Información pública basada en los perfiles de LinkedIn de los asesores.
// Si algún dato cambia, actualizar aquí.
export const team: TeamMember[] = [
  {
    id: 'pablo',
    name: 'Pablo Cabanillas Rodríguez',
    role: 'Asesor',
    bio: 'Especialista en finanzas formado en la Universidad de Huelva, con trayectoria en gestión financiera dentro de compañías internacionales. Aporta visión analítica y rigor en el control financiero y el reporting de los clientes de Barkala.',
    photo: 'images/team/pablo.jpg',
    linkedin: 'https://www.linkedin.com/in/pcabanillasrodriguez/',
  },
  {
    id: 'ernesto',
    name: 'Ernesto López-Tarruella Feria',
    role: 'Asesor',
    bio: 'Profesional con experiencia en banca corporativa y de inversión, formado en el CEF — Centro de Estudios Financieros. Vinculado a Aranjuez, acompaña a empresas y autónomos en su estrategia fiscal, financiera y empresarial.',
    photo: 'images/team/ernesto.jpg',
    linkedin: 'https://www.linkedin.com/in/ernesto-lopez-tarruella-feria/',
  },
];
