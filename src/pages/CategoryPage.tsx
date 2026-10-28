import { useParams } from 'react-router-dom'
import CategoryLayout from '../components/CategoryLayout'
import { categories } from '../data/navigation'
import NotFoundPage from './NotFoundPage'

function CategoryPage() {
  // slug = lo que va después de /proyectos/
  const { slug } = useParams()
  const category = categories.find((item) => item.slug === slug)

  if (!category) return <NotFoundPage />

  return (
    <CategoryLayout category={category}>
      {/* Hueco para lo que vayamos construyendo */}
      <div className="flex min-h-64 items-center justify-center rounded-3xl border-2 border-dashed border-crema/30 px-6 text-center text-crema/60">
        Aquí irán los proyectos de {category.label}
      </div>
    </CategoryLayout>
  )
}

export default CategoryPage