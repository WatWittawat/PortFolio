import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Project from "@/components/project";
import SectionDivider from "@/components/section-divider";
import SectionRail from "@/components/section-rail";
import SideDecor from "@/components/side-decor";
import Skills from "@/components/skill";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center px-4 sm:px-6 min-h-screen w-full min-w-0">
      {/* Background grid - fills the "empty" feel */}
      <div
        className="fixed inset-0 -z-10 nerd-grid opacity-50 dark:opacity-30"
        aria-hidden
      />
      <SideDecor />
      <SectionRail />
      <div className="w-full min-w-0 max-w-[52rem] flex flex-col items-center">
        <Intro />
        <SectionDivider />
        <About />
        <Project />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
