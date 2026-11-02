import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { OpportunityBand } from "@/components/layout/opportunity-band";
import { ProjectArtworkReveal } from "@/components/projects/project-artwork-reveal";
import { getProjectBySlug, projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.title} · ${project.category}`,
    description: project.summary,
    openGraph: { title: `${project.title} — Jishnu A P`, description: project.summary, type: "article" },
  };
}

export default async function ProjectCaseStudy({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <div className="case-strip">
        <Link href="/work"><ArrowLeft size={14} aria-hidden="true" />Back to work</Link>
        <span className="mono-label">PROJECT FILE {project.number} / 0{projects.length}</span>
        <span className="mono-label">{project.period}</span>
      </div>

      <header className="case-hero">
        <div className="case-title-block">
          <p className="mono-label">{project.category.toUpperCase()}</p>
          <h1>{project.title}</h1>
          <p className="case-summary">{project.summary}</p>
          {project.liveUrl && (
            <a className="project-live-link" href={project.liveUrl} target="_blank" rel="noreferrer">
              {project.liveLabel ?? "Visit live project"}
              <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
            </a>
          )}
        </div>
        <div className="case-meta-grid">
          <div><span className="mono-label">CONTEXT</span><strong>{project.group === "independent" ? "Independent product" : project.group === "company" ? "Company project" : "Personal portfolio project"}</strong></div>
          <div><span className="mono-label">CONTRIBUTION</span><strong>{project.role}</strong></div>
          <div><span className="mono-label">{project.group === "company" ? "CONTRIBUTION WINDOW" : project.group === "independent" ? "STATUS" : "PROJECT DETAILS"}</span><strong>{project.period}</strong></div>
          {project.affiliation && <div><span className="mono-label">COMPANY</span><strong>{project.affiliation}</strong></div>}
        </div>
      </header>

      <section className="case-art-section" aria-label={`${project.title} visual study`}>
        <ProjectArtworkReveal project={project} />
      </section>

      <section className="case-overview section-shell">
        <div className="case-section-label"><span className="mono-label">PROJECT / OVERVIEW</span><span className="case-section-number">{project.number}</span></div>
        <div className="case-overview-copy">
          <h2>{project.purpose}</h2>
          <p>{project.overview}</p>
        </div>
      </section>

      <section className="case-contribution section-shell">
        <div className="case-section-label"><span className="mono-label">MY CONTRIBUTION</span></div>
        <div>
          <p className="case-contribution-intro">{project.role}{project.affiliation ? ` at ${project.affiliation}` : ""}.</p>
          <ul className="contribution-list case-contribution-list">
            {project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
          </ul>
        </div>
      </section>

      <section className="case-capabilities section-shell">
        <div className="case-section-label"><span className="mono-label">FEATURES / WORKFLOWS</span></div>
        <div className="case-feature-list">
          {project.capabilities.map((capability, featureIndex) => (
            <article key={capability}><span className="mono-label">{String(featureIndex + 1).padStart(2, "0")}</span><p>{capability}</p></article>
          ))}
        </div>
      </section>

      <section className="case-architecture section-shell">
        <div className="case-section-label"><span className="mono-label">TECHNICAL ARCHITECTURE</span></div>
        <div className="architecture-content">
          <div className="architecture-layers">
            {project.architecture.map((layer, layerIndex) => (
              <div key={layer.layer} className="architecture-row">
                <span className="mono-label">LAYER {String(layerIndex + 1).padStart(2, "0")}</span>
                <h3>{layer.layer}</h3>
                <p>{layer.detail}</p>
              </div>
            ))}
          </div>
          <div className="stack-block">
            <span className="mono-label">TECHNOLOGY</span>
            <ul>{project.stack.map((technology) => <li key={technology}>{technology}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="case-engineering section-shell">
        <div className="case-section-label"><span className="mono-label">ENGINEERING NOTES</span></div>
        <div className="engineering-notes">
          {project.engineering.map((note, noteIndex) => (
            <p key={note}><span className="mono-label">0{noteIndex + 1}</span>{note}</p>
          ))}
          <p className="source-note"><span className="mono-label">SOURCE SCOPE</span>{project.unknowns}</p>
        </div>
      </section>

      <nav className="case-pagination section-shell" aria-label="Project case studies">
        <Link href={`/work/${previous.slug}`} className="case-pagination-link">
          <span className="mono-label"><ArrowLeft size={13} aria-hidden="true" /> PREVIOUS FILE · {previous.number}</span>
          <strong>{previous.title}</strong>
        </Link>
        <Link href={`/work/${next.slug}`} className="case-pagination-link next-case">
          <span className="mono-label">NEXT FILE · {next.number} <ArrowUpRight size={13} aria-hidden="true" /></span>
          <strong>{next.title}</strong>
        </Link>
      </nav>

      <OpportunityBand compact />
    </>
  );
}
