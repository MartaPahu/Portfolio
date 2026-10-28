// Un enlace del menú de navegación
export interface NavLink {
  label: string
  href: string
}

// Los colores permitidos para el fondo de una tarjeta.
// Si escribes otro (por ejemplo 'rojo'), TypeScript te avisa.
export type CardColor = 'citronella' | 'cuero' | 'crema'

// El "formulario" que debe rellenar cada proyecto
export interface Project {
  id: number
  title: string
  category: string
  points: string[] // las líneas de info de la tarjeta
  tag: string // etiqueta pequeña sobre la foto
  image: string // ruta de la foto
  color: CardColor
}

// Cada bloque de servicios (ya no se usa en la web, se puede borrar más adelante)
export interface Service {
  id: number
  title: string
  description: string
}

// Un ejemplo de cómo manejas un programa (para la galería de Diseño)
export interface Example {
  id: number
  title: string
  tool: string // programa: escríbelo igual en todos los ejemplos para agruparlos
  caption: string // una línea sobre la técnica
  media: string // imagen, GIF o vídeo (.mp4 / .webm)
  aspect?: 'wide' | 'square' | 'tall' // forma del recuadro (opcional)
}

// La sección "Sobre mí": tu foto y un manifiesto en frases cortas
export interface About {
  photo: string
  lines: string[]
}

// Un programa que manejas (para la fila de logos)
export interface Tool {
  id: number
  name: string // nombre completo
  short: string // siglas para el cuadrado: Ai, Ps…
  logo?: string // ruta de un logo en /public (opcional)
}

// Una categoría de Proyectos (Código, Diseño…)
export interface Category {
  slug: string // lo que aparece en la dirección: /proyectos/codigo
  label: string // el nombre que se ve
  description: string // frase corta
}

// Un elemento del menú. "to" es una página de la web, "href" una ancla o enlace externo
export interface NavItem {
  label: string
  to?: string
  href?: string
  children?: NavItem[] // el desplegable
}

// Tus datos personales
export interface Profile {
  name: string
  role: string
  headline: string // titular grande de la bio
  intro: string // frase destacada en serif
  bio: string // párrafo corto
  email: string
  github: string
  linkedin: string
}