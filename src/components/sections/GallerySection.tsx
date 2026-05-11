import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SectionShell } from '@/components/layout/SectionShell'
import { Reveal } from '@/components/animations/Reveal'
import { gallery } from '@/data/portfolio'
import { stagger } from '@/lib/motion'

export function GallerySection() {
  return (
    <SectionShell id="gallery">
      <SectionHeading
        eyebrow="Gallery"
        title="Gallery"
        description="A visual journey through achievements, events, workshops, and memories."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4"
      >
        {gallery.map((item) => (
          <Reveal key={`${item.title}-${item.src}`} className="mb-4 break-inside-avoid">
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition duration-300 group-hover:opacity-100">
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </motion.div>
    </SectionShell>
  )
}
