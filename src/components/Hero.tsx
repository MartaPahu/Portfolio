import { useRef } from 'react'
import { navLinks, profile, skills } from '../data/content'
import Crosshair from './Crosshair'
import Marquee from './Marquee'
import MobileNav from './MobileNav'

function Hero() {
  // La "nota adhesiva" que le dice a la retícula dónde quedarse
  const titleRef = useRef<HTMLDivElement>(null)

  // "Marta Patrón" → firstName "Marta", surname "Patrón"
  const [firstName, ...rest] = profile.name.split(' ')
  const surname = rest.join(' ')

  // "Marta Patrón" → "M.P"
  const initials = profile.name
    .split(' ')
    .map((word) => word[0])
    .join('.')

  return (
    // Columna que ocupa toda la pantalla: menú arriba, contenido en medio, barra abajo
    <section
      id="inicio"
      className="flex min-h-svh flex-col overflow-hidden bg-crema"
    >
      {/* Barra superior: z-30 para que el menú móvil quede por encima de todo */}
      <header className="relative z-30 px-6 py-6 md:px-12">
        {/* Menú de pantallas anchas */}
        <div className="hidden items-center justify-between md:flex">
          <span
            className="font-display text-xl uppercase tracking-wide"
            aria-label={profile.name}
          >
            {initials}
          </span>
          <nav className="flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-cuero">
                {link.label}
              </a>
            ))}
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

        {/* Menú de móvil: barra negra con tarjetas desplegables */}
        <div className="md:hidden">
          <MobileNav initials={initials} />
        </div>
      </header>

      {/* Zona central: flex-1 = ocupa todo el espacio sobrante */}
      <div
        ref={titleRef}
        className="relative isolate flex flex-1 flex-col justify-center px-6 py-10 md:px-12"
      >
        <Crosshair
          containerRef={titleRef}
          color="#1c1c18"
          thickness={1}
          opacity={0.85}
          smoothing={0.35}
          showCoordinates
          targetEffect="lock"
        />

        <p className="mb-6 inline-block self-start rounded-full bg-citronella px-4 py-1 text-sm font-bold uppercase">
          {profile.role}
        </p>
        <h1 className="break-words font-display text-[clamp(3rem,12vw,10rem)] uppercase leading-[0.9]">
          <span className="block">{firstName}</span>
          <span className="block">{surname}</span>
        </h1>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#proyectos"
            className="rounded-full bg-negro px-8 py-3 font-bold text-crema hover:bg-cuero"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="rounded-full border-2 border-negro px-8 py-3 font-bold hover:bg-negro hover:text-crema"
          >
            Contacto
          </a>
        </div>
      </div>

      {/* Pie de la primera pantalla: barra recta y a todo el ancho */}
      <Marquee items={skills} />
    </section>
  )
}

export default Hero