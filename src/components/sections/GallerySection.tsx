import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SectionShell } from '@/components/layout/SectionShell'
import { gallery } from '@/data/portfolio'

export function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [spotlight, setSpotlight] = useState<{ x: number; y: number } | null>(null)
  const rowRef1 = useRef<HTMLDivElement>(null)
  const rowRef2 = useRef<HTMLDivElement>(null)

  const row1 = gallery.slice(0, Math.ceil(gallery.length / 2))
  const row2 = gallery.slice(Math.ceil(gallery.length / 2))

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + gallery.length) % gallery.length : 0))
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % gallery.length : 0))

  return (
    <SectionShell id="gallery">
      <SectionHeading
        eyebrow="Gallery"
        title="Gallery"
        description="A visual journey through achievements, events, workshops, and memories."
      />

      {/* Horizontal Scroll Rows */}
      <div
        className="relative mt-12 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setSpotlight(null)}
      >
        {/* Spotlight overlay */}
        {spotlight && (
          <div
            className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
            style={{
              background: `radial-gradient(400px circle at ${spotlight.x}px ${spotlight.y}px, rgba(255,255,255,0.06), transparent 70%)`,
            }}
          />
        )}

        {/* Row 1 - scroll left */}
        <div className="mb-4 overflow-hidden">
          <motion.div
            ref={rowRef1}
            className="flex gap-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            style={{ width: 'max-content' }}
          >
            {[...row1, ...row1].map((item, index) => (
              <motion.div
                key={`r1-${index}`}
                className="relative h-52 w-72 flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                whileHover={{ scale: 1.04, zIndex: 20 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightbox(index % row1.length)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover object-center grayscale transition duration-500 hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-300 hover:opacity-100" />
                <div className="absolute bottom-0 left-0 p-3 opacity-0 transition duration-300 hover:opacity-100">
                  <p className="text-xs font-semibold text-white">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - scroll right */}
        <div className="overflow-hidden">
          <motion.div
            ref={rowRef2}
            className="flex gap-4"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            style={{ width: 'max-content' }}
          >
            {[...row2, ...row2].map((item, index) => (
              <motion.div
                key={`r2-${index}`}
                className="relative h-52 w-72 flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                whileHover={{ scale: 1.04, zIndex: 20 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightbox(Math.ceil(gallery.length / 2) + (index % row2.length))}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover object-center grayscale transition duration-500 hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-300 hover:opacity-100" />
                <div className="absolute bottom-0 left-0 p-3 opacity-0 transition duration-300 hover:opacity-100">
                  <p className="text-xs font-semibold text-white">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={gallery[lightbox].src}
                alt={gallery[lightbox].alt}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />

              <div className="absolute top-3 right-3 flex gap-2">
                <span className="rounded-full bg-black/60 px-3 py-1 text-xs text-white/70">
                  {lightbox + 1} / {gallery.length}
                </span>
                <button
                  onClick={() => setLightbox(null)}
                  className="rounded-full bg-black/60 p-1.5 text-white/80 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="absolute bottom-3 left-0 right-0 text-center">
                <p className="text-sm font-semibold text-white/80">{gallery[lightbox].title}</p>
              </div>

              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white/80 hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white/80 hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionShell>
  )
}
