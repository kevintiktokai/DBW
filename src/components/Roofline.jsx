/**
 * The DBW roofline — the apex line from the logo, used as a section divider.
 */
export default function Roofline({ flip = false, style }) {
  return (
    <svg
      className="roofline"
      viewBox="0 0 1440 90"
      fill="none"
      preserveAspectRatio="none"
      style={{ transform: flip ? 'scaleY(-1)' : undefined, ...style }}
      aria-hidden="true"
    >
      <path d="M0 90 L560 14 L620 22 L720 8 L1440 90 Z" fill="currentColor" />
    </svg>
  )
}
