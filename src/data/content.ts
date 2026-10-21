import type { About, NavLink, Profile, Project, Service, Tool } from '../types'

export const profile: Profile = {
  name: 'Marta Patrón',
  role: 'Diseñadora Multimedia',
  headline: 'Comunicación, código y diseño',
  intro: 'Que se vea bien y funcione mejor.',
  bio: 'Soy diseñadora multimedia y trabajo entre el diseño editorial, la fotografía y el desarrollo. Me gusta que cada pieza tenga sentido de principio a fin. Busco proyectos donde diseño y código vayan de la mano.',
  email: '[martaph96@mail.com]',
  github: '[https://github.com/tu-usuario]',
  linkedin: '[https://linkedin.com/in/tu-usuario]',
}

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Qué hago', href: '#que-hago' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
]

// Lo que se leerá en la barra negra en movimiento.
// Cámbialo, añade o quita lo que quieras.
export const skills: string[] = [
  'Periodismo',
  'Diseño editorial',
  'Diseño UI/UX',
  'Desarrollo Full Stack',
  'Fotografía',
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'Plataforma de formación',
    category: 'Desarrollo full stack',
    points: [
      'Desarrollé el módulo de ejercicios: quiz, laboratorios guiados y retos CTF',
      'React, .NET Core y SQL Server',
      'Integración completa de front y back en un equipo de unas 8 personas',
    ],
    tag: 'Prácticas en Mercanza',
    image: '/projects/[plataforma-formacion].jpg',
    color: 'citronella',
  },
  {
    id: 2,
    title: 'Escena Sur',
    category: 'Branding y web',
    points: [
      'Creé la identidad de un medio cultural del sur de España: logotipo, paleta, tipografía y tono de voz',
      'Illustrator, InDesign y WordPress',
      'Manual de marca completo y web en desarrollo',
    ],
    tag: 'Proyecto de curso',
    image: '/projects/[escena-sur].jpg',
    color: 'cuero',
  },
  {
    id: 3,
    title: '[Proyecto 3]',
    category: '[Categoría]',
    points: ['[Qué hiciste]', '[Con qué tecnología]', '[Qué lograste]'],
    tag: '[Etiqueta]',
    image: '/projects/[proyecto-3].jpg',
    color: 'crema',
  },
]

export const services: Service[] = [
  {
    id: 1,
    title: 'Desarrollo',
    description: 'Programo webs y aplicaciones con React, .NET y Python.',
  },
  {
    id: 2,
    title: 'Diseño',
    description: 'Diseño identidades de marca y piezas editoriales.',
  },
  {
    id: 3,
    title: 'Periodismo',
    description: 'Escribo claro y cuento lo importante sin rodeos.',
  },
]

export const about: About = {
  photo: '/about/[tu-foto].jpg',
  lines: [
    'Diseñadora multimedia.',
    'Programo lo que diseño.',
    'Fotografío lo que no cabe en palabras.',
  ],
}

export const tools: Tool[] = [
  { id: 1, name: 'Illustrator', short: 'Ai' },
  { id: 2, name: 'InDesign', short: 'Id' },
  { id: 3, name: 'Photoshop', short: 'Ps' },
  { id: 4, name: 'Premiere', short: 'Pr' },
  { id: 5, name: 'Lightroom', short: 'Lr' },
  { id: 6, name: 'Figma', short: 'Fg' },
  { id: 7, name: 'Canva', short: 'Cv' },
  { id: 8, name: 'GitHub', short: 'Gh' },
  { id: 9, name: 'HTML5', short: 'H5' },
  { id: 10, name: 'CSS', short: 'Cs' },
  { id: 11, name: 'React', short: 'Re' },
  { id: 12, name: 'Python', short: 'Py' },
]