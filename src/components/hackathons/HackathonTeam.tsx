import { motion } from 'framer-motion'
import type { HackathonItem } from '@/types/portfolio'
import { User } from 'lucide-react'

interface Props {
  hackathon: HackathonItem
}

export function HackathonTeam({ hackathon }: Props) {
  if (!hackathon.team || hackathon.team.length === 0) return null

  const getInitials = (name: string) =>
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join('')

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-gray-500">Team</p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">The minds behind {hackathon.teamName}</h3>
        <p className="mt-4 text-base leading-7 text-gray-400">A small, focused team is usually what turns a hackathon idea into a convincing demo.</p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {hackathon.team.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 text-center transition-all hover:border-white/20"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)] opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black/30 ring-1 ring-white/5 transition-all group-hover:ring-white/20">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))] text-sm font-semibold tracking-[0.2em] text-white">
                    {getInitials(member.name) || <User className="w-6 h-6 text-gray-400" />}
                  </div>
                )}
              </div>
              <h4 className="mb-1 text-lg font-semibold text-gray-100">{member.name}</h4>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-gray-500">{member.role || 'Contributor'}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
