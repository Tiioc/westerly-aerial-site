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
import { Services } from './components/Services'
import { FlightAccent } from './components/FlightAccent'
import { WhatWeCapture } from './components/WhatWeCapture'
import { DiscoveryCta } from './components/DiscoveryCta'
import { Testimonial } from './components/Testimonial'
import { About } from './components/About'
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
        <Services />
        <FlightAccent />
        <WhatWeCapture />
        <DiscoveryCta />
        <Testimonial />
        <About />
        <FAQ />
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
