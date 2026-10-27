import type { ComponentPropsWithoutRef } from 'react'
import { Link } from 'react-router-dom'

interface RouterLinkProps extends ComponentPropsWithoutRef<'a'> {
  href: string
}

function RouterLink({ href, children, ...props }: RouterLinkProps) {
  // Anclas (#), correo y enlaces externos: enlace normal
  if (/^(https?:|mailto:|#)/.test(href)) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }
  // Páginas de la web: cambio de página sin recargar
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  )
}

export default RouterLink