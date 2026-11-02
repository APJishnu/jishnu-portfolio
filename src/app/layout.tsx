import type { Metadata, Viewport } from "next";
import "@/app/globals.css";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageTransition } from "@/components/animations/page-transition";
import { ScrollProgress } from "@/components/animations/scroll-progress";

export const metadata: Metadata = {
  title: {
    default: "Jishnu A P — Full-Stack Developer",
    template: "%s — Jishnu A P",
  },
  description:
    "Full-Stack Developer working across frontend experiences, backend systems, and real-world applications. Explore Jishnu A P's projects and experience.",
  openGraph: {
    title: "Jishnu A P — Full-Stack Developer",
    description:
      "A project-led archive of full-stack development work, experience, and engineering practice.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jishnu A P — Full-Stack Developer",
    description:
      "A project-led archive of full-stack development work, experience, and engineering practice.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F3F1EB",
  colorScheme: "light dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="paper" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <ScrollProgress />
        <SiteHeader />
        <main id="main-content"><PageTransition>{children}</PageTransition></main>
        <SiteFooter />
      </body>
    </html>
  );
}
