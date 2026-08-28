"use client";

import { MotionSection, motion } from "@/lib/motion";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <MotionSection id="experience" className="section-padding max-w-[1100px] mx-auto">
      <h2 className="section-title">
        <span>#</span>experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="box-border p-6 md:p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
              <div>
                <h3 className="text-primary text-lg font-semibold">{exp.title}</h3>
                <p className="text-accent text-sm mt-1">{exp.company}</p>
              </div>
              <p className="text-muted text-xs sm:text-sm shrink-0">
                {exp.period} | {exp.location}
              </p>
            </div>

            <p className="text-muted text-sm mb-5 leading-relaxed">{exp.description}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-primary text-xs mb-3">// responsibilities</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((item) => (
                    <li key={item} className="flex gap-2 text-muted text-xs sm:text-sm">
                      <span className="text-accent shrink-0">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-primary text-xs mb-3">// technologies</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </MotionSection>
  );
}
