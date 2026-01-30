"use client";

import React from "react";
import { motion } from "framer-motion";

const LEFT_LINES = ["// backend", "// devops", "{ }", "~", "$ pwd", "> Go"];

const RIGHT_LINES = ["</>", "K8s", "Docker", "// cloud", "AWS", "~"];

export default function SideDecor() {
  return (
    <>
      {/* Left side - floating code-like labels */}
      <div className="hidden lg:flex fixed left-4 xl:left-8 top-1/2 -translate-y-1/2 z-0 w-24 xl:w-28 flex-col gap-6 pointer-events-none">
        {LEFT_LINES.map((line, i) => (
          <motion.div
            key={i}
            className="font-mono text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 0.35 + (i % 3) * 0.2, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <motion.span
              className="inline-block"
              animate={{ opacity: [0.4, 0.85, 0.4] }}
              transition={{
                duration: 4 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            >
              {line}
            </motion.span>
          </motion.div>
        ))}
      </div>
      {/* Right side */}
      <div className="hidden lg:flex fixed right-4 xl:right-8 top-1/2 -translate-y-1/2 z-0 w-24 xl:w-28 flex-col gap-6 pointer-events-none items-end">
        {RIGHT_LINES.map((line, i) => (
          <motion.div
            key={i}
            className="font-mono text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 0.35 + (i % 3) * 0.2, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <motion.span
              className="inline-block"
              animate={{ opacity: [0.4, 0.85, 0.4] }}
              transition={{
                duration: 4 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            >
              {line}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </>
  );
}
