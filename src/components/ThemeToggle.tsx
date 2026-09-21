"use client";

export type Theme = "dark" | "light";

/** Broadcast so non-React consumers (the canvas background) can react. */
export const THEME_EVENT = "themechange";

/**
 * Both icons are rendered and CSS picks one off [data-theme] (see globals.css).
 * That keeps the toggle stateless: the right icon is correct on the server,
 * before hydration, and before JS runs at all.
 */
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next: Theme = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private mode or blocked storage: the theme still applies for this visit.
    }
    window.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: next }));
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle colour theme"
      title="Toggle colour theme"
      className="p-2 rounded-md border border-slate-700/60 text-slate-200 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
    >
      {/* Sun: shown in dark mode, i.e. click to go light. */}
      <svg
        className="theme-icon-sun w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path
          strokeLinecap="round"
          d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        />
      </svg>
      {/* Moon: shown in light mode. */}
      <svg
        className="theme-icon-moon w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
        />
      </svg>
    </button>
  );
}
