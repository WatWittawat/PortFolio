"use client";

import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

const FuncProject = ({ title, description, tags, imageUrl }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="w-full max-w-[42rem] mx-auto bg-slate-100 border border-slate-200/80 overflow-hidden sm:pr-8 relative sm:min-h-[20rem] hover:bg-slate-200/80 hover:border-cyan-300/40 transition sm:rounded-lg dark:bg-slate-800/60 dark:border-slate-600 dark:hover:bg-slate-700/60 dark:hover:border-cyan-500/30 dark:text-white">
        <div className="pt-4 pb-7 px-4 sm:px-5 sm:pl-10 sm:pr-2 sm:pt-10 w-full sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-100">
            {title}
          </h3>
          <p className="mt-2 leading-relaxed text-slate-600 dark:text-slate-300 flex-1">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-cyan-600/90 px-2.5 py-1 text-[0.65rem] sm:text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:bg-cyan-500/80 dark:text-slate-900"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] h-[18rem] rounded-t-lg shadow-2xl object-cover object-top group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-even:w-[25rem] group-even:h-[18rem] group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
        />
      </section>
    </motion.div>
  );
};

export default FuncProject;
