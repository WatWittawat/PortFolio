import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-slate-500 dark:text-slate-400">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Wittawat Phongphrit.
      </small>
      <p className="text-xs font-mono">
        Built with Next.js, TypeScript, Tailwind, Framer Motion · React Email &
        Resend · Vercel
      </p>
    </footer>
  );
}
