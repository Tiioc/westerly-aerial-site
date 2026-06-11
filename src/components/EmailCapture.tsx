import { useState, type FormEvent } from 'react'
import { useReveal } from '@/lib/hooks'
import { submitForm } from '@/lib/forms'

/** Low-friction secondary conversion for visitors who aren't ready to book yet. */
export function EmailCapture() {
  const ref = useReveal<HTMLDivElement>({ threshold: 0.3 })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('submitting')
    const result = await submitForm(form)
    setStatus(result)
    if (result === 'success') form.reset()
  }

  return (
    <section className="bg-[var(--deep-slate)] px-6 pb-24 md:px-10 md:pb-28">
      <div
        ref={ref}
        className="tile-rise mx-auto flex max-w-[1280px] flex-col gap-6 border-t border-[rgba(201,184,154,0.3)] pt-14 md:flex-row md:items-center md:justify-between"
      >
        <div className="max-w-md">
          <h2 className="font-display text-[24px] font-medium leading-tight text-[var(--fog)] md:text-[28px]">
            Not ready to book yet?
          </h2>
          <p className="mt-2 text-[15.5px] leading-relaxed text-[rgba(232,228,220,0.78)]">
            Leave your email and I&rsquo;ll send new aerial work and seasonal openings as Westerly
            takes flight. No spam, easy to leave.
          </p>
        </div>
        {status === 'success' ? (
          <p className="text-[15.5px] font-medium text-[var(--sunset)] md:w-[360px]">
            You&rsquo;re on the list — talk soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            {/* Tags the submission so list signups are distinct from booking enquiries in Formspree */}
            <input type="hidden" name="_intent" value="email-list" />
            <label htmlFor="capture-email" className="sr-only">Email address</label>
            <input
              id="capture-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@yourvenue.com"
              className="w-full rounded-sm border border-[rgba(201,184,154,0.4)] bg-[rgba(232,228,220,0.06)] p-3 text-[16px] text-[var(--fog)] placeholder:text-[rgba(232,228,220,0.5)] outline-none transition focus:border-[var(--tide)] focus:ring-2 focus:ring-[rgba(91,138,143,0.4)]"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="cta-tide shrink-0 rounded-sm px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] disabled:opacity-70"
            >
              {status === 'submitting' ? 'Joining…' : 'Join the list'}
            </button>
          </form>
        )}
      </div>
      {status === 'error' && (
        <p role="alert" className="mx-auto mt-3 max-w-[1280px] text-[14px] text-[#e0a08a]">
          Couldn&rsquo;t add you just now — please try again in a moment.
        </p>
      )}
    </section>
  )
}
