"use client";

import React from "react";
import SectionHeader from "./section-header";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hook";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experiences", 0.5);
  const { theme } = useTheme();
  return (
    <section
      ref={ref}
      id="experiences"
      className="scroll-mt-28 mb-28 sm:mb-40 w-full overflow-x-hidden"
    >
      <SectionHeader>Experiences</SectionHeader>
      <VerticalTimeline lineColor="" animate={true}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "#f1f5f9" : "rgba(30, 41, 59, 0.6)",
                boxShadow: "none",
                border:
                  theme === "light"
                    ? "1px solid rgba(6, 182, 212, 0.25)"
                    : "1px solid rgba(6, 182, 212, 0.2)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #06b6d4"
                    : "0.4rem solid rgba(6, 182, 212, 0.6)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "#06b6d4" : "rgba(6, 182, 212, 0.8)",
                color: theme === "light" ? "white" : "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
