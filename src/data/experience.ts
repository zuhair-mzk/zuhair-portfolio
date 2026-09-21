import type { Role } from "./types";

/** Employment history, most recent first. Sourced from resume + LinkedIn (Sep 2026). */
export const experience: Role[] = [
  {
    org: "Mohawk Medbuy Corporation",
    title: "Network & Cloud Security Co-op",
    location: "Toronto, ON (Hybrid)",
    period: "May 2026 – Aug 2026",
    start: "2026-05",
    bullets: [
      "Investigated phishing and social engineering incidents using KnowBe4 PhishER, Proofpoint, and Cisco Umbrella; shadowed a third-party penetration testing engagement; resolved ServiceNow VPN, MFA, and access-control incidents through Entra ID and Exchange root-cause analysis.",
      "Administered IAM and RBAC in the SAP Ariba backend across 75+ GTA hospitals — provisioning roles, managing MFA lifecycle operations, and reviewing user access for segregation-of-duties conflicts against ISO/IEC 27001 controls during a Deloitte co-delivered SAP S/4HANA transformation.",
      "Led an Intune/MDM compliance initiative retiring stale device records and enforcing endpoint controls via LAPS-PAM; analysed Entra ID exports to flag mailboxes forwarding to external recipients, producing a risk-prioritised remediation plan for Plexus decommissioning.",
    ],
    tags: [
      "IAM",
      "Incident Response",
      "ISO 27001",
      "SAP Ariba",
      "Entra ID",
      "Security Operations",
    ],
  },
  {
    org: "University of Toronto Schools",
    title: "IT Systems & Software Engineering Co-op",
    location: "Toronto, ON (On-site)",
    period: "Jan 2026 – Apr 2026",
    start: "2026-01",
    bullets: [
      "Built a SOC-style monitoring dashboard correlating Suricata IPS alerts with NetFlow, RADIUS, and NAT logs across 3 SQL databases to attribute suspicious network sessions to source IPs and individual users; troubleshot VLAN segmentation and DHCP addressing across academic networks.",
      "Supported identity and access management for 750+ students and staff through Active Directory account and group changes, MFA enrollment, and Windows/macOS endpoint posture under least privilege; helped coordinate a third-party penetration test of school systems.",
      "Contributed to in-house C#/.NET web applications using Entity Framework, SQL Server, GraphQL, and Blazor — including a barcode-based asset tracker — supporting Azure DevOps release workflows through improved logging and PowerShell automation.",
    ],
    tags: ["SIEM", "Suricata", "Active Directory", "C#/.NET", "Blazor", "IT Support"],
  },
  {
    org: "Offline Social Network Inc.",
    title: "Software & Systems Infrastructure Intern",
    location: "Toronto, ON (Hybrid)",
    period: "Aug 2025 – Dec 2025",
    start: "2025-08",
    bullets: [
      "Led internal application security risk assessments for an AI-driven mobile app, mapping controls to OWASP and NIST 800-53, reviewing authentication flows (OAuth 2.0, JWT, bcrypt password hashing), and documenting risk findings while tracking remediation to closure.",
      "Investigated network-layer issues across AWS (Route 53, Transit Gateway, Direct Connect), correlating journald/syslog output with tcpdump/Wireshark traces to accelerate root-cause analysis for 1,000+ users.",
    ],
    tags: ["AppSec", "AWS", "OWASP", "NIST 800-53", "Linux", "OAuth 2.0"],
    // No App Store link: Offline is no longer listed there.
    links: [{ label: "Website", url: "https://offlinesocialnetwork.com" }],
  },
];
