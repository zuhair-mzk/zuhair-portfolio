import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import AboutSection from "@/components/AboutSection";
import ProjectsTabs from "@/components/ProjectsTabs";
import VenturesSection from "@/components/VenturesSection";
import CertificationsSection from "@/components/CertificationsSection";
import { site, LAST_UPDATED } from "@/data/site";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <Hero />

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

      <VenturesSection />

      {/* Projects */}
      <section id="projects" className="section">
        <div className="container-main">
          <p className="section-label mb-2 sm:mb-3 text-xs sm:text-sm">Selected Work</p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Projects &amp; research.
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-slate-400 max-w-3xl mb-8 sm:mb-12 leading-relaxed">
            Security tooling, systems and full-stack software, quantum research,
            and the community work alongside it.
          </p>
          
          <ProjectsTabs />
        </div>
      </section>

      <CertificationsSection />

      <AboutSection />

      {/* Contact */}
      <section id="contact" className="section pt-20 pb-16">
        <div className="container-main">
          <p className="section-label mb-3 text-sm">Contact</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let&apos;s talk.
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mb-8 leading-relaxed">
            I&apos;m looking for Winter 2027 cybersecurity co-op roles in
            Toronto — security operations, identity and access, or cloud
            security. If you&apos;re hiring, or working on something in that
            space and want to talk shop over coffee, get in touch.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center rounded-full bg-linear-to-r from-cyan-400 to-emerald-400 px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-[var(--accent-glow)] hover:brightness-110"
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
      <footer className="border-t border-cyan-500/10 py-8 text-xs text-slate-400">
        <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="hover:text-cyan-300 transition-colors"
            >
              Email
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300 transition-colors"
            >
              GitHub
            </a>
          </div>

          <p className="text-slate-500">Last updated: {LAST_UPDATED}</p>
        </div>
      </footer>
    </main>
  );
}
