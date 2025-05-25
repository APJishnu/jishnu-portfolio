"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, User, GraduationCap, Briefcase, Heart } from "lucide-react";
import styles from "./About.module.scss";
import Image from "next/image";

interface AboutProps {
  inView: boolean;
}

export default function About({ inView }: AboutProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      className={`${styles.aboutSection} py-20 md:py-32 relative overflow-hidden`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A passionate full-stack developer building high-performance,
              secure, and scalable web applications. Here&apos;s a closer look
              at my background.
            </p>
          </motion.div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ${styles.aboutContent}`}
          >
            <motion.div
              variants={itemVariants}
              className={`${styles.aboutImageContainer} relative`}
            >
              <div
                className={`${styles.aboutImageWrapper} relative w-full flex justify-center items-center min-h-[300px]`}
              >
                <div className={`${styles.imageGlowBackground}`} />
                <Image
                  width={600}
                  height={400}
                  src="/personal/profile-5.png"
                  alt="About"
                  className="object-contain w-full h-full z-10"
                  loading="lazy"
                />
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <User className="mr-2 h-5 w-5 text-primary" />
                Who I Am
              </h3>
              <p className="text-muted-foreground mb-4 text-justify">
                I’m Jishnu A P, a results-driven full-stack developer proficient
                in the MERN stack. I specialize in building responsive, secure,
                and performance-optimized web apps.
              </p>
              <p className="text-muted-foreground mb-6 text-justify">
                I currently work at Techfriar Technologies where I build
                full-stack apps with Next.js, Node.js, and MongoDB. I’ve
                integrated Razorpay for secure payments and improved API speed
                by 30%. I’m passionate about clean code, open-source
                contributions, and user-centric designs.
              </p>

              <Button asChild className={`self-start ${styles.downloadButton}`}>
                <a href="/resume/Jishnu_AP_Tech_Resume_2025.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-center">
              Personal Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden group hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-5 w-5 text-primary mr-2" />
                    <h4 className="font-bold">Education</h4>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>
                      Diploma in Computer Engineering - IPT & GPTC Shoranur
                      (78%)
                    </li>
                    <li>Focused on Web Dev, DBMS, OOPs, and Networking</li>
                    <li>Cybersecurity Training - Commissioner Office, Kochi</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden group hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Briefcase className="h-5 w-5 text-primary mr-2" />
                    <h4 className="font-bold">Experience</h4>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>Full-Stack Developer – Techfriar (2024–Present)</li>
                    <li>Cybersecurity Trainee – Commissioner Office, Kochi</li>
                    <li>Java Intern – Lekshmi Infotech, Ernakulam</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden group hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Heart className="h-5 w-5 text-primary mr-2" />
                    <h4 className="font-bold">Interests</h4>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>Open Source Development</li>
                    <li>UI/UX Design</li>
                    <li>Cybersecurity & Web Performance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
