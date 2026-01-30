import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/themeswitch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wittawat | Backend & DevOps",
  description:
    "Software Engineer focused on backend development and DevOps. Go, Docker, Kubernetes, AWS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-slate-50 text-slate-900 relative h-auto pt-28 sm:pt-36 dark:bg-slate-900 dark:text-slate-50 dark:text-opacity-90 overflow-x-hidden`}
      >
        {/* Base gradient - subtle mesh feel */}
        <div
          className="fixed inset-0 -z-20 bg-gradient-to-br from-slate-50 via-cyan-50/30 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950/20"
          aria-hidden
        />
        {/* Animated gradient orbs */}
        <div
          className="bg-cyan-300/50 absolute top-[-6rem] right-[11rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-cyan-700/25 animate-blob"
          aria-hidden
        />
        <div
          className="bg-slate-300/60 absolute top-[-1rem] left-[-35rem] -z-10 h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-slate-700/30 animate-blob-delayed"
          aria-hidden
        />
        <div
          className="bg-teal-200/40 absolute bottom-[-10rem] left-1/2 -translate-x-1/2 -z-10 h-[25rem] w-[40rem] rounded-full blur-[10rem] dark:bg-teal-900/20 animate-blob-slow"
          aria-hidden
        />
        {/* Subtle noise overlay */}
        <div
          className="fixed inset-0 -z-10 bg-noise opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
          aria-hidden
        />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header></Header>
            {children}
            <Toaster position="top-right"></Toaster>
            <Footer></Footer>
            <ThemeSwitch></ThemeSwitch>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
