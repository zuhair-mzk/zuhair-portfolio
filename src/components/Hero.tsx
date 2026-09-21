"use client";

import { useState } from "react";
import Link from "next/link";

import HeroPortrait from "./HeroPortrait";
import ResumeModal from "./ResumeModal";
import SocialLinks from "./SocialLinks";
import { site } from "@/data/site";

export default function Hero() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <>
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <section className="section pt-10 sm:pt-16 lg:pt-20 pb-10 sm:pb-16">
        <div className="container-main grid gap-10 lg:gap-16 lg:grid-cols-[1.5fr_1fr] items-center">
          <div className="text-center lg:text-left">
            <p className="section-label mb-3 text-xs sm:text-sm">
              {site.pillars.join(" · ")}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              {site.name}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-4 lg:max-w-xl mx-auto lg:mx-0">
              {site.tagline}
            </p>

            <p className="text-sm sm:text-base text-slate-400 mb-6 lg:max-w-xl mx-auto lg:mx-0">
              {site.seekingLine}
            </p>

            <div className="mb-7 flex flex-wrap gap-2 justify-center lg:justify-start">
              {site.pillars.map((pillar) => (
                <span key={pillar} className="chip text-xs sm:text-sm px-3 py-1.5">
                  {pillar}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-7 justify-center lg:justify-start">
              <Link
                href="#experience"
                className="inline-flex items-center rounded-full bg-linear-to-r from-cyan-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[var(--accent-glow)] hover:brightness-110 transition-all"
              >
                View Experience →
              </Link>
              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="inline-flex items-center rounded-full border-2 border-cyan-500/50 bg-slate-950/50 px-5 py-3 text-sm font-semibold text-cyan-100 hover:border-cyan-300 transition-all"
              >
                Download CV
              </button>
            </div>

            <div className="flex justify-center lg:justify-start">
              <SocialLinks />
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <HeroPortrait />
          </div>
        </div>
      </section>
    </>
  );
}
