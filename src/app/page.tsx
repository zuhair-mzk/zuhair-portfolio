import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import AboutSection from "@/components/AboutSection";
import ProjectsTabs from "@/components/ProjectsTabs";
import VenturesSection from "@/components/VenturesSection";
import CertificationsSection from "@/components/CertificationsSection";
import { site, LAST_UPDATED } from "@/data/site";

const footerLinks = [
  { label: "Email", url: `mailto:${site.email}`, external: false },
  { label: "GitHub", url: site.github, external: true },
  { label: "LinkedIn", url: site.linkedin, external: true },
  { label: "Instagram", url: site.instagram, external: true },
  { label: "Devpost", url: site.devpost, external: true },
];

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

      {/* Footer */}
      <footer className="border-t border-cyan-500/10 py-8 text-xs text-slate-400">
        <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                {...(link.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                className="hover:text-cyan-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-slate-500">Last updated: {LAST_UPDATED}</p>
        </div>
      </footer>
    </main>
  );
}
