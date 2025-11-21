import Link from "next/link";
import Header from "@/components/Header";
import ImageCarousel from "@/components/ImageCarousel";
import TypewriterText from "@/components/TypewriterText";
import SkillsTabs from "@/components/SkillsTabs";
import AboutSection from "@/components/AboutSection";
import ProjectsTabs from "@/components/ProjectsTabs";

const email = "zuhair.khan@mail.utoronto.ca";
const github = "https://github.com/zuhair-mzk";
const linkedin = "https://www.linkedin.com/in/zuhair-khan-3aab98373/";
const cvLink = "/cv.pdf"; // drop a cv.pdf in public/ later

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Top nav */}
      <Header />

      {/* Hero */}
      <section className="section pt-8 sm:pt-20 pb-8 sm:pb-16">
        {/* Mobile Layout - Stacked with compact spacing */}
        <div className="container-main lg:hidden">
          {/* Text content - centered on mobile */}
          <div className="text-center mb-6">
            <div className="inline-block rounded-2xl border-2 border-cyan-500/40 bg-cyan-500/10 px-3 py-1 mb-3">
              <p className="text-xs font-semibold text-cyan-300">
                Hello, I&apos;m
              </p>
            </div>
            <h1 className="text-3xl font-bold leading-tight mb-2">
              Zuhair Khan
            </h1>
            <div className="text-lg text-slate-300 mb-4 min-h-8">
              And I&apos;m a <TypewriterText />
            </div>
          </div>

          {/* Image carousel - after title on mobile */}
          <div className="flex justify-center mb-6">
            <div className="w-64 h-64">
              <ImageCarousel />
            </div>
          </div>

          {/* Rest of content */}
          <div className="text-center">
            <p className="text-sm text-slate-400 mb-4 leading-relaxed px-2">
              Passionate about quantum computing, post-quantum cryptography, and secure software systems. 
              Currently researching security architectures at the University of Toronto.
            </p>
            
            <div className="mb-4 flex flex-wrap gap-2 justify-center">
              <span className="chip text-xs px-2.5 py-1">PQC × QKD</span>
              <span className="chip text-xs px-2.5 py-1">Quantum ML</span>
              <span className="chip text-xs px-2.5 py-1">Full-Stack Dev</span>
            </div>

            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <Link
                href="#projects"
                className="inline-flex items-center rounded-full bg-linear-to-r from-cyan-400 to-emerald-400 px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.7)] hover:brightness-110 transition-all"
              >
                View Projects →
              </Link>
              <Link
                href={cvLink}
                className="inline-flex items-center rounded-full border-2 border-cyan-500/50 bg-slate-950/50 px-4 py-2.5 text-xs font-semibold text-cyan-100 hover:border-cyan-300 transition-all"
              >
                Download CV
              </Link>
            </div>

            {/* Social links */}
            <div className="flex gap-3 justify-center">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border-2 border-slate-600/70 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400/10 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border-2 border-slate-600/70 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400/10 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href={`mailto:${email}`}
                className="w-10 h-10 rounded-full border-2 border-slate-600/70 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400/10 transition-all hover:scale-110"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="container-main hidden lg:grid gap-20 lg:grid-cols-2 items-center">
          {/* Left side - Text content */}
          <div>
            <div className="inline-block rounded-2xl border-2 border-cyan-500/40 bg-cyan-500/10 px-5 py-2 mb-4">
              <p className="text-base font-semibold text-cyan-300">
                Hello, I&apos;m
              </p>
            </div>
            <h1 className="text-6xl font-bold leading-tight mb-4">
              Zuhair Khan
            </h1>
            <div className="text-3xl text-slate-300 mb-6 min-h-10">
              And I&apos;m a <TypewriterText />
            </div>
            <p className="text-lg text-slate-400 mb-6 max-w-xl leading-relaxed">
              Passionate about quantum computing, post-quantum cryptography, and secure software systems. 
              Currently researching security architectures at the University of Toronto 
              and exploring how quantum technologies can strengthen real-world cybersecurity.
            </p>
            
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="chip text-xs px-3 py-1.5">PQC × QKD</span>
              <span className="chip text-xs px-3 py-1.5">Quantum ML</span>
              <span className="chip text-xs px-3 py-1.5">Photonic Computing</span>
              <span className="chip text-xs px-3 py-1.5">Full-Stack Dev</span>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <Link
                href="#projects"
                className="inline-flex items-center rounded-full bg-linear-to-r from-cyan-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.7)] hover:brightness-110 transition-all"
              >
                View Projects →
              </Link>
              <Link
                href={cvLink}
                className="inline-flex items-center rounded-full border-2 border-cyan-500/50 bg-slate-950/50 px-5 py-3 text-sm font-semibold text-cyan-100 hover:border-cyan-300 transition-all"
              >
                Download CV
              </Link>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border-2 border-slate-600/70 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400/10 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border-2 border-slate-600/70 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400/10 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href={`mailto:${email}`}
                className="w-12 h-12 rounded-full border-2 border-slate-600/70 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400/10 transition-all hover:scale-110"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - Image carousel */}
          <div className="flex justify-center">
            <ImageCarousel />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="container-main mt-20 flex flex-col items-center">
          <div className="w-8 h-12 rounded-full border-2 border-cyan-400/50 flex justify-center p-2">
            <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
          </div>
          <p className="text-sm text-slate-500 mt-3 font-medium">Scroll Down</p>
        </div>
      </section>

      {/* Quick snapshot section */}
      <section className="section bg-slate-900/30 py-8 sm:py-12 lg:py-16">
        <div className="container-main">
          <div className="grid gap-3 sm:gap-4 lg:gap-6 grid-cols-2 lg:grid-cols-4">
            <div className="card p-3 sm:p-4 lg:p-6 text-center hover:border-cyan-400/30 transition-all">
              <p className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">🏆</p>
              <p className="text-xs sm:text-sm lg:text-base font-semibold text-slate-200 mb-0.5 sm:mb-1 leading-tight">UTSC CMS Symposium Winner</p>
              <p className="text-[10px] sm:text-xs lg:text-sm text-slate-400">(Quantum Security)</p>
            </div>
            <div className="card p-3 sm:p-4 lg:p-6 text-center hover:border-cyan-400/30 transition-all">
              <p className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">⚛️</p>
              <p className="text-xs sm:text-sm lg:text-base font-semibold text-slate-200 mb-0.5 sm:mb-1 leading-tight">PennyLane Certified</p>
              <p className="text-[10px] sm:text-xs lg:text-sm text-slate-400">(100% Completed)</p>
            </div>
            <div className="card p-3 sm:p-4 lg:p-6 text-center hover:border-cyan-400/30 transition-all">
              <p className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">🔐</p>
              <p className="text-xs sm:text-sm lg:text-base font-semibold text-slate-200 mb-0.5 sm:mb-1 leading-tight">15+ Cybersecurity CTF</p>
              <p className="text-[10px] sm:text-xs lg:text-sm text-slate-400">Challenges Solved</p>
            </div>
            <div className="card p-3 sm:p-4 lg:p-6 text-center hover:border-cyan-400/30 transition-all">
              <p className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">🚀</p>
              <p className="text-xs sm:text-sm lg:text-base font-semibold text-slate-200 mb-0.5 sm:mb-1 leading-tight">Next: Xanadu Residency</p>
              <p className="text-[10px] sm:text-xs lg:text-sm text-slate-400">& Cybersecurity Internship</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <AboutSection />

      {/* Experience pillars */}
      <section id="experience" className="section">
        <div className="container-main">
          <p className="section-label mb-2 sm:mb-3 text-xs sm:text-sm">Experience</p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Domains I'm Actively Building In</h2>
          <p className="text-sm sm:text-base lg:text-xl text-slate-400 max-w-3xl mb-6 sm:mb-12 leading-relaxed">
            A quick snapshot of my main focus areas: quantum computing, cybersecurity,
            software engineering, startups, and community work.
          </p>

          {/* Mobile: Horizontal scrolling cards */}
          <div className="md:hidden overflow-x-auto -mx-4 px-4 pb-4">
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              <div style={{ width: '85vw', maxWidth: '400px' }}>
                <PillarCard
                  title="Quantum Computing"
                  body="Researching quantum-safe security, comparing PQC and QKD protocols, and exploring photonic quantum machine learning."
                  meta="Active research with Prof. Marcelo Ponce (Best Poster – CMS 2025), PennyLane Codebook completion, PhotonQML hackathon (3rd place), Qiskit Summer School Excellence Award, Q-SITE 2025, IBM Quantum certification."
                  tags={[
                    "PQC vs QKD Research",
                    "PennyLane · Qiskit",
                    "Photonic QML",
                  ]}
                />
              </div>
              <div style={{ width: '85vw', maxWidth: '400px' }}>
                <PillarCard
                  title="Cybersecurity & Networks"
                  body="End-to-end systems: from OS kernels and concurrent tools to full-stack products and production web apps."
                  meta="Building IDS from scratch, 15+ CTF challenges (crypto, reverse engineering, packet analysis), CSCD58 network labs (Mininet, SDN, POX), Google Cybersecurity Certificate, secure authentication for Offline app (JWT, bcrypt)."
                  tags={["IDS/NIDS", "CTFs", "Network Security", "Secure Auth"]}
                />
              </div>
              <div style={{ width: '85vw', maxWidth: '400px' }}>
                <PillarCard
                  title="Software Engineering"
                  body="End-to-end systems: from OS kernels and concurrent tools to full-stack products and production web apps."
                  meta="StockSocial (FastAPI, PostgreSQL, React Native), Quotis MVP, CMS Connect Android app, Pintos kernel threads, MIPS interpreter, System Monitor (C++/ncurses), MSA UTSC website."
                  tags={["Full-Stack", "C/C++/Assembly", "React · Next.js", "Databases"]}
                />
              </div>
              <div style={{ width: '85vw', maxWidth: '400px' }}>
                <PillarCard
                  title="Startups & Entrepreneurship"
                  body="Building products from idea to launch, managing teams, and navigating fundraising and early-stage growth."
                  meta="KZ Collections founder (65% conversion increase, Shopify customizations), Quotis co-founder (Scrum Master, $4K grants), Offline intern (React Native security contributions, pre-seed funded)."
                  tags={["Technical Leadership", "Fundraising", "Product Growth"]}
                />
              </div>
              <div style={{ width: '85vw', maxWidth: '400px' }}>
                <PillarCard
                  title="Community & Leadership"
                  body="Building strong student communities, organizing large-scale events, and mentoring through sports and tech initiatives."
                  meta="UTSC MSA webmaster (100+ iftar attendees, React/Node.js/MongoDB), PMCC camp coordinator (3-day multi-sport tournament), Q-SITE VP of Partnerships (200+ attendees, IBM/Xanadu sponsors), Omar Fund & TCF volunteer."
                  tags={["Event Management", "Web Development", "Volunteering"]}
                />
              </div>
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden md:block">
            <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
              <PillarCard
                title="Quantum Computing"
                body="Researching quantum-safe security, comparing PQC and QKD protocols, and exploring photonic quantum machine learning."
                meta="Active research with Prof. Marcelo Ponce (Best Poster – CMS 2025), PennyLane Codebook completion, PhotonQML hackathon (3rd place), Qiskit Summer School Excellence Award, Q-SITE 2025, IBM Quantum certification."
                tags={[
                  "PQC vs QKD Research",
                  "PennyLane · Qiskit",
                  "Photonic QML",
                ]}
              />
              <PillarCard
                title="Cybersecurity & Networks"
                body="End-to-end systems: from OS kernels and concurrent tools to full-stack products and production web apps."
                meta="Building IDS from scratch, 15+ CTF challenges (crypto, reverse engineering, packet analysis), CSCD58 network labs (Mininet, SDN, POX), Google Cybersecurity Certificate, secure authentication for Offline app (JWT, bcrypt)."
                tags={["IDS/NIDS", "CTFs", "Network Security", "Secure Auth"]}
              />
              <PillarCard
                title="Software Engineering"
                body="End-to-end systems: from OS kernels and concurrent tools to full-stack products and production web apps."
                meta="StockSocial (FastAPI, PostgreSQL, React Native), Quotis MVP, CMS Connect Android app, Pintos kernel threads, MIPS interpreter, System Monitor (C++/ncurses), MSA UTSC website."
                tags={["Full-Stack", "C/C++/Assembly", "React · Next.js", "Databases"]}
              />
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <PillarCard
                title="Startups & Entrepreneurship"
                body="Building products from idea to launch, managing teams, and navigating fundraising and early-stage growth."
                meta="KZ Collections founder (65% conversion increase, Shopify customizations), Quotis co-founder (Scrum Master, $4K grants), Offline intern (React Native security contributions, pre-seed funded)."
                tags={["Technical Leadership", "Fundraising", "Product Growth"]}
              />
              <PillarCard
                title="Community & Leadership"
                body="Building strong student communities, organizing large-scale events, and mentoring through sports and tech initiatives."
                meta="UTSC MSA webmaster (100+ iftar attendees, React/Node.js/MongoDB), PMCC camp coordinator (3-day multi-sport tournament), Q-SITE VP of Partnerships (200+ attendees, IBM/Xanadu sponsors), Omar Fund & TCF volunteer."
                tags={["Event Management", "Web Development", "Volunteering"]}
              />
            </div>
          </div>
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
              href={`mailto:${email}`}
              className="inline-flex items-center rounded-full bg-linear-to-r from-cyan-400 to-emerald-400 px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.7)] hover:brightness-110"
            >
              Email me
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-slate-600/70 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
            >
              LinkedIn
            </a>
            <a
              href={github}
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

function PillarCard({
  title,
  body,
  meta,
  tags,
}: {
  title: string;
  body: string;
  meta: string;
  tags: string[];
}) {
  return (
    <article className="card p-6 sm:p-7 hover:border-cyan-400/30 transition-all h-full flex flex-col">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-base text-slate-300 mb-3 leading-relaxed">{body}</p>
      <p className="text-sm text-slate-400 mb-4 grow">{meta}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="tag text-xs px-3 py-1">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

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
