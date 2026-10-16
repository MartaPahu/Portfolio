import { useState } from 'react'
import { about } from '../data/content'

function About() {
  // Si la foto aún no existe, se muestra un bloque oscuro en su lugar
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <section id="sobre-mi" className="bg-crema px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] uppercase leading-[0.85]">
          Sobre mí
        </h2>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Foto */}
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-negro">
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

          {/* Manifiesto */}
          <div className="flex flex-col gap-4">
            {about.lines.map((line, index) => (
              <p
                key={index}
                className="font-serif text-3xl italic leading-none md:text-5xl"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About