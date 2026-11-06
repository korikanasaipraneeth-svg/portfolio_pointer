"use client";

import React from "react";
import { sound } from "@/lib/audio";
import { VERIFIED_TIMELINE, TimelineMilestone } from "@/data/timeline";
import { Calendar, CheckCircle2, Award, BookOpen, GitCommit, ShieldCheck } from "lucide-react";

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 md:px-8 border-b border-border-subtle relative">
      <div className="w-full max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-2 border-b border-border-subtle/80 pb-6">
          <div className="flex items-center gap-2 font-mono text-xs text-accent-red uppercase tracking-widest font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-red" />
            <span>06 // VERIFIED TRAJECTORY</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-text-primary tracking-tight">
            ACADEMIC & DEVELOPMENT CHRONOLOGY
          </h2>
          <p className="font-sans text-sm sm:text-base text-text-secondary max-w-2xl">
            A verified chronological progression of academic training, software engineering milestones, and open-source contributions.
          </p>
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l border-border-subtle ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {VERIFIED_TIMELINE.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => sound.playHover()}
              className="relative space-y-3 group"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-background border-2 border-accent-red group-hover:scale-125 group-hover:bg-accent-red transition-all shadow-crimson-glow" />

              {/* Top Meta Strip */}
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="px-2.5 py-0.5 rounded bg-accent-red/15 border border-accent-red/40 text-accent-red font-semibold">
                  {item.year}
                </span>
                <span className="text-text-muted">{item.institutionOrContext}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-bg-panel border border-border-subtle text-text-secondary">
                  {item.badge}
                </span>
              </div>

              {/* Title & Organization */}
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-text-primary group-hover:text-accent-red transition-colors">
                {item.title}
              </h3>

              {/* Summary Description */}
              <p className="font-sans text-sm text-text-secondary leading-relaxed max-w-3xl">
                {item.summary}
              </p>

              {/* Bullets */}
              <div className="space-y-1.5 pt-1">
                {item.bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-red shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips & Verification Badge */}
              <div className="pt-3 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-bg-panel border border-border-subtle text-text-muted text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-text-muted">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{item.verifiedEvidence}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
