import { useState, type FormEvent } from 'react'
import { submitForm } from '@/lib/forms'
import { CONTACT, VENUE_TYPES } from '@/lib/content'

const FIELD_LABEL = 'mb-2 block text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--ink)]'
const FIELD_INPUT =
  'w-full rounded-sm border border-[var(--sand)] bg-white p-3 text-[16px] text-[var(--ink)] placeholder:text-[rgba(20,32,31,0.55)] outline-none transition-shadow focus:border-[var(--tide)] focus:ring-2 focus:ring-[rgba(91,138,143,0.3)]'
const OPTIONAL = <span className="font-normal normal-case text-[rgba(20,32,31,0.55)]">(optional)</span>

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('submitting')
    const result = await submitForm(form)
    setStatus(result)
    if (result === 'success') form.reset()
  }

  if (status === 'success') {
    return (
      <div className="flex h-full min-h-[460px] flex-col justify-center bg-[var(--fog)] p-10 md:p-12">
        <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
          <path d="M4 12.5 L10 18 L20 7" fill="none" stroke="var(--sunset)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 className="font-display mt-5 text-[28px] font-medium leading-tight text-[var(--ink)]">
          Sent. Talk soon.
        </h3>
        <p className="mt-4 max-w-md text-[rgba(20,32,31,0.82)]">
          Thanks — I&rsquo;ll be in touch within one business day.
        </p>
      </div>
    )
  }

  return (
    <form
      name="westerly-contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-5 bg-[var(--fog)] p-8 md:p-10"
      onSubmit={handleSubmit}
    >
      {/* Netlify needs these to route submissions to the right named form. */}
      <input type="hidden" name="form-name" value="westerly-contact" />
      <p className="hidden">
        <label>Don&rsquo;t fill this out: <input name="bot-field" /></label>
      </p>
      <p className="mb-1 text-[15px] leading-relaxed text-[rgba(20,32,31,0.82)]">
        Tell me about your venue and I&rsquo;ll send a quick plan + quote, usually within one
        business day.
      </p>
      <div>
        <label htmlFor="name" className={FIELD_LABEL}>Name</label>
        <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={FIELD_INPUT} />
      </div>
      <div>
        <label htmlFor="email" className={FIELD_LABEL}>Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@yourvenue.com" className={FIELD_INPUT} />
      </div>
      <div>
        <label htmlFor="business" className={FIELD_LABEL}>Venue / Business {OPTIONAL}</label>
        <input id="business" name="business" type="text" autoComplete="organization" placeholder="Your course, club, or venue name" className={FIELD_INPUT} />
      </div>
      <div>
        <label htmlFor="venue-type" className={FIELD_LABEL}>Venue Type {OPTIONAL}</label>
        <select id="venue-type" name="venue-type" defaultValue="" className={FIELD_INPUT}>
          <option value="" disabled>Select a venue type</option>
          {VENUE_TYPES.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className={FIELD_LABEL}>Message {OPTIONAL}</label>
        <textarea id="message" name="message" rows={4} placeholder="Tell me a bit about what you're looking for" className={FIELD_INPUT} />
      </div>
      {status === 'error' && (
        <p role="alert" className="text-[14px] font-medium text-[#a23b2c]">
          Something went wrong sending that. Please try again, or email{' '}
          <a href={`mailto:${CONTACT.email}`} className="underline">{CONTACT.email}</a>.
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="cta-tide cta-tide-pulse w-full rounded-sm py-4 text-[14px] font-medium uppercase tracking-[0.14em] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'submitting' ? 'Sending…' : 'Send it'}
      </button>
    </form>
  )
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-[var(--deep-slate)] px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-2 md:gap-20">
        <div className="order-2 md:order-1">
          <ContactForm />
        </div>
        <div className="order-1 md:order-2">
          <span className="eyebrow text-[var(--sunset)]">Contact</span>
          <h2 className="font-display mt-4 text-[40px] font-medium leading-[1.05] text-[var(--fog)] md:text-[52px]">
            Apply for a Discovery
            <br />
            <span className="italic" style={{ color: 'var(--sunset)' }}>Flight.</span>
          </h2>
          <p className="mt-7 max-w-md text-[17px] leading-relaxed text-[rgba(232,228,220,0.78)]">
            Based in Garden City, in the heart of the Treasure Valley. Serving Boise, Meridian,
            Eagle, Nampa, McCall, Sun Valley, and beyond.
          </p>
          <div className="mt-10 space-y-4 text-[15.5px] text-[var(--fog)]">
            <p>
              <span className="eyebrow text-[var(--sunset)]">Email</span>
              <a href={`mailto:${CONTACT.email}`} className="ml-4 transition-colors hover:text-[var(--sunset)]">
                {CONTACT.email}
              </a>
            </p>
            <p>
              <span className="eyebrow text-[var(--sunset)]">Phone</span>
              <a href={CONTACT.phoneHref} className="ml-4 transition-colors hover:text-[var(--sunset)]">
                {CONTACT.phoneDisplay}
              </a>
            </p>
            <p>
              <span className="eyebrow text-[var(--sunset)]">Instagram</span>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="ml-4 transition-colors hover:text-[var(--sunset)]">
                {CONTACT.instagramHandle}
              </a>
            </p>
          </div>
          <div className="mt-12 max-w-md border-t border-[rgba(232,228,220,0.15)] pt-8">
            <p className="eyebrow text-[var(--sunset)]">What happens next</p>
            <ol className="mt-5 space-y-4">
              {[
                'You hear back within one business day.',
                'A quick call to scope the shoot — light, angles, and the story your venue needs to tell.',
                'Footage in your inbox within 48 hours of the flight, licensed and ready to post.',
              ].map((step, i) => (
                <li key={i} className="flex gap-4 text-[15.5px] leading-relaxed text-[rgba(232,228,220,0.88)]">
                  <span className="font-display shrink-0 text-[18px] italic text-[var(--sunset)]">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
