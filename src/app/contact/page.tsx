import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import { ResumeDownloadLink } from "@/components/common/resume-download-link";
import { PageIntro } from "@/components/layout/page-intro";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Jishnu A P about a full-stack development opportunity.",
};

export default function ContactPage() {
  const [emailUser, emailHost] = profile.email.split("@");

  return (
    <>
      <PageIntro
        title="Let’s talk about an opportunity."
        description="If you’re hiring for a full-stack development role or want to discuss a project, the best way to reach me is by email."
        meta="CONTACT · JISHNU A P"
      />
      <section className="contact-page section-shell">
        <div className="contact-primary">
          <span className="contact-icon"><Mail size={19} strokeWidth={1.5} aria-hidden="true" /></span>
          <p className="mono-label">EMAIL</p>
          <a className="contact-email" href={`mailto:${profile.email}`} aria-label={profile.email}>
            <span className="contact-email-address">{emailUser}@<wbr />{emailHost}</span>
            <ArrowUpRight size={19} strokeWidth={1.6} aria-hidden="true" />
          </a>
          <p>Messages about full-stack development opportunities are welcome.</p>
        </div>
        <div className="contact-secondary">
          <p className="mono-label">PROFILES</p>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} strokeWidth={1.5} aria-hidden="true" /><span>LinkedIn</span><ArrowUpRight size={15} aria-hidden="true" /></a>
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} strokeWidth={1.5} aria-hidden="true" /><span>GitHub</span><ArrowUpRight size={15} aria-hidden="true" /></a>
          <ResumeDownloadLink variant="text" label="Download resume (PDF)" />
          <p className="contact-location">{profile.location}</p>
        </div>
      </section>
      <section className="contact-close section-shell">
        <span className="mono-label">A GOOD CONVERSATION STARTS SOMEWHERE</span>
        <p>Tell me what you’re building and where the role fits.</p>
      </section>
    </>
  );
}
