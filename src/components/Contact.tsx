import { profile } from '../data/content'
import Reveal from './Reveal'

function Contact() {
  return (
    <section
      id="contacto"
      className="bg-cuero px-6 py-24 text-crema md:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] uppercase leading-[0.85]">
            Hablemos
          </h2>

          {/* mailto: abre el programa de correo con tu dirección ya puesta */}
          <a
            href={`mailto:${profile.email}`}
            className="mt-10 block break-words font-serif text-3xl italic underline decoration-citronella underline-offset-8 hover:text-citronella md:text-5xl"
          >
            {profile.email}
          </a>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-citronella px-8 py-3 font-bold text-negro hover:bg-crema"
            >
              GitHub ↗
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-crema px-8 py-3 font-bold hover:bg-crema hover:text-negro"
            >
              LinkedIn ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact