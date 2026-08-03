import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atharva Agarwal | Full-Stack & AI Developer",
  description:
    "First-year BCA student at BIT Mesra with hands-on experience building AI-powered full-stack applications and scalable web solutions. Built NewsMind.AI and Lumina.",
  keywords: [
    "Atharva Agarwal",
    "Full-Stack Developer",
    "AI Developer",
    "React",
    "Node.js",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Atharva Agarwal | Full-Stack & AI Developer",
    description:
      "Building intelligent web experiences with React, Node.js, and Generative AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
