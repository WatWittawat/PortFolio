"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./section-header";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <SectionHeader>About me</SectionHeader>
      <p>
        I am studying at{" "}
        <span className="font-medium">
          Kasetsart University, Bang Khen. Faculty of ComputerEngineering,
        </span>
        I am interested in{" "}
        <span className="font-medium">front-end, back-end</span>because I
        studied the Software Engineering subject. I created a project group
        about mobile apps. I have begun to study knowledge about{" "}
        <span className="font-medium">
          HTML, CSS, Javascript, React, nodejs, etc.
        </span>{" "}
        <span className="italic">
          I love the feeling of being able to solve a problem.
        </span>{" "}
        Sometimes each problem takes a day, but when it's solved I'm really
        happy about it. I like learning new technology.{" "}
        <span className="underline">
          I am looking for a company where I will intern for 6 months.
        </span>
      </p>
      <p></p>
    </motion.section>
  );
}
