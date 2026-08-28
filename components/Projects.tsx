"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { MotionSection, motion as Motion } from "@/lib/motion";
import { projects } from "@/data/portfolio";
import { assetPath } from "@/lib/assetPath";

type Project = (typeof projects)[number];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <>
      <MotionSection id="projects" className="section-padding max-w-[1100px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <h2 className="section-title mb-0">
            <span>#</span>works
          </h2>
          <p className="text-muted text-sm">{"// click on project to learn more"}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <Motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="card group overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedProject(project);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${project.name}`}
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
                  {project.technologies.length > 4 && (
                    <span className="tag text-[10px]">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </Motion.article>
          ))}
        </div>
      </MotionSection>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto card p-6 md:p-8"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-muted hover:text-primary transition-colors"
                aria-label="Close project details"
              >
                <X size={20} />
              </button>

              <p className="text-accent text-xs mb-2">{selectedProject.role}</p>
              <h3
                id="project-modal-title"
                className="text-primary text-lg font-semibold mb-4 pr-8"
              >
                {selectedProject.name}
              </h3>

              <p className="text-muted text-sm leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="box-muted p-5 mb-6">
                <p className="text-primary text-sm mb-3">{"// key contributions"}</p>
                <ul className="space-y-3">
                  {selectedProject.highlights.map((item) => (
                    <li key={item} className="flex gap-2 text-muted text-sm leading-relaxed">
                      <span className="text-accent shrink-0">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-primary text-sm mb-3">{"// tech stack"}</p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="tag text-[10px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
