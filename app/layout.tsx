import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { assetPath } from "@/lib/assetPath";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Jagan M | Senior Software Developer",
  description:
    "Portfolio of Jagan M — Senior Software Developer & Full Stack & Salesforce Specialist.",
  icons: { icon: assetPath("/favicon.svg") },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${firaCode.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}
