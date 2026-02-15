# Meridian Aesthetics Studio (Static Website)

This repository is now a **framework-free static website** for Meridian Aesthetics Studio in Staten Island, NY.

## Pages

- `/index.html`
- `/treatments/index.html`
- `/results/index.html`
- `/providers/index.html`
- `/memberships/index.html`
- `/contact/index.html`

## Assets

- `/assets/css/styles.css`
- `/assets/js/main.js`

## Features Included

- Quiet-luxury visual style with neutral palette and soft-gold accent.
- Sticky header and mobile bottom CTA bar.
- Primary CTA: **Request a Private Consultation** (links to `/contact/`).
- Results gallery with category filters and image modal.
- FAQ accordion.
- Contact form with client-side validation and success state (no backend required).

## Run Locally

Because this is static HTML/CSS/JS, no build step is required.

```bash
python3 -m http.server 8000
```

Then open:

- `http://localhost:8000/`

## Notes

- All interactions are handled by vanilla JavaScript in `assets/js/main.js`.
- Demo images are loaded from Unsplash URLs.
