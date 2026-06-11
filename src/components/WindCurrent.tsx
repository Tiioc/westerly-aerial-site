import { useReveal } from '@/lib/hooks'

/**
 * Signature wind-current motif — a single elegant westerly curve.
 * `drawOnReveal` makes the stroke draw itself when it scrolls into view
 * (used in About); otherwise it draws once on load (the hero).
 */
export function WindCurrent({
  variant = 'hero',
  className = '',
  drawOnReveal = false,
}: {
  variant?: 'hero' | 'soft' | 'about'
  className?: string
  drawOnReveal?: boolean
}) {
  const ref = useReveal<SVGSVGElement>()
  const stroke =
    variant === 'about'
      ? 'rgba(91,138,143,0.45)'
      : variant === 'soft'
        ? 'rgba(232,228,220,0.18)'
        : 'var(--sunset)'
  const strokeWidth = variant === 'about' ? 1.5 : variant === 'soft' ? 1 : 1.5

  return (
    <svg
      ref={drawOnReveal ? ref : undefined}
      viewBox="0 0 1600 200"
      preserveAspectRatio="none"
      className={`wind-svg pointer-events-none select-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M-20 142 C 180 60, 360 170, 560 110 S 940 50, 1140 130 1500 80, 1640 60"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        className={drawOnReveal ? 'wind-reveal-path' : 'wind-draw'}
      />
    </svg>
  )
}
