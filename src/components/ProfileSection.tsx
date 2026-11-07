"use client";

import React, { useState, useRef } from "react";
import { sound } from "@/lib/audio";
import { User, GraduationCap, Cpu, Layers, Rocket, Briefcase, Target, Sparkles, Award, Compass } from "lucide-react";

export function ProfileSection() {
  const [activeTab, setActiveTab] = useState<"who" | "academic" | "internship" | "philosophy" | "what-i-build" | "future">("who");
  const [portraitTilt, setPortraitTilt] = useState<{ rx: number; ry: number; glareX: number; glareY: number; opacity: number }>({
    rx: 0,
    ry: 0,
    glareX: 50,
    glareY: 50,
    opacity: 0,
  });
  const portraitRef = useRef<HTMLDivElement | null>(null);

  const handleTabChange = (tab: "who" | "academic" | "internship" | "philosophy" | "what-i-build" | "future") => {
    sound.playTabSwitch();
    setActiveTab(tab);
  };

  // 3D Physics Tilt on Portrait
  const handlePortraitMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = portraitRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y - rect.height / 2) / (rect.height / 2)) * -8;
    const ry = ((x - rect.width / 2) / (rect.width / 2)) * 8;
    setPortraitTilt({
      rx,
      ry,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
      opacity: 0.35,
    });
  };

  const handlePortraitMouseLeave = () => {
    setPortraitTilt({
      rx: 0,
      ry: 0,
      glareX: 50,
      glareY: 50,
      opacity: 0,
    });
  };

  return (
    <section id="profile" className="py-24 px-4 sm:px-6 md:px-8 border-b border-border-subtle relative bg-[#04060A] overflow-hidden">
      {/* Background ambient lighting aura */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-red/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Sleek Architectural Section Header */}
        <div className="flex flex-col items-start space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-text-muted tracking-widest uppercase">
            <span className="text-accent-red font-semibold">{"// 01.00"}</span>
            <span>SEC_ABOUT · ARCHITECTURAL PROFILE</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between w-full gap-4 pb-2 border-b border-white/5">
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-text-primary tracking-tight">
              About Me
            </h2>
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>B.TECH AIML (2024–PRESENT) · SRI SIVANI COE</span>
            </div>
          </div>
        </div>

        {/* 2-Column Balanced Master Grid (Perfect baseline alignment) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* LEFT COLUMN (5 cols): Interactive 3D Portrait & Identity Telemetry Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Interactive 3D Portrait Frame with Specular Glare & Ambient Glow */}
            <div
              ref={portraitRef}
              onMouseMove={handlePortraitMouseMove}
              onMouseLeave={handlePortraitMouseLeave}
              style={{
                perspective: "1000px",
              }}
              className="relative w-full rounded-3xl overflow-hidden cursor-pointer select-none group"
            >
              <div
                style={{
                  transform: `rotateX(${portraitTilt.rx.toFixed(2)}deg) rotateY(${portraitTilt.ry.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`,
                  transition: "transform 0.1s ease-out",
                }}
                className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-white/15 bg-[#0B0F17] shadow-2xl shadow-black/90 group-hover:border-accent-red/50 transition-colors duration-300"
              >
                {/* Portrait Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/praneeth-portrait.jpg"
                  alt="Korikana Sai Praneeth - AI System Architect & Software Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle dark gradient overlay at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                {/* Specular Glare Reflection on Mouse Move */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 z-20"
                  style={{
                    opacity: portraitTilt.opacity,
                    background: `radial-gradient(circle 280px at ${portraitTilt.glareX}% ${portraitTilt.glareY}%, rgba(224, 82, 105, 0.35), transparent 70%)`,
                  }}
                  aria-hidden="true"
                />

                {/* Top Subtle Status Badge */}
                <div className="absolute top-4 left-4 z-20" style={{ transform: "translateZ(32px)" }}>
                  <span className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-zinc-300 shadow-md">
                    ID: 24W61A6119
                  </span>
                </div>

                {/* Floating HUD Badge on Portrait with True 3D Z-Depth */}
                <div
                  className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/20 flex items-center justify-between font-mono text-xs text-white z-20 shadow-2xl"
                  style={{ transform: "translateZ(44px)" }}
                >
                  <div>
                    <span className="font-bold text-sm block tracking-wide">KORIKANA SAI PRANEETH</span>
                    <span className="text-[10.5px] text-accent-red font-semibold tracking-wider">AI SYSTEM ARCHITECT · VIBE CODER</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[10.5px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>ONLINE</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Core Objective & Professional Identity (Equal-height cards with hover lift) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs flex-1">
              {/* Career Objective */}
              <div
                onMouseEnter={() => sound.playHover()}
                className="p-4 rounded-2xl border border-accent-red/30 bg-accent-red/5 space-y-2 hover:border-accent-red hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-[0_8px_24px_rgba(224,82,105,0.18)] flex flex-col justify-between group"
              >
                <div className="flex items-center gap-1.5 text-accent-red font-bold">
                  <Target className="w-4 h-4 text-accent-red transition-transform duration-300 group-hover:scale-110" />
                  <span className="tracking-wider">CAREER OBJECTIVE</span>
                </div>
                <p className="font-sans text-xs text-text-secondary leading-relaxed flex-1">
                  To become a skilled Software Developer, build meaningful projects, and create technology that makes people&apos;s lives easier.
                </p>
                <div className="pt-1 text-[10px] text-accent-red/80 font-mono tracking-widest uppercase">
                  ACTIVE GOAL →
                </div>
              </div>

              {/* Vibe Coder Identity */}
              <div
                onMouseEnter={() => sound.playHover()}
                className="p-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 space-y-2 hover:border-emerald-400 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-[0_8px_24px_rgba(16,185,129,0.18)] flex flex-col justify-between group"
              >
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Cpu className="w-4 h-4 text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
                  <span className="tracking-wider">VIBE CODER IDENTITY</span>
                </div>
                <p className="font-sans text-xs text-text-secondary leading-relaxed flex-1">
                  I enjoy combining creativity, logical thinking, and modern AI-powered development tools to turn ideas into working products.
                </p>
                <div className="pt-1 text-[10px] text-emerald-400/80 font-mono tracking-widest uppercase">
                  DISCIPLINE →
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (7 cols): Narrative Bio, 4 Milestone Pillars & Philosophy Banner (Balanced baseline) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            {/* Narrative Bio Glass Card */}
            <div className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-[#0B0F17]/85 backdrop-blur-md space-y-3.5 shadow-xl">
              <div className="flex items-center justify-between font-mono text-[10px] text-text-muted uppercase tracking-widest pb-1 border-b border-white/5">
                <span className="text-accent-red font-semibold">DEVELOPER NARRATIVE</span>
                <span>SRI SIVANI COLLEGE OF ENGINEERING</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm font-sans text-text-secondary leading-relaxed">
                <p>
                  Hi, I&apos;m <strong className="text-white font-semibold">Korikana Sai Praneeth</strong>, a passionate Software Developer and a 3rd-year B.Tech student specializing in <strong className="text-white font-semibold">Artificial Intelligence and Machine Learning (AIML)</strong> at <strong className="text-white font-semibold">Sri Sivani College of Engineering</strong>.
                </p>
                <p>
                  I started my B.Tech journey in 2024. I am interested in technology, software development, and creating useful digital products. I enjoy learning new things, exploring modern technologies, building websites, and turning ideas into real-world applications.
                </p>
                <p>
                  I believe in <strong className="text-emerald-400 font-semibold">learning by doing</strong>. I continuously improve my technical skills through practical projects, teamwork, technical events, and hands-on experience across <strong className="text-white font-medium">Python, Java, C, C++, HTML, CSS, JavaScript, SQL</strong>, and modern frameworks like <strong className="text-white font-medium">Flutter, FastAPI, and React 19</strong>.
                </p>
                <p>
                  I also have industry experience as a <strong className="text-accent-red font-semibold">Software Developer Intern at HRX Tech Solution</strong> (September 2026), where I had the opportunity to learn and work on real-world development workflows.
                </p>
              </div>
            </div>

            {/* 4 Numbered Engineering Pillars (2x2 Grid with individual theme glows) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              {/* 01: HRX Tech Solution */}
              <div
                onMouseEnter={() => sound.playHover()}
                className="p-4 rounded-xl border border-border-subtle bg-bg-panel/90 space-y-2 hover:border-accent-red/60 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-[0_8px_20px_rgba(239,68,68,0.15)] group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded bg-accent-red/10 border border-accent-red/30 text-accent-red font-bold">
                      01
                    </span>
                    <span className="font-bold text-text-primary text-xs sm:text-sm">HRX Tech Solution</span>
                  </div>
                  <span className="text-[10px] text-text-muted">Sept 2026</span>
                </div>
                <p className="font-sans text-xs text-text-secondary leading-relaxed">
                  Working on enterprise dashboard modules, reusable UI components, and REST API integration in production.
                </p>
              </div>

              {/* 02: Brainovision Hackathon */}
              <div
                onMouseEnter={() => sound.playHover()}
                className="p-4 rounded-xl border border-border-subtle bg-bg-panel/90 space-y-2 hover:border-emerald-500/60 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-[0_8px_20px_rgba(16,185,129,0.15)] group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                      02
                    </span>
                    <span className="font-bold text-text-primary text-xs sm:text-sm">1st Prize Hackathon</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold">1ST PLACE</span>
                </div>
                <p className="font-sans text-xs text-text-secondary leading-relaxed">
                  Secured 1st Prize for developing the Portfolio &amp; Stock Market Analyzer with real-time analytics.
                </p>
              </div>

              {/* 03: Mentorship */}
              <div
                onMouseEnter={() => sound.playHover()}
                className="p-4 rounded-xl border border-border-subtle bg-bg-panel/90 space-y-2 hover:border-cyan-500/60 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-[0_8px_20px_rgba(56,189,248,0.15)] group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold">
                      03
                    </span>
                    <span className="font-bold text-text-primary text-xs sm:text-sm">Technical Organizer</span>
                  </div>
                  <span className="text-[10px] text-cyan-400 font-semibold">LEADER</span>
                </div>
                <p className="font-sans text-xs text-text-secondary leading-relaxed">
                  Organizing hands-on workshops, mentoring student developer teams, and sharing practical engineering skills.
                </p>
              </div>

              {/* 04: B.Tech AIML */}
              <div
                onMouseEnter={() => sound.playHover()}
                className="p-4 rounded-xl border border-border-subtle bg-bg-panel/90 space-y-2 hover:border-purple-500/60 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-[0_8px_20px_rgba(168,85,247,0.15)] group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-400 font-bold">
                      04
                    </span>
                    <span className="font-bold text-text-primary text-xs sm:text-sm">B.Tech AIML</span>
                  </div>
                  <span className="text-[10px] text-text-muted">2024–PRESENT</span>
                </div>
                <p className="font-sans text-xs text-text-secondary leading-relaxed">
                  3rd-year undergraduate at Sri Sivani College of Engineering specializing in Artificial Intelligence.
                </p>
              </div>
            </div>

            {/* Philosophy Banner (Anchors the Right Column for Perfect Bottom Baseline Alignment) */}
            <div
              onMouseEnter={() => sound.playHover()}
              className="p-4 rounded-xl border border-white/10 bg-gradient-to-r from-bg-panel to-[#0E131F] space-y-1.5 font-mono text-xs hover:border-white/20 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center justify-between text-text-muted text-[10px] uppercase">
                <span className="text-accent-red font-semibold">ENGINEERING MOTTO</span>
                <span>CORE VALUE</span>
              </div>
              <div className="text-text-primary font-bold text-sm sm:text-base">
                &quot;Keep Learning. Keep Building. Keep Growing.&quot;
              </div>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                I believe every project is an opportunity to learn something new, every challenge is an opportunity to improve, and every small step brings me closer to my goals.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Tabs with Animated Active Pill & Verified Selectors */}
        <div className="pt-8 border-t border-border-subtle/70 space-y-6">
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {[
              { id: "who", label: "WHO I AM", icon: User },
              { id: "internship", label: "HRX TECH INTERNSHIP", icon: Briefcase },
              { id: "academic", label: "ACADEMIC FOUNDATION", icon: GraduationCap },
              { id: "philosophy", label: "VIBE CODER PARADIGM", icon: Cpu },
              { id: "what-i-build", label: "PROJECTS & SYSTEMS", icon: Layers },
              { id: "future", label: "CAREER OBJECTIVE", icon: Rocket },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id as any)}
                  onMouseEnter={() => sound.playHover()}
                  className={`px-4 py-2 rounded-xl border transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? "border-accent-red bg-accent-red/20 text-text-primary font-semibold shadow-crimson-glow scale-102"
                      : "border-border-subtle bg-bg-panel/50 text-text-secondary hover:text-text-primary hover:border-white/20"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-accent-red" : "text-text-muted"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl border border-border-subtle bg-bg-panel p-6 sm:p-8 space-y-4 shadow-panel-subtle transition-all duration-300">
            {activeTab === "who" && (
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-xl text-text-primary">
                  Software Developer | AI &amp; ML Student | Vibe Coder
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  I started my B.Tech journey in 2024. I am interested in technology, software development, and creating useful digital products. I enjoy learning new things, exploring modern technologies, building websites, and turning ideas into real-world applications.
                </p>
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
                  <div className="p-2.5 rounded bg-bg-secondary border border-border-subtle">
                    <span className="text-text-muted text-[10px]">ACADEMIC YEAR</span>
                    <div className="font-bold text-accent-red mt-0.5">3rd-Year B.Tech AIML</div>
                  </div>
                  <div className="p-2.5 rounded bg-bg-secondary border border-border-subtle">
                    <span className="text-text-muted text-[10px]">STARTED</span>
                    <div className="font-bold text-text-primary mt-0.5">2024</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "internship" && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs text-accent-red font-semibold">
                  <Briefcase className="w-4 h-4" />
                  <span>PROFESSIONAL INDUSTRY EXPERIENCE</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-text-primary">
                  Software Developer Intern – HRX Tech Solution
                </h3>
                <div className="p-3.5 rounded bg-bg-secondary border border-accent-red/30 font-mono text-xs flex flex-col sm:flex-row justify-between gap-1">
                  <div>
                    <span className="text-text-primary font-bold">HRX Tech Solution</span>
                    <div className="text-text-muted text-[11px]">Enterprise User Dashboard &amp; Administrative Interfaces</div>
                  </div>
                  <span className="text-accent-red font-semibold">September 2026</span>
                </div>
                <ul className="text-xs sm:text-sm text-text-secondary space-y-2 list-disc pl-5 leading-relaxed">
                  <li>Working on software development activities and enterprise frontend modules.</li>
                  <li>Learning practical development workflows and team collaboration in production.</li>
                  <li>Exploring real-world technical challenges and modern web architectures.</li>
                  <li>Improving programming and problem-solving skills across real-world interfaces.</li>
                </ul>
              </div>
            )}

            {activeTab === "academic" && (
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-xl text-text-primary">
                  Education &amp; Academic Background
                </h3>
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3.5 rounded bg-bg-secondary border border-border-subtle flex flex-col sm:flex-row justify-between gap-1">
                    <div>
                      <strong className="text-text-primary">B.Tech – Artificial Intelligence and Machine Learning</strong>
                      <div className="text-text-muted text-[11px]">Sri Sivani College of Engineering • 3rd Year</div>
                    </div>
                    <span className="text-accent-red font-semibold">Started: 2024</span>
                  </div>
                  <div className="p-3.5 rounded bg-bg-secondary border border-border-subtle flex flex-col sm:flex-row justify-between gap-1">
                    <div>
                      <strong className="text-text-primary">Board of Intermediate Education — 78%</strong>
                      <div className="text-text-muted text-[11px]">Sri Aditya Junior College, Rajam</div>
                    </div>
                    <span className="text-text-muted">2022 — 2024</span>
                  </div>
                  <div className="p-3.5 rounded bg-bg-secondary border border-border-subtle flex flex-col sm:flex-row justify-between gap-1">
                    <div>
                      <strong className="text-text-primary">Secondary School Certificate (SSC) — 77.33%</strong>
                      <div className="text-text-muted text-[11px]">Narayana School, Rajam</div>
                    </div>
                    <span className="text-text-muted">2022</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "philosophy" && (
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-xl text-text-primary">
                  The Engineering Discipline Behind Vibe Coding
                </h3>
                <blockquote className="p-4 rounded border-l-2 border-accent-red bg-bg-secondary font-mono text-xs text-text-primary leading-relaxed">
                  &quot;Keep Learning. Keep Building. Keep Growing.&quot;
                  <div className="text-text-secondary text-[11px] mt-1 font-sans">
                    I believe every project is an opportunity to learn something new, every challenge is an opportunity to improve, and every small step brings me closer to my goals.
                  </div>
                </blockquote>
                <p className="text-sm text-text-secondary leading-relaxed">
                  As a <strong className="text-text-primary">Vibe Coder</strong>, I enjoy combining creativity, logical thinking, and modern AI-powered development tools to turn ideas into working products.
                </p>
              </div>
            )}

            {activeTab === "what-i-build" && (
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-xl text-text-primary">
                  Key Projects &amp; Digital Products
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded bg-bg-secondary border border-border-subtle space-y-1">
                    <div className="font-mono text-xs text-accent-red font-bold">PORTFOLIO &amp; STOCK ANALYZER (1ST PRIZE BRAINOVISION)</div>
                    <p className="text-xs text-text-secondary">
                      Real-time stock trend monitoring, portfolio valuation, and predictive risk analytics built for the Brainovision National Hackathon.
                    </p>
                  </div>
                  <div className="p-3.5 rounded bg-bg-secondary border border-border-subtle space-y-1">
                    <div className="font-mono text-xs text-accent-red font-bold">SPIDERMAN 3D PORTFOLIO</div>
                    <p className="text-xs text-text-secondary">
                      Interactive 3D WebGL developer portfolio with custom shaders, parallax effects, and dynamic timeline at <span className="text-text-primary">spyderman-portfolio.vercel.app</span>.
                    </p>
                  </div>
                  <div className="p-3.5 rounded bg-bg-secondary border border-border-subtle space-y-1">
                    <div className="font-mono text-xs text-accent-red font-bold">SMART RURAL HEALTH</div>
                    <p className="text-xs text-text-secondary">
                      AI healthcare platform with conversational symptom input, predictive medicine supply forecasting, and SOS emergency routing.
                    </p>
                  </div>
                  <div className="p-3.5 rounded bg-bg-secondary border border-border-subtle space-y-1">
                    <div className="font-mono text-xs text-accent-red font-bold">SWAYAM DONATION PLATFORM</div>
                    <p className="text-xs text-text-secondary">
                      Blood and organ donor matching platform connecting donors with recipients in real time.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "future" && (
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-xl text-text-primary">
                  Career Objective
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  My goal is to become a skilled Software Developer and build a successful career in the technology industry. I want to develop practical applications, work on challenging projects, and create products that solve real-world problems.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
