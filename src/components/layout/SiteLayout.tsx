import { Footer } from '@/components/layout/Footer'
import { SiteHeader } from '@/components/layout/SiteHeader'

export function SiteLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <SiteHeader />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  )
}
