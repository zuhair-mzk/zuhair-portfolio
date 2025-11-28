"use client";

import { useState, useEffect } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen && !mounted) return null;

  const resumes = [
    {
      title: "Software Engineering Resume",
      description: "Full-stack development & system design",
      file: "/resume/swe_resume.pdf",
      icon: "💻",
    },
    {
      title: "Quantum Computing Resume",
      description: "Quantum algorithms & research",
      file: "/resume/quantum.pdf",
      icon: "⚛️",
    },
    {
      title: "Cybersecurity Resume",
      description: "PQC, cryptography & security",
      file: "/resume/cyber.pdf",
      icon: "🔒",
    },
  ];

  const handleDownload = (file: string) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop() || "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className={`relative w-full max-w-lg bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border-2 border-cyan-500/30 shadow-[0_0_50px_rgba(34,211,238,0.3)] p-6 sm:p-8 transition-all duration-300 max-h-[90vh] overflow-y-auto ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-slate-700 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all flex items-center justify-center text-slate-400 hover:text-cyan-300"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-2">
            Download Resume
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Choose the resume that best fits your needs
          </p>
        </div>

        {/* Resume options */}
        <div className="space-y-3">
          {resumes.map((resume, index) => (
            <button
              key={index}
              onClick={() => handleDownload(resume.file)}
              className="w-full text-left p-4 sm:p-5 rounded-xl border-2 border-slate-700/60 bg-slate-900/50 hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl sm:text-4xl shrink-0 group-hover:scale-110 transition-transform">
                  {resume.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-100 mb-1 group-hover:text-cyan-300 transition-colors">
                    {resume.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {resume.description}
                  </p>
                </div>
                <div className="shrink-0 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-6 pt-6 border-t border-slate-800">
          <p className="text-xs sm:text-sm text-slate-500 text-center">
            All resumes are in PDF format and ready to download
          </p>
        </div>
      </div>
    </div>
  );
}
