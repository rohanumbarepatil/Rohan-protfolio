import { ArrowDownRight, Download } from 'lucide-react'
import heroPng from '@/assets/hero.png'
import idCard from '@/assets/id card/Picsart_26-05-12_01-49-32-323.jpeg'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SocialLinks } from '@/components/common/SocialLinks'
import { socialLinks } from '@/data/portfolio'
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
        <div className="section-shell grid gap-12 py-4 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.h1
              variants={fadeUp}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              Rohan Umbarepatil
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="mt-6 max-w-2xl text-2xl font-medium leading-8 text-white/80 sm:text-3xl"
            >
              Cinematic Developer
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
              className="mt-3 max-w-2xl text-xl font-medium leading-8 text-white/68 sm:text-2xl"
            >
              Creative Technologist
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



            <motion.div variants={fadeUp} className="mt-10">
              <SocialLinks items={socialLinks} />
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }} className="relative order-last lg:order-none">
            <div className="liquid-glass-strong relative overflow-hidden rounded-[2rem] p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_40%)]" />
              <div className="relative grid gap-5">
                <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
                  <img
                    src={idCard}
                    alt="id card"
                    className="w-full h-auto object-contain"
                  />
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
