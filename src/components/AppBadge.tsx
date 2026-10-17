import { motion } from 'motion/react'
import type { Tool } from '../types'

interface AppBadgeProps {
  tool: Tool
}

function AppBadge({ tool }: AppBadgeProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="flex w-24 flex-col items-center gap-3 text-center"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-crema text-negro">
        {tool.logo ? (
          <img src={tool.logo} alt="" className="h-8 w-8 object-contain" />
        ) : (
          <span className="font-display text-xl">{tool.short}</span>
        )}
      </div>
      <span className="text-sm font-medium">{tool.name}</span>
    </motion.div>
  )
}

export default AppBadge