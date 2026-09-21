import { site } from "./site";

/**
 * About is deliberately short.
 *
 * The LinkedIn About text now lives across the rest of the site — the hero
 * carries the positioning line, Experience covers Mohawk and UTS, Ventures
 * covers IDRAK and KZ Collections, and Projects covers the quantum research.
 * Repeating it here read as filler, so this section keeps only what is not
 * said anywhere else: the personal side, plus the photos.
 *
 * (The personal copy is Zuhair's own, carried over from the previous site.)
 */
export const about = {
  heading: "Outside of work.",
  paragraphs: [
    "When I'm not working on security or shipping code, I'm usually playing basketball, tennis, or soccer, in the gym, cooking, reading, or travelling somewhere new.",
    "Always happy to connect — whether that's about security, startups, or whatever you're building.",
  ],
  /** TODO: replace with real headshot once provided. */
  headshot: {
    src: "/images/headshot.jpg",
    alt: `${site.name}, portrait`,
    placeholder: true,
  },
  /**
   * Sources are resized to <=1600px; next/image negotiates WebP/AVIF per
   * request, so no pre-converted WebP files are checked in.
   *
   * TODO: add the candid vacation photo — it was not in the repo. Drop it at
   * public/images/candid-vacation.jpg and uncomment the entry below. The
   * grid switches to 5 columns automatically.
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
    // {
    //   src: "/images/candid-vacation.jpg",
    //   alt: "TODO: describe the photo",
    //   caption: "TODO: caption",
    // },
  ],
};
