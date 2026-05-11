import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SectionShell } from '@/components/layout/SectionShell'
import { Reveal } from '@/components/animations/Reveal'
import { achievements } from '@/data/portfolio'
import { stagger } from '@/lib/motion'

export function AchievementsSection() {
  return (
    <SectionShell id="achievements">
      <SectionHeading
        eyebrow="Featured"
        title="Featured Achievements"
        description="A single highlighted win from the reference portfolio."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-12 grid gap-5 lg:grid-cols-2"
      >
        {achievements.map((achievement) => (
          <Reveal key={achievement.title}>
            <Card className="overflow-hidden p-0">
              {achievement.image ? (
                <img src={achievement.image} alt={achievement.alt ?? achievement.title} className="h-64 w-full object-cover object-center grayscale contrast-110" />
              ) : null}
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">{achievement.meta}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">{achievement.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{achievement.detail}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </motion.div>
    </SectionShell>
  )
}
