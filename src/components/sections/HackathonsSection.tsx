import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionShell } from '@/components/layout/SectionShell'
import { SectionHeading } from '@/components/common/SectionHeading'
import { hackathons } from '@/data/hackathons'
import { HackathonShowcase } from '@/components/hackathons/HackathonShowcase'
import { HackathonCard } from '@/components/hackathons/HackathonCard'
import { Clapperboard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils/cn'

export function HackathonsSection() {
  if (!hackathons || hackathons.length === 0) return null

  const [showAllHackathons, setShowAllHackathons] = useState(false)
  const remainingHackathons = hackathons.slice(1)

  return (
    <SectionShell id="hackathons" className="bg-black pt-24 pb-0 px-0 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Clapperboard className="w-4 h-4 text-gray-300" />
              <span className="text-sm font-medium text-gray-300 tracking-[0.28em] uppercase">
                Cinematic Hackathon Archive
              </span>
            </div>
          </div>

          <SectionHeading
            eyebrow="Hackathons"
            title="Cinematic stories from intense build sessions"
            description="A handpicked archive of hackathons, prototypes, team collaborations, and product experiments designed to highlight creativity under pressure."
          />
        </motion.div>
      </div>

      <div className="w-full">
        {/* Featured Hackathon uses cinematic layout */}
        <HackathonShowcase
          key={hackathons[0].id}
          hackathon={hackathons[0]}
          index={0}
        />

        {/* Remaining Hackathons uses Project Grid layout */}
        <motion.div layout className="max-w-7xl mx-auto px-6">
          <AnimatePresence initial={false}>
            {showAllHackathons && (
              <motion.div
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className={cn(
                  'grid gap-6 transition-all duration-300 pt-16',
                  'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                )}
              >
                {remainingHackathons.map((hackathon, index) => (
                  <HackathonCard
                    key={hackathon.id}
                    hackathon={hackathon}
                    index={index}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {remainingHackathons.length > 0 && (
            <motion.div layout className="flex justify-center py-10 sm:py-16">
              <Button
                type="button"
                variant="secondary"
                onClick={() => setShowAllHackathons((current) => !current)}
                className="min-w-[170px]"
              >
                {showAllHackathons ? 'Show Less' : 'More Hackathons'}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </SectionShell>
  )
}
