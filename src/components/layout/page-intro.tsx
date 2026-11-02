import { Reveal } from "@/components/animations/reveal";
import { TextReveal } from "@/components/animations/text-reveal";

interface PageIntroProps {
  title: string;
  description: string;
  meta?: string;
}

export function PageIntro({ title, description, meta }: PageIntroProps) {
  return (
    <section className="page-intro">
      <div className="page-intro-main">
        <p className="mono-label page-intro-meta">{meta ?? "JISHNU A P · FULL-STACK DEVELOPER"}</p>
        <h1 aria-label={title}><TextReveal text={title} /></h1>
      </div>
      <Reveal className="page-intro-description-reveal" delay={0.1}>
        <p className="page-intro-description">{description}</p>
      </Reveal>
    </section>
  );
}
