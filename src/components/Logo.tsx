export function LogoMark({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      {/* Outer ring — compass / lens feel */}
      <circle cx="16" cy="16" r="15" fill="none" stroke="var(--tide)" strokeWidth="1.2" opacity="0.5" />

      {/* Stylised W formed by three converging flight paths */}
      <path
        d="M7 11 L11.5 22 L16 14 L20.5 22 L25 11"
        fill="none"
        stroke="var(--fog)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Wind current — a single flowing arc across the top */}
      <path
        d="M6 8.5 C 10 6, 14 10, 18 7.5 S 24 5, 27 7"
        fill="none"
        stroke="var(--sunset)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function LogoFull({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="font-display text-[15px] font-medium tracking-[0.02em] text-[var(--fog)]">
        Westerly Aerial Co.
      </span>
    </span>
  )
}
