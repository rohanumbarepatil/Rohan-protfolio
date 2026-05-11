import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Server,
  Zap,
  Cloud,
  Wrench,
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SectionShell } from '@/components/layout/SectionShell'
import { Reveal } from '@/components/animations/Reveal'
import { skills } from '@/data/portfolio'
import { stagger } from '@/lib/motion'

const iconMap = {
  layout: Code2,
  server: Server,
  spark: Zap,
  cloud: Cloud,
  database: Database,
  tool: Wrench,
} as const

export function SkillsSection() {
  return (
    <SectionShell id="skills">
      <SectionHeading
        eyebrow="Teck Stack"
        title="Languages, frameworks, and tools"
        description="I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map((group) => {
          const Icon = iconMap[group.icon]
          return (
            <Reveal key={group.title}>
              <Card className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-white">{group.title}</h3>
                  <Icon className="h-5 w-5 text-white/50" />
                </div>
                <ul className="space-y-2 text-sm text-white/70">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          )
        })}
      </motion.div>
    </SectionShell>
  )
}
