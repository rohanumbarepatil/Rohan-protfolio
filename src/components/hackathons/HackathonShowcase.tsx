import type { HackathonItem } from '@/types/portfolio'
import { HackathonHero } from './HackathonHero'
import { HackathonProblemSolution } from './HackathonProblemSolution'
import { HackathonFeatures } from './HackathonFeatures'
import { HackathonTeam } from './HackathonTeam'
import { HackathonGallery } from './HackathonGallery'

interface Props {
  hackathon: HackathonItem
  index: number
}

export function HackathonShowcase({ hackathon, index }: Props) {
  const isEven = index % 2 === 0

  return (
    <div
      className={`relative isolate w-full border-t border-white/[0.04] pb-24 ${
        isEven ? 'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_40%),#050505]' : 'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_40%),#090909]'
      }`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_12%,transparent_88%,rgba(255,255,255,0.02))] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-0">
        <HackathonHero hackathon={hackathon} />
        <HackathonProblemSolution hackathon={hackathon} />
        <HackathonFeatures hackathon={hackathon} />
        <HackathonTeam hackathon={hackathon} />
        <HackathonGallery hackathon={hackathon} />
      </div>
    </div>
  )
}
