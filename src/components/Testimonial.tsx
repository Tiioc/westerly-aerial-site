import { useReveal } from '@/lib/hooks'
import { TESTIMONIAL } from '@/lib/content'

export function Testimonial() {
  const ref = useReveal<HTMLDivElement>({ threshold: 0.25 })
  const hasQuote = TESTIMONIAL.quote.trim().length > 0

  return (
    <section className="bg-[var(--fog)] px-6 py-24 md:px-10 md:py-32">
      <div ref={ref} className="tile-rise mx-auto max-w-[920px]">
        {hasQuote ? (
          <>
            {TESTIMONIAL.venueType && (
              <p className="eyebrow text-[var(--tide-text)]">{TESTIMONIAL.venueType}</p>
            )}
            <blockquote className="mt-6">
              <span aria-hidden="true" className="font-display block text-[64px] leading-none text-[var(--sunset)] md:text-[88px]">
                &ldquo;
              </span>
              <p className="font-display -mt-6 text-[26px] font-medium leading-[1.3] text-[var(--ink)] sm:text-[30px] md:text-[38px]">
                {TESTIMONIAL.quote}
              </p>
              <footer className="mt-8 text-[14px] uppercase tracking-[0.14em] text-[var(--tide-text)]">
                — {TESTIMONIAL.attribution}
              </footer>
            </blockquote>
          </>
        ) : (
          <div className="border-l-2 border-[var(--sunset)] pl-7">
            <p className="eyebrow text-[var(--tide-text)]">First flights, first words</p>
            <p className="font-display mt-5 text-[22px] font-medium leading-[1.35] text-[var(--ink)] md:text-[28px]">
              Westerly is just taking flight. The first venues to book a Discovery Flight earn the
              first words here — and the first cinematic reel on the page.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-block text-[14px] font-medium uppercase tracking-[0.14em] text-[var(--tide-text)] underline decoration-[var(--tide-text)] decoration-1 underline-offset-[6px] transition-colors hover:text-[#9c5530] hover:decoration-[#9c5530]"
            >
              Be the first →
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
