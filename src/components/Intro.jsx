import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SHOW_INTRO, markIntroShown } from '../lib/intro'

/**
 * Brand intro — the DBW roofline draws itself in, the wordmark rises,
 * then the curtain lifts. ~1.6s, once per session.
 */
export default function Intro() {
  const [show, setShow] = useState(SHOW_INTRO)

  useEffect(() => {
    if (!SHOW_INTRO) return
    markIntroShown()
    const t = setTimeout(() => setShow(false), 1650)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <div className="intro__mark">
            <svg viewBox="0 0 720 190" fill="none" className="intro__roof">
              <motion.path
                d="M28 178 L305 42 L336 58 L392 26 L692 178"
                stroke="url(#introGrad)"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.95, ease: [0.65, 0, 0.35, 1] }}
              />
              <defs>
                <linearGradient id="introGrad" x1="0" y1="190" x2="720" y2="0">
                  <stop offset="0" stopColor="#8a5596" />
                  <stop offset="1" stopColor="#c99ad6" />
                </linearGradient>
              </defs>
            </svg>
            <span className="word-mask">
              <motion.span
                className="intro__word"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                Decor Builders Warehouse
              </motion.span>
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
