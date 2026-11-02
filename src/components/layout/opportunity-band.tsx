import { ArrowUpRight } from "lucide-react";

import { profile } from "@/data/profile";

interface OpportunityBandProps {
  compact?: boolean;
}

export function OpportunityBand({ compact = false }: OpportunityBandProps) {
  return (
    <section className={`opportunity-band${compact ? " opportunity-band-compact" : ""}`}>
      <div>
        <p className="mono-label">CONTACT · {profile.location.toUpperCase()}</p>
        <h2>Let’s talk about<br className="desktop-break" /> an opportunity.</h2>
      </div>
      <a className="opportunity-link" href={`mailto:${profile.email}`}>
        <span>Get in touch</span><ArrowUpRight size={19} strokeWidth={1.6} aria-hidden="true" />
      </a>
    </section>
  );
}
