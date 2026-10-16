import { useState } from 'react'
import type { CardColor, Project } from '../types'

interface ProjectCardProps {
  project: Project
}

// Cada color del "formulario" tiene su pareja fondo + texto
const colorClasses: Record<CardColor, string> = {
  citronella: 'bg-citronella text-negro',
  cuero: 'bg-cuero text-crema',
  crema: 'bg-crema text-negro',
}

function ProjectCard({ project }: ProjectCardProps) {
  // La "memoria" de la tarjeta: ¿ha fallado la foto?
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <article
      className={`grid gap-6 rounded-3xl p-6 md:grid-cols-2 md:p-10 ${colorClasses[project.color]}`}
    >
      {/* Izquierda: información */}
      <div className="flex flex-col justify-between gap-8">
        <div>
          <p className="text-sm font-bold uppercase opacity-70">
            {project.category}
          </p>
          <h3 className="mt-2 font-display text-3xl uppercase leading-none md:text-5xl">
            {project.title}
          </h3>
        </div>

        <ul className="border-t border-current/30">
          {project.points.map((point) => (
            <li key={point} className="border-b border-current/30 py-3 text-lg">
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Derecha: foto con etiqueta */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-negro">
        {imageFailed ? (
          <div className="flex h-full items-center justify-center text-crema/60">
            Foto pendiente
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover"
          />
        )}
        <span className="absolute left-4 top-4 rounded-full bg-citronella px-3 py-1 text-xs font-bold uppercase text-negro">
          {project.tag}
        </span>
      </div>
    </article>
  )
}

export default ProjectCard