import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { HackathonItem } from '@/types/portfolio'

interface HackathonCardProps {
  hackathon: HackathonItem
  index: number
}

export function HackathonCard({ hackathon, index }: HackathonCardProps) {
  const liveDemoLink = hackathon.links?.demo
  const linkedinLink = hackathon.links?.linkedin

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="group flex flex-col h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_12px_36px_rgba(0,0,0,0.22)] transition-all duration-300 hover:border-white/20"
    >
      <div className="aspect-video overflow-hidden bg-white/5 relative shrink-0">
        {hackathon.heroImage ? (
          <img
            src={hackathon.heroImage}
            alt={hackathon.title}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-white/10 to-white/5" />
        )}
      </div>

      <div className="flex flex-col flex-1 p-5 sm:p-6 space-y-4">
        <h3 className="text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl">{hackathon.title}</h3>

        <p className="text-sm leading-relaxed text-white/70 sm:text-base flex-1">{hackathon.summary}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {hackathon.techStack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs text-white/75"
            >
              {tech}
            </span>
          ))}
          {hackathon.techStack.length > 6 ? (
            <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs text-white/75">
              +{hackathon.techStack.length - 6}
            </span>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          {liveDemoLink ? (
            <a href={liveDemoLink} target="_blank" rel="noreferrer" className="inline-flex">
              <Button size="sm" variant="primary">
                Live Demo
              </Button>
            </a>
          ) : null}

          {linkedinLink ? (
            <a href={linkedinLink} target="_blank" rel="noreferrer" className="inline-flex">
              <Button size="sm" variant="secondary">
                LinkedIn
              </Button>
            </a>
          ) : null}

          <Link to={`/hackathons/${hackathon.id}`} className="inline-flex">
            <Button size="sm" variant="secondary" className="gap-2">
              Read More
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
