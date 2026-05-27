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
            title="Cinematic stories from intense build sessions"
            description="A handpicked archive of hackathons, prototypes, team collaborations, and product experiments designed to highlight creativity under pressure."
          />
          
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
