import React from "react";
import { CgWorkAlt } from "react-icons/cg";
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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Satriwitthaya 2 School",
    location: "Thailand",
    description:
      "I attended middle school and high school at this institution, where my interest in computers first sparked.",
    icon: React.createElement(LuGraduationCap),
    date: "2015-2020",
  },
  {
    title: "Kasetsart University (Bangkhen)",
    location: "Thailand",
    description:
      "This is where I began coding, initiating projects, cultivating logical thinking, and delving deeply into the intricacies of computer structures.",
    icon: React.createElement(CgWorkAlt),
    date: "2021-Present",
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
