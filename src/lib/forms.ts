// =================================================================
//  FORM DELIVERY
//
//  This site uses Netlify Forms — submissions appear in your Netlify
//  dashboard at  Site → Forms  and can be emailed to you automatically
//  ( Forms → Settings & usage → Form notifications → "add notification"
//    → email notification → paste hello@westerlyaerial.com ).
//
//  The forms are detected at build time via the two hidden <form> blocks
//  in index.html ( name="westerly-contact" and "westerly-email-list" ).
//  Don't remove them — Netlify scans the built HTML for them.
//
//  Want to use Formspree instead? Paste its URL into FORMSPREE_ENDPOINT
//  below; it takes precedence over Netlify Forms.
// =================================================================

/** Optional Formspree URL — leave empty to use Netlify Forms (default). */
export const FORMSPREE_ENDPOINT = ''

/** Encode a flat key/value object as application/x-www-form-urlencoded. */
function encode(data: Record<string, string>): string {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
}

/**
 * Shared submit handler. Posts via Formspree if configured, otherwise via
 * Netlify Forms (the form's `form-name` hidden input tells Netlify which
 * named form it is). Returns the resolved status so each form drives its own UI.
 */
export async function submitForm(formEl: HTMLFormElement): Promise<'success' | 'error'> {
  const formData = new FormData(formEl)

  // ── Formspree path (only if endpoint is filled in) ──────────────
  if (FORMSPREE_ENDPOINT) {
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      return res.ok ? 'success' : 'error'
    } catch {
      return 'error'
    }
  }

  // ── Netlify Forms path (default) ────────────────────────────────
  // Honeypot: if the hidden bot-field has anything in it, silently "succeed"
  // so the bot moves on; we just don't actually submit.
  if (formData.get('bot-field')) {
    await new Promise((r) => setTimeout(r, 300))
    return 'success'
  }

  const obj: Record<string, string> = {}
  formData.forEach((v, k) => {
    if (typeof v === 'string') obj[k] = v
  })

  try {
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(obj),
    })
    return res.ok ? 'success' : 'error'
  } catch {
    return 'error'
  }
}
