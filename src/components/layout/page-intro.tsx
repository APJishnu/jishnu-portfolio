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
        <h1>{title}</h1>
      </div>
      <p className="page-intro-description">{description}</p>
    </section>
  );
}
