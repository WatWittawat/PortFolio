"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 my-28"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <div className="bg-slate-200 dark:bg-slate-600 dark:bg-opacity-40 h-12 w-px rounded-full" />
      <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 tracking-widest">
        // ———
      </span>
      <div className="bg-slate-200 dark:bg-slate-600 dark:bg-opacity-40 h-12 w-px rounded-full" />
    </motion.div>
  );
}
