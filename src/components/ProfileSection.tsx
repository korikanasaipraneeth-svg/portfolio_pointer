"use client";

import React, { useState } from "react";
import { sound } from "@/lib/audio";
import { User, GraduationCap, Cpu, Layers, Rocket, Briefcase, Award, Target, Sparkles } from "lucide-react";

export function ProfileSection() {
  const [activeTab, setActiveTab] = useState<"who" | "academic" | "internship" | "philosophy" | "what-i-build" | "future">("who");

  const handleTabChange = (tab: "who" | "academic" | "internship" | "philosophy" | "what-i-build" | "future") => {
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

        {/* 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (7 cols): Full Narrative Bio in Authentic Voice */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base font-sans text-text-secondary leading-relaxed">
            <p>
              Hi, I&apos;m <strong className="text-text-primary">Korikana Sai Praneeth</strong>, a passionate Software Developer and a 3rd-year B.Tech student specializing in <strong className="text-text-primary">Artificial Intelligence and Machine Learning</strong> at <strong className="text-text-primary">Sri Sivani College of Engineering</strong> (Roll No: 24W61A6119).
            </p>
            <p>
              I love learning new technologies, building websites, and creating useful applications. I enjoy turning creative ideas into real-world projects and finding simple, robust solutions to technical problems. I work with programming languages like <strong className="text-text-primary">Python, Java, C, and C++</strong>, along with <strong className="text-text-primary">HTML, CSS, JavaScript, React 19, and SQL</strong>.
            </p>
            <p>
              I also have industry experience as a <strong className="text-text-primary">Software Developer Intern at HRX Tech Solution</strong>, where I get the opportunity to learn and engineer real-world interfaces and production features.
            </p>
            <p>
              Apart from coding, I actively participate in technical hackathons, collaborate with teams as a <strong className="text-text-primary">Microsoft Student Ambassador</strong>, and share knowledge through induction mentoring.
            </p>

            {/* Core Goal & Belief Callouts */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3.5 rounded-sm border border-accent-red/30 bg-accent-red/5 space-y-1">
                <div className="flex items-center gap-1.5 text-accent-red font-bold">
                  <Target className="w-3.5 h-3.5" />
                  <span>MY GOAL</span>
                </div>
                <p className="font-sans text-xs text-text-secondary leading-relaxed">
                  To become a skilled Software Developer, build meaningful projects, and create technology that makes people&apos;s lives easier.
                </p>
              </div>

              <div className="p-3.5 rounded-sm border border-emerald-500/30 bg-emerald-500/5 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>MY BELIEF</span>
                </div>
                <p className="font-sans text-xs text-text-primary font-semibold leading-relaxed">
                  &quot;Keep Learning. Keep Building. Keep Growing.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Numbered Technical Pillars (01, 02, 03, 04) */}
          <div className="lg:col-span-5 space-y-3 font-mono text-xs">
            <div className="p-4 rounded-sm border border-border-subtle bg-bg-panel/80 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-accent-red font-bold text-sm">01</span>
                <span className="font-bold text-text-primary text-sm">HRX Tech Solution Intern</span>
              </div>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                Hands-on industry experience building enterprise user dashboard systems, modular components, and production-tested interfaces.
              </p>
            </div>

            <div className="p-4 rounded-sm border border-border-subtle bg-bg-panel/80 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold text-sm">02</span>
                <span className="font-bold text-text-primary text-sm">Microsoft Student Ambassador</span>
              </div>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                Officially onboarded community ambassador; conducting induction classes, workshops, and mentoring junior engineering students.
              </p>
            </div>

            <div className="p-4 rounded-sm border border-border-subtle bg-bg-panel/80 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold text-sm">03</span>
                <span className="font-bold text-text-primary text-sm">Hackathon Champion (2x)</span>
              </div>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                1st Prize at Google Student Ambassador Hackathon (STUDENT360) and 1st Prize at Brainovision Hackathon (Stock Market Analyzer).
              </p>
            </div>

            <div className="p-4 rounded-sm border border-border-subtle bg-bg-panel/80 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-purple-400 font-bold text-sm">04</span>
                <span className="font-bold text-text-primary text-sm">Sovereign Edge Engineering</span>
              </div>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                Local-first development using AI-assisted Vibe Coding workflows to design, build, test, and ship practical software systems.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Deep-Dive Tabs */}
        <div className="pt-8 border-t border-border-subtle/70 space-y-6">
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {[
              { id: "who", label: "WHO I AM", icon: User },
              { id: "internship", label: "INDUSTRY INTERNSHIP", icon: Briefcase },
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
                  Software Developer &amp; AIML Student Builder
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  I love learning new technologies, building websites, and creating useful applications. My journey is driven by curiosity, consistent problem-solving, and transforming creative ideas into dependable software systems that solve real problems for real people.
                </p>
                <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                  <div className="p-2.5 rounded bg-bg-secondary border border-border-subtle">
                    <span className="text-text-muted text-[10px]">CURRENT ROLE</span>
                    <div className="font-bold text-text-primary mt-0.5">Software Dev Intern</div>
                  </div>
                  <div className="p-2.5 rounded bg-bg-secondary border border-border-subtle">
                    <span className="text-text-muted text-[10px]">ACADEMIC STATUS</span>
                    <div className="font-bold text-accent-red mt-0.5">3rd-Year B.Tech AIML</div>
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

            {activeTab === "internship" && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs text-accent-red font-semibold">
                  <Briefcase className="w-4 h-4" />
                  <span>PROFESSIONAL INDUSTRY EXPERIENCE</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-text-primary">
                  Software Developer Intern — HRX Tech Solution
                </h3>
                <div className="p-3.5 rounded bg-bg-secondary border border-accent-red/30 font-mono text-xs flex flex-col sm:flex-row justify-between gap-1">
                  <div>
                    <span className="text-text-primary font-bold">HRX Tech Solution</span>
                    <div className="text-text-muted text-[11px]">Enterprise User Dashboard &amp; Administrative Interfaces</div>
                  </div>
                  <span className="text-accent-red font-semibold">Internship</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  At HRX Tech Solution, I work on real-world software engineering projects, authoring modular frontend components, connecting asynchronous REST APIs, and designing responsive, high-density dashboard layouts (<code className="text-accent-red font-mono">hrx-interfaces-</code>).
                </p>
                <ul className="text-xs sm:text-sm text-text-secondary space-y-1.5 list-disc pl-5">
                  <li>Engineering modular, accessible UI components and dashboard layouts.</li>
                  <li>Collaborating in team sprints, reviewing git pull requests, and following clean code conventions.</li>
                  <li>Bridging backend API data payloads with responsive, interactive client views.</li>
                </ul>
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
                      <strong className="text-text-primary">Sri Sivani College of Engineering, Chilakapalem, Srikakulam</strong>
                      <div className="text-text-muted text-[11px]">B.Tech in Artificial Intelligence &amp; Machine Learning (Roll No: 24W61A6119)</div>
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
                  &quot;Keep Learning. Keep Building. Keep Growing.&quot;
                </blockquote>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Vibe coding is an engineering accelerator: pairing generative AI speed with strong fundamentals in Python, Java, C/C++, HTML/CSS/JavaScript, and SQL. It allows me to prototype fast, run immediate automated compiler tests, and spend time engineering clean architecture and delightful user experiences.
                </p>
              </div>
            )}

            {activeTab === "what-i-build" && (
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-xl text-text-primary">
                  Systems Portfolio from Verified Resume &amp; GitHub
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded bg-bg-secondary border border-border-subtle space-y-1">
                    <div className="font-mono text-xs text-accent-red font-bold">SPIDERMAN 3D PORTFOLIO</div>
                    <p className="text-xs text-text-secondary">
                      Interactive 3D WebGL developer experience with custom shaders, parallax effects, and dynamic timeline at <span className="text-text-primary">spyderman-portfolio.vercel.app</span>.
                    </p>
                  </div>
                  <div className="p-3.5 rounded bg-bg-secondary border border-border-subtle space-y-1">
                    <div className="font-mono text-xs text-accent-red font-bold">SMART RURAL HEALTH</div>
                    <p className="text-xs text-text-secondary">
                      AI disease prediction engine with conversational symptom input, predictive medicine supply forecasting, and SOS emergency routing across 4 role-based portals.
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
                  Future Direction &amp; Leadership
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  My goal is to become a skilled Software Developer, build meaningful projects, and create technology that makes people&apos;s lives easier. As a Microsoft Student Ambassador and Student Coordinator, I continue to teach, share knowledge, and explore autonomous AI agents and modern web development.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
