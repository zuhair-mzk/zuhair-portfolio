/**
 * Resume variants offered by the Download CV modal.
 *
 * Security leads, matching the site's positioning.
 *
 * TODO: swe.pdf and quantum.pdf were last updated Nov 2025 and predate the
 * Mohawk Medbuy and UTS co-ops, so they are out of date. Refresh or remove
 * them — confirm with Zuhair.
 */
export interface Resume {
  title: string;
  description: string;
  file: string;
  icon: string;
}

export const resumes: Resume[] = [
  {
    title: "Cybersecurity Resume",
    description: "Security operations, IAM, and cloud security",
    file: "/resume/cybersecurity.pdf",
    icon: "🔒",
  },
  {
    title: "Software Engineering Resume",
    description: "Full-stack development & system design",
    file: "/resume/swe_resume.pdf",
    icon: "💻",
  },
  {
    title: "Quantum Computing Resume",
    description: "Quantum algorithms & research",
    file: "/resume/quantum.pdf",
    icon: "⚛️",
  },
];
