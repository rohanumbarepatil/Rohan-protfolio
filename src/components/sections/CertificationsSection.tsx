import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SectionShell } from '@/components/layout/SectionShell'
import { Reveal } from '@/components/animations/Reveal'
import { certifications } from '@/data/portfolio'
import { stagger } from '@/lib/motion'

export function CertificationsSection() {
  return (
    <SectionShell id="certifications">
      <SectionHeading eyebrow="Achievements" title="Featured Certifications" description="" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 grid gap-5 lg:grid-cols-3"
      >
        {certifications.map((cert) => (
          <Reveal key={cert.title}>
            <Card className="overflow-hidden p-0">
              <img src={cert.image} alt={cert.alt} className="h-48 w-full object-cover object-center grayscale contrast-110" />
              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-white">{cert.title}</h3>
                <p className="mt-2 text-sm text-white/65">{cert.meta}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-white/50">{cert.count}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </motion.div>
    </SectionShell>
  )
}