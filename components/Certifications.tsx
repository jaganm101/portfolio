"use client";

import { MotionSection, motion } from "@/lib/motion";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <MotionSection
      id="certifications"
      className="section-padding max-w-[1100px] mx-auto"
    >
      <h2 className="section-title">
        <span>#</span>certifications
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="card p-5"
          >
            <p className="text-accent text-xs mb-2">{cert.year}</p>
            <h3 className="text-primary text-sm font-medium mb-1 leading-snug">
              {cert.name}
            </h3>
            <p className="text-muted text-xs mb-3">{cert.organization}</p>
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-xs hover:underline"
              >
                View credential →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </MotionSection>
  );
}
