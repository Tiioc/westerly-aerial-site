# Launch Checklist — Westerly Aerial Co.

This gets your site live on a real web address, with a contact form that emails you
and visitor analytics. It's written for a non-developer: follow it top to bottom.
You'll copy, paste, and click — no coding.

Set aside about **an afternoon**. Most of it is waiting on email/DNS, not work.

A few terms, once:
- **Domain** = your web address, e.g. `westerlyaerial.com`.
- **Host** = the company that serves your site to visitors (we'll use Netlify or Vercel — free).
- **DNS** = the phone book that points your domain at your host.
- **Repo** = the folder of your website's code (you'll put it on GitHub so the host can read it).

---

## Step 0 — Put the code on GitHub (one time)

Hosts build your site automatically from GitHub. So first the code needs to live there.

1. Make a free account at **[github.com](https://github.com)**.
2. Install **[GitHub Desktop](https://desktop.github.com)** (the friendly app — no command line).
3. In GitHub Desktop: **File → Add Local Repository**, choose this project folder
   (`bluebird-aerial`). If it says it's not a repository, click **"create a repository"** and accept the defaults.
4. Click **Publish repository** (top right). Uncheck "keep this code private" only if you want it public; private is fine — the host can still read it. Done.

> Whenever you change the site later, GitHub Desktop shows the changes — type a short note,
> click **Commit**, then **Push**. Your live site rebuilds automatically within a minute.

---

## Step 1 — Buy your domain

1. Go to a registrar — **[Namecheap](https://www.namecheap.com)**, **[Cloudflare](https://www.cloudflare.com/products/registrar/)** (cheapest, at-cost), or **[Google/Squarespace Domains](https://domains.squarespace.com)**.
2. Search for **`westerlyaerial.com`**. If it's taken, good alternates: `westerlyaerialco.com`,
   `flywesterly.com`, `westerly.aero`.
3. Buy it (usually ~$12–15/year). Skip every upsell (privacy is usually free; you don't need their email or site builder).

Write down which registrar you used — you'll log back in at Step 3.

---

## Step 2 — Deploy to a host (free)

Pick **one**. Netlify and Vercel are both excellent and free for this. Netlify's form handling
is slightly simpler, so these instructions lean that way, but either is fine.

### Option A — Netlify (recommended)

1. Go to **[netlify.com](https://www.netlify.com)** → **Sign up** → choose **GitHub** (one click).
2. **Add new site → Import an existing project → GitHub** → pick your `bluebird-aerial` repo.
3. Netlify auto-detects the settings. Confirm they read:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy**. Ninety seconds later you'll get a live URL like
   `https://random-name-1234.netlify.app`. **Your site is on the internet.** 🎉

### Option B — Vercel

1. Go to **[vercel.com](https://vercel.com)** → **Sign up** with GitHub.
2. **Add New → Project** → import your `bluebird-aerial` repo.
3. It auto-detects Vite (Build `npm run build`, Output `dist`). Click **Deploy**.

---

## Step 3 — Point your domain at the host

Right now the site is at a `…netlify.app` (or `…vercel.app`) address. Let's put it on your real domain.

**On Netlify:** Site → **Domain management → Add a domain** → type `westerlyaerial.com` → it shows you
either a set of **nameservers** or two **DNS records** to add.

**On Vercel:** Project → **Settings → Domains** → add `westerlyaerial.com` → it shows what to add.

Then **log into your registrar** (Step 1) and enter what the host told you:
- Easiest path: the host gives you **nameservers** (like `dns1.p01.nsone.net`). In your registrar,
  find **Nameservers**, switch to **Custom**, and paste them in.
- Or it gives you **records** to add (an `A` record and a `CNAME`). Paste those into your
  registrar's **DNS / Advanced DNS** section exactly as shown.

Then wait. DNS can update in minutes but officially takes **up to 24–48 hours**. The host shows a
green check when it's live. It will also set up **HTTPS** (the padlock) for you automatically.

> Also set the **www** version to redirect to the bare domain (or vice-versa) — the host has a
> one-click toggle for this. Pick one as primary so you don't split your Google ranking.

---

## Step 4 — Get a professional email address

`hello@westerlyaerial.com` builds far more trust than a Gmail address, and it's where your
leads will land.

**Cheapest:** many registrars include free email forwarding — set `hello@westerlyaerial.com`
to forward to your personal Gmail. Good enough to start.

**Better (recommended):** **[Google Workspace](https://workspace.google.com)** (~$6/user/month)
gives you a real Gmail inbox at your domain that can also *send* as `hello@westerlyaerial.com`.
Sign up, verify your domain (it walks you through one DNS record), done.

Once your address works, open **`src/lib/content.ts`** and set:
```ts
email: 'hello@westerlyaerial.com',
```
Commit + push (Step 0). Also consider a **[Google Voice](https://voice.google.com)** (free) or
**[OpenPhone](https://www.openphone.com)** (~$15/mo) business number so your cell stays private —
then update `phoneDisplay` / `phoneHref` in the same file.

---

## Step 5 — Make the contact form actually email you

The forms are pre-wired; they just need a free **Formspree** endpoint. Until you do this they
run in "demo mode" (they show the thank-you message but don't send — so the site is never broken).

1. Sign up at **[formspree.io](https://formspree.io)** (free plan: 50 submissions/month).
2. **+ New Form** → name it "Westerly Website" → set the email you want leads sent to
   (your new `hello@` address). Formspree gives you an **endpoint URL** like
   `https://formspree.io/f/abcwxyz`.
3. Open **`src/lib/forms.ts`** and replace the placeholder:
   ```ts
   export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/abcwxyz'
   ```
4. Commit + push. After the site rebuilds, submit a test through your live contact form and
   confirm the email arrives. (Formspree asks you to confirm your address once on the first submission.)

> Both the main contact form **and** the "Join the list" email box use this same endpoint.
> List signups are tagged so you can tell them apart in Formspree.

*(Prefer not to use Formspree? Netlify has built-in forms, but they need a small code change —
ask your developer, or just use Formspree; it works on any host.)*

---

## Step 6 — Turn on Google Analytics (see who's visiting)

1. Create a free property at **[analytics.google.com](https://analytics.google.com)** → it gives
   you a **Measurement ID** that looks like `G-XXXXXXXXXX`.
2. Open **`index.html`**. Near the bottom of the `<head>` there's a clearly-marked
   **GOOGLE ANALYTICS 4** block inside `<!-- -->` comment marks.
3. Replace **both** `G-XXXXXXXXXX` with your real ID, then remove the `<!--` line above the block
   and the `-->` line below it (that "uncomments" it / turns it on).
4. Commit + push. Within a day, Analytics shows your visitors.

*(There's a Meta/Facebook Pixel block right below it, set up the same way — only bother with it
if you start running Instagram/Facebook ads.)*

---

## Step 7 — After launch (do these this week)

- [ ] **Google Business Profile** — the single biggest local-SEO win. Create one free at
      **[google.com/business](https://www.google.com/business/)** for "Westerly Aerial Co.",
      category *Aerial Photographer / Commercial Photographer*, service-area = Treasure Valley
      (you can hide your home address). This is what puts you on Google Maps and in the local
      "3-pack." Add your website link, hours, and a few photos.
- [ ] **Submit your site to Google** — at **[search.google.com/search-console](https://search.google.com/search-console)**,
      add your domain and submit `https://westerlyaerial.com/sitemap.xml` (already built for you).
- [ ] **Make a share image** — drop a nice 1200×630 aerial shot named `og.jpg` into the `public/`
      folder so links look great when shared in texts and on social. (Until then, links still work,
      just without a preview photo.)
- [ ] **Test on your phone** — open the live site on your actual phone; tap the sticky "Book a Free
      Discovery Flight" bar and submit the form.
- [ ] **List yourself** in a few local/industry directories and your Instagram bio link.
- [ ] **Update the domain placeholders** — once your real domain is set, search the project for
      `westerlyaerial.com` (in `index.html`, `public/robots.txt`, `public/sitemap.xml`) and swap in
      your actual domain if it differs.

---

## Quick reference — the files you'll touch

| To change… | Edit this file |
| --- | --- |
| Your email / phone / Instagram | `src/lib/content.ts` |
| Pricing, services, FAQ, testimonial, all copy | `src/lib/content.ts` |
| Where the form sends leads | `src/lib/forms.ts` |
| Google Analytics ID, social preview, your domain | `index.html` |
| Real photos & video | `src/components/Hero.tsx` and `src/components/scenes.tsx` (see README) |

After any edit: **GitHub Desktop → Commit → Push.** The live site updates itself in about a minute.
