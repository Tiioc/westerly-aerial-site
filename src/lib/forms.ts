// =================================================================
//  FORM DELIVERY  (see LAUNCH.md, step 5)
//
//  Paste your Formspree form endpoint below so leads email you directly.
//  Get one free at https://formspree.io — create a form, copy its URL
//  (looks like https://formspree.io/f/abcwxyz), and replace the value.
//
//  Until you do, the forms run in "demo mode": they show the thank-you
//  state without sending, so the site is never broken in front of a client.
// =================================================================

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your_form_id'

export const FORM_IS_DEMO = FORMSPREE_ENDPOINT.includes('your_form_id')

/**
 * Shared submit handler for both the contact form and the email-capture band.
 * Returns the resolved status so each form can drive its own UI.
 */
export async function submitForm(formEl: HTMLFormElement): Promise<'success' | 'error'> {
  if (FORM_IS_DEMO) {
    await new Promise((r) => setTimeout(r, 500))
    return 'success'
  }
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: new FormData(formEl),
      headers: { Accept: 'application/json' },
    })
    return res.ok ? 'success' : 'error'
  } catch {
    return 'error'
  }
}
