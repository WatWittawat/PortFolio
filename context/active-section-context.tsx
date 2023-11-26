"use client";

import React, { useState, createContext, useContext } from "react";
import { links } from "@/lib/data";

type sectionName = (typeof links)[number]["name"];
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: sectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<sectionName>>;
};
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<sectionName>("Home");
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActivesection must be used within a ActiveSectionContextProvider"
    );
  }

  return context;
}
