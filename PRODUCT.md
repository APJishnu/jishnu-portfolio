# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

User-directed: Next.js App Router, strict TypeScript, React, Tailwind CSS, Framer Motion, Lucide icons, TanStack Query when remote server state exists, and GSAP/ScrollTrigger only if a complex scroll timeline justifies it. The portfolio has no confirmed remote data service, so it should not add a fake backend or an unused query layer.

## Users

Recruiters and hiring managers are the primary audience, followed by engineering peers and prospective clients. The site's main purpose is to showcase Jishnu's full-stack development experience and attract better job opportunities.

## Product Purpose

An interactive professional portfolio that presents Jishnu's projects, experience, technical skills, education, and contact details. Success means a visitor can quickly understand his actual contribution and follow a useful path to a case study or contact channel.

## Positioning

A project-led record of hands-on full-stack work, with Revalo presented as an independently developed vehicle valuation product and company work clearly attributed to the relevant employer.

## Operating Context

Visitors arrive to assess Jishnu's professional experience, real project contributions, technical capabilities, and engineering approach. The proof order is experience first, then Revalo, VoteFriar, Okinawa Navi, and CineMagic, followed by technical skills and engineering decisions. The site should feel like a creative project archive rather than a traditional resume page and should remain engaging to peers and prospective clients. The primary contact prompt is "Let's talk about an opportunity" or "Get in touch".

## Capabilities and Constraints

- Required routes: home, project archive, project case studies, experience, about, contact, and a custom not-found page.
- The four initial projects are Revalo, VoteFriar, Okinawa Navi, and CineMagic.
- Revalo is an independent product. VoteFriar is a Techfriar company project. Okinawa Navi is a JIIXEL ARC company project; Jishnu's recorded contribution is frontend development of its admin application.
- CineMagic is a personal portfolio project; its dates are not specified.
- Live project links supplied by Jishnu: Revalo at `https://revalo.jishnuap.in` and CineMagic at `https://techfriar-week5-movie-ticket-booking-app.vercel.app/`. Do not invent measurements, outcomes, screenshots, or repository links. Do not add demo links for VoteFriar or Okinawa Navi without evidence.
- Do not publish Jishnu's phone number. Do not show availability or work-status claims without confirmation.
- Use a mailto link rather than an unimplemented contact form.
- TanStack Query should be added only if the site gains a real remote server-state use case.

## Brand Commitments

The supplied reference is a major direction: a warm off-white and near-black editorial surface, restrained vivid orange, fine rules, numbered project rows, a compact horizontal index strip, oversized expressive serif type, monospaced metadata, an asymmetric project canvas, and layered image-led compositions. Adapt this language into an original identity for Jishnu's developer portfolio. Avoid generic cards, fake terminal UI, fake metrics, decorative nonfunctional controls, and fabricated project screenshots.

## Evidence on Hand

- Source of profile, experience, education, skills, and project facts: `/Users/jishnu/Downloads/JISHNU_TECH_RESUME.pdf` (provided by the user, October 2026).
- Public profile links supplied by Jishnu: `https://www.linkedin.com/in/jishnu-ap-335184308/`, `https://github.com/APJishnu`, and `apjishnu23@gmail.com`.
- The resume identifies JIIXEL ARC Pvt Ltd experience from January 2026 to present and Techfriar Technologies from August 2024 to December 2025.
- Jishnu supplied the Revalo and CineMagic live project URLs in the refinement brief. VoteFriar and Okinawa Navi remain company projects without public URLs.
- The visual reference screenshot and Jishnu's personal portrait were supplied by the user. The portrait source is `/Users/jishnu/Downloads/Professional Curly-Haired Business Portrait (1).png`; the portfolio uses an optimized copy at `public/images/jishnu-portrait.webp`.
- No actual project screenshots have been supplied; authored canvas studies are identified as editorial studies.
- Phone number is present in the source resume but must not be exposed on the public site.

## Product Principles

- Keep all public claims traceable to supplied facts.
- Distinguish independent work from company work and state Jishnu's contribution.
- Lead with project work and make the archive easy to explore.
- Keep every visible control useful, accessible, and operable without hover.
- Preserve a deliberate editorial character across routes and screen sizes.

## Accessibility & Inclusion

Support keyboard navigation, visible focus, touch-friendly controls, reduced-motion preferences, readable responsive type, and navigation that remains usable when animations are disabled.
