import type {
  About,
  Example,
  NavLink,
  Profile,
  Project,
  Service,
  Tool,
} from '../types'
// Añade la ruta base de la web (en local "/", publicada "/Portfolio/")
const asset = (path: string): string => `${import.meta.env.BASE_URL}${path}`

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
    image: asset ('/projects/mzformacion.jpeg'),
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
    image: asset('/projects/escenasur.png'),
    color: 'cuero',
  },
  {
    id: 3,
    title: 'Videoclub',
    category: 'Aplicación Web',
    points: ['Recomienda una película dirigida por una mujer según tu estado de ánimo',
      '20 películas de directoras españolas en 4 perfiles emocionales',
      'Python + Flask, MySQL, TMDb y YouTube'],
    tag: 'Full Stack',
    image: asset('/projects/videoclub.png'),
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
  photo: asset('/about/marta.png'),
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
export const examples: Example[] = [
  {
    id: 1,
    title: '[Título del ejemplo]',
    tool: 'Illustrator',
    caption: '[Qué técnica muestras]',
    media: asset('examples/illustrator-1.gif'),
    aspect: 'wide',
  },
  {
    id: 2,
    title: '[Título del ejemplo]',
    tool: 'Photoshop',
    caption: '[Qué técnica muestras]',
    media: asset('examples/photoshop-1.jpg'),
    aspect: 'tall',
  },
  {
    id: 3,
    title: '[Título del ejemplo]',
    tool: 'Premiere',
    caption: '[Qué técnica muestras]',
    media: asset('examples/premiere-1.mp4'),
    aspect: 'wide',
  },
  {
    id: 4,
    title: '[Título del ejemplo]',
    tool: 'Canva',
    caption: '[Qué técnica muestras]',
    media: asset('examples/canva-1.jpg'),
    aspect: 'square',
  },
  {
    id: 5,
    title: '[Título del ejemplo]',
    tool: 'Illustrator',
    caption: '[Qué técnica muestras]',
    media: asset('examples/illustrator-2.jpg'),
    aspect: 'square',
  },
  {
    id: 6,
    title: '[Título del ejemplo]',
    tool: 'Photoshop',
    caption: '[Qué técnica muestras]',
    media: asset('examples/photoshop-2.gif'),
    aspect: 'wide',
  },
]