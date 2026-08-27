import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './loader.css'

interface LoadingScreenProps {
  active: boolean
}

export const LOADER_DURATION_MS = 2600

function getLoaderSize(width: number) {
  if (width < 768) return 126
  if (width < 1024) return 184
  if (width < 1440) return 244
  return 300
}

export function LoadingScreen({ active }: LoadingScreenProps) {
  const [viewportWidth, setViewportWidth] = useState(() => {
    if (typeof window === 'undefined') return 1440

    return window.innerWidth
  })

  const size = useMemo(() => getLoaderSize(viewportWidth), [viewportWidth])

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth)

    onResize()
    window.addEventListener('resize', onResize, { passive: true })

    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!active) return

    let frame = 0
    const startTime = window.performance.now()

    const update = (time: number) => {
      const progress = Math.min(1, (time - startTime) / LOADER_DURATION_MS)

      if (progress < 1) {
        frame = window.requestAnimationFrame(update)
      }
    }

    frame = window.requestAnimationFrame(update)

    return () => window.cancelAnimationFrame(frame)
  }, [active])

  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] overflow-hidden bg-[#050505] text-white"
        >
          <div className="relative flex min-h-[100svh] items-center justify-center px-4 py-8 sm:px-6">
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <div className="banter-loader">
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}