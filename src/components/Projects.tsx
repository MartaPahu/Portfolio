import { projects } from '../data/content'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section
      id="proyectos"
      className="overflow-hidden bg-negro px-6 py-24 md:px-12"
    >
      {/* Caja con ancho máximo, centrada */}
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] uppercase leading-[0.85] text-crema">
          Proyectos
        </h2>

        <div className="mt-12 flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects