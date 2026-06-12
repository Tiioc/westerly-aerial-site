import { useReveal } from '@/lib/hooks'
import { PRICING, PRICING_FOOTER } from '@/lib/content'

export function Pricing() {
  const headRef = useReveal<HTMLDivElement>()
  return (
    <section id="pricing" className="scroll-mt-24 bg-[var(--fog)] px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1280px]">
        <div ref={headRef} className="tile-rise max-w-2xl">
          <span className="eyebrow text-[var(--tide-text)]">Pricing</span>
          <h2 className="font-display mt-4 text-[40px] font-medium leading-[1.05] text-[var(--ink)] md:text-[52px]">
            Straightforward, by the shoot or by the season.
          </h2>
        </div>

        <div className="mt-14 grid gap-px bg-[rgba(201,184,154,0.6)] md:grid-cols-3">
          {PRICING.map((group) => (
            <div key={group.category} className="bg-[var(--fog)] px-7 py-10 md:px-9 md:py-12">
              <h3 className="font-display text-[22px] font-medium text-[var(--ink)] md:text-[24px]">
                {group.category}
              </h3>
              <ul className="mt-7 space-y-4 border-t border-[var(--sand)] pt-6">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-3 text-[15px]">
                    <span className="text-[var(--ink)]">{item.name}</span>
                    <span className="font-display whitespace-nowrap text-[var(--tide-text)]">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[15px] italic leading-relaxed text-[rgba(20,32,31,0.7)]">
          {PRICING_FOOTER}
        </p>
      </div>
    </section>
  )
}
