import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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
      setPercent(Math.round(progress * 100))

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
              style={{ width: size, height: size }}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <motion.div
                aria-hidden="true"
                animate={{ opacity: [0.2, 0.42, 0.2], scale: [0.96, 1.04, 0.96] }}
                transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-[-10%] rounded-full bg-[radial-gradient(circle,rgba(212,175,102,0.22)_0%,rgba(212,175,102,0.08)_28%,transparent_72%)] blur-3xl"
                style={{ opacity: size < 150 ? 0.22 : 0.32 }}
              />

              <motion.div
                aria-hidden="true"
                animate={{ scale: [1, 1.015, 1], rotate: [0, 1.25, 0] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_50%_34%,rgba(10,10,10,1)_0%,rgba(16,16,16,0.98)_34%,rgba(0,0,0,0.96)_68%,rgba(0,0,0,1)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-28px_48px_rgba(0,0,0,0.75),0_24px_90px_rgba(0,0,0,0.8)]"
              />

              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[1.5%] rounded-full p-[1.5px]"
                style={{
                  background:
                    'conic-gradient(from 0deg, rgba(255,255,255,0) 0deg, rgba(255,255,255,0) 18deg, rgba(248,236,214,0.8) 44deg, rgba(212,175,102,0.98) 60deg, rgba(255,255,255,0.18) 72deg, rgba(255,255,255,0) 94deg, rgba(255,255,255,0) 360deg)',
                }}
              >
                <div className="h-full w-full rounded-full bg-[#050505]" />
              </motion.div>

              <motion.div
                aria-hidden="true"
                animate={{ opacity: [0.18, 0.3, 0.18], x: [-4, 4, -4], y: [3, -3, 3] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-[13%] rounded-full bg-[radial-gradient(circle_at_32%_28%,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.1)_18%,rgba(255,255,255,0.02)_40%,transparent_72%)] blur-[1px]"
              />

              <motion.div
                aria-hidden="true"
                animate={{ opacity: [0.14, 0.28, 0.14], scale: [0.98, 1.02, 0.98] }}
                transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-[18%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,102,0.13)_0%,rgba(212,175,102,0.04)_44%,transparent_78%)] blur-2xl"
                style={{ opacity: size < 150 ? 0.1 : 0.16 }}
              />

              <motion.div
                aria-hidden="true"
                animate={{ opacity: [0.2, 0.42, 0.2], scale: [0.985, 1.015, 0.985] }}
                transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-[7%] rounded-full border border-white/5"
              />

              <motion.div
                aria-hidden="true"
                animate={{ opacity: [0.18, 0.54, 0.18], rotate: 360 }}
                transition={{ opacity: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 16, repeat: Infinity, ease: 'linear' } }}
                className="absolute inset-[27%] rounded-full border border-white/10 border-t-white/70"
              />
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}