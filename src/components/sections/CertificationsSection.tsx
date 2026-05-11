import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SectionShell } from '@/components/layout/SectionShell'
import { Reveal } from '@/components/animations/Reveal'
import { certifications } from '@/data/portfolio'
import { stagger } from '@/lib/motion'

export function CertificationsSection() {
  const [modal, setModal] = useState<{ images: string[]; index: number } | null>(null)

  const prev = () => setModal((m) => m && { ...m, index: (m.index - 1 + m.images.length) % m.images.length })
  const next = () => setModal((m) => m && { ...m, index: (m.index + 1) % m.images.length })

  return (
    <SectionShell id="certifications">
      <SectionHeading eyebrow="Achievements" title="Featured Certifications" description="" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 grid gap-5 lg:grid-cols-3"
      >
        {certifications.map((cert) => (
          <Reveal key={cert.title}>
            <Card
              className="overflow-hidden p-0 cursor-pointer transition hover:ring-2 hover:ring-white/20"
              onClick={() => setModal({ images: cert.images, index: 0 })}
            >
              <img src={cert.image} alt={cert.alt} className="h-48 w-full object-cover object-center" />
              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-white">{cert.title}</h3>
                <p className="mt-2 text-sm text-white/65">{cert.meta}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-white/50">{cert.count}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </motion.div>

      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modal.images[modal.index]}
                alt={`Certificate ${modal.index + 1}`}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />

              <div className="absolute top-3 right-3 flex gap-2">
                <span className="rounded-full bg-black/60 px-3 py-1 text-xs text-white/70">
                  {modal.index + 1} / {modal.images.length}
                </span>
                <button
                  onClick={() => setModal(null)}
                  className="rounded-full bg-black/60 p-1.5 text-white/80 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {modal.images.length > 1 && (
                <>
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
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionShell>
  )
}
