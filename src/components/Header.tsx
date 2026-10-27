import { Link, NavLink } from 'react-router-dom'
import { profile } from '../data/content'
import { mainNav } from '../data/navigation'
import type { NavItem } from '../types'
import MobileNav from './MobileNav'

// Enlace activo: subrayado amarillo
const linkClass = ({ isActive }: { isActive: boolean }): string =>
  isActive
    ? 'underline decoration-citronella decoration-4 underline-offset-8'
    : 'hover:text-cuero'

function Header() {
  // "Marta Patrón" → "M.P"
  const initials = profile.name
    .split(' ')
    .map((word) => word[0])
    .join('.')

  const renderItem = (item: NavItem) => {
    // Elemento con desplegable (Proyectos): el título sigue siendo clicable
    if (item.to && item.children) {
      return (
        <div key={item.label} className="group relative">
          <NavLink to={item.to} className={linkClass}>
            {item.label}
          </NavLink>
          {/* pt-4 tapa el hueco para que el desplegable no se cierre al bajar el ratón */}
          <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
            <ul className="min-w-44 rounded-2xl bg-negro p-2 text-crema shadow-xl">
              {item.children.map((child) => (
                <li key={child.label}>
                  <Link
                    to={child.to ?? '/'}
                    className="block rounded-xl px-4 py-2 hover:bg-cuero"
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    }

    // Página normal
    if (item.to) {
      return (
        <NavLink
          key={item.label}
          to={item.to}
          end={item.to === '/'}
          className={linkClass}
        >
          {item.label}
        </NavLink>
      )
    }

    // Ancla (Contacto, al final de la página)
    return (
      <a key={item.label} href={item.href} className="hover:text-cuero">
        {item.label}
      </a>
    )
  }

  return (
    <header className="sticky top-0 z-40 h-[var(--header-h)] bg-crema px-6 md:px-12">
      {/* Pantallas anchas */}
      <div className="hidden h-full items-center justify-between md:flex">
        <Link
          to="/"
          className="font-display text-xl uppercase tracking-wide"
          aria-label={profile.name}
        >
          {initials}
        </Link>
        <nav className="flex items-center gap-8 text-sm font-medium">
          {mainNav.map(renderItem)}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-negro px-4 py-1.5 text-crema hover:bg-cuero"
          >
            GitHub ↗
          </a>
        </nav>
      </div>

      {/* Móvil: barra negra con tarjetas desplegables */}
      <div className="flex h-full items-center md:hidden">
        <div className="w-full">
          <MobileNav initials={initials} />
        </div>
      </div>
    </header>
  )
}

export default Header