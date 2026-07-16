/**
 * Line icons used as branded placeholders for categories whose
 * product photography is still being shot (blinds, electricals, hardware).
 */
const ICONS = {
  Blinds: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <line x1="4" y1="7.5" x2="20" y2="7.5" />
      <line x1="4" y1="11" x2="20" y2="11" />
      <line x1="4" y1="14.5" x2="20" y2="14.5" />
      <line x1="12" y1="21" x2="12" y2="23" />
    </>
  ),
  Electricals: (
    <>
      <path d="M13 2 L4 14 h7 l-1 8 9-12 h-7 z" />
    </>
  ),
  'General Hardware': (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z" />
    </>
  ),
  default: (
    <>
      <path d="M12 3 L3 9 v12 h18 V9 z" />
    </>
  ),
}

export default function CategoryIcon({ category, size = 46 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[category] || ICONS.default}
    </svg>
  )
}
