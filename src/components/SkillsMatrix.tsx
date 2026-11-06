"use client";

import React, { useState } from "react";
import { sound } from "@/lib/audio";
import { SKILL_CATEGORIES, SkillCategory, SkillItem } from "@/data/skills";
import { Terminal, Code, Cpu, Database, Layout, Smartphone, Wrench, CheckCircle2 } from "lucide-react";

export function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeSkill, setActiveSkill] = useState<SkillItem>(SKILL_CATEGORIES[0].skills[0]);

  const handleCategorySelect = (id: string) => {
    sound.playTabSwitch();
    setSelectedCategory(id);
  };

  const handleSkillHover = (skill: SkillItem) => {
    sound.playHover();
    setActiveSkill(skill);
  };

  const displayedCategories =
    selectedCategory === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 md:px-8 border-b border-border-subtle relative">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-accent-red uppercase tracking-widest font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-red" />
            <span>02 // ARCHITECTURAL COMPETENCIES</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-text-primary tracking-tight">
            SYSTEMS & SKILLS MATRIX
          </h2>
          <p className="font-sans text-sm sm:text-base text-text-secondary max-w-2xl">
            Technical competencies categorized by architecture tier, verified through working code, repositories, and academic foundations.
          </p>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-border-subtle/70 font-mono text-xs">
          <button
            onClick={() => handleCategorySelect("all")}
            onMouseEnter={() => sound.playHover()}
            className={`px-3.5 py-1.5 rounded border transition-colors ${
              selectedCategory === "all"
                ? "border-accent-red bg-accent-red/20 text-text-primary font-semibold shadow-crimson-glow"
                : "border-border-subtle bg-bg-panel/40 text-text-secondary hover:text-text-primary hover:border-border-subtle/80"
            }`}
          >
            ALL ARCHITECTURES ({SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              onMouseEnter={() => sound.playHover()}
              className={`px-3 py-1.5 rounded border transition-colors ${
                selectedCategory === cat.id
                  ? "border-accent-red bg-accent-red/20 text-text-primary font-semibold shadow-crimson-glow"
                  : "border-border-subtle bg-bg-panel/40 text-text-secondary hover:text-text-primary hover:border-border-subtle/80"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Matrix Grid + Inspector Panel */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Matrix Grid (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {displayedCategories.map((category) => (
              <div
                key={category.id}
                className="rounded-lg border border-border-subtle bg-bg-panel/60 p-5 space-y-4 shadow-panel-subtle"
              >
                <div className="flex items-center justify-between border-b border-border-subtle/60 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-accent-red font-semibold">{category.code}</span>
                    <h3 className="font-heading font-bold text-base text-text-primary">{category.name}</h3>
                  </div>
                  <span className="font-mono text-[11px] text-text-muted hidden sm:inline-block">
                    {category.skills.length} TECHNOLOGIES
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill) => {
                    const isSelected = activeSkill.name === skill.name;
                    return (
                      <div
                        key={skill.name}
                        onClick={() => {
                          sound.playClick();
                          setActiveSkill(skill);
                        }}
                        onMouseEnter={() => handleSkillHover(skill)}
                        className={`cursor-pointer p-3.5 rounded border transition-all duration-150 flex flex-col justify-between ${
                          isSelected
                            ? "border-accent-red bg-accent-red/10 shadow-crimson-glow"
                            : "border-border-subtle/70 bg-bg-secondary/70 hover:border-accent-red/40 hover:bg-bg-panel-hover"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-heading font-bold text-sm text-text-primary">
                            {skill.name}
                          </span>
                          <span
                            className={`font-mono text-[9px] px-2 py-0.5 rounded tracking-wide font-medium ${
                              skill.level === "Advanced Architecture"
                                ? "bg-accent-red/20 text-accent-red border border-accent-red/40"
                                : skill.level === "Active Production"
                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                                : skill.level === "Core Engineering"
                                ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                                : "bg-neutral-800 text-neutral-400 border border-neutral-700"
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>

                        <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
                          {skill.description}
                        </p>

                        <div className="mt-2.5 flex flex-wrap gap-1.5 pt-2 border-t border-border-subtle/40">
                          {skill.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[10px] text-text-muted bg-black/40 px-1.5 py-0.5 rounded"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Technical Inspector HUD (4 cols) */}
          <div className="lg:col-span-4 sticky top-24 space-y-4">
            <div className="rounded-lg border border-border-subtle bg-bg-panel p-6 shadow-panel-subtle space-y-5">
              <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                <div className="flex items-center gap-2 font-mono text-xs text-accent-red font-semibold">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>TECHNOLOGY INSPECTOR</span>
                </div>
                <span className="font-mono text-[10px] text-text-muted">[LIVE HUD]</span>
              </div>

              <div>
                <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                  Selected Component
                </span>
                <h4 className="font-heading font-black text-2xl text-text-primary mt-1">
                  {activeSkill.name}
                </h4>
                <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-accent-red/10 border border-accent-red/30 font-mono text-xs text-accent-red">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-red" />
                  <span>{activeSkill.level}</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                  Architectural Role & Scope
                </span>
                <p className="text-sm text-text-secondary leading-relaxed font-sans">
                  {activeSkill.description}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-border-subtle">
                <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                  Associated Specializations
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeSkill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded border border-border-subtle bg-bg-secondary font-mono text-xs text-text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded border border-border-subtle bg-bg-secondary/70 font-mono text-[11px] text-text-muted space-y-1">
                <div className="flex justify-between">
                  <span>EVIDENCE CATEGORY:</span>
                  <span className="text-text-primary">{activeSkill.category}</span>
                </div>
                <div className="flex justify-between">
                  <span>METRIC STANDARD:</span>
                  <span className="text-emerald-400">Non-Numerical Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
