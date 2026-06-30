import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionShell } from '@/components/layout/SectionShell'
import { SocialLinks } from '@/components/common/SocialLinks'
import { socialLinks } from '@/data/portfolio'
import { site } from '@/constants/site'
import { createMailtoLink, type ContactFormValues } from '@/services/contact'
import { cn } from '@/utils/cn'

export function ContactSection() {
  const [values, setValues] = useState<ContactFormValues>({ name: '', email: '', message: '' })
  const [isHovered, setIsHovered] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.location.href = createMailtoLink(values, site.email)
  }

  return (
    <SectionShell id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-5xl"
      >
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
            Let's build something great.
          </h2>
          <p className="mt-4 text-base text-white/60 sm:text-lg max-w-2xl">
            Open for collaborations, freelance work, and impactful digital experiences. Drop a message or check out my resume.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] items-start">
          
          {/* Left Column - Info & Resume */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-colors duration-300 hover:bg-white/[0.03]">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-medium text-white">Experience Profile</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Available
                </span>
              </div>
              
              <p className="text-sm leading-relaxed text-white/60 mb-8">
                I build refined, responsive interfaces with a strong focus on clarity, performance, and polish. If the project is a fit, I like to move fast and keep the process clear.
              </p>

              <div className="space-y-3 mb-8">
                {['Frontend Architecture', 'UI/UX Polish', 'Rapid Prototyping'].map((skill) => (
                  <div key={skill} className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 className="h-4 w-4 text-white/30" />
                    {skill}
                  </div>
                ))}
              </div>

              <a href={site.resumeUrl} target="_blank" rel="noreferrer" className="block">
                <Button 
                  variant="secondary" 
                  className="w-full justify-between group bg-white/[0.03] hover:bg-white/[0.06] border-white/5"
                >
                  Download Resume
                  <Download className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                </Button>
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
              <h3 className="text-sm font-medium text-white/80 mb-4">Connect Directly</h3>
              <SocialLinks items={socialLinks} />
              <p className="mt-6 text-sm text-white/50">{site.email}</p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/70">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={values.name}
                    onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
                    placeholder="John Doe"
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 text-sm text-white placeholder:text-white/20 focus:border-white/20 focus:bg-white/[0.04] focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/70">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={values.email}
                    onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
                    placeholder="john@example.com"
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 text-sm text-white placeholder:text-white/20 focus:border-white/20 focus:bg-white/[0.04] focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/70">Message</label>
                <textarea
                  id="message"
                  required
                  value={values.message}
                  onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white placeholder:text-white/20 focus:border-white/20 focus:bg-white/[0.04] focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
                />
              </div>

              <Button
                type="submit"
                className="mt-2 group w-full sm:w-auto self-start"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Send Message
                <ArrowRight className={cn("ml-2 h-4 w-4 transition-transform duration-300", isHovered && "translate-x-1")} />
              </Button>
            </form>
          </div>

        </div>
      </motion.div>
    </SectionShell>
  )
}
