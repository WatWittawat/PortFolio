import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Project from "@/components/project";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skill";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro></Intro>
      <SectionDivider></SectionDivider>
      <About></About>
      <Project></Project>
      <Skills></Skills>
      <Experience></Experience>
      <Contact></Contact>
    </main>
  );
}
