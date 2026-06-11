import { useEffect, useState } from 'react'

/** Persistent mobile-only CTA. Appears after the hero, hides while the contact form is in view. */
export function StickyMobileCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let pastHero = false
    let contactVisible = false
    const update = () => setShow(pastHero && !contactVisible)

    const onScroll = () => {
      pastHero = window.scrollY > window.innerHeight * 0.9
      update()
    }
    const contact = document.getElementById('contact')
    const io = contact
      ? new IntersectionObserver(
          ([entry]) => {
            contactVisible = entry.isIntersecting
            update()
          },
          { threshold: 0.04 }
        )
      : null
    if (contact && io) io.observe(contact)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      io?.disconnect()
    }
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 p-3 transition-transform duration-300 md:hidden ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
    >
      <a
        href="#contact"
        className="cta-tide flex items-center justify-center rounded-sm py-4 text-[14px] font-semibold uppercase tracking-[0.14em] shadow-[0_-6px_24px_rgba(11,18,24,0.45)]"
      >
        Book a Free Discovery Flight
      </a>
    </div>
  )
}
