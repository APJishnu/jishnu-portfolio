import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { OpportunityBand } from "@/components/layout/opportunity-band";
import { ProjectBrowser } from "@/components/projects/project-browser";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { featuredSkillLines } from "@/data/skills";
import { routes } from "@/lib/routes";

export const metadata = {
  title: "Index of work",
  description: `${profile.name} — ${profile.role}. Projects, experience, and engineering practice.`,
};

export default function HomePage() {
  const currentRole = experience[0];

  return (
    <>
      <div className="top-index-strip" aria-label="Portfolio index information">
        <div><span className="status-dot" aria-hidden="true" />JISHNU A P · INDEX OF WORK · 2024—PRESENT</div>
        <div className="strip-center">FILE 01/04 · INTERACTIVE ARCHIVE</div>
        <div>OTTAPALAM · KERALA</div>
      </div>

      <ProjectBrowser variant="home" />

      <section className="home-experience section-shell">
        <div className="section-lead">
          <p className="mono-label">PROFESSIONAL EXPERIENCE</p>
          <h2>Work made<br />with teams.</h2>
          <p>Full-stack development across production applications, admin interfaces, APIs and integrations.</p>
          <Link className="text-link" href={routes.experience}>View experience <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
        <div className="experience-preview-list">
          {experience.map((item, index) => (
            <article className="experience-preview-row" key={item.company}>
              <span className="mono-label">0{index + 1}</span>
              <div className="experience-preview-copy">
                <h3>{item.company}</h3>
                <p>{item.title} · {item.location}</p>
                <Link className="experience-preview-feature" href={`/work/${item.featuredWork.slug}`}>
                  <strong>{item.featuredWork.title}</strong>
                  <span>{item.featuredWork.description}</span>
                  <ArrowUpRight size={13} aria-hidden="true" />
                </Link>
              </div>
              <span className="mono-label preview-period">{item.period}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="home-capabilities section-shell">
        <div className="capabilities-title">
          <p className="mono-label">TOOLS / PRACTICE</p>
          <h2>Across the<br />stack.</h2>
          <p>Frontend, backend, data and the connections between them.</p>
        </div>
        <div className="capabilities-groups">
          {featuredSkillLines.map((group) => (
            <div className="capability-row" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.items.join(" · ")}</p>
            </div>
          ))}
          <details className="capability-details">
            <summary>Full technology list</summary>
            <div className="capability-details-content">
              <p>React Hook Form · Yup · Redux · PHP · Laravel · MySQL · Redis · Mongoose · Prisma ORM · OAuth 2.0 · Webhooks · Git · GitHub · Docker · Postman · VS Code · Vercel · Netlify · Render</p>
            </div>
          </details>
          <Link className="text-link skills-link" href={routes.about}>All skills & background <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="about-preview section-shell">
        <div className="about-preview-mark" aria-hidden="true">J<span>/</span>AP</div>
        <div className="about-preview-copy">
          <p className="mono-label">A PRACTICE, IN BRIEF</p>
          <h2>Interfaces that meet the systems behind them.</h2>
          <p>{profile.summary}</p>
          <Link className="text-link" href={routes.about}>A little more about me <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
        <a className="about-index-link" href="#selected-work" aria-label="Return to selected work">
          Back to the index <ArrowDown size={15} className="upside-down" aria-hidden="true" />
        </a>
      </section>

      <OpportunityBand compact />
    </>
  );
}
