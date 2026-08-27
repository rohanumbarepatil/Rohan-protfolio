import { motion } from 'framer-motion'
import './edu-card.css'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SectionShell } from '@/components/layout/SectionShell'
import { Reveal } from '@/components/animations/Reveal'
import { education } from '@/data/portfolio'
import { stagger } from '@/lib/motion'

export function EducationSection() {
  return (
    <SectionShell id="education">
      <SectionHeading eyebrow="Education" title="Education" description="" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 grid gap-5 lg:grid-cols-3"
      >
        {education.map((item) => (
          <Reveal key={item.title}>
            <div className="edu-card">
              <div className="edu-tools">
                <div className="edu-circle">
                  <span className="edu-red edu-box"></span>
                </div>
                <div className="edu-circle">
                  <span className="edu-yellow edu-box"></span>
                </div>
                <div className="edu-circle">
                  <span className="edu-green edu-box"></span>
                </div>
              </div>
              <div className="edu-card__content">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">{item.period}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/65">{item.institution}</p>

                <p className="mt-4 text-sm leading-6 text-white/75">{item.grade}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.keySkills.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </motion.div>
    </SectionShell>
  )
}