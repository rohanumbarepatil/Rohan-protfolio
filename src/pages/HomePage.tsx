import { useEffect } from 'react'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { AchievementsSection } from '@/components/sections/AchievementsSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ResumeSection } from '@/components/sections/ResumeSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { updateSeo } from '@/lib/seo'

export function HomePage() {
  useEffect(() => {
    updateSeo({
      title: 'Rohan | Cinematic Developer Portfolio',
      description:
        'Premium frontend engineer building cinematic, design-led product experiences. React, TypeScript, Tailwind.',
    })
  }, [])

  return (
    <SiteLayout>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <CertificationsSection />
      <GallerySection />
      <SkillsSection />
      <ResumeSection />
      <ContactSection />
    </SiteLayout>
  )
}
