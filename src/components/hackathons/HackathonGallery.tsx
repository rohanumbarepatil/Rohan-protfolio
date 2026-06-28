import { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import type { HackathonItem } from '@/types/portfolio'
import { ExternalLink, Github, Linkedin, Maximize2, X } from 'lucide-react'

interface Props {
  hackathon: HackathonItem
}

export function HackathonGallery({ hackathon }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const allImages = [...(hackathon.certificates || []), ...(hackathon.gallery || [])]

  if (allImages.length === 0 && !hackathon.links) return null

  return (
    <div className="mx-auto max-w-7xl border-t border-white/5 px-6 py-16 lg:py-20">
      {hackathon.links && (
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          {hackathon.links.demo && (
            <a
              href={hackathon.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {hackathon.links.github && (
            <a
              href={hackathon.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          )}
          {hackathon.links.linkedin && (
            <a
              href={hackathon.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn Post
            </a>
          )}
        </div>
      )}

      {allImages.length > 0 && (
        <>
          <div className="mb-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.28em] text-gray-500">Gallery</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">Certificates, event frames, and demo-day moments</h3>
          </div>

          <div className="columns-1 gap-4 space-y-4 md:columns-2 xl:columns-3">
            {allImages.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedImage(src)}
                className="group relative mb-4 break-inside-avoid cursor-zoom-in overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5"
              >
                <div className="absolute inset-0 flex items-center justify-center p-8 opacity-40 transition-opacity group-hover:opacity-100 z-10">
                  <div className="flex flex-col items-center gap-2 text-sm text-gray-300">
                    <Maximize2 className="h-6 w-6" />
                    <span>Open full screen</span>
                  </div>
                </div>
                <img
                  src={src}
                  alt="Hackathon Gallery"
                  className="w-full object-cover transition duration-700 group-hover:scale-105"
                  onLoad={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '1'
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="text-xs uppercase tracking-[0.24em] text-gray-300">
                    {idx < hackathon.certificates.length ? 'Certificate' : 'Event Moment'}
                  </p>
                  <p className="mt-1 text-sm text-white">{hackathon.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {/* Lightbox Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <X className="w-6 h-6" />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                src={selectedImage}
                alt="Preview"
                className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  )
}
