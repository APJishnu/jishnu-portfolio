import type { Project } from "@/data/projects";

function RevaloStudy() {
  return (
    <div className="study-layout study-revalo">
      <div className="study-revalo-title">
        <span className="mono-label">VALUE / INPUTS</span>
        <strong>From vehicle<br />to valuation.</strong>
        <span className="study-index">R—01</span>
      </div>
      <div className="study-revalo-diagram">
        <div className="study-vehicle-classes">
          <span className="mono-label">CURRENT VALUATION</span>
          <div><b>01</b><span>Cars</span></div>
          <p className="study-future-scope">More vehicle categories are in development.</p>
        </div>
        <div className="study-input-rail">
          <span className="mono-label">VALUATION INPUTS</span>
          <span>Model &amp; year</span><span>Mileage</span><span>Condition</span><span>Ownership</span><span>City &amp; region</span>
        </div>
        <div className="study-estimate-mark" aria-hidden="true">
          <span className="estimate-ring ring-one" /><span className="estimate-ring ring-two" /><span className="estimate-dot" />
          <span className="mono-label">ESTIMATE</span>
        </div>
      </div>
      <div className="study-revalo-band"><span>MULTI-STEP VALUATION FLOW</span><span>REVALO / FIELD STUDY</span></div>
    </div>
  );
}

function VoteFriarStudy() {
  return (
    <div className="study-layout study-votefriar">
      <div className="study-vote-title">
        <span className="mono-label">A VOTE IN MOTION</span>
        <strong>Polling with<br />live results.</strong>
        <span className="mono-label">CONFIGURABLE WORKFLOWS / LIVE RESULTS</span>
      </div>
      <div className="study-vote-field" aria-hidden="true">
        <span className="vote-orbit orbit-a" /><span className="vote-orbit orbit-b" /><span className="vote-orbit orbit-c" />
        <span className="vote-signal signal-a" /><span className="vote-signal signal-b" /><span className="vote-signal signal-c" />
        <span className="vote-axis" />
      </div>
      <div className="study-vote-flow">
        <div><b>01</b><span>Workflow</span></div><span className="flow-line" />
        <div><b>02</b><span>Vote</span></div><span className="flow-line" />
        <div><b>03</b><span>Result view</span></div>
      </div>
      <div className="study-vote-caption"><span>SERVER-SENT EVENTS</span><span>COMPANY PROJECT / TECHFRIAR</span></div>
    </div>
  );
}

function OkinawaStudy() {
  return (
    <div className="study-layout study-okinawa">
      <div className="study-okinawa-title">
        <span className="mono-label">CONTENT / ADMIN</span>
        <strong>Content,<br />ready to share.</strong>
        <span>Frontend contribution · JIIXEL ARC</span>
      </div>
      <div className="study-content-map">
        <div className="content-column content-column-main">
          <span className="content-rule" /><span className="content-rule short" />
          <div className="content-image-block"><span>MEDIA</span><i /><i /><i /></div>
          <span className="content-rule" /><span className="content-rule medium" />
        </div>
        <div className="content-column content-column-side">
          <div className="content-type-mark">O</div><span className="content-rule short" /><span className="content-rule" />
          <div className="content-orange-block" />
        </div>
        <div className="content-stage">01 — WRITE<br />02 — EDIT<br />03 — SHARE</div>
      </div>
      <div className="study-okinawa-caption"><span>CONTENT SHARING PLATFORM</span><span>ADMIN FRONTEND / COMPANY PROJECT</span></div>
    </div>
  );
}

function CineMagicStudy() {
  return (
    <div className="study-layout study-cinemagic">
      <div className="study-cine-title">
        <span className="mono-label">A SEAT / A STORY</span>
        <strong>Browse.<br />Select.<br />Book.</strong>
        <span>Movie ticket booking platform</span>
      </div>
      <div className="study-cinema-stage">
        <div className="cinema-screen" />
        <div className="cinema-seats cinema-seats-one"><i /><i /><i /><i /><i /><i /><i /><i /></div>
        <div className="cinema-seats cinema-seats-two"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
        <div className="cinema-seats cinema-seats-three"><i /><i /><i /><i /><i /><i /><i /><i /></div>
        <span className="mono-label cinema-label">SEAT SELECTION</span>
      </div>
      <div className="study-cine-flow"><span>FILM</span><b>→</b><span>SEAT</span><b>→</b><span>BOOKING</span><b>→</b><span>PAYMENT</span></div>
      <div className="study-cine-caption"><span>RAZORPAY / JWT</span><span>PROJECT DETAILS FROM RESUME</span></div>
    </div>
  );
}

const studies = {
  revalo: RevaloStudy,
  votefriar: VoteFriarStudy,
  okinawa: OkinawaStudy,
  cinemagic: CineMagicStudy,
} as const;

interface ProjectArtworkProps {
  project: Project;
}

export function ProjectArtwork({ project }: ProjectArtworkProps) {
  const Study = studies[project.visual];

  return (
    <figure role="img" className={`project-artwork artwork-${project.visual}`} aria-label={`${project.title}: editorial study composed from documented project details. It is not a screenshot.`}>
      <Study />
      <figcaption className="artwork-disclosure">Editorial study · composed from documented project details</figcaption>
    </figure>
  );
}
