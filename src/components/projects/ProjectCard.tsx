import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ProjectItem } from '@/types/portfolio'
import './btn-github.css'
import './btn-live-demo.css'
import './btn-read-more.css'

interface ProjectCardProps {
  project: ProjectItem
  index: number
}

function getActionLink(project: ProjectItem, pattern: RegExp) {
  return project.links.find((link) => pattern.test(link.label))
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const liveDemoLink = getActionLink(project, /live|demo/i)
  const githubLink = getActionLink(project, /github/i)
  const readMoreLink = getActionLink(project, /read\s*more/i)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_12px_36px_rgba(0,0,0,0.22)] transition-all duration-300 hover:border-white/20"
    >
      <div className="aspect-video overflow-hidden bg-white/5">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-white/10 to-white/5" />
        )}
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        <h3 className="text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl">{project.title}</h3>

        <p className="text-sm leading-relaxed text-white/70 sm:text-base">{project.description}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.stack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs text-white/75"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 6 ? (
            <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs text-white/75">
              +{project.stack.length - 6}
            </span>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          {liveDemoLink ? (
            <a href={liveDemoLink.href} target="_blank" rel="noreferrer" className="inline-flex">
              <button className="btn-live-demo">
                <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
                </svg>
                Live Demo
              </button>
            </a>
          ) : null}

          {githubLink ? (
            <a href={githubLink.href} target="_blank" rel="noreferrer" className="inline-flex">
              <button className="btn-github">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z"
                    fill="currentcolor"
                  ></path>
                </svg>
                <span>View on Github</span>
              </button>
            </a>
          ) : null}

          {readMoreLink ? (
            readMoreLink.href.startsWith('http') ? (
              <a href={readMoreLink.href} target="_blank" rel="noreferrer" className="inline-flex">
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
              </a>
            ) : (
              <Link to={readMoreLink.href} className="inline-flex">
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
            )
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}