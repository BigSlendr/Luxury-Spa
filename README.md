# Meridian Aesthetics Studio (Lead-Generation Demo)

A premium, mobile-first med spa website demo built with Next.js App Router + TypeScript + Tailwind CSS.

## Purpose
- Showcase a clean, modern, luxury aesthetic clinic experience.
- Drive consultations via short contact form and click-to-call/text.
- Provide scalable page structure for services, results, providers, memberships, and contact.

## Run locally
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open `http://localhost:3000`

## Project structure
- `app/`: route pages + local API route
- `components/`: reusable UI components
- `data/siteData.ts`: content arrays for cards, filters, and sections

## What to customize
- Branding, logo, phone/address/hours placeholders
- Real reviews, provider bios, treatment details, and photography
- Form options and disclaimers for your legal/compliance needs

## Contact form behavior
- Form posts to `POST /api/contact`
- API route logs the submission server-side and returns success/failure JSON
- Frontend shows validation errors and success/error state

## Connect form to email later
Inside `app/api/contact/route.ts`:
- Replace console logging with an email send (e.g., Resend/Formspree)
- Keep server-side validation and add spam protection if needed
- Optionally forward submissions to CRM/EMR workflow tools
