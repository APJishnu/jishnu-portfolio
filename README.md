# Jishnu A P — Portfolio

An editorial project archive and multi-page portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Routes

- `/` — Interactive project index, experience preview, skills and contact invitation
- `/work` — Filterable project archive
- `/work/[slug]` — Data-driven case studies
- `/experience` — Professional timeline and contributions
- `/about` — Engineering practice, skills, education and certifications
- `/contact` — Email, LinkedIn and GitHub

## Content and visuals

Project facts live in `src/data/projects.ts`; profile, skills and experience are in their own files under `src/data/`. Revalo and CineMagic link to the live URLs provided by Jishnu. GitHub links to his profile; VoteFriar and Okinawa Navi remain company contributions without public demo links. No actual project screenshots were supplied, so the project canvas uses clearly labeled editorial studies built from documented project details. These studies do not imitate the products' interfaces.

The portfolio uses a direct email link instead of an unimplemented form. TanStack Query is not installed because the site has no remote server-state use case; the project's content is static local data. GSAP is not used because the project transitions do not require scroll timelines.

The supplied portrait is stored as an optimized WebP at `public/images/jishnu-portrait.webp` and used on the About page. The provided resume remains outside `public/`; this avoids publishing the phone number it contains. No phone number or unverified availability claim is shown on the site.
