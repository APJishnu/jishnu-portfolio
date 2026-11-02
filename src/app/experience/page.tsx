import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { OpportunityBand } from "@/components/layout/opportunity-band";
import { PageIntro } from "@/components/layout/page-intro";
import { experience } from "@/data/experience";
import { routes } from "@/lib/routes";

export const metadata = {
  title: "Experience",
  description: "Professional experience and project contributions at JIIXEL ARC and Techfriar Technologies.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageIntro
        title="Experience, in context."
        description="Full-stack work across web applications, company products, APIs and the details that connect them."
      />
      <ExperienceTimeline entries={experience} />
      <OpportunityBand compact />
    </>
  );
}
