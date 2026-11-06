"use client";

import React, { useState } from "react";
import { sound } from "@/lib/audio";
import { ArrowRight, Download, MousePointer2 } from "lucide-react";

export function HeroSection() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-start items-center px-4 sm:px-6 md:px-8 pt-24 pb-16 overflow-hidden border-b border-border-subtle"
    >
      {/* 3 Vertical Hairline Grid Lines (SAAI.pro style) */}
      <div className="absolute inset-0 pointer-events-none flex justify-around max-w-7xl mx-auto z-0" aria-hidden="true">
        <div className="w-[1px] h-full bg-white/[0.04]" />
        <div className="w-[1px] h-full bg-white/[0.04]" />
        <div className="w-[1px] h-full bg-white/[0.04]" />
      </div>

      {/* Massive Outlined PORTFOLIO Wordmark across the top (Exact SAAI.pro styling) */}
      <div
        aria-hidden="true"
        className="w-full max-w-7xl mx-auto relative z-1 select-none pointer-events-none mb-[-3.2vw] pt-2"
      >
        <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 215" className="w-full block">
          <text
            x="0"
            y="205"
            fontSize="270"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            className="font-bebas fill-[#c93a3a]/[0.22] stroke-[#c93a3a] stroke-[1.5]"
            style={{ paintOrder: "stroke" }}
          >
            PORTFOLIO
          </text>
        </svg>
      </div>

      {/* 3-Column Hero Stage Grid */}
      <div className="w-full max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-2 lg:mt-0">
        {/* LEFT FLANK (5 cols): Script, Name Box, Pill, Description, CTAs, Stats */}
        <div className="lg:col-span-5 flex flex-col space-y-4 text-left">
          {/* Cursive Script (Caveat font) */}
          <div className="font-script text-white text-3xl sm:text-4xl tracking-wide select-none leading-none">
            Hello, I&apos;m
          </div>

          {/* Solid Red Name Box (Bebas Neue on #C72C46) */}
          <div>
            <h1 className="hero-name-badge inline-block font-bebas text-white text-5xl sm:text-7xl lg:text-8xl bg-accent-red px-3 py-0.5 tracking-wider leading-none shadow-crimson-glow">
              PRANEETH<span className="text-white">.</span>
            </h1>
          </div>

          {/* Role Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-border-subtle bg-bg-panel/90 w-fit font-mono text-[11px] text-text-primary tracking-wider">
            <span className="text-accent-red font-bold text-xs animate-pulse">●</span>
            <span>AI SYSTEM ARCHITECT &amp; VIBE CODER</span>
          </div>

          {/* Description */}
          <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed max-w-md">
            Architecting <strong className="text-text-primary">24/7 intelligent software ecosystems</strong>, multi-agent swarms, and <strong className="text-text-primary">AI-assisted engineering models</strong> from first principles — zero frameworks, total autonomy.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#contact"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="px-5 py-3 rounded-sm bg-accent-red text-white font-mono text-xs sm:text-sm tracking-wider font-semibold hover:bg-accent-red-hover hover:shadow-crimson-glow transition-all duration-200 flex items-center gap-2 group shadow-sm"
            >
              <span>INITIATE DISPATCH</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#projects"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="px-5 py-3 rounded-sm border border-border-subtle bg-bg-panel/70 hover:bg-bg-panel text-text-primary font-mono text-xs sm:text-sm tracking-wider hover:border-accent-red/60 transition-all duration-200"
            >
              EXPLORE ARCHITECTURE
            </a>

            <button
              onClick={() => {
                sound.playClick();
                setResumeModalOpen(true);
              }}
              onMouseEnter={() => sound.playHover()}
              className="p-3 rounded-sm border border-border-subtle bg-bg-panel/40 text-text-muted hover:text-text-primary hover:border-border-subtle transition-colors"
              title="View & Download Verified Resume"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>

          {/* Stats Row (3 Columns) */}
          <div className="grid grid-cols-3 gap-2 pt-6 border-t border-border-subtle/60 font-mono text-xs">
            <div className="space-y-0.5">
              <div className="font-heading font-black text-2xl sm:text-3xl text-accent-red">12</div>
              <div className="text-[10px] text-text-muted tracking-tight">Public Repos</div>
            </div>
            <div className="space-y-0.5">
              <div className="font-heading font-black text-2xl sm:text-3xl text-text-primary">7-Layer</div>
              <div className="text-[10px] text-text-muted tracking-tight">AIML Stack</div>
            </div>
            <div className="space-y-0.5">
              <div className="font-heading font-black text-2xl sm:text-3xl text-emerald-400">100%</div>
              <div className="text-[10px] text-text-muted tracking-tight">Verified Evidence</div>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN (3.5 cols): The Iconic Portrait Cutout Card */}
        <div className="lg:col-span-3.5 flex justify-center items-center my-4 lg:my-0">
          <div className="relative w-full max-w-[340px] aspect-[4/5] bg-gradient-to-b from-[#0a0a0c] via-[#121216] to-[#08090B] border border-border-subtle overflow-visible group">
            {/* Offset Red Accent Panel (Exact SAAI.pro styling) */}
            <div
              className="absolute inset-[15%_6%_0] z-0 bg-accent-red transform translate-x-3.5 -translate-y-3.5 opacity-90 transition-transform group-hover:translate-x-4 group-hover:-translate-y-4"
              aria-hidden="true"
            >
              <div className="absolute inset-0 border border-white/30 transform -translate-x-3.5 translate-y-3.5" />
            </div>

            {/* Stylized Monochrome Silhouette Portrait */}
            <div className="relative z-10 w-full h-full flex flex-col justify-end items-center overflow-hidden">
              <svg
                viewBox="0 0 340 425"
                className="w-full h-full object-cover filter contrast-125 grayscale"
                preserveAspectRatio="xMidYMid slice"
              >
                {/* Background Shadow */}
                <rect width="340" height="425" fill="#08090B" />
                {/* Crimson Backlight Gradient */}
                <radialGradient id="cutoutGrad" cx="50%" cy="40%" r="50%">
                  <stop offset="0%" stopColor="#C72C46" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#8A172D" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#08090B" stopOpacity="0" />
                </radialGradient>
                <circle cx="170" cy="180" r="140" fill="url(#cutoutGrad)" />
                {/* Developer Silhouette */}
                <path
                  d="M170 85 C145 85 125 105 125 135 C125 155 135 170 145 180 C110 195 85 230 80 280 L260 280 C255 230 230 195 195 180 C205 170 215 155 215 135 C215 105 195 85 170 85 Z"
                  fill="#0e0f14"
                  stroke="#292A31"
                  strokeWidth="2"
                />
                {/* Head curls and stylized facial structure */}
                <path
                  d="M140 100 Q155 80 170 82 Q185 80 200 100 Q205 120 195 135 Q170 145 145 135 Z"
                  fill="#181920"
                />
                <circle cx="155" cy="125" r="3" fill="#E05269" />
                <circle cx="185" cy="125" r="3" fill="#E05269" />
                <path d="M150 200 L170 240 L190 200" stroke="#C72C46" strokeWidth="2" fill="none" />
                <path d="M170 240 L170 300" stroke="#E05269" strokeWidth="1.5" />
                {/* Ambient Fog Bottom */}
                <rect y="320" width="340" height="105" fill="url(#bottomFade)" />
                <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#08090B" stopOpacity="0" />
                  <stop offset="100%" stopColor="#08090B" stopOpacity="1" />
                </linearGradient>
              </svg>
            </div>

            {/* Bottom Status Pill (Exact SAAI.pro styling) */}
            <div className="absolute -left-2 bottom-3.5 z-20 px-3 py-1.5 bg-black border border-accent-red font-mono font-bold text-xs text-white tracking-wider flex items-center gap-2 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
              <span>SOVEREIGN SILICON ACTIVE</span>
            </div>
          </div>
        </div>

        {/* RIGHT FLANK (3.5 cols): Stack of 3 Technical System Cards */}
        <div className="lg:col-span-3.5 flex flex-col space-y-3">
          {/* Card 01 */}
          <div className="p-4 rounded-sm border border-border-subtle bg-bg-panel/70 hover:border-accent-red/50 hover:bg-bg-panel transition-all space-y-2">
            <div className="flex items-center justify-between font-mono text-[11px] text-text-muted">
              <span className="text-text-primary font-bold">01.</span>
              <span className="px-1.5 py-0.5 rounded bg-black/60 border border-border-subtle text-[9px] uppercase tracking-wider text-accent-red">
                RUNTIME
              </span>
            </div>
            <h4 className="font-heading font-bold text-base text-text-primary leading-tight">
              Autonomous Core
            </h4>
            <p className="font-sans text-xs text-text-secondary leading-relaxed">
              Local-first agent runtime with multi-provider model routing. Zero cloud lock-in.
            </p>
          </div>

          {/* Card 02 */}
          <div className="p-4 rounded-sm border border-border-subtle bg-bg-panel/70 hover:border-accent-red/50 hover:bg-bg-panel transition-all space-y-2">
            <div className="flex items-center justify-between font-mono text-[11px] text-text-muted">
              <span className="text-text-primary font-bold">02.</span>
              <span className="px-1.5 py-0.5 rounded bg-black/60 border border-border-subtle text-[9px] uppercase tracking-wider text-emerald-400">
                PRODUCTION
              </span>
            </div>
            <h4 className="font-heading font-bold text-base text-text-primary leading-tight">
              AgriSahay AI &amp; STUDENT360
            </h4>
            <p className="font-sans text-xs text-text-secondary leading-relaxed">
              Multimodal computer vision &amp; faculty-verified academic SaaS. 1st Prize Google Hackathon.
            </p>
          </div>

          {/* Card 03 */}
          <div className="p-4 rounded-sm border border-border-subtle bg-bg-panel/70 hover:border-accent-red/50 hover:bg-bg-panel transition-all space-y-2">
            <div className="flex items-center justify-between font-mono text-[11px] text-text-muted">
              <span className="text-text-primary font-bold">03.</span>
              <span className="px-1.5 py-0.5 rounded bg-black/60 border border-border-subtle text-[9px] uppercase tracking-wider text-cyan-400">
                EXECUTION
              </span>
            </div>
            <h4 className="font-heading font-bold text-base text-text-primary leading-tight">
              Sub-50ms Event Loops
            </h4>
            <p className="font-sans text-xs text-text-secondary leading-relaxed">
              Emergency geospatial triage, Haversine routing &amp; 4-tier persistent memory.
            </p>

            {/* Stack Chips */}
            <div className="pt-2 flex flex-wrap gap-1 font-mono text-[9px] text-text-muted">
              {["Python", "React 19", "FastAPI", "Next.js", "Flutter", "MySQL"].map((tech) => (
                <span key={tech} className="px-1.5 py-0.5 rounded bg-black/40 border border-border-subtle">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {resumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="max-w-xl w-full rounded-lg border border-border-subtle bg-bg-panel p-6 sm:p-8 shadow-2xl space-y-5 font-sans">
            <div className="flex items-center justify-between border-b border-border-subtle pb-3">
              <div className="font-mono text-xs text-accent-red font-semibold uppercase tracking-wider">
                Official Curriculum Vitae
              </div>
              <button
                onClick={() => setResumeModalOpen(false)}
                className="text-text-muted hover:text-text-primary text-sm font-mono"
              >
                [ESC]
              </button>
            </div>

            <div className="space-y-1">
              <h3 className="font-heading font-bold text-2xl text-text-primary">
                Korikana Sai Praneeth
              </h3>
              <div className="font-mono text-xs text-accent-red">
                B.Tech AIML — Sri Sivani College of Engineering (Roll No: 24W61A6119)
              </div>
            </div>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              3rd-year B.Tech student specializing in Artificial Intelligence and Machine Learning with strong full-stack development skills. Microsoft Student Ambassador, 1st Prize Winner at Google Student Ambassador Hackathon &amp; Brainovision Hackathon.
            </p>

            <div className="p-3.5 rounded bg-bg-secondary border border-border-subtle font-mono text-xs text-text-muted space-y-1.5">
              <div className="flex justify-between">
                <span>EMAIL:</span>
                <span className="text-text-primary">korikanasaipraneeth@gmail.com</span>
              </div>
              <div className="flex justify-between">
                <span>TELEPHONE:</span>
                <span className="text-text-primary">+91 7569552087</span>
              </div>
              <div className="flex justify-between">
                <span>GITHUB:</span>
                <span className="text-accent-red font-semibold">korikanasaipraneeth-svg</span>
              </div>
              <div className="flex justify-between">
                <span>LINKEDIN:</span>
                <span className="text-text-primary">korikana-saipraneeth</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setResumeModalOpen(false)}
                className="px-4 py-2 rounded border border-border-subtle text-xs font-mono text-text-secondary hover:text-text-primary"
              >
                Close
              </button>
              <a
                href="mailto:korikanasaipraneeth@gmail.com?subject=Resume%20Inquiry%20for%20Korikana%20Sai%20Praneeth"
                onClick={() => {
                  sound.playClick();
                  setResumeModalOpen(false);
                }}
                className="px-4 py-2 rounded bg-accent-red hover:bg-accent-red-hover text-white text-xs font-mono font-semibold shadow-crimson-glow"
              >
                Request Official PDF →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
