# zuhairkhan.ca — Overhaul Brief

## 0. How to work
- First, explore the repo: identify framework, routing, where content lives (hard-coded JSX vs data files), how images are served, and how it deploys. Report back before changing anything.
- Move all content (experience, projects, certs, ventures) into **data files** (e.g. `src/data/*.ts` or JSON) so future updates don't touch components.
- Keep the existing stack. No new frameworks. Small, reviewable commits per section.
- **Never invent facts, dates, or metrics.** Anything not given below → leave a visible `TODO:` and list it in your summary.
- Run the build + check mobile (375px) and desktop before each commit.

## 1. Positioning (the whole site must match this)
**Security · Software · Startups.** Quantum computing is an ongoing interest, not the headline.

This replaces the current quantum-first framing. Tagline to reuse:
> Final-year CS student at UofT focused on cybersecurity. I also build software and start companies.

Target: Winter 2027 cybersecurity co-op roles in Toronto.

Visual direction: **dark theme stays the default.** Add a light/dark toggle; light mode matches the LinkedIn banner — off-white background (#F1F1EE), near-black text, one blue accent (#285AA0). Both themes use a serif display font (Latin Modern Roman / a similar serif such as "Newsreader" or "Source Serif") + clean sans for body, minimal, lots of whitespace. The quantum circuit motif can appear once, subtly (e.g. hero background or quantum section header) — not everywhere.

Theme mechanics (implemented): colors are CSS custom properties on `:root`, overridden under `:root[data-theme="light"]`. `ThemeToggle` writes the attribute and persists to localStorage; an inline script in `layout.tsx` sets it before paint to avoid a flash. Dark is the default and an explicit stored choice is the only thing that overrides it — OS `prefers-color-scheme` is deliberately ignored.

The toggle is stateless: both icons render and CSS picks one off `[data-theme]`, so the correct icon shows before hydration and before JS runs.

**Palette remap:** rather than renaming ~215 `slate-*`/`cyan-*` utility classes across components that sections 3–7 rewrite anyway, `globals.css` uses Tailwind v4's `@theme inline` to point those scales at the tokens. Existing classes are themeable as-is (`.text-slate-400` compiles to `color:var(--fg-muted)`, and opacity modifiers still work via `color-mix`). **As each component is rewritten, replace its `slate-*`/`cyan-*` classes with semantic token names** — the remap is a bridge, not the destination.

## 2. Stale / broken things to fix
- Hero: "Currently researching security architectures at UofT" → outdated. Remove.
- Hero badge "Next: Xanadu Residency & Cybersecurity Internship" → remove.
- Hero typewriter "And I'm a Security |" → replace with the positioning line above.
- "Cybersecurity & Networks" card reuses the Software Engineering description ("End-to-end systems: from OS kernels…") — copy-paste bug.
- "Experience" section has **no actual jobs**. Add real experience (section 3).
- Qiskit Global Summer School is listed as 2025 only — add **QGSS 2026**.
- Copyright "© 2025" → dynamic year.

### Resolved (confirmed 2026-09-21)
- **PhotonQML — remove entirely.** Delete the project card AND the "PhotonQML hackathon (3rd place)" mention in the Quantum pillar. It was never a separate event.
- **Qiskit Fall Fest @ UofT — 3rd overall** is real. Keep it; it is the only 3rd-place finish.
- **PQC vs QKD** — drop "Publication in progress" and all publication framing. Present as a research project with the CMS award.
- **IBM Quantum Developer Certification** — still pursuing. Keep as in-progress.
- **CompTIA Security+** — in progress. No target date; do not invent one.
- **Q-SITE** — finished. Oct 2025 – May 2026, "Partnerships & Hackathon Associate". Fix the "2025 – Present" timeline.
- **KZ Collections** — ended. Jul 2024 – May 2026. Fix the "July 2024 – Present" timeline.
- **Metrics** — "65% conversion increase" and "$4K grants" both stay. "15+ CTF challenges" → **19 CTF challenges (UTSC CSCD27)** per resume.

### Found during repo exploration (not in the original brief)
- **Broken link:** projects link to `/qiskit-certificate.pdf`, which does not exist. The real file is `public/qiskit-excellence-badge.pdf`. 404 today.
- **App Store link still live** in the Offline project entry — remove per section 3.
- **`src/components/ProjectsTabs.tsx.backup`** is committed. Delete it.
- **Images are unoptimized:** `research-symposium.jpg` is 7.5 MB and unused; basketball 2.4 MB, presentation 2.3 MB, xanadu-hq 1.5 MB, profile 1.4 MB. `AboutSection` uses raw `<img>` with no lazy-load. See section 7.
- **`profile.jpg` does double duty** — labelled "KZ Collections pop-up" in About and "Clothing Brand" in the carousel. There is no real headshot file yet.
- **Unused in `public/`:** `coursera-cert.pdf`, `cms-research-symposium.pdf`, `qiskit-excellence-badge.pdf`, `google-cybersecurity-badge.pdf`, and both cert PNGs. Wire them into section 6 or remove.
- **Canva poster links are `/edit` URLs.** TODO: replace with view-only share links before publishing — an `/edit` link on a publicly-shared design can grant edit access.
- **CTF repo is now public** (`github.com/zuhair-mzk/ctf-portfolio`). The site currently says "private repo with sanitized solutions" — update that copy and add the link.
- **Everything is a client component** because the resume-modal `useState` lives in `page.tsx`. Lift it so the page can render statically.

## 3. Experience (new section — timeline, most recent first)
Source: resume (Sep 2026) + LinkedIn. Where they conflict, the conflict is marked TODO.

**Mohawk Medbuy Corporation (MMC)** — Network & Cloud Security Co-op · Toronto, ON (Hybrid) · May 2026 – Aug 2026
(Worked out of both the Burlington and Toronto offices; the site says Toronto / Hybrid.)
- Investigated phishing and social engineering incidents using KnowBe4 PhishER, Proofpoint, and Cisco Umbrella; shadowed a third-party penetration testing engagement; resolved ServiceNow VPN, MFA, and access-control incidents through Entra ID and Exchange root-cause analysis
- Administered IAM and RBAC in the SAP Ariba backend across 75+ GTA hospitals — provisioning roles, managing MFA lifecycle operations, and reviewing user access for segregation-of-duties conflicts against ISO/IEC 27001 controls during a Deloitte co-delivered SAP S/4HANA transformation
- Led an Intune/MDM compliance initiative retiring stale device records and enforcing endpoint controls via LAPS-PAM; analyzed Entra ID exports to flag mailboxes forwarding to external recipients, producing a risk-prioritized remediation plan for Plexus decommissioning
Tags: IAM · Incident Response · ISO 27001 · SAP · Security Operations

**University of Toronto Schools (UTS)** — IT Systems & Software Engineering Co-op · Toronto, ON (On-site) · Jan 2026 – Apr 2026
- Built a SOC-style monitoring dashboard correlating Suricata IPS alerts with NetFlow, RADIUS, and NAT logs across 3 SQL databases to attribute suspicious network sessions to source IPs and individual users; troubleshot VLAN segmentation and DHCP addressing across academic networks
- Supported identity & access management for 750+ students and staff through Active Directory account and group changes, MFA enrollment, and Windows/macOS endpoint posture under least privilege; helped coordinate a third-party penetration test of school systems
- Contributed to in-house C#/.NET web applications using Entity Framework, SQL Server, GraphQL, and Blazor — including a barcode-based asset tracker — supporting Azure DevOps release workflows through improved logging and PowerShell automation
Tags: SIEM · Suricata · Active Directory · C#/.NET · IT

**Offline Social Network Inc.** — Software & Systems Infrastructure Intern · Toronto, ON (Hybrid) · Aug 2025 – Dec 2025
- Led internal application security risk assessments for an AI-driven mobile app, mapping controls to OWASP and NIST 800-53, reviewing authentication flows (OAuth 2.0, JWT, bcrypt password hashing), and documenting risk findings while tracking remediation to closure
- Investigated network-layer issues across AWS (Route 53, Transit Gateway, Direct Connect), correlating journald/syslog output with tcpdump/Wireshark traces to accelerate root-cause analysis for 1,000+ users
- **Do NOT link to an App Store listing** — Offline is no longer on the App Store. The website link (offlinesocialnetwork.com) is fine.
Tags: AppSec · AWS · OWASP · NIST 800-53 · Linux

**Q-SITE** — Partnerships & Hackathon Associate · Toronto (Remote, contract PT) · Oct 2025 – May 2026
- Supported partnerships, sponsor outreach, and hackathon coordination for Q-SITE Toronto 2025
- Contributed to challenge development and student engagement for a large student-led quantum conference
Tags: Partnerships · Event Management · Community
DECIDED: Q-SITE stays under leadership/community (Projects → Community filter), NOT in the Experience timeline.

## 4. Ventures (new section)

**IDRAK** — Co-Founder · Toronto · Jan 2026 – Present
- Building real-time AI guidance systems for warehouse operations
- Designed and shipped a full-stack packing assistant deployed with Formula Scents, a Canadian e-commerce business processing 100–150 orders/day
- System integrates Shopify order ingestion, real-time worker tracking, and an admin analytics dashboard
- Leading architecture decisions, intern coordination, and product direction for a team of 5
- Links: https://idrak.ca/ · https://devpost.com/software/idrak

**KZ Collections** — Founder · Toronto · Jul 2024 – May 2026 (ended)
- Store: https://kzcollections.ca/
- Premium cultural wear — Moroccan thobes, farwas, and more
- Architected and managed a production e-commerce platform (Shopify), integrating payments, inventory, analytics, and third-party services
- Implemented lightweight automation and data-driven workflows to optimize order processing, customer engagement, and operations
- 65% conversion increase (confirmed — keep)
- Keep the UTSC pop-up photo here

**Quotis** — Co-founder · Mar 2024 – Aug 2024 (ended; was a project, not an active company)
- Real-time service marketplace MVP; Scrum Master; $4K grants (confirmed — keep)

**The Defy Organization** — Co-Founder · International (Hybrid) · Jun 2019 – Jun 2022
- Founded and led a global social impact organization supporting orphans, labour workers, and people with disabilities through 3D design/manufacturing, sanitary resources, and food aid
- Princess Diana Award recipient (co-founder); Global Social Leaders Competition semi-finalist (Impact category, top teams among 438 worldwide)
- Raised $25,000+ through 8 corporate sponsorships and partnerships
- Expanded to 5 countries (UAE, India, Pakistan, U.S., Egypt), leading 100+ volunteers and reaching 2,000+ beneficiaries
- Featured in international media; invited for UAE TV interviews

## 5. Projects (filterable: All · Security · Software · Quantum · Community)
Community is a 5th filter (not in the original brief) so the leadership work — Q-SITE, UTSC MSA, PMCC Camp Events Coordinator, The Omar Fund, TCF UTSC — has a home now that the Skills section is being cut.
- **Security:** Network IDS/NIDS (https://github.com/mbilal29/Network-Intrusion-Detection-System — team repo, not under Zuhair's account), CTF portfolio (https://github.com/zuhair-mzk/ctf-portfolio — 19 challenges, UTSC CSCD27, OWASP Top 10, now public), Access Control Hardening & IR Labs + software router (https://github.com/zuhair-mzk/Computer_Networking), CSCD58 network labs (Mininet, SDN, POX)
- **Software:** StockSocial (FastAPI, PostgreSQL, React Native), CMS Connect Android app, Pintos kernel threads, MIPS interpreter, System Monitor (C++/ncurses), MSA UTSC website
- **Quantum (condensed — max ~4 cards):** PQC vs QKD research (Best Poster, CMS Undergraduate Research Symposium 2025), PennyLane Codebook, QGSS 2025 + 2026, Qiskit Fall Fest @ UofT (3rd overall)
Keep each card to: title, one line, tags, links. Details behind "Read more".

TODO: the PQC/QKD poster link differs between the site and the resume — site has `canva.com/design/DAGXxY8Ej1E/...`, resume has `canva.com/design/DAG1Vto1yUQ/...`. Confirm which is current, and swap for a view-only link.

### Skills section — CUT (confirmed)
The standalone Skills section is removed. Project and experience tags carry the skills. Delete `SkillsTabs.tsx` and its nav link; keep the resume skill groupings in section 10 as a tag vocabulary.

## 6. Certifications
- Google Cybersecurity Professional Certificate (v2) — Credly: https://www.credly.com/go/BiCrN8O2 · Coursera: https://coursera.org/verify/professional-cert/PTNLUFMTLR5Y
- IBM Qiskit Global Summer School 2026 — Quantum Fundamentals (Credly: https://www.credly.com/badges/36f93823-9f46-4b3d-8424-2de6b283df3d)
- IBM Qiskit Global Summer School 2025 — Excellence badge
- PennyLane Codebook (Xanadu) — completed
- CompTIA Security+ — in progress
- IBM Quantum Developer Certification — in progress
- Cisco Intro to Cybersecurity — 2026
Show as logo + name + date + "Verify" link.

## 7. About + photos
- Short About (3–4 sentences), matching the LinkedIn About.
- Photos go in `public/images/`, max 1600px wide, lazy-loaded, with meaningful alt text. **No pre-converted WebP files are checked in:** `sips` on this machine cannot write WebP and there is no `cwebp`, so rather than add a dependency the sources are resized JPEGs and `next/image` negotiates WebP/AVIF per request. If a real WebP pipeline is wanted later, that is the place to add it.
- Hero: one clean headshot (coming soon — use a placeholder slot).
- Gallery/About strip: research presentation, Xanadu HQ, KZ Collections pop-up, + new photos TODO. Basketball photo → About/personal section, not the hero.

## 8. Footer
- "Last updated: <Month YYYY>" — read from a single constant in the data/config file (or git commit date at build time if the stack supports it easily).
- Links: Email, LinkedIn, GitHub. Dynamic copyright year.

## 9. Section order
Hero → Experience → Ventures → Projects → Certifications → About (with photos) → Contact → Footer

## 10. Reference facts (from resume + LinkedIn, Sep 2026)

**Education:** University of Toronto Scarborough, Sep 2022 – Apr 2027 (expected). Honours B.Sc. Computer Science — Software Engineering Specialist (Co-op). UofT Scholar Award, $7,500 merit scholarship (top 3%).

**Contact:** zuhair.khan@mail.utoronto.ca · github.com/zuhair-mzk · linkedin.com/in/zuhair-khan-3aab98373 · zuhairkhan.ca
Phone is on the resume but is deliberately NOT published on the site (confirmed).

**LinkedIn headline:** CS @ UofT | Cybersecurity: IAM, Security Operations, Cloud | Prev. @ Mohawk Medbuy, University of Toronto Schools | Research @ UofT

**Location:** Toronto, Ontario, Canada. Open to on-site, hybrid, and remote.

**LinkedIn About (verbatim — this is the source for `src/data/about.ts`, keep his voice):**
> Hi, I'm Zuhair, a final-year Computer Science student at UofT focused on cybersecurity.
> Most recently, I worked in network and cloud security at Mohawk Medbuy, covering IAM and security operations. Before that, I was at the University of Toronto Schools doing IT and software development, with some SIEM and Suricata alert work along the way.
> I like building software and systems. I'm currently working on IDRAK, a B2B startup building real-time AI guidance for warehouse operations, and I previously started and launched my own traditional clothing brand, KZ Collections.
> I'm also into quantum computing. I did a quantum-safe cryptography research project at UofT and took part in IBM's Qiskit Global Summer School 2026.
> Always happy to connect.

**Research framing (LinkedIn Education):** Undergraduate researcher in Post-Quantum Cryptography (PQC), focusing on lattice-based schemes and the design of quantum-safe security protocols.

**Relevant coursework:** Computer & Network Security · Computer Networks · Operating Systems · Algorithms · Machine Learning · Quantum Computing

**Secondary education (probably not for the site, recorded for completeness):** Raha International School, Gardens Campus — IB Diploma, 2018–2022, final score 41/45. IB Scholar Award. Regional player, Taaleem Titans Basketball (U14–U19). Defy was featured in Khaleej Times — a possible press link for the Defy venture card.

**Languages:** English (native/bilingual), Arabic (professional working), +1 more.

**Credential IDs:** Cisco Introduction to Cybersecurity — 1148eeea-e5a6-4534-bc16-16b4efdd4bf8 (issued Jun 2026). QGSS 2026 issued Aug 2026.

**Richer project detail from LinkedIn (use when rewriting Projects):**
- *Network IDS*, Nov 2025 – Dec 2025: signature + statistical anomaly detection; detected port scans, SYN floods, ICMP floods, DNS tunneling, ARP spoofing; anomaly detection via Shannon entropy, Z-score analysis, and inter-arrival timing deviations; validated in an isolated Docker network with nmap/hping3/arpspoof; 100% detection accuracy with zero false positives on baseline traffic; generated HTML security reports.
- *Quantum Computing & Algorithms (Qiskit, PennyLane)*, May 2025 – Aug 2025.

### Two conflicts to resolve before the Projects rewrite
- **TCF** — the site says "Charity Volunteer — TCF UTSC, 2023 – 2024". LinkedIn Volunteering says **Vice President Finance, The Citizens Foundation Canada, Sep 2022 – May 2024** (led financial planning and budgeting, managed fundraising, first-year rep). VP Finance is a much stronger title. TODO: confirm which to use.
- **UTSC MSA** — the site says "Jan 2024 – Sep 2024". LinkedIn Volunteering says **Sep 2023 – Aug 2024**. TODO: confirm dates.

**Not currently on the site — decide whether to include:**
- **The Defy Organization** — CONFIRMED: add to Ventures. Full details in section 4.
- **UTSC Tennis Court Supervisor** — Aug 2025 – Nov 2025 and May 2026 – Present (Athletics & Recreation).
- **Peel Muslim Community Centre** — keep as "Camp Events Coordinator", Apr 2024 – Aug 2024 (confirmed; LinkedIn's "Full-stack Developer" is not the framing for the site).

**Skills (resume grouping, use for tags):**
- Security Operations: SIEM (Splunk SPL), IDS/IPS (Suricata), incident investigation, phishing analysis, vulnerability assessment, penetration testing (CTF), threat modeling, MITRE ATT&CK, Wireshark, tcpdump, nmap
- Security & Risk: ISO/IEC 27001, NIST CSF/800-53, OWASP Top 10, SOC 2, risk assessments, remediation tracking
- Identity & Access: IAM, RBAC, MFA, least privilege, SoD, OAuth 2.0, JWT, Active Directory, Entra ID, Intune
- Systems & Networks: Windows, macOS, Linux, TCP/IP, VLANs, DNS, DHCP, VPN, firewalls, AWS, Azure, M365, Docker
- Tools: ServiceNow, KnowBe4, Proofpoint, Cisco Umbrella, Excel (Power Query), SAP Ariba, Visio, SharePoint
- Programming: Python, PowerShell, SQL, Java, C, C++, C#/.NET, TypeScript/JavaScript, Node.js, React, HTML/CSS
