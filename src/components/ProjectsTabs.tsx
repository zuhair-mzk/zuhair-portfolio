"use client";

import { useState, useEffect } from "react";

import {
  projectsData,
  categoryToHash,
  hashToCategory,
  type ProjectCategory,
} from "@/data/projects";


export default function ProjectsTabs() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("Quantum Computing");
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  // Handle URL hash on mount and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      
      // Support both formats: #cybersecurity and #projects-cybersecurity
      let category: ProjectCategory | undefined;
      
      if (hash.startsWith("projects-")) {
        // Format: #projects-cybersecurity
        const categoryHash = hash.replace("projects-", "");
        category = hashToCategory[categoryHash];
        
        // Scroll to projects section
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          setTimeout(() => {
            projectsSection.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      } else {
        // Format: #cybersecurity
        category = hashToCategory[hash];
      }
      
      if (category) {
        setActiveTab(category);
      }
    };

    // Check hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleTabChange = (category: ProjectCategory) => {
    setActiveTab(category);
    // Update URL hash without scrolling
    window.history.pushState(null, "", `#projects-${categoryToHash[category]}`);
  };

  const toggleCard = (index: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  return (
    <div>
      {/* Tab buttons */}
      <div className="mb-6 sm:mb-8 flex flex-wrap gap-2 sm:gap-3">
        {(Object.keys(projectsData) as ProjectCategory[]).map((category) => (
          <button
            key={category}
            onClick={() => handleTabChange(category)}
            className={`rounded-full px-3 sm:px-5 py-1.5 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all ${
              activeTab === category
                ? "bg-cyan-400/20 text-cyan-300 border-2 border-cyan-400/50"
                : "bg-slate-800/50 text-slate-400 border-2 border-slate-700/50 hover:border-cyan-400/30 hover:text-cyan-400"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Mobile: Horizontal scrolling */}
      <div className="md:hidden overflow-x-auto -mx-4 px-4 pb-4">
        <div className="flex gap-4" style={{ width: 'max-content' }}>
          {projectsData[activeTab].map((project, index) => {
            const isExpanded = expandedCards.has(index);
            const hasExtendedContent = !!project.bodyExtended;
            
            return (
              <article
                key={index}
                className="card p-4 hover:border-cyan-400/30 transition-all opacity-0 animate-fadeIn flex flex-col"
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  width: '85vw',
                  maxWidth: '400px',
                  minHeight: '400px'
                }}
              >
                {project.timeline && (
                  <p className="text-[10px] text-cyan-400 font-semibold mb-2 uppercase tracking-wide">
                    {project.timeline}
                  </p>
                )}
                <h3 className="text-base font-bold mb-2">{project.title}</h3>
                
                <div className="grow">
                  <p className={`text-sm text-slate-300 mb-2 leading-relaxed ${!isExpanded && hasExtendedContent ? 'line-clamp-3' : ''}`}>
                    {isExpanded && project.bodyExtended ? project.bodyExtended : project.body}
                  </p>
                  {hasExtendedContent && (
                    <button
                      onClick={() => toggleCard(index)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors mb-2"
                    >
                      {isExpanded ? 'Show Less ↑' : 'Read More ↓'}
                    </button>
                  )}
                  
                  <p className="text-xs text-slate-400 mb-3 line-clamp-2">{project.meta}</p>
                </div>
                
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag text-[10px] px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-[10px] font-semibold text-cyan-400 hover:text-cyan-300 transition-colors border border-cyan-500/30 hover:border-cyan-400/50 rounded-lg px-2 py-1"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {/* Desktop: Grid layout */}
      <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsData[activeTab].map((project, index) => {
          const isExpanded = expandedCards.has(index);
          const hasExtendedContent = !!project.bodyExtended;
          
          return (
            <article
              key={index}
              className="card p-6 hover:border-cyan-400/30 transition-all opacity-0 animate-fadeIn flex flex-col"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {project.timeline && (
                <p className="text-xs text-cyan-400 font-semibold mb-2 uppercase tracking-wide">
                  {project.timeline}
              </p>
            )}
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              
              <div className="grow">
                <p className={`text-base text-slate-300 mb-3 leading-relaxed ${!isExpanded && hasExtendedContent ? 'line-clamp-3' : ''}`}>
                  {isExpanded && project.bodyExtended ? project.bodyExtended : project.body}
                </p>
                {hasExtendedContent && (
                  <button
                    onClick={() => toggleCard(index)}
                    className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors mb-3"
                  >
                    {isExpanded ? 'Show Less ↑' : 'Read More ↓'}
                  </button>
                )}
                
                <p className="text-sm text-slate-400 mb-4 line-clamp-2">{project.meta}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag text-xs px-3 py-1">
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
        })}
      </div>
    </div>
  );
}
