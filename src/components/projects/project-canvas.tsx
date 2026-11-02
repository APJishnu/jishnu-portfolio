"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Info, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { Project } from "@/data/projects";
import { ProjectArtwork } from "@/components/projects/project-artwork";

interface ProjectCanvasProps {
  project: Project;
  total: number;
}

export function ProjectCanvas({ project, total }: ProjectCanvasProps) {
  const reducedMotion = useReducedMotion();
  const [notesOpen, setNotesOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const projectGroup = project.group === "company"
    ? "Company contribution"
    : project.group === "independent"
      ? "Independent product"
      : "Personal portfolio project";

  useEffect(() => {
    if (!notesOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setNotesOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [notesOpen]);

  const transition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.42, ease: [0.22, 1, 0.36, 1] as const };
  const closeNotes = () => {
    setNotesOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <section className="project-canvas" aria-label={`Selected project: ${project.title}`}>
      <div className="canvas-topline">
        <span className="mono-label">FILE {project.number} / 0{total} · FIELD STUDY</span>
        <span className="canvas-category">{project.category}</span>
        <span className="mono-label canvas-period">{project.periodShort}</span>
      </div>

      <div className="canvas-frame">
        <AnimatePresence mode="sync" initial={false}>
        <motion.div
          className="canvas-frame-layer"
          key={project.slug}
          initial={reducedMotion ? false : { opacity: 1, clipPath: "inset(0 0 0 8%)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0 0 0%)" }}
          exit={reducedMotion ? undefined : { opacity: 1, clipPath: "inset(0 8% 0 0)" }}
          transition={transition}
          onAnimationComplete={() => setNotesOpen(false)}
        >
          <ProjectArtwork project={project} />
        </motion.div>
        </AnimatePresence>
      </div>

      <div className="canvas-bottomline">
        <p className="canvas-summary" aria-live="polite">{project.summary}</p>
        <div className="canvas-actions">
          <button
            ref={triggerRef}
            className="notes-trigger"
            type="button"
            aria-expanded={notesOpen}
            aria-controls="project-notes"
            onClick={() => setNotesOpen((open) => !open)}
          >
            <Info size={15} strokeWidth={1.6} aria-hidden="true" />
            <span>Field notes</span>
          </button>
          <Link className="canvas-case-link" href={`/work/${project.slug}`}>
            Case study <ArrowUpRight size={15} strokeWidth={1.6} aria-hidden="true" />
          </Link>
          {project.liveUrl && (
            <a className="canvas-live-link" href={project.liveUrl} target="_blank" rel="noreferrer">
              Live site <ArrowUpRight size={15} strokeWidth={1.6} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {notesOpen && (
        <aside className="project-notes" id="project-notes" role="region" aria-label={`${project.title} field notes`}>
          <div className="notes-heading"><span className="mono-label">FIELD NOTES · {project.number}</span>
            <button type="button" className="notes-close" aria-label="Close field notes" onClick={closeNotes}>
              <X size={16} strokeWidth={1.6} aria-hidden="true" />
            </button>
          </div>
          <h3>{project.title}</h3>
          <p>{project.role}</p>
          {project.affiliation && <p className="notes-affiliation">{project.affiliation}</p>}
          <div className="notes-tags"><span>{projectGroup}</span>{project.stack.slice(0, 3).map((item) => <span key={item}>{item}</span>)}</div>
        </aside>
      )}
    </section>
  );
}
