import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function AnimatedCounter({ value }: { value: string }) {
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!countRef.current) {
      return
    }

    const raw = Number.parseInt(value.replace(/[^\d]/g, ''), 10)
    if (Number.isNaN(raw)) {
      countRef.current.textContent = value
      return
    }

    const suffix = value.replace(/[\d]/g, '')
    const state = { current: 0 }

    gsap.to(state, {
      current: raw,
      duration: 1.4,
      ease: 'power2.out',
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = `${Math.round(state.current)}${suffix}`
        }
      },
    })
  }, [value])

  return <span ref={countRef}>{value}</span>
}
