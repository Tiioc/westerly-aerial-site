// Westerly Aerial Co. — brand logo
// Mark: a "W" formed from three converging flight paths, inside a compass/lens
// ring, with a sunset wind-current arc ("Westerly" = the west wind) above it.
// Colors come from CSS vars so the mark stays on-palette site-wide.

export function LogoMark({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
      {/* compass / lens ring */}
      <circle cx="50" cy="50" r="45" stroke="var(--tide)" strokeWidth="1.6" opacity="0.55" />
      {/* west-wind current */}
      <path d="M20 30 C 38 19 62 19 80 30" stroke="var(--sunset)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="50" cy="23" r="3.4" fill="var(--sunset)" />
      {/* W — three converging flight paths */}
      <path
        d="M22 40 L36 70 L50 48 L64 70 L78 40"
        stroke="var(--fog)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Full horizontal lockup (Direction C): mark + wide-tracked uppercase wordmark.
// Inherits DM Sans (the body font). Designed for dark surfaces (nav, footer).
export function LogoFull({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-7 w-7 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="text-[13px] font-medium uppercase tracking-[0.22em] text-[var(--fog)]">
          Westerly
        </span>
        <span className="mt-[3px] text-[9px] font-medium uppercase tracking-[0.34em] text-[var(--sunset)]">
          Aerial Co.
        </span>
      </span>
    </span>
  )
}
