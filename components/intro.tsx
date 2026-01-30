"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hook";
import { useActiveSectionContext } from "@/context/active-section-context";
import Watphoto from "@/public/Watphoto.jpeg";
import Terminal from "./terminal";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="text-center w-full max-w-[50rem] scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
          >
            <Image
              src={Watphoto}
              alt="Wittawat Photo"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] object-cover border-white shadow-xl ring-2 ring-cyan-500/20 dark:ring-cyan-400/30"
            ></Image>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
              className="absolute text-3xl bottom-0 right-0 "
            >
              👋
            </motion.span>
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-xl sm:text-2xl md:text-3xl font-normal !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <span className="font-bold">Hello, I'm Wittawat</span>, a Software
        Engineer with nearly a year of experience. My focus is{" "}
        <span className="underline decoration-cyan-500 dark:decoration-cyan-400">
          backend development and DevOps
        </span>
        —I enjoy building scalable, cloud-native systems. I'm looking for
        opportunities to grow as a{" "}
        <span className="font-medium">Backend or DevOps engineer</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-cyan-600 flex text-white px-7 py-3 gap-2 items-center rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-cyan-700 active:scale-105 transition dark:bg-cyan-500 dark:hover:bg-cyan-600"
          onClick={() => {
            setActiveSection("Contact");
            setTimeLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"></BsArrowRight>
        </Link>
        <a
          className="group bg-white flex px-7 py-3 gap-2 items-center rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-slate-200 dark:bg-slate-800/50 dark:border-slate-600 dark:hover:bg-slate-700/50"
          href="/CV.pdf"
          download={true}
        >
          Dowload CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition"></HiDownload>
        </a>
        <a
          className="bg-white flex p-4 gap-2 items-center rounded-full text-slate-600 text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-cyan-600 active:scale-105 transition cursor-pointer border border-slate-200 dark:bg-slate-800/50 dark:border-slate-600 dark:text-slate-300 dark:hover:text-cyan-400"
          href="https://github.com/WatWittawat"
          target="_blank"
        >
          <FaGithubSquare></FaGithubSquare>
        </a>
      </motion.div>
      <Terminal />
    </section>
  );
}
