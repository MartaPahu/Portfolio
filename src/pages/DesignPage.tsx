import CategoryLayout from '../components/CategoryLayout'
import ExamplesGallery from '../components/ExamplesGallery'
import { categories } from '../data/navigation'
import NotFoundPage from './NotFoundPage'

function DesignPage() {
  const category = categories.find((item) => item.slug === 'diseno')

  if (!category) return <NotFoundPage />

  return (
    <CategoryLayout category={category}>
      <ExamplesGallery />
    </CategoryLayout>
  )
}

export default DesignPage