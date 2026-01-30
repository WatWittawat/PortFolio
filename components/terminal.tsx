"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const LINES = [
  { prompt: "$ whoami", output: "wittawat" },
  { prompt: "$ cat focus.txt", output: "Backend & DevOps Engineer" },
  { prompt: "$ ls stack/", output: "Go · Docker · K8s · AWS" },
];

const TYPING_SPEED = 60;
const PROMPT_PAUSE = 400;
const OUTPUT_PAUSE = 1200;
const LOOP_DELAY = 2500;

export default function Terminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"prompt" | "output">("prompt");
  const [showCursor, setShowCursor] = useState(true);
  const currentLine = LINES[lineIndex];

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const line = LINES[lineIndex];
    setDisplayText("");
    setPhase("prompt");

    let charIndex = 0;
    const typePrompt = () => {
      if (cancelled) return;
      if (charIndex < line.prompt.length) {
        setDisplayText(line.prompt.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typePrompt, TYPING_SPEED);
      } else {
        setTimeout(() => {
          if (cancelled) return;
          setPhase("output");
          charIndex = 0;
          const typeOutput = () => {
            if (cancelled) return;
            if (charIndex < line.output.length) {
              setDisplayText(line.output.slice(0, charIndex + 1));
              charIndex++;
              setTimeout(typeOutput, TYPING_SPEED);
            } else {
              setTimeout(() => {
                if (cancelled) return;
                setLineIndex((i) => (i + 1) % LINES.length);
              }, OUTPUT_PAUSE + LOOP_DELAY);
            }
          };
          typeOutput();
        }, PROMPT_PAUSE);
      }
    };
    typePrompt();
    return () => {
      cancelled = true;
    };
  }, [lineIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="w-full min-w-0 max-w-lg mx-auto mt-8 sm:mt-10 px-1 sm:px-0"
    >
      <div
        className={`${jetbrainsMono.className} relative rounded-lg overflow-hidden border border-slate-600 dark:border-slate-500 shadow-xl shadow-slate-900/20 dark:shadow-black/40 bg-slate-900/95 dark:bg-slate-950 terminal-scanline`}
      >
        {/* Window bar */}
        <div className="flex items-center gap-2 px-3 py-2 bg-slate-800/80 border-b border-slate-700">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs text-slate-500 font-mono">
            wittawat@portfolio ~
          </span>
        </div>
        {/* Terminal content */}
        <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm min-h-[5rem] sm:min-h-[5.5rem] flex flex-col justify-center">
          <div className="flex items-start gap-0.5 break-all">
            {phase === "prompt" ? (
              <>
                <span className="text-cyan-400">{displayText}</span>
                <span
                  className={`inline-block w-2 h-4 -mb-0.5 bg-cyan-400 shrink-0 transition-opacity duration-75 ${
                    showCursor ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ boxShadow: "0 0 8px rgba(34, 211, 238, 0.8)" }}
                  aria-hidden
                >
                  {" "}
                </span>
              </>
            ) : (
              <>
                <span className="text-cyan-400 shrink-0">
                  {currentLine.prompt}
                </span>
                <span className="text-slate-300 ml-0.5">{displayText}</span>
                <span
                  className={`inline-block w-2 h-4 -mb-0.5 bg-cyan-400 shrink-0 transition-opacity duration-75 ml-0.5 ${
                    showCursor ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ boxShadow: "0 0 8px rgba(34, 211, 238, 0.8)" }}
                  aria-hidden
                >
                  {" "}
                </span>
              </>
            )}
          </div>
          {phase === "output" &&
            displayText.length === currentLine.output.length && (
              <div className="flex items-center gap-1 mt-1 text-slate-500 text-xs animate-pulse">
                <span>▸</span> _
              </div>
            )}
        </div>
      </div>
    </motion.div>
  );
}
