"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  {
    src: "/profile.jpg",
    alt: "Zuhair Khan - Clothing Brand",
    caption: "My Clothing Brand KZ Collections pop-up at UTSC",
  },
  {
    src: "/xanadu-hq.jpg",
    alt: "At Xanadu Headquarters",
    caption: "Visiting Xanadu HQ Downtown Toronto",
  },
  {
    src: "/presentation.jpg",
    alt: "Research Presentation",
    caption: "Presenting my Research on Security in the Quantum Era",
  },
  {
    src: "/basketball.jpg",
    alt: "Basketball Championship",
    caption: "Winning Basketball Interhouse Championship",
  },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      {/* Main image container with circular border */}
      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400/60 shadow-[0_0_40px_rgba(34,211,238,0.4)]">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Caption */}
      <div className="absolute -bottom-8 left-0 right-0 text-center">
        <p className="text-xs text-cyan-300/80 font-medium transition-opacity duration-500">
          {images[currentIndex].caption}
        </p>
      </div>

      {/* Dots indicator */}
      <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-cyan-400 w-6"
                : "bg-slate-600 hover:bg-slate-500"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
