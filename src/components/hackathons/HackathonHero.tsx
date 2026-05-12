import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { HackathonItem } from '@/types/portfolio'
import { ArrowUpRight, Award, CalendarDays, Clock, Github, Globe, Linkedin, Users } from 'lucide-react'

interface Props {
  hackathon: HackathonItem
  readMoreHref?: string
}

export function HackathonHero({ hackathon, readMoreHref }: Props) {
  const teamCount = hackathon.team.length

  return (
    <div className="relative overflow-hidden pt-24 pb-12">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_30%)] opacity-70" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-300"
          >
            <CalendarDays className="h-4 w-4 text-white/70" />
            <span>{hackathon.duration || 'Hackathon Event'}</span>
          </motion.div>

          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl"
            >
              {hackathon.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl text-base leading-8 text-gray-400 md:text-lg"
            >
              Organized by <span className="text-gray-200">{hackathon.organizer}</span>
              {hackathon.summary ? <span className="block mt-3 text-gray-300">{hackathon.summary}</span> : null}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            {hackathon.links.demo ? (
              <a
                href={hackathon.links.demo}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
              >
                Live Demo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ) : null}
            {hackathon.links.github ? (
              <a
                href={hackathon.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-gray-200 transition-colors hover:bg-white/10"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            ) : null}
            {hackathon.links.website ? (
              <a
                href={hackathon.links.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-gray-200 transition-colors hover:bg-white/10"
              >
                <Globe className="h-4 w-4" />
                Website
              </a>
            ) : null}
            <a
              href={hackathon.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-gray-200 transition-colors hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn Post
            </a>
            {readMoreHref ? (
              <Link
                to={readMoreHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-gray-200 transition-colors hover:bg-white/10"
              >
                Read More
              </Link>
            ) : null}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40"
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_35%,rgba(255,255,255,0.02))]" />
          {hackathon.heroImage ? (
            <img
              src={hackathon.heroImage}
              alt={hackathon.title}
              className="h-[28rem] w-full object-cover opacity-90"
            />
          ) : (
            <div className="flex h-[28rem] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_50%)] p-10 text-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Hackathon Story Frame</p>
                <p className="mt-4 max-w-sm text-2xl font-semibold text-white">{hackathon.title}</p>
              </div>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Team</p>
                <p className="mt-1 text-lg font-semibold text-white">{hackathon.teamName}</p>
                <p className="text-sm text-gray-400">{hackathon.achievement}</p>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-gray-300">
                {hackathon.date}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-10 grid max-w-7xl gap-4 px-6 md:grid-cols-3"
      >
        {(hackathon.stats?.length
          ? hackathon.stats
          : [
              { label: 'Duration', value: hackathon.duration || 'Hackathon' },
              { label: 'Team', value: hackathon.teamName },
              { label: 'Members', value: String(teamCount) },
            ]
        ).map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-gray-500">{stat.label}</p>
                <p className="mt-2 text-xl font-semibold text-white">{stat.value}</p>
                {stat.detail ? <p className="mt-1 text-sm text-gray-400">{stat.detail}</p> : null}
              </div>
              {stat.label === 'Team' ? <Users className="h-5 w-5 text-white/40" /> : null}
              {stat.label === 'Duration' ? <Clock className="h-5 w-5 text-white/40" /> : null}
              {stat.label === 'Result' ? <Award className="h-5 w-5 text-white/40" /> : null}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
