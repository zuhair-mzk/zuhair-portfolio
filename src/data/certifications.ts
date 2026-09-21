import type { Certification } from "./types";

/**
 * Certifications, newest first. Each should render as logo + name + date + Verify link.
 * TODO: logo assets not yet added — see public/images/certs/.
 */
export const certifications: Certification[] = [
  {
    name: "Qiskit Global Summer School 2026 — Quantum Fundamentals",
    issuer: "IBM",
    date: "2026",
    logo: "/images/certs/ibm.svg",
    links: [
      {
        label: "Verify",
        url: "https://www.credly.com/badges/36f93823-9f46-4b3d-8424-2de6b283df3d",
      },
    ],
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "2026",
    logo: "/images/certs/cisco.svg",
  },
  {
    name: "Qiskit Global Summer School 2025 — Quantum Excellence",
    issuer: "IBM",
    date: "2025",
    logo: "/images/certs/ibm.svg",
    links: [{ label: "Badge", url: "/qiskit-excellence-badge.pdf" }],
  },
  {
    name: "Google Cybersecurity Professional Certificate (v2)",
    issuer: "Google",
    date: "2025",
    logo: "/images/certs/google.svg",
    links: [
      { label: "Verify", url: "https://www.credly.com/go/BiCrN8O2" },
      {
        label: "Coursera",
        url: "https://coursera.org/verify/professional-cert/PTNLUFMTLR5Y",
      },
    ],
  },
  {
    name: "PennyLane Codebook",
    issuer: "Xanadu",
    date: "2025",
    logo: "/images/certs/xanadu.svg",
    links: [
      { label: "GitHub", url: "https://github.com/zuhair-mzk/quantum_computing" },
    ],
  },
  {
    name: "CompTIA Security+ (SY0-701)",
    issuer: "CompTIA",
    date: "In progress",
    inProgress: true,
    logo: "/images/certs/comptia.svg",
  },
  {
    name: "IBM Quantum Developer Certification",
    issuer: "IBM",
    date: "In progress",
    inProgress: true,
    logo: "/images/certs/ibm.svg",
  },
];
