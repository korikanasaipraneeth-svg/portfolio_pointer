"use client";

import React, { useState } from "react";
import { sound } from "@/lib/audio";
import { User, GraduationCap, Cpu, Layers, Rocket, ShieldCheck, Award } from "lucide-react";

export function ProfileSection() {
  const [activeTab, setActiveTab] = useState<"who" | "academic" | "philosophy" | "what-i-build" | "future">("who");

  const handleTabChange = (tab: "who" | "academic" | "philosophy" | "what-i-build" | "future") => {
    sound.playTabSwitch();
    setActiveTab(tab);
  };

  return (
    <section id="profile" className="py-24 px-4 sm:px-6 md:px-8 border-b border-border-subtle relative">
      <div className="w-full max-w-6xl mx-auto space-y-12">
        {/* Technical Section Subhead (Exact SAAI.pro styling: // 01.00 SEC_ABOUT) */}
        <div className="space-y-1">
          <div className="font-mono text-xs text-text-muted tracking-widest uppercase">
            {"// 01.00 SEC_ABOUT"}
          </div>
          <div className="font-mono text-xs text-accent-red font-semibold uppercase tracking-wider">
            ENGINEER PROFILE
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-text-primary tracking-tight">
            Background &amp; Philosophy
          </h2>
        </div>

        {/* 2-Column Overview (Identical to Screenshot 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (7 cols): Full Narrative Bio with Bold Highlights */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base font-sans text-text-secondary leading-relaxed">
            <p>
              I am <strong className="text-text-primary">Korikana Sai Praneeth</strong> — an independent AI and software developer based in Andhra Pradesh, India. I am currently a 3rd-year undergraduate pursuing my <strong className="text-text-primary">B.Tech in Artificial Intelligence and Machine Learning</strong> at <strong className="text-text-primary">Sri Sivani College of Engineering</strong> (Roll No: 24W61A6119).
            </p>
            <p>
              My engineering capabilities were forged in the terminal: developing real-world full-stack architectures, writing high-throughput REST microservices in <strong className="text-text-primary">Python</strong>, <strong className="text-text-primary">Node.js</strong>, and <strong className="text-text-primary">FastAPI</strong>, and designing multi-role applications in <strong className="text-text-primary">React 19</strong>, <strong className="text-text-primary">Next.js</strong>, and <strong className="text-text-primary">Flutter</strong>.
            </p>
            <p>
              I view <strong className="text-text-primary">Vibe Coding</strong> as an engineering multiplier: pairing generative AI speed with deep fundamentals in algorithms, relational DBMS schemas, and automated testing to build production systems that operate with total reliability.
            </p>
          </div>

          {/* Right Column (5 cols): Numbered Technical Pillars (01, 02, 03) */}
          <div className="lg:col-span-5 space-y-4 font-mono text-xs">
            <div className="p-4 rounded-sm border border-border-subtle bg-bg-panel/80 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-accent-red font-bold text-sm">01</span>
                <span className="font-bold text-text-primary text-sm">Sovereign Silicon</span>
              </div>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                Zero reliance on third-party cloud wrappers or hosted black-boxes. Fully local execution pipelines, edge inference, and offline-first mobile databases.
              </p>
            </div>

            <div className="p-4 rounded-sm border border-border-subtle bg-bg-panel/80 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold text-sm">02</span>
                <span className="font-bold text-text-primary text-sm">Microsoft Student Ambassador</span>
              </div>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                Officially onboarded community leader and technical mentor; conducting induction classes, workshops, and mentoring junior engineering students.
              </p>
            </div>

            <div className="p-4 rounded-sm border border-border-subtle bg-bg-panel/80 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold text-sm">03</span>
                <span className="font-bold text-text-primary text-sm">Hackathon Champion</span>
              </div>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                1st Prize at Google Student Ambassador Hackathon (STUDENT360 Platform) and 1st Prize at Brainovision Hackathon (Stock Market Analyzer).
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Deep-Dive Tabs */}
        <div className="pt-8 border-t border-border-subtle/70 space-y-6">
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {[
              { id: "who", label: "WHO I AM", icon: User },
              { id: "academic", label: "ACADEMIC FOUNDATION", icon: GraduationCap },
              { id: "philosophy", label: "VIBE CODING PARADIGM", icon: Cpu },
              { id: "what-i-build", label: "SYSTEMS BUILT", icon: Layers },
              { id: "future", label: "LEARNING HORIZON", icon: Rocket },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id as any)}
                  onMouseEnter={() => sound.playHover()}
                  className={`px-4 py-2 rounded-sm border transition-all duration-150 flex items-center gap-2 ${
                    isActive
                      ? "border-accent-red bg-accent-red/20 text-text-primary font-semibold shadow-crimson-glow"
                      : "border-border-subtle bg-bg-panel/50 text-text-secondary hover:text-text-primary hover:border-border-subtle/80"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-accent-red" : "text-text-muted"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="rounded-sm border border-border-subtle bg-bg-panel p-6 sm:p-8 space-y-4 shadow-panel-subtle">
            {activeTab === "who" && (
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-xl text-text-primary">
                  AI Systems Builder &amp; Full-Stack Software Developer
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Based in Andhra Pradesh, India, I specialize in full-stack architecture and AI systems integration. From emergency geospatial routing algorithms in <strong className="text-text-primary">Guardian AI</strong> to real-time multimodal diagnostics in <strong className="text-text-primary">AgriSahay AI</strong>, I build systems engineered for tangible utility.
                </p>
                <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                  <div className="p-2.5 rounded bg-bg-secondary border border-border-subtle">
                    <span className="text-text-muted text-[10px]">ENROLLMENT</span>
                    <div className="font-bold text-text-primary mt-0.5">24W61A6119</div>
                  </div>
                  <div className="p-2.5 rounded bg-bg-secondary border border-border-subtle">
                    <span className="text-text-muted text-[10px]">STATUS</span>
                    <div className="font-bold text-accent-red mt-0.5">3rd-Year B.Tech</div>
                  </div>
                  <div className="p-2.5 rounded bg-bg-secondary border border-border-subtle">
                    <span className="text-text-muted text-[10px]">CAMPUS</span>
                    <div className="font-bold text-text-primary mt-0.5">Sri Sivani COE</div>
                  </div>
                  <div className="p-2.5 rounded bg-bg-secondary border border-border-subtle">
                    <span className="text-text-muted text-[10px]">COMMUNITY</span>
                    <div className="font-bold text-emerald-400 mt-0.5">MSFT Ambassador</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "academic" && (
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-xl text-text-primary">
                  Academic Chronology &amp; Institutional Training
                </h3>
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded bg-bg-secondary border border-border-subtle flex flex-col sm:flex-row justify-between gap-1">
                    <div>
                      <strong className="text-text-primary">Sri Sivani College of Engineering</strong>
                      <div className="text-text-muted text-[11px]">B.Tech in Artificial Intelligence &amp; Machine Learning</div>
                    </div>
                    <span className="text-accent-red font-semibold">2024 — Present</span>
                  </div>
                  <div className="p-3 rounded bg-bg-secondary border border-border-subtle flex flex-col sm:flex-row justify-between gap-1">
                    <div>
                      <strong className="text-text-primary">Sri Aditya Junior College, Rajam</strong>
                      <div className="text-text-muted text-[11px]">Board of Intermediate Education — 78% Score</div>
                    </div>
                    <span className="text-text-muted">2022 — 2024</span>
                  </div>
                  <div className="p-3 rounded bg-bg-secondary border border-border-subtle flex flex-col sm:flex-row justify-between gap-1">
                    <div>
                      <strong className="text-text-primary">Narayana School, Rajam</strong>
                      <div className="text-text-muted text-[11px]">Secondary School Certificate (SSC) — 77.33% Score</div>
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
                  &quot;Vibe coding is not reckless script generation. It is the art of orchestrating multi-agent systems, rapid prototype synthesis, and immediate compiler validation to reach architectural objectives with maximum velocity.&quot;
                </blockquote>
                <p className="text-sm text-text-secondary leading-relaxed">
                  By directing AI agents through rigorous specifications, type checking, and boundary constraints, I maintain full cognitive ownership over data contracts, component hierarchies, and application security.
                </p>
              </div>
            )}

            {activeTab === "what-i-build" && (
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-xl text-text-primary">
                  Systems Portfolio from Verified Resume
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded bg-bg-secondary border border-border-subtle space-y-1">
                    <div className="font-mono text-xs text-accent-red font-bold">SPIDERMAN PORTFOLIO</div>
                    <p className="text-xs text-text-secondary">
                      Interactive 3D WebGL developer experience with custom shaders, parallax effects, and dynamic timeline at <span className="text-text-primary">spyderman-portfolio.vercel.app</span>.
                    </p>
                  </div>
                  <div className="p-3.5 rounded bg-bg-secondary border border-border-subtle space-y-1">
                    <div className="font-mono text-xs text-accent-red font-bold">SMART RURAL HEALTH</div>
                    <p className="text-xs text-text-secondary">
                      AI disease prediction engine with symptom input, predictive medicine supply forecasting, and SOS emergency routing across 4 role-based portals.
                    </p>
                  </div>
                  <div className="p-3.5 rounded bg-bg-secondary border border-border-subtle space-y-1">
                    <div className="font-mono text-xs text-accent-red font-bold">SWAYAM DONATION PLATFORM</div>
                    <p className="text-xs text-text-secondary">
                      Full-stack blood and organ donor matching platform connecting donors with recipients in real time with inventory tracking.
                    </p>
                  </div>
                  <div className="p-3.5 rounded bg-bg-secondary border border-border-subtle space-y-1">
                    <div className="font-mono text-xs text-accent-red font-bold">PORTFOLIO &amp; STOCK ANALYZER</div>
                    <p className="text-xs text-text-secondary">
                      Interactive market data analytics and personal investment portfolio tracker. Winner of 1st Prize at Brainovision Hackathon.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "future" && (
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-xl text-text-primary">
                  Continuous Horizons &amp; Leadership
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  As a Microsoft Student Ambassador, I am expanding peer workshops on Prompt Engineering and Agentic Workflows, while engineering sovereign edge AI models that operate completely offline on localized silicon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
