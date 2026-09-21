/** Shared shapes for everything under src/data. */

export interface Link {
  label: string;
  url: string;
}

export interface Role {
  /** Organisation name as it should appear on the site. */
  org: string;
  title: string;
  location: string;
  /** Human-readable range, e.g. "May 2026 – Aug 2026". */
  period: string;
  /** Sort key, newest first. ISO year-month of the start date. */
  start: string;
  bullets: string[];
  tags: string[];
  links?: Link[];
}

export interface Venture extends Role {
  /** One-line description used on compact cards. */
  summary: string;
  status: "current" | "past";
}

export interface Certification {
  name: string;
  issuer: string;
  /** Display date, or "In progress". */
  date: string;
  inProgress?: boolean;
  /** Logo in public/images/certs/. TODO: add asset files. */
  logo?: string;
  links?: Link[];
}
