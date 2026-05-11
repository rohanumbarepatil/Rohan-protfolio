import { ArrowDownRight, Download } from 'lucide-react'
import heroPng from '@/assets/hero.png'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SocialLinks } from '@/components/common/SocialLinks'
import { heroPhrases, socialLinks } from '@/data/portfolio'
import { site } from '@/constants/site'
import { fadeUp, stagger } from '@/lib/motion'
import { MagneticButton } from '@/components/animations/MagneticButton'

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden border-b border-white/6">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_35%),linear-gradient(180deg,rgba(4,4,5,0.18),rgba(4,4,5,0.84)_68%,#050505)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] items-center">
        <div className="section-shell grid gap-12 py-20 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <Badge>Why hire me</Badge>
              <span className="text-sm text-white/55">{site.location}</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              HI, I'M ROHAN
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-2xl font-medium leading-8 text-white/80 sm:text-3xl">
              {site.role}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <MagneticButton>
                <a href={site.resumeUrl} className="inline-flex">
                  <Button size="lg" className="gap-2">
                    <Download className="h-4 w-4" /> Check My Resume
                  </Button>
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href="#about" className="inline-flex">
                  <Button size="lg" variant="secondary" className="gap-2">
                    Why hire me <ArrowDownRight className="h-4 w-4" />
                  </Button>
                </a>
              </MagneticButton>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
              {heroPhrases.map((item) => (
                <span key={item} className="liquid-glass rounded-full px-4 py-2">
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <SocialLinks items={socialLinks} />
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }} className="relative">
            <div className="liquid-glass-strong relative overflow-hidden rounded-[2rem] p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_40%)]" />
              <div className="relative grid gap-5">
                <div className="aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
                  <img
                    src={heroPng}
                    alt="coding pov"
                    className="h-full w-full object-cover object-center grayscale contrast-110"
                  />
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/65">
                  Modern. Scalable. Web Applications. Debugging. Creative UI.
                </div>
              </div>
            </div>

            <div className="absolute -left-4 top-10 hidden animate-float rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/75 backdrop-blur-xl lg:block">
              Check My Profile
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
