"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Styles from "./Navbar.module.scss";

import {
  Menu, X, Moon, Sun,
  Home, User, FolderOpen,
  Code2, Briefcase, Mail
} from 'lucide-react';


const navItems = [
  { name: "Home", href: "#home", icon: <Home className="h-4 w-4 mr-2" /> },
  { name: "About", href: "#about", icon: <User className="h-4 w-4 mr-2" /> },
  { name: "Projects", href: "#projects", icon: <FolderOpen className="h-4 w-4 mr-2" /> },
  { name: "Skills", href: "#skills", icon: <Code2 className="h-4 w-4 mr-2" /> },
  { name: "Experience", href: "#experience", icon: <Briefcase className="h-4 w-4 mr-2" /> },
  { name: "Contact", href: "#contact", icon: <Mail className="h-4 w-4 mr-2" /> },
];


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMenuOpen && !(e.target as Element).closest("#mobile-menu")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold tracking-tight gradient-text">
                Jishnu Dev
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium rounded-md hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </nav>

          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mr-2"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              id="mobile-menu-button"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
<motion.div
  id="mobile-menu"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.25 }}
  className={`md:hidden border-0 border-border mx-2 mt-2 rounded-b-3xl overflow-hidden 
    bg-white 
    dark:bg-gradient-to-b dark:from-black dark:via-blue-150 dark:to-blue-800
  `}
>
  <div className="px-4 pt-4 pb-6 space-y-2">
    {navItems.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        onClick={() => setIsMenuOpen(false)}
        className="flex items-center px-4 py-2 text-base font-medium rounded-md text-foreground hover:bg-muted transition-colors"
      >
        {item.icon}
        {item.name}
      </Link>
    ))}
  </div>
</motion.div>




        )}
      </AnimatePresence>
    </header>
  );
}
