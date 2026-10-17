import { motion } from 'motion/react'

interface MarqueeProps {
  items: string[]
  orientation?: 'horizontal' | 'vertical'
}

function Marquee({ items, orientation = 'horizontal' }: MarqueeProps) {
  // La lista repetida dos veces: así la cinta nunca se corta
  const loop = [...items, ...items]

  if (orientation === 'vertical') {
    return (
      <div className="h-full overflow-hidden bg-negro text-crema">
        <motion.div
          className="flex h-max flex-col items-center"
          animate={{ y: ['0%', '-50%'] }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
        >
          {loop.map((item, index) => (
            <span
              key={index}
              className="flex rotate-180 items-center gap-8 whitespace-nowrap py-8 font-display text-2xl uppercase [writing-mode:vertical-rl]"
            >
              {item}
              <span className="text-citronella">✦</span>
            </span>
          ))}
        </motion.div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden bg-negro py-5 text-crema">
      <motion.div
        className="flex w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
      >
        {loop.map((item, index) => (
          <span
            key={index}
            className="flex items-center gap-12 whitespace-nowrap pr-12 font-display text-2xl uppercase md:text-4xl"
          >
            {item}
            <span className="text-citronella">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default Marquee