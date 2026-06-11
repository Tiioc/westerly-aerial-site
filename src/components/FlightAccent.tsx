import { useElementScrollProgress } from '@/lib/hooks'

/** A thin tide/sunset line + dot that the visitor "flies" across by scrolling. */
export function FlightAccent() {
  const [ref, p] = useElementScrollProgress<HTMLDivElement>()
  return (
    <div ref={ref} className="relative h-24 overflow-hidden bg-[var(--deep-slate)]" aria-hidden="true">
      <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[rgba(91,138,143,0.4)] to-transparent" />
      <div
        className="absolute left-0 top-1/2"
        style={{
          transform: `translate3d(calc(${p * 100}vw - 60px), -50%, 0)`,
          transition: 'transform 60ms linear',
          willChange: 'transform',
        }}
      >
        <div className="flex items-center">
          <div className="h-px w-14 bg-gradient-to-r from-transparent to-[var(--sunset)]" />
          <div className="h-1.5 w-1.5 rounded-full bg-[var(--sunset)] shadow-[0_0_18px_4px_rgba(217,138,95,0.55)]" />
        </div>
      </div>
    </div>
  )
}
