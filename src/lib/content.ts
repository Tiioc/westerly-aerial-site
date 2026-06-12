// =================================================================
//  SITE CONTENT — edit copy, pricing, and contact details here.
//  No component code lives in this file, so it's safe to tweak text.
// =================================================================

// ── CONTACT DETAILS (swap for your real domain email / line / handle) ──
export const CONTACT = {
  email: 'hello@westerlyaerial.com',
  phoneDisplay: '(208) 555-0100',
  phoneHref: 'tel:+12085550100',
  instagram: 'https://instagram.com/westerlyaerial',
  instagramHandle: '@westerlyaerial',
}

// Short trust line shown beside the primary CTAs (pre-launch honest framing).
export const TRUST_LINE =
  'Launching soon in the Treasure Valley · 48-Hour Delivery · Locally owned in Garden City'

export const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

// ── SERVICES OVERVIEW GRID (no prices here — numbers live in PRICING) ──
export type ServicePackage = { name: string; note: string; lead?: boolean }
export type Service = {
  title: string
  body: string
  packages: ServicePackage[]
  featured?: boolean
}

export const SERVICES: Service[] = [
  {
    title: 'Venue Marketing',
    body: 'Cinematic aerials and social-ready vertical cuts for courses, clubs, resorts, and event venues that need their place felt — not just shown.',
    packages: [
      { name: 'Discovery Flight', note: 'Free · by application', lead: true },
      { name: 'Venue Refresh', note: 'A full cinematic refresh of your place' },
      { name: 'Seasonal Retainer', note: 'Fresh aerials every season, on a simple monthly' },
    ],
    featured: true,
  },
  {
    title: 'Property Aerials',
    body: "Aerials that make a property's land, setting, and views impossible to ignore. MLS-compliant, 48-hour delivery, licensed clean.",
    packages: [
      { name: 'Listing Package', note: 'Aerials that make the listing impossible to scroll past' },
      { name: 'Premium / Acreage', note: 'For larger land, light, and setting' },
      { name: 'Add-on to Ground Shoot', note: 'Aerials layered onto an existing shoot' },
    ],
  },
  {
    title: 'Events & Competition',
    body: 'Tournament promos, competition coverage, and sponsor content — built to make next year sell itself.',
    packages: [
      { name: 'Promo / B-Roll', note: 'Tournament and event promos that sell next year' },
      { name: 'Full Competition Coverage', note: 'Full-day competition + sponsor content' },
    ],
  },
]

// ── PRICING (the only place with dollar figures) ──
export type PriceGroup = { category: string; items: { name: string; price: string }[] }

export const PRICING: PriceGroup[] = [
  {
    category: 'Venue Marketing',
    items: [
      { name: 'Discovery Flight', price: 'Free (by application)' },
      { name: 'Venue Refresh', price: 'from $650' },
      { name: 'Seasonal Retainer', price: 'from $400/mo' },
    ],
  },
  {
    category: 'Property Aerials',
    items: [
      { name: 'Listing Package', price: 'from $200' },
      { name: 'Premium / Acreage', price: 'from $400' },
      { name: 'Add-on to Ground Shoot', price: 'from $100' },
    ],
  },
  {
    category: 'Events & Competition',
    items: [
      { name: 'Promo / B-Roll', price: 'from $500' },
      { name: 'Full Competition Coverage', price: 'from $1,200' },
    ],
  },
]

export const PRICING_FOOTER =
  'Every paid shoot will be licensed, insured, and clean-licensed. Always.'

// ── ABOUT / FOUNDER ──
export const ABOUT_BRAND_FRAME =
  'Westerly Aerial Co. is an aerial photography and video studio in Garden City, in the heart of the Treasure Valley.'

// First-person founder note (Tyler). Keep it plain and real.
export const FOUNDER_NOTE = [
  "Hey, I'm Tyler. I'm the pilot, cinematographer, and editor behind every project. From flight planning to final delivery, I handle it all.",
  "I'm a Boise State student who grew up in California and relocated to Idaho. The Treasure Valley is one of the most photogenic regions I've ever seen, and very few people are capturing it from the air the way it deserves. That's where I come in.",
  "I'm particular about lighting. The same property can look completely different depending on the time of day, and I always shoot during the window that makes it look its best. I don't deliver anything I wouldn't be proud to put my name on.",
  "Because I run this personally, you work directly with me from start to finish. No handoffs, no middlemen. You reach out, I show up, I shoot, I edit, and I deliver.",
]

export const ABOUT_LICENSING_LINE =
  'Part 107 licensed and insured by launch — 48-hour delivery and clean licensing as standard, always.'

// Pre-launch trust badges (no present-tense cert/insurance claims).
export const TRUST_BADGES = ['Licensed at launch', 'Insured at launch', '48h Delivery', 'Clean Licensing']

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
    a: "Not yet — and I'm not going to pretend otherwise. I'm completing my FAA Part 107 certification and getting insured before I take on any paid work. Every paid shoot will be fully licensed and insured, always. Want in early? Apply for a Discovery Flight and you'll be first in line when I launch.",
  },
  {
    q: 'What if the weather doesn’t cooperate?',
    a: 'I keep an eye on the forecast and I’ll move the date before a bad-light flight. There’s no charge for a weather reschedule, and Discovery Flights stay on the books until the light is right.',
  },
  {
    q: 'What if I don’t love the footage?',
    a: 'The Discovery Flight is free — if it’s not a fit, you keep the deliverables and there’s no obligation to book again. On paid shoots, I’ll revise the edit until it works for your venue.',
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
