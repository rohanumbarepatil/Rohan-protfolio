import { Github, Linkedin, Mail, Sparkles, Twitter } from 'lucide-react'
import type { SocialLink } from '@/types/portfolio'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
  dribbble: Sparkles,
  instagram: Sparkles,
} as const

export function SocialLinks({ items }: { items: SocialLink[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => {
        const Icon = iconMap[item.icon]
        return (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/[0.08] hover:text-white"
          >
            <Icon className="h-4 w-4" />
            {item.label}
          </a>
        )
      })}
    </div>
  )
}
