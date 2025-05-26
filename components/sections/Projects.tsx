"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";
import styles from "./Projects.module.scss";
import Image from "next/image";

interface ProjectsProps {
  inView: boolean;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  links: {
    demo?: string;
    github?: string;
  };
}

export default function Projects({ inView }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects: Project[] = [
    {
      id: "studentlink",
      title: "StudentLink — Academic Resource Portal (Present)",
      description:
        "A centralized academic resource portal with categorized notes, materials, and admin features.",
      image:
        "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Next.js", "MongoDB", "Node.js"],
      category: "fullstack",
      links: {
        demo: "https://studentlink-cs.vercel.app/",
        github: "https://github.com/APJishnu/iptandgptc_cs_frontend",
      },
    },
    {
      id: "cinemagic",
      title: "CineMagic — Movie Booking Platform",
      description:
        "A secure ticket booking platform with real-time seat selection and Razorpay integration.",
      image:
        "https://images.pexels.com/photos/3945316/pexels-photo-3945316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Next.js", "Node.js", "MongoDB", "Razorpay"],
      category: "fullstack",
      links: {
        demo: "https://techfriar-week5-movie-ticket-booking-app.vercel.app/",
        github: "https://github.com/APJishnu/Techfriar_Week5_MovieTicket_Booking_app",
      },
    },
    {
      id: "carrental",
      title: "Car Rental System",
      description:
        "A location-based car rental system using PostgreSQL and GraphQL with search and booking features.",
      image:
        "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Next.js", "PostgreSQL", "GraphQL"],
      category: "fullstack",
      links: {
        github: "https://github.com/APJishnu/Car_rental_application",
      },
    },
    {
      id: "chatapp",
      title: "ChatApp — Real-Time Messaging",
      description:
        "A group messaging application using WebSocket and GraphQL for real-time communication.",
      image:
        "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Next.js", "WebSocket", "GraphQL", "Node.js"],
      category: "fullstack",
      links: {
        github: "https://github.com/APJishnu/Chat_App",
      },
    },
    {
      id: "shoppingcart",
      title: "Shopping Cart — HBS + Mongo App",
      description:
        "A traditional shopping cart app using Express, HBS for views, and MongoDB for data storage.",
      image:
        "https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Node.js", "Express", "MongoDB", "HBS"],
      category: "backend",
      links: {
        github: "https://github.com/APJishnu/Ecommerce-Web-Application",
      },
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      description:
        "This portfolio you are viewing right now — fully responsive with animations and dark mode.",
      image:
        "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Next.js", "Framer Motion", "SCSS", "TypeScript"],
      category: "frontend",
      links: {
        github: "https://github.com/APJishnu",
      },
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
      className={`${styles.projectsSection} py-20 md:py-32 relative overflow-hidden`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work, spanning from frontend interfaces to
              backend systems.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  {["all", "frontend", "backend", "fullstack"].map((cat) => (
                    <TabsTrigger
                      key={cat}
                      value={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={
                        activeCategory === cat
                          ? "bg-primary text-primary-foreground"
                          : ""
                      }
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              {["all", "frontend", "backend", "fullstack"].map((cat) => (
                <TabsContent key={cat} value={cat} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <Button asChild size="lg" className={styles.githubButton}>
              <a
                href="https://github.com/APJishnu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View More on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      className={`overflow-hidden border-border/50 project-card group ${styles.card}`}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          width={500}
          height={300}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover project-image transition-all duration-500"
        />
        <div className="project-overlay absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 flex items-center justify-center p-4">
          <div className="text-center">
            <div className="flex space-x-2 justify-center mb-3">
              {project.links.demo && (
                <Button asChild size="sm" variant="secondary">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" /> Demo
                  </a>
                </Button>
              )}
              {project.links.github && (
                <Button asChild size="sm" variant="outline">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-1" /> Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
