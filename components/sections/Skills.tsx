"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import styles from './Skills.module.scss';

interface SkillsProps {
  inView: boolean;
}

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export default function Skills({ inView }: SkillsProps) {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5/CSS3", percentage: 95, color: "bg-orange-500" },
        { name: "JavaScript/TypeScript", percentage: 90, color: "bg-blue-500" },
        { name: "React", percentage: 92, color: "bg-cyan-500" },
        { name: "Next.js", percentage: 96, color: "bg-black" },
        { name: "Tailwind CSS", percentage: 85, color: "bg-teal-500" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", percentage: 90, color: "bg-green-500" },
        { name: "Express", percentage: 88, color: "bg-gray-500" },
        { name: "MongoDB", percentage: 85, color: "bg-green-700" },
        { name: "PostgreSQL", percentage: 80, color: "bg-blue-600" },
        { name: "GraphQL", percentage: 75, color: "bg-pink-600" },
      ],
    },
    {
      title: "Other",
      skills: [
        { name: "Git/GitHub", percentage: 92, color: "bg-orange-600" },
        { name: "Docker", percentage: 78, color: "bg-blue-700" },
        { name: "AWS", percentage: 70, color: "bg-yellow-600" },
        { name: "UI/UX Design", percentage: 85, color: "bg-purple-600" },
        { name: "Testing (Jest)", percentage: 80, color: "bg-green-600" },
      ],
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <div className={`${styles.skillsSection} py-20 md:py-32 relative overflow-hidden`}>
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="gradient-text">Skills</span></h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={category.title}
                variants={itemVariants}
                className={`${styles.skillCard}`}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6 gradient-text">{category.title}</h3>
                    <div className="space-y-6">
                      {category.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
                          </div>
                          <Progress 
                            value={skill.percentage} 
                            className="h-2 bg-secondary" 
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6 text-center">Additional Skills</h3>
                <div className={`${styles.additionalSkills} flex flex-wrap justify-center gap-3`}>
                  {[
                    "Redux", "SASS/SCSS", "Webpack", "Vite", "REST APIs", 
                    "WebSockets", "Firebase", "Netlify", "Vercel", "CI/CD", 
                    "Agile", "Scrum", "Responsive Design", "Performance Optimization",
                    "PWAs", "Accessibility", "SEO", "Analytics", "Figma", "Adobe XD"
                  ].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}