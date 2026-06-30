import { motion } from 'framer-motion'
import {
  Code2,
  Monitor,
  Server,
  Database,
  Brain,
  Wrench,
  GitBranch,
  Cloud,
} from 'lucide-react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SectionShell } from '@/components/layout/SectionShell'
import { Reveal } from '@/components/animations/Reveal'
import { stagger } from '@/lib/motion'

const techCategories = [
  {
    title: 'Frontend Engineering',
    icon: Monitor,
    description: 'Building responsive, accessible, and performant user interfaces.',
    badge: 'Primary',
    technologies: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Backend Development',
    icon: Server,
    description: 'Designing scalable architectures and secure RESTful APIs.',
    badge: 'Advanced',
    technologies: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'REST APIs'],
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Programming Languages',
    icon: Code2,
    description: 'Writing clean, efficient, and typed code for complex logic.',
    badge: 'Core',
    technologies: ['Java', 'Python', 'JavaScript', 'C'],
    gradient: 'from-yellow-500/20 to-orange-500/20',
  },
  {
    title: 'Artificial Intelligence',
    icon: Brain,
    description: 'Integrating machine learning models and intelligent workflows.',
    badge: 'Exploring',
    technologies: ['TensorFlow', 'Scikit-learn', 'Prompt Engineering'],
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Databases',
    icon: Database,
    description: 'Managing structured and unstructured data efficiently.',
    badge: 'Production',
    technologies: ['MongoDB', 'MySQL', 'Firebase'],
    gradient: 'from-rose-500/20 to-red-500/20',
  },
  {
    title: 'Cloud & Deployment',
    icon: Cloud,
    description: 'Deploying robust applications to modern serverless edges.',
    badge: 'Active',
    technologies: ['Vercel', 'Netlify', 'Render'],
    gradient: 'from-indigo-500/20 to-blue-500/20',
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    description: 'Collaborating securely through distributed version control.',
    badge: 'Daily',
    technologies: ['Git', 'GitHub'],
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    description: 'Accelerating workflows with modern development environments.',
    badge: 'Workflow',
    technologies: ['VS Code', 'Postman', 'Figma'],
    gradient: 'from-gray-500/20 to-slate-500/20',
  }
]

export function SkillsSection() {
  return (
    <SectionShell id="skills">
      <SectionHeading
        eyebrow="Engineering Ecosystem"
        title="The Technology Behind My Work"
        description="I leverage a modern, scalable stack to transform complex problems into seamless, performant digital experiences."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {techCategories.map((category) => {
          const Icon = category.icon
          return (
            <Reveal key={category.title}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                {/* Subtle Gradient Background */}
                <div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${category.gradient} blur-[50px] transition-all duration-700 group-hover:scale-150 group-hover:opacity-100 opacity-30`} />
                
                {/* Border Glow Effect */}
                <div className="absolute inset-0 rounded-3xl border border-white/0 transition-all duration-500 group-hover:border-white/10 pointer-events-none" />

                <div className="relative z-10 flex flex-1 flex-col">
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                      <Icon className="h-6 w-6 text-white/70 transition-colors duration-300 group-hover:text-white" />
                    </div>
                    {category.badge && (
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60 backdrop-blur-md transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/90">
                        {category.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="mb-2 text-xl font-semibold tracking-tight text-white/90 transition-colors duration-300 group-hover:text-white">
                    {category.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-white/50 transition-colors duration-300 group-hover:text-white/70">
                    {category.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/60 transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/[0.08] group-hover:text-white/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </motion.div>
    </SectionShell>
  )
}
