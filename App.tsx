import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ModeKeta AI | Intelligent Automation for Modern Teams",
  description: "ModeKeta AI is an advanced AI automation platform that transforms how teams work. Deploy intelligent agents, automate workflows, and unlock productivity with our cutting-edge AI engine.",
  keywords: "AI, automation, machine learning, SaaS, productivity, workflow automation, intelligent agents",
  authors: [{ name: "ModeKeta AI" }],
  openGraph: {
    title: "ModeKeta AI | Intelligent Automation",
    description: "Transform your workflows with ModeKeta AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-background text-white antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
