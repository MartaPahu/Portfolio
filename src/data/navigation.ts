import type { Category, NavItem } from '../types'

// Las categorías de Proyectos.
// Para renombrar una (por ejemplo Diseño → Branding), cambia aquí su label.
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
  { label: 'Inicio', to: '/' },
  { label: 'Qué hago', to: '/que-hago' },
  {
    label: 'Proyectos',
    to: '/proyectos',
    children: categories.map((category) => ({
      label: category.label,
      to: `/proyectos/${category.slug}`,
    })),
  },
  { label: 'Sobre mí', to: '/sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
]