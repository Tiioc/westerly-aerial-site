import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/content'
import { LogoMark } from './Logo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-500"
      style={{
        backgroundColor: solid ? 'var(--deep-slate)' : 'transparent',
        borderBottom: solid ? '1px solid rgba(232,228,220,0.06)' : '1px solid transparent',
      }}
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <LogoMark className="h-7 w-7" />
          <span className="font-display text-[15px] font-medium tracking-[0.02em] text-[var(--fog)]">
            Westerly Aerial Co.
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-[rgba(232,228,220,0.88)] transition-colors hover:text-[var(--sunset)]"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="cta-tide rounded-sm px-4 py-2 text-[13px] font-medium uppercase tracking-[0.14em]">
            Apply for a Discovery Flight
          </a>
        </div>

        <button
          className="-mr-2.5 flex h-11 w-11 items-center justify-center text-[var(--fog)] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 px-6 pb-8 pt-2 md:hidden" style={{ backgroundColor: 'var(--deep-slate)' }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium text-[rgba(232,228,220,0.88)] hover:text-[var(--sunset)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="cta-tide mt-4 inline-block rounded-sm px-4 py-3 text-center text-[13px] font-medium uppercase tracking-[0.14em]"
          >
            Apply for a Discovery Flight
          </a>
        </div>
      )}
    </header>
  )
}
