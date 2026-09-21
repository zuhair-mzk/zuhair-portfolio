import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import AboutSection from "@/components/AboutSection";
import ProjectsTabs from "@/components/ProjectsTabs";
import SkillsTabs from "@/components/SkillsTabs";
import { site } from "@/data/site";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <Hero />

      {/* About */}
      <AboutSection />

      {/* Experience */}
      <section id="experience" className="section">
        <div className="container-main">
          <p className="section-label mb-2 sm:mb-3 text-xs sm:text-sm">Experience</p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Where I&apos;ve worked.
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-slate-400 max-w-3xl mb-8 sm:mb-12 leading-relaxed">
            Three security and software co-ops across healthcare supply chain,
            education IT, and an early-stage startup.
          </p>

          <ExperienceTimeline />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="container-main">
          <p className="section-label mb-2 sm:mb-3 text-xs sm:text-sm">Selected Work</p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 lg:mb-12">Projects & Research</h2>
          
          <ProjectsTabs />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="container-main">
          <p className="section-label mb-2 sm:mb-3 text-xs sm:text-sm">Skills</p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 lg:mb-12">Tools I reach for most often.</h2>
          
          <SkillsTabs />

          {/* Certifications */}
          <div className="mt-10 sm:mt-12 lg:mt-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Certifications</h3>
            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="card p-5 text-center hover:border-cyan-400/30 transition-all">
                <div className="text-cyan-400 font-bold mb-2">Google Cybersecurity V2</div>
                <div className="text-sm text-slate-400">Professional Certificate</div>
              </div>
              <div className="card p-5 text-center hover:border-cyan-400/30 transition-all">
                <div className="text-cyan-400 font-bold mb-2">IBM Qiskit Summer School</div>
                <div className="text-sm text-slate-400">Excellence Award</div>
              </div>
              <div className="card p-5 text-center hover:border-cyan-400/30 transition-all">
                <div className="text-cyan-400 font-bold mb-2">IBM Quantum Developer</div>
                <div className="text-sm text-slate-400">In Progress</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section pt-20 pb-16">
        <div className="container-main">
          <p className="section-label mb-3 text-sm">Contact</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let's collaborate.</h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mb-8 leading-relaxed">
            I'm especially interested in projects around quantum-classical
            security, quantum software tooling, and systems-level cybersecurity.
            If you're working on something in that space (and want to talk quantum
            or startups over coffee), I'd love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center rounded-full bg-linear-to-r from-cyan-400 to-emerald-400 px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.7)] hover:brightness-110"
            >
              Email me
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-slate-600/70 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
            >
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-slate-600/70 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/10 py-6 text-xs text-slate-400">
        <div className="container-main text-center">
          <p>Copyright © 2025 Zuhair Khan. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}

/* Small helper components */

function ProjectCard({
  title,
  body,
  meta,
  tags,
  links,
  timeline,
}: {
  title: string;
  body: string;
  meta: string;
  tags: string[];
  links?: { label: string; url: string }[];
  timeline?: string;
}) {
  return (
    <article className="card p-6 sm:p-7 hover:border-cyan-400/30 transition-all">
      {timeline && (
        <p className="text-xs text-cyan-400 font-semibold mb-2 uppercase tracking-wide">
          {timeline}
        </p>
      )}
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-base text-slate-300 mb-3 leading-relaxed">{body}</p>
      <p className="text-sm text-slate-400 mb-4">{meta}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((t) => (
          <span key={t} className="tag text-xs px-3 py-1">
            {t}
          </span>
        ))}
      </div>
      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {links.map((link) => (
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
  );
}
