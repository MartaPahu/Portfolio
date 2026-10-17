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

// Cada bloque de "Qué hago"
export interface Service {
  id: number
  title: string
  description: string
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