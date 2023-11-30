"use client";

import React from "react";
import SectionHeader from "./section-header";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hook";
import sendMail from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb:20 sm:mb-28 w-min[min(100%,38rem)] text-center scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeader>Contact me</SectionHeader>
      <p className="text-gray-700 mt-5">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col" action={sendMail}>
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          name="senderEmail"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
        ></input>
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        ></textarea>
        <button
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
          type="submit"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover: translate-x-1 group-hover:-translate-y-1"></FaPaperPlane>
        </button>
      </form>
    </motion.section>
  );
}
