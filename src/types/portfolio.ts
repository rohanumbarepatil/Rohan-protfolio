export type SectionId =
  | 'home'
  | 'about'
  | 'education'
  | 'projects'
  | 'experience'
  | 'achievements'
  | 'certifications'
  | 'hackathons'
  | 'gallery'
  | 'resume'
  | 'contact'
  | 'hackathons'

export interface NavItem {
  label: string
  href: `#${SectionId}` | string
}

export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'twitter' | 'mail' | 'dribbble' | 'instagram'
}

export interface HeroStat {
  value: string
  label: string
}

export interface TimelineEntry {
  title: string
  organization: string
  period: string
  description: string
  details?: string[]
}

export interface Achievement {
  title: string
  meta: string
  detail: string
  image?: string
  alt?: string
}

export interface ProjectLink {
  label: string
  href: string
}

export interface ProjectItem {
  slug: string
  title: string
  category: string
  description: string
  stack: string[]
  links: ProjectLink[]
  image?: string
  about?: string
  objectives?: string[]
  keyFeatures?: string[]
  learningOutcomes?: string[]
  futureEnhancements?: string[]
}

export interface GalleryItem {
  title: string
  src: string
  alt: string
}

export interface SkillGroup {
  title: string
  icon: 'layout' | 'server' | 'spark' | 'cloud' | 'database' | 'tool'
  items: string[]
}

export interface EducationItem {
  title: string
  institution: string
  period: string
  grade: string
  keySkills: string[]
}

export interface CertificationItem {
  title: string
  meta: string
  skills: string[]
  count: string
  image: string
  alt: string
  images: string[]
}

export interface HackathonTeamMember {
  name: string
  role?: string
  image?: string
}

export interface HackathonStat {
  label: string
  value: string
  detail?: string
}

export interface HackathonItem {
  id: string
  title: string
  organizer: string
  date: string
  duration?: string
  teamName: string
  achievement: string
  summary?: string
  problemStatement: string
  problemContext?: string
  solutionOverview: string
  realWorldImpact?: string
  features: string[]
  techStack: string[]
  innovationPoints?: string[]
  uiUxHighlights?: string[]
  developmentProcess?: string[]
  stats?: HackathonStat[]
  heroImage?: string
  team: HackathonTeamMember[]
  gallery: string[] // paths to images
  certificates: string[] // paths to certs
  learningOutcomes: string[]
  links: {
    linkedin: string
    github?: string
    demo?: string
    website?: string
  }
}
