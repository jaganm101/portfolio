"use client";

import { MotionSection, motion } from "@/lib/motion";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  return (
    <MotionSection id="skills" className="section-padding max-w-[1100px] mx-auto">
      <h2 className="section-title">
        <span>#</span>skills
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="card p-5"
          >
            <p className="text-primary text-sm mb-4">
              <span className="text-accent">const</span> {category.title.replace(/\s+/g, "")} = [
            </p>
            <div className="flex flex-wrap gap-2 pl-4 mb-3">
              {category.skills.map((skill) => (
                <span key={skill} className="tag-accent">
                  &apos;{skill}&apos;
                </span>
              ))}
            </div>
            <p className="text-primary text-sm">];</p>
          </motion.div>
        ))}
      </div>
    </MotionSection>
  );
}
