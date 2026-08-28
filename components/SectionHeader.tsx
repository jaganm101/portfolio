"use client";

import { motion } from "@/lib/motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  title,
  highlight,
  description,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-14 ${isCenter ? "text-center" : ""}`}
    >
      <p className={`section-label ${isCenter ? "mx-auto" : ""}`}>{label}</p>
      <h2 className="section-heading">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="gradient-text">{highlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className={`section-subheading mt-4 ${isCenter ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
