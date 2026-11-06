import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, Inter, JetBrains_Mono, Bebas_Neue, Caveat } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { AmbientCanvas } from "@/components/AmbientCanvas";
import { NavigationDock } from "@/components/NavigationDock";
import { Footer } from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "Korikana Sai Praneeth — AI & Software Developer | PRANEETH.AI",
  description:
    "Elite AI Systems Architect & Software Developer Portfolio for Korikana Sai Praneeth. Vibe Coder & AIML student at Sri Sivani College of Engineering. Building intelligent software with AI, automation, and real-world engineering.",
  keywords: [
    "Korikana Sai Praneeth",
    "PRANEETH.AI",
    "AI Systems Architect",
    "Vibe Coder",
    "AIML Engineer",
    "Autonomous Agents",
    "Next.js",
    "FastAPI",
    "AgriSahay AI",
    "STUDENT360",
    "Guardian AI",
  ],
  authors: [{ name: "Korikana Sai Praneeth", url: "https://github.com/korikanasaipraneeth-svg" }],
  creator: "Korikana Sai Praneeth",
  openGraph: {
    title: "Korikana Sai Praneeth — AI & Software Developer",
    description:
      "I build intelligent software experiences by combining AI, engineering, automation and creative problem-solving.",
    url: "https://praneeth.ai",
    siteName: "PRANEETH.AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Korikana Sai Praneeth — AI & Software Developer",
    description:
      "I build intelligent software experiences by combining AI, engineering, automation and creative problem-solving.",
    creator: "@korikanasa99534",
  },
  icons: {
    icon: "/icon.svg",
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
