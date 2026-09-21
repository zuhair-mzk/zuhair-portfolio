import Image from "next/image";

import { about } from "@/data/about";
import { site } from "@/data/site";

/**
 * Hero portrait slot.
 *
 * TODO: no headshot asset exists yet. Until one is added, this renders a
 * monogram placeholder. Drop the file at about.headshot.src and flip
 * `placeholder` to false in src/data/about.ts.
 */
export default function HeroPortrait() {
  const initials = site.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  if (about.headshot.placeholder) {
    return (
      <div
        className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full border-2 border-cyan-400/40 bg-slate-900/40 flex items-center justify-center select-none"
        aria-hidden="true"
      >
        <span className="text-5xl sm:text-6xl font-semibold tracking-[0.15em] text-cyan-300/70">
          {initials}
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-cyan-400/40">
      <Image
        src={about.headshot.src}
        alt={about.headshot.alt}
        fill
        priority
        sizes="(min-width: 640px) 18rem, 14rem"
        className="object-cover"
      />
    </div>
  );
}
