import type { Variants } from "framer-motion";

import { motionEase, motionTiming } from "@/lib/animations/motion-config";

export const revealUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, clipPath: "inset(0 0 10% 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0 0)",
    transition: { duration: motionTiming.reveal, ease: motionEase.editorial },
  },
};

export const imageRevealVariants: Variants = {
  hidden: { clipPath: "inset(0 0 16% 0)", y: 18, scale: 1.025 },
  visible: {
    clipPath: "inset(0 0 0 0)",
    y: 0,
    scale: 1,
    transition: { duration: motionTiming.image, ease: motionEase.editorial },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: motionTiming.stagger, delayChildren: 0.08 },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 9 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTiming.quick, ease: motionEase.editorial },
  },
};
