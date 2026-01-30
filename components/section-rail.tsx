"use client";

import React from "react";
import Link from "next/link";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import clsx from "clsx";

export default function SectionRail() {
  const { activeSection, setActiveSection, setTimeLastClick } =
    useActiveSectionContext();

  return (
    <div className="hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 z-20 flex-col gap-4 pl-3 xl:pl-5 pointer-events-none">
      <div className="relative pointer-events-auto flex flex-col gap-4">
        <div className="absolute left-[0.35rem] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-600 -z-10" />
        {links.map((link) => (
          <Link
            key={link.hash}
            href={link.hash}
            onClick={() => {
              setActiveSection(link.name);
              setTimeLastClick(Date.now());
            }}
            className="group flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            aria-label={link.name}
          >
            <span
              className={clsx(
                "w-2 h-2 rounded-full border shrink-0 transition-all duration-200",
                activeSection === link.name
                  ? "bg-cyan-500 border-cyan-500 scale-125 shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                  : "bg-transparent border-current group-hover:border-cyan-500/50 group-hover:bg-cyan-500/20",
              )}
            />
            <span className="text-[10px] xl:text-xs font-mono opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-[4rem] overflow-hidden transition-all duration-200 whitespace-nowrap">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
