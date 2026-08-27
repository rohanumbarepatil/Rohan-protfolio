import { Briefcase, Building2, Calendar, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SectionShell } from '@/components/layout/SectionShell'
import { timeline } from '@/data/portfolio'

export function ExperienceSection() {
  const [showAllExperiences, setShowAllExperiences] = useState(false)
  
  // Show 4 by default
  const visibleExperiences = showAllExperiences ? timeline : timeline.slice(0, 4)
  const canToggleExperiences = timeline.length > 4

  return (
    <SectionShell id="experience">
      <SectionHeading
        eyebrow="Work"
        title="My Experience"
        description="A clear trajectory of growth, collaboration, and impact across different environments."
      />

      <motion.div layout className="mt-12 sm:mt-16">
        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-8 py-4">
          <AnimatePresence initial={false}>
            {visibleExperiences.map((entry, idx) => (
              <motion.div
                key={entry.title + entry.period}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Timeline Dot with Icon */}
                <div className="absolute -left-[20px] top-1 w-10 h-10 rounded-full bg-[#0a0a0a] border border-white/20 flex items-center justify-center group-hover:border-white/60 group-hover:bg-white/5 transition-all duration-300 z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <Briefcase className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </div>
                
                {/* Card */}
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04] shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="space-y-1.5">
                      <h3 className="text-xl font-semibold text-white/90 group-hover:text-white transition-colors tracking-tight">
                        {entry.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-white/60">
                        <Building2 className="w-4 h-4 text-white/40 shrink-0" />
                        <span className="font-medium">{entry.organization}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 md:text-right shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{entry.period}</span>
                    </div>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-white/70">
                    {entry.description}
                  </p>

                  {entry.details?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {entry.details.map((detail) => (
                        <span
                          key={detail}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 transition-colors group-hover:border-white/20 group-hover:text-white/90"
                        >
                          <ArrowRight className="h-3 w-3 opacity-50" /> {detail}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {canToggleExperiences && (
          <motion.div layout className="flex justify-center pt-10 sm:pt-14 relative z-10">
            <button
              type="button"
              onClick={() => setShowAllExperiences((current) => !current)}
              className="px-8 py-2 text-white font-bold text-sm md:text-base rounded-full shadow-lg transition-all transform bg-transparent border-2 border-white/20 hover:scale-105 hover:border-green-600 hover:shadow-green-500/50 hover:shadow-2xl focus:outline-none"
            >
              {showAllExperiences ? 'Show Less' : 'Show More'}
            </button>
          </motion.div>
        )}
      </motion.div>
    </SectionShell>
  )
}
