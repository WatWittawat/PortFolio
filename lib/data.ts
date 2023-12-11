import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Elite from "@/public/Elite.png";
import Water from "@/public/Water.png";
import Todolist from "@/public/Todolist.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ELite Mobile App",
    description:
      "I worked as a Front-End Developer on the Elite Mobile App project, which includes features such as hiring employees, withdrawing money, and searching for jobs.",
    tags: ["React Native", "FastAPI", "MongoDB", "Cloudinary", "Figma"],
    imageUrl: Elite,
  },
  {
    title: "Automatic Watering",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "PlatformIO", "C++", "MongoDB", "FastAPI"],
    imageUrl: Water,
  },
  {
    title: "Mini To do list",
    description:
      "It's a website where you can enter things you want to do or various items. You can delete, edit, and add information.",
    tags: ["CSS", "Javascript", "EJS", "Bootstrap"],
    imageUrl: Todolist,
  },
] as const;

export const skillsData = [
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
  "GiHub",
  "Postman",
] as const;
