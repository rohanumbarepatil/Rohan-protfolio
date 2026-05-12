import { motion } from 'framer-motion'
import { SectionShell } from '@/components/layout/SectionShell'
import { SectionHeading } from '@/components/common/SectionHeading'
import { hackathons } from '@/data/hackathons'
import { HackathonShowcase } from '@/components/hackathons/HackathonShowcase'
import { Clapperboard, Sparkles } from 'lucide-react'

export function HackathonsSection() {
  if (!hackathons || hackathons.length === 0) return null

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
            title="Story-driven case studies from fast-moving builds"
            description="A recruiter-focused archive of hackathons, prototypes, teamwork, and demo-day storytelling. Newest experiences appear first."
          />

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
            <Sparkles className="w-4 h-4 text-white/60" />
            <span>Verified from local project assets and the stored portfolio dataset.</span>
          </div>
        </motion.div>
      </div>

      <div className="w-full">
        {hackathons.map((hackathon, index) => (
          <HackathonShowcase 
            key={hackathon.id} 
            hackathon={hackathon} 
            index={index} 
          />
        ))}
      </div>
    </SectionShell>
  )
}
