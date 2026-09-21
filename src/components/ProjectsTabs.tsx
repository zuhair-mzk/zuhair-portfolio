"use client";

import { useState, useEffect } from "react";

import {
  projects,
  categories,
  categoryToHash,
  hashToCategory,
  type Project,
  type ProjectCategory,
} from "@/data/projects";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", ...categories];

export default function ProjectsTabs() {
  const [activeTab, setActiveTab] = useState<Filter>("All");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");

      // Supports #security and #projects-security. The pre-rename slugs
      // (cybersecurity, leadership) are aliased in hashToCategory because
      // Zuhair's printed resume links to #projects-cybersecurity.
      let category: ProjectCategory | undefined;

      if (hash.startsWith("projects-")) {
        category = hashToCategory[hash.replace("projects-", "")];

        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          setTimeout(() => {
            projectsSection.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      } else {
        category = hashToCategory[hash];
      }

      if (category) setActiveTab(category);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleTabChange = (filter: Filter) => {
    setActiveTab(filter);
    const hash =
      filter === "All" ? "#projects" : `#projects-${categoryToHash[filter]}`;
    window.history.pushState(null, "", hash);
  };

  // Keyed by title, not index: indices are reused across filters, so an
  // index-keyed set would carry expansion state onto unrelated cards.
  const toggleCard = (title: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  const visible =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <div>
      <div className="mb-6 sm:mb-8 flex flex-wrap gap-2 sm:gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleTabChange(filter)}
            aria-pressed={activeTab === filter}
            className={`rounded-full px-3 sm:px-5 py-1.5 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all ${
              activeTab === filter
                ? "bg-cyan-400/20 text-cyan-300 border-2 border-cyan-400/50"
                : "bg-slate-800/50 text-slate-400 border-2 border-slate-700/50 hover:border-cyan-400/30 hover:text-cyan-400"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="md:hidden overflow-x-auto -mx-4 px-4 pb-4">
        <div className="flex gap-4" style={{ width: "max-content" }}>
          {visible.map((project) => (
            <div
              key={project.title}
              style={{ width: "85vw", maxWidth: "400px" }}
              className="flex"
            >
              <ProjectCard
                project={project}
                isExpanded={expanded.has(project.title)}
                onToggle={() => toggleCard(project.title)}
                compact
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: grid */}
      <div className="hidden md:grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 items-start">
        {visible.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            isExpanded={expanded.has(project.title)}
            onToggle={() => toggleCard(project.title)}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  isExpanded,
  onToggle,
  compact = false,
}: {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
  compact?: boolean;
}) {
  const hasMore = !!project.bodyExtended;

  return (
    <article
      className={`card hover:border-cyan-400/30 transition-all flex flex-col w-full ${
        compact ? "p-4" : "p-5 sm:p-6"
      }`}
    >
      {project.timeline && (
        <p className="text-[10px] sm:text-xs text-cyan-400 font-semibold mb-2 uppercase tracking-wide">
          {project.timeline}
        </p>
      )}

      <h3 className="text-base sm:text-lg font-bold mb-2">{project.title}</h3>

      <div className="grow">
        <p className="text-sm text-slate-300 mb-2 leading-relaxed">
          {project.body}
        </p>

        {isExpanded && (
          <>
            {project.bodyExtended && (
              <p className="text-sm text-slate-400 mb-2 leading-relaxed">
                {project.bodyExtended}
              </p>
            )}
            <p className="text-xs text-slate-500 mb-2">{project.meta}</p>
          </>
        )}

        {hasMore && (
          <button
            onClick={onToggle}
            aria-expanded={isExpanded}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors mb-3"
          >
            {isExpanded ? "↑ Show less" : "↓ Read more"}
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag) => (
          <span key={tag} className="tag text-xs px-2.5 py-1">
            {tag}
          </span>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors border border-cyan-500/30 hover:border-cyan-400/50 rounded-lg px-3 py-1.5"
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
