import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const REDUCED =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Animated number — counts up from 0 when scrolled into view.
 */
export default function CountUp({ value, suffix = '', duration = 1.4 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(REDUCED ? value : 0)

  useEffect(() => {
    if (!inView || REDUCED) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(eased * value))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
