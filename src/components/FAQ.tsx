import { useReveal } from '@/lib/hooks'
import { FAQS } from '@/lib/content'

export function FAQ() {
  const headRef = useReveal<HTMLDivElement>()
  return (
    <section id="faq" className="scroll-mt-24 bg-[var(--fog)] px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[920px]">
        <div ref={headRef} className="tile-rise">
          <span className="eyebrow text-[var(--tide-text)]">FAQ</span>
          <h2 className="font-display mt-4 text-[40px] font-medium leading-[1.05] text-[var(--ink)] md:text-[52px]">
            Questions, answered.
          </h2>
        </div>
        <div className="mt-12 divide-y divide-[var(--sand)] border-y border-[var(--sand)]">
          {FAQS.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <span className="font-display text-[20px] font-medium leading-tight text-[var(--ink)] md:text-[23px]">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--sand)] text-[var(--tide-text)] transition-transform duration-300 group-open:rotate-45"
                >
                  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                    <path d="M8 3 V13 M3 8 H13" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 max-w-[700px] text-[16px] leading-relaxed text-[rgba(20,32,31,0.82)]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
        <p className="mt-12 text-[15px] text-[rgba(20,32,31,0.82)]">
          Still wondering something?{' '}
          <a
            href="#contact"
            className="font-medium text-[var(--tide-text)] underline decoration-[var(--tide-text)] decoration-1 underline-offset-[5px] transition-colors hover:text-[#9c5530] hover:decoration-[#9c5530]"
          >
            Ask in the form
          </a>
          .
        </p>
      </div>
    </section>
  )
}
