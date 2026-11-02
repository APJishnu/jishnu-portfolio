"use client";

import { motion, useReducedMotion } from "framer-motion";

import { motionEase, motionTiming } from "@/lib/animations/motion-config";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
  const reducedMotion = useReducedMotion();
  const words = text.split(/\s+/).filter(Boolean);

  return (
    <span className={className}>
      <span className="text-reveal-visual" aria-hidden="true">
        {words.map((word, index) => (
          <span key={`${word}-${index}`}>
            {index > 0 ? " " : null}
            <span className="text-reveal-mask">
              <motion.span
                className="text-reveal-word"
                data-motion-reveal
                initial={reducedMotion ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={reducedMotion ? { duration: 0 } : {
                  duration: motionTiming.reveal,
                  delay: delay + index * 0.045,
                  ease: motionEase.editorial,
                }}
              >
                {word}
              </motion.span>
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}
