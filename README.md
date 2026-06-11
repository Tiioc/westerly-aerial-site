# Westerly Aerial Co. — Website

Marketing site for Westerly Aerial Co., an aerial photography & video studio in
Garden City / Boise, Idaho. Built with **React 18 + TypeScript + Vite + Tailwind CSS**.

> **Just want to get it online?** You don't need this file. Follow **[LAUNCH.md](./LAUNCH.md)** —
> it's written step-by-step for a non-developer (buy domain → deploy → email → forms → analytics).

---

## Run it on your computer

You need [Node.js](https://nodejs.org) 18+ installed (this also installs `npm`).

```bash
npm install      # one time — downloads dependencies
npm run dev      # starts a local preview at http://localhost:5173
```

Open the URL it prints. The page reloads automatically as you edit files.

## Build for production

```bash
npm run build    # type-checks, then outputs a static site to dist/
npm run preview  # optional: preview the built site locally
```

Everything in **`dist/`** is the finished website — plain HTML/CSS/JS that any static
host can serve. You normally never touch `dist/` by hand; hosts build it for you (see LAUNCH.md).

---

## Where to edit things (no deep code-diving)

| What you want to change | File |
| --- | --- |
| Copy, pricing, FAQ, contact details, testimonial | `src/lib/content.ts` |
| Where the contact/email forms deliver (Formspree) | `src/lib/forms.ts` |
| SEO tags, social preview, Google Analytics, favicon links | `index.html` |
| Real photos/videos in the hero or gallery tiles | see **Swapping in real media** below |
| Colors, fonts, animations | `src/index.css` (the `:root` palette at the top) |
| Page section order | `src/App.tsx` |

Each visible section is its own file in `src/components/` (Hero, Services, About, Contact, …),
so you can find and tweak one piece without scrolling through everything.

```
src/
├─ App.tsx                # composes the page (section order)
├─ index.css             # palette, fonts, animations
├─ lib/
│  ├─ content.ts         # ← all copy, pricing, FAQ, contact info
│  ├─ forms.ts           # ← Formspree endpoint
│  └─ hooks.ts           # scroll/reveal helpers
└─ components/           # one file per section + MediaSlot, scenes, etc.
```

---

## Swapping in real media

Today the hero shows a dusk gradient and the gallery shows six hand-drawn aerial
illustrations. They're built so a real photo or video drops in by changing **one line** —
no layout shift, with a loading shimmer and graceful fade-in handled for you.

**Hosting the files:** put your images/videos on a host and use the public `https://…` link.
Good free/cheap options: [Cloudinary](https://cloudinary.com), Bunny.net, or even a public
GitHub repo's raw URL. (You *can* also drop files into the `public/` folder and reference them
as `/myphoto.jpg`, but hosted links keep the repo lightweight.)

**Hero background** — `src/components/Hero.tsx`, find `<MediaSlot id="hero" …>` and fill in:

```tsx
src="https://yourhost.com/hero-flyover.mp4"
type="video"                                    // or "image"
poster="https://yourhost.com/hero-still.jpg"    // required for video
```

**Gallery tiles** — `src/components/scenes.tsx`, in the `SCENES` array, add `src` to any tile:

```ts
{ id: 'capture-golf', label: 'Golf Courses', alt: '…', Scene: SceneGolf,
  src: 'https://yourhost.com/golf.jpg' },
```

Leave `src` off and that tile keeps its illustration. Mixing real photos and illustrations
looks intentional, so you can fill the gallery in as you shoot.

**Video tips:** keep clips short (8–15s), muted, looping, compressed MP4 (H.264) or WebM,
roughly 2–6 MB, and always include a `poster` still.

---

## Notes

- The two unused shadcn scaffold components `calendar` and `resizable` were removed because
  they didn't compile against the installed dependency versions. The rest of `src/components/ui/`
  is unused by this site but left in place if you want it later.
- Fonts (Fraunces + DM Sans) load from Google Fonts with `display=swap`; no font files are bundled.
- All animations respect `prefers-reduced-motion`.
