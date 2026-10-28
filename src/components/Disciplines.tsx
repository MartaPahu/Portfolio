import { Link } from 'react-router-dom'
import { categories, labels } from '../data/navigation'
import Reveal from './Reveal'

function Disciplines() {
  return (
    <section id="disciplinas" className="bg-citronella px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] uppercase leading-[0.85]">
            {labels.disciplines}
          </h2>
        </Reveal>

        {/* Índice: cada fila lleva a su categoría */}
        <div className="mt-12 border-b-2 border-negro">
          {categories.map((category, index) => (
            <Reveal key={category.slug} delay={index * 0.1}>
              <Link
                to={`/proyectos/${category.slug}`}
                className="group grid items-baseline gap-2 border-t-2 border-negro py-6 md:grid-cols-[4rem_1fr_1fr_auto] md:gap-6"
              >
                <span className="font-display text-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-3xl uppercase md:text-5xl">
                  {category.label}
                </span>
                <span className="text-lg">{category.description}</span>
                <span
                  aria-hidden="true"
                  className="text-3xl transition-transform group-hover:translate-x-2"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Disciplines