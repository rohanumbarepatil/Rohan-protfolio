import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ProjectItem } from '@/types/portfolio'

interface ProjectCardProps {
  project: ProjectItem
  index: number
}

function getActionLink(project: ProjectItem, pattern: RegExp) {
  return project.links.find((link) => pattern.test(link.label))
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const liveDemoLink = getActionLink(project, /live|demo/i)
  const githubLink = getActionLink(project, /github/i)
  const readMoreLink = getActionLink(project, /read\s*more/i)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_12px_36px_rgba(0,0,0,0.22)] transition-all duration-300 hover:border-white/20"
    >
      <div className="aspect-video overflow-hidden bg-white/5">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-white/10 to-white/5" />
        )}
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        <h3 className="text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl">{project.title}</h3>

        <p className="text-sm leading-relaxed text-white/70 sm:text-base">{project.description}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.stack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs text-white/75"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 6 ? (
            <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs text-white/75">
              +{project.stack.length - 6}
            </span>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          {liveDemoLink ? (
            <a href={liveDemoLink.href} target="_blank" rel="noreferrer" className="inline-flex">
              <Button size="sm" variant="primary">
                Live Demo
              </Button>
            </a>
          ) : null}

          {githubLink ? (
            <a href={githubLink.href} target="_blank" rel="noreferrer" className="inline-flex">
              <Button size="sm" variant="secondary">
                GitHub
              </Button>
            </a>
          ) : null}

          {readMoreLink ? (
            readMoreLink.href.startsWith('http') ? (
              <a href={readMoreLink.href} target="_blank" rel="noreferrer" className="inline-flex">
                <Button size="sm" variant="secondary" className="gap-2">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            ) : (
              <Link to={readMoreLink.href} className="inline-flex">
                <Button size="sm" variant="secondary" className="gap-2">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            )
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}