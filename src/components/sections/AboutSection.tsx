import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SectionShell } from '@/components/layout/SectionShell'
import { Reveal } from '@/components/animations/Reveal'
import { aboutHighlights, aboutNarrative, hobbies } from '@/data/portfolio'
import { site } from '@/constants/site'
import { fadeUp, stagger } from '@/lib/motion'
import { MagneticButton } from '@/components/animations/MagneticButton'

export function AboutSection() {
  const copyEmail = async () => {
    await navigator.clipboard.writeText(site.email)
  }

  return (
    <SectionShell id="about">
      <div className="grid gap-14 lg:grid-cols-[1.05fr_1.15fr] lg:items-start lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="About"
            title="About Me"
            description="Hi, I'm Rohan Umbarepatil"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-8 space-y-4"
          >
            {aboutNarrative.map((para, idx) => (
              <motion.p key={idx} variants={fadeUp} className="editorial-copy text-white/65">
                {para}
              </motion.p>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="mt-8 flex flex-wrap gap-3">
            {aboutHighlights.map((item) => (
              <span key={item} className="liquid-glass rounded-full px-4 py-2 text-sm text-white/75">
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="mt-8 flex flex-wrap gap-3">
            <MagneticButton>
              <Button onClick={copyEmail} className="gap-2">
                Copy my email address
              </Button>
            </MagneticButton>
            <MagneticButton>
              <a href={`mailto:${site.email}`} className="inline-flex">
                <Button variant="secondary" className="gap-2">
                  {site.email}
                </Button>
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-4"
        >
          <Reveal>
            <Card className="p-5 sm:p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">Teck Stack</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
              React.js • JavaScript • Tailwind CSS • Node.js  • Firebase • Git & GitHub • Figma • Vercel • Responsive UI Development

              </p>  
            </Card>
          </Reveal>

          <Reveal>
            <Card className="p-5 sm:p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">Hobbies</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
              Beyond coding, I enjoy building projects, exploring new technologies, travelling, gaming, content creation, public speaking, and continuously learning new skills that help me grow creatively and professionally.

              </p>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {hobbies.map((hobby, idx) => (
                  <div key={hobby} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/75">
                    <span className="text-xs uppercase tracking-[0.2em] text-white/40">{String(idx + 1).padStart(2, '0')}</span>
                    <span>{hobby}</span>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </motion.div>
      </div>
    </SectionShell>
  )
}
