import { usePrefersReducedMotion, useScrollY } from '@/lib/hooks'
import { TRUST_LINE } from '@/lib/content'
import { MediaSlot } from './MediaSlot'
import { WindCurrent } from './WindCurrent'
import { HeroFallback } from './scenes'

export function Hero() {
  const reduced = usePrefersReducedMotion()
  const scrollY = useScrollY()

  // Parallax depths (disabled when the user prefers reduced motion)
  const bgShift = reduced ? 0 : Math.min(scrollY * 0.4, 240)
  const textShift = reduced ? 0 : Math.min(scrollY * 0.6, 220)
  const textOpacity = reduced ? 1 : Math.max(0, 1 - scrollY / 700)
  const windShift = reduced ? 0 : Math.min(scrollY * 0.25, 160)

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{ background: 'var(--deep-slate)' }}
    >
      {/* MediaSlot id="hero" — full-bleed background (video > image > illustrated dusk) */}
      <div
        className="absolute inset-0"
        style={{ transform: `translate3d(0, ${bgShift}px, 0)`, willChange: 'transform' }}
      >
        <MediaSlot
          id="hero"
          src="/hero-reel.mp4"
          type="video"
          alt="Aerial flyover of an Idaho lake"
          fallback={<HeroFallback />}
          overlay
          priority
          aspect="16 / 9"
          className="h-[120%] min-h-screen"
        />
      </div>

      {/* Cinematic vignette */}
      <div className="hero-vignette" />

      {/* Wind current signature — drifts gently, also parallaxes slightly */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[18%] z-10 h-[200px]"
        style={{ transform: `translate3d(0, ${-windShift}px, 0)` }}
      >
        <div className="wind-ambient h-full w-full">
          <WindCurrent variant="hero" className="h-full w-full" />
        </div>
      </div>

      {/* Headline */}
      <div className="relative z-20 mx-auto mt-auto w-full max-w-[1280px] px-6 pb-28 pt-40 md:px-10 md:pb-36">
        <div
          style={{
            transform: `translate3d(0, ${-textShift * 0.25}px, 0)`,
            opacity: textOpacity,
            willChange: 'transform, opacity',
          }}
        >
          <h1 className="font-display font-medium leading-[0.98] tracking-tight text-[var(--fog)]">
            <span className="block" style={{ fontSize: 'clamp(48px, 9vw, 110px)' }}>
              Aerial storytelling
            </span>
            <span className="block italic" style={{ fontSize: 'clamp(48px, 9vw, 110px)', color: 'var(--sunset)' }}>
              for the places you love.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-[var(--fog)]">
            Aerial marketing photography and video for the Treasure Valley&rsquo;s golf courses,
            clubs, resorts, and event venues.
          </p>
          <div className="mt-9 flex flex-col items-start gap-4">
            <a
              href="#contact"
              className="cta-tide cta-tide-pulse inline-flex items-center rounded-sm px-7 py-3.5 text-[14px] font-medium uppercase tracking-[0.14em]"
            >
              Apply for a Discovery Flight
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-1.5 text-[13px] font-medium uppercase tracking-[0.14em] text-[rgba(232,228,220,0.78)] underline decoration-[rgba(232,228,220,0.3)] decoration-1 underline-offset-[6px] transition-colors hover:text-[var(--sunset)] hover:decoration-[var(--sunset)]"
            >
              See the work
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
          <p className="mt-7 max-w-xl text-[13px] leading-relaxed text-[rgba(232,228,220,0.78)]">
            {TRUST_LINE}
          </p>
        </div>
      </div>
    </section>
  )
}
