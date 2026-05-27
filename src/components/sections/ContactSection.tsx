import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionShell } from '@/components/layout/SectionShell'
import { SocialLinks } from '@/components/common/SocialLinks'
import { socialLinks } from '@/data/portfolio'
import { site } from '@/constants/site'
import { createMailtoLink, type ContactFormValues } from '@/services/contact'
import { cn } from '@/utils/cn'

export function ContactSection() {
  const [values, setValues] = useState<ContactFormValues>({ name: '', email: '', message: '' })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.location.href = createMailtoLink(values, site.email)
  }

  return (
    <SectionShell id="contact">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="grain-overlay relative mx-auto max-w-6xl"
      >
        <div className="pointer-events-none absolute inset-x-[-12%] top-[-10%] h-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.12),transparent_68%)] blur-3xl" />
        <div className="pointer-events-none absolute right-[-6%] top-[18%] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.08),transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-[10%] top-[14%] h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)] opacity-60" />

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.38em] text-white/42">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            Let&apos;s Connect
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/58 sm:text-lg">
            Open for collaborations, freelance work, and impactful digital experiences.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[34px] border border-white/10 bg-[rgba(255,255,255,0.035)] shadow-[0_35px_120px_rgba(0,0,0,0.52)] backdrop-blur-2xl sm:mt-14">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_24%,transparent_76%,rgba(255,255,255,0.02))]" />
          <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_34%)]" />
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div
              id="resume"
              className="relative border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.06),transparent_38%)]" />
              <div className="space-y-8">
                <div className="space-y-5">
                  <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-white/48 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    Why Hire Me
                  </div>

                  <div className="space-y-3">
                    <p className="max-w-md text-sm leading-7 text-white/74 sm:text-base">
                      I build refined, responsive interfaces with a strong focus on clarity, performance, and polish.
                    </p>
                    <p className="text-sm leading-7 text-white/52">
                      I&apos;ll get back to you as soon as possible. If the project is a fit, I like to move fast and keep the process clear.
                    </p>
                  </div>
                </div>

                <div className="relative rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.035)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_60px_rgba(0,0,0,0.28)] sm:p-6">
                  <div className="absolute inset-0 rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_40%)]" />
                  <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_45%)]" />
                  <div className="relative flex items-center justify-between gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.34em] text-white/42">Resume</p>
                      <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-white sm:text-xl">Check My Resume</p>
                      <p className="mt-2 max-w-sm text-sm leading-6 text-white/58">
                        Download the resume for a quick overview of experience, skills, and project work.
                      </p>
                    </div>

                    <div className="hidden h-20 w-px bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.12),transparent)] md:block" />

                    <div className="hidden items-center gap-2 md:flex md:flex-col md:items-start">
                      <div className="inline-flex rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                        Frontend Developer
                      </div>
                      <div className="inline-flex rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                        UI/UX Focused
                      </div>
                      <div className="inline-flex rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                        Hackathon Winner
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-6 border-t border-white/10 pt-5">
                    <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/36">
                      <span>Why Hire Me</span>
                      <span className="h-px w-6 bg-white/15" />
                      <span>Single-click download</span>
                    </div>

                    <div className="mt-4">
                      <a href={site.resumeUrl} target="_blank" rel="noreferrer" className="inline-flex w-full sm:w-auto">
                        <Button size="lg" className="w-full gap-2 shadow-[0_14px_40px_rgba(255,255,255,0.06)] sm:w-auto sm:min-w-[220px]">
                          <Download className="h-4 w-4" />
                          Check My Resume
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {['Frontend Developer', 'UI/UX Focused', 'Hackathon Winner'].map((label) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/68 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative p-6 sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.05),transparent_38%)]" />
              <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.34em] text-white/42">Contact</p>
                  <p className="mt-2 text-sm text-white/58">Currently available for projects</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-emerald-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  Available
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  value={values.name}
                  onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
                  placeholder="Name"
                  className={cn(
                    'h-14 w-full rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 text-sm text-white outline-none transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]',
                    'placeholder:text-white/28 focus:border-white/24 focus:bg-[rgba(255,255,255,0.045)] focus:ring-2 focus:ring-white/10',
                  )}
                />
                <input
                  type="email"
                  value={values.email}
                  onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
                  placeholder="Email"
                  className={cn(
                    'h-14 w-full rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 text-sm text-white outline-none transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]',
                    'placeholder:text-white/28 focus:border-white/24 focus:bg-[rgba(255,255,255,0.045)] focus:ring-2 focus:ring-white/10',
                  )}
                />
                <textarea
                  value={values.message}
                  onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
                  placeholder="Message"
                  rows={6}
                  className={cn(
                    'w-full rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-4 text-sm text-white outline-none transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]',
                    'placeholder:text-white/28 focus:border-white/24 focus:bg-[rgba(255,255,255,0.045)] focus:ring-2 focus:ring-white/10',
                  )}
                />

                <div className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="group w-full gap-2 shadow-[0_16px_45px_rgba(255,255,255,0.06)] sm:w-auto sm:min-w-[180px]"
                  >
                    Send Message
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Button>
                </div>
              </form>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-[0.32em] text-white/38">Social Links</p>
                <div className="mt-4">
                  <SocialLinks items={socialLinks} />
                </div>
                <p className="mt-5 text-sm text-white/52">{site.email}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionShell>
  )
}
