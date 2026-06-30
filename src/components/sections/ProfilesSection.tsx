import { motion } from 'framer-motion'
import { Github, Linkedin, Brain, Trophy, Briefcase, Code2, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SectionShell } from '@/components/layout/SectionShell'
import { Reveal } from '@/components/animations/Reveal'
import { stagger } from '@/lib/motion'

const profiles = [
  {
    id: 'github',
    platform: 'GitHub',
    category: 'OPEN SOURCE',
    description: 'Explore my open source contributions, full-stack projects, and real-world software applications.',
    tags: ['Full Stack Projects', 'Open Source', 'Web Apps', 'Algorithms'],
    cta: 'Browse Repositories',
    url: 'https://github.com/rohanumbarepatil',
    icon: Github,
    span: 'md:col-span-6 lg:col-span-5',
    accent: 'hover:border-white/20',
    iconColor: 'text-white',
    layout: 'vertical',
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    category: 'PROFESSIONAL NETWORK',
    description: 'Connect with me for professional updates, insights, and career milestones.',
    tags: ['Networking', 'Career Updates'],
    cta: 'Connect on LinkedIn',
    url: 'https://www.linkedin.com/in/rohan-umbare-patil-76b971358/',
    icon: Linkedin,
    span: 'md:col-span-6 lg:col-span-3',
    accent: 'hover:border-blue-500/40',
    iconColor: 'text-blue-500',
    layout: 'vertical',
  },
  {
    id: 'kaggle',
    platform: 'Kaggle',
    category: 'AI RESEARCH',
    description: 'Dive into my machine learning notebooks, dataset explorations, and AI experiments.',
    tags: ['Machine Learning', 'Data Science'],
    cta: 'Explore Notebooks',
    url: 'https://www.kaggle.com/rohanumbarepatil',
    icon: Brain,
    span: 'md:col-span-4 lg:col-span-4',
    accent: 'hover:border-cyan-400/40',
    iconColor: 'text-cyan-400',
    layout: 'vertical',
  },
  {
    id: 'hackindia',
    platform: 'HackIndia',
    category: 'INNOVATION',
    description: 'Discover my journey through national hackathons, competitive coding, and tech communities.',
    tags: ['Hackathons', 'Innovation', 'Community'],
    cta: 'View Hackathons',
    url: 'https://hackindia.org/profile/rohanumbarepatil',
    icon: Code2,
    span: 'md:col-span-4 lg:col-span-4',
    accent: 'hover:border-orange-500/40',
    iconColor: 'text-orange-500',
    layout: 'vertical',
  },
  {
    id: 'hack2skill',
    platform: 'Hack2Skill',
    category: 'COMMUNITY',
    description: 'View my hackathon achievements, challenges solved, and technical skill development.',
    tags: ['Technical Skills', 'Challenges'],
    cta: 'See Challenges',
    url: 'https://hack2skill.com/dashboard/user_private_profile/?userId=694a6955fe832ef7535c82d2&isEdit=true&tabIndex=about',
    icon: Trophy,
    span: 'md:col-span-4 lg:col-span-4',
    accent: 'hover:border-purple-500/40',
    iconColor: 'text-purple-500',
    layout: 'vertical',
  },
  {
    id: 'naukri',
    platform: 'Naukri Campus',
    category: 'CAREER PROFILE',
    description: 'Review my academic background, internship history, and professional career preferences.',
    tags: ['Academics', 'Internships'],
    cta: 'Open Profile',
    url: 'https://www.naukri.com/mnjuser/profile',
    icon: Briefcase,
    span: 'md:col-span-12 lg:col-span-4',
    accent: 'hover:border-blue-400/40',
    iconColor: 'text-blue-400',
    layout: 'vertical',
  },
]

export function ProfilesSection() {
  return (
    <SectionShell id="profiles" className="bg-[#090909] relative overflow-hidden">
      {/* Very Subtle Radial Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02)_0%,transparent_70%)]" />

      <div className="relative z-10">
        <div className="mb-16 flex items-stretch gap-6">
          {/* Vertical Accent Line */}
          <div className="w-0.5 rounded-full bg-white/15" />
          
          <div className="flex flex-col justify-center">
            <h2 className="text-[40px] md:text-[56px] font-bold leading-tight tracking-tight text-white">
              My Digital Presence
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-[1.8] text-[#A1A1AA]">
              Build trust through my professional profiles, technical contributions, hackathons, AI research, and career journey across leading platforms.
            </p>
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-5"
        >
          {profiles.map((profile) => {
            const Icon = profile.icon

            return (
              <Reveal key={profile.id} className={profile.span}>
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[16px] border border-white/[0.08] bg-[#111111] p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-[#151515] hover:border-white/20 ${profile.accent}`}
                >
                  <div className="relative z-10 flex h-full flex-col">
                    
                    {/* Header: Inline Icon & Title */}
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.08] transition-transform duration-500 group-hover:scale-110">
                        <Icon className={`h-4 w-4 ${profile.iconColor}`} />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3 className="text-[17px] font-semibold tracking-tight text-white/90 transition-colors group-hover:text-white">
                          {profile.platform}
                        </h3>
                        <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[1px] text-[#A1A1AA]">
                          {profile.category}
                        </p>
                      </div>
                    </div>

                    {/* Content & Tags */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="mb-5 text-[13px] leading-[1.6] text-white/50 transition-colors group-hover:text-white/70">
                          {profile.description}
                        </p>
                        
                        {/* Capability Tags */}
                        <div className="mb-5 flex flex-wrap gap-1.5">
                          {profile.tags.map(tag => (
                            <span key={tag} className="inline-flex items-center rounded bg-white/[0.03] border border-white/[0.03] px-2 py-1 text-[11px] font-medium text-[#A1A1AA] transition-colors group-hover:bg-white/[0.08] group-hover:text-white">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-auto flex items-center gap-1.5 text-[13px] font-medium text-white/40 transition-colors duration-300 group-hover:text-white">
                        {profile.cta}
                        <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                      </div>
                    </div>

                  </div>
                </a>
              </Reveal>
            )
          })}
        </motion.div>
      </div>
    </SectionShell>
  )
}
