import { useReveal } from '@/lib/hooks'
import { SERVICES, type Service } from '@/lib/content'

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useReveal<HTMLDivElement>({ threshold: 0.2 })
  return (
    <div ref={ref} className="deal-in flex flex-col bg-[var(--fog)]" style={{ transitionDelay: `${index * 120}ms` }}>
      <div
        className="px-7 py-10 md:px-9 md:py-12"
        style={{ borderTop: service.featured ? '2px solid var(--tide)' : '2px solid transparent' }}
      >
        {service.featured && (
          <span className="eyebrow mb-5 inline-block text-[var(--tide-text)]">The specialty</span>
        )}
        <h3 className="font-display text-[24px] font-medium leading-tight text-[var(--ink)] md:text-[28px]">
          {service.title}
        </h3>
        <p className="mt-4 text-[16px] leading-relaxed text-[rgba(20,32,31,0.82)]">{service.body}</p>
        <ul className="mt-9 space-y-4 border-t border-[var(--sand)] pt-6">
          {service.packages.map((pkg) => (
            <li key={pkg.name} className="text-[15px]">
              {pkg.tag && (
                <span className="mb-1 inline-block rounded-sm bg-[rgba(217,138,95,0.15)] px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9c5530]">
                  {pkg.tag}
                </span>
              )}
              <span className="flex items-baseline justify-between gap-3">
                <span className="text-[var(--ink)]">{pkg.name}</span>
                <span className="font-display whitespace-nowrap text-[var(--tide-text)]">{pkg.price}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Services() {
  const headRef = useReveal<HTMLDivElement>()
  return (
    <section id="services" className="scroll-mt-24 bg-[var(--fog)] px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1280px]">
        <div ref={headRef} className="tile-rise max-w-2xl">
          <span className="eyebrow text-[var(--tide-text)]">Services</span>
          <h2 className="font-display mt-4 text-[40px] font-medium leading-[1.05] text-[var(--ink)] md:text-[52px]">
            Three ways to put your place on screen.
          </h2>
          <p className="mt-5 text-[rgba(20,32,31,0.82)]">
            Built around what each market actually needs — outcomes first, specs last.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-[rgba(201,184,154,0.6)] md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
