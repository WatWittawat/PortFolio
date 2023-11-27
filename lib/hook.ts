import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useSectionName } from "./type";

export function useSectionInView(
  sectionName: useSectionName,
  threshold = 0.75
) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeLastClick, sectionName]);

  return {
    ref,
  };
}
