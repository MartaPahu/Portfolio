import { useState } from 'react'
import type { Example } from '../types'

interface ExampleCardProps {
  example: Example
}

// La forma del recuadro según el "aspect" del ejemplo
const ASPECTS: Record<NonNullable<Example['aspect']>, string> = {
  wide: 'aspect-[4/3]',
  square: 'aspect-square',
  tall: 'aspect-[3/4]',
}

function ExampleCard({ example }: ExampleCardProps) {
  // La "memoria" de la tarjeta: ¿ha fallado el archivo?
  const [failed, setFailed] = useState(false)

  // Si termina en .mp4 o .webm se reproduce como vídeo; si no, como imagen
  const isVideo = /\.(mp4|webm)$/i.test(example.media)
  const aspect = ASPECTS[example.aspect ?? 'wide']
  const mediaClass =
    'h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'

  return (
    <article className="group">
      <div
        className={`relative overflow-hidden rounded-2xl bg-cuero ${aspect}`}
      >
        {failed ? (
          <div className="flex h-full items-center justify-center text-crema/60">
            Ejemplo pendiente
          </div>
        ) : isVideo ? (
          <video
            src={example.media}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onError={() => setFailed(true)}
            className={mediaClass}
          />
        ) : (
          <img
            src={example.media}
            alt={example.title}
            loading="lazy"
            onError={() => setFailed(true)}
            className={mediaClass}
          />
        )}

        <span className="absolute left-4 top-4 rounded-full bg-citronella px-3 py-1 text-xs font-bold uppercase text-negro">
          {example.tool}
        </span>
      </div>

      <h3 className="mt-4 font-display text-xl uppercase">{example.title}</h3>
      <p className="mt-1 text-crema/70">{example.caption}</p>
    </article>
  )
}

export default ExampleCard