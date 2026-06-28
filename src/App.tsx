import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AppRoutes } from '@/routes/AppRoutes'
import { LOADER_DURATION_MS, LoadingScreen } from '@/components/layout/LoadingScreen'

export function App() {
  const [loading, setLoading] = useState(true)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false)
    }, LOADER_DURATION_MS)

    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <>
      <LoadingScreen active={loading} />
      <motion.div
        initial={{ opacity: 0, filter: 'blur(8px)' }}
        animate={loading ? { opacity: 0, filter: 'blur(8px)' } : { opacity: 1, filter: 'blur(0px)' }}
        onAnimationComplete={() => {
          if (!loading) {
            setAnimationComplete(true)
          }
        }}
        style={animationComplete ? { filter: 'none' } : undefined}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <AppRoutes />
      </motion.div>
    </>
  )
}
