// The brand intro plays once per browser session, and never for
// reduced-motion users. Hero entrance animations wait for it via INTRO_DELAY.

const KEY = 'dbw-intro-shown'

export const SHOW_INTRO =
  typeof window !== 'undefined' &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
  !sessionStorage.getItem(KEY)

export const INTRO_DELAY = SHOW_INTRO ? 1.3 : 0

export const markIntroShown = () => {
  try {
    sessionStorage.setItem(KEY, '1')
  } catch {
    /* private mode — intro will simply replay */
  }
}
