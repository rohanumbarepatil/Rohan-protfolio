import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SectionShell } from '@/components/layout/SectionShell'
import { projects } from '@/data/portfolio'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { cn } from '@/utils/cn'

export function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 1)
  const canToggleProjects = projects.length > 1

  return (
    <SectionShell id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="My Selected Projects"
        description="A focused collection of recent work with practical impact and clean execution."
      />

      <motion.div layout className="mt-12 sm:mt-14">
        <motion.div
          layout
          className={cn(
            'grid gap-6 transition-all duration-300',
            showAllProjects ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1',
          )}
        >
          <AnimatePresence initial={false}>
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {canToggleProjects && (
          <div className="flex justify-center pt-8 sm:pt-10">
            <button
              type="button"
              onClick={() => setShowAllProjects((current) => !current)}
              className="px-8 py-2 text-white font-bold text-sm md:text-base rounded-full shadow-lg transition-all transform bg-transparent border-2 border-white/20 hover:scale-105 hover:border-green-600 hover:shadow-green-500/50 hover:shadow-2xl focus:outline-none"
            >
              {showAllProjects ? 'Show Less' : 'More Projects'}
            </button>
          </div>
        )}
      </motion.div>
    </SectionShell>
  )
}
