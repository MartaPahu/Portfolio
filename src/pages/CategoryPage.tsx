import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { categories } from '../data/navigation'
import NotFoundPage from './NotFoundPage'

function CategoryPage() {
  // slug = lo que va después de /proyectos/
  const { slug } = useParams()
  const category = categories.find((item) => item.slug === slug)

  if (!category) return <NotFoundPage />

  return (
    <section className="min-h-[70svh] bg-negro px-6 py-24 text-crema md:px-12">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/proyectos"
          className="text-sm font-bold uppercase hover:text-citronella"
        >
          ← Proyectos
        </Link>

        <Reveal>
          <h1 className="mt-6 font-display text-[clamp(2.25rem,6vw,5rem)] uppercase leading-[0.85]">
            {category.label}
          </h1>
          <p className="mt-6 max-w-xl text-xl text-crema/80">
            {category.description}
          </p>
        </Reveal>

        {/* Pestañas para saltar entre categorías */}
        <nav aria-label="Categorías" className="mt-10 flex flex-wrap gap-3">
          {categories.map((item) => (
            <Link
              key={item.slug}
              to={`/proyectos/${item.slug}`}
              className={`rounded-full px-5 py-2 text-sm font-bold uppercase ${
                item.slug === category.slug
                  ? 'bg-citronella text-negro'
                  : 'border-2 border-crema/40 hover:border-crema'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hueco para lo que vayamos construyendo */}
        <div className="mt-12 flex min-h-64 items-center justify-center rounded-3xl border-2 border-dashed border-crema/30 px-6 text-center text-crema/60">
          Aquí irán los proyectos de {category.label}
        </div>
      </div>
    </section>
  )
}

export default CategoryPage