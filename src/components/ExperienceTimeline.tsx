import { experience } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <ol className="relative border-l border-cyan-500/20 ml-3 sm:ml-4 space-y-8 sm:space-y-10">
      {experience.map((role) => (
        <li key={`${role.org}-${role.start}`} className="relative pl-6 sm:pl-8">
          <span
            className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-slate-950"
            aria-hidden="true"
          />

          <div className="card p-5 sm:p-7">
            <p className="text-xs sm:text-sm text-cyan-400 font-semibold uppercase tracking-wide mb-2">
              {role.period}
            </p>

            <h3 className="text-lg sm:text-xl font-bold mb-1">{role.title}</h3>

            <p className="text-sm sm:text-base text-slate-300 mb-4">
              {role.org} · <span className="text-slate-400">{role.location}</span>
            </p>

            <ul className="space-y-2 mb-5">
              {role.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="text-sm sm:text-base text-slate-400 leading-relaxed pl-4 relative"
                >
                  <span
                    className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-cyan-400/60"
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {role.tags.map((tag) => (
                <span key={tag} className="tag text-xs px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>

            {role.links && role.links.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {role.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors border border-cyan-500/30 hover:border-cyan-400/50 rounded-lg px-3 py-1.5"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
