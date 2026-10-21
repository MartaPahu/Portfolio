import { motion } from 'motion/react'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode // lo que quieres animar
  delay?: number // retraso en segundos (opcional)
  className?: string // clases de Tailwind (opcional)
}

function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      // 'some': se activa en cuanto asoma un poco del bloque (da igual lo alto que sea)
      // margin: espera a que entren 60px, para que se vea la animación
      viewport={{ once: true, amount: 'some', margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal