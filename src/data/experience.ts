export interface ExperienceEntry {
  company: string;
  location: string;
  title: string;
  period: string;
  summary: string;
  featuredWork: {
    title: string;
    slug: string;
    description: string;
  };
  contributions: readonly string[];
  technologies: readonly string[];
}

export const experience: readonly ExperienceEntry[] = [
  {
    company: "JIIXEL ARC Pvt Ltd",
    location: "Bangalore, Karnataka",
    title: "Full-Stack Developer",
    period: "Jan 2026 — Present",
    summary:
      "Full-stack development across company products, including frontend work for the Okinawa Navi admin application.",
    featuredWork: {
      title: "Okinawa Navi",
      slug: "okinawa-navi",
      description: "Admin frontend · content workflows · API-driven interfaces",
    },
    contributions: [
      "Build frontend interfaces for the Okinawa Navi admin application with Next.js, TypeScript, React and Material UI.",
      "Create reusable UI components, forms, data tables and content-management interfaces with validation and API integration.",
      "Use TanStack Query, React Hook Form and Yup for server data, form state and client-side validation.",
      "Develop and maintain web application features using Next.js, React.js, TypeScript, PHP and Laravel.",
      "Work with backend APIs, troubleshoot application issues, and collaborate on requirements, implementation and debugging using Git and GitHub.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Material UI", "TanStack Query", "React Hook Form", "Yup", "PHP", "Laravel"],
  },
  {
    company: "Techfriar Technologies",
    location: "Infopark, Kochi, Kerala",
    title: "Full-Stack Developer",
    period: "Aug 2024 — Dec 2025",
    summary:
      "Full-stack product development at Techfriar, including a contribution to the VoteFriar platform.",
    featuredWork: {
      title: "VoteFriar",
      slug: "votefriar",
      description: "Company contribution · real-time voting workflows with Server-Sent Events",
    },
    contributions: [
      "Contributed frontend and backend features to VoteFriar, including real-time application updates with Server-Sent Events.",
      "Developed web application features with Next.js, React.js, TypeScript, Node.js, Express.js and MongoDB.",
      "Designed and integrated REST APIs for frontend services and database operations.",
      "Implemented JWT authentication, authorization and role-based access control for application workflows.",
      "Integrated Razorpay payment flows, including order creation, payment processing and webhook handling.",
      "Debugged application issues and supported feature development, database operations and ongoing maintenance.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "JWT", "RBAC", "Razorpay", "Webhooks", "SSE"],
  },
] as const;
