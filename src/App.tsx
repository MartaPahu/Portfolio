import { MotionConfig } from 'motion/react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Services from './components/Services'

function App() {
  return (
    // reducedMotion="user": respeta el ajuste "reducir movimiento" del sistema
    <MotionConfig reducedMotion="user">
      <main>
        <Hero />
        <Intro />
        <Services />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </MotionConfig>
  )
}

export default App