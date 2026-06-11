import type { ReactNode } from 'react'

// =================================================================
//  Six original aerial scene illustrations + the hero dusk fallback.
//  Cohesive style: top-down / low-oblique dusk vignettes with a faint
//  topographic-contour texture, in the brand palette.
// =================================================================

export type SceneProps = { className?: string }

function TopoDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="var(--deep-slate)" />
        <stop offset="100%" stopColor="var(--tide)" />
      </linearGradient>
      <linearGradient id={`${id}-warm`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="transparent" />
        <stop offset="100%" stopColor="rgba(217,138,95,0.18)" />
      </linearGradient>
      <pattern id={`${id}-topo`} x="0" y="0" width="400" height="300" patternUnits="userSpaceOnUse">
        <path d="M-20 60 C 80 30, 180 90, 280 60 S 460 30, 540 70" fill="none" stroke="rgba(232,228,220,0.10)" strokeWidth="1" />
        <path d="M-20 110 C 100 80, 200 130, 300 100 S 460 80, 540 120" fill="none" stroke="rgba(232,228,220,0.07)" strokeWidth="1" />
        <path d="M-20 160 C 80 130, 200 180, 300 150 S 460 130, 540 170" fill="none" stroke="rgba(232,228,220,0.06)" strokeWidth="1" />
        <path d="M-20 220 C 100 190, 220 240, 320 210 S 460 190, 540 220" fill="none" stroke="rgba(232,228,220,0.05)" strokeWidth="1" />
      </pattern>
    </defs>
  )
}

function SceneBase({ id, children }: { id: string; children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className="block h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <TopoDefs id={id} />
      <rect width="400" height="300" fill={`url(#${id}-sky)`} />
      <rect width="400" height="300" fill={`url(#${id}-topo)`} />
      <rect width="400" height="300" fill={`url(#${id}-warm)`} />
      {children}
    </svg>
  )
}

export function SceneGolf({ className }: SceneProps) {
  return (
    <div className={className}>
      <SceneBase id="golf">
        <path d="M-20 250 C 60 200, 120 230, 180 180 S 280 100, 360 70" fill="none" stroke="rgba(201,184,154,0.55)" strokeWidth="34" strokeLinecap="round" />
        <path d="M-20 250 C 60 200, 120 230, 180 180 S 280 100, 360 70" fill="none" stroke="rgba(232,228,220,0.10)" strokeWidth="34" strokeLinecap="round" strokeDasharray="2 14" />
        <ellipse cx="332" cy="78" rx="34" ry="20" fill="rgba(91,138,143,0.55)" />
        <circle cx="328" cy="74" r="2" fill="var(--fog)" />
        <line x1="328" y1="74" x2="328" y2="58" stroke="var(--fog)" strokeWidth="1" />
        <path d="M328 58 L338 60 L328 64Z" fill="var(--sunset)" />
        <ellipse cx="220" cy="170" rx="14" ry="7" fill="rgba(232,228,220,0.55)" />
        <ellipse cx="160" cy="220" rx="11" ry="6" fill="rgba(232,228,220,0.45)" />
        <ellipse cx="285" cy="120" rx="9" ry="5" fill="rgba(232,228,220,0.5)" />
        {[[40, 110], [70, 90], [100, 130], [60, 60], [120, 50], [310, 200], [350, 220], [320, 250], [280, 260], [240, 250]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="6" fill="rgba(20,32,31,0.6)" />
        ))}
      </SceneBase>
    </div>
  )
}

export function ScenePickleball({ className }: SceneProps) {
  return (
    <div className={className}>
      <SceneBase id="court">
        <rect x="60" y="60" width="280" height="180" rx="2" fill="rgba(20,32,31,0.4)" />
        {[80, 220].map((cx, i) => (
          <g key={i}>
            <rect x={cx} y="80" width="100" height="140" fill="rgba(91,138,143,0.35)" stroke="rgba(232,228,220,0.85)" strokeWidth="1.5" />
            <line x1={cx} y1="130" x2={cx + 100} y2="130" stroke="rgba(232,228,220,0.75)" strokeWidth="1" />
            <line x1={cx} y1="170" x2={cx + 100} y2="170" stroke="rgba(232,228,220,0.75)" strokeWidth="1" />
            <line x1={cx + 50} y1="80" x2={cx + 50} y2="130" stroke="rgba(232,228,220,0.55)" strokeWidth="1" />
            <line x1={cx + 50} y1="170" x2={cx + 50} y2="220" stroke="rgba(232,228,220,0.55)" strokeWidth="1" />
            <line x1={cx} y1="150" x2={cx + 100} y2="150" stroke="var(--sunset)" strokeWidth="2" />
          </g>
        ))}
        {[[40, 40], [20, 80], [40, 260], [360, 270], [380, 200], [370, 60]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="7" fill="rgba(20,32,31,0.55)" />
        ))}
      </SceneBase>
    </div>
  )
}

export function SceneResort({ className }: SceneProps) {
  return (
    <div className={className}>
      <SceneBase id="resort">
        <path d="M70 130 L70 220 L210 220 L210 200 L260 200 L260 230 L330 230 L330 130 Z" fill="rgba(20,32,31,0.65)" />
        <path d="M70 130 L70 220 L210 220 L210 200 L260 200 L260 230 L330 230 L330 130 Z" fill="none" stroke="rgba(232,228,220,0.18)" strokeWidth="1" />
        <line x1="90" y1="130" x2="90" y2="220" stroke="rgba(232,228,220,0.08)" strokeWidth="1" />
        <line x1="160" y1="130" x2="160" y2="220" stroke="rgba(232,228,220,0.08)" strokeWidth="1" />
        <line x1="290" y1="130" x2="290" y2="230" stroke="rgba(232,228,220,0.08)" strokeWidth="1" />
        <rect x="100" y="245" width="120" height="30" rx="3" fill="rgba(91,138,143,0.75)" />
        <line x1="100" y1="260" x2="220" y2="260" stroke="rgba(232,228,220,0.35)" strokeWidth="0.5" />
        <rect x="90" y="240" width="140" height="40" fill="none" stroke="rgba(201,184,154,0.5)" strokeWidth="1" />
        <path d="M30 280 Q 150 220, 250 230 T 380 200" fill="none" stroke="rgba(201,184,154,0.35)" strokeWidth="2" />
        {[[95, 160], [145, 160], [195, 160], [245, 180], [295, 160], [315, 180]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.5" fill="var(--sunset)" />
        ))}
        {[[40, 100], [60, 80], [360, 70], [350, 110], [40, 180], [380, 260], [270, 90]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="8" fill="rgba(20,32,31,0.7)" />
        ))}
      </SceneBase>
    </div>
  )
}

export function SceneShoreline({ className }: SceneProps) {
  return (
    <div className={className}>
      <SceneBase id="shore">
        <path d="M0 0 L 400 0 L 400 110 C 320 130, 240 100, 180 140 S 60 200, 0 180 Z" fill="rgba(91,138,143,0.55)" />
        <path d="M0 60 C 100 50, 200 70, 320 50 S 400 70, 400 70" fill="none" stroke="rgba(232,228,220,0.15)" strokeWidth="1" />
        <path d="M0 90 C 100 80, 200 100, 320 80 S 400 100, 400 100" fill="none" stroke="rgba(232,228,220,0.12)" strokeWidth="1" />
        <path d="M0 180 C 60 200, 120 170, 180 140 S 320 110, 400 110" fill="none" stroke="var(--sunset)" strokeWidth="1.5" />
        <path d="M0 180 C 60 200, 120 170, 180 140 S 320 110, 400 110 L 400 300 L 0 300 Z" fill="rgba(201,184,154,0.45)" />
        <rect x="140" y="148" width="14" height="60" fill="rgba(20,32,31,0.7)" transform="rotate(-12 147 178)" />
        <circle cx="330" cy="55" r="14" fill="var(--sunset)" opacity="0.7" />
        <circle cx="330" cy="55" r="22" fill="var(--sunset)" opacity="0.2" />
        {[[60, 240], [100, 260], [200, 200], [280, 180], [340, 150], [40, 280]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="5" fill="rgba(20,32,31,0.55)" />
        ))}
      </SceneBase>
    </div>
  )
}

export function SceneEvents({ className }: SceneProps) {
  return (
    <div className={className}>
      <SceneBase id="events">
        <rect x="0" y="0" width="400" height="300" fill="rgba(91,138,143,0.18)" />
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={i} x={i * 50} y="0" width="25" height="300" fill="rgba(20,32,31,0.06)" />
        ))}
        {[
          { x: 120, y: 110, w: 60 },
          { x: 200, y: 130, w: 70 },
          { x: 290, y: 150, w: 50 },
          { x: 90, y: 200, w: 50 },
          { x: 180, y: 220, w: 60 },
        ].map((t, i) => (
          <path
            key={i}
            d={`M${t.x} ${t.y + 22} L${t.x + t.w / 2} ${t.y} L${t.x + t.w} ${t.y + 22} L${t.x + t.w * 0.85} ${t.y + 32} L${t.x + t.w * 0.15} ${t.y + 32} Z`}
            fill="rgba(232,228,220,0.85)"
            stroke="rgba(20,32,31,0.4)"
            strokeWidth="0.5"
          />
        ))}
        {Array.from({ length: 70 }).map((_, i) => {
          const x = 40 + ((i * 47) % 320) + ((i * 13) % 11)
          const y = 80 + ((i * 31) % 200) + ((i * 7) % 9)
          return <circle key={i} cx={x} cy={y} r="1.6" fill="rgba(20,32,31,0.65)" />
        })}
        <path d="M40 70 Q 200 30, 360 70" fill="none" stroke="var(--sunset)" strokeWidth="0.8" strokeDasharray="2 6" />
      </SceneBase>
    </div>
  )
}

export function SceneRealEstate({ className }: SceneProps) {
  return (
    <div className={className}>
      <SceneBase id="land">
        <path d="M50 80 L 350 60 L 370 230 L 60 260 Z" fill="rgba(201,184,154,0.22)" stroke="var(--sunset)" strokeWidth="1.5" strokeDasharray="6 4" />
        <line x1="200" y1="70" x2="210" y2="245" stroke="rgba(232,228,220,0.35)" strokeWidth="1" strokeDasharray="3 4" />
        <line x1="55" y1="170" x2="365" y2="145" stroke="rgba(232,228,220,0.3)" strokeWidth="1" strokeDasharray="3 4" />
        <rect x="240" y="170" width="44" height="28" fill="rgba(20,32,31,0.75)" />
        <path d="M240 170 L262 156 L284 170 Z" fill="rgba(217,138,95,0.85)" />
        <path d="M262 198 Q 290 220, 360 230" fill="none" stroke="rgba(201,184,154,0.55)" strokeWidth="3" />
        {[[90, 110], [120, 130], [150, 100], [85, 200], [130, 220], [310, 90], [340, 110], [330, 200], [180, 240], [220, 100]].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="9" fill="rgba(20,32,31,0.7)" />
            <circle cx={x - 2} cy={y - 2} r="3" fill="rgba(91,138,143,0.35)" />
          </g>
        ))}
        <g transform="translate(80,260)">
          <circle r="10" fill="none" stroke="rgba(232,228,220,0.5)" strokeWidth="0.6" />
          <path d="M0 -8 L 2 0 L 0 8 L -2 0 Z" fill="var(--fog)" />
          <text y="-12" textAnchor="middle" fontSize="6" fill="var(--fog)" fontFamily="DM Sans">
            N
          </text>
        </g>
      </SceneBase>
    </div>
  )
}

/** Hero fallback (dusk gradient + warm horizon glow) shown until real media is added. */
export function HeroFallback() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 88% 78%, rgba(217,138,95,0.55) 0%, rgba(217,138,95,0.18) 28%, transparent 60%), linear-gradient(180deg, #0f1c25 0%, var(--deep-slate) 40%, #233844 100%)',
        }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-50" aria-hidden="true">
        {[[6, 14], [14, 8], [20, 22], [28, 12], [36, 18], [42, 10], [48, 24], [10, 32], [22, 36], [34, 32], [40, 40], [12, 46], [28, 48], [38, 50]].map(([x, y], i) => (
          <circle key={i} cx={`${x}%`} cy={`${y}%`} r={i % 3 === 0 ? 1.4 : 0.9} fill="var(--fog)" opacity={0.55} />
        ))}
      </svg>
      <svg viewBox="0 0 1600 200" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-[28%] w-full opacity-90" aria-hidden="true">
        <path d="M0 200 L0 130 C 200 110, 380 150, 520 122 S 820 90, 980 110 1280 88, 1600 102 L 1600 200 Z" fill="#0c1820" />
      </svg>
    </div>
  )
}

// ===== TO ADD A REAL PHOTO/VIDEO TO A "WHAT WE CAPTURE" TILE =====
// Fill in `src` for the category you want. Add `type: 'video'` + `poster`
// for clips. Leave `src` out and the tile keeps its illustration.
// Mixing real + illustrated tiles is intentional. `src` can be a hosted
// URL ('https://…/golf.jpg') or a base64 data URI.
export type Scene = {
  id: string
  label: string
  /** Used as the alt text once a real photo/video replaces the illustration. */
  alt: string
  Scene: (p: SceneProps) => ReactNode
  src?: string
  type?: 'image' | 'video'
  poster?: string
}

export const SCENES: Scene[] = [
  { id: 'capture-golf', label: 'Golf Courses', alt: 'Aerial photography of a golf course fairway in the Treasure Valley, Idaho', Scene: SceneGolf /*, src: 'https://…/golf.jpg' */ },
  { id: 'capture-pickleball', label: 'Racquet & Pickleball', alt: 'Aerial view of pickleball and racquet courts at a Boise-area club', Scene: ScenePickleball /*, src: '' */ },
  { id: 'capture-resorts', label: 'Resorts & Lodges', alt: 'Drone photography of an Idaho resort and lodge at dusk', Scene: SceneResort /*, src: '' */ },
  { id: 'capture-shoreline', label: 'Lakes & Shoreline', alt: 'Aerial video still of an Idaho lake and shoreline at golden hour', Scene: SceneShoreline /*, src: '' */ },
  { id: 'capture-events', label: 'Events & Tournaments', alt: 'Aerial coverage of a tournament and event venue in the Treasure Valley', Scene: SceneEvents /*, src: '' */ },
  { id: 'capture-realestate', label: 'Real Estate & Land', alt: 'Real estate aerial photography of a property parcel near Boise, Idaho', Scene: SceneRealEstate /*, src: '' */ },
]
