import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
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
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#050505]/70 backdrop-blur-xl">
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

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-white/8 bg-[#050505]/95 px-6 py-6 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-6 max-h-[80vh] overflow-y-auto">
              {navigation.map((item, i) => (
                <motion.a
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  key={item.label}
                  href={pathname === '/' ? item.href : `/${item.href}`}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={cn(
                    'text-lg font-medium tracking-wide text-white/50 transition-colors hover:text-white relative',
                    activeHref === item.href && 'text-white',
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeHref === item.href && (
                    <motion.div
                      layoutId="activeMobileNav"
                      className="absolute -left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white"
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
