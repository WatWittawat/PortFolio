"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeLastClick } =
    useActiveSectionContext();
  return (
    <header className="z-[999] relative">
      {/* Bar with terminal-style top accent + glow */}
      <motion.div
        className="header-bar fixed top-0 left-1/2 h-14 min-h-[3.5rem] w-full max-w-[100vw] rounded-none border border-slate-200/60 bg-white/85 shadow-lg shadow-slate-900/5 backdrop-blur-xl overflow-x-hidden sm:top-6 sm:h-[3.25rem] sm:max-w-[38rem] sm:rounded-full dark:bg-slate-950/90 dark:border-slate-700/50 dark:bg-opacity-90 sm:border-cyan-500/20 sm:shadow-[0_4px_24px_-4px_rgba(6,182,212,0.12)] dark:sm:shadow-[0_4px_24px_-4px_rgba(34,211,238,0.15)]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        {/* Terminal-style top line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent dark:via-cyan-400/40" />
        {/* Subtle inner glow when scrolled */}
        <div
          className="absolute inset-0 rounded-none sm:rounded-full bg-gradient-to-b from-cyan-500/5 to-transparent dark:from-cyan-400/5 pointer-events-none"
          aria-hidden
        />
      </motion.div>
      <nav className="flex fixed left-1/2 top-0 -translate-x-1/2 h-14 min-h-[3.5rem] items-center justify-center py-2 sm:top-6 sm:h-[3.25rem] sm:py-0 w-full max-w-[100vw] sm:w-[38rem] px-3 sm:px-0 box-border">
        <ul className="flex w-full min-w-0 flex-wrap items-center justify-center gap-x-0.5 gap-y-1 text-[0.75rem] font-medium text-slate-500 sm:flex-nowrap sm:gap-4 sm:text-[0.85rem] sm:flex-1">
          {links.map((link, i) => (
            <motion.li
              className="flex items-center justify-center relative shrink-0"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.05 * i,
              }}
            >
              <Link
                className={clsx(
                  "group flex items-center justify-center px-2 py-2 min-h-[2.25rem] rounded-full font-mono text-[0.75rem] sm:text-[0.85rem] sm:px-3 sm:py-3 tracking-tight transition whitespace-nowrap",
                  "hover:text-slate-950 dark:hover:text-slate-100",
                  activeSection === link.name
                    ? "text-slate-950 dark:text-white"
                    : "text-slate-500 dark:text-slate-400",
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <span className="bg-cyan-100 rounded-full absolute inset-0 -z-10 dark:bg-cyan-500/20 ring-1 ring-cyan-400/30 dark:ring-cyan-400/40 transition-transform duration-200" />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
