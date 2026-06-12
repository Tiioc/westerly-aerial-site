import { useReveal } from '@/lib/hooks'
import { WindCurrent } from './WindCurrent'

export function Pov() {
  const wipeRef = useReveal<HTMLParagraphElement>({ threshold: 0.4 })
  const brightenRef = useReveal<HTMLSpanElement>({ threshold: 0.4 })

  return (
    <section className="relative overflow-hidden bg-[var(--deep-slate)] px-6 py-28 md:px-10 md:py-36">
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <WindCurrent variant="soft" className="h-full w-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-[960px]">
        <p
          ref={wipeRef}
          className="mask-wipe font-display text-[26px] font-medium leading-[1.25] text-[var(--fog)] sm:text-[32px] md:text-[44px]"
        >
          A course, a club, a resort isn&rsquo;t selling a tee time. It&rsquo;s selling a feeling:{' '}
          <span ref={brightenRef} className="brighten italic">
            this is where good days happen.
          </span>{' '}
          From the air, in the right light, your place tells the truth about how good it is.
        </p>
      </div>
    </section>
  )
}
