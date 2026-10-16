import { navLinks, profile, skills } from '../data/content'
import Marquee from './Marquee'

function Hero() {
  // "Marta Patrón" → firstName "Marta", surname "Patrón"
  const [firstName, ...rest] = profile.name.split(' ')
  const surname = rest.join(' ')

  // "Marta Patrón" → "M.P"
  const initials = profile.name
    .split(' ')
    .map((word) => word[0])
    .join('.')

  return (
    <section id="inicio" className="overflow-hidden bg-crema">
      {/* Barra superior con el menú */}
      <header className="flex items-center justify-between px-6 py-6 md:px-12">
        <span
          className="font-display text-xl uppercase tracking-wide"
          aria-label={profile.name}
        >
          {initials}
        </span>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
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
      </header>

      {/* Titular + botones */}
      <div className="px-6 pb-12 pt-10 md:px-12">
        <p className="mb-6 inline-block rounded-full bg-citronella px-4 py-1 text-sm font-bold uppercase">
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

      {/* Barra negra inclinada en movimiento */}
      <div className="mb-16 -rotate-2 scale-110">
        <Marquee items={skills} />
      </div>

      {/* Bio: titular a la izquierda, texto a la derecha */}
      <div className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 md:grid-cols-2 md:gap-16 md:px-12">
        <h2 className="font-display text-2xl uppercase leading-tight md:text-4xl">
          {profile.headline}
        </h2>
        <div>
          <p className="font-serif text-2xl italic leading-snug md:text-3xl">
            {profile.intro}
          </p>
          <p className="mt-6 text-base leading-relaxed text-cuero">
            {profile.bio}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero