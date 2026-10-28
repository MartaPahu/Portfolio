import type { Category, NavItem } from '../types'

// Los nombres de los apartados. Cambia aquí cualquiera y se actualiza en toda la web.
export const labels = {
  home: 'Inicio',
  disciplines: 'Disciplinas', // titular de la sección amarilla de Inicio
  projects: 'Proyectos',
  about: 'Sobre mí',
  contact: 'Contacto',
}

// Las categorías de Proyectos (y, a la vez, tus disciplinas de Inicio).
// Para renombrar una (por ejemplo Código → Desarrollo), cambia aquí su label.
export const categories: Category[] = [
  {
    slug: 'codigo',
    label: 'Código',
    description: 'Webs y aplicaciones que programo.',
  },
  {
    slug: 'diseno',
    label: 'Diseño',
    description: 'Photoshop, Illustrator, Premiere, Canva y más.',
  },
  {
    slug: 'fotografia',
    label: 'Fotografía',
    description: 'Sesiones y miradas.',
  },
  {
    slug: 'copy',
    label: 'Copy',
    description: 'Palabras que cuentan y venden.',
  },
]

// El menú principal (se usa en pantalla grande y en móvil)
export const mainNav: NavItem[] = [
  { label: labels.home, to: '/' },
  {
    label: labels.projects,
    to: '/proyectos',
    children: categories.map((category) => ({
      label: category.label,
      to: `/proyectos/${category.slug}`,
    })),
  },
  { label: labels.about, to: '/sobre-mi' },
  { label: labels.contact, href: '#contacto' },
]