import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Jishnu A P | Full-Stack Developer Portfolio',
  description: 'Hi, I’m Jishnu — a full-stack developer specializing in building modern, scalable web applications using the MERN stack.',
  keywords: ['Jishnu', 'Full-Stack Developer', 'Portfolio', 'Next.js', 'React', 'MongoDB', 'TypeScript', 'Projects', 'Resume'],
  icons: {
    icon: '/personal/bat.png',
  },
  openGraph: {
    title: 'Jishnu A P | Full-Stack Developer Portfolio',
    description: 'Showcasing projects, skills, and experience as a MERN-stack developer.',
    url: 'https://your-portfolio-domain.com',
    siteName: 'Jishnu Portfolio',
    images: [
      {
        url: '/og-image.png', // optional: add an OG image
        width: 1200,
        height: 630,
        alt: 'Jishnu A P Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jishnu A P | Full-Stack Developer',
    description: 'Explore my portfolio to see my skills and featured projects.',
    creator: '@your_twitter_handle', // optional
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
