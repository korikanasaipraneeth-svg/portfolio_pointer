"use client";

import React, { useState, useEffect } from "react";
import { sound } from "@/lib/audio";
import { ArrowUpRight, Github, Send, Terminal, Sparkles, Cpu, Layers, Code2, Download } from "lucide-react";

export function HeroSection() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [latency, setLatency] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(20 + Math.floor(Math.random() * 8));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 pt-28 pb-16 overflow-hidden border-b border-border-subtle"
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"
        aria-hidden="true"
      />

      {/* Radial Crimson Ambient Glow in Background */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-red/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col z-10">
        {/* Top Telemetry Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-border-subtle/70 font-mono text-xs text-text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
            <span className="text-text-secondary tracking-wider font-semibold">
              KORIKANA SAI PRANEETH // SYSTEMS ARCHITECT
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden sm:inline-block">
              INSTITUTION: <span className="text-text-primary">SRI SIVANI COE</span>
            </span>
            <span>
              PING: <span className="text-accent-red">{latency}ms</span>
            </span>
            <span className="px-2 py-0.5 rounded border border-accent-red/40 bg-accent-red/10 text-accent-red">
              ACTIVE
            </span>
          </div>
        </div>

        {/* Main Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Super Title */}
            <div className="space-y-1">
              <div className="font-mono text-xs sm:text-sm text-accent-red tracking-widest uppercase font-semibold flex items-center gap-2">
                <span>[ HELLO, I&apos;M ]</span>
              </div>

              {/* Massive Name Display */}
              <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-text-primary tracking-tight leading-[1.05]">
                KORIKANA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent-red-hover to-accent-red">
                  SAI PRANEETH
                </span>
              </h1>
            </div>

            {/* Professional Subtitles & Badges */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="px-3 py-1 rounded bg-bg-panel border border-accent-red/50 text-text-primary font-semibold tracking-wider">
                AI & SOFTWARE DEVELOPER
              </span>
              <span className="px-3 py-1 rounded bg-bg-panel/70 border border-border-subtle text-text-secondary">
                VIBE CODER
              </span>
              <span className="px-3 py-1 rounded bg-bg-panel/70 border border-border-subtle text-accent-red font-medium">
                AIML ENGINEER
              </span>
            </div>

            {/* Concise Introduction */}
            <p className="font-sans text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl">
              I build intelligent software experiences by combining AI, engineering, automation and creative problem-solving.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="px-5 py-3 rounded border border-accent-red bg-accent-red text-text-primary font-mono text-xs sm:text-sm tracking-wider font-semibold hover:bg-accent-red-hover hover:shadow-crimson-glow transition-all duration-200 flex items-center gap-2 group"
              >
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                <span>INITIATE CONTACT</span>
              </a>

              <a
                href="#projects"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="px-5 py-3 rounded border border-border-subtle bg-bg-panel/80 hover:bg-bg-panel text-text-primary font-mono text-xs sm:text-sm tracking-wider hover:border-accent-red/60 transition-all duration-200 flex items-center gap-2"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowUpRight className="w-4 h-4 text-accent-red" />
              </a>

              <a
                href="https://github.com/korikanasaipraneeth-svg"
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="px-4 py-3 rounded border border-border-subtle bg-bg-panel/40 hover:bg-bg-panel text-text-secondary hover:text-text-primary font-mono text-xs sm:text-sm transition-all duration-200 flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-text-primary" />
                <span>GITHUB</span>
              </a>

              <button
                onClick={() => {
                  sound.playClick();
                  setResumeModalOpen(true);
                }}
                onMouseEnter={() => sound.playHover()}
                className="px-4 py-3 rounded border border-dashed border-border-subtle bg-transparent hover:border-text-muted text-text-muted hover:text-text-secondary font-mono text-xs sm:text-sm transition-colors flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>RESUME</span>
              </button>
            </div>

            {/* Verified Quick Stats Strip */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-border-subtle/60 font-mono">
              <div className="p-3 rounded border border-border-subtle/70 bg-bg-panel/40">
                <div className="text-xl font-heading font-bold text-text-primary">12</div>
                <div className="text-[10px] text-text-muted tracking-tight uppercase">Public Repositories</div>
              </div>
              <div className="p-3 rounded border border-border-subtle/70 bg-bg-panel/40">
                <div className="text-xl font-heading font-bold text-accent-red">AIML</div>
                <div className="text-[10px] text-text-muted tracking-tight uppercase">B.Tech Degree</div>
              </div>
              <div className="p-3 rounded border border-border-subtle/70 bg-bg-panel/40">
                <div className="text-xl font-heading font-bold text-text-primary">12</div>
                <div className="text-[10px] text-text-muted tracking-tight uppercase">Specialized Agents</div>
              </div>
              <div className="p-3 rounded border border-border-subtle/70 bg-bg-panel/40">
                <div className="text-xl font-heading font-bold text-emerald-400">100%</div>
                <div className="text-[10px] text-text-muted tracking-tight uppercase">Genuine Evidence</div>
              </div>
            </div>
          </div>

          {/* Right Column: Original Abstract Developer Workspace HUD (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-lg border border-border-subtle bg-bg-panel/90 backdrop-blur-md p-5 shadow-panel-subtle hover:border-accent-red/40 transition-colors">
              {/* Corner Decorative Brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent-red -translate-x-[1px] -translate-y-[1px]" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent-red translate-x-[1px] -translate-y-[1px]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent-red -translate-x-[1px] translate-y-[1px]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent-red translate-x-[1px] translate-y-[1px]" />

              {/* HUD Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-subtle font-mono text-[11px] text-text-muted">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-accent-red" />
                  <span className="text-text-primary font-semibold">ENGINEERING WORKSPACE</span>
                </div>
                <span className="text-[10px] text-accent-red">VIBE_ENV // RUNNING</span>
              </div>

              {/* Code Snippet / Architectural Telemetry Display */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded bg-black/60 border border-border-subtle/50 text-[11px] space-y-1 overflow-x-auto text-text-secondary">
                  <div className="text-text-muted">{"// Autonomous Agent Dispatcher"}</div>
                  <div>
                    <span className="text-accent-red">const</span> architect = <span className="text-purple-400">new</span>{" "}
                    <span className="text-yellow-400">Developer</span>({`{`}
                  </div>
                  <div className="pl-4">
                    name: <span className="text-emerald-400">&quot;Korikana Sai Praneeth&quot;</span>,
                  </div>
                  <div className="pl-4">
                    role: <span className="text-emerald-400">&quot;Vibe Coder | AIML Builder&quot;</span>,
                  </div>
                  <div className="pl-4">
                    coreDisciplines: [<span className="text-emerald-400">&quot;AI/ML&quot;</span>, <span className="text-emerald-400">&quot;Full-Stack&quot;</span>, <span className="text-emerald-400">&quot;Agent Swarms&quot;</span>],
                  </div>
                  <div className="pl-4">
                    executionEngine: <span className="text-emerald-400">&quot;Autonomous DAG + Human In Loop&quot;</span>,
                  </div>
                  <div>{`});`}</div>
                </div>

                {/* Micro Telemetry Gauges */}
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 rounded border border-border-subtle bg-background/50">
                    <div className="text-text-muted text-[10px]">VERIFIED PROJECTS</div>
                    <div className="font-semibold text-text-primary mt-0.5">AgriSahay AI • STUDENT360</div>
                  </div>
                  <div className="p-2.5 rounded border border-border-subtle bg-background/50">
                    <div className="text-text-muted text-[10px]">CORE LANGUAGES</div>
                    <div className="font-semibold text-text-primary mt-0.5">Python • TypeScript • Java</div>
                  </div>
                </div>

                {/* Live Build Status Indicator */}
                <div className="p-2.5 rounded border border-accent-red/30 bg-accent-red/5 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-accent-red" />
                    <span className="text-text-secondary">Runtime Environment:</span>
                  </div>
                  <span className="text-accent-red font-semibold">Active & Responsive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {resumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="max-w-md w-full rounded-lg border border-border-subtle bg-bg-panel p-6 shadow-panel-subtle space-y-4 font-sans">
            <div className="flex items-center justify-between border-b border-border-subtle pb-3">
              <div className="font-mono text-xs text-accent-red font-semibold uppercase tracking-wider">
                Document Notice
              </div>
              <button
                onClick={() => setResumeModalOpen(false)}
                className="text-text-muted hover:text-text-primary text-sm font-mono"
              >
                [ESC]
              </button>
            </div>
            <h3 className="font-heading font-bold text-lg text-text-primary">
              Curriculum Vitae & Verified Dossier
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              In accordance with our strict verification policy, a formal PDF dossier is currently being prepared for Korikana Sai Praneeth. All project accomplishments, code commits, and academic milestones are live and verifiable via GitHub.
            </p>
            <div className="p-3 rounded bg-bg-secondary border border-border-subtle font-mono text-xs text-text-muted space-y-1">
              <div>CANDIDATE: Korikana Sai Praneeth</div>
              <div>EMAIL: korikanasaipraneeth@gmail.com</div>
              <div>GITHUB: github.com/korikanasaipraneeth-svg</div>
            </div>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setResumeModalOpen(false)}
                className="px-4 py-2 rounded border border-border-subtle text-xs font-mono text-text-secondary hover:text-text-primary"
              >
                Close
              </button>
              <a
                href="mailto:korikanasaipraneeth@gmail.com?subject=Resume%20Request%20for%20Korikana%20Sai%20Praneeth"
                onClick={() => {
                  sound.playClick();
                  setResumeModalOpen(false);
                }}
                className="px-4 py-2 rounded border border-accent-red bg-accent-red text-text-primary text-xs font-mono font-medium hover:bg-accent-red-hover"
              >
                Request via Email →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
