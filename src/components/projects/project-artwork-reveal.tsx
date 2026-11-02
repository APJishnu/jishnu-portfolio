"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ProjectArtwork } from "@/components/projects/project-artwork";
import type { Project } from "@/data/projects";
import { imageRevealVariants } from "@/lib/animations/variants";

interface ProjectArtworkRevealProps {
  project: Project;
}

export function ProjectArtworkReveal({ project }: ProjectArtworkRevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="project-artwork-reveal"
      data-motion-reveal
      initial={reducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
      variants={imageRevealVariants}
      transition={reducedMotion ? { duration: 0 } : undefined}
    >
      <ProjectArtwork project={project} />
    </motion.div>
  );
}
