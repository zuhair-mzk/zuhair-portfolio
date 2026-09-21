import { site } from "./site";

/**
 * About copy, taken from the LinkedIn About section (Sep 2026) with only
 * light edits for the web. Kept in Zuhair's own voice — do not rewrite
 * without asking.
 */
export const about = {
  heading: "Security, software, and the things I build on the side.",
  paragraphs: [
    "Hi, I'm Zuhair, a final-year Computer Science student at UofT focused on cybersecurity.",
    "Most recently, I worked in network and cloud security at Mohawk Medbuy, covering IAM and security operations. Before that, I was at the University of Toronto Schools doing IT and software development, with some SIEM and Suricata alert work along the way.",
    "I like building software and systems. I'm currently working on IDRAK, a B2B startup building real-time AI guidance for warehouse operations, and I previously started and launched my own traditional clothing brand, KZ Collections.",
    "I'm also into quantum computing. I did a quantum-safe cryptography research project at UofT and took part in IBM's Qiskit Global Summer School 2026.",
  ],
  closingLine: "Always happy to connect.",
  /** TODO: replace with real headshot once provided. */
  headshot: {
    src: "/images/headshot.jpg",
    alt: `${site.name}, portrait`,
    placeholder: true,
  },
  /**
   * Sources are resized to <=1600px; next/image negotiates WebP/AVIF per
   * request, so no pre-converted WebP files are checked in.
   * TODO: new photos pending from Zuhair.
   */
  gallery: [
    {
      src: "/images/research-presentation.jpg",
      alt: "Presenting quantum-safe security research at the CMS Undergraduate Research Symposium",
      caption: "Presenting at the CMS Symposium",
    },
    {
      src: "/images/xanadu-hq.jpg",
      alt: "Visiting Xanadu's quantum computing headquarters in downtown Toronto",
      caption: "Xanadu HQ, Toronto",
    },
    {
      src: "/images/kz-popup.jpg",
      alt: "KZ Collections pop-up shop at the University of Toronto Scarborough",
      caption: "KZ Collections pop-up at UTSC",
    },
    {
      src: "/images/basketball.jpg",
      alt: "Winning the interhouse basketball championship",
      caption: "Interhouse basketball championship",
    },
  ],
} as const;
