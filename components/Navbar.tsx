"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Linkedin, Download } from "lucide-react";
import { navLinks, personalInfo } from "@/data/portfolio";
import { assetPath } from "@/lib/assetPath";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "projects", "about", "skills", "experience", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-[#abb2bf22]"
    >
      <nav className="max-w-[1100px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#home" className="text-primary font-semibold text-lg">
          {personalInfo.name.split(" ")[0]}
        </a>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                <span className="text-accent">#</span>
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={assetPath(personalInfo.resumeUrl)}
            download="Jagan_M_Resume.pdf"
            className="text-accent text-sm hover:opacity-80 inline-flex items-center gap-1"
          >
            <Download size={18} />
            resume
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent text-sm hover:opacity-80"
          >
            <Linkedin size={18} className="inline mr-1" />
            linkedin
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#abb2bf22] bg-background overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3 max-w-[1100px] mx-auto">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block nav-link py-1"
                >
                  <span className="text-accent">#</span>
                  {link.label}
                </a>
              ))}
              <a
                href={assetPath(personalInfo.resumeUrl)}
                download="Jagan_M_Resume.pdf"
                onClick={() => setIsOpen(false)}
                className="block nav-link py-1"
              >
                <span className="text-accent">#</span>
                resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
