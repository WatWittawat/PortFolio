import React from "react";
import SectionHeader from "./section-header";
import { projectsData } from "@/lib/data";
import FuncProject from "./projects";

export default function Project() {
  return (
    <section id="projects" className="scroll-mt-28">
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