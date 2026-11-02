import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { profile } from "@/data/profile";
import { routes } from "@/lib/routes";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-primary">
        <p className="footer-invitation">Good work starts with a conversation.</p>
        <a className="footer-email" href={`mailto:${profile.email}`}>
          {profile.email}<ArrowUpRight size={18} strokeWidth={1.6} aria-hidden="true" />
        </a>
      </div>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <nav aria-label="Footer links">
          <Link href={routes.work}>Work</Link>
          <a href={profile.resume.href} download={profile.resume.filename}>Resume</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </nav>
        <span>{profile.location}</span>
      </div>
    </footer>
  );
}
