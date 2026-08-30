import { Menu, X } from 'lucide-react'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { navigation, sectionIds } from '@/data/portfolio'
import { useNavigation } from '@/context/navigation-context'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { cn } from '@/utils/cn'

export function SiteHeader() {
  const activeSection = useScrollSpy(sectionIds)
  const { menuOpen, setMenuOpen, closeMenu } = useNavigation()
  const { pathname } = useLocation()

  const activeHref = useMemo(() => `#${activeSection}`, [activeSection])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && pathname === '/') {
      e.preventDefault();
      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
      closeMenu();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/8 bg-[#050505]/70 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold tracking-[0.2em] text-white">
            R
          </span>
          <span className="hidden max-w-0 overflow-hidden text-sm tracking-[0.24em] text-white/70 transition-all duration-300 group-hover:max-w-xs sm:block">
            ROHAN
          </span>
        </a>

        <nav className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/5 px-3 py-2 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={pathname === '/' ? item.href : `/${item.href}`}
              onClick={(e) => handleScroll(e, item.href)}
              className={cn(
                'rounded-full px-4 py-2 text-sm transition duration-300 hover:bg-white/8 hover:text-white',
                activeHref === item.href && 'bg-white text-black',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="liquid-glass inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/8 bg-[#050505]/95 px-4 py-4 lg:hidden">
          <div className="section-shell grid gap-2 max-h-[80vh] overflow-y-auto">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={pathname === '/' ? item.href : `/${item.href}`}
                onClick={(e) => handleScroll(e, item.href)}
                className={cn(
                  'rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10',
                  activeHref === item.href && 'bg-white text-black',
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
