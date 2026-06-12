import { ArrowUp } from 'lucide-react'
import { NAV_LINKS, CONTACT } from '@/lib/content'
import { LogoMark } from './Logo'

export function Footer() {
  return (
    <footer className="border-t border-[rgba(201,184,154,0.3)] px-6 py-10 md:px-10" style={{ backgroundColor: 'var(--deep-slate)' }}>
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-5">
          <a href="#top" className="flex items-center gap-2.5 font-display text-[15px] font-medium text-[var(--fog)]">
            <LogoMark className="h-6 w-6" />
            Westerly Aerial Co.
          </a>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Westerly Aerial on Instagram"
            className="text-[rgba(232,228,220,0.78)] transition-colors hover:text-[var(--sunset)]"
          >
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
              <circle cx="12" cy="12" r="3.6" />
              <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] uppercase tracking-[0.14em] text-[rgba(232,228,220,0.78)] transition-colors hover:text-[var(--sunset)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-center gap-3 text-center md:items-end md:text-right">
          <p className="text-[12px] tracking-wide text-[rgba(232,228,220,0.78)]">
            Licensed &amp; insured at launch · Garden City, Idaho · © 2026
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.14em] text-[var(--sunset)] transition-colors hover:text-[var(--fog)]"
          >
            <ArrowUp className="h-3 w-3" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
