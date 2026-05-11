import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SectionShell } from '@/components/layout/SectionShell'
import { Reveal } from '@/components/animations/Reveal'
import { site } from '@/constants/site'
import { MagneticButton } from '@/components/animations/MagneticButton'

export function ResumeSection() {
  return (
    <SectionShell id="resume">
      <div className="mx-auto grid max-w-3xl gap-8">
        <SectionHeading eyebrow="Resume" title="Check My Resume" description="The reference portfolio links to a single CV download."
        />

        <Reveal>
          <Card className="flex flex-col justify-between p-8 sm:p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Why hire me</p>
              <p className="mt-3 text-lg font-semibold text-white">Check My Resume</p>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Download the original resume linked from the reference portfolio.
              </p>
            </div>
            <MagneticButton className="mt-6">
              <a href={site.resumeUrl} target="_blank" rel="noreferrer" className="w-full">
                <Button size="lg" className="w-full gap-2">
                  <Download className="h-4 w-4" /> Check My Resume
                </Button>
              </a>
            </MagneticButton>
          </Card>
        </Reveal>

        <Reveal>
          <Card className="p-6">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/60">Contact</p>
            <p className="mt-4 text-sm text-white/70">{site.email}</p>
          </Card>
        </Reveal>
      </div>
    </SectionShell>
  )
}
