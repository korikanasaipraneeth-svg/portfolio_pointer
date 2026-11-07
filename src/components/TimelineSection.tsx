"use client";

import React from "react";
import { sound } from "@/lib/audio";
import { JOURNEY_TIMELINE, WHATS_NEXT } from "@/data/timeline";
import { ExternalLink, ShieldCheck, Zap } from "lucide-react";
import { Interactive3DTilt } from "@/components/Interactive3DTilt";

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 md:px-8 border-b border-border-subtle relative bg-background/50 overflow-hidden">
      {/* Background ambient lighting aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent-red/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
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

        {/* Alternating Left and Right Timeline Container */}
        <div className="relative w-full">
          {/* Vertical Center Spine Line with Traveling Electric Laser Flow */}
          <div className="absolute left-4 sm:left-6 lg:left-1/2 top-6 bottom-6 w-0.5 bg-gradient-to-b from-accent-red/30 via-accent-red/60 to-accent-red/30 -translate-x-1/2 z-0 overflow-hidden">
            <div className="w-full h-32 bg-gradient-to-b from-transparent via-white to-transparent animate-laser-flow shadow-[0_0_10px_#ffffff]" />
          </div>

          {/* Timeline Nodes */}
          <div className="space-y-10 sm:space-y-12">
            {JOURNEY_TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0; // Even -> Left side, Odd -> Right side

              return (
                <div
                  key={item.id}
                  className={`relative w-full flex items-center pl-10 sm:pl-14 lg:pl-0 ${
                    isEven ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {/* Central Glowing Node Pin with Radar Ripple */}
                  <div className="absolute left-4 sm:left-6 lg:left-1/2 -translate-x-1/2 top-6 z-20 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute -inset-2 rounded-full border border-accent-red/40 animate-ping opacity-35 pointer-events-none" />
                      <div className="w-5 h-5 rounded-full bg-black border-2 border-accent-red flex items-center justify-center shadow-crimson-glow">
                        <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Horizontal Connector Line for Desktop */}
                  <div
                    className={`hidden lg:block absolute top-8.5 h-px bg-accent-red/40 z-10 ${
                      isEven
                        ? "right-1/2 w-8 -translate-x-2"
                        : "left-1/2 w-8 translate-x-2"
                    }`}
                  />

                  {/* 3D Milestone Card (~45% width on desktop, 100% on mobile) */}
                  <Interactive3DTilt
                    maxTilt={5}
                    scale={1.015}
                    glare={true}
                    className="w-full lg:w-[calc(50%-2.5rem)]"
                  >
                    <div
                      onMouseEnter={() => sound.playHover()}
                      className="w-full rounded-2xl border border-border-subtle bg-bg-panel/90 backdrop-blur-md p-5 sm:p-6 space-y-3.5 hover:border-accent-red/60 hover:shadow-[0_12px_32px_rgba(199,44,70,0.18)] transition-all duration-300 relative group"
                    >
                      {/* Meta Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                        <span className="px-2.5 py-0.5 rounded-full bg-accent-red/15 border border-accent-red/40 text-accent-red font-bold tracking-wider">
                          {item.year}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-text-muted px-2 py-0.5 rounded bg-white/[0.04] border border-white/10">
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

                      {/* Skills / Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[11px]">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded bg-bg-secondary border border-border-subtle text-text-secondary group-hover:border-accent-red/30 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Live Link / Verification Badge */}
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
                          <span className="flex items-center gap-1 text-emerald-400/90 text-[10px]">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                            <span>{item.verifiedEvidence}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </Interactive3DTilt>
                </div>
              );
            })}
          </div>

          {/* Bottom Capstone Block: "What's Next?" */}
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
