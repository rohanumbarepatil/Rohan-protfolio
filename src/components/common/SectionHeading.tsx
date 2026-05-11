import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { fadeUp } from '@/lib/motion'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="max-w-3xl"
    >
      <Badge>{eyebrow}</Badge>
      <h2 className="editorial-title mt-5">{title}</h2>
      {description ? <p className="editorial-copy mt-4 max-w-2xl">{description}</p> : null}
    </motion.div>
  )
}
