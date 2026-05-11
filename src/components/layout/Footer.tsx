import { ArrowUpRight } from 'lucide-react'
import { socialLinks } from '@/data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-10 text-white/65">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="max-w-xl text-sm leading-6">© Rohan_Umbarepatil. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="inline-flex items-center gap-1 text-white/70 transition hover:text-white">
              {link.label}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
