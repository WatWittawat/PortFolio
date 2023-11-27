"use client";

import React, { useState, createContext, useContext } from "react";
import { links } from "@/lib/data";

type sectionName = (typeof links)[number]["name"]; // type for line 22
type ActiveSectionContextProviderProps = {
  // type for line 19
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: sectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<sectionName>>;
  timeLastClick: number;
  setTimeLastClick: React.Dispatch<React.SetStateAction<number>>;
};
const ActiveSectionContext = createContext<ActiveSectionContextType | null>( // create Context If Use outside scope <..></..> It will return null
  null
);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<sectionName>("Home");
  const [timeLastClick, setTimeLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeLastClick,
        setTimeLastClick,
      }} // On 16 line they have init null so type of this 2 value cannot be null from  line 12
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  // for prevent the way that It null when we useContext
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActivesection must be used within a ActiveSectionContextProvider"
    );
  }

  return context;
}
