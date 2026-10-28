import About from '../components/About'
import Disciplines from '../components/Disciplines'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Projects from '../components/Projects'

function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Disciplines />
      <Projects />
      <About />
    </>
  )
}

export default HomePage