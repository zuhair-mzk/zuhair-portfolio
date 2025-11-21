"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-cyan-500/10 bg-slate-950/95 backdrop-blur-lg">
      <div className="container-main flex items-center justify-between h-16 sm:h-20">
        <div className="text-base sm:text-lg font-bold tracking-[0.2em] uppercase text-cyan-300">
          Zuhair&nbsp;Khan
        </div>

        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-6 text-sm sm:text-base text-slate-300/90">
          <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
          <a href="#experience" className="hover:text-cyan-300 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
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

      {/* Mobile menu panel */}
      {open && (
        <div className="sm:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-lg">
          <div className="container-main flex flex-col gap-3 py-4">
            <a 
              href="#about" 
              onClick={() => setOpen(false)} 
              className="text-base text-slate-200 hover:text-cyan-300 transition-colors py-1"
            >
              About
            </a>
            <a 
              href="#experience" 
              onClick={() => setOpen(false)} 
              className="text-base text-slate-200 hover:text-cyan-300 transition-colors py-1"
            >
              Experience
            </a>
            <a 
              href="#projects" 
              onClick={() => setOpen(false)} 
              className="text-base text-slate-200 hover:text-cyan-300 transition-colors py-1"
            >
              Projects
            </a>
            <a 
              href="#skills" 
              onClick={() => setOpen(false)} 
              className="text-base text-slate-200 hover:text-cyan-300 transition-colors py-1"
            >
              Skills
            </a>
            <a 
              href="#contact" 
              onClick={() => setOpen(false)} 
              className="text-base text-slate-200 hover:text-cyan-300 transition-colors py-1"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
