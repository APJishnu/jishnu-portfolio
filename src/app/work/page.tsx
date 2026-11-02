import { ProjectBrowser } from "@/components/projects/project-browser";

export const metadata = {
  title: "Work archive",
  description: "Selected independent products and company project contributions by Jishnu A P.",
};

export default function WorkPage() {
  return (
    <>
      <div className="top-index-strip secondary-strip">
        <div><span className="status-dot" aria-hidden="true" />JISHNU A P · WORK ARCHIVE</div>
        <div className="strip-center">4 PROJECTS · 3 WORK CONTEXTS</div>
        <div>INDEX 01—04</div>
      </div>
      <ProjectBrowser variant="archive" />
      <section className="archive-note section-shell">
        <p className="mono-label">READING THE INDEX</p>
        <p>Revalo is independent product work. VoteFriar and Okinawa Navi are company projects; each case study names Jishnu’s recorded role. CineMagic is a personal portfolio project; its dates are not specified.</p>
      </section>
    </>
  );
}
