export type SectionId =
  | 'home'
  | 'about'
  | 'education'
  | 'projects'
  | 'experience'
  | 'achievements'
  | 'certifications'
  | 'gallery'
  | 'resume'
  | 'contact'

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
}
