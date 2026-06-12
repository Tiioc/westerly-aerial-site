// =================================================================
//  Westerly Aerial Co. — single-page marketing site
//
//  This file just composes the sections. To edit:
//    • Copy / pricing / contact details  → src/lib/content.ts
//    • Form delivery (Formspree)          → src/lib/forms.ts
//    • Real photos / video in any slot    → see <MediaSlot> notes in
//      src/components/MediaSlot.tsx and the SCENES array in
//      src/components/scenes.tsx
//    • SEO / social / analytics tags      → index.html
// =================================================================

import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Pov } from './components/Pov'
import { DiscoveryCta } from './components/DiscoveryCta'
import { Services } from './components/Services'
import { FlightAccent } from './components/FlightAccent'
import { WhatWeCapture } from './components/WhatWeCapture'
import { About } from './components/About'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { Contact } from './components/Contact'
import { EmailCapture } from './components/EmailCapture'
import { Footer } from './components/Footer'
import { StickyMobileCta } from './components/StickyMobileCta'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[var(--fog)]">
      <Navbar />
      <main>
        <Hero />
        <Pov />
        {/* Discovery Flight offer moved up — directly under the empathy line */}
        <DiscoveryCta />
        <div className="section-fade-sand-to-light" aria-hidden="true" />
        <Services />
        <div className="section-fade-light-to-dark" aria-hidden="true" />
        <FlightAccent />
        <WhatWeCapture />
        <About />
        <div className="section-fade-dark-to-light" aria-hidden="true" />
        <Pricing />
        <FAQ />
        <div className="section-fade-light-to-dark" aria-hidden="true" />
        <Contact />
        <EmailCapture />
      </main>
      <Footer />
      <StickyMobileCta />
      {/* signature filmic grain (subtle, animated) — defined in index.css */}
      <div className="grain" aria-hidden="true" />
    </div>
  )
}
