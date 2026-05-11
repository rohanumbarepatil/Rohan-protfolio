import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SectionShell } from '@/components/layout/SectionShell'
import { Reveal } from '@/components/animations/Reveal'
import { projects } from '@/data/portfolio'
import { fadeUp } from '@/lib/motion'
import { MagneticButton } from '@/components/animations/MagneticButton'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <SectionShell id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="My Selected Projects"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-16 space-y-12 sm:space-y-16 lg:space-y-20"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            variants={itemVariants}
            className={`grid gap-8 lg:gap-12 ${
              index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2 lg:auto-cols-max lg:[direction:rtl]'
            }`}
          >
            {/* Content Side */}
            <Reveal>
              <div className="flex flex-col justify-center space-y-6">
                {/* Category Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="inline-flex w-fit"
                >
                  <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60 backdrop-blur-sm">
                    {project.category}
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl"
                >
                  {project.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
                >
                  {project.description}
                </motion.p>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="space-y-3 pt-2"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                    Technology Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 6).map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs text-white/70 backdrop-blur-sm transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.stack.length > 6 && (
                      <span className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs text-white/70 backdrop-blur-sm">
                        +{project.stack.length - 6} more
                      </span>
                    )}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap gap-3 pt-4"
                >
                  {project.links.map((link) => (
                    <MagneticButton key={link.label}>
                      {link.href.startsWith('http') ? (
                        <a href={link.href} target="_blank" rel="noreferrer" className="inline-flex">
                          <Button
                            variant={link.label === 'GitHub' ? 'secondary' : 'primary'}
                            className="gap-2"
                          >
                            {link.label}
                            {link.label === 'Read More' && (
                              <ArrowRight className="h-4 w-4" />
                            )}
                          </Button>
                        </a>
                      ) : (
                        <Link to={link.href} className="inline-flex">
                          <Button variant="primary" className="gap-2">
                            {link.label}
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                    </MagneticButton>
                  ))}
                </motion.div>
              </div>
            </Reveal>

            {/* Visual Side - Premium Card */}
            <Reveal>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="liquid-glass-strong rounded-3xl border border-white/10 p-8 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/8 sm:p-10"
              >
                {/* Visual Placeholder with Gradient */}
                <div className="space-y-6">
                  {/* Project Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover object-center"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-white/10 to-white/5" />
                    )}
                  </div>


                </div>
              </motion.div>
            </Reveal>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  )
}
