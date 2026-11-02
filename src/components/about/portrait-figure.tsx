"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function PortraitFigure() {
  const reducedMotion = useReducedMotion();

  return (
    <figure className="about-portrait">
      <div className="portrait-topline">
        <span className="mono-label">PERSONAL FILE · 01</span>
        <span className="mono-label">KERALA</span>
      </div>
      <div className="portrait-frame">
        <motion.div
          className="portrait-image-reveal"
          initial={false}
          animate={reducedMotion ? undefined : { clipPath: "inset(0 0 0 0)", y: 0 }}
          whileInView={{ clipPath: "inset(0 0 0 0)", y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/jishnu-portrait.webp"
            alt="Jishnu A P, Full-Stack Developer."
            fill
            sizes="(max-width: 680px) calc(100vw - 36px), (max-width: 900px) 40vw, 30vw"
            className="portrait-image"
          />
        </motion.div>
        <span className="portrait-number" aria-hidden="true">01</span>
        <span className="portrait-image-rule" aria-hidden="true" />
      </div>
      <figcaption className="portrait-caption">
        <strong>Jishnu A P</strong>
        <span>Full-Stack Developer</span>
      </figcaption>
    </figure>
  );
}
