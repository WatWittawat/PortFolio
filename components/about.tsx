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
      className="mb-28 w-full max-w-[45rem] mx-auto text-center leading-8 sm:mb-40 scroll-mt-28 px-4 sm:px-6"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      id="about"
    >
      <SectionHeader>About me</SectionHeader>
      <p className="text-slate-600 dark:text-slate-300">
        I graduated from{" "}
        <span className="font-medium">
          Kasetsart University, Faculty of Computer Engineering,
        </span>{" "}
        and now work as a Software Engineer with close to a year of experience,
        specializing in{" "}
        <span className="font-medium">
          backend systems and DevOps practices.
        </span>{" "}
        I've designed and built RBAC systems, real-time notification services,
        and scalable backend services with Clean Architecture and MySQL, and I
        enjoy working with{" "}
        <span className="font-medium">
          Go, Docker, Kubernetes, and AWS (EC2, ECS, EKS).
        </span>{" "}
        <span className="italic">I take pride in solving hard problems</span>{" "}
        and in writing reliable code, including BDD tests with Ginkgo. I'm
        motivated to deepen my expertise in backend and DevOps and to contribute
        to teams that value clean architecture and cloud-native solutions.{" "}
        <span className="underline">
          I am actively seeking roles as a Backend or DevOps engineer where I
          can grow and help build robust, scalable systems.
        </span>
      </p>
      <p></p>
    </motion.section>
  );
}
