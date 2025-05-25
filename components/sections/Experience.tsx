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
        "Built scalable full-stack applications using Next.js, Node.js, and MongoDB. Integrated Razorpay for payments, optimized API performance, and collaborated with the UI/UX team to ensure responsive and accessible designs.",
      type: "work",
    },
    {
      id: "2",
      title: "MERN Stack Intern",
      company: "Wayone Technologies",
      date: "Feb 2024 – May 2024",
      description:
        "Completed a hands-on internship focused on the MERN stack. Built end-to-end features, improved project structure and API design, and learned industry best practices in full-stack development.",
      type: "work",
    },
    {
      id: "3",
      title: "Cybersecurity Trainee",
      company: "Commissioner Office, Kochi",
      date: "Jan 2023 – Mar 2023",
      description:
        "Hands-on experience in cybersecurity practices, including vulnerability assessments and threat mitigation strategies. Participated in real-world workshops on network security.",
      type: "work",
    },
    {
      id: "4",
      title: "Java Programming Intern",
      company: "Lekshmi Infotech",
      date: "Apr 2022 – Jun 2022",
      description:
        "Learned object-oriented programming and assisted in debugging Java-based applications. Supported senior developers in software testing and analysis.",
      type: "work",
    },
    {
      id: "5",
      title: "Diploma in Computer Engineering",
      institution: "I.P.T & G.P.T.C Shoranur",
      date: "2021 – 2024",
      description:
        "Graduated with 78%. Focused on Web Development, DBMS, Object-Oriented Programming, and Networking. Created several full-stack web applications as academic projects.",
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
