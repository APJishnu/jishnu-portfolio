import { Download } from "lucide-react";

import { profile } from "@/data/profile";

type ResumeDownloadLinkProps = {
  variant?: "compact" | "prominent" | "text";
  label?: string;
};

export function ResumeDownloadLink({ variant = "text", label }: ResumeDownloadLinkProps) {
  const text = label ?? (variant === "prominent" ? "Download my resume" : variant === "compact" ? "Resume" : "Download resume");

  return (
    <a
      className={`resume-link resume-link-${variant}`}
      href={profile.resume.href}
      download={profile.resume.filename}
      aria-label={`Download ${profile.name}’s resume as a PDF`}
    >
      <span>{text}</span>
      <Download size={variant === "compact" ? 14 : 16} strokeWidth={1.7} aria-hidden="true" />
    </a>
  );
}
