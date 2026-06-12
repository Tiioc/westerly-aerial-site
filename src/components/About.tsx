import { useReveal } from '@/lib/hooks'
import {
  ABOUT_BRAND_FRAME,
  FOUNDER_NOTE,
  ABOUT_LICENSING_LINE,
  TRUST_BADGES,
} from '@/lib/content'
import { MediaSlot } from './MediaSlot'

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

/** Portrait placeholder shown until a real founder photo is dropped into the slot.
 *  Cohesive with the gallery scenes — dusk vignette + a simple figure-on-location. */
function FounderPortraitFallback() {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="founder-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--deep-slate)" />
          <stop offset="62%" stopColor="var(--tide)" />
          <stop offset="100%" stopColor="#c2693a" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#founder-sky)" />
      {/* low sun */}
      <circle cx="288" cy="330" r="40" fill="var(--sunset)" opacity="0.92" />
      <circle cx="288" cy="330" r="64" fill="var(--sunset)" opacity="0.18" />
      {/* layered foothills */}
      <path d="M0 360 C 70 338, 150 372, 230 352 S 360 326, 400 344 L400 500 L0 500 Z" fill="var(--deep-slate)" opacity="0.5" />
      <path d="M0 400 C 80 384, 170 410, 250 396 S 360 378, 400 392 L400 500 L0 500 Z" fill="var(--deep-slate)" opacity="0.85" />
      {/* figure on location, drone up */}
      <g fill="#0c1820">
        <circle cx="150" cy="300" r="20" />
        <path d="M120 500 C 120 410, 124 360, 150 340 C 176 360, 180 410, 180 500 Z" />
        {/* raised arm toward the drone */}
        <path d="M168 348 L226 312 L232 322 L176 362 Z" />
      </g>
      {/* small drone */}
      <g stroke="#0c1820" strokeWidth="3" strokeLinecap="round">
        <line x1="226" y1="300" x2="252" y2="300" />
        <line x1="230" y1="296" x2="230" y2="290" />
        <line x1="248" y1="296" x2="248" y2="290" />
      </g>
      <rect x="234" y="298" width="10" height="6" rx="1" fill="#0c1820" />
      {/* faint contour */}
      <path d="M0 250 C 100 232, 200 268, 320 244 S 400 256, 400 256" fill="none" stroke="rgba(232,228,220,0.08)" strokeWidth="1" />
    </svg>
  )
}

export function About() {
  const headRef = useReveal<HTMLDivElement>()
  const noteRef = useReveal<HTMLDivElement>({ threshold: 0.2 })
  const photoRef = useReveal<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section id="about" className="scroll-mt-24 bg-[var(--deep-slate)] px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1280px] items-start gap-14 md:grid-cols-[1.15fr,1fr]">
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
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[rgba(232,228,220,0.7)]">
              {ABOUT_BRAND_FRAME}
            </p>
          </div>

          {/* Founder note — first person, the trust block */}
          <div ref={noteRef} className="tile-rise mt-8 max-w-xl space-y-4">
            {FOUNDER_NOTE.map((para, i) => (
              <p
                key={i}
                className={`leading-[1.7] text-[rgba(232,228,220,0.88)] ${
                  i === 0 ? 'font-display text-[20px] text-[var(--fog)] md:text-[22px]' : 'text-[17px]'
                }`}
              >
                {para}
              </p>
            ))}
            <p className="font-display pt-1 text-[18px] italic text-[var(--sunset)]">Tyler</p>
          </div>

          <p className="mt-8 max-w-xl border-l-2 border-[var(--sunset)] pl-4 text-[15px] leading-relaxed text-[rgba(232,228,220,0.78)]">
            {ABOUT_LICENSING_LINE}
          </p>

          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
            {TRUST_BADGES.map((b, i) => (
              <TrustBadge key={b} label={b} delay={i * 140} />
            ))}
          </div>
        </div>

        {/* Founder photo — MediaSlot placeholder.
            TO ADD THE REAL PHOTO: pass src to this slot (portrait, golden hour,
            Tyler on location with the drone). Layout won't shift. */}
        <div ref={photoRef} className="tile-rise md:sticky md:top-28">
          <div className="founder-frame overflow-hidden rounded-sm">
            <MediaSlot
              id="founder"
              src="/tyler-yosemite-armscrossed.jpeg"
              type="image"
              alt="Tyler Bunn, founder of Westerly Aerial Co."
              aspect="3 / 4"
              fallback={<FounderPortraitFallback />}
              className="bg-[var(--deep-slate)]"
            />
          </div>
          <p className="mt-3 text-[13px] uppercase tracking-[0.14em] text-[rgba(232,228,220,0.7)]">
            Tyler Bunn · Founder · Garden City, ID
          </p>
        </div>
      </div>
    </section>
  )
}
