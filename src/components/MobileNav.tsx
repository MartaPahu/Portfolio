import { profile } from '../data/content'
import CardNav from './CardNav'
import type { CardNavItem } from './CardNav'

interface MobileNavProps {
  initials: string
}

function MobileNav({ initials }: MobileNavProps) {
  const items: CardNavItem[] = [
    {
      label: 'Trabajo',
      description: 'Lo que hago y lo que he hecho.',
      bgColor: '#e8c832',
      textColor: '#1c1c18',
      links: [
        { label: 'Qué hago', href: '#que-hago' },
        { label: 'Proyectos', href: '#proyectos' },
      ],
    },
    {
      label: 'Yo',
      description: 'Quién soy y por dónde empezar.',
      bgColor: '#6b5740',
      textColor: '#eae0ce',
      links: [
        { label: 'Inicio', href: '#inicio' },
        { label: 'Sobre mí', href: '#sobre-mi' },
      ],
    },
    {
      label: 'Contacto',
      description: 'Escríbeme, leo todo.',
      bgColor: '#eae0ce',
      textColor: '#1c1c18',
      links: [
        { label: 'Email', href: `mailto:${profile.email}` },
        { label: 'GitHub', href: profile.github },
        { label: 'LinkedIn', href: profile.linkedin },
      ],
    },
  ]

  return (
    <CardNav
      items={items}
      logo={
        <span className="font-display text-xl uppercase tracking-wide">
          {initials}
        </span>
      }
      logoAlt={profile.name}
      logoHref="#inicio"
      openText="Menú"
      closeText="Cerrar"
      cardEffect="rise"
      ariaLabel="Principal"
    />
  )
}

export default MobileNav