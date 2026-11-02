"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

import type { ExperienceEntry } from "@/data/experience";

interface ExperienceTimelineProps {
  entries: readonly ExperienceEntry[];
}

function ExperienceEntryView({ item, index, last }: { item: ExperienceEntry; index: number; last: boolean }) {
  const entryRef = useRef<HTMLElement | null>(null);
  const current = useInView(entryRef, { amount: 0.35 });
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      ref={entryRef}
      className={`experience-entry${current ? " is-current" : ""}`}
      initial={reducedMotion ? false : { opacity: 0, y: 18, clipPath: "inset(0 0 12% 0)" }}
      whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, amount: 0.16 }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.62, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="experience-entry-rail">
        <span className="experience-node" aria-hidden="true" />
        <span className="mono-label">0{index + 1}</span>
        {!last && <span className="experience-rail-line" aria-hidden="true" />}
      </div>
      <div className="experience-entry-body">
        <div className="experience-entry-heading">
          <div>
            <p className="mono-label">{item.period} · {item.location}</p>
            <h2>{item.company}</h2>
            <p className="experience-role">{item.title}</p>
          </div>
          <p className="experience-summary">{item.summary}</p>
        </div>

        <Link className="experience-featured-work" href={`/work/${item.featuredWork.slug}`}>
          <span className="mono-label">FEATURED CONTRIBUTION</span>
          <strong>{item.featuredWork.title}</strong>
          <span>{item.featuredWork.description}</span>
          <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
        </Link>

        <ul className="contribution-list experience-priority-list" aria-label={`Selected responsibilities at ${item.company}`}>
          {item.contributions.slice(0, 2).map((contribution) => <li key={contribution}>{contribution}</li>)}
        </ul>

        <details className="experience-details">
          <summary>Full responsibilities and technologies</summary>
          <div className="experience-detail-grid">
            <div>
              <h3 className="mono-label">RESPONSIBILITIES / CONTRIBUTIONS</h3>
              <ul className="contribution-list">
                {item.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
              </ul>
            </div>
            <div className="technology-column">
              <h3 className="mono-label">TECHNOLOGIES</h3>
              <p>{item.technologies.join(" · ")}</p>
              <Link className="text-link" href={`/work/${item.featuredWork.slug}`}>
                {item.featuredWork.title} contribution <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </details>
      </div>
    </motion.article>
  );
}

export function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  return (
    <section className="experience-timeline section-shell" aria-label="Professional timeline">
      {entries.map((item, index) => (
        <ExperienceEntryView key={item.company} item={item} index={index} last={index === entries.length - 1} />
      ))}
    </section>
  );
}
