"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

import { revealUpVariants } from "@/lib/animations/variants";
import { motionEase, motionTiming } from "@/lib/animations/motion-config";

interface RevealProps extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport" | "variants"> {
  delay?: number;
  amount?: number;
}

export function Reveal({ children, delay = 0, amount = 0.12, ...props }: RevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      {...props}
      data-motion-reveal
      initial={reducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={revealUpVariants}
      transition={reducedMotion ? { duration: 0 } : { duration: motionTiming.reveal, delay, ease: motionEase.editorial }}
    >
      {children}
    </motion.div>
  );
}
