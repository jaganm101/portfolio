"use client";

import Image from "next/image";
import { MotionSection, motion } from "@/lib/motion";
import { DotGrid } from "@/components/Decorations";
import { aboutContent, education, personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <MotionSection id="about" className="section-padding max-w-[1100px] mx-auto">
      <h2 className="section-title">
        <span>#</span>about-me
      </h2>

      <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto lg:mx-0"
        >
          <DotGrid className="absolute -top-3 -left-3" />
          <div className="relative aspect-[3/4] w-full max-w-[280px] border border-[#abb2bf33] overflow-hidden">
            <Image
              src={aboutContent.profileImage}
              alt={personalInfo.name}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <div className="space-y-5 text-sm sm:text-base leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {aboutContent.introduction}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {aboutContent.experience}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="box-muted p-5"
          >
            <p className="text-primary text-sm mb-3">{"// Areas of expertise"}</p>
            <ul className="space-y-2">
              {aboutContent.expertise.map((item) => (
                <li key={item} className="flex gap-2 text-muted text-sm">
                  <span className="text-accent shrink-0">&gt;</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {aboutContent.summary}
          </motion.p>

          <motion.a
            href={personalInfo.resumeUrl}
            download
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="btn-outline inline-flex mt-2"
          >
            Open resume !!
          </motion.a>
        </div>
      </div>

      <div className="mt-16">
        <p className="text-primary text-sm mb-6">{"// education"}</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {education.map((item) => (
            <div key={item.degree} className="card p-5">
              <p className="text-accent text-xs mb-2">{item.year}</p>
              <p className="text-primary text-sm font-medium mb-2 leading-snug">
                {item.degree}
              </p>
              <p className="text-muted text-xs">{item.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
