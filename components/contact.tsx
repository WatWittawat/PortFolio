"use client";

import React from "react";
import SectionHeader from "./section-header";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hook";
import sendMail from "@/actions/sendEmail";
import SubmitBTN from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-full max-w-[38rem] mx-auto text-center scroll-mt-28 px-2 sm:px-0"
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
      <p className="text-slate-600 mt-5 dark:text-slate-300">
        Please contact me directly at{" "}
        <a
          className="underline decoration-cyan-500 dark:decoration-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400"
          href="mailto:watwittawat.p@gmail.com"
        >
          watwittwat.p@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col w-full min-w-0 dark:text-black"
        action={async (fromData) => {
          const { data, error } = await sendMail(fromData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-800 dark:bg-opacity-80 dark:focus:bg-opacity-100 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all dark:outline-none w-full"
          name="senderEmail"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
        ></input>
        <textarea
          className="h-52 my-3 rounded-lg border border-slate-300 p-4 bg-white dark:border-slate-600 dark:bg-slate-800 dark:bg-opacity-80 dark:focus:bg-opacity-100 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all dark:outline-none w-full min-w-0 resize-y"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        ></textarea>
        <SubmitBTN></SubmitBTN>
      </form>
    </motion.section>
  );
}
