import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SectionShell } from '@/components/layout/SectionShell'
import { site } from '@/constants/site'
import { fadeUp, stagger } from '@/lib/motion'
import { MagneticButton } from '@/components/animations/MagneticButton'
import {
  Code, Brain, Server, Sparkles, Laptop, Globe,
  Award, Briefcase, GraduationCap, Database,
  Users, Target, FolderGit, ArrowRight, Download, Linkedin, Mail, Wrench, Rocket
} from 'lucide-react'

const whatIBuild = [
  { icon: Globe, title: 'Scalable Web Apps', desc: 'Building high-performance, responsive applications for global users.' },
  { icon: Brain, title: 'AI Powered Products', desc: 'Integrating intelligent features to solve complex real-world problems.' },
  { icon: Server, title: 'Backend Systems', desc: 'Designing robust architectures and secure, efficient APIs.' },
  { icon: Sparkles, title: 'Modern UI Engineering', desc: 'Crafting premium, interactive, and pixel-perfect user experiences.' }
]

const journey = [
  { icon: Briefcase, year: '2025', title: 'Java Full Stack Intern', desc: 'Developing production-ready applications.' },
  { icon: Users, year: '2025', title: 'Techfest IIT Bombay Ambassador', desc: 'Leading campus outreach and engagement.' },
  { icon: GraduationCap, year: '2025', title: 'GeeksforGeeks Campus Mantri', desc: 'Fostering technical communities on campus.' },
  { icon: Award, year: '2025', title: 'Mini Hackathon Winner', desc: 'Recognized for innovative software solutions.' },
  { icon: FolderGit, year: '2025', title: 'Magazine Technical Incharge', desc: 'Leading technical content planning and publishing.' }
]

const impact = [
  { value: '5+', title: 'Hackathons', desc: 'Competed & won multiple events' },
  { value: '3', title: 'Internships', desc: 'Real-world engineering experience' },
  { value: '10+', title: 'Projects', desc: 'Built and deployed to production' },
  { value: '15+', title: 'Technologies', desc: 'Mastered across the full stack' }
]

const techStack = [
  { icon: Laptop, category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
  { icon: Server, category: 'Backend', items: ['Node.js', 'Express.js', 'Java', 'Python'] },
  { icon: Database, category: 'Database', items: ['MongoDB', 'MySQL', 'Firebase'] },
  { icon: Brain, category: 'AI', items: ['TensorFlow', 'Scikit-learn', 'Predictive Analysis'] },
  { icon: Wrench, category: 'Tools', items: ['Git', 'Vercel', 'Figma', 'REST APIs'] }
]

const currently = [
  { icon: Briefcase, text: 'Java Full Stack Development Intern' },
  { icon: Brain, text: 'Exploring intelligent systems and practical AI applications' },
  { icon: Code, text: 'Building impactful real-world projects' },
  { icon: Target, text: 'Open for software engineering opportunities' }
]

export function AboutSection() {
  const copyEmail = async () => {
    await navigator.clipboard.writeText(site.email)
  }

  return (
    <SectionShell id="about" className="py-24">
      <div className="flex flex-col gap-24">
        
        {/* HERO HEADER */}
        <motion.div 
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" /> About Me
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/40">the Future</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/60 font-medium max-w-2xl">
            Software Engineer focused on building scalable, user-centric applications and AI-powered products.
          </motion.p>
        </motion.div>

        {/* WHO I AM & WHAT I BUILD GRID */}
        <div className="grid lg:grid-cols-12 gap-8">
          <motion.div 
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-4 h-full"
          >
            <Card className="h-full flex flex-col justify-center p-8 bg-white/[0.02] border-white/5 hover:border-white/15 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Who I Am</h3>
                <p className="text-xl md:text-2xl font-medium leading-snug text-white/90">
                  I combine clean architecture with product thinking to deliver elegant software solutions that solve real-world problems.
                </p>
                <div className="pt-4">
                  <div className="flex items-center gap-3 text-sm text-white/50">
                    <Rocket className="w-4 h-4" />
                    <span>Based in India, Engineering for the Web</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div 
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-8 grid sm:grid-cols-2 gap-4"
          >
            {whatIBuild.map((item, idx) => (
              <motion.div key={idx} variants={fadeUp}>
                <Card className="h-full p-6 bg-white/[0.01] border-white/5 hover:bg-white/[0.03] hover:border-white/20 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/10">
                    <item.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-base font-semibold text-white/90 mb-2">{item.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* MY IMPACT (Stats) */}
        <motion.div 
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {impact.map((stat, idx) => (
            <motion.div key={idx} variants={fadeUp}>
              <Card className="p-6 flex flex-col items-center text-center bg-white/[0.01] border-white/5 hover:border-white/20 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <h4 className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tighter group-hover:scale-105 transition-transform duration-300">{stat.value}</h4>
                <p className="text-sm font-semibold text-white/80 uppercase tracking-widest mb-1">{stat.title}</p>
                <p className="text-xs text-white/40">{stat.desc}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* TIMELINE & TECH STACK */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* MY JOURNEY */}
          <motion.div 
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 ml-2">My Journey</h3>
            <div className="relative border-l border-white/10 ml-6 space-y-8 py-2">
              {journey.map((item, idx) => (
                <motion.div key={idx} variants={fadeUp} className="relative pl-8 group">
                  <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[#0a0a0a] border border-white/20 flex items-center justify-center group-hover:border-white/60 group-hover:bg-white/5 transition-all duration-300">
                    <item.icon className="w-3.5 h-3.5 text-white/50 group-hover:text-white transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-medium tracking-wider text-white/40">{item.year}</span>
                    <h4 className="text-base font-semibold text-white/90 group-hover:text-white transition-colors">{item.title}</h4>
                    <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* TECH STACK */}
            <motion.div 
              variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 ml-2">Tech Stack</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {techStack.map((stack, idx) => (
                  <motion.div key={idx} variants={fadeUp}>
                    <Card className="p-5 bg-white/[0.01] border-white/5 hover:bg-white/[0.03] hover:border-white/15 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-white/5">
                          <stack.icon className="w-4 h-4 text-white/70" />
                        </div>
                        <h4 className="text-sm font-semibold text-white/90">{stack.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {stack.items.map((tech) => (
                          <span key={tech} className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-white/60 border border-white/5 hover:text-white/90 hover:border-white/20 hover:bg-white/10 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CURRENTLY */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <Card className="p-6 md:p-8 bg-gradient-to-br from-white/[0.03] to-white/[0.01] border-white/10 relative overflow-hidden group">
                <div className="absolute -right-20 -top-20 w-60 h-60 bg-white/5 rounded-full blur-[80px] group-hover:bg-white/10 transition-colors duration-700" />
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6 relative z-10">Currently</h3>
                <div className="space-y-4 relative z-10">
                  {currently.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 group/item">
                      <div className="mt-1">
                        <item.icon className="w-4 h-4 text-white/40 group-hover/item:text-white/80 transition-colors" />
                      </div>
                      <p className="text-sm font-medium text-white/70 group-hover/item:text-white transition-colors">{item.text}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <motion.div 
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center space-y-8 py-12 border-t border-white/5"
        >
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Let's build something meaningful.</h3>
            <p className="text-sm md:text-base text-white/50 max-w-lg mx-auto">
              Open for software engineering roles, internships, and collaborations where I can contribute to impactful products.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <MagneticButton>
              <Button onClick={copyEmail} className="gap-2.5 bg-white text-black hover:bg-white/90 px-6 py-5 md:px-8 md:py-6 rounded-full font-semibold text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:-translate-y-0.5">
                <Mail className="w-4 h-4" /> Email Me
              </Button>
            </MagneticButton>
            <MagneticButton>
              <a href="https://www.linkedin.com/in/rohan-umbare-patil-76b971358/" target="_blank" rel="noreferrer">
                <Button variant="secondary" className="gap-2.5 px-6 py-5 md:px-8 md:py-6 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all hover:-translate-y-0.5">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </Button>
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href={site.resumeUrl} target="_blank" rel="noreferrer">
                <Button variant="secondary" className="gap-2.5 px-6 py-5 md:px-8 md:py-6 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all group hover:-translate-y-0.5">
                  <Download className="w-4 h-4" /> 
                  Resume
                  <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Button>
              </a>
            </MagneticButton>
          </div>
        </motion.div>

      </div>
    </SectionShell>
  )
}
