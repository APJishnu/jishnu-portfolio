"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import styles from "./Experience.module.scss";

interface ExperienceProps {
  inView: boolean;
}

interface TimelineItem {
  id: string;
  title: string;
  company?: string;
  institution?: string;
  date: string;
  description: string;
  type: "work" | "education";
}

export default function Experience({ inView }: ExperienceProps) {
  const timelineItems: TimelineItem[] = [
    {
      id: "1",
      title: "Full-Stack Developer",
      company: "Techfriar Technologies",
      date: "Jul 2024 – Present",
      description:
        "Engineer scalable MERN stack applications using Next.js and MongoDB, specializing in immersive 3D web interfaces with Three.js, delivering responsive, accessible, and performance-optimized user experiences.",
      type: "work",
    },
    {
      id: "2",
      title: "MERN Stack Intern",
      company: "Wayone Technologies, Ottapalam",
      date: "Feb 2024 – May 2024",
      description:
        "Developed dynamic MERN stack features, integrating 3D visualizations with Three.js and crafting intuitive, user-focused web applications with robust architecture.",
      type: "work",
    },
    {
      id: "3",
      title: "Cybersecurity Trainee",
      company: "Commissioner Office, Kochi",
      date: "Jan 2023 – Mar 2023",
      description:
        "Mastered cybersecurity fundamentals, conducting vulnerability assessments and implementing secure network protocols to ensure robust system integrity.",
      type: "work",
    },
    {
      id: "4",
      title: "Java Programming Intern",
      company: "Lekshmi Infotech, Ernakulam",
      date: "Apr 2022 – Jun 2022",
      description:
        "Enhanced Java-based applications through object-oriented programming, optimizing code quality and supporting agile development processes.",
      type: "work",
    },
    {
      id: "5",
      title: "Diploma in Computer Engineering",
      institution: "I.P.T & G.P.T.C Shoranur",
      date: "2019 – 2022",
      description:
        "Graduated with 78%, excelling in Web Development, DBMS, OOP, and Networking. Engineered innovative full-stack web projects with a focus on modern technologies.",
      type: "education",
    },
    {
      id: "6",
      title: "Plus Two (Biology Science)",
      institution: "TRK HSS Vaniyamkulam",
      date: "2018 – 2019",
      description:
        "Completed higher secondary education in Biology Science, building a strong foundation in analytical thinking and problem-solving.",
      type: "education",
    },
  ];

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
      className={`${styles.experienceSection} py-20 md:py-32 relative overflow-hidden`}
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
              My <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A timeline of my professional journey and educational background.
            </p>
          </motion.div>

          <div className={`${styles.timeline} relative`}>
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`${styles.timelineItem} ${
                  index % 2 === 0 ? styles.left : styles.right
                }`}
              >
                <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div
                        className={`mr-3 p-2 rounded-full ${
                          item.type === "work"
                            ? "bg-primary/20 text-primary"
                            : "bg-purple-500/20 text-purple-500"
                        }`}
                      >
                        {item.type === "work" ? (
                          <Briefcase className="h-5 w-5" />
                        ) : (
                          <GraduationCap className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.company || item.institution}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center mb-3 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{item.date}</span>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
