export type ProjectGroup = "independent" | "company" | "personal";

export interface Project {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  group: ProjectGroup;
  period: string;
  periodShort: string;
  affiliation?: string;
  liveUrl?: string;
  liveLabel?: string;
  role: string;
  summary: string;
  overview: string;
  purpose: string;
  contributions: readonly string[];
  capabilities: readonly string[];
  engineering: readonly string[];
  stack: readonly string[];
  architecture: readonly { layer: string; detail: string }[];
  unknowns: string;
  visual: "revalo" | "votefriar" | "okinawa" | "cinemagic";
}

export const projects: readonly Project[] = [
  {
    slug: "revalo",
    number: "01",
    title: "Revalo",
    shortTitle: "Revalo",
    category: "Vehicle resale-value estimator",
    group: "independent",
    period: "Ongoing product development",
    periodShort: "Live",
    role: "Independent product development and deployment",
    liveUrl: "https://revalo.jishnuap.in",
    liveLabel: "Open Revalo",
    summary: "An independently developed car valuation product with a guided workflow and account-specific history.",
    overview:
      "Revalo is an independent vehicle resale estimator. Its seven-step flow collects car details, connects a Next.js frontend to a Fastify API, and keeps valuation history associated with the user's account. The live product currently presents car valuations, with more vehicle categories in development.",
    purpose: "Give people a guided estimate of a car's resale value and keep their valuation history tied to their account.",
    contributions: [
      "Developed and deployed Revalo independently, taking the product from idea through a live application.",
      "Built a guided valuation experience and connected its Next.js frontend to Fastify services and MongoDB data handling.",
      "Implemented authentication and user-specific valuation history.",
      "Own the application architecture and continue to develop the product.",
    ],
    capabilities: [
      "Guides a car valuation through seven steps for vehicle details, mileage, condition, ownership and location.",
      "Connects the Next.js interface with Fastify services and MongoDB-backed application data.",
      "Authentication ties a user's valuation history to their account.",
      "The live product focuses on cars while additional vehicle categories are in development.",
    ],
    engineering: [
      "The seven-step form separates vehicle details into a clear sequence, with a reviewable path before submission.",
      "Authentication connects saved valuation history to an individual account.",
      "A Fastify API and MongoDB provide the service and data layers; the product is deployed at its custom domain.",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "Fastify", "MongoDB", "Tailwind CSS"],
    architecture: [
      { layer: "Interface", detail: "Next.js and TypeScript" },
      { layer: "API", detail: "Node.js and Fastify" },
      { layer: "Data", detail: "MongoDB and account-specific valuation history" },
      { layer: "Deployment", detail: "Live at revalo.jishnuap.in" },
    ],
    unknowns: "No measured outcome or detailed valuation methodology is published in the supplied material.",
    visual: "revalo",
  },
  {
    slug: "votefriar",
    number: "02",
    title: "VoteFriar",
    shortTitle: "VoteFriar",
    category: "Real-time voting platform",
    group: "company",
    period: "Contribution · 2024–25",
    periodShort: "2024–25",
    affiliation: "Techfriar Technologies",
    role: "Company project contribution · frontend and backend features",
    summary: "A configurable voting and polling platform with live updates and administrator-facing results.",
    overview:
      "VoteFriar supports configurable voting workflows and administrator-facing result views. Jishnu contributed frontend and backend features as part of Techfriar Technologies.",
    purpose: "Run configurable voting and polling workflows and present results to administrators.",
    contributions: [
      "Contributed frontend and backend features to VoteFriar as part of the Techfriar team.",
      "Worked on real-time voting workflows and application updates using Server-Sent Events.",
      "Developed and integrated APIs, then supported database operations, debugging and maintenance.",
    ],
    capabilities: [
      "Configurable voting and polling workflows.",
      "Administrator-facing result views.",
      "Real-time updates using Server-Sent Events.",
    ],
    engineering: [
      "Server-Sent Events carry real-time application updates.",
      "The project stack listed in the resume includes BullMQ alongside Next.js, TypeScript, Node.js and Express.js.",
      "The resume does not attribute ownership of the whole platform to Jishnu; this page describes his contribution as a company team member.",
    ],
    stack: ["Next.js", "React.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Server-Sent Events", "BullMQ"],
    architecture: [
      { layer: "Interface", detail: "Next.js and TypeScript" },
      { layer: "Services", detail: "Node.js and Express.js" },
      { layer: "Data", detail: "PostgreSQL" },
      { layer: "Live updates", detail: "Server-Sent Events" },
      { layer: "Queue", detail: "BullMQ" },
    ],
    unknowns: "The supplied resume does not include a public demo URL, repository URL, or measured results.",
    visual: "votefriar",
  },
  {
    slug: "okinawa-navi",
    number: "03",
    title: "Okinawa Navi",
    shortTitle: "Okinawa Navi",
    category: "Content-sharing platform",
    group: "company",
    period: "Contribution · 2026—present",
    periodShort: "2026—present",
    affiliation: "JIIXEL ARC Pvt Ltd",
    role: "Company project contribution · admin frontend",
    summary: "Frontend development for the platform's content-management admin application.",
    overview:
      "Okinawa Navi is a content-sharing platform. Jishnu develops frontend features for its admin application, including content forms, tables, media uploads and editing workflows.",
    purpose: "Support content management for a content-sharing platform through its admin application.",
    contributions: [
      "Develop frontend features for the admin application using Next.js, React.js, TypeScript and Material UI.",
      "Build and maintain content-management forms, data tables, media-upload controls and editing workflows.",
      "Use TanStack Query, React Hook Form and Yup for server data, form state and validation.",
      "Integrate with backend APIs and collaborate on feature delivery and maintenance.",
    ],
    capabilities: [
      "Content management forms and editing workflows.",
      "Data tables and media uploads.",
      "API-driven frontend features with form validation.",
    ],
    engineering: [
      "TanStack Query is used to manage server data.",
      "React Hook Form and Yup support form state and client-side validation.",
      "The broader project stack includes NestJS; Jishnu's documented contribution is frontend development.",
    ],
    stack: ["Next.js", "React.js", "TypeScript", "Material UI", "TanStack Query", "React Hook Form", "Yup", "NestJS"],
    architecture: [
      { layer: "Admin interface", detail: "Next.js, React, TypeScript and Material UI" },
      { layer: "Server state", detail: "TanStack Query" },
      { layer: "Forms", detail: "React Hook Form and Yup" },
      { layer: "Project stack", detail: "NestJS is listed in the project technologies" },
    ],
    unknowns: "The supplied resume does not include a public demo URL, repository URL, or measured outcomes. This is company product work, not an independently owned application.",
    visual: "okinawa",
  },
  {
    slug: "cinemagic",
    number: "04",
    title: "CineMagic",
    shortTitle: "CineMagic",
    category: "Movie ticket booking platform",
    group: "personal",
    period: "Portfolio project · dates not specified",
    periodShort: "Portfolio",
    role: "Personal portfolio project development",
    liveUrl: "https://techfriar-week5-movie-ticket-booking-app.vercel.app/",
    liveLabel: "Open CineMagic",
    summary: "A personal movie-ticket booking project spanning movie browsing, seat selection, payments and booking management.",
    overview:
      "CineMagic is a personal movie ticket booking project with movie browsing, seat selection, booking management, user authentication and Razorpay payment processing.",
    purpose: "Let users browse movie listings and manage ticket bookings through payment.",
    contributions: [
      "Developed the movie ticket booking application and its main booking features.",
      "Integrated Razorpay for online payment processing.",
      "Implemented user authentication and role-based access control.",
    ],
    capabilities: [
      "Movie listings and seat selection.",
      "Booking management and user authentication with JWT.",
      "Razorpay payment processing and role-based access control.",
    ],
    engineering: [
      "The stack uses Next.js, Node.js, MongoDB, TanStack Query, Razorpay and JWT.",
      "The project is a personal portfolio project. Its dates are not recorded in the supplied resume.",
    ],
    stack: ["Next.js", "Node.js", "MongoDB", "Razorpay", "JWT", "TanStack Query"],
    architecture: [
      { layer: "Interface", detail: "Next.js" },
      { layer: "Services", detail: "Node.js" },
      { layer: "Data", detail: "MongoDB" },
      { layer: "Payments & access", detail: "Razorpay and JWT" },
    ],
    unknowns: "Project dates are not specified in the supplied material.",
    visual: "cinemagic",
  },
] as const;

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
