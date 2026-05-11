import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SectionShell } from '@/components/layout/SectionShell'
import { SocialLinks } from '@/components/common/SocialLinks'
import { Reveal } from '@/components/animations/Reveal'
import { socialLinks } from '@/data/portfolio'
import { site } from '@/constants/site'
import { MagneticButton } from '@/components/animations/MagneticButton'
import { createMailtoLink, type ContactFormValues } from '@/services/contact'

export function ContactSection() {
  const [values, setValues] = useState<ContactFormValues>({ name: '', email: '', message: '' })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.location.href = createMailtoLink(values, site.email)
  }

  return (
    <SectionShell id="contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="mx-auto max-w-3xl text-center"
      >
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          description="Have a project in mind? Let's collaborate and create something amazing together."
        />

        <Reveal className="mt-10">
          <div className="liquid-glass-strong rounded-3xl p-8 sm:p-10 text-left">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="lg:max-w-sm">
                <p className="text-sm leading-7 text-white/70">I'll get back to you as soon as possible.</p>
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/40">Social links</p>
                <div className="mt-4">
                  <SocialLinks items={socialLinks} />
                </div>
                <p className="mt-6 text-sm text-white/65">{site.email}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">Send a Message</p>
              </div>

              <form onSubmit={handleSubmit} className="grid gap-4 lg:min-w-[20rem] lg:flex-1">
                <input
                  value={values.name}
                  onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
                  placeholder="Name"
                  className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-white/30"
                />
                <input
                  type="email"
                  value={values.email}
                  onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
                  placeholder="Email"
                  className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-white/30"
                />
                <textarea
                  value={values.message}
                  onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
                  placeholder="Message"
                  rows={5}
                  className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-white/30"
                />

                <MagneticButton>
                  <Button type="submit" size="lg" className="w-full gap-2 sm:w-auto">
                    Send Message
                  </Button>
                </MagneticButton>
              </form>
            </div>
          </div>
        </Reveal>
      </motion.div>
    </SectionShell>
  )
}
