// =================================================================
//  SITE CONTENT — edit copy, pricing, and contact details here.
//  No component code lives in this file, so it's safe to tweak text.
// =================================================================

// ── CONTACT DETAILS (swap for your real domain email / line / handle) ──
export const CONTACT = {
  email: 'hello@westerlyaerial.com',
  phoneDisplay: '(208) 555-0148',
  phoneHref: 'tel:+12085550148',
  instagram: 'https://instagram.com/westerlyaerial',
  instagramHandle: '@westerlyaerial',
}

// Credential trust line shown beside the primary CTAs.
export const TRUST_LINE =
  'FAA Part 107 Certified · Fully Insured · 48-Hour Delivery · Locally owned in Garden City'

export const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export type Service = {
  title: string
  body: string
  packages: { name: string; price: string; tag?: string }[]
  featured?: boolean
}

export const SERVICES: Service[] = [
  {
    title: 'Venue Marketing',
    body: 'Cinematic aerials, social-ready vertical cuts, and seasonal retainers built for courses, clubs, resorts, and event venues that need their place felt — not just shown.',
    packages: [
      { name: 'Discovery Flight', price: 'Free (by application)' },
      { name: 'Venue Refresh', price: 'from $650' },
      { name: 'Seasonal Retainer', price: 'from $400/mo', tag: 'Best value' },
    ],
    featured: true,
  },
  {
    title: 'Property Aerials',
    body: "Aerials that make a property's land, light, and setting impossible to ignore. MLS-compliant, 48-hour delivery, licensed clean.",
    packages: [
      { name: 'Listing Package', price: 'from $200' },
      { name: 'Premium / Acreage', price: 'from $400' },
      { name: 'Add-on to Ground Shoot', price: 'from $100' },
    ],
  },
  {
    title: 'Events & Competition',
    body: 'Tournament promos, competition coverage, and sponsor content — built to make next year sell itself.',
    packages: [
      { name: 'Promo / B-Roll', price: 'from $500' },
      { name: 'Full Competition Coverage', price: 'from $1,200' },
    ],
  },
]

export const ABOUT_LINES = [
  'Westerly Aerial Co. is an aerial photography and video studio based in Garden City, in the heart of the Treasure Valley — with an eye for soft light, clean lines, and the calm that makes a place feel like somewhere you want to be.',
  'Every shoot chases the same thing — capturing how good a place actually feels from above.',
  'FAA Part 107 certified, fully insured, 48-hour delivery, clean licensing — always.',
]

export const TRUST_BADGES = ['FAA Part 107', 'Fully Insured', '48h Delivery', 'Clean Licensing']

// TO ADD A REAL TESTIMONIAL: fill in these values.
//   - quote: keep it tight (1–2 sentences max)
//   - attribution: "Name, Title · Venue"
//   - venueType: optional one-word category shown as a small eyebrow
// When `quote` is empty, the section shows an honest placeholder instead.
export const TESTIMONIAL: { quote: string; attribution: string; venueType?: string } = {
  quote: '',
  attribution: '',
  venueType: '',
}

export const FAQS: { q: string; a: string }[] = [
  {
    q: 'How soon can you shoot?',
    a: 'Most Treasure Valley shoots happen within one to two weeks of booking, weather permitting. Discovery Flights are scheduled within seven days when there’s an opening.',
  },
  {
    q: 'What’s included in a shoot?',
    a: 'Every package includes the flight, edited deliverables (stills and a social-ready vertical clip on most tiers), color-corrected exports in the formats you need, and clean written usage licensing. Footage is in your inbox within 48 hours of the flight.',
  },
  {
    q: 'How does licensing work?',
    a: 'You get unrestricted commercial use of the deliverables for the venue or property in the agreement — web, social, print, paid ads, signage. Licensing terms are written into every contract, so there’s never any guessing later.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes — FAA Part 107 certified pilot and $1M aviation liability insurance, with certificates of insurance available on request for venues that require one on file.',
  },
  {
    q: 'What if the weather doesn’t cooperate?',
    a: 'We watch the forecast together and reschedule before a bad-light flight. There’s no charge for a weather move, and Discovery Flights stay on the books until the light is right.',
  },
  {
    q: 'What if I don’t love the footage?',
    a: 'The Discovery Flight is free — if it’s not a fit, you keep the deliverables and there’s no obligation to book again. On paid shoots, we revise the edit until the deliverables work for your venue.',
  },
]

export const VENUE_TYPES = [
  'Golf',
  'Pickleball / Racquet',
  'Ski / Mountain',
  'Hospitality / Event',
  'Real Estate',
  'Other',
]
