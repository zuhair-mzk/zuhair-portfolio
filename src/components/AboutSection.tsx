"use client";

import Image from "next/image";
import { useState } from "react";

import { about } from "@/data/about";

export default function AboutSection() {
  const [showMore, setShowMore] = useState(false);
  const [intro, ...rest] = about.paragraphs;

  return (
    <section id="about" className="section">
      <div className="container-main flex flex-col items-center">
        <p className="section-label mb-2 sm:mb-3 text-xs sm:text-sm text-center">
          About
        </p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center max-w-3xl">
          {about.heading}
        </h2>

        <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12 text-center space-y-4">
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            {intro}
          </p>

          {showMore &&
            rest.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

          {showMore && (
            <p className="text-sm sm:text-base text-slate-400">
              {about.closingLine}
            </p>
          )}

          <button
            onClick={() => setShowMore(!showMore)}
            aria-expanded={showMore}
            className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base transition-colors inline-flex items-center gap-1"
          >
            {showMore ? "↑ Show less" : "↓ Read more"}
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 max-w-5xl w-full">
          {about.gallery.map((photo) => (
            <figure
              key={photo.src}
              className="relative group overflow-hidden rounded-lg sm:rounded-xl border-2 border-slate-700/50 hover:border-cyan-400/50 transition-all"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={600}
                loading="lazy"
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="w-full h-40 sm:h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-80"
                aria-hidden="true"
              />
              <figcaption className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 text-xs sm:text-sm text-slate-200 font-medium">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
