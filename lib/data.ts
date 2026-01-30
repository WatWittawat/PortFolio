import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import Elite from "@/public/Elite.png";
import TripGether from "@/public/TripGether.png";
import DailyNews from "@/public/DailyNews.png";
import GoSimpleBank from "@/public/GoSimpleBank.png";
import NexTechStore from "@/public/NexTechStore.jpg";

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
    title: "Software Engineer (Go) — T.C.C. Technology Co., Ltd.",
    location: "Thailand",
    description:
      "Designed and implemented RBAC (Role-Based Access Control) with Go. Built a high-throughput real-time notification service with Firebase Cloud Messaging (FCM), handling 5,000 messages per minute. Developed scalable backend services using Clean Architecture and MySQL, improving query performance by 50%. Wrote BDD tests with Ginkgo to improve code reliability.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2025 - Present",
  },
  {
    title: "Software Engineer Intern (Flutter) — T.C.C. Technology Co., Ltd.",
    location: "Thailand",
    description:
      "Developed and maintained POS systems (MPOS, MCMC POS, SX POS) using MVVM architecture—delivering new features, bug fixes, and unit tests. Contributed to the SOOK food delivery system: implemented notification, order cancellation, and order status features using Bloc architecture.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2024 - Nov 2024",
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
  {
    title: "GoSimpleBank",
    description:
      "Banking backend with Go and PostgreSQL—auth, accounts, transactions. REST APIs, gRPC, and CI/CD for build, test, and deploy.",
    tags: ["Go", "PostgreSQL", "gRPC", "REST API", "CI/CD"],
    imageUrl: GoSimpleBank,
  },
  {
    title: "NexTech Store",
    description:
      "Full-stack e-commerce web app for selling mobile devices, with focus on backend architecture and business logic. Integrated Redis for caching and a mock Stripe-like payment flow for order processing.",
    tags: ["Go", "Redis", "Full-stack", "E-commerce"],
    imageUrl: NexTechStore,
  },
] as const;

export const skillsData = [
  "Go",
  "Docker",
  "Kubernetes",
  "AWS",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Node.js",
  "NestJS",
  "ASP.NET Core",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Flutter",
  "Git",
  "GitHub",
  "Postman",
  "Python",
  "C/C++",
  "Tailwind",
  "Figma",
  "Convex",
] as const;
