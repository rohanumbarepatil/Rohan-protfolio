import { useEffect } from 'react'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { AchievementsSection } from '@/components/sections/AchievementsSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ProfilesSection } from '@/components/sections/ProfilesSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { HackathonsSection } from '@/components/sections/HackathonsSection'
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
      <ProfilesSection />
      <ExperienceSection />
      <HackathonsSection />
      <AchievementsSection />
      <CertificationsSection />
      <GallerySection />
      <SkillsSection />
      <ContactSection />
    </SiteLayout>
  )
}
