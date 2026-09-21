import type { Venture } from "./types";

/** Companies and organisations founded or co-founded, most recent first. */
export const ventures: Venture[] = [
  {
    org: "IDRAK",
    title: "Co-Founder",
    location: "Toronto, ON",
    period: "Jan 2026 – Present",
    start: "2026-01",
    status: "current",
    summary:
      "B2B startup building real-time AI guidance systems for warehouse operations.",
    bullets: [
      "Designed and shipped a full-stack packing assistant deployed with Formula Scents, a Canadian e-commerce business processing 100–150 orders/day.",
      "System integrates Shopify order ingestion, real-time worker tracking, and an admin analytics dashboard.",
      "Leading architecture decisions, intern coordination, and product direction for a team of 5.",
    ],
    tags: ["Startup Leadership", "Python", "Full-Stack", "Shopify", "AI"],
    links: [
      { label: "Website", url: "https://idrak.ca/" },
      { label: "Devpost", url: "https://devpost.com/software/idrak" },
    ],
  },
  {
    org: "KZ Collections",
    title: "Founder",
    location: "Toronto, ON",
    period: "Jul 2024 – May 2026",
    start: "2024-07",
    status: "past",
    summary:
      "Traditional clothing brand — Moroccan thobes, farwas, and other premium cultural wear.",
    bullets: [
      "Architected and managed a production Shopify storefront, integrating payments, inventory, analytics, and third-party services.",
      "Built custom backend integrations for automated inventory syncing and email marketing workflows, driving a 65% increase in conversion rate.",
      "Ran end-to-end infrastructure — DNS, HTTPS certificates, CDN caching, and Shopify metaobject data models — alongside a team of 3 across marketing and fulfilment.",
    ],
    tags: ["Entrepreneurship", "Shopify", "E-Commerce", "Full-Stack"],
    links: [
      { label: "Store", url: "https://kzcollections.ca/" },
      { label: "GitHub", url: "https://github.com/zuhair-mzk/kzcollections" },
    ],
  },
  {
    org: "Quotis",
    title: "Co-Founder & Tech Lead",
    location: "Toronto, ON",
    period: "Mar 2024 – Aug 2024",
    start: "2024-03",
    status: "past",
    summary:
      "Real-time marketplace connecting homeowners with verified service providers.",
    bullets: [
      "Led technical architecture for a React Native + Node.js platform with WebSocket messaging, AWS S3 media storage, and live arrival tracking.",
      "Secured $4,000 in startup grants and built a waitlist of 20+ freelancers ahead of onboarding.",
      "Managed agile delivery as Scrum Master across a distributed team.",
    ],
    tags: ["React Native", "Node.js", "MongoDB", "WebSockets", "Scrum"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/UofT-UTSC-CS-sandbox/final-term-project-quotis",
      },
    ],
  },
  {
    org: "The Defy Organization",
    title: "Co-Founder",
    location: "International (Hybrid)",
    period: "Jun 2019 – Jun 2022",
    start: "2019-06",
    status: "past",
    summary:
      "Global social impact organisation supporting orphans, labour workers, and people with disabilities.",
    bullets: [
      "Founded and led an organisation delivering 3D-designed and manufactured aid, sanitary resources, and food support.",
      "Princess Diana Award recipient; Global Social Leaders Competition semi-finalist in the Impact category, among the top teams of 438 worldwide.",
      "Raised $25,000+ through 8 corporate sponsorships and partnerships.",
      "Expanded to 5 countries — UAE, India, Pakistan, U.S., and Egypt — leading 100+ volunteers and reaching 2,000+ beneficiaries.",
      "Featured in international media and invited for UAE TV interviews.",
    ],
    tags: ["Nonprofit Leadership", "Social Impact", "Fundraising", "3D Design"],
  },
];
