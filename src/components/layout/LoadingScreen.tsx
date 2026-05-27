import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface LoadingScreenProps {
  active: boolean
}

export function LoadingScreen({ active }: LoadingScreenProps) {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    if (!active) return

    const startTime = Date.now()
    const duration = 2800
    const timer = window.setInterval(() => {
      const elapsed = Date.now() - startTime
      const next = Math.min(100, Math.round((elapsed / duration) * 100))
      setPercent(next)

      if (next >= 100) {
        window.clearInterval(timer)
      }
    }, 16)

    return () => window.clearInterval(timer)
  }, [active])

  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] overflow-hidden bg-[#040404] text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.09),transparent_18%),radial-gradient(circle_at_50%_28%,rgba(184,134,11,0.09),transparent_28%),radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.03),transparent_18%),linear-gradient(180deg,#090909_0%,#040404_50%,#090909_100%)]" />
          <motion.div
            aria-hidden="true"
            animate={{ opacity: [0.55, 0.88, 0.55], scale: [1, 1.04, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-1/2 top-[-12%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.03)_32%,transparent_70%)] blur-3xl"
          />
          <motion.div
            aria-hidden="true"
            animate={{ x: [0, 24, 0], y: [0, -12, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-[12%] top-[18%] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(184,134,11,0.12)_0%,rgba(184,134,11,0.03)_34%,transparent_72%)] blur-3xl"
          />
          <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(rgba(255,255,255,0.85)_0.45px,transparent_0.45px)] [background-size:4px_4px]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,transparent_16%,transparent_84%,rgba(255,255,255,0.02)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),rgba(255,255,255,0.04),transparent)]" />

          <div className="relative flex min-h-screen items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="w-full max-w-2xl"
            >
              <div className="mx-auto max-w-xl text-center">
                <p className="text-[10px] uppercase tracking-[0.5em] text-white/38">Loading Portfolio</p>
                <h1 className="mt-5 font-serif text-4xl font-semibold tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl">
                  Rohan Umbarepatil
                </h1>
                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/52 sm:text-base">
                  Preparing a cinematic showcase of work, ideas, and selected achievements.
                </p>
              </div>

              <div className="relative mt-12 rounded-[30px] border border-white/10 bg-[#0b0b0b] px-6 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_80px_rgba(0,0,0,0.72)] sm:px-8">
                <div className="absolute inset-0 rounded-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,transparent_40%,rgba(255,255,255,0.02)_100%)]" />
                <div className="relative flex items-center justify-between text-[10px] uppercase tracking-[0.34em] text-white/42">
                  <span>Initializing</span>
                  <span className="text-white/72">{percent}%</span>
                </div>

                <div className="relative mt-4 h-[7px] overflow-hidden rounded-full bg-white/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.04),inset_0_-1px_1px_rgba(0,0,0,0.45)]">
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(90deg,#d9d9d9_0%,#f5f1e8_45%,#caa56a_100%)] shadow-[0_0_18px_rgba(255,255,255,0.16)]"
                    initial={{ width: '0%' }}
                    animate={{ width: `${percent}%` }}
                    transition={{ ease: 'easeOut', duration: 0.2 }}
                  >
                    <motion.span
                      aria-hidden="true"
                      animate={{ x: ['-35%', '130%'] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)] opacity-70"
                    />
                  </motion.div>
                </div>

                <div className="relative mt-6 flex items-center justify-between text-sm text-white/58">
                  <span>Crafting interface layers</span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
                    className="h-5 w-5 rounded-full border border-white/16 border-t-white/80"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}