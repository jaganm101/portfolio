"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DotGrid, PurpleFrame } from "@/components/Decorations";
import { personalInfo, aboutContent, heroQuote } from "@/data/portfolio";
import { assetPath } from "@/lib/assetPath";

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-8 md:pt-28">
      <div className="section-padding max-w-[1100px] mx-auto !py-0">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-[2rem] lg:text-[2.25rem] font-semibold text-primary leading-snug mb-6"
            >
              {personalInfo.name} is a{" "}
              <span className="text-accent">{personalInfo.title}</span> and{" "}
              <span className="text-accent">{personalInfo.subtitle}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted text-sm sm:text-base leading-relaxed max-w-xl mb-8"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="btn-outline"
            >
              Contact me !!
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative order-1 lg:order-2 mx-auto lg:mx-0 w-full max-w-[300px]"
          >
            <DotGrid className="absolute -top-4 -right-4 z-10" />
            <PurpleFrame className="absolute -top-3 -left-3 w-full h-full z-0" />
            <PurpleFrame muted className="absolute -bottom-3 -right-3 w-[80%] h-[80%] z-0" />

            <div className="relative z-10 aspect-square overflow-hidden border border-[#abb2bf33]">
              <Image
                src={assetPath(aboutContent.profileImage)}
                alt={personalInfo.name}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>

            <div className="relative z-10 mt-4 box-border p-3 flex items-center gap-3">
              <span className="w-4 h-4 border border-accent flex items-center justify-center">
                <span className="w-2 h-2 bg-accent" />
              </span>
              <div>
                <p className="text-primary text-xs sm:text-sm">
                  Currently working on{" "}
                  <span className="text-accent">Enterprise Solutions</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="quote-box mt-20 md:mt-28 p-6 md:p-8 max-w-3xl mx-auto"
        >
          <blockquote className="text-primary text-sm sm:text-base italic leading-relaxed">
            &ldquo;{heroQuote.text}&rdquo;
          </blockquote>
          <span className="quote-author">{heroQuote.author}</span>
        </motion.div>
      </div>
    </section>
  );
}
