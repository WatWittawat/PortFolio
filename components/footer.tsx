import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Wittawat. All right reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibolds">About this website:</span> built with
        React & Next.js (App Router & Server), TypeScript, Tailwind CSS, Framer
        Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
