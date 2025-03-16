import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import Elite from "@/public/Elite.png";
import TripGether from "@/public/TripGether.png";
import DailyNews from "@/public/DailyNews.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiences",
    hash: "#experiences",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "T.C.C. Technology Co., Ltd. (Internship)",
    location: "Thailand",
    description:
      "MPOS, MCMC POS, and SX POS - Point of Sale (POS) systems designed to support in-store sales, built with the MVVM (Model-View-ViewModel) design pattern. Responsible for developing new features, fixing bugs, and writing unit tests to ensure code quality and reliability.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2024 - SEP 2024 (6 months)",
  },
  {
    title: "T.C.C. Technology Co., Ltd. (Part time)",
    location: "Thailand",
    description:
      "Little John - A food delivery system within the One Bangkok building, developed using the Bloc Pattern architecture. Contributed to building features for notifications, order cancellations, and displaying order statuses.",
    icon: React.createElement(CgWorkAlt),
    date: "OCT 2024 - Nov 2024 (2 months)",
  },
] as const;

export const projectsData = [
  {
    title: "TripGether Webapp",
    description:
      "I worked on both the front-end and back-end of a group travel planning web app, overseeing overall development, responsive design, and the chat system.",
    tags: [
      "Next.js",
      "Convex",
      "Liveblocks",
      "MongoDB",
      "Figma",
      "Cloudinary",
      "Vercel",
    ],
    imageUrl: TripGether,
  },
  {
    title: "ELite Mobile App",
    description:
      "I worked as a Front-End Developer on the Elite Mobile App project, which includes features such as hiring employees, withdrawing money, and searching for jobs.",
    tags: ["React Native", "FastAPI", "MongoDB", "Cloudinary", "Figma"],
    imageUrl: Elite,
  },
  {
    title: "Daily News Mobile App",
    description:
      "I developed a news system using Flutter Clean Architecture, enabling efficient data management and offline storage for better usability.",
    tags: ["Flutter", "Hive Localstorage Lib", "NewApi"],
    imageUrl: DailyNews,
  },
] as const;

export const skillsData = [
  "Go",
  "Flutter",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "C/C++",
  "Framer Motion",
  "Figma",
  "Miro",
  "EJS",
  "React Native",
  "GitHub",
  "Postman",
  "Convex",
] as const;
