import About from "@/components/about";
import Intro from "@/components/intro";
import Project from "@/components/project";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro></Intro>
      <SectionDivider></SectionDivider>
      <About></About>
      <Project></Project>
    </main>
  );
}
