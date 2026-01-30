import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeader({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl sm:text-3xl font-semibold capitalize mb-6 sm:mb-8 text-center text-slate-800 dark:text-slate-100 tracking-tight px-2">
      <span className="border-b-2 border-cyan-500 dark:border-cyan-400 pb-1">
        {children}
      </span>
    </h2>
  );
}
