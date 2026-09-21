import { certifications } from "@/data/certifications";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section">
      <div className="container-main">
        <p className="section-label mb-2 sm:mb-3 text-xs sm:text-sm">
          Certifications
        </p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 lg:mb-12">
          Credentials.
        </h2>

        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <article
              key={cert.name}
              className="card p-5 flex flex-col hover:border-cyan-400/30 transition-all"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold">
                  {cert.issuer}
                </p>
                <span
                  className={`text-xs shrink-0 ${
                    cert.inProgress ? "text-cyan-300" : "text-slate-500"
                  }`}
                >
                  {cert.date}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-200 grow mb-3">
                {cert.name}
              </h3>

              {cert.links && cert.links.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {cert.links.map((link) => (
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
