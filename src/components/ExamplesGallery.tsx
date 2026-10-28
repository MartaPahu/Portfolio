import { useState } from 'react'
import { examples } from '../data/content'
import ExampleCard from './ExampleCard'
import Reveal from './Reveal'

const ALL = 'Todo'

function ExamplesGallery() {
  // La "memoria" de la galería: ¿qué filtro está activo?
  const [active, setActive] = useState(ALL)

  // Los programas, sin repetir y en el orden en que aparecen
  const tools = [...new Set(examples.map((example) => example.tool))]

  const visible =
    active === ALL
      ? examples
      : examples.filter((example) => example.tool === active)

  return (
    <div>
      <p className="font-serif text-2xl italic md:text-3xl">
        Así manejo cada programa.
      </p>

      {/* Filtros por programa */}
      <div
        className="mt-8 flex flex-wrap gap-3"
        role="group"
        aria-label="Filtrar por programa"
      >
        {[ALL, ...tools].map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={active === name}
            onClick={() => setActive(name)}
            className={`rounded-full px-5 py-2 text-sm font-bold uppercase ${
              active === name
                ? 'bg-citronella text-negro'
                : 'border-2 border-crema/40 hover:border-crema'
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Mosaico: key={active} repite la animación al cambiar de filtro */}
      <div
        key={active}
        className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3"
      >
        {visible.map((example, index) => (
          <Reveal
            key={example.id}
            delay={(index % 3) * 0.1}
            className="mb-10 break-inside-avoid"
          >
            <ExampleCard example={example} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default ExamplesGallery