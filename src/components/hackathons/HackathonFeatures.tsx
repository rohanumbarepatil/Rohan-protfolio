import { motion } from 'framer-motion'
import type { HackathonItem } from '@/types/portfolio'
import { ArrowRight, Brain, Layers, Sparkles, Wand2 } from 'lucide-react'

interface Props {
  hackathon: HackathonItem
}

export function HackathonFeatures({ hackathon }: Props) {
  const renderList = (items: string[] | undefined, emptyLabel: string) => {
    if (!items || items.length === 0) {
      return <p className="text-sm leading-7 text-gray-500">{emptyLabel}</p>
    }

    return (
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={item + idx} className="flex items-start gap-3 text-sm leading-7 text-gray-300">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/50" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      <div className="grid gap-6 xl:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 xl:col-span-2"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-white/70" />
            <h3 className="text-2xl font-semibold tracking-tight text-white">Key Features</h3>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {hackathon.features.map((feature, idx) => (
              <motion.div
                key={feature + idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-gray-300"
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
        >
          <div className="flex items-center gap-3">
            <Layers className="h-5 w-5 text-white/70" />
            <h3 className="text-2xl font-semibold tracking-tight text-white">Technology Stack</h3>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {hackathon.techStack.map((tech, idx) => (
              <motion.div
                key={tech + idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                whileHover={{ y: -2 }}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-white/10"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
        >
          <div className="flex items-center gap-3">
            <Wand2 className="h-5 w-5 text-white/70" />
            <h3 className="text-2xl font-semibold tracking-tight text-white">Innovation Points</h3>
          </div>
          <div className="mt-6">{renderList(hackathon.innovationPoints, 'Innovation notes were not captured in the source assets.')}</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
        >
          <div className="flex items-center gap-3">
            <Brain className="h-5 w-5 text-white/70" />
            <h3 className="text-2xl font-semibold tracking-tight text-white">Development Process</h3>
          </div>
          <div className="mt-6">{renderList(hackathon.developmentProcess, 'Process details were not explicitly captured.')}</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
        >
          <div className="flex items-center gap-3">
            <ArrowRight className="h-5 w-5 text-white/70" />
            <h3 className="text-2xl font-semibold tracking-tight text-white">UI / UX Highlights</h3>
          </div>
          <div className="mt-6">{renderList(hackathon.uiUxHighlights, 'UI/UX details were not explicitly captured.')}</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 xl:col-span-2"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-white/70" />
            <h3 className="text-2xl font-semibold tracking-tight text-white">Learning Outcomes</h3>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {hackathon.learningOutcomes.map((outcome, idx) => (
              <div key={outcome + idx} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-gray-300">
                {outcome}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
