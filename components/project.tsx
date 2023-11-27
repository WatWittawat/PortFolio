"use client";

import React from "react";
import SectionHeader from "./section-header";
import { projectsData } from "@/lib/data";
import FuncProject from "./projects";
import { useSectionInView } from "@/lib/hook";

export default function Project() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeader>My Projects</SectionHeader>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <FuncProject {...project}></FuncProject>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
