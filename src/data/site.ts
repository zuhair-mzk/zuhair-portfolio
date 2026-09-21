/**
 * Single source of truth for site-wide identity, contact, and metadata.
 * Update LAST_UPDATED whenever content changes; the footer reads it from here.
 */

export const LAST_UPDATED = "September 2026";

export const site = {
  name: "Zuhair Khan",
  /** Positioning line. Replaces the old quantum-first framing and the typewriter. */
  tagline:
    "Final-year CS student at UofT focused on cybersecurity. I also build software and start companies.",
  pillars: ["Security", "Software", "Startups"],
  seekingLine: "Seeking Winter 2027 cybersecurity co-op roles in Toronto.",
  email: "zuhair.khan@mail.utoronto.ca",
  github: "https://github.com/zuhair-mzk",
  linkedin: "https://www.linkedin.com/in/zuhair-khan-3aab98373/",
  url: "https://zuhairkhan.ca",
  // Phone is on the resume but deliberately not published here.
} as const;

export const education = {
  school: "University of Toronto Scarborough",
  degree: "Honours B.Sc. Computer Science — Software Engineering Specialist (Co-op)",
  period: "Sep 2022 – Apr 2027 (expected)",
  award: "University of Toronto Scholar Award — $7,500 merit scholarship (top 3%)",
} as const;
