"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "./Hero.module.scss";
import Image from "next/image";

 const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle parallax effect on mousemove
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } =
        containerRef.current.getBoundingClientRect();

      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      const elements = containerRef.current.querySelectorAll(
        `.${styles.parallaxItem}`
      );
      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.getAttribute("data-speed") || "1");
        element.style.transform = `translate(${x * 30 * speed}px, ${
          y * 30 * speed
        }px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${styles.heroContainer} relative min-h-screen flex items-center justify-center overflow-hidden`}
    >
      {/* Background elements with parallax effect */}
      <div
        className={`${styles.parallaxItem} absolute left-10 top-20 w-64 h-64 rounded-full bg-primary/10 filter blur-3xl opacity-60`}
        data-speed="0.5"
      ></div>
      <div
        className={`${styles.parallaxItem} absolute right-10 bottom-40 w-72 h-72 rounded-full bg-blue-500/10 filter blur-3xl opacity-40`}
        data-speed="0.7"
      ></div>
      <div
        className={`${styles.parallaxItem} absolute right-1/4 top-1/3 w-48 h-48 rounded-full bg-purple-500/10 filter blur-3xl opacity-50`}
        data-speed="0.3"
      ></div>
      <div className={styles.mainContainer}>

      <div className={`container mx-auto px-6 z-10 py-20 md:py-32 ${styles.leftContainer}`}>
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="gradient-text lg:text-6xl">Hello, I&apos;m</span>{" "}
            <br />
            <span className={`${styles.typingText} lg:text-8xl`}>
              Jishnu A P
            </span>
          </motion.h1>

          <motion.div
            className="mb-8 text-xl md:text-2xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>Full-Stack Developer | MERN Stack Specialist</p>
          </motion.div>

          <motion.div
            className="mb-12 max-w-2xl mx-auto text-muted-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>
              Building scalable, secure web apps with Next.js, Node.js, and
              MongoDB. Skilled in RESTful APIs, Razorpay integration, and
              boosting performance by 30%. Passionate about clean code and
              user-centric solutions.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className={`relative overflow-hidden group ${styles.viewWorkButton}`}
            >
              <a href="#projects">
                View My Work
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 transform -translate-x-full animate-shimmer"></span>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
      className={styles.scrollHint}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 1.2,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      <a
        href="#about"
        className="flex items-center justify-center flex-col"
      >
        <span className="text-muted-foreground text-sm mb-2">
          Scroll Down
        </span>
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </a>
    </motion.div>
      </div>

      {/* Place for profile image */}
      <div className={`${styles.rightContainer}w-full flex justify-center mt-12 lg:mt-0 z-10`}>
        <motion.div
          className={`${styles.profileImage} relative`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image
            src="/personal/profile.png"
            alt="Jishnu A P - Full-Stack Developer"
            width={280}
            height={280}
            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-primary/30 shadow-lg"
            priority
          />
        </motion.div>
      </div>
      </div>
    </div>
  );
}

export default Hero;