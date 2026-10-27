import { profile } from '../data/content'
import { mainNav } from '../data/navigation'
import CardNav from './CardNav'
import type { CardNavItem } from './CardNav'
import RouterLink from './RouterLink'

interface MobileNavProps {
  initials: string
}

// Colores de las tarjetas, en ciclo: amarillo, marrón, crema
const CARD_COLORS = [
  { bgColor: '#e8c832', textColor: '#1c1c18' },
  { bgColor: '#6b5740', textColor: '#eae0ce' },
  { bgColor: '#eae0ce', textColor: '#1c1c18' },
]

function MobileNav({ initials }: MobileNavProps) {
  const items: CardNavItem[] = [
    ...mainNav.map((entry, index) => ({
      label: entry.label,
      href: entry.to ?? entry.href,
      links: entry.children?.map((child) => ({
        label: child.label,
        href: child.to,
      })),
      ...CARD_COLORS[index % CARD_COLORS.length],
    })),
    {
      label: 'GitHub ↗',
      href: profile.github,
      ...CARD_COLORS[mainNav.length % CARD_COLORS.length],
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
      logoHref="/"
      linkComponent={RouterLink}
      openText="Menú"
      closeText="Cerrar"
      cardEffect="rise"
      ariaLabel="Principal"
    />
  )
}

export default MobileNav