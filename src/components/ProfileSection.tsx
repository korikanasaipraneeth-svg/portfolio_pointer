"use client";

import React, { useState } from "react";
import { sound } from "@/lib/audio";
import { User, GraduationCap, Cpu, Compass, Layers, Zap, BookOpen, Rocket } from "lucide-react";

export function ProfileSection() {
  const [activeTab, setActiveTab] = useState<"who" | "academic" | "philosophy" | "what-i-build" | "future">("who");

  const handleTabChange = (tab: "who" | "academic" | "philosophy" | "what-i-build" | "future") => {
    sound.playTabSwitch();
    setActiveTab(tab);
  };

  return (
    <section id="profile" className="py-24 px-4 sm:px-6 md:px-8 border-b border-border-subtle relative">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-accent-red uppercase tracking-widest font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-red" />
            <span>01 // BIOGRAPHY & OPERATIONAL IDENTITY</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-text-primary tracking-tight">
            ENGINEER PROFILE
          </h2>
          <p className="font-sans text-sm sm:text-base text-text-secondary max-w-2xl">
            A transparent breakdown of my academic training, development philosophy, and the disciplined engineering behind Vibe Coding.
          </p>
        </div>

        {/* Interactive Tab Bar */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-border-subtle/80 font-mono text-xs">
          {[
            { id: "who", label: "WHO I AM", icon: User },
            { id: "academic", label: "ACADEMIC ROOTS", icon: GraduationCap },
            { id: "philosophy", label: "THE VIBE CODER PHILOSOPHY", icon: Cpu },
            { id: "what-i-build", label: "WHAT I BUILD", icon: Layers },
            { id: "future", label: "WHAT I AM LEARNING & FUTURE", icon: Rocket },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id as any)}
                onMouseEnter={() => sound.playHover()}
                className={`px-4 py-2.5 rounded border transition-all duration-150 flex items-center gap-2 ${
                  isActive
                    ? "border-accent-red bg-accent-red/15 text-text-primary font-semibold shadow-crimson-glow"
                    : "border-border-subtle bg-bg-panel/40 text-text-secondary hover:text-text-primary hover:border-border-subtle/80"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-accent-red" : "text-text-muted"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panes */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Informative Column (8 cols) */}
          <div className="lg:col-span-8 rounded-lg border border-border-subtle bg-bg-panel p-6 sm:p-8 space-y-6 shadow-panel-subtle">
            {activeTab === "who" && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs text-accent-red">
                  <User className="w-4 h-4" />
                  <span>IDENTITY // KORIKANA SAI PRANEETH</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-text-primary">
                  Ambitious AI & Full-Stack Software Developer
                </h3>
                <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed">
                  I am <strong className="text-text-primary">Korikana Sai Praneeth</strong>, an Artificial Intelligence and Machine Learning student based in India. I focus on designing, developing, and deploying software systems that solve tangible, real-world problems.
                </p>
                <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed">
                  Rather than building isolated toy scripts, I treat software engineering holistically: structuring responsive client frontends, authoring resilient asynchronous APIs, designing normalized database schemas, and embedding modern AI capabilities such as computer vision and multimodal LLM agents into practical tools.
                </p>
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3 rounded border border-border-subtle bg-bg-secondary">
                    <span className="text-text-muted">LOCATION:</span>
                    <div className="font-semibold text-text-primary mt-1">Andhra Pradesh, India</div>
                  </div>
                  <div className="p-3 rounded border border-border-subtle bg-bg-secondary">
                    <span className="text-text-muted">SPECIALIZATION:</span>
                    <div className="font-semibold text-accent-red mt-1">AI/ML & Full-Stack Systems</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "academic" && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs text-accent-red">
                  <GraduationCap className="w-4 h-4" />
                  <span>FOUNDATION // FORMAL CURRICULUM</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-text-primary">
                  B.Tech in Artificial Intelligence & Machine Learning
                </h3>
                <div className="p-3.5 rounded border border-accent-red/30 bg-accent-red/5 font-mono text-xs text-text-primary flex items-center justify-between">
                  <span>Sri Sivani College of Engineering</span>
                  <span className="text-accent-red font-semibold">Undergraduate Degree</span>
                </div>
                <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed">
                  My academic coursework provides a grounding in core computer science fundamentals: algorithms, discrete mathematics, object-oriented design (Java, C, C++), relational database management systems (SQL/DBMS), computer networks, and operating system concepts.
                </p>
                <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed">
                  In parallel, specialized AIML coursework covers neural network fundamentals, statistical machine learning, computer vision, and heuristic search methodologies, creating a bridge between mathematical theory and executable software.
                </p>
              </div>
            )}

            {activeTab === "philosophy" && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs text-accent-red">
                  <Cpu className="w-4 h-4" />
                  <span>METHODOLOGY // DISCIPLINED VIBE CODING</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-text-primary">
                  Vibe Coding as an Engineering Accelerator
                </h3>
                <div className="p-4 rounded border border-border-subtle bg-bg-secondary font-mono text-xs text-text-primary leading-relaxed">
                  &quot;I use AI-assisted development as an engineering multiplier — not as a replacement for understanding software architecture, debugging, testing, and implementation.&quot;
                </div>
                <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed">
                  True modern development is about velocity and precision. By pairing deep conceptual knowledge of system design, database schemas, and API contracts with agentic code synthesis, I am able to:
                </p>
                <ul className="space-y-2 text-sm text-text-secondary list-disc pl-5">
                  <li><strong className="text-text-primary">Prototype with extreme speed:</strong> Transforming system requirements into verified working prototypes within hours.</li>
                  <li><strong className="text-text-primary">Enforce rigorous validation:</strong> Running unit tests, type checks, and static analysis on synthesized components before committing.</li>
                  <li><strong className="text-text-primary">Focus on high-leverage decisions:</strong> Concentrating on data models, system boundaries, security constraints, and user experience.</li>
                </ul>
              </div>
            )}

            {activeTab === "what-i-build" && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs text-accent-red">
                  <Layers className="w-4 h-4" />
                  <span>OUTPUT // PRACTICAL SYSTEMS</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-text-primary">
                  Production Prototypes & Societal Solutions
                </h3>
                <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed">
                  My focus is applying technology where it produces tangible human utility:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded border border-border-subtle bg-bg-secondary space-y-1">
                    <div className="font-mono text-xs text-accent-red font-semibold">AGRISAHAY AI</div>
                    <div className="text-xs text-text-secondary">Smart agriculture with computer vision lesion diagnostics and Gemini multimodal vernacular advisories.</div>
                  </div>
                  <div className="p-3.5 rounded border border-border-subtle bg-bg-secondary space-y-1">
                    <div className="font-mono text-xs text-accent-red font-semibold">STUDENT360</div>
                    <div className="text-xs text-text-secondary">Enterprise academic SaaS with faculty verification ledgers and recruiter Kanban hiring pipelines.</div>
                  </div>
                  <div className="p-3.5 rounded border border-border-subtle bg-bg-secondary space-y-1">
                    <div className="font-mono text-xs text-accent-red font-semibold">GUARDIAN AI</div>
                    <div className="text-xs text-text-secondary">Emergency SOS and Haversine hospital spatial triage system with Flutter and Python.</div>
                  </div>
                  <div className="p-3.5 rounded border border-border-subtle bg-bg-secondary space-y-1">
                    <div className="font-mono text-xs text-accent-red font-semibold">SMART RURAL HEALTH</div>
                    <div className="text-xs text-text-secondary">Low-bandwidth clinical intake and telemedicine consultation infrastructure.</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "future" && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs text-accent-red">
                  <Rocket className="w-4 h-4" />
                  <span>HORIZON // CONTINUOUS EXPLORATION</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-text-primary">
                  What I Am Learning & Future Direction
                </h3>
                <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed">
                  The boundary between software engineering and autonomous intelligence is rapidly shifting. I am actively expanding my capabilities in:
                </p>
                <div className="space-y-2 text-sm text-text-secondary">
                  <div className="p-3 rounded border border-border-subtle bg-bg-secondary flex items-start gap-3">
                    <Zap className="w-4 h-4 text-accent-red mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-text-primary">Multi-Agent Swarm Orchestration:</strong> Developing DAG execution frameworks, tool-calling sandboxes, and autonomous verification loops.
                    </div>
                  </div>
                  <div className="p-3 rounded border border-border-subtle bg-bg-secondary flex items-start gap-3">
                    <BookOpen className="w-4 h-4 text-accent-red mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-text-primary">Edge AI & Low-Latency Deployment:</strong> Optimizing quantized neural networks for offline-first, mobile, and microcontroller execution.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Architectural Highlights Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-4 font-mono text-xs">
            <div className="rounded-lg border border-border-subtle bg-bg-panel p-5 space-y-4">
              <div className="text-accent-red font-semibold tracking-wider flex items-center justify-between border-b border-border-subtle pb-2">
                <span>SYSTEM ATTRIBUTES</span>
                <span>[PRN-01]</span>
              </div>
              <div className="space-y-2.5 text-text-secondary">
                <div className="flex justify-between">
                  <span className="text-text-muted">ROLE:</span>
                  <span className="text-text-primary">AI & Full-Stack Builder</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">COLLEGE:</span>
                  <span className="text-text-primary text-right">Sri Sivani COE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">CURRICULUM:</span>
                  <span className="text-accent-red">B.Tech AIML</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">WORKFLOW:</span>
                  <span className="text-text-primary">AI-Assisted Vibe Coding</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">PUBLIC REPOS:</span>
                  <span className="text-text-primary">12 Verified</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-accent-red/30 bg-accent-red/5 p-4 space-y-2">
              <div className="text-accent-red font-semibold tracking-wider">
                CORE PRINCIPLE
              </div>
              <p className="text-text-secondary text-[11px] leading-relaxed font-sans">
                &quot;Real credibility comes from verifiable software, clean repositories, and solving actual human challenges — not inflated claims.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
