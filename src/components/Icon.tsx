import type { JSX } from 'react'

type IconName =
  | 'banknote'
  | 'user'
  | 'no'
  | 'book'
  | 'receipt'
  | 'coins'
  | 'globe'
  | 'shield'
  | 'pound'
  | 'bank'
  | 'chart-up'
  | 'chart-bar'
  | 'scale'
  | 'clock'
  | 'lightbulb'
  | 'warning'
  | 'chat'
  | 'calculator'
  | 'eye'
  | 'steps'
  | 'check'
  | 'chart-down'
  | 'target'
  | 'refresh'
  | 'briefcase'
  | 'dice'
  | 'cap'
  | 'card'
  | 'clipboard'
  | 'users'

const paths: Record<IconName, JSX.Element> = {
  banknote: (
    <>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.6" />
      <path d="M5.5 9.5h.01M18.5 14.5h.01" strokeLinecap="round" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c1.6-3.4 4.1-5 7-5s5.4 1.6 7 5" strokeLinecap="round" />
    </>
  ),
  no: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M5.8 5.8l12.4 12.4" strokeLinecap="round" />
    </>
  ),
  book: (
    <path
      d="M12 6.5C10.6 5 8.6 4.2 6.5 4.2c-1 0-1.9.14-2.7.4v14.6c.8-.26 1.7-.4 2.7-.4 2.1 0 4.1.8 5.5 2.3 1.4-1.5 3.4-2.3 5.5-2.3 1 0 1.9.14 2.7.4V4.6c-.8-.26-1.7-.4-2.7-.4-2.1 0-4.1.8-5.5 2.3zm0 0v14.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  receipt: (
    <>
      <path d="M6 3h12v18l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5L6 21z" strokeLinejoin="round" />
      <path d="M9.5 8.5h5M9.5 12.5h5" strokeLinecap="round" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="12" cy="7" rx="7" ry="3" />
      <path d="M5 7v5c0 1.66 3.13 3 7 3s7-1.34 7-3V7" />
      <path d="M5 12v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18" />
    </>
  ),
  shield: (
    <path
      d="M12 3l7.5 2.8v5.4c0 4.6-3.1 8.3-7.5 9.8-4.4-1.5-7.5-5.2-7.5-9.8V5.8L12 3z"
      strokeLinejoin="round"
    />
  ),
  pound: (
    <text x="12" y="17" textAnchor="middle" fontSize="15" fontWeight="700" fill="currentColor" stroke="none">
      £
    </text>
  ),
  bank: (
    <>
      <path d="M3 9.5L12 4l9 5.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 9.5V17M10 9.5V17M14 9.5V17M18.5 9.5V17" strokeLinecap="round" />
      <path d="M3.5 20.5h17M4.5 17h15" strokeLinecap="round" />
    </>
  ),
  'chart-up': (
    <>
      <path d="M4 4v16h16" strokeLinecap="round" />
      <path d="M7.5 14.5l3.5-3.5 2.5 2.5 5-5.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.5 8h3v3" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'chart-bar': (
    <>
      <path d="M4 20h16" strokeLinecap="round" />
      <path d="M7.5 20v-6M12.5 20V6M17.5 20v-9" strokeLinecap="round" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16M8 20h8M12 4L5.5 6.5M12 4l6.5 2.5" strokeLinecap="round" />
      <path d="M3 12.5L5.5 6.5 8 12.5c0 1.4-1.1 2.5-2.5 2.5S3 13.9 3 12.5zM16 12.5l2.5-6 2.5 6c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5z" strokeLinejoin="round" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" strokeLinecap="round" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M9.5 18h5M10.5 21h3" strokeLinecap="round" />
      <path d="M12 3a6 6 0 00-3.4 10.9c.7.5 1.1 1.2 1.3 2.1h4.2c.2-.9.6-1.6 1.3-2.1A6 6 0 0012 3z" strokeLinejoin="round" />
    </>
  ),
  warning: (
    <>
      <path d="M12 4L2.8 19.5h18.4L12 4z" strokeLinejoin="round" />
      <path d="M12 10v4" strokeLinecap="round" />
      <path d="M12 17h.01" strokeLinecap="round" strokeWidth="2.4" />
    </>
  ),
  chat: (
    <path d="M4 5.5h16v10.5H9.5L4 20z" strokeLinejoin="round" />
  ),
  calculator: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <path d="M9 7h6" strokeLinecap="round" />
      <path d="M9 12h.01M12 12h.01M15 12h.01M9 15.5h.01M12 15.5h.01M15 15.5h.01" strokeLinecap="round" strokeWidth="2.4" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2.8" />
    </>
  ),
  'chart-down': (
    <>
      <path d="M4 4v16h16" strokeLinecap="round" />
      <path d="M7.5 9.5l3.5 3.5 2.5-2.5 5 5.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.5 16h3v-3" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  refresh: (
    <>
      <path d="M19.7 12a7.7 7.7 0 11-2.3-5.5" strokeLinecap="round" />
      <path d="M20 3.8v3.4h-3.4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3.5" y="8" width="17" height="12" rx="2" />
      <path d="M9 8V6a2 2 0 012-2h2a2 2 0 012 2v2M3.5 13.5h17" strokeLinecap="round" />
    </>
  ),
  dice: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8.5 8.5h.01M15.5 8.5h.01M12 12h.01M8.5 15.5h.01M15.5 15.5h.01" strokeLinecap="round" strokeWidth="2.6" />
    </>
  ),
  cap: (
    <>
      <path d="M12 5L2.5 9.5 12 14l9.5-4.5L12 5z" strokeLinejoin="round" />
      <path d="M6.5 11.5V16c0 1.2 2.5 2.5 5.5 2.5s5.5-1.3 5.5-2.5v-4.5M21 10v5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18M6.5 15h4" strokeLinecap="round" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="5" width="14" height="17" rx="2" />
      <path d="M9 5V3.5h6V5M9 11h6M9 15h6" strokeLinecap="round" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19.5c1.2-3 3.2-4.5 5.5-4.5s4.3 1.5 5.5 4.5" strokeLinecap="round" />
      <circle cx="16.5" cy="9.5" r="2.4" />
      <path d="M16 15.2c2 .3 3.7 1.7 4.5 4.3" strokeLinecap="round" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.7 2.7L16.5 9" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  steps: (
    <>
      <path d="M9 6h11M9 12h11M9 18h11" strokeLinecap="round" />
      <path d="M4 5.5h1.5v3M4 8.5h1.5M4 11.5h1.2L4 14.5h1.5M4 17.5c.5-.5 1.5-.5 1.5.5 0 1-1.5 1-1.5 2h1.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
}

export default function Icon({ name, className = 'h-9 w-9 text-emerald-600' }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
