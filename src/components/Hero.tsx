import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { profile, skills } from '../data/content'
import Crosshair from './Crosshair'
import Marquee from './Marquee'

function Hero() {
  // La "nota adhesiva" que le dice a la retícula dónde quedarse
  const titleRef = useRef<HTMLDivElement>(null)

  // "Marta Patrón" → firstName "Marta", surname "Patrón"
  const [firstName, ...rest] = profile.name.split(' ')
  const surname = rest.join(' ')

  return (
    // Ocupa lo que queda de pantalla debajo del menú fijo: contenido en medio, barra abajo
    <section
      id="inicio"
      className="flex min-h-[calc(100svh-var(--header-h))] flex-col overflow-hidden bg-crema"
    >
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
          <Link
            to="/proyectos"
            className="rounded-full bg-negro px-8 py-3 font-bold text-crema hover:bg-cuero"
          >
            Ver proyectos
          </Link>
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