"use client";

import React, { useState, useMemo, useEffect } from "react";
import { sound } from "@/lib/audio";
import { SKILL_CATEGORIES, DAILY_STACK_15, SkillItem } from "@/data/skills";
import { TechStackGlobe, TechIcon, getBrandTheme } from "@/components/TechStackGlobe";
import { VERIFIED_PROJECTS } from "@/data/projects";
import { Terminal, X, ArrowUpRight, ShieldCheck, Sparkles, Layers } from "lucide-react";

export function SkillsMatrix() {
  const [selectedFilter, setSelectedFilter] = useState<string>("daily");
  const allSkills = useMemo(() => SKILL_CATEGORIES.flatMap((c) => c.skills), []);
  const [activeSkill, setActiveSkill] = useState<SkillItem>(DAILY_STACK_15.find(s => s.name === "Python") || DAILY_STACK_15[0]);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDrawerOpen]);

  // Handle category/filter selection
  const handleFilterSelect = (id: string) => {
    sound.playTabSwitch();
    setSelectedFilter(id);
    if (id === "daily") {
      const py = DAILY_STACK_15.find(s => s.name === "Python") || DAILY_STACK_15[0];
      setActiveSkill(py);
    } else if (id === "all") {
      setActiveSkill(allSkills[0]);
    } else {
      const cat = SKILL_CATEGORIES.find((c) => c.id === id);
      if (cat && cat.skills.length > 0) {
        setActiveSkill(cat.skills[0]);
      }
    }
  };

  // When clicking any moving icon on the 3D globe:
  // Opens the side details panel while the globe continues rotating!
  const handleSkillSelect = (skill: SkillItem) => {
    sound.playClick();
    setActiveSkill(skill);
    setIsDrawerOpen(true);
  };

  const displayedSkills = useMemo(() => {
    if (selectedFilter === "daily") return DAILY_STACK_15;
    if (selectedFilter === "all") return allSkills;
    const cat = SKILL_CATEGORIES.find((c) => c.id === selectedFilter);
    return cat ? cat.skills : DAILY_STACK_15;
  }, [selectedFilter, allSkills]);

  // Find portfolio projects using the active technology
  const associatedProjects = useMemo(() => {
    return VERIFIED_PROJECTS.filter((proj) =>
      proj.techStack.some((t) =>
        t.toLowerCase().includes(activeSkill.name.toLowerCase()) ||
        activeSkill.name.toLowerCase().includes(t.toLowerCase())
      )
    ).slice(0, 3);
  }, [activeSkill]);

  const activeTheme = getBrandTheme(activeSkill.name);

  // Determine section header title
  const headerTitle = useMemo(() => {
    if (selectedFilter === "daily") return "15 TECHNOLOGIES · DAILY STACK";
    if (selectedFilter === "all") return `${allSkills.length} TECHNOLOGIES · FULL ARCHITECTURE`;
    const cat = SKILL_CATEGORIES.find((c) => c.id === selectedFilter);
    return cat ? `${cat.skills.length} TECHNOLOGIES · ${cat.name.toUpperCase()}` : "TECHNOLOGIES";
  }, [selectedFilter, allSkills.length]);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 md:px-8 border-b border-border-subtle relative bg-[#04060A] overflow-hidden">
      <div className="w-full max-w-6xl mx-auto space-y-6">
        {/* Section Minimal Header matching reference Image 1 */}
        <div className="flex flex-col items-center justify-center text-center space-y-3 pt-2">
          {/* Hairline Divider & Monospace Title */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 w-full max-w-3xl text-zinc-400 font-mono text-xs sm:text-sm tracking-[0.22em] sm:tracking-[0.3em] uppercase font-semibold">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-white/10" />
            <span className="flex items-center gap-2.5 text-zinc-200">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-red animate-pulse" />
              <span>— {headerTitle} —</span>
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-white/20 to-white/10" />
          </div>

          {/* Minimalist Filter Navigation Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-2 font-mono text-[11px] sm:text-xs">
            <button
              onClick={() => handleFilterSelect("daily")}
              onMouseEnter={() => sound.playHover()}
              className={`px-3.5 py-1.5 rounded-full border transition-all ${
                selectedFilter === "daily"
                  ? "border-accent-red bg-accent-red/20 text-white font-semibold shadow-crimson-glow"
                  : "border-white/10 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/20"
              }`}
            >
              DAILY STACK (15)
            </button>
            <button
              onClick={() => handleFilterSelect("all")}
              onMouseEnter={() => sound.playHover()}
              className={`px-3.5 py-1.5 rounded-full border transition-all ${
                selectedFilter === "all"
                  ? "border-accent-red bg-accent-red/20 text-white font-semibold shadow-crimson-glow"
                  : "border-white/10 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/20"
              }`}
            >
              ALL ARCHITECTURES ({allSkills.length})
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleFilterSelect(cat.id)}
                onMouseEnter={() => sound.playHover()}
                className={`px-3 py-1.5 rounded-full border transition-all ${
                  selectedFilter === cat.id
                    ? "border-accent-red bg-accent-red/20 text-white font-semibold shadow-crimson-glow"
                    : "border-white/10 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/20"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Rotating Stack Globe (Clean, majestic center stage with zero clutter) */}
        <div className="relative w-full flex items-center justify-center">
          <TechStackGlobe
            skills={displayedSkills}
            activeSkill={activeSkill}
            onSelectSkill={handleSkillSelect}
          />
        </div>
      </div>

      {/* Backdrop overlay for dismissing the slide-in side panel */}
      {isDrawerOpen && (
        <div
          onClick={() => setIsDrawerOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          aria-label="Close details inspector"
        />
      )}

      {/* Slide-In Side Details Panel ("TECHNOLOGY INSPECTOR") */}
      {/* Slides in from the right when an icon is pressed, while the globe rotates */}
      <aside
        aria-label="Technology Inspector HUD"
        className={`fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[440px] md:w-[480px] bg-[#0A0D15]/95 backdrop-blur-2xl border-l border-white/15 p-6 sm:p-7 shadow-[-25px_0_70px_rgba(0,0,0,0.85)] flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 ease-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Subtle Brand Glow Aura */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-30"
          style={{ backgroundColor: activeTheme.glow }}
        />

        <div className="space-y-6 relative z-10">
          {/* Inspector Sticky Header with Close Button */}
          <div className="sticky top-0 -mt-2 pt-2 pb-4 bg-[#0A0D15]/90 backdrop-blur-xl border-b border-white/10 flex items-center justify-between z-20">
            <div className="flex items-center gap-2.5 font-mono text-xs text-accent-red font-semibold">
              <Terminal className="w-4 h-4 text-accent-red" />
              <span className="tracking-widest">TECHNOLOGY INSPECTOR</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                [LIVE HUD]
              </span>
              <button
                onClick={() => setIsDrawerOpen(false)}
                onMouseEnter={() => sound.playHover()}
                className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close Inspector"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Architectural Node Banner */}
          <div
            className="flex items-start gap-4 p-4 rounded-2xl border backdrop-blur-md transition-all"
            style={{
              backgroundColor: activeTheme.bg,
              borderColor: activeTheme.glow,
              boxShadow: `0 0 24px ${activeTheme.glow}`,
            }}
          >
            <div className="w-16 h-16 rounded-2xl bg-black/60 border border-white/15 p-3 flex items-center justify-center flex-shrink-0 shadow-lg">
              <TechIcon name={activeSkill.name} className="w-full h-full drop-shadow-md" />
            </div>
            <div className="space-y-1 min-w-0">
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">
                ACTIVE ARCHITECTURAL NODE
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight truncate">
                {activeSkill.name}
              </h3>
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <span
                  className={`font-mono text-[10px] px-2.5 py-0.5 rounded-full font-semibold tracking-wide border ${
                    activeSkill.level === "Advanced Architecture"
                      ? "bg-accent-red/20 text-accent-red border-accent-red/40"
                      : activeSkill.level === "Active Production"
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                      : activeSkill.level === "Core Engineering"
                      ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
                      : "bg-neutral-800 text-neutral-300 border-neutral-700"
                  }`}
                >
                  {activeSkill.level}
                </span>
                <span className="font-mono text-[10px] text-zinc-400">
                  {activeSkill.category}
                </span>
              </div>
            </div>
          </div>

          {/* Architectural Role & Scope */}
          <div className="space-y-2">
            <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider block font-semibold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-accent-red" />
              <span>Architectural Role &amp; Scope</span>
            </span>
            <p className="text-sm text-zinc-200 leading-relaxed font-sans bg-black/40 p-4 rounded-xl border border-white/10">
              {activeSkill.description}
            </p>
          </div>

          {/* Key Competencies & Concepts */}
          <div className="space-y-2">
            <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider block font-semibold">
              Key Technical Competencies &amp; Concepts
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activeSkill.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg border border-white/10 bg-white/[0.04] font-mono text-[11px] text-zinc-300 hover:text-white transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Connected Portfolio Projects */}
          {associatedProjects.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-white/10">
              <span className="font-mono text-[11px] text-accent-red uppercase tracking-wider block font-semibold flex items-center justify-between">
                <span>Verified Implementations in Portfolio</span>
                <span className="text-[10px] text-zinc-500">{associatedProjects.length} FOUND</span>
              </span>
              <div className="space-y-2">
                {associatedProjects.map((proj) => (
                  <a
                    key={proj.id}
                    href="#projects"
                    onClick={() => setIsDrawerOpen(false)}
                    className="p-3 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between text-xs font-mono hover:border-accent-red/60 hover:bg-white/[0.03] transition-all group"
                  >
                    <div className="min-w-0 pr-2">
                      <span className="text-zinc-200 font-semibold truncate block group-hover:text-white">
                        {proj.title.split(" — ")[0]}
                      </span>
                      <span className="text-[10px] text-zinc-500 truncate block">
                        {proj.category}
                      </span>
                    </div>
                    <span className="text-[10px] text-accent-red flex items-center gap-1 font-semibold flex-shrink-0">
                      <span>{proj.status === "ACTIVE PRODUCTION" ? "PROD" : proj.status}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Telemetry Evidence Box */}
        <div className="mt-6 pt-4 border-t border-white/10 p-3.5 rounded-xl border border-white/10 bg-black/70 font-mono text-[11px] text-zinc-400 space-y-1.5">
          <div className="flex justify-between items-center">
            <span>EVIDENCE CATEGORY:</span>
            <span className="text-white font-medium">{activeSkill.category}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>VERIFICATION STATUS:</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Production Verified</span>
            </span>
          </div>
        </div>
      </aside>
    </section>
  );
}