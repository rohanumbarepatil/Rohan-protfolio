import { ArrowUpRight } from 'lucide-react'
import { socialLinks } from '@/data/portfolio'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          <div className="text-sm text-white/50">
            © {currentYear} Rohan Umbarepatil. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1.5 text-sm text-white/50 transition-colors duration-300 hover:text-white"
              >
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  )
}
