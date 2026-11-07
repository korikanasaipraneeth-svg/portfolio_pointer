import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Space_Grotesk, Inter, JetBrains_Mono, Bebas_Neue, Caveat } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { AmbientCanvas } from "@/components/AmbientCanvas";
import { NavigationDock } from "@/components/NavigationDock";
import { Footer } from "@/components/Footer";
import { VisitorTracker } from "@/components/VisitorTracker";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://praneeth.ai"),
  title: "Korikana Sai Praneeth — AI & Software Developer | PRANEETH.AI",
  description:
    "Elite AI Systems Architect & Software Developer Portfolio for Korikana Sai Praneeth. Vibe Coder & AIML student at Sri Sivani College of Engineering. Building intelligent software with AI, automation, and real-world engineering.",
  keywords: [
    "Korikana Sai Praneeth",
    "PRANEETH.AI",
    "AI Systems Architect",
    "Vibe Coder",
    "AIML Engineer",
    "Full-Stack Development",
    "Next.js",
    "FastAPI",
    "AgriSahay AI",
    "STUDENT360",
    "Guardian AI",
  ],
  authors: [{ name: "Korikana Sai Praneeth", url: "https://github.com/korikanasaipraneeth-svg" }],
  creator: "Korikana Sai Praneeth",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Korikana Sai Praneeth — AI & Software Developer",
    description:
      "I build intelligent software experiences by combining AI, engineering, automation and creative problem-solving.",
    url: "https://praneeth.ai",
    siteName: "PRANEETH.AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/praneeth-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Korikana Sai Praneeth — AI & Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Korikana Sai Praneeth — AI & Software Developer",
    description:
      "I build intelligent software experiences by combining AI, engineering, automation and creative problem-solving.",
    creator: "@korikanasa99534",
    images: ["/praneeth-portrait.jpg"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${bebasNeue.variable} ${caveat.variable} dark`}
    >
      <body className="min-h-screen bg-background text-text-primary selection:bg-accent-red selection:text-white font-sans antialiased relative">
        <VisitorTracker />
        <CustomCursor />
        <AmbientCanvas />
        <NavigationDock />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Script src="/swarm-init.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
