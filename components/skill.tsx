"use client";

import React from "react";
import SectionHeader from "./section-header";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hook";
import { motion } from "framer-motion";

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 w-full max-w-[52rem] scroll-mt-28 text-center sm:mb-40 px-1"
    >
      <SectionHeader>My skills</SectionHeader>
      <ul className="flex flex-wrap justify-center gap-2 text-base sm:text-lg text-slate-800 dark:text-slate-200">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-slate-200 rounded-xl px-3 py-2 sm:px-5 sm:py-3 dark:bg-slate-800/80 dark:border-slate-600 dark:text-slate-200 hover:border-cyan-400/50 hover:shadow-md hover:shadow-cyan-500/5 dark:hover:border-cyan-500/50 transition"
            key={index}
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
