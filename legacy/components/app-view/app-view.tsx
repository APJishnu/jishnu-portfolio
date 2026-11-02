"use client";

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import CursorGlow from '@/components/ui/CursorGlow';

const HomeView = () => {
  const { scrollY } = useScroll();
  const containerRef = useRef(null);
  
  // Create parallax effect for background elements
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const midgroundY = useTransform(scrollY, [0, 1000], [0, 150]);
  
  // Setup intersection observer for sections
  const [heroRef, heroInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  
  const [experienceRef, experienceInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  
  const [contactRef, contactInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  
  // Update the active section in the URL as user scrolls
  useEffect(() => {
    const sections = [
      { inView: heroInView, id: 'home' },
      { inView: aboutInView, id: 'about' },
      { inView: projectsInView, id: 'projects' },
      { inView: skillsInView, id: 'skills' },
      { inView: experienceInView, id: 'experience' },
      { inView: contactInView, id: 'contact' },
    ];
    
    const activeSection = sections.findLast(section => section.inView);
    
    if (activeSection) {
      window.history.replaceState(null, '', `#${activeSection.id}`);
    }
  }, [heroInView, aboutInView, projectsInView, skillsInView, experienceInView, contactInView]);
  
  return (
    <>
      <CursorGlow />
      
      <div ref={containerRef} className="relative">
        {/* Parallax background elements */}
        <motion.div 
          className="absolute inset-0 opacity-10 pointer-events-none z-0"
          style={{ y: backgroundY }}
        >
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-60 left-10 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl" />
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 opacity-5 pointer-events-none z-0"
          style={{ y: midgroundY }}
        >
          <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-primary/30 blur-2xl" />
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-blue-400/30 blur-2xl" />
        </motion.div>
        
        {/* Main content sections */}
        <section ref={heroRef} id="home">
          <Hero />
        </section>
        
        <section ref={aboutRef} id="about">
          <About inView={aboutInView} />
        </section>
        
        <section ref={projectsRef} id="projects">
          <Projects inView={projectsInView} />
        </section>
        
        <section ref={skillsRef} id="skills">
          <Skills inView={skillsInView} />
        </section>
        
        <section ref={experienceRef} id="experience">
          <Experience inView={experienceInView} />
        </section>
        
        <section ref={contactRef} id="contact">
          <Contact inView={contactInView} />
        </section>
      </div>
    </>
  );
}

export default HomeView;