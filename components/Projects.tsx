"use client";

import Image from "next/image";
import { MotionSection, motion } from "@/lib/motion";
import { projects } from "@/data/portfolio";
import { assetPath } from "@/lib/assetPath";

export default function Projects() {
  return (
    <MotionSection id="projects" className="section-padding max-w-[1100px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <h2 className="section-title mb-0">
          <span>#</span>works
        </h2>
        <p className="text-muted text-sm">{"// click on project to learn more"}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="card group overflow-hidden"
          >
            <div className="relative h-44 border-b border-[#abb2bf33] overflow-hidden">
              <Image
                src={assetPath(project.image)}
                alt={project.name}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <span className="absolute top-3 left-3 tag-accent text-[10px]">
                Project {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-primary text-sm font-semibold mb-2 group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              <p className="text-muted text-xs leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="tag text-[10px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </MotionSection>
  );
}
