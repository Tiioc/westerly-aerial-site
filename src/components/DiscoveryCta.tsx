import { useReveal } from '@/lib/hooks'

export function DiscoveryCta() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="bg-[var(--sand)] px-6 py-24 md:px-10 md:py-32">
      <div ref={ref} className="tile-rise mx-auto max-w-[960px] text-center">
        <h2 className="font-display text-[34px] font-medium leading-[1.08] text-[var(--ink)] md:text-[48px]">
          See what your venue looks like from up here.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-[rgba(20,32,31,0.82)]">
          The Discovery Flight is a free first shoot — a few edited hero stills and a social-ready
          clip, delivered fast, no commitment. Limited spots.
        </p>
        <a
          href="#contact"
          className="cta-tide cta-tide-pulse mt-10 inline-flex items-center rounded-sm px-8 py-4 text-[14px] font-medium uppercase tracking-[0.14em]"
        >
          Apply for a Discovery Flight
        </a>
        <p className="mt-5 text-[13px] uppercase tracking-[0.14em] text-[rgba(20,32,31,0.82)]">
          Free · No commitment · The footage is yours to keep
        </p>
      </div>
    </section>
  )
}
