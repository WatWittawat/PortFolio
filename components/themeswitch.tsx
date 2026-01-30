"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-md border border-slate-200 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-slate-900 dark:border-slate-700 hover:text-cyan-600 dark:hover:text-cyan-400"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun></BsSun> : <BsMoon></BsMoon>}
    </button>
  );
}
