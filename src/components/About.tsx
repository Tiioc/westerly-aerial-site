import type { ReactNode } from 'react'
import { useReveal } from '@/lib/hooks'
import { ABOUT_LINES, TRUST_BADGES } from '@/lib/content'
import { WindCurrent } from './WindCurrent'

function AboutLine({ children, delay }: { children: ReactNode; delay: number }) {
  const ref = useReveal<HTMLParagraphElement>({ threshold: 0.35 })
  return (
    <p ref={ref} className="line-clip text-[17px] leading-[1.7] text-[rgba(232,228,220,0.88)]" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </p>
  )
}

function TrustBadge({ label, delay }: { label: string; delay: number }) {
  const svgRef = useReveal<SVGSVGElement>({ threshold: 0.5 })
  return (
    <div className="flex items-center gap-2 text-[13px] uppercase tracking-[0.14em] text-[rgba(232,228,220,0.88)]">
      <svg ref={svgRef} viewBox="0 0 24 24" className="check-draw h-5 w-5" style={{ transitionDelay: `${delay}ms` }} aria-hidden="true">
        <path d="M5 12.5 L10 17.5 L19 7" fill="none" stroke="var(--sunset)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </div>
  )
}

export function About() {
  const decorRef = useReveal<HTMLDivElement>({ threshold: 0.2 })
  const headRef = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="scroll-mt-24 bg-[var(--deep-slate)] px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 md:grid-cols-[1.1fr,1fr]">
        <div>
          <div ref={headRef} className="tile-rise">
            <span className="eyebrow text-[var(--sunset)]">About</span>
            <h2 className="font-display mt-4 text-[40px] font-medium leading-[1.05] text-[var(--fog)] md:text-[52px]">
              A studio
              <br />
              <span className="italic" style={{ color: 'var(--sunset)' }}>
                built for this.
              </span>
            </h2>
          </div>
          <div className="mt-9 max-w-xl space-y-5">
            {ABOUT_LINES.map((line, i) => (
              <AboutLine key={i} delay={i * 140}>
                {line}
              </AboutLine>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4">
            {TRUST_BADGES.map((b, i) => (
              <TrustBadge key={b} label={b} delay={i * 140} />
            ))}
          </div>
        </div>

        <div ref={decorRef} className="relative h-[360px] md:h-[460px]">
          <div className="absolute inset-0">
            <WindCurrent variant="about" drawOnReveal className="h-full w-full" />
          </div>
          <div className="absolute inset-x-0 bottom-1/3 h-px bg-gradient-to-r from-transparent via-[rgba(91,138,143,0.4)] to-transparent" />
          <div className="absolute bottom-1/3 right-6 h-3 w-3 -translate-y-1/2 rounded-full bg-[var(--sunset)] opacity-70" />
        </div>
      </div>
    </section>
  )
}
