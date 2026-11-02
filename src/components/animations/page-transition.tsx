"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { motionTransition } from "@/lib/animations/motion-config";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const hasMounted = useRef(false);

  useEffect(() => {
    hasMounted.current = true;
  }, []);

  return (
    <motion.div
      key={pathname}
      className="page-transition"
      data-motion-reveal
      initial={hasMounted.current && !reducedMotion ? { opacity: 0.86, y: 7 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={reducedMotion ? { duration: 0 } : motionTransition.page}
    >
      {children}
    </motion.div>
  );
}
