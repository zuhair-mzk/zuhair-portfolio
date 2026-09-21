import type { Metadata } from "next";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: "Zuhair Khan – Security · Software · Startups",
  description:
    "Final-year CS student at UofT focused on cybersecurity. I also build software and start companies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        {/* Set the theme before first paint so there is no flash of the wrong
            palette. Dark is the default; only an explicit stored choice wins. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=(t==='light'||t==='dark')?t:'dark'}catch(e){document.documentElement.dataset.theme='dark'}",
          }}
        />
      </head>
      <body className="bg-slate-950 text-slate-50 antialiased">
        <AnimatedBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
