export interface SkillGroup {
  title: string;
  items: readonly string[];
}

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Frontend",
    items: ["Next.js", "React.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Redux"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Fastify", "NestJS", "PHP", "Laravel", "RESTful APIs"],
  },
  {
    title: "Data & forms",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Mongoose", "Prisma ORM", "TanStack Query", "React Hook Form", "Yup"],
  },
  {
    title: "Integration & access",
    items: ["JWT", "OAuth 2.0", "RBAC", "Razorpay", "Webhooks", "Server-Sent Events"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Vercel", "Netlify", "Render"],
  },
] as const;

export const featuredSkillLines = [
  { title: "Frontend", items: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Material UI"] },
  { title: "Backend & APIs", items: ["Node.js", "Express.js", "Fastify", "NestJS", "RESTful APIs"] },
  { title: "Data & systems", items: ["TanStack Query", "MongoDB", "PostgreSQL", "JWT / RBAC", "Razorpay", "Server-Sent Events"] },
] as const;
