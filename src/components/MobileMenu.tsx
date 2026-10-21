import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import type { NavLink } from '../types'

interface MobileMenuProps {
  links: NavLink[]
  github: string
}

function MobileMenu({ links, github }: MobileMenuProps) {
  // La memoria del menú: ¿abierto o cerrado?
  const [open, setOpen] = useState(false)

  // El vigilante: con el menú abierto, la página de detrás no se mueve
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <div className="md:hidden">
      {/* Botón: relative z-50 lo mantiene por encima del menú abierto */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={`relative z-50 rounded-full border-2 px-5 py-1.5 text-sm font-bold uppercase ${
          open ? 'border-crema text-crema' : 'border-negro text-negro'
        }`}
      >
        {open ? 'Cerrar' : 'Menú'}
      </button>

      {/* Pantalla del menú, con animación de entrada y salida */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-6 bg-negro px-6 text-crema"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="font-display text-4xl uppercase hover:text-citronella"
              >
                {link.label}
              </a>
            ))}
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="mt-4 self-start rounded-full bg-citronella px-6 py-2 font-bold text-negro"
            >
              GitHub ↗
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileMenu