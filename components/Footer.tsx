"use client";

import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-[#abb2bf22] py-8">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-primary">
          {personalInfo.name.split(" ")[0]}
          <span className="text-accent"> © {new Date().getFullYear()}</span>
        </p>
        <p className="text-muted text-xs">{personalInfo.location}</p>
      </div>
    </footer>
  );
}
