import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'

// Al cambiar de página, vuelve arriba (las anclas # no la activan)
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        {/* Aquí cambia la página */}
        <Outlet />
      </main>
      <Contact />
      <Footer />
    </>
  )
}

export default Layout