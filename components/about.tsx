"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./section-header";
import { useSectionInView } from "@/lib/hook";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      id="about"
    >
      <SectionHeader>About me</SectionHeader>
      <p>
        I am currently in my final year at{" "}
        <span className="font-medium">
          Kasetsart University, Bang Khen Campus, under the Faculty of Computer
          Engineering.
        </span>{" "}
        My passion lies in both{" "}
        <span className="font-medium">
          front-end and back-end development, cultivated
        </span>{" "}
        through my studies in Software Engineering. I have had the opportunity
        to lead a project group focused on mobile application development, which
        has allowed me to deepen my technical skills and collaborative
        abilities. I have been expanding my expertise in technologies such as{" "}
        <span className="font-medium">
          Next.js, Flutter, Go, and React, among others.
        </span>{" "}
        <span className="italic">I take immense pride in problem-solving</span>{" "}
        even when challenges take considerable time to overcome, the sense of
        accomplishment afterward is profoundly rewarding. As I approach
        graduation, I am highly motivated to embark on my professional journey
        and continue learning and adapting to new technologies.{" "}
        <span className="underline">
          I am currently seeking a full-time position where I can contribute my
          skills, grow professionally, and become a valuable part of a dynamic
          team.
        </span>
      </p>
      <p></p>
    </motion.section>
  );
}
