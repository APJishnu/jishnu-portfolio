import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { OpportunityBand } from "@/components/layout/opportunity-band";
import { PageIntro } from "@/components/layout/page-intro";
import { PortraitFigure } from "@/components/about/portrait-figure";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";

export const metadata = {
  title: "About",
  description: "Background, development practice, technical skills and education for Jishnu A P.",
};

const education = {
  qualification: "Diploma in Computer Engineering",
  institution: "I.P.T & G.P.T.C Shoranur, Kerala",
  period: "2021 — 2024",
  result: "CGPA 7.8 / 10",
};

const certifications = [
  { name: "MERN Stack Development", provider: "Wayone Technologies", year: "2024" },
  { name: "Cybersecurity Training", provider: "Commissioner Office, Kochi", year: "2023" },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title="A little about the work."
        description="I work across frontend and backend development, with a practical focus on the paths that connect interfaces, APIs and data."
      />
      <section className="about-statement section-shell">
        <PortraitFigure />
        <div>
          <p className="mono-label">JISHNU A P · {profile.location.toUpperCase()}</p>
          <h2>Full-stack development, from the interface to the service behind it.</h2>
          <p>I like work where interface decisions connect to the API and data operations that make an application useful.</p>
          <p>At JIIXEL ARC, my current focus is frontend development for Okinawa Navi’s admin application. At Techfriar I worked across product interfaces, APIs, authentication, payments and live updates. Revalo is where I take responsibility for an independent product end to end.</p>
          <Link className="text-link" href="/experience">Professional experience <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="approach-section section-shell">
        <div className="section-lead">
          <p className="mono-label">ENGINEERING PRACTICE</p>
          <h2>Build the full path.</h2>
        </div>
        <div className="approach-list">
          <article><span className="mono-label">01</span><div><h3>Start with the user flow</h3><p>Shape forms and content-management tasks around the information a person needs to provide or review.</p></div></article>
          <article><span className="mono-label">02</span><div><h3>Connect interface and service</h3><p>Work with REST APIs, validation, authentication, role-based access and the data operations behind an application.</p></div></article>
          <article><span className="mono-label">03</span><div><h3>Handle real application states</h3><p>Experience includes payment workflows and live updates with Server-Sent Events, alongside ongoing feature maintenance.</p></div></article>
        </div>
      </section>

      <section className="skills-section section-shell">
        <div className="section-lead">
          <p className="mono-label">TECHNICAL SKILLS</p>
          <h2>Tools I work with.</h2>
        </div>
        <div className="skills-list">
          {skillGroups.map((group, index) => (
            <div className="skill-group-row" key={group.title}>
              <span className="mono-label">0{index + 1}</span>
              <h3>{group.title}</h3>
              <p>{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="credentials-section section-shell">
        <div>
          <p className="mono-label">EDUCATION</p>
          <h2>{education.qualification}</h2>
          <p>{education.institution}</p>
          <div className="credential-meta"><span>{education.period}</span><span>{education.result}</span></div>
        </div>
        <div>
          <p className="mono-label">CERTIFICATIONS</p>
          <ul className="certification-list">
            {certifications.map((certification) => (
              <li key={certification.name}>
                <strong>{certification.name}</strong>
                <span>{certification.provider} · {certification.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="about-social-line section-shell">
        <span className="mono-label">ELSEWHERE</span>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
      <OpportunityBand compact />
    </>
  );
}
