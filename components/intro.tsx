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

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="text-center max-w-[50rem] scroll-mt-[100rem]"
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
              className="h-24 w-24 rounded-full border-[0.35rem] object-cover border-white shadow-xl"
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
        className="mb-10 mt-4 px-4 text-2xl font-normall !lead-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <span className="font-bold">Hello, I'm Wittawat</span> ,a university
        student with a passion for{" "}
        <span className="underline">
          Fullstack development, graduating in March.
        </span>{" "}
        Trained in{" "}
        <span className="italic">
          Go, Flutter, React, React Native, and Tailwind CSS
        </span>
        , I have primarily worked in front-end development, but recently, I’ve
        developed a strong interest in back-end development and am eager to
        transition into this field. Currently, I’m deeply focused on learning
        Golang to strengthen my back-end skills, and I am actively seeking
        opportunities to work as a back-end developer.
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
          className="group bg-gray-900 flex text-white px-7 py-3 gap-2 items-center rounded-full outline-none focus:scale-110  hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"></BsArrowRight>
        </Link>
        <a
          className="group bg-white flex px-7 py-3 gap-2 items-center rounded-full outline-none focus:scale-110  hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
          href="/CV.pdf"
          download={true}
        >
          Dowload CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition"></HiDownload>
        </a>
        <a
          className="bg-white flex p-4 gap-2 items-center rounded-full text-gray-700 text-[1.35rem] focus:scale-[1.15]  hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          href="https://github.com/WatWittawat"
          target="_blank"
        >
          <FaGithubSquare></FaGithubSquare>
        </a>
      </motion.div>
    </section>
  );
}
