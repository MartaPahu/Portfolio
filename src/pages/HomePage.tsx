import About from '../components/About'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import Services from '../components/Services'

function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Projects />
      <About />
    </>
  )
}

export default HomePage