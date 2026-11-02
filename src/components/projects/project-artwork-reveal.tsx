"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ProjectArtwork } from "@/components/projects/project-artwork";
import type { Project } from "@/data/projects";

interface ProjectArtworkRevealProps {
  project: Project;
}

export function ProjectArtworkReveal({ project }: ProjectArtworkRevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="project-artwork-reveal"
      initial={reducedMotion ? false : { clipPath: "inset(0 0 16% 0)", y: 18 }}
      whileInView={{ clipPath: "inset(0 0 0 0)", y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      <ProjectArtwork project={project} />
    </motion.div>
  );
}
