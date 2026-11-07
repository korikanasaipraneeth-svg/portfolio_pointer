"use client";

import React, { useState } from "react";
import { sound } from "@/lib/audio";
import { User, GraduationCap, Cpu, Layers, Rocket, Briefcase, Award, Target, Sparkles, BookOpen, HeartHandshake } from "lucide-react";

export function ProfileSection() {
  const [activeTab, setActiveTab] = useState<"who" | "academic" | "internship" | "philosophy" | "what-i-build" | "future">("who");

  const handleTabChange = (tab: "who" | "academic" | "internship" | "philosophy" | "what-i-build" | "future") => {
    sound.playTabSwitch();
    setActiveTab(tab);
  };

  return (
    <section id="profile" className="py-24 px-4 sm:px-6 md:px-8 border-b border-border-subtle relative">
      <div className="w-full max-w-6xl mx-auto space-y-12">
        {/* Technical Section Subhead */}
        <div className="space-y-1">
          <div className="font-mono text-xs text-text-muted tracking-widest uppercase">
            {"// 01.00 SEC_ABOUT"}
          </div>
          <div className="font-mono text-xs text-accent-red font-semibold uppercase tracking-wider">
            ABOUT ME
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-text-primary tracking-tight">
            About Me
          </h2>
        </div>

        {/* 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (7 cols): Narrative Bio in Exact Authentic Voice */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base font-sans text-text-secondary leading-relaxed">
            <p>
              Hi, I&apos;m <strong className="text-text-primary">Korikana Sai Praneeth</strong>, a passionate Software Developer and a 3rd-year B.Tech student specializing in <strong className="text-text-primary">Artificial Intelligence and Machine Learning (AIML)</strong> at <strong className="text-text-primary">Sri Sivani College of Engineering</strong>.
            </p>
            <p>
              I started my B.Tech journey in 2024. I am interested in technology, software development, and creating useful digital products. I enjoy learning new things, exploring modern technologies, building websites, and turning ideas into real-world applications.
            </p>
            <p>
              I believe in <strong className="text-text-primary">learning by doing</strong>. I continuously improve my technical skills through practical projects, teamwork, technical events, and hands-on experience across <strong className="text-text-primary">Python, Java, C, C++, HTML, CSS, JavaScript, SQL</strong>, and modern frameworks like <strong className="text-text-primary">Flutter, FastAPI, and React 19</strong>.
            </p>
            <p>
              I also have industry experience as a <strong className="text-text-primary">Software Developer Intern at HRX Tech Solution</strong> (September 2026), where I had the opportunity to learn and work on real-world development workflows.
            </p>

            {/* Core Objective & Professional Identity */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3.5 rounded-sm border border-accent-red/30 bg-accent-red/5 space-y-1.5">
                <div className="flex items-center gap-1.5 text-accent-red font-bold">
                  <Target className="w-3.5 h-3.5" />
                  <span>CAREER OBJECTIVE</span>
                </div>
                <p className="font-sans text-xs text-text-secondary leading-relaxed">
                  To become a skilled Software Developer, build meaningful projects, and create technology that makes people&apos;s lives easier.
                </p>
              </div>

              <div className="p-3.5 rounded-sm border border-emerald-500/30 bg-emerald-500/5 space-y-1.5">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>VIBE CODER IDENTITY</span>
                </div>
                <p className="font-sans text-xs text-text-secondary leading-relaxed">
                  I enjoy combining creativity, logical thinking, and modern AI-powered development tools to turn ideas into working products.
                </p>
              </div>
            </div>

            {/* Philosophy Banner */}
            <div className="p-4 rounded-sm border border-border-subtle bg-bg-panel space-y-1.5 font-mono text-xs">
              <div className="text-text-muted text-[10px] uppercase">My Philosophy</div>
              <div className="text-text-primary font-bold text-sm">
                &quot;Keep Learning. Keep Building. Keep Growing.&quot;
              </div>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                I believe every project is an opportunity to learn something new, every challenge is an opportunity to improve, and every small step brings me closer to my goals.
              </p>
            </div>
          </div>

          {/* Right Column (5 cols): Numbered Pillars */}
          <div className="lg:col-span-5 space-y-3 font-mono text-xs">
            <div className="p-4 rounded-sm border border-border-subtle bg-bg-panel/80 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-accent-red font-bold text-sm">01</span>
                <span className="font-bold text-text-primary text-sm">HRX Tech Solution (Sept 2026)</span>
              </div>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                Working on software development activities, learning practical development workflows, exploring real-world technical challenges, and improving programming skills.
              </p>
            </div>

            <div className="p-4 rounded-sm border border-border-subtle bg-bg-panel/80 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold text-sm">02</span>
                <span className="font-bold text-text-primary text-sm">1st Prize in Brainovision Hackathon</span>
              </div>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                Secured 1st Prize for developing the Portfolio &amp; Stock Market Analyzer application — real-time market trends, stock tracking, and financial analytics.
              </p>
            </div>

            <div className="p-4 rounded-sm border border-border-subtle bg-bg-panel/80 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold text-sm">03</span>
                <span className="font-bold text-text-primary text-sm">Technical Event Organizer &amp; Mentor</span>
              </div>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                Organizing technical events and sessions, collaborating with student developer teams, and sharing practical engineering knowledge.
              </p>
            </div>

            <div className="p-4 rounded-sm border border-border-subtle bg-bg-panel/80 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-purple-400 font-bold text-sm">04</span>
                <span className="font-bold text-text-primary text-sm">B.Tech AIML (Sri Sivani COE)</span>
              </div>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                3rd-year undergraduate specializing in Artificial Intelligence and Machine Learning. Started 2024.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Tabs */}
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
