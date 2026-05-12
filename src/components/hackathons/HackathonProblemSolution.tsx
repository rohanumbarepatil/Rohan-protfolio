import { motion } from 'framer-motion'
import type { HackathonItem } from '@/types/portfolio'
import { ArrowRight, Lightbulb, Target, TrendingUp } from 'lucide-react'

interface Props {
  hackathon: HackathonItem
}

export function HackathonProblemSolution({ hackathon }: Props) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-xl shadow-black/20"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-red-500/10 text-red-300">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-gray-500">Problem Statement</p>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">The challenge we were asked to solve</h3>
            </div>
          </div>

          <p className="mt-6 text-lg leading-8 text-gray-300">{hackathon.problemStatement}</p>
          {hackathon.problemContext ? <p className="mt-5 text-base leading-8 text-gray-400">{hackathon.problemContext}</p> : null}

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-gray-500">Why it matters</p>
            <p className="mt-3 text-sm leading-7 text-gray-300">
              {hackathon.realWorldImpact || 'The solution is positioned around practical problem solving and judge-ready execution.'}
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-emerald-500/10 text-emerald-300">
                <Lightbulb className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-gray-500">Our Solution</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">How we framed the answer</h3>
              </div>
            </div>

            <p className="mt-6 text-base leading-8 text-gray-300">{hackathon.solutionOverview}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-blue-500/10 text-blue-300">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-gray-500">Real-World Impact</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">What the project is meant to change</h3>
              </div>
            </div>

            <p className="mt-5 text-sm leading-8 text-gray-400">
              {hackathon.realWorldImpact || 'The solution demonstrates how real users could benefit from a faster and cleaner workflow.'}
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-gray-300">
              <ArrowRight className="h-4 w-4 text-white/60" />
              Built for recruiter readability and demo-day clarity.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
