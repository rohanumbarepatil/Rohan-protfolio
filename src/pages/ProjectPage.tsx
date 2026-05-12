import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { projects } from '@/data/portfolio'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { SectionShell } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/button'
import { updateSeo } from '@/lib/seo'
import { PremiumProjectShowcase } from '@/components/sections/PremiumProjectShowcase'
import { motion } from 'framer-motion'

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [slug])

  useEffect(() => {
    if (project) {
      updateSeo({
        title: `${project.title} | Rohan Portfolio`,
        description: project.description,
      })
    }
  }, [project])

  if (!project) {
    return (
      <SiteLayout>
        <SectionShell>
          <div className="text-center">
            <h1 className="editorial-title">Project not found</h1>
            <Link to="/" className="mt-6 inline-flex">
              <Button>← Back home</Button>
            </Link>
          </div>
        </SectionShell>
      </SiteLayout>
    )
  }

  return (
    <SiteLayout>
      <SectionShell className="py-16 sm:py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-white/70 transition-colors duration-300 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </motion.div>

        <div className="mt-12">
          <PremiumProjectShowcase project={project} />
        </div>
      </SectionShell>
    </SiteLayout>
  )
}
