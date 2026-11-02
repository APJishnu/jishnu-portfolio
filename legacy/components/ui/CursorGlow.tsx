"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Only enable on desktop devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;
    
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <motion.div
      className="cursor-glow"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 500,
        restDelta: 0.001
      }}
    />
  );
}