import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { SectionShell } from '@/components/layout/SectionShell'

export function NotFoundPage() {
  return (
    <SiteLayout>
      <SectionShell className="flex items-center justify-center py-32 lg:py-48">
        <div className="text-center">
          <h1 className="editorial-title text-8xl sm:text-9xl">404</h1>
          <p className="mt-4 text-lg text-white/70">This page doesn't exist.</p>
          <Link to="/" className="mt-8 inline-flex">
            <Button size="lg">← Back home</Button>
          </Link>
        </div>
      </SectionShell>
    </SiteLayout>
  )
}
