import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';
import styles from "./Footer.module.scss"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className={`container mx-auto px-4 py-12 ${styles.footerContainer}`}>
        <div className={`flex flex-col md:grid md:grid-cols-3 gap-12 ${styles.footerContent}`}>
          {/* Left: Intro & Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Portfolio</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              A personal portfolio showcasing my projects, skills, and experience
              as a full-stack web developer.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/APJishnu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/jishnu-ap-335184308"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:apjishnu23@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Middle: Navigation */}
          <div className={styles.footerLinks}>
            <ul className="space-y-2 text-muted-foreground">
            <h3 className="text-lg font-bold mb-4">Links</h3>

              {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link}`}
                    className="hover:text-primary transition-colors capitalize"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact Info */}
     <div className={styles.footerLinks}>
      <div>
            <address className="not-italic text-muted-foreground mb-4 space-y-2">
            <h3 className="text-lg font-bold mb-4">Contact</h3>

              <p>Email: <a href="mailto:apjishnu23@gmail.com" className="hover:text-primary">apjishnu23@gmail.com</a></p>
              <p>Location: Ottapalam, Palakkad, Kerala</p>
            </address>
            <Link
              href="/resume/Jishnu_AP_Tech_Resume_2025.pdf"
              className="inline-flex items-center text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
              <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 mt-10 pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Jishnu A P. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
