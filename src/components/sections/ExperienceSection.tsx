import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SectionShell } from '@/components/layout/SectionShell'
import { Reveal } from '@/components/animations/Reveal'
import { timeline } from '@/data/portfolio'
import { stagger } from '@/lib/motion'

export function ExperienceSection() {
  return (
    <SectionShell id="experience">
      <SectionHeading
        eyebrow="Work"
        title="My Experience"
        description="A clear trajectory of growth, collaboration, and impact across different environments."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-12 space-y-8"
      >
        {timeline.map((entry, idx) => (
          <Reveal key={idx} className="relative">
            <div className="grid gap-6 sm:grid-cols-[0.25fr_1fr] lg:gap-12">
              <div className="relative flex flex-col gap-2">
                <div className="h-3 w-3 rounded-full border border-white/20 bg-white/10" />
                {idx < timeline.length - 1 && (
                  <div className="absolute left-[5px] top-4 h-20 w-0.5 bg-gradient-to-b from-white/10 to-white/5" />
                )}
              </div>

              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{entry.title}</h3>
                    <p className="mt-1 text-sm text-white/55">{entry.organization}</p>
                    <p className="mt-0.5 text-xs uppercase tracking-[0.2em] text-white/40">{entry.period}</p>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-6 text-white/70">{entry.description}</p>

                {entry.details?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.details.map((detail) => (
                      <span
                        key={detail}
                        className="inline-flex items-center gap-1 rounded-full border border-white/8 bg-white/5 px-3 py-1 text-xs text-white/65"
                      >
                        <ArrowRight className="h-3 w-3" /> {detail}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </motion.div>
    </SectionShell>
  )
}
