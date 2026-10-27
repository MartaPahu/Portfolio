import { MotionConfig } from 'motion/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Layout from './components/Layout'
import Services from './components/Services'
import CategoryPage from './pages/CategoryPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ProjectsPage from './pages/ProjectsPage'

function App() {
  return (
    // reducedMotion="user": respeta el ajuste "reducir movimiento" del sistema
    <MotionConfig reducedMotion="user">
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="que-hago" element={<Services />} />
            <Route path="proyectos" element={<ProjectsPage />} />
            <Route path="proyectos/:slug" element={<CategoryPage />} />
            <Route path="sobre-mi" element={<About />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  )
}

export default App