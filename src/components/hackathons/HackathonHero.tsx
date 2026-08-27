import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { HackathonItem } from '@/types/portfolio'
import { ArrowUpRight, Award, CalendarDays, Clock, Github, Globe, Linkedin, Users } from 'lucide-react'
import '../projects/btn-read-more.css'
import '../projects/btn-live-demo.css'

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
                className="inline-flex items-center"
              >
                <button className="btn-live-demo">
                  <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
                  </svg>
                  Live Demo
                </button>
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
                className="inline-flex items-center"
              >
                <div className="btn-read-more-wrapper">
                  <button className="btn-read-more">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="icon"
                    >
                      <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        id="SVGRepo_tracerCarrier"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fill="#000000"
                          d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z"
                        ></path>
                        <path
                          fill="#000000"
                          d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
                        ></path>
                      </g>
                    </svg>
                    <p className="text">
                      <span style={{ transitionDuration: '100ms' }}>R</span>
                      <span style={{ transitionDuration: '150ms' }}>e</span>
                      <span style={{ transitionDuration: '200ms' }}>a</span>
                      <span style={{ transitionDuration: '250ms' }}>d</span>
                      <span className="tab"></span>
                      <span style={{ transitionDuration: '350ms' }}>M</span>
                      <span style={{ transitionDuration: '400ms' }}>o</span>
                      <span style={{ transitionDuration: '450ms' }}>r</span>
                      <span style={{ transitionDuration: '500ms' }}>e</span>
                    </p>
                  </button>
                </div>
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
