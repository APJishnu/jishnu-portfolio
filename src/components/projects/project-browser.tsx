"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { ProjectCanvas } from "@/components/projects/project-canvas";
import { Reveal } from "@/components/animations/reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { projects, type Project, type ProjectGroup } from "@/data/projects";
import { profile } from "@/data/profile";
import { motionTiming } from "@/lib/animations/motion-config";

type ProjectFilter = "all" | ProjectGroup;

interface ProjectBrowserProps {
  variant: "home" | "archive";
}

const filters: readonly { id: ProjectFilter; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "independent", label: "Independent" },
  { id: "company", label: "Company work" },
  { id: "personal", label: "Personal project" },
];

function IndexRow({
  project,
  selected,
  onPreview,
}: {
  project: Project;
  selected: boolean;
  onPreview: (slug: string) => void;
}) {
  const reducedMotion = useReducedMotion();
  const contextLabel = project.group === "independent"
    ? "Independent product"
    : project.group === "company"
      ? `Company project · ${project.affiliation}`
      : "Personal / portfolio project";

  return (
    <li className={`project-index-row${selected ? " is-selected" : ""}`}>
      {selected && <motion.span className="project-active-indicator" layoutId={reducedMotion ? undefined : "project-active-indicator"} transition={reducedMotion ? { duration: 0 } : { duration: motionTiming.quick, ease: [0.22, 1, 0.36, 1] }} aria-hidden="true" />}
      <Link
        className="project-index-link"
        href={`/work/${project.slug}`}
        onMouseEnter={() => onPreview(project.slug)}
        onFocus={() => onPreview(project.slug)}
        aria-current={selected ? "true" : undefined}
      >
        <span className="project-index-number">{project.number}</span>
        <span className="project-index-copy">
          <strong>{project.shortTitle}</strong>
          <small>{project.category}</small>
          <small className="project-context-label">{contextLabel}</small>
        </span>
        <span className="project-index-period">{project.periodShort}</span>
      </Link>
      <button
        className="mobile-project-select"
        type="button"
        aria-label={`Preview ${project.title}: ${project.category}. ${contextLabel}.`}
        aria-pressed={selected}
        onClick={() => onPreview(project.slug)}
      >
        <span className="project-index-number">{project.number}</span>
        <span className="project-index-copy">
          <strong>{project.shortTitle}</strong>
          <small>{project.category}</small>
          <small className="project-context-label">{contextLabel}</small>
        </span>
        <span className="project-index-period">{project.periodShort}</span>
      </button>
    </li>
  );
}

export function ProjectBrowser({ variant }: ProjectBrowserProps) {
  const [activeSlug, setActiveSlug] = useState("revalo");
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const visibleProjects = useMemo(
    () => filter === "all" ? projects : projects.filter((project) => project.group === filter),
    [filter],
  );

  useEffect(() => {
    if (!visibleProjects.some((project) => project.slug === activeSlug) && visibleProjects[0]) {
      setActiveSlug(visibleProjects[0].slug);
    }
  }, [activeSlug, visibleProjects]);

  const activeProject = visibleProjects.find((project) => project.slug === activeSlug) ?? visibleProjects[0] ?? projects[0];
  const selectProject = (slug: string) => setActiveSlug(slug);

  return (
    <section className={`project-browser project-browser-${variant}`} id={variant === "home" ? "selected-work" : undefined} aria-label={variant === "home" ? "Selected work" : "Project archive"}>
      <div className="project-index-panel">
        <div className="project-introduction-block">
          {variant === "home" ? (
            <div className="home-introduction">
              <p className="mono-label intro-kicker">FULL-STACK DEVELOPER · KERALA</p>
              <h1 aria-label={profile.headline}><TextReveal text={profile.headline} /></h1>
              <Reveal className="home-supporting-reveal" delay={0.18}>
                <p className="home-introduction-copy">{profile.introduction}</p>
                <div className="experience-intro-line" aria-label="Professional experience">
                  <span className="mono-label career-index">CAREER /</span>
                  <span className="career-record"><strong>JIIXEL ARC</strong><small>2026—PRESENT</small></span>
                  <span className="career-record"><strong>TECHFRIAR</strong><small>2024—2025</small></span>
                </div>
              </Reveal>
              <div className="intro-rule" />
            </div>
          ) : (
            <div className="archive-introduction">
              <p className="mono-label intro-kicker">PROJECT REGISTER · 04 ENTRIES</p>
              <h1 aria-label="Work, in progress."><TextReveal text="Work, in progress." /></h1>
              <p className="home-introduction-copy">Independent product work and company contributions, filed by what they do.</p>
              <div className="intro-rule" />
            </div>
          )}
        </div>

        <div className="project-list-block">
          {variant === "home" && (
            <div className="project-index-heading">
              <span className="mono-label">PROJECT INDEX</span>
              <span className="mono-label">{visibleProjects.length.toString().padStart(2, "0")} FILES</span>
            </div>
          )}

          {variant === "archive" && (
            <div className="project-filters" role="group" aria-label="Filter projects by type">
              {filters.map((item) => (
                <button key={item.id} type="button" aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>
                  {item.label}
                </button>
              ))}
            </div>
          )}

          <nav className="project-index" aria-label="Projects">
            <ol>
              {visibleProjects.map((project) => (
                <IndexRow key={project.slug} project={project} selected={activeProject.slug === project.slug} onPreview={selectProject} />
              ))}
            </ol>
          </nav>
        </div>
      </div>

      <div className="project-preview-panel">
        <ProjectCanvas project={activeProject} total={projects.length} />
      </div>
      <div className="project-browser-tail">
        <div>
          <span className="mono-label">FOUR SELECTED PROJECTS</span>
          <p>Part of a wider body of development work.</p>
        </div>
        <a href={profile.github} target="_blank" rel="noreferrer">
          Explore more on GitHub <ArrowUpRight size={15} strokeWidth={1.6} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
