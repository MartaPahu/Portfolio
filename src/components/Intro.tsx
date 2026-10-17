import { useState } from 'react'
import { about, profile, tools } from '../data/content'
import AppBadge from './AppBadge'
import Reveal from './Reveal'

function Intro() {
  // Si la foto aún no existe, se muestra un bloque en su lugar
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <section id="intro" className="bg-negro px-6 py-24 text-crema md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          {/* Foto */}
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-cuero">
              {imageFailed ? (
                <div className="flex h-full items-center justify-center text-crema/60">
                  Foto pendiente
                </div>
              ) : (
                <img
                  src={about.photo}
                  alt="Retrato"
                  onError={() => setImageFailed(true)}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          </Reveal>

          {/* Saludo + bio */}
          <Reveal delay={0.15}>
            <h2 className="font-serif text-[clamp(4.5rem,12vw,9rem)] italic leading-none text-citronella">
              ¡Hey!
            </h2>
            <p className="mt-6 font-serif text-2xl italic leading-snug md:text-3xl">
              {profile.intro}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-crema/80">
              {profile.bio}
            </p>
          </Reveal>
        </div>

        {/* Logos de programas */}
        <Reveal>
          <h3 className="mt-20 text-center font-display text-2xl uppercase md:text-3xl">
            Aplicaciones
          </h3>
          <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-8">
            {tools.map((tool) => (
              <AppBadge key={tool.id} tool={tool} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Intro