"use client";

import { useState } from "react";

export default function AboutSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="section">
      <div className="container-main flex flex-col items-center">
        <p className="section-label mb-2 sm:mb-3 text-xs sm:text-sm text-center">About</p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-center">
          I like hard problems with real-world impact.
        </h2>
        
        <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12 text-center">
          <p className={`text-sm sm:text-base lg:text-lg xl:text-xl text-slate-400 leading-relaxed transition-all duration-300 ${showMore ? '' : 'line-clamp-2 sm:line-clamp-3'}`}>
            I'm a 4th-year Computer Science student at the University of Toronto specializing in Software Engineering. 
            My work lives at the intersection of quantum computing, cryptography, and systems engineering. 
            I'm driven by the challenge of designing secure network systems and software in an era where 
            quantum technologies are rapidly redefining what's possible in computation and communication. 
            Beyond research, I love to build and create — from full-stack software and cybersecurity 
            projects to startups and student communities that merge technical innovation with meaningful impact. 
            When I'm not coding, I enjoy spending time with family and friends, playing basketball, tennis, 
            or soccer, working out, reading, cooking, and travelling to explore new ideas and experiences.
          </p>
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-2 sm:mt-3 text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base transition-colors inline-flex items-center gap-1"
          >
            {showMore ? '↑ Show Less' : '↓ Read More'}
          </button>
        </div>

        {/* Image gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 max-w-5xl w-full">
          <div className="relative group overflow-hidden rounded-lg sm:rounded-xl border-2 border-slate-700/50 hover:border-cyan-400/50 transition-all">
            <img 
              src="/xanadu-hq.jpg" 
              alt="At Xanadu Quantum HQ" 
              className="w-full h-40 sm:h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
            <p className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 text-xs sm:text-sm text-slate-200 font-medium">At Xanadu Quantum HQ</p>
          </div>
          <div className="relative group overflow-hidden rounded-lg sm:rounded-xl border-2 border-slate-700/50 hover:border-cyan-400/50 transition-all">
            <img 
              src="/presentation.jpg" 
              alt="Presenting at CMS Research Symposium" 
              className="w-full h-40 sm:h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
            <p className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 text-xs sm:text-sm text-slate-200 font-medium">Presenting at CMS Symposium</p>
          </div>
          <div className="relative group overflow-hidden rounded-lg sm:rounded-xl border-2 border-slate-700/50 hover:border-cyan-400/50 transition-all">
            <img 
              src="/basketball.jpg" 
              alt="Winning Basketball Interhouse Championship" 
              className="w-full h-40 sm:h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
            <p className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 text-xs sm:text-sm text-slate-200 font-medium">Basketball Championship</p>
          </div>
          <div className="relative group overflow-hidden rounded-lg sm:rounded-xl border-2 border-slate-700/50 hover:border-cyan-400/50 transition-all">
            <img 
              src="/profile.jpg" 
              alt="Entrepreneurial project: KZ Collections pop-up at UTSC" 
              className="w-full h-40 sm:h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
            <p className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 text-xs sm:text-sm text-slate-200 font-medium">KZ Collections Pop-up</p>
          </div>
        </div>
      </div>
    </section>
  );
}
