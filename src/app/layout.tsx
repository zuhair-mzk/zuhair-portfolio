import type { Metadata } from "next";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: "Zuhair Khan – Quantum · Cybersecurity · Software",
  description:
    "Portfolio of Zuhair Khan – Quantum computing, post-quantum cryptography, cybersecurity, and software engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50 antialiased">
        <AnimatedBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
