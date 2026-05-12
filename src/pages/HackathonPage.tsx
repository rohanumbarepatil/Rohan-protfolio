import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { hackathons } from '@/data/hackathons'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { SectionShell } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/button'
import { updateSeo } from '@/lib/seo'
import { HackathonHero } from '@/components/hackathons/HackathonHero'
import { HackathonProblemSolution } from '@/components/hackathons/HackathonProblemSolution'
import { HackathonFeatures } from '@/components/hackathons/HackathonFeatures'
import { HackathonTeam } from '@/components/hackathons/HackathonTeam'
import { HackathonGallery } from '@/components/hackathons/HackathonGallery'
import { motion } from 'framer-motion'

export function HackathonPage() {
  const { id } = useParams<{ id: string }>()
  const hackathon = hackathons.find((item) => item.id === id)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [id])

  useEffect(() => {
    if (hackathon) {
      updateSeo({
        title: `${hackathon.title} | Rohan Portfolio`,
        description: hackathon.summary || hackathon.solutionOverview,
      })
    }
  }, [hackathon])

  if (!hackathon) {
    return (
      <SiteLayout>
        <SectionShell>
          <div className="text-center">
            <h1 className="editorial-title">Hackathon not found</h1>
            <Link to="/#hackathons" className="mt-6 inline-flex">
              <Button>← Back to hackathons</Button>
            </Link>
          </div>
        </SectionShell>
      </SiteLayout>
    )
  }

  return (
    <SiteLayout>
      <SectionShell className="py-16 sm:py-20 lg:py-28 px-0">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              to="/#hackathons"
              className="inline-flex items-center gap-2 text-white/70 transition-colors duration-300 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to hackathons
            </Link>
          </motion.div>
        </div>

        <div className="mt-12">
          <HackathonHero hackathon={hackathon} />
          <HackathonProblemSolution hackathon={hackathon} />
          <HackathonFeatures hackathon={hackathon} />
          <HackathonTeam hackathon={hackathon} />
          <HackathonGallery hackathon={hackathon} />
        </div>
      </SectionShell>
    </SiteLayout>
  )
}