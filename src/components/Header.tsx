"use client";

import { useState } from "react";

import ThemeToggle from "./ThemeToggle";

/** Nav order mirrors the section order on the page. */
const navItems = [
  { href: "#experience", label: "Experience" },
  { href: "#ventures", label: "Ventures" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-cyan-500/10 bg-slate-950/95 backdrop-blur-lg">
      <div className="container-main flex items-center justify-between h-16 sm:h-20">
        <div className="text-base sm:text-lg font-bold tracking-[0.2em] uppercase text-cyan-300">
          Zuhair&nbsp;Khan
        </div>

        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-5 lg:gap-6 text-sm lg:text-base text-slate-300/90">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-cyan-300 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="sm:hidden p-2 rounded-md border border-slate-700/60 text-slate-200 hover:border-cyan-400/50 transition-colors"
          >
            {open ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="sm:hidden border-t border-slate-800 bg-linear-to-b from-slate-950 to-slate-900 backdrop-blur-lg animate-slideDown shadow-lg">
          <div className="container-main flex flex-col gap-1 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-slate-200 hover:text-cyan-300 hover:bg-cyan-400/10 transition-all py-3 px-4 rounded-lg font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </header>
  );
}
