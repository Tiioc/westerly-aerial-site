import { useReveal } from '@/lib/hooks'
import { MediaSlot } from './MediaSlot'
import { SCENES, type SceneProps } from './scenes'
import type { ReactNode } from 'react'

function CaptureTile({
  id,
  label,
  alt,
  Scene,
  index,
  src,
  type,
  poster,
}: {
  id: string
  label: string
  alt: string
  Scene: (p: SceneProps) => ReactNode
  index: number
  src?: string
  type?: 'image' | 'video'
  poster?: string
}) {
  const ref = useReveal<HTMLDivElement>({ threshold: 0.18 })
  const col = index % 3
  const row = Math.floor(index / 3)
  const delay = (col + row) * 120 // diagonal stagger: top-left first → bottom-right last

  return (
    <div ref={ref} className="tile-rise group relative" style={{ transitionDelay: `${delay}ms` }}>
      <div className="relative overflow-hidden transition-all duration-500 group-hover:-translate-y-1">
        <MediaSlot
          id={id}
          src={src}
          type={type ?? 'image'}
          poster={poster}
          alt={alt}
          aspect="4 / 3"
          fallback={<Scene className="h-full w-full" />}
          className="bg-[var(--deep-slate)]"
        />
        {/* hover edge glow */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 ring-1 ring-inset ring-[rgba(217,138,95,0.6)]" />
          <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(217,138,95,0.25)]" />
        </div>
        {/* dark scrim under the label */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[rgba(27,42,51,0.85)] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <p className="font-display text-[19px] font-medium leading-tight text-[var(--fog)] md:text-[22px]">
            {label}
          </p>
        </div>
      </div>
    </div>
  )
}

export function WhatWeCapture() {
  const headRef = useReveal<HTMLDivElement>()
  return (
    <section id="work" className="scroll-mt-24 bg-[var(--deep-slate)] px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1280px]">
        <div ref={headRef} className="tile-rise max-w-2xl">
          <span className="eyebrow text-[var(--sunset)]">My Lens</span>
          <h2 className="font-display mt-4 text-[40px] font-medium leading-[1.05] text-[var(--fog)] md:text-[52px]">
            What I capture.
          </h2>
          <p className="mt-5 text-[rgba(232,228,220,0.78)]">
            Westerly is just taking flight in the Treasure Valley. Here&rsquo;s the work
            I&rsquo;m built for — and the light I chase. Pilot reels available on request.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {SCENES.map((s, i) => (
            <CaptureTile
              key={s.id}
              id={s.id}
              label={s.label}
              alt={s.alt}
              Scene={s.Scene}
              src={s.src}
              type={s.type}
              poster={s.poster}
              index={i}
            />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-[14px] italic leading-relaxed text-[rgba(232,228,220,0.78)]">
          These illustrate the kind of work I&rsquo;m built for. Real aerial samples are available
          on request, and this gallery fills with my own footage as I fly.
        </p>

        <div className="mt-6 text-center">
          <a
            href="#contact"
            className="font-display text-[17px] italic text-[var(--sunset)] underline decoration-[rgba(217,138,95,0.5)] decoration-1 underline-offset-[6px] transition-colors hover:text-[var(--fog)] hover:decoration-[rgba(232,228,220,0.6)]"
          >
            Apply for a Discovery Flight →
          </a>
        </div>
      </div>
    </section>
  )
}
