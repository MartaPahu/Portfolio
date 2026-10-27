import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { categories } from '../data/navigation'

// Colores de las tarjetas, en ciclo
const COLORS = [
  'bg-citronella text-negro',
  'bg-cuero text-crema',
  'bg-crema text-negro',
  'bg-citronella text-negro',
]

function ProjectsPage() {
  return (
    <section className="min-h-[70svh] bg-negro px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h1 className="font-display text-[clamp(2.25rem,6vw,5rem)] uppercase leading-[0.85] text-crema">
            Proyectos
          </h1>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((category, index) => (
            <Reveal key={category.slug} delay={index * 0.1} className="h-full">
              <Link
                to={`/proyectos/${category.slug}`}
                className={`group flex h-full min-h-48 flex-col justify-between rounded-3xl p-6 md:p-10 ${COLORS[index % COLORS.length]}`}
              >
                <span className="font-display text-3xl uppercase md:text-5xl">
                  {category.label}
                </span>
                <span className="mt-8 flex items-end justify-between gap-4 text-lg">
                  {category.description}
                  <span
                    aria-hidden="true"
                    className="text-2xl transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage