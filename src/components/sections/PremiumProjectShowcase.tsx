import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import type { ProjectItem } from '@/types/portfolio'
import { Reveal } from '@/components/animations/Reveal'
import { fadeUp, stagger } from '@/lib/motion'

interface PremiumProjectShowcaseProps {
  project: ProjectItem
}

export function PremiumProjectShowcase({ project }: PremiumProjectShowcaseProps) {
  const [expandedFuture, setExpandedFuture] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24">
      {/* Hero Section */}
      <Reveal>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60 backdrop-blur-sm">
            {project.category}
          </div>

          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-white/70">
            {project.description}
          </p>
        </motion.div>
      </Reveal>

      {/* About Section */}
      {project.about && (
        <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
              About this Project
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
              {project.about}
            </p>
          </motion.div>
        </Reveal>
      )}

      {/* Objectives Section */}
      {project.objectives && project.objectives.length > 0 && (
        <Reveal>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
              Project Objectives
            </h2>

            <motion.div className="grid gap-4 sm:grid-cols-2">
              {project.objectives.map((objective, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="liquid-glass-strong rounded-2xl border border-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/8"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex-shrink-0" />
                    <p className="text-white/80">{objective}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Reveal>
      )}

      {/* Key Features Section */}
      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <Reveal>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
              Key Features
            </h2>

            <motion.div className="grid gap-4 sm:grid-cols-2">
              {project.keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="liquid-glass-strong rounded-2xl border border-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/8"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex-shrink-0" />
                    <p className="text-white/80">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Reveal>
      )}

      {/* Tech Stack Section */}
      <Reveal>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
            Technology Stack
          </h2>

          <motion.div
            className="flex flex-wrap gap-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {project.stack.map((tech) => (
              <motion.div
                key={tech}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="rounded-full border border-white/20 bg-white/8 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Reveal>

      {/* Learning Outcomes Section */}
      {project.learningOutcomes && project.learningOutcomes.length > 0 && (
        <Reveal>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
              Learning Outcomes
            </h2>

            <motion.div className="space-y-3">
              {project.learningOutcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-lg border border-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-white/5"
                >
                  <div className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex-shrink-0" />
                  <p className="text-white/80">{outcome}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Reveal>
      )}

      {/* Future Enhancements Section - Expandable */}
      {project.futureEnhancements && project.futureEnhancements.length > 0 && (
        <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <motion.button
              onClick={() => setExpandedFuture(!expandedFuture)}
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
              className="w-full flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
                Future Enhancements & Scope
              </h2>
              <motion.div
                animate={{ rotate: expandedFuture ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="h-6 w-6 text-white/60" />
              </motion.div>
            </motion.button>

            <motion.div
              initial={false}
              animate={{
                height: expandedFuture ? 'auto' : 0,
                opacity: expandedFuture ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={expandedFuture ? 'visible' : 'hidden'}
                className="space-y-3 pt-4"
              >
                {project.futureEnhancements.map((enhancement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 rounded-lg border border-white/5 p-4 backdrop-blur-sm"
                  >
                    <div className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex-shrink-0" />
                    <p className="text-white/80">{enhancement}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </Reveal>
      )}

      {/* Links Section */}
      <Reveal>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-wrap gap-4 pt-8 border-t border-white/10"
        >
          {project.links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/20 backdrop-blur-sm"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </Reveal>
    </div>
  )
}
