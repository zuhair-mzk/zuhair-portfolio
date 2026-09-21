import { site } from "./site";

/** Short About copy, matching the LinkedIn About. Kept to 3–4 sentences. */
export const about = {
  heading: "Security, software, and the things I build on the side.",
  paragraphs: [
    "I'm a final-year Computer Science student at the University of Toronto Scarborough, specialising in Software Engineering. My focus is cybersecurity — identity and access management, security operations, and cloud — which I've practised across co-ops at Mohawk Medbuy, University of Toronto Schools, and Offline.",
    "Alongside that I build software and start companies. I'm currently co-founding IDRAK, and I've previously run an e-commerce brand and a global social impact organisation. Quantum computing is an ongoing research interest rather than the headline.",
    "Outside of work I play basketball, tennis, and soccer, and I spend time cooking, reading, and travelling.",
  ],
  /** TODO: replace with real headshot once provided. */
  headshot: {
    src: "/images/headshot.webp",
    alt: `${site.name}, portrait`,
    placeholder: true,
  },
  /** TODO: new photos pending; convert existing ones to WebP in a later commit. */
  gallery: [
    {
      src: "/images/research-presentation.webp",
      alt: "Presenting quantum-safe security research at the CMS Undergraduate Research Symposium",
      caption: "Presenting at the CMS Symposium",
    },
    {
      src: "/images/xanadu-hq.webp",
      alt: "Visiting Xanadu's quantum computing headquarters in downtown Toronto",
      caption: "Xanadu HQ, Toronto",
    },
    {
      src: "/images/kz-popup.webp",
      alt: "KZ Collections pop-up shop at the University of Toronto Scarborough",
      caption: "KZ Collections pop-up at UTSC",
    },
    {
      src: "/images/basketball.webp",
      alt: "Winning the interhouse basketball championship",
      caption: "Interhouse basketball championship",
    },
  ],
} as const;
