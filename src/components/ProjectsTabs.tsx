"use client";

import { useState } from "react";

type ProjectCategory = "Quantum Computing" | "Cybersecurity & Networking" | "Software Engineering" | "Leadership & Community";

interface Project {
  title: string;
  body: string;
  bodyExtended?: string;
  meta: string;
  tags: string[];
  links?: { label: string; url: string }[];
  timeline?: string;
}

const projectsData: Record<ProjectCategory, Project[]> = {
  "Quantum Computing": [
    {
      title: "Quantum Computing Course – UofT",
      body: "Completed Introduction to Quantum Computing under Prof. Marcelo Ponce. Delivered research presentation on PQC & QKD exploring their complementary roles in hybrid security.",
      bodyExtended: "Comprehensive course covering the mathematical foundations of quantum computing, including linear algebra in Hilbert spaces, quantum state evolution, and measurement theory. Topics included quantum tunneling, Bell inequalities, quantum entanglement, and cryptographic applications. Final research presentation explored how Post-Quantum Cryptography and Quantum Key Distribution address different threat vectors in the quantum era, proposing hybrid architectures that leverage both technologies. The course provided rigorous theoretical grounding while connecting abstract concepts to real-world applications in security, optimization, and simulation.",
      meta: "Topics: Linear algebra, quantum mechanics, tunneling, Bell inequalities, cryptographic applications",
      tags: ["QC Theory", "PQC", "QKD"],
      links: [
        { label: "Course Site", url: "https://cmsweb.utsc.utoronto.ca/marcelo-ponce/teaching/d94--qc/index.html" },
        { label: "Presentation", url: "https://drive.google.com/drive/folders/179TPIacUaYcYeV8Jj4zznRIGlUpDnQD3?usp=sharing" }
      ],
      timeline: "Summer 2025",
    },
    {
      title: "PennyLane Codebook Completion",
      body: "Completed all modules of Xanadu's PennyLane Codebook, mastering quantum circuit design, optimization, and hybrid quantum-classical algorithms.",
      bodyExtended: "Worked through 30+ modules covering quantum computing fundamentals, variational circuits, quantum machine learning, and quantum chemistry simulations. Implemented algorithms including VQE (Variational Quantum Eigensolver), QAOA (Quantum Approximate Optimization Algorithm), and quantum neural networks. Solved all coding challenges with original solutions, demonstrating proficiency in quantum circuit construction, parameter optimization, and gradient-based learning. Repository includes detailed Jupyter notebooks with explanations, visualizations, and performance analysis for each exercise. This hands-on experience provides a strong foundation for research and development in quantum software engineering.",
      meta: "Full completion with original solutions to all chapters and exercises",
      tags: ["PennyLane", "Python", "Jupyter"],
      links: [{ label: "GitHub", url: "https://github.com/zuhair-mzk/quantum_computing" }],
      timeline: "May – July 2025",
    },
    {
      title: "Quantum-Safe Security: PQC vs QKD",
      body: "Ongoing research under Prof. Marcelo Ponce evaluating quantum-safe security by comparing quantum key distribution protocols (BB84, E91) with lattice-based post-quantum cryptography for real-world networks.",
      bodyExtended: "Research project studying how QKD and PQC differ in threat models, implementation cost, and performance, and where each fits in future network stacks. Current work includes simulating BB84/E91, benchmarking key-rate and error-rate behaviour, and contrasting this with NIST-standardized lattice schemes (Kyber, Dilithium) on classical hardware. The project explores when to favor QKD, when PQC alone is sufficient, and how layered architectures can use both—proposing a hybrid network-level strategy where PQC handles authentication and signatures while QKD can be deployed selectively for high-value links. Research addresses practical deployment challenges: QKD requires specialized hardware and dedicated fiber links with distance limitations, while PQC offers drop-in software replacements compatible with existing infrastructure. Analysis includes performance trade-offs, security guarantees against quantum adversaries, and cost-benefit considerations for different use cases. Presented poster at CMS Undergraduate Research Symposium 2025, winning Best Poster award. Currently preparing findings for publication.",
      meta: "Winner of Best Poster – CMS Undergraduate Research Symposium 2025 · Publication in progress",
      tags: ["PQC", "QKD", "Quantum Security", "Research"],
      links: [
        { label: "Poster", url: "https://www.canva.com/design/DAGXxY8Ej1E/d2A30k66MbM2c5IM7MQZhw/edit" }
      ],
      timeline: "August 2025 – Present",
    },
    {
      title: "PhotonQML – Variational Quantum Classifier",
      body: "Developing a variational quantum classifier on photonic hardware simulators using PennyLane and Strawberry Fields. Benchmarking CV models against classical baselines.",
      bodyExtended: "Implementing continuous-variable quantum circuits using squeezed states, beamsplitters, and phase shifters to build a hybrid quantum-classical classifier. The project explores photonic quantum computing's unique advantages for machine learning tasks, particularly in continuous data domains. Using Strawberry Fields' photonic simulator to prototype circuits with displacement and squeezing gates, then optimizing parameters via gradient descent in PennyLane. Benchmarking against classical SVMs and neural networks on standard datasets to quantify quantum advantage. The work demonstrates practical applications of photonic QC beyond gate-based models, aligning with Xanadu's hardware architecture.",
      meta: "Exploring circuit designs with beamsplitters and continuous-variable gates",
      tags: ["PennyLane", "Strawberry Fields", "QML"],
      timeline: "September 2025 – Present",
    },
    {
      title: "Qiskit Global Summer School 2025",
      body: "Completed all labs and assignments for IBM's Qiskit Global Summer School, earning Quantum Excellence badge for full completion.",
      bodyExtended: "Intensive two-week program covering advanced quantum algorithms, error mitigation techniques, and practical quantum computing workflows. Topics included variational algorithms (VQE, QAOA), quantum simulation methods, noise characterization, and circuit optimization strategies. Hands-on labs involved implementing algorithms on IBM Quantum hardware, analyzing error rates, and applying error mitigation techniques like zero-noise extrapolation and probabilistic error cancellation. The program emphasized translating theoretical algorithms into hardware-aware implementations that account for real device constraints. Earned the Quantum Excellence badge by completing all assignments with high marks and engaging actively in the global student community.",
      meta: "Advanced quantum algorithms, circuit optimization, and practical implementation",
      tags: ["IBM Quantum", "Qiskit", "Python"],
      links: [
        { label: "GitHub", url: "https://github.com/zuhair-mzk/qgss-2025" },
        { label: "Certificate", url: "/qiskit-certificate.pdf" }
      ],
      timeline: "August 2025",
    },
    {
      title: "Q-SITE Conference 2025",
      body: "Active Partnerships and Hackathon Associate for Q-SITE Toronto 2025. Contributing to sponsor outreach, challenge development, and hackathon logistics.",
      bodyExtended: "Serving as Partnerships and Hackathon Associate for Canada's largest student-led quantum computing conference. Responsibilities include developing relationships with industry sponsors (IBM, Xanadu, QuEra, D-Wave), designing technical hackathon challenges that balance accessibility with depth, and coordinating logistics for 200+ attendees. Working with academic and industry partners to create meaningful networking opportunities and bridge the gap between quantum research and practical applications. The role combines technical understanding of quantum computing with event management and community building skills, helping grow Toronto's quantum ecosystem.",
      meta: "Student-led quantum conference bridging academia, industry, and education",
      tags: ["Outreach", "Event Management", "Community"],
      links: [
        { label: "Website", url: "https://www.qsiteconf.ca/" },
        { label: "Instagram", url: "https://www.instagram.com/qsite.toronto/" }
      ],
      timeline: "2025 – Present",
    },
    {
      title: "Qiskit Fall Fest @ UofT 2025",
      body: "Placed 3rd overall at University of Toronto Qiskit Fall Fest Hackathon. Worked on hybrid quantum-classical learning models using Qiskit and PennyLane.",
      bodyExtended: "24-hour hackathon focused on quantum machine learning applications. Our team developed a hybrid quantum-classical model combining variational quantum circuits with classical neural network layers for classification tasks. Implemented quantum feature maps to encode classical data into quantum states, then used parameterized circuits to extract quantum features. Benchmarked performance against purely classical approaches, demonstrating competitive accuracy with reduced parameter count. The project showcased effective integration between Qiskit's quantum simulation tools and PennyLane's differentiable programming framework. Placed 3rd out of 30+ teams through strong technical execution and clear communication of quantum advantage scenarios.",
      meta: "24-hour hackathon focused on quantum machine learning applications",
      tags: ["Qiskit", "QML", "Hackathon"],
      links: [{ label: "GitHub", url: "https://github.com/zuhair-mzk/utqc-qlearn-25-26" }],
      timeline: "October 2025",
    },
    {
      title: "IBM Quantum Developer Certification",
      body: "Currently preparing for IBM Certified Quantum Developer Exam, focusing on quantum algorithms, circuit optimization, and hardware implementation.",
      bodyExtended: "Comprehensive preparation covering quantum computing fundamentals, Qiskit SDK proficiency, algorithm implementation (Grover's, Shor's, VQE, QAOA), and quantum error mitigation techniques. Study plan includes circuit transpilation for different quantum hardware topologies, noise characterization methods, and best practices for running algorithms on IBM Quantum systems. The certification validates industry-recognized expertise in quantum software development, demonstrating ability to design, implement, and optimize quantum applications. Targeting completion in Q1 2026 to complement research experience with formal industry credential.",
      meta: "Comprehensive certification covering Qiskit, quantum computing fundamentals, and practical applications",
      tags: ["IBM Quantum", "Qiskit", "Certification"],
      timeline: "Ongoing (2025 – 2026)",
    },
  ],
  "Cybersecurity & Networking": [
    {
      title: "Network Engineering Labs (CSCD58)",
      body: "Completed four comprehensive network labs covering protocols, performance analysis, SDN, and application layer technologies.",
      bodyExtended: "Hands-on lab series exploring network fundamentals through practical experimentation. Lab 1 (Mininet & Wireshark): Built virtual network topologies using Mininet, analyzed ICMP, ARP, and Ethernet frames in Wireshark to understand protocol behavior and packet structure. Lab 2 (VLANs & Performance): Configured VLANs for network segmentation, measured bandwidth and RTT under varying conditions using iperf and ping, implemented traffic shaping with TC (traffic control) to simulate realistic network constraints. Lab 3 (Application Layer): Deployed Python HTTP server in Mininet, tested client-server communication with wget, logged and analyzed HTTP request/response patterns. Lab 4 (SDN with POX): Implemented controller-based routing using POX and OpenFlow, wrote Python logic for packet forwarding decisions, debugged flows and controller events in real time. The labs provided deep understanding of networking stack from link layer to application layer, combining theoretical knowledge with practical troubleshooting skills.",
      meta: "Mininet, Wireshark, VLANs, iperf, TC traffic shaping, POX controller, OpenFlow, HTTP servers",
      tags: ["Mininet", "Wireshark", "SDN", "POX", "VLANs", "Network Performance"],
      timeline: "Fall 2025",
    },
    {
      title: "Offline Social Network – Security Contributions",
      body: "Reviewed backend for security vulnerabilities, improved input validation/sanitization across APIs. Helped design secure authentication flows with short-lived JWTs.",
      bodyExtended: "Conducted comprehensive security review of a React Native social networking app with Node.js backend. Identified and patched multiple vulnerabilities including insufficient input validation on user-generated content, weak session management, and potential SQL injection vectors in custom queries. Implemented defense-in-depth measures: input sanitization using parameterized queries and HTML escaping, rate limiting on authentication endpoints to prevent brute force, audit logging for sensitive operations, and location privacy features with coordinate obfuscation. Redesigned authentication flow using short-lived JWT access tokens with device-bound refresh tokens, implementing secure token storage in platform-specific keychains. Enforced bcrypt/argon2 password hashing with proper salting and cost factors. The work significantly improved the app's security posture before public launch.",
      meta: "Enforced bcrypt/argon2 password storage · Built audit logging · Location privacy with obfuscation · Rate-limiting and endpoint throttling",
      tags: ["Security Review", "JWT", "API Security"],
      links: [
        { label: "Website", url: "https://offlinesocialnetwork.com" },
        { label: "App Store", url: "https://apps.apple.com/ca/app/offline-app/id6748900038" },
        { label: "Instagram", url: "https://www.instagram.com/trulyoffline/" }
      ],
      timeline: "Summer – Fall 2025",
    },
    {
      title: "Google Cybersecurity Professional Certificate",
      body: "Completed the full 8-course Google Cybersecurity Certificate (v2). Hands-on experience with SIEM tools, Linux, SQL, IDS systems, and Python automation.",
      bodyExtended: "Comprehensive 8-course program covering the full security analyst skillset: network fundamentals, threat detection and response, security automation with Python, incident handling workflows, and compliance frameworks. Hands-on labs included configuring Splunk and Chronicle SIEM systems, writing SQL queries for security analysis, implementing access controls in Linux, analyzing network traffic with tcpdump and Wireshark, and building automated threat detection scripts. Mastered the NIST Cybersecurity Framework, understanding risk assessment, asset classification, and security controls. Documented all labs, tools, and methodologies in a private repository with detailed writeups and code samples. The certificate provides industry-recognized validation of practical security engineering skills.",
      meta: "Private repo documenting all labs, exercises, and tools · Verified competency in risk assessment, network defense, and modern security tooling",
      tags: ["SIEM", "Linux", "Python", "IDS"],
      links: [
        { label: "Credly Badge", url: "https://www.credly.com/go/BiCrN8O2" },
        { label: "Coursera Cert", url: "https://coursera.org/verify/professional-cert/PTNLUFMTLR5Y" }
      ],
      timeline: "2025",
    },
    {
      title: "Cybersecurity CTF Portfolio (15+ Challenges)",
      body: "Solved challenges across cryptography, reverse engineering, packet sniffing, TLS simulation, and Docker-based security. Structured writeups with attack methodology and mitigation notes.",
      bodyExtended: "Built a comprehensive CTF portfolio documenting solutions to 15+ security challenges spanning multiple domains. Cryptography challenges included breaking weak AES implementations, analyzing ChaCha20 stream ciphers, and exploiting poor random number generation. Reverse engineering work involved analyzing compiled binaries, debugging shellcode, and identifying vulnerabilities in C programs. Network security challenges covered ARP spoofing attacks, TLS handshake analysis, and packet manipulation with Scapy. Each writeup follows a structured format: reconnaissance, exploitation methodology, red-team perspective, and defensive countermeasures. The portfolio demonstrates hands-on offensive security skills while maintaining an ethical mindset focused on improving defensive postures. Repository includes sanitized code samples and ethical use disclaimers.",
      meta: "Private repo with sanitized solutions · Includes AES cracking, ChaCha20, ARP spoofing, SQL injection, shellcode debugging · Ethical disclaimer included",
      tags: ["CTF", "Cryptography", "Reverse Engineering", "Packet Analysis"],
      timeline: "Fall 2024 – Winter 2025",
    },
    {
      title: "Intrusion Detection System (IDS)",
      body: "Final term project building a packet-inspection IDS. Designing rules for anomaly detection and basic signature checks.",
      bodyExtended: "Building a network-based intrusion detection system from scratch in Python for deep packet inspection and threat detection. The system captures live traffic using raw sockets and libpcap, parsing protocols (Ethernet, IP, TCP, UDP) to extract relevant features. Implementing both signature-based detection (matching known attack patterns like SQL injection attempts, port scans, malformed packets) and anomaly-based detection (statistical analysis of traffic patterns to identify deviations). Detection engine uses a rule-based approach with configurable thresholds for false positive tuning. Features include real-time alerting with severity levels, PCAP file analysis for forensic investigation, and detailed logging of suspicious activity. The project demonstrates understanding of network protocols, attack vectors, and defensive monitoring strategies essential for security operations.",
      meta: "Currently working on · Real-time packet inspection and threat detection · Signature and anomaly-based detection",
      tags: ["IDS", "Python", "PCAP", "Anomaly Detection"],
      timeline: "Fall 2025 – In Progress",
    },
    {
      title: "CompTIA Security+ Certification",
      body: "Currently preparing for CompTIA Security+ (SY0-701). Focus areas: threat modeling, OS hardening, crypto systems, network defense, IAM, and cloud security.",
      bodyExtended: "Preparing for industry-standard Security+ certification covering comprehensive security fundamentals across five domains: Threats, Attacks, and Vulnerabilities (identifying and mitigating attack vectors); Architecture and Design (secure network design, cryptographic solutions, PKI); Implementation (secure protocols, IAM, endpoint hardening); Operations and Incident Response (security operations, forensics, disaster recovery); and Governance, Risk, and Compliance (security policies, regulations, risk management frameworks). Study plan includes hands-on practice with security tools, understanding of cryptographic primitives and protocols, cloud security concepts (IaaS/PaaS/SaaS models), and practical incident response procedures. Targeting certification in early 2026 to complement hands-on CTF experience with formal industry credential recognized globally.",
      meta: "Industry-standard certification covering comprehensive security fundamentals",
      tags: ["CompTIA", "Security+", "Certification"],
      timeline: "Expected Early 2026",
    },
  ],
  "Software Engineering": [
    {
      title: "StockSocial – Stock Portfolio Social Network",
      body: "Built a full-stack web app combining stock portfolio tracking with social networking — portfolios, analytics, and shared stock lists.",
      bodyExtended: "Designed and implemented a full-stack financial social platform that merges portfolio management with community features. Backend built with FastAPI (Python) for high-performance async API endpoints, leveraging Python's data science ecosystem for financial calculations. PostgreSQL database schema normalized to Boyce-Codd Normal Form (BCNF) to eliminate redundancy, with entities for users, portfolios, holdings (stocks owned), transactions (buy/sell history), stock lists (curated collections), friendships, and reviews. Implemented complex financial analytics: real-time portfolio valuation pulling live market data, historical performance tracking with time-series queries, volatility calculations using standard deviation of returns, and beta computation measuring systematic risk relative to market indices. Frontend developed in React with Tailwind CSS for responsive design, featuring interactive dashboards displaying portfolio composition, P&L charts, stock list recommendations, and friend activity feeds. Social features include bidirectional friend system with privacy controls, sharable stock lists with view/edit permissions, and long-form investment thesis reviews (up to 4,000 characters) with community ratings. The project demonstrates full-stack architecture, database design expertise, financial domain knowledge, and ability to integrate complex data analytics with user-friendly interfaces.",
      meta: "FastAPI backend with async database access · Portfolio valuation, volatility/beta computation · React + Tailwind frontend · Social features: friend system, sharable lists with access control, 4,000-character reviews",
      tags: ["FastAPI", "Python", "PostgreSQL", "React", "Tailwind CSS", "Data Analytics"],
      links: [
        { label: "GitHub", url: "https://github.com/zuhair-mzk/StockSocial" }
      ],
      timeline: "Winter 2025",
    },
    {
      title: "Quotis – Real-Time Service Marketplace",
      body: "Architected and led development of a real-time platform connecting users with handymen, featuring multimedia job postings, WebSocket messaging, and live arrival tracking.",
      bodyExtended: "Co-founded and served as Tech Lead for Quotis, a startup marketplace connecting homeowners with verified service providers. Led technical architecture decisions for a scalable real-time platform handling concurrent users, live messaging, and geolocation tracking. Backend built with Node.js and Express, using MongoDB for flexible schema design accommodating varied service types. Implemented AWS S3 integration for secure storage of job photos and contractor portfolios, with presigned URLs for access control. Real-time features powered by WebSocket connections: instant messaging between users and contractors, live order status updates, and ETA tracking using geolocation APIs. Frontend developed in React Native with TypeScript for type-safe, cross-platform mobile experience on iOS and Android. As Scrum Master, managed agile sprints, prioritized features based on user feedback, and coordinated a distributed team. Secured $4,000 in startup grants from university entrepreneurship programs. Generated significant early traction with 20+ freelancers on waitlist for platform onboarding. The project demonstrated full-stack architecture skills, startup leadership, and ability to build market-ready products.",
      meta: "Co-founder & Tech Lead · Secured $4,000 in grants · 20+ freelancers waitlisted for onboarding · Managed agile delivery as Scrum Master",
      tags: ["React Native", "TypeScript", "Node.js", "MongoDB", "AWS S3", "WebSockets", "System Design"],
      links: [
        { label: "GitHub", url: "https://github.com/UofT-UTSC-CS-sandbox/final-term-project-quotis" }
      ],
      timeline: "Summer 2024",
    },
    {
      title: "MIPS Platformer Assembly Game",
      body: "Developed a single-screen platformer entirely in MIPS assembly, rendering directly to a memory-mapped framebuffer.",
      bodyExtended: "Built a complete platformer game in MIPS assembly language, demonstrating mastery of low-level programming and computer architecture. The game renders directly to a memory-mapped display framebuffer (512x256 pixels, 0x00RRGGBB color encoding), bypassing any graphics libraries. Implemented a full game loop with state management: start menu, active gameplay, win screen, and game-over screen. Core gameplay mechanics include player movement (left/right), jumping with realistic gravity simulation, collision detection using color-based hitboxes, enemy AI with patrol patterns, health system with visual health bar, and win/lose conditions. Input handled via memory-mapped I/O reading keyboard state from hardware registers. Structured program as a finite state machine with modular subroutines: sprite drawing and erasing (player, enemies, platforms, UI elements), physics calculations, collision resolution, and screen transitions. Used registers efficiently for state management and optimized tight loops for smooth 30 FPS gameplay. Thoroughly documented the architecture including framebuffer memory layout, state offset calculations, and calling conventions. The project serves as both a technical achievement and an educational resource for teaching assembly programming concepts. Includes demo video showcasing gameplay mechanics.",
      meta: "Structured as state machine with sprite drawing/erasing routines · 0x00RRGGBB color encoding for collision logic · Thoroughly documented architecture for teaching purposes",
      tags: ["MIPS Assembly", "Game Dev", "Memory-Mapped I/O", "Low-Level Graphics"],
      links: [
        { label: "GitHub", url: "https://github.com/zuhair-mzk/check-p" },
        { label: "Demo Video", url: "https://drive.google.com/file/d/1iuyiDxy0tpuYqMQSArPMI28lJWRybFHq/view?usp=sharing" }
      ],
      timeline: "Winter 2024",
    },
    {
      title: "Concurrent System Monitoring Tool",
      body: "Built a concurrent system monitoring tool in C that reports CPU, memory, and user-session statistics on Linux in real time.",
      bodyExtended: "Developed a production-quality system monitoring utility in C for Linux environments, demonstrating mastery of systems programming and concurrent design. The tool reports real-time CPU utilization, memory statistics (used/free/cached/shared), and active user sessions with automatic refresh. Implemented multi-process architecture using fork() to parallelize data collection: separate child processes gather CPU stats, memory stats, and user info concurrently, communicating results to parent via pipes. This concurrent design significantly reduces latency compared to sequential polling. Robust signal handling for SIGINT (Ctrl+C) and SIGTSTP (Ctrl+Z) ensures graceful cleanup of child processes and proper resource deallocation. Supports multiple output modes: sequential text output, refreshing terminal display with ANSI escape sequences, and ASCII graphics for visual CPU/memory trends. Direct interaction with Linux kernel interfaces including /proc/stat for CPU metrics, /proc/uptime for system uptime, sysinfo() syscall for memory, and utmp for user sessions. Packaged with comprehensive Makefile for easy compilation, Dockerfile for containerized execution, and detailed CLI with usage documentation. The project demonstrates low-level systems expertise and production software engineering practices.",
      meta: "Direct Linux kernel interface interaction via /proc/stat, /proc/uptime, sysinfo, and utmp · Production-quality C code with Dockerfile, Makefile, and comprehensive CLI",
      tags: ["C", "Linux", "Concurrency", "Pipes & IPC", "Signal Handling", "Docker"],
      links: [
        { label: "GitHub", url: "https://github.com/zuhair-mzk/concurrent-system-monitor" }
      ],
      timeline: "Winter 2024",
    },
    {
      title: "CMS Connect – Android App for Department Events & Feedback",
      body: "Led a 4-person Scrum team building an Android app that centralizes CMS department announcements, events, POSt eligibility checks, and student feedback.",
      bodyExtended: "Led end-to-end development of a department management Android app serving 1,000+ CMS students at UofT. As Scrum Master, organized sprints, facilitated daily standups, managed the Jira board, and coordinated code reviews to maintain delivery velocity. Architected the app using Clean Architecture principles with MVP (Model-View-Presenter) pattern, separating business logic from UI for improved testability and maintainability. Implemented core features: Firebase Authentication for secure user login, real-time event feed with RSVP tracking, department announcements with push notifications, POSt (Program of Study) eligibility calculator, and anonymous complaints submission system with admin moderation. Built rating and feedback flows allowing students to evaluate department services. Wrote comprehensive JUnit and Mockito tests for the login presenter, achieving 85% code coverage and validating edge cases like network failures and invalid credentials. The project demonstrated strong leadership, software architecture skills, and ability to deliver production-quality mobile applications.",
      meta: "Applied Clean Architecture + MVP for testability · Wrote JUnit + Mockito tests for validation · Managed sprints, standups, and Jira board as Scrum Master",
      tags: ["Android", "Java/Kotlin", "Firebase", "MVP", "JUnit/Mockito", "Scrum"],
      links: [
        { label: "GitHub", url: "https://github.com/MustafaTimbawala/B07GR12" }
      ],
      timeline: "Fall 2023",
    },
  ],
  "Leadership & Community": [
    {
      title: "Founder & Technical Lead — KZ Collections",
      body: "Founded and scaled a fashion e-commerce brand while leading full-stack technical development and business operations. Built Shopify backend customizations, automated inventory syncing, and drove 65% conversion increase.",
      bodyExtended: "Founded and scaled a fashion e-commerce brand from the ground up, handling both technical development and business operations. Built custom Shopify backend integrations including automated inventory syncing, email marketing workflows, and customer data pipelines that drove a 65% increase in conversion rate within 3 months. Led operations and logistics with a team of 3 (marketing + fulfillment), optimizing client communication channels, fulfillment speed, and coordinating product drops. Migrated entire infrastructure end-to-end including DNS configuration, HTTPS certificate management, CDN caching optimization, and Shopify metaobject data models for flexible content management. Implemented Shopify-native access controls and security hardening to reduce attack surface and protect customer data. The project demonstrates entrepreneurship, full-stack technical skills, team leadership, and ability to deliver measurable business results while maintaining secure, scalable infrastructure.",
      meta: "65% conversion increase · Full infrastructure migration (DNS, HTTPS, CDN) · Team of 3 (marketing + fulfillment)",
      tags: ["Entrepreneurship", "Full-Stack", "Leadership", "Shopify"],
      links: [
        { label: "Website", url: "https://kzcollections.ca/" },
        { label: "GitHub", url: "https://github.com/zuhair-mzk/kzcollections" }
      ],
      timeline: "July 2024 – Present",
    },
    {
      title: "Webmaster & Volunteer — UTSC MSA",
      body: "Technical and operational leadership at one of the largest student communities at UTSC. Designed and deployed official MSA website using React, Node.js, and MongoDB. Coordinated Ramadan, community, and sports programming.",
      bodyExtended: "Provided technical and operational leadership for the Muslim Students' Association, one of the largest and most active student communities at UTSC. Designed and deployed the official MSA website from scratch using React for the frontend, Node.js with Express for the backend API, and MongoDB for data persistence. Built features including event calendars, prayer time displays, resource libraries, and contact forms. Coordinated large-scale community programming including Ramadan iftars (100+ attendees), community sports tournaments, and social events. Managed logistics for Dawah (outreach) initiatives, tabling events across campus, and volunteer coordination. Assisted with Friday prayer setup, backend communications with university administration, and provided technical and operational support for community events. The role combined full-stack web development with community leadership, event planning, and volunteer management skills.",
      meta: "100+ iftar attendees · Official website deployment · Event coordination & volunteer management",
      tags: ["Community Leadership", "Full-Stack", "Volunteering", "React"],
      links: [
        { label: "Website", url: "https://www.utscmsa.com/" },
        { label: "GitHub", url: "https://github.com/zuhair-mzk/msa_utsc" }
      ],
      timeline: "Jan 2024 – Sep 2024",
    },
    {
      title: "Event Organizer — The Omar Fund",
      body: "Organized charity sports events and youth-led fundraisers supporting local families in need. Co-organized large-scale tournaments (soccer, dodgeball) and supervised venue logistics, bracket systems, and volunteer coordination.",
      bodyExtended: "Organized charity sports events and youth-led fundraising initiatives supporting local families in need through The Omar Fund. Co-organized and executed large-scale community tournaments including soccer and dodgeball competitions that brought together youth and families for charitable causes. Supervised all venue logistics including facility booking, equipment setup, and safety protocols. Designed and managed tournament bracket systems, handled player registrations, and coordinated teams of volunteers for event operations. Led outreach efforts to raise funds and community awareness through youth-led campaigns and social media engagement. The role demonstrated project management, logistics coordination, and community organizing skills while contributing to meaningful charitable impact.",
      meta: "Large-scale charity tournaments · Venue logistics & bracket management · Youth-led fundraising",
      tags: ["Charity", "Event Coordination", "Leadership"],
      links: [
        { label: "Instagram", url: "https://www.instagram.com/theomarfund/" }
      ],
      timeline: "Sep 2023 – Dec 2024",
    },
    {
      title: "Camp Events Coordinator — PMCC",
      body: "Led youth tournaments and community programming at Peel Muslim Community Center. Ran a 3-day multi-sport tournament (tennis, badminton, table tennis) with bracket design, umpiring, scheduling, and prize distribution.",
      bodyExtended: "Led youth sports programming and tournament operations at Peel Muslim Community Center (PMCC). Organized and executed a 3-day multi-sport tournament featuring tennis, badminton, and table tennis competitions for community youth. Designed tournament brackets and scheduling systems to ensure fair matchups and efficient use of facilities across multiple concurrent events. Served as tennis match umpire, maintaining fair play and officiating disputes. Managed all operational logistics including court scheduling, equipment distribution, volunteer task assignment, and prize distribution ceremonies. Supervised operations with a team of 5 volunteers, ensuring a safe, engaging, and professionally-run environment for all participants. The role combined sports knowledge, event management, team leadership, and community engagement skills.",
      meta: "3-day multi-sport tournament · Team of 5 volunteers · Safe & engaging youth environment",
      tags: ["Youth Leadership", "Sports", "Event Management"],
      timeline: "Apr 2024 – Aug 2024",
    },
    {
      title: "Charity Volunteer — TCF UTSC",
      body: "Volunteer for The Citizens Foundation (TCF) UTSC chapter — a charity providing education access through community fundraising. Supported student-led fundraising initiatives, outreach, tabling, and awareness campaigns.",
      bodyExtended: "Active volunteer with The Citizens Foundation (TCF) UTSC chapter, an international charity organization dedicated to providing quality education access to underprivileged children in Pakistan through community fundraising efforts. Supported student-led fundraising initiatives across campus throughout the academic year, helping to raise funds for school construction and educational programs. Assisted in organizing outreach campaigns, staffing information tables at campus events, and raising awareness about educational inequality and TCF's mission. Contributed to the planning and execution of fundraising events including bake sales, awareness weeks, and donor engagement activities. The volunteer work demonstrated commitment to educational equity, community service, and supporting youth empowerment through grassroots organizing.",
      meta: "Education access charity · Campus fundraising & outreach · Community awareness campaigns",
      tags: ["Charity", "Community Outreach", "Volunteering"],
      links: [
        { label: "TCF Canada", url: "https://tcfcanada.org/" },
        { label: "Instagram", url: "https://www.instagram.com/tcfutsc/" }
      ],
      timeline: "2023 – 2024",
    },
  ],
};

export default function ProjectsTabs() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("Quantum Computing");
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  return (
    <div>
      {/* Tab buttons */}
      <div className="mb-6 sm:mb-8 flex flex-wrap gap-2 sm:gap-3">
        {(Object.keys(projectsData) as ProjectCategory[]).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`rounded-full px-3 sm:px-5 py-1.5 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all ${
              activeTab === category
                ? "bg-cyan-400/20 text-cyan-300 border-2 border-cyan-400/50"
                : "bg-slate-800/50 text-slate-400 border-2 border-slate-700/50 hover:border-cyan-400/30 hover:text-cyan-400"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsData[activeTab].map((project, index) => {
          const isExpanded = expandedCards.has(index);
          const hasExtendedContent = !!project.bodyExtended;
          
          return (
            <article
              key={index}
              className="card p-4 sm:p-6 hover:border-cyan-400/30 transition-all opacity-0 animate-fadeIn flex flex-col"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {project.timeline && (
                <p className="text-[10px] sm:text-xs text-cyan-400 font-semibold mb-2 uppercase tracking-wide">
                  {project.timeline}
              </p>
            )}
              <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-3">{project.title}</h3>
              
              <div className="grow">
                <p className={`text-sm sm:text-base text-slate-300 mb-2 sm:mb-3 leading-relaxed ${!isExpanded && hasExtendedContent ? 'line-clamp-3' : ''}`}>
                  {isExpanded && project.bodyExtended ? project.bodyExtended : project.body}
                </p>
                                {hasExtendedContent && (
                  <button
                    onClick={() => toggleCard(index)}
                    className="text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors mb-2 sm:mb-3"
                  >
                    {isExpanded ? 'Show Less ↑' : 'Read More ↓'}
                  </button>
                )}
                
                <p className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4 line-clamp-2">{project.meta}</p>
              </div>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag text-xs px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              
              {project.links && project.links.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link) => (
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
        })}
      </div>
    </div>
  );
}
