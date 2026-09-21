import type { Link } from "./types";

export type ProjectCategory = "Security" | "Software" | "Quantum" | "Community";

export const categories: ProjectCategory[] = [
  "Security",
  "Software",
  "Quantum",
  "Community",
];

export const categoryToHash: Record<ProjectCategory, string> = {
  Security: "security",
  Software: "software",
  Quantum: "quantum",
  Community: "community",
};

/**
 * Includes the pre-rename slugs. Zuhair's printed resume links to
 * zuhairkhan.ca/#projects-cybersecurity, so that hash must keep working.
 */
export const hashToCategory: Record<string, ProjectCategory> = {
  security: "Security",
  cybersecurity: "Security",
  software: "Software",
  quantum: "Quantum",
  community: "Community",
  leadership: "Community",
};

export interface Project {
  title: string;
  category: ProjectCategory;
  /** One line. Everything else lives behind "Read more". */
  body: string;
  bodyExtended?: string;
  meta: string;
  tags: string[];
  links?: Link[];
  timeline?: string;
}

export const projects: Project[] = [
  // ---------------------------------------------------------------- Security
  {
    title: "Network Intrusion Detection System",
    category: "Security",
    body: "A from-scratch NIDS combining signature detection with statistical anomaly scoring, validated against real attack traffic.",
    bodyExtended:
      "Built a network-based intrusion detection system that pairs signature-based rules with statistical anomaly detection. Signature coverage includes port scans, SYN floods, ICMP floods, DNS tunneling, and ARP spoofing. Anomaly detection uses Shannon entropy, Z-score analysis, and inter-arrival timing deviations to flag traffic that no signature matches. Deployed and validated the system in an isolated Docker network driven by real attack tooling — nmap, hping3, and arpspoof — achieving 100% detection accuracy with zero false positives on baseline traffic. Generates HTML security reports with alerts, metrics, and traffic visualisations.",
    meta: "100% detection accuracy with zero false positives on baseline traffic · Validated in an isolated Docker testbed",
    tags: ["IDS/NIDS", "Python", "PCAP", "Docker", "Detection Engineering"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/mbilal29/Network-Intrusion-Detection-System",
      },
    ],
    timeline: "Nov – Dec 2025",
  },
  {
    title: "Web & Application Security CTF Portfolio",
    category: "Security",
    body: "19 capture-the-flag challenges across the OWASP Top 10, each documented with an attack walkthrough and its mitigation.",
    bodyExtended:
      "Completed 19 capture-the-flag challenges from UTSC CSCD27, exploiting OWASP Top 10 classes including broken access control, incomplete mediation, SQL injection, XSS, CSRF, and SSL stripping. Built Python tooling for cryptographic attacks. Every challenge is written up with reconnaissance, exploitation methodology, and the defensive countermeasure that closes it — the portfolio is deliberately framed around improving defensive posture rather than offence for its own sake. Alongside the coursework, I run self-directed SIEM investigation exercises on TryHackMe, pivoting on failed logins, privilege changes, and network events using Splunk SPL to identify suspicious account activity.",
    meta: "19 challenges (UTSC CSCD27) · Python tooling for cryptographic attacks · Self-directed Splunk SPL investigations on TryHackMe",
    tags: ["CTF", "OWASP Top 10", "Cryptography", "Splunk SPL", "Python"],
    links: [
      { label: "GitHub", url: "https://github.com/zuhair-mzk/ctf-portfolio" },
    ],
    timeline: "Fall 2024 – Winter 2025",
  },
  {
    title: "Software Router & Network Protocol Engineering",
    category: "Security",
    body: "A production-quality software router in C — 2,000+ lines implementing IPv4 forwarding, ARP, and ICMP — with a 100% test pass rate.",
    bodyExtended:
      "Built a complete software router from scratch in C with a team partner. Implemented an RFC-compliant IPv4 forwarding engine with Longest Prefix Match routing, a thread-safe ARP cache with automatic timeout and retry logic, and a full ICMP stack (Echo Reply, Time Exceeded, Destination Unreachable). Achieved a 100% test pass rate across 8 scenarios including ping, traceroute, HTTP forwarding, and stress tests, handling real traffic in Mininet under a POX controller with zero compilation warnings and no memory leaks. The surrounding lab series covered Mininet and Wireshark topology analysis, VLAN segmentation and performance measurement with iperf and TC, application-layer analysis against a Python HTTP server, and SDN routing with POX and OpenFlow. Required close reading of RFCs 791, 792, and 826.",
    meta: "2,000+ LOC in C · 100% test pass rate across 8 scenarios · RFCs 791, 792, 826",
    tags: ["C", "Systems Programming", "Mininet", "Wireshark", "SDN", "POX"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/zuhair-mzk/Computer_Networking",
      },
    ],
    timeline: "Fall 2025",
  },
  {
    title: "Access Control Hardening & Incident Response Labs",
    category: "Security",
    body: "Hardened Linux and Mininet hosts, then correlated packet captures and auth logs to find the indicators of compromise they left behind.",
    bodyExtended:
      "Hardened Linux and Mininet VMs with SSH key-based authentication and MFA, then worked the other direction: correlating PCAP, authentication logs, and binary artifacts to identify authentication flaws and indicators of compromise, and to validate that the access-control improvements actually held. The exercise pairs the defensive build-out with the detection work that proves it, which is closer to how access control fails in practice than either half alone.",
    meta: "SSH key-based authentication and MFA · PCAP, auth log, and binary artifact correlation",
    tags: ["Linux", "SSH", "MFA", "Incident Response", "Splunk"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/zuhair-mzk/Computer_Networking",
      },
    ],
    timeline: "Fall 2025",
  },

  // ---------------------------------------------------------------- Software
  {
    title: "StockSocial",
    category: "Software",
    body: "A full-stack platform pairing stock portfolio tracking with a social layer — portfolios, analytics, and shared stock lists.",
    bodyExtended:
      "Designed and implemented a financial social platform merging portfolio management with community features. FastAPI backend for async API endpoints, with a PostgreSQL schema normalised to Boyce-Codd Normal Form covering users, portfolios, holdings, transactions, stock lists, friendships, and reviews. Financial analytics include real-time portfolio valuation against live market data, historical performance via time-series queries, volatility from standard deviation of returns, and beta computation measuring systematic risk against market indices. React and Tailwind frontend with interactive dashboards for portfolio composition, P&L charts, recommendations, and friend activity. Social features include a bidirectional friend system with privacy controls, sharable stock lists with view and edit permissions, and long-form investment thesis reviews with community ratings.",
    meta: "BCNF-normalised PostgreSQL schema · Volatility and beta computation · Friend system with access-controlled sharing",
    tags: ["FastAPI", "Python", "PostgreSQL", "React", "Tailwind CSS"],
    links: [
      { label: "GitHub", url: "https://github.com/zuhair-mzk/StockSocial" },
    ],
    timeline: "Winter 2025",
  },
  {
    title: "Concurrent System Monitoring Tool",
    category: "Software",
    body: "A Linux system monitor in C that parallelises data collection across processes and reports CPU, memory, and sessions in real time.",
    bodyExtended:
      "Developed a system monitoring utility in C for Linux, reporting real-time CPU utilisation, memory statistics, and active user sessions. Uses a multi-process architecture: fork() parallelises data collection so separate children gather CPU, memory, and user info concurrently and pipe results back to the parent, cutting latency versus sequential polling. Signal handling for SIGINT and SIGTSTP ensures graceful cleanup of child processes and proper resource deallocation. Supports sequential output, a refreshing terminal display driven by ANSI escape sequences, and ASCII graphics for CPU and memory trends. Reads Linux kernel interfaces directly — /proc/stat, /proc/uptime, the sysinfo() syscall, and utmp — and ships with a Makefile, Dockerfile, and documented CLI.",
    meta: "fork() and pipes for concurrent collection · Reads /proc/stat, /proc/uptime, sysinfo, utmp · Makefile and Dockerfile",
    tags: ["C", "Linux", "Concurrency", "IPC", "Signal Handling", "Docker"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/zuhair-mzk/concurrent-system-monitor",
      },
    ],
    timeline: "Winter 2024",
  },
  {
    title: "CMS Connect",
    category: "Software",
    body: "An Android app centralising department announcements, events, POSt eligibility checks, and student feedback, built by a team of four.",
    bodyExtended:
      "Led end-to-end development of a department management Android app serving CMS students at UofT. As Scrum Master, organised sprints, ran standups, managed the Jira board, and coordinated code reviews. Architected the app on Clean Architecture principles with an MVP pattern separating business logic from UI for testability. Core features: Firebase Authentication, a real-time event feed with RSVP tracking, announcements with push notifications, a POSt eligibility calculator, and an anonymous complaints system with admin moderation. Wrote JUnit and Mockito tests for the login presenter covering edge cases like network failures and invalid credentials.",
    meta: "Clean Architecture with MVP · JUnit and Mockito coverage · Scrum Master for a team of 4",
    tags: ["Android", "Java", "Firebase", "MVP", "JUnit", "Scrum"],
    links: [
      { label: "GitHub", url: "https://github.com/MustafaTimbawala/B07GR12" },
    ],
    timeline: "Fall 2023",
  },
  {
    title: "MIPS Platformer",
    category: "Software",
    body: "A single-screen platformer written entirely in MIPS assembly, rendering straight to a memory-mapped framebuffer.",
    bodyExtended:
      "Built a complete platformer in MIPS assembly, rendering directly to a memory-mapped display framebuffer at 512x256 with 0x00RRGGBB colour encoding and no graphics library. Implements a full game loop with state management across start menu, gameplay, win, and game-over screens. Mechanics include movement, jumping with gravity simulation, colour-based collision detection, enemy AI with patrol patterns, a health system with visual health bar, and win/lose conditions. Input is read from hardware registers via memory-mapped I/O. Structured as a finite state machine with modular subroutines for sprite drawing and erasing, physics, collision resolution, and screen transitions, with registers used carefully and tight loops optimised for smooth 30 FPS.",
    meta: "Memory-mapped framebuffer rendering · Finite state machine architecture · Documented for teaching",
    tags: ["MIPS Assembly", "Game Dev", "Memory-Mapped I/O"],
    links: [
      { label: "GitHub", url: "https://github.com/zuhair-mzk/check-p" },
      {
        label: "Demo Video",
        url: "https://drive.google.com/file/d/1iuyiDxy0tpuYqMQSArPMI28lJWRybFHq/view?usp=sharing",
      },
    ],
    timeline: "Winter 2024",
  },

  // ----------------------------------------------------------------- Quantum
  {
    title: "Quantum-Safe Security: PQC vs QKD",
    category: "Quantum",
    body: "Undergraduate research comparing quantum key distribution with lattice-based post-quantum cryptography under practical threat models.",
    bodyExtended:
      "Research under Prof. Marcelo Ponce comparing QKD (BB84, E91) with lattice-based PQC (Kyber, Dilithium), studying how they differ in threat model, implementation cost, and performance, and where each fits in a real network stack. Built Python and Qiskit simulations of noise tolerance and QBER thresholds, and contrasted the results with NIST-standardised lattice schemes running on classical hardware. The work addresses practical deployment constraints: QKD needs specialised hardware and dedicated fibre with distance limits, while PQC offers drop-in software replacements compatible with existing infrastructure. Concludes toward a layered architecture where PQC handles authentication and signatures and QKD is deployed selectively on high-value links. Received the 2025 CMS Undergraduate Research Symposium award for the poster.",
    meta: "Best Poster — CMS Undergraduate Research Symposium 2025 · Python/Qiskit simulations of QBER thresholds",
    tags: ["PQC", "QKD", "Qiskit", "Cryptography", "Research"],
    links: [
      {
        label: "Poster",
        url: "https://www.canva.com/design/DAG1Vto1yUQ/h5-Df6CFyGdVh57ZntQlIQ/edit",
      },
    ],
    timeline: "2025",
  },
  {
    title: "PennyLane Codebook",
    category: "Quantum",
    body: "Completed every module of Xanadu's PennyLane Codebook, with original solutions to all chapters and exercises.",
    bodyExtended:
      "Worked through 30+ modules covering quantum computing fundamentals, variational circuits, quantum machine learning, and quantum chemistry simulations. Implemented VQE, QAOA, and quantum neural networks, solving all coding challenges with original solutions and demonstrating circuit construction, parameter optimisation, and gradient-based learning. The repository includes Jupyter notebooks with explanations, visualisations, and performance analysis for each exercise.",
    meta: "Full completion · 30+ modules · VQE, QAOA, and quantum neural networks",
    tags: ["PennyLane", "Python", "Jupyter", "QML"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/zuhair-mzk/quantum_computing",
      },
    ],
    timeline: "May – Jul 2025",
  },
  {
    title: "Qiskit Global Summer School (2025 & 2026)",
    category: "Quantum",
    body: "Two years of IBM's summer school — the 2025 Quantum Excellence badge, then 2026's Quantum Fundamentals track.",
    bodyExtended:
      "Intensive programs covering advanced quantum algorithms, error mitigation, and practical quantum computing workflows. Topics spanned variational algorithms (VQE, QAOA), quantum simulation methods, noise characterisation, and circuit optimisation. Labs involved implementing algorithms on IBM Quantum hardware, analysing error rates, and applying mitigation techniques such as zero-noise extrapolation and probabilistic error cancellation, with emphasis on translating theoretical algorithms into hardware-aware implementations that respect real device constraints. Earned the Quantum Excellence badge in 2025 by completing all assignments with high marks, and returned in 2026 for the Quantum Fundamentals track.",
    meta: "Quantum Excellence badge (2025) · Quantum Fundamentals (2026)",
    tags: ["IBM Quantum", "Qiskit", "Error Mitigation", "Python"],
    links: [
      { label: "GitHub", url: "https://github.com/zuhair-mzk/qgss-2025" },
      {
        label: "2026 Badge",
        url: "https://www.credly.com/badges/36f93823-9f46-4b3d-8424-2de6b283df3d",
      },
    ],
    timeline: "2025 & 2026",
  },
  {
    title: "Qiskit Fall Fest @ UofT",
    category: "Quantum",
    body: "Placed 3rd overall building a hybrid quantum-classical learning model in a 24-hour hackathon.",
    bodyExtended:
      "A 24-hour hackathon focused on quantum machine learning. Our team built a hybrid model combining variational quantum circuits with classical neural network layers for classification, using quantum feature maps to encode classical data into quantum states and parameterised circuits to extract quantum features. Benchmarked against purely classical approaches, reaching competitive accuracy with a reduced parameter count, and integrated Qiskit's simulation tooling with PennyLane's differentiable programming framework. Placed 3rd out of 30+ teams.",
    meta: "3rd overall out of 30+ teams",
    tags: ["Qiskit", "PennyLane", "QML", "Hackathon"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/zuhair-mzk/utqc-qlearn-25-26",
      },
    ],
    timeline: "October 2025",
  },

  // --------------------------------------------------------------- Community
  {
    title: "Q-SITE — Partnerships & Hackathon Associate",
    category: "Community",
    body: "Sponsor outreach and hackathon coordination for Canada's largest student-led quantum computing conference.",
    bodyExtended:
      "Supported partnerships, sponsor outreach, and hackathon coordination for Q-SITE Toronto 2025, contributing to challenge development and student engagement for a large student-led quantum conference. The role sat at the intersection of academia, industry, and the quantum ecosystem, combining technical understanding of the subject matter with event management and community building.",
    meta: "Sponsor outreach · Hackathon challenge development · Student engagement",
    tags: ["Partnerships", "Event Management", "Community"],
    links: [
      { label: "Website", url: "https://www.qsiteconf.ca/" },
      { label: "Instagram", url: "https://www.instagram.com/qsite.toronto/" },
    ],
    timeline: "Oct 2025 – May 2026",
  },
  {
    title: "Webmaster — UTSC MSA",
    category: "Community",
    body: "Designed, deployed, and maintained the official website for one of UTSC's largest student communities.",
    bodyExtended:
      "Provided technical and operational leadership for the Muslim Students' Association. Designed and deployed the official MSA website from scratch with React, Node.js and Express, and MongoDB, building event calendars, prayer time displays, resource libraries, and contact forms. Supported technical operations for large student events with 100+ attendees, and assisted with event coordination, volunteer logistics, and community outreach.",
    meta: "Official website built and deployed · Technical support for 100+ attendee events",
    tags: ["React", "Node.js", "MongoDB", "Community Leadership"],
    links: [
      { label: "Website", url: "https://www.utscmsa.com/" },
      { label: "GitHub", url: "https://github.com/zuhair-mzk/msa_utsc" },
    ],
    timeline: "Sep 2023 – Aug 2024",
  },
  {
    title: "Vice President Finance — The Citizens Foundation",
    category: "Community",
    body: "Led financial planning and fundraising for UTSC's TCF chapter, a charity funding education access.",
    bodyExtended:
      "Led financial planning and budgeting for UTSC's chapter of The Citizens Foundation across an academic year, managing fundraising initiatives, tracking expenses, and ensuring transparent allocation of funds. Represented first-year students as a first-year rep, supporting onboarding, engagement, and chapter growth, and helped organise and execute campus fundraising events and community outreach supporting education access.",
    meta: "Chapter financial planning and budgeting · Campus fundraising and outreach",
    tags: ["Nonprofit", "Finance", "Fundraising", "Leadership"],
    links: [
      { label: "TCF Canada", url: "https://tcfcanada.org/" },
      { label: "Instagram", url: "https://www.instagram.com/tcfutsc/" },
    ],
    timeline: "Sep 2022 – May 2024",
  },
  {
    title: "Camp Events Coordinator — PMCC",
    category: "Community",
    body: "Ran a 3-day multi-sport tournament for community youth, from bracket design through to prize distribution.",
    bodyExtended:
      "Led youth sports programming and tournament operations at Peel Muslim Community Centre. Organised and executed a 3-day multi-sport tournament across tennis, badminton, and table tennis, designing brackets and scheduling systems for fair matchups and efficient use of facilities across concurrent events. Served as tennis match umpire, and managed court scheduling, equipment distribution, volunteer task assignment, and prize ceremonies, supervising a team of 5 volunteers.",
    meta: "3-day multi-sport tournament · Team of 5 volunteers",
    tags: ["Youth Leadership", "Sports", "Event Management"],
    timeline: "Apr 2024 – Aug 2024",
  },
  {
    title: "Event Organizer — The Omar Fund",
    category: "Community",
    body: "Co-organised charity sports tournaments and youth-led fundraisers supporting local families in need.",
    bodyExtended:
      "Organised charity sports events and youth-led fundraising initiatives through The Omar Fund. Co-organised large-scale soccer and dodgeball tournaments bringing together youth and families for charitable causes, supervising venue logistics from facility booking through equipment setup and safety protocols. Designed and managed tournament bracket systems, handled player registrations, and coordinated volunteer teams for event operations, alongside outreach to raise funds and community awareness.",
    meta: "Large-scale charity tournaments · Venue logistics and bracket management",
    tags: ["Charity", "Event Coordination", "Leadership"],
    links: [
      { label: "Instagram", url: "https://www.instagram.com/theomarfund/" },
    ],
    timeline: "Sep 2023 – Dec 2024",
  },
];
