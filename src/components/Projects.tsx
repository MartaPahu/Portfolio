import { projects } from '../data/content'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'

function Projects() {
  return (
    <section
      id="proyectos"
      className="overflow-hidden bg-negro px-6 py-24 md:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] uppercase leading-[0.85] text-crema">
            Proyectos
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-6">
          {projects.map((project) => (
            <Reveal key={project.id}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects