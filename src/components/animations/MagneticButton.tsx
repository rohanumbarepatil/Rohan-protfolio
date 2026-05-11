import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

export function MagneticButton({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className={cn('inline-flex', className)}>
      {children}
    </motion.div>
  )
}
