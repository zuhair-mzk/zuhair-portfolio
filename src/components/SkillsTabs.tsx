"use client";

import { useState } from "react";

type SkillCategory = "Languages" | "Quantum" | "Cybersecurity" | "Frameworks" | "Databases" | "Cloud & DevOps";

const skillsData: Record<SkillCategory, string[]> = {
  Languages: [
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "C / C++",
    "SQL",
    "Bash",
    "HTML/CSS",
    "Swift",
    "R",
    "PHP",
    "Assembly (MIPS)",
    "Haskell",
    "Curry",
  ],
  Quantum: [
    "PennyLane",
    "Strawberry Fields",
    "Qiskit",
    "IBM Quantum Lab",
    "NumPy (QC)",
    "Jupyter",
    "Quantum Circuits",
    "VQE / QAOA",
    "QML",
    "BB84 / E91",
    "Photonic QC",
    "Shor's Algorithm",
  ],
  Cybersecurity: [
    "Post-Quantum Crypto",
    "QKD (BB84, E91)",
    "Lattice Crypto",
    "JWT / OAuth",
    "AES / ChaCha20",
    "RSA / ECC",
    "TLS/SSL",
    "SQL Injection",
    "XSS / CSRF",
    "SQLi / Base64",
    "Wireshark / tcpdump",
    "Burp Suite",
    "Nmap",
    "Metasploit",
    "Splunk / Chronicle",
    "Scapy",
    "PyCryptodome",
    "GPG",
    "IDS / NIDS",
    "CTF / Reverse Eng",
    "bcrypt / argon2",
  ],
  Frameworks: [
    "React / Next.js",
    "React Native",
    "Node.js / Express",
    "FastAPI",
    "Flask",
    "Expo",
    "Android Studio",
    "Xcode",
    "JUnit / Mockito",
    "Pandas / NumPy",
    "Matplotlib",
    "Tailwind CSS",
  ],
  Databases: [
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "SQLite",
    "Firebase",
    "Neo4j",
    "AWS S3",
  ],
  "Cloud & DevOps": [
    "Docker",
    "AWS (S3, Lambda)",
    "Vercel",
    "GitHub Actions",
    "Linux",
    "Git / GitHub",
    "CI/CD",
    "Postman",
    "Mininet",
    "SDN / OpenFlow",
    "POX Controller",
    "Jira",
    "Figma",
    "Agile / Scrum",
  ],
};

export default function SkillsTabs() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("Languages");

  return (
    <div className="w-full">
      {/* Tab buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center">
        {(Object.keys(skillsData) as SkillCategory[]).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeTab === category
                ? "bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                : "bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:border-cyan-400/50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills display */}
      <div className="card p-4 sm:p-8 min-h-[200px] sm:min-h-[300px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
          {skillsData[activeTab].map((skill, index) => (
            <div
              key={skill}
              className="flex items-center justify-center p-2 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 border border-slate-700/30 hover:border-cyan-400/50 hover:bg-slate-800/80 transition-all cursor-default text-center"
              style={{
                animation: `fadeIn 0.3s ease-out ${index * 0.05}s both`,
              }}
            >
              <span className="text-xs sm:text-sm font-medium text-slate-200">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
