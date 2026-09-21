import { ventures } from "@/data/ventures";

export default function VenturesSection() {
  return (
    <section id="ventures" className="section">
      <div className="container-main">
        <p className="section-label mb-2 sm:mb-3 text-xs sm:text-sm">Ventures</p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
          Things I started.
        </h2>
        <p className="text-sm sm:text-base lg:text-xl text-slate-400 max-w-3xl mb-8 sm:mb-12 leading-relaxed">
          Companies and organisations I founded or co-founded, from a B2B
          startup to an e-commerce brand and a global social impact nonprofit.
        </p>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          {ventures.map((venture) => (
            <article
              key={venture.org}
              className="card p-5 sm:p-7 flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <p className="text-xs sm:text-sm text-cyan-400 font-semibold uppercase tracking-wide">
                  {venture.period}
                </p>
                {venture.status === "current" && (
                  <span className="chip text-[10px] px-2.5 py-0.5 shrink-0">
                    Current
                  </span>
                )}
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-1">
                {venture.org}
              </h3>
              <p className="text-sm text-slate-300 mb-3">
                {venture.title} · <span className="text-slate-400">{venture.location}</span>
              </p>

              <p className="text-sm sm:text-base text-slate-300 mb-3 leading-relaxed">
                {venture.summary}
              </p>

              <ul className="space-y-2 mb-5 grow">
                {venture.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-sm text-slate-400 leading-relaxed pl-4 relative"
                  >
                    <span
                      className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-cyan-400/60"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {venture.tags.map((tag) => (
                  <span key={tag} className="tag text-xs px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>

              {venture.links && venture.links.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {venture.links.map((link) => (
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
