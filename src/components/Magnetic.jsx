import { useRef } from 'react'

const FINE_POINTER =
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Subtle magnetic pull — the wrapped element leans a few pixels
 * toward the cursor. Desktop pointers only.
 */
export default function Magnetic({ children, strength = 0.18 }) {
  const ref = useRef(null)

  if (!FINE_POINTER) return children

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const dx = e.clientX - (r.left + r.width / 2)
    const dy = e.clientY - (r.top + r.height / 2)
    el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0, 0)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        display: 'inline-block',
        transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
