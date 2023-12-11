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
              src="https://scontent.fbkk29-1.fna.fbcdn.net/v/t1.15752-9/398523317_1580123292792900_5565915792996408257_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=70wgQjTH328AX894L9K&_nc_ht=scontent.fbkk29-1.fna&oh=03_AdSW9iXXth_tksSVk3qvH5_4Dbykx8agqFcyFApXD4INLA&oe=6588418C"
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
        <span className="font-bold">Hello, I'm Wtttawat</span> ,a university
        student with a passion for{" "}
        <span className="underline">Front-End development.</span> Trained in{" "}
        <span className="italic">React, TypeScript, and Tailwind CSS</span>, I
        am enthusiastic about innovation and problem-solving.{" "}
        <span className="font-medium">
          While my ultimate goal is to become a Full-stack Dev
        </span>
        , I am currently focusing on learning Front-End tools and delving into a
        bit of Back-End development.
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
