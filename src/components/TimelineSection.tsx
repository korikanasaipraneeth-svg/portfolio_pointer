"use client";

import React from "react";
import { sound } from "@/lib/audio";
import { JOURNEY_TIMELINE, WHATS_NEXT, JourneyItem } from "@/data/timeline";
import { Award, ExternalLink, ShieldCheck, Sparkles, Rocket, Zap, ArrowRight } from "lucide-react";

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 md:px-8 border-b border-border-subtle relative bg-background/50">
      <div className="w-full max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-red uppercase tracking-widest font-semibold px-3 py-1 rounded-full border border-accent-red/30 bg-accent-red/10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-red animate-pulse" />
            <span>04 // MY JOURNEY</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl text-text-primary tracking-tight">
            Academic &amp; Development{" "}
            <span className="text-accent-red italic font-caveat text-5xl sm:text-7xl lowercase drop-shadow-md">
              Timeline
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed">
            A journey of learning, leadership, achievements, and software development.
          </p>
        </div>

        {/* Alternating Left-and-Right Vertical Timeline */}
        <div className="relative">
          {/* Center Vertical Timeline Track Line */}
          <div className="absolute left-4 sm:left-6 lg:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-accent-red via-accent-red/30 to-accent-red -translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-12 sm:space-y-16">
            {JOURNEY_TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => sound.playHover()}
                  className="relative flex flex-col lg:flex-row items-center w-full group"
                >
                  {/* Central Node Pin */}
                  <div className="absolute left-4 sm:left-6 lg:left-1/2 -translate-x-1/2 top-6 z-20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-black border-2 border-accent-red flex items-center justify-center shadow-crimson-glow group-hover:scale-125 transition-transform duration-200">
                      <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
                    </div>
                  </div>

                  {/* Left Column Container (Desktop) */}
                  <div className={`w-full lg:w-1/2 pl-12 sm:pl-16 lg:pl-0 ${isEven ? "lg:pr-12 lg:text-right" : "lg:hidden"}`}>
                    {isEven && (
                      <div className="p-6 rounded-xl border border-border-subtle/80 bg-bg-panel/90 backdrop-blur-sm space-y-4 hover:border-accent-red/60 hover:shadow-crimson-glow/20 transition-all duration-300">
                        {/* Meta Header */}
                        <div className="flex flex-wrap items-center gap-2.5 lg:justify-end font-mono text-xs">
                          <span className="px-2.5 py-0.5 rounded-full bg-accent-red/15 border border-accent-red/40 text-accent-red font-bold tracking-wider">
                            {item.year}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-text-muted px-2 py-0.5 rounded bg-white/[0.03] border border-white/5">
                            {item.categoryBadge}
                          </span>
                        </div>

                        {/* Title & Role */}
                        <div className="space-y-1">
                          <h3 className="font-heading font-black text-xl sm:text-2xl text-text-primary group-hover:text-accent-red transition-colors flex items-center gap-2 lg:justify-end">
                            <span>{item.title}</span>
                            <span className="text-xl">{item.emoji}</span>
                          </h3>
                          <div className="font-mono text-xs font-semibold text-emerald-400">
                            {item.role}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed">
                          {item.description}
                        </p>

                        {/* Skills / Tech Stack Chips */}
                        <div className="flex flex-wrap gap-1.5 pt-1 lg:justify-end font-mono text-[11px]">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 rounded bg-bg-secondary border border-border-subtle text-text-secondary hover:text-white hover:border-accent-red/40 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Optional Live Link or Verification Footnote */}
                        <div className="pt-2 border-t border-border-subtle/50 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-text-muted">
                          {item.liveLink ? (
                            <a
                              href={item.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => sound.playClick()}
                              className="inline-flex items-center gap-1.5 text-accent-red font-semibold hover:underline"
                            >
                              <span>View Live Application</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span />
                          )}
                          {item.verifiedEvidence && (
                            <span className="flex items-center gap-1 text-emerald-400/90">
                              <ShieldCheck className="w-3.5 h-3.5" />
                              <span>{item.verifiedEvidence}</span>
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column Container (Desktop) */}
                  <div className={`w-full lg:w-1/2 pl-12 sm:pl-16 lg:pl-12 ${!isEven ? "" : "lg:block hidden"}`}>
                    {!isEven && (
                      <div className="p-6 rounded-xl border border-border-subtle/80 bg-bg-panel/90 backdrop-blur-sm space-y-4 hover:border-accent-red/60 hover:shadow-crimson-glow/20 transition-all duration-300">
                        {/* Meta Header */}
                        <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
                          <span className="px-2.5 py-0.5 rounded-full bg-accent-red/15 border border-accent-red/40 text-accent-red font-bold tracking-wider">
                            {item.year}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-text-muted px-2 py-0.5 rounded bg-white/[0.03] border border-white/5">
                            {item.categoryBadge}
                          </span>
                        </div>

                        {/* Title & Role */}
                        <div className="space-y-1">
                          <h3 className="font-heading font-black text-xl sm:text-2xl text-text-primary group-hover:text-accent-red transition-colors flex items-center gap-2">
                            <span>{item.title}</span>
                            <span className="text-xl">{item.emoji}</span>
                          </h3>
                          <div className="font-mono text-xs font-semibold text-emerald-400">
                            {item.role}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed">
                          {item.description}
                        </p>

                        {/* Skills / Tech Stack Chips */}
                        <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[11px]">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 rounded bg-bg-secondary border border-border-subtle text-text-secondary hover:text-white hover:border-accent-red/40 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Optional Live Link or Verification Footnote */}
                        <div className="pt-2 border-t border-border-subtle/50 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-text-muted">
                          {item.liveLink ? (
                            <a
                              href={item.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => sound.playClick()}
                              className="inline-flex items-center gap-1.5 text-accent-red font-semibold hover:underline"
                            >
                              <span>View Live Application</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span />
                          )}
                          {item.verifiedEvidence && (
                            <span className="flex items-center gap-1 text-emerald-400/90">
                              <ShieldCheck className="w-3.5 h-3.5" />
                              <span>{item.verifiedEvidence}</span>
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Capstone: What's Next? (As Requested in Timeline) */}
          <div className="mt-16 pt-8 relative z-20 max-w-2xl mx-auto">
            <div className="p-6 sm:p-8 rounded-2xl border-2 border-accent-red/50 bg-gradient-to-b from-bg-panel to-bg-panel/90 text-center space-y-4 shadow-crimson-glow">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-red/20 border border-accent-red/50 text-accent-red font-mono text-xs font-bold tracking-wider">
                <Zap className="w-3.5 h-3.5 animate-pulse" />
                <span>{WHATS_NEXT.badge}</span>
              </div>

              <h3 className="font-heading font-black text-2xl sm:text-3xl text-text-primary tracking-tight">
                {WHATS_NEXT.title} <span className="text-accent-red">{WHATS_NEXT.emoji}</span>
              </h3>

              <p className="font-sans text-sm sm:text-base text-text-secondary max-w-lg mx-auto leading-relaxed">
                {WHATS_NEXT.headline}
              </p>

              {/* Focus Areas Chips */}
              <div className="pt-3 flex flex-wrap items-center justify-center gap-2 font-mono text-xs">
                {WHATS_NEXT.focus.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white font-medium hover:border-accent-red/60 hover:text-accent-red transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
