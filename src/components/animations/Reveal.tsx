import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

export function Reveal({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
