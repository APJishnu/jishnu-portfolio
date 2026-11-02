"use client";

import { ArrowUpRight } from "lucide-react";

import { profile } from "@/data/profile";
import { motion, useReducedMotion } from "framer-motion";
import { motionTiming, motionEase } from "@/lib/animations/motion-config";

interface OpportunityBandProps {
  compact?: boolean;
}

export function OpportunityBand({ compact = false }: OpportunityBandProps) {
  const reducedMotion = useReducedMotion();
  return (
    <section className={`opportunity-band${compact ? " opportunity-band-compact" : ""}`}>
      <div>
        <p className="mono-label">CONTACT · {profile.location.toUpperCase()}</p>
        <h2>Let’s talk about<br className="desktop-break" /> an opportunity.</h2>
      </div>
      <motion.a className="opportunity-link" href={`mailto:${profile.email}`} whileHover={reducedMotion ? undefined : { x: 5 }} whileTap={reducedMotion ? undefined : { scale: 0.98 }} transition={{ duration: motionTiming.quick, ease: motionEase.editorial }}>
        <span>Get in touch</span><ArrowUpRight size={19} strokeWidth={1.6} aria-hidden="true" />
      </motion.a>
    </section>
  );
}
