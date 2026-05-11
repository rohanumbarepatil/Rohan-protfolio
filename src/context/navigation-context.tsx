import { createContext, useContext, useEffect, useMemo, useState } from 'react'

interface NavigationContextValue {
  menuOpen: boolean
  setMenuOpen: (value: boolean) => void
  closeMenu: () => void
}

const NavigationContext = createContext<NavigationContextValue | undefined>(undefined)

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const value = useMemo(
    () => ({
      menuOpen,
      setMenuOpen,
      closeMenu: () => setMenuOpen(false),
    }),
    [menuOpen],
  )

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useNavigation() {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider')
  }

  return context
}
