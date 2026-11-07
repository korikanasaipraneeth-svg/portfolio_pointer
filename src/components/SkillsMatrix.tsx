"use client";

import React, { useState, useMemo } from "react";
import { sound } from "@/lib/audio";
import { SKILL_CATEGORIES, SkillCategory, SkillItem } from "@/data/skills";
import { TechStackGlobe, TechIcon } from "@/components/TechStackGlobe";
import { VERIFIED_PROJECTS } from "@/data/projects";
import { Terminal, Sparkles, ExternalLink, ShieldCheck, ArrowUpRight } from "lucide-react";

export function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const allSkills = useMemo(() => SKILL_CATEGORIES.flatMap((c) => c.skills), []);
  const [activeSkill, setActiveSkill] = useState<SkillItem>(allSkills[0]);

  const handleCategorySelect = (id: string) => {
    sound.playTabSwitch();
    setSelectedCategory(id);
    if (id !== "all") {
      const cat = SKILL_CATEGORIES.find((c) => c.id === id);
      if (cat && cat.skills.length > 0) {
        setActiveSkill(cat.skills[0]);
      }
    }
  };

  const handleSkillSelect = (skill: SkillItem) => {
    sound.playClick();
    setActiveSkill(skill);
  };

  const displayedSkills = useMemo(() => {
    if (selectedCategory === "all") return allSkills;
    const cat = SKILL_CATEGORIES.find((c) => c.id === selectedCategory);
    return cat ? cat.skills : allSkills;
  }, [selectedCategory, allSkills]);

  // Find projects using the active technology
  const associatedProjects = useMemo(() => {
    return VERIFIED_PROJECTS.filter((proj) =>
      proj.techStack.some((t) =>
        t.toLowerCase().includes(activeSkill.name.toLowerCase()) ||
        activeSkill.name.toLowerCase().includes(t.toLowerCase())
      )
    ).slice(0, 3);
  }, [activeSkill]);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 md:px-8 border-b border-border-subtle relative">
      <div className="w-full max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-accent-red uppercase tracking-widest font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-red" />
            <span>02 // ARCHITECTURAL COMPETENCIES</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-heading font-black text-3xl sm:text-5xl text-text-primary tracking-tight">
                SYSTEMS &amp; SKILLS MATRIX
              </h2>
              <p className="font-sans text-sm sm:text-base text-text-secondary max-w-2xl mt-1 leading-relaxed">
                Interactive 3D Stack Globe. Move your cursor to rotate the sphere in any direction or drag directly. Select any technology to inspect its full architectural role and specializations.
              </p>
            </div>
            <div className="font-mono text-xs text-zinc-400 bg-black/60 border border-white/10 px-3.5 py-2 rounded-lg backdrop-blur-md flex items-center gap-2 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
              <span>— {displayedSkills.length} TECHNOLOGIES · 3D ROTATING GLOBE —</span>
            </div>
          </div>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap gap-2 pb-4 border-b border-border-subtle/70 font-mono text-xs">
          <button
            onClick={() => handleCategorySelect("all")}
            onMouseEnter={() => sound.playHover()}
            className={`px-3.5 py-1.5 rounded-lg border transition-all ${
              selectedCategory === "all"
                ? "border-accent-red bg-accent-red/20 text-white font-semibold shadow-crimson-glow"
                : "border-border-subtle bg-bg-panel/40 text-text-secondary hover:text-white hover:border-border-subtle/80"
            }`}
          >
            ALL ARCHITECTURES ({allSkills.length})
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              onMouseEnter={() => sound.playHover()}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                selectedCategory === cat.id
                  ? "border-accent-red bg-accent-red/20 text-white font-semibold shadow-crimson-glow"
                  : "border-border-subtle bg-bg-panel/40 text-text-secondary hover:text-white hover:border-border-subtle/80"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* 3D Rotating Stack Globe (Left) + Side Inspector HUD (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 3D Interactive Rotating Globe (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Quick-Access Tech Chips Ribbon (Placed first for instant selection and stable focus) */}
            <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 flex flex-wrap gap-1.5 backdrop-blur-md">
              <span className="w-full font-mono text-[10px] text-zinc-400 uppercase tracking-widest pb-1 flex items-center justify-between">
                <span>QUICK SELECTION // CLICK TO ROTATE GLOBE &amp; INSPECT:</span>
                <span className="text-accent-red font-semibold">{activeSkill.name} ACTIVE</span>
              </span>
              {displayedSkills.map((s) => {
                const isSelected = activeSkill.name === s.name;
                return (
                  <button
                    key={s.name}
                    onClick={() => handleSkillSelect(s)}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono flex items-center gap-1.5 transition-all border ${
                      isSelected
                        ? "bg-accent-red text-white border-accent-red shadow-crimson-glow font-bold"
                        : "bg-white/[0.03] text-zinc-300 border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <TechIcon name={s.name} className="w-3.5 h-3.5" />
                    <span>{s.name}</span>
                  </button>
                );
              })}
            </div>

            {/* 3D Interactive Rotating Globe */}
            <TechStackGlobe
              skills={displayedSkills}
              activeSkill={activeSkill}
              onSelectSkill={handleSkillSelect}
            />
          </div>

          {/* Right: Technical Inspector HUD (5 cols) */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-[#0A0C13] p-6 shadow-2xl space-y-5 relative overflow-hidden backdrop-blur-xl">
              {/* Subtle Ambient Crimson Radial Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent-red/10 rounded-full blur-3xl pointer-events-none" />

              {/* Inspector Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 font-mono text-xs text-accent-red font-semibold">
                  <Terminal className="w-4 h-4 text-accent-red" />
                  <span className="tracking-wider">TECHNOLOGY INSPECTOR</span>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-emerald-400">
                  [LIVE HUD]
                </span>
              </div>

              {/* Selected Tech Card Banner */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-black/50 border border-white/10">
                <div className="w-14 h-14 rounded-xl bg-[#121624] border border-white/15 p-2.5 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <TechIcon name={activeSkill.name} className="w-full h-full drop-shadow-md" />
                </div>
                <div className="space-y-1 min-w-0">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">
                    ACTIVE ARCHITECTURAL NODE
                  </span>
                  <h4 className="font-heading font-black text-2xl text-white tracking-tight truncate">
                    {activeSkill.name}
                  </h4>
                  <div className="flex items-center gap-2 pt-0.5">
                    <span
                      className={`font-mono text-[10px] px-2.5 py-0.5 rounded font-semibold tracking-wide ${
                        activeSkill.level === "Advanced Architecture"
                          ? "bg-accent-red/20 text-accent-red border border-accent-red/40"
                          : activeSkill.level === "Active Production"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                          : activeSkill.level === "Core Engineering"
                          ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                          : "bg-neutral-800 text-neutral-300 border border-neutral-700"
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
                <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider block font-semibold">
                  Architectural Role &amp; Scope
                </span>
                <p className="text-sm text-zinc-200 leading-relaxed font-sans bg-black/30 p-3.5 rounded-lg border border-white/5">
                  {activeSkill.description}
                </p>
              </div>

              {/* Specialization Tags */}
              <div className="space-y-2">
                <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider block font-semibold">
                  Key Technical Competencies &amp; Concepts
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeSkill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.03] font-mono text-[11px] text-zinc-300 hover:text-white transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Connected Portfolio Projects */}
              {associatedProjects.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="font-mono text-[11px] text-accent-red uppercase tracking-wider block font-semibold">
                    Verified Implementations in Portfolio
                  </span>
                  <div className="space-y-1.5">
                    {associatedProjects.map((proj) => (
                      <div
                        key={proj.id}
                        className="px-3 py-2 rounded-lg bg-black/40 border border-white/10 flex items-center justify-between text-xs font-mono hover:border-accent-red/50 transition-colors"
                      >
                        <span className="text-zinc-200 truncate max-w-[200px]">
                          {proj.title.split(" — ")[0]}
                        </span>
                        <span className="text-[10px] text-accent-red flex items-center gap-1 font-semibold">
                          <span>{proj.status === "ACTIVE PRODUCTION" ? "PROD" : proj.status}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Telemetry Evidence Box */}
              <div className="p-3 rounded-lg border border-white/10 bg-black/60 font-mono text-[11px] text-zinc-400 space-y-1">
                <div className="flex justify-between">
                  <span>EVIDENCE CATEGORY:</span>
                  <span className="text-white">{activeSkill.category}</span>
                </div>
                <div className="flex justify-between">
                  <span>METRIC STANDARD:</span>
                  <span className="text-emerald-400 font-semibold">Non-Numerical Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
