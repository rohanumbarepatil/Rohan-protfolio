import { Footer } from '@/components/layout/Footer'
import { SiteHeader } from '@/components/layout/SiteHeader'

export function SiteLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white">
      <SiteHeader />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
