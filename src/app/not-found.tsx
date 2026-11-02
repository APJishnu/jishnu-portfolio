import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="not-found-page">
      <p className="mono-label">FILE NOT FOUND · 404</p>
      <h1>This page isn’t in the index.</h1>
      <p>The address may have changed. Return to the project archive to keep exploring.</p>
      <Link className="text-link" href="/"><ArrowLeft size={15} aria-hidden="true" />Back to the index</Link>
    </section>
  );
}
