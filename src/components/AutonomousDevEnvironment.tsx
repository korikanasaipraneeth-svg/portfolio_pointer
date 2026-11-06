"use client";

import React, { useState, useEffect, useRef } from "react";
import { sound } from "@/lib/audio";
import { AGENT_REGISTRY, PRESET_PROMPTS, DEMO_BUILD_STEPS, AgentProfile, BuildStep } from "@/data/agents";
import {
  Bot,
  Play,
  RotateCcw,
  Terminal,
  Layers,
  Code2,
  Shield,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Monitor,
  Tablet,
  Smartphone,
  ExternalLink,
  Sparkles,
  Key,
} from "lucide-react";

export function AutonomousDevEnvironment() {
  const [prompt, setPrompt] = useState<string>(PRESET_PROMPTS[0]);
  const [mode, setMode] = useState<"simulation" | "real">("simulation");
  const [provider, setProvider] = useState<"gemini" | "openai" | "mock">("mock");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(-1);
  const [logs, setLogs] = useState<string[]>([
    "[SYSTEM] Autonomous Development Environment initialized.",
    "[SYSTEM] Ready for prompt dispatch. Mode: DETERMINISTIC LOCAL SIMULATION.",
  ]);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [activeTab, setActiveTab] = useState<"preview" | "code" | "tokens">("preview");
  const [activeAgentId, setActiveAgentId] = useState<string>("nova");
  const [builtSections, setBuiltSections] = useState<string[]>([]);
  const [agentCursors, setAgentCursors] = useState<{ id: string; name: string; color: string; x: number; y: number }[]>([]);

  const terminalBottomRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll terminal logs
  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  // Execute build pipeline
  const runBuildPipeline = () => {
    if (isRunning) return;
    sound.playClick();
    setIsRunning(true);
    setCurrentStepIdx(0);
    setBuiltSections([]);
    setLogs((prev) => [
      ...prev,
      `--- INITIATING BUILD RUN: "${prompt.slice(0, 45)}..." ---`,
      `[MODE] ${mode === "simulation" ? "LOCAL DETERMINISTIC SIMULATION" : "REAL AI EXECUTION GATEWAY"}`,
    ]);

    let step = 0;
    const executeNext = () => {
      if (step >= DEMO_BUILD_STEPS.length) {
        setIsRunning(false);
        sound.playSuccess();
        setLogs((prev) => [
          ...prev,
          `[SUCCESS] Build pipeline completed with 0 errors. All 12 agents reporting verified.`,
        ]);
        return;
      }

      const currentStep = DEMO_BUILD_STEPS[step];
      setCurrentStepIdx(step);
      setActiveAgentId(currentStep.agentId);
      sound.playAgentPulse();

      // Add log
      setLogs((prev) => [...prev, currentStep.log]);

      // Move agent cursor dynamically across the preview canvas
      const targetAgent = AGENT_REGISTRY.find((a) => a.id === currentStep.agentId);
      if (targetAgent) {
        setAgentCursors((prev) => [
          ...prev.slice(-3), // keep up to 4 trails
          {
            id: targetAgent.id,
            name: targetAgent.name,
            color: targetAgent.color,
            x: 20 + Math.random() * 60,
            y: 15 + Math.random() * 70,
          },
        ]);
      }

      // Add section to preview
      if (currentStep.previewState !== "INIT") {
        setBuiltSections((prev) =>
          prev.includes(currentStep.previewState) ? prev : [...prev, currentStep.previewState]
        );
      }

      step++;
      setTimeout(executeNext, currentStep.durationMs);
    };

    executeNext();
  };

  const resetEnvironment = () => {
    sound.playClick();
    setIsRunning(false);
    setCurrentStepIdx(-1);
    setBuiltSections([]);
    setAgentCursors([]);
    setLogs([
      "[SYSTEM] Workspace reset to baseline state.",
      "[SYSTEM] Select or type a specification prompt to begin autonomous assembly.",
    ]);
  };

  return (
    <section id="agents" className="py-24 px-4 sm:px-6 md:px-8 border-b border-border-subtle relative bg-background/50">
      <div className="w-full max-w-7xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-subtle/80 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-red uppercase tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-red animate-pulse" />
              <span>03 // AUTONOMOUS MULTI-AGENT STUDIO</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-text-primary tracking-tight">
              AUTONOMOUS DEVELOPMENT ENVIRONMENT
            </h2>
            <p className="font-sans text-sm sm:text-base text-text-secondary max-w-3xl">
              Interactive multi-agent orchestration studio where 12 specialized AI agents collaborate across a DAG task pipeline to architect, synthesize, and assemble software in real time.
            </p>
          </div>

          {/* Mode Switcher Pill */}
          <div className="flex items-center gap-2 p-1 rounded-lg border border-border-subtle bg-bg-panel font-mono text-xs">
            <button
              onClick={() => {
                sound.playTabSwitch();
                setMode("simulation");
              }}
              className={`px-3 py-1.5 rounded transition-all ${
                mode === "simulation"
                  ? "bg-accent-red text-text-primary font-semibold shadow-crimson-glow"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              MODE A: LOCAL SIMULATION
            </button>
            <button
              onClick={() => {
                sound.playTabSwitch();
                setMode("real");
              }}
              className={`px-3 py-1.5 rounded transition-all ${
                mode === "real"
                  ? "bg-accent-red text-text-primary font-semibold shadow-crimson-glow"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              MODE B: REAL AI EXECUTION
            </button>
          </div>
        </div>

        {/* Mode Notice Banner */}
        <div className="p-3 rounded border border-border-subtle bg-bg-panel/70 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                mode === "simulation" ? "bg-cyan-400" : "bg-accent-red"
              } animate-ping`}
            />
            <span className="text-text-primary font-semibold">
              ACTIVE MODE: {mode === "simulation" ? "INTERACTIVE DETERMINISTIC SIMULATION" : "REAL AI EXECUTION GATEWAY"}
            </span>
          </div>
          <span className="text-text-muted">
            {mode === "simulation"
              ? "Realistic local execution — zero external API keys required. Zero latency."
              : "Provider adapter configured with security sandbox & human-in-the-loop review."}
          </span>
        </div>

        {/* Studio Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT PANEL: Prompt Input & Agent Registry (3 cols) */}
          <div className="lg:col-span-3 space-y-4 font-mono text-xs">
            {/* Prompt Selector */}
            <div className="rounded-lg border border-border-subtle bg-bg-panel p-4 space-y-3">
              <div className="flex items-center justify-between text-text-muted">
                <span className="uppercase text-[11px] font-semibold text-text-primary">Prompt Specification</span>
                <span>[INPUT]</span>
              </div>

              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe website or system to assemble..."
                rows={3}
                className="w-full rounded border border-border-subtle bg-bg-secondary p-2.5 text-text-primary text-xs font-sans focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red"
              />

              {/* Preset Quick Chips */}
              <div className="space-y-1.5">
                <div className="text-[10px] text-text-muted uppercase">Sample Presets:</div>
                <div className="flex flex-col gap-1.5">
                  {PRESET_PROMPTS.slice(0, 3).map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        sound.playHover();
                        setPrompt(p);
                      }}
                      className="text-left text-[11px] text-text-secondary hover:text-accent-red truncate p-1.5 rounded hover:bg-white/[0.03] transition-colors"
                      title={p}
                    >
                      › {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Execution Controls */}
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={runBuildPipeline}
                  disabled={isRunning}
                  onMouseEnter={() => sound.playHover()}
                  className={`flex-1 py-2.5 px-3 rounded border font-semibold flex items-center justify-center gap-2 transition-all ${
                    isRunning
                      ? "border-border-subtle bg-bg-secondary text-text-muted cursor-not-allowed"
                      : "border-accent-red bg-accent-red text-text-primary hover:bg-accent-red-hover shadow-crimson-glow"
                  }`}
                >
                  <Play className={`w-3.5 h-3.5 ${isRunning ? "animate-spin" : ""}`} />
                  <span>{isRunning ? "ASSEMBLING..." : "DISPATCH AGENTS"}</span>
                </button>

                <button
                  onClick={resetEnvironment}
                  disabled={isRunning}
                  onMouseEnter={() => sound.playHover()}
                  className="p-2.5 rounded border border-border-subtle bg-bg-secondary hover:border-border-subtle/80 text-text-secondary hover:text-text-primary"
                  title="Reset Workspace"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Specialized Agent Swarm (12 Agents) */}
            <div className="rounded-lg border border-border-subtle bg-bg-panel p-4 space-y-3">
              <div className="flex items-center justify-between text-text-muted border-b border-border-subtle pb-2">
                <div className="flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5 text-accent-red" />
                  <span className="uppercase text-[11px] font-semibold text-text-primary">Agent Swarm (12)</span>
                </div>
                <span className="text-[10px] text-accent-red">{isRunning ? "RUNNING" : "STANDBY"}</span>
              </div>

              <div className="max-h-[380px] overflow-y-auto space-y-1.5 pr-1">
                {AGENT_REGISTRY.map((agent) => {
                  const isCurrent = activeAgentId === agent.id && isRunning;
                  return (
                    <div
                      key={agent.id}
                      onClick={() => {
                        sound.playHover();
                        setActiveAgentId(agent.id);
                      }}
                      className={`p-2 rounded border cursor-pointer transition-all flex items-center justify-between text-[11px] ${
                        isCurrent
                          ? "border-accent-red bg-accent-red/15 text-text-primary shadow-crimson-glow"
                          : activeAgentId === agent.id
                          ? "border-border-subtle/80 bg-white/[0.04] text-text-primary"
                          : "border-border-subtle/40 bg-transparent text-text-secondary hover:bg-white/[0.02]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: agent.color }}
                        />
                        <span className="font-bold">{agent.name}</span>
                        <span className="text-[9px] text-text-muted truncate max-w-[90px]">{agent.badge}</span>
                      </div>
                      <span className="text-[9px] font-mono text-text-muted">
                        {isCurrent ? "● BUSY" : "IDLE"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CENTER PANEL: Live Website Preview & Moving Cursors (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-lg border border-border-subtle bg-bg-panel overflow-hidden shadow-panel-subtle flex flex-col">
              {/* Preview Window Header & Device Controls */}
              <div className="p-3 border-b border-border-subtle bg-bg-secondary flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="text-[11px] text-text-muted pl-2">https://preview.sandbox.internal</span>
                </div>

                {/* Device Switcher */}
                <div className="flex items-center gap-1 border border-border-subtle rounded p-0.5 bg-black/40">
                  <button
                    onClick={() => setPreviewDevice("desktop")}
                    className={`p-1 rounded ${previewDevice === "desktop" ? "bg-accent-red text-white" : "text-text-muted"}`}
                    title="Desktop Preview"
                  >
                    <Monitor className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setPreviewDevice("tablet")}
                    className={`p-1 rounded ${previewDevice === "tablet" ? "bg-accent-red text-white" : "text-text-muted"}`}
                    title="Tablet Preview"
                  >
                    <Tablet className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setPreviewDevice("mobile")}
                    className={`p-1 rounded ${previewDevice === "mobile" ? "bg-accent-red text-white" : "text-text-muted"}`}
                    title="Mobile Preview"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Viewport Canvas Container */}
              <div className="relative min-h-[460px] bg-[#0c0d11] p-4 flex justify-center items-start overflow-hidden">
                {/* Simulated Agent Cursors Moving */}
                {agentCursors.map((cursor, i) => (
                  <div
                    key={`${cursor.id}-${i}`}
                    className="absolute z-20 pointer-events-none transition-all duration-700 ease-out flex items-center gap-1.5"
                    style={{
                      left: `${cursor.x}%`,
                      top: `${cursor.y}%`,
                    }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill={cursor.color}>
                      <path d="M4 0l16 12.279-6.951 1.17 4.325 8.817-3.596 1.734-4.35-8.879-5.428 5.428z" />
                    </svg>
                    <span
                      className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold text-white shadow-md uppercase tracking-wider"
                      style={{ backgroundColor: cursor.color }}
                    >
                      {cursor.name}
                    </span>
                  </div>
                ))}

                {/* Preview Frame */}
                <div
                  className={`transition-all duration-300 w-full rounded border border-border-subtle/80 bg-background overflow-hidden p-4 space-y-4 shadow-xl ${
                    previewDevice === "tablet"
                      ? "max-w-md"
                      : previewDevice === "mobile"
                      ? "max-w-xs"
                      : "max-w-full"
                  }`}
                >
                  {/* Step 0/Idle placeholder */}
                  {builtSections.length === 0 && (
                    <div className="h-72 flex flex-col items-center justify-center text-center p-6 space-y-3">
                      <Bot className="w-10 h-10 text-accent-red animate-pulse" />
                      <div className="font-heading font-bold text-base text-text-primary">
                        Autonomous Canvas Ready
                      </div>
                      <p className="font-sans text-xs text-text-muted max-w-xs">
                        Click &quot;DISPATCH AGENTS&quot; on the left to watch NOVA, ATLAS, PIXEL, and FORGE construct this target application piece by piece.
                      </p>
                    </div>
                  )}

                  {/* Built Header */}
                  {builtSections.includes("HEADER") && (
                    <div className="p-2.5 rounded border border-border-subtle/60 bg-bg-panel flex items-center justify-between text-xs font-mono animate-fadeIn">
                      <span className="font-bold text-accent-red">AGENT_BUILT_SYSTEM</span>
                      <span className="text-[10px] text-text-muted">v1.0.0-PROD</span>
                    </div>
                  )}

                  {/* Built Hero */}
                  {builtSections.includes("HERO") && (
                    <div className="p-4 rounded border border-border-subtle bg-bg-panel/70 space-y-2 animate-fadeIn">
                      <div className="text-[10px] font-mono text-accent-red uppercase tracking-wider font-semibold">
                        [ SYNTHESIZED SYSTEM ]
                      </div>
                      <h4 className="font-heading font-bold text-xl text-text-primary leading-tight">
                        Autonomous Security & Neural Architecture
                      </h4>
                      <p className="text-xs text-text-secondary leading-relaxed font-sans">
                        Dynamic multi-agent synthesis built by Korikana Sai Praneeth&apos;s autonomous engineering pipeline.
                      </p>
                    </div>
                  )}

                  {/* Built Metrics */}
                  {builtSections.includes("METRICS") && (
                    <div className="grid grid-cols-3 gap-2 font-mono text-[10px] animate-fadeIn">
                      <div className="p-2 rounded border border-border-subtle bg-bg-secondary text-center">
                        <div className="text-accent-red font-bold text-sm">24ms</div>
                        <div className="text-text-muted">LATENCY</div>
                      </div>
                      <div className="p-2 rounded border border-border-subtle bg-bg-secondary text-center">
                        <div className="text-emerald-400 font-bold text-sm">100%</div>
                        <div className="text-text-muted">STABILITY</div>
                      </div>
                      <div className="p-2 rounded border border-border-subtle bg-bg-secondary text-center">
                        <div className="text-text-primary font-bold text-sm">0 ERR</div>
                        <div className="text-text-muted">SANDBOX</div>
                      </div>
                    </div>
                  )}

                  {/* Built Cards */}
                  {builtSections.includes("CARDS") && (
                    <div className="grid grid-cols-2 gap-2 text-xs animate-fadeIn">
                      <div className="p-2.5 rounded border border-border-subtle bg-bg-panel">
                        <div className="font-semibold text-text-primary text-[11px]">Core Module A</div>
                        <div className="text-[10px] text-text-secondary mt-1">Cryptographic key rotation and zero-trust proxy.</div>
                      </div>
                      <div className="p-2.5 rounded border border-border-subtle bg-bg-panel">
                        <div className="font-semibold text-text-primary text-[11px]">Neural Module B</div>
                        <div className="text-[10px] text-text-secondary mt-1">Real-time vector search and semantic routing.</div>
                      </div>
                    </div>
                  )}

                  {/* Built Terminal */}
                  {builtSections.includes("TERMINAL") && (
                    <div className="p-2.5 rounded bg-black border border-border-subtle/80 font-mono text-[10px] text-emerald-400 space-y-0.5 animate-fadeIn">
                      <div>$ sys.status --verify</div>
                      <div className="text-text-muted">&gt; All services operational. DAG pipeline complete.</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Architecture & Generated Code Inspector (3 cols) */}
          <div className="lg:col-span-3 space-y-4 font-mono text-xs">
            {/* Inspector Tabs */}
            <div className="rounded-lg border border-border-subtle bg-bg-panel p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-border-subtle pb-2">
                <div className="flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-accent-red" />
                  <span className="uppercase text-[11px] font-semibold text-text-primary">Code & Blueprint</span>
                </div>
                <div className="flex gap-1 text-[10px]">
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={`px-2 py-0.5 rounded ${activeTab === "preview" ? "bg-accent-red text-white" : "text-text-muted"}`}
                  >
                    DAG
                  </button>
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`px-2 py-0.5 rounded ${activeTab === "code" ? "bg-accent-red text-white" : "text-text-muted"}`}
                  >
                    JSX
                  </button>
                  <button
                    onClick={() => setActiveTab("tokens")}
                    className={`px-2 py-0.5 rounded ${activeTab === "tokens" ? "bg-accent-red text-white" : "text-text-muted"}`}
                  >
                    TOKENS
                  </button>
                </div>
              </div>

              {activeTab === "preview" && (
                <div className="space-y-2 text-[11px]">
                  <div className="text-text-muted text-[10px] uppercase">Active Assembly Step</div>
                  <div className="p-2.5 rounded border border-border-subtle bg-bg-secondary space-y-1">
                    <div className="text-accent-red font-bold">
                      {currentStepIdx >= 0
                        ? `STEP 0${currentStepIdx + 1} // ${DEMO_BUILD_STEPS[currentStepIdx].action}`
                        : "SYSTEM STANDBY"}
                    </div>
                    <div className="text-text-secondary text-[10px]">
                      {currentStepIdx >= 0
                        ? DEMO_BUILD_STEPS[currentStepIdx].fileTarget
                        : "Awaiting next dispatch trigger"}
                    </div>
                  </div>

                  <div className="text-text-muted text-[10px] uppercase pt-2">Pipeline Checklist</div>
                  <div className="space-y-1 text-[10px]">
                    {DEMO_BUILD_STEPS.map((s, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center justify-between p-1 rounded ${
                          idx <= currentStepIdx
                            ? "text-emerald-400 bg-emerald-500/10"
                            : "text-text-muted"
                        }`}
                      >
                        <span className="truncate max-w-[150px]">{s.action}</span>
                        <span>{idx <= currentStepIdx ? "✓" : "○"}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "code" && (
                <div className="p-2 rounded bg-black border border-border-subtle font-mono text-[10px] text-text-secondary overflow-x-auto max-h-[340px]">
                  <pre>{`export function GeneratedApp() {
  return (
    <div className="min-h-screen bg-[#08090B]">
      <Header title="PRANEETH.AI" />
      <Hero prompt="${prompt.slice(0, 30)}..." />
      <Metrics latency="24ms" />
      <Showcase items={verifiedItems} />
    </div>
  );
}`}</pre>
                </div>
              )}

              {activeTab === "tokens" && (
                <div className="space-y-2 text-[11px]">
                  <div className="p-2 rounded bg-bg-secondary border border-border-subtle space-y-1">
                    <span className="text-text-muted">BACKGROUND:</span>
                    <div className="text-text-primary font-bold">#08090B (Obsidian)</div>
                  </div>
                  <div className="p-2 rounded bg-bg-secondary border border-border-subtle space-y-1">
                    <span className="text-text-muted">PRIMARY ACCENT:</span>
                    <div className="text-accent-red font-bold">#C72C46 (Crimson)</div>
                  </div>
                  <div className="p-2 rounded bg-bg-secondary border border-border-subtle space-y-1">
                    <span className="text-text-muted">TYPOGRAPHY:</span>
                    <div className="text-text-primary">Space Grotesk / Inter / JetBrains Mono</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* BOTTOM PANEL: Execution Logs Terminal */}
        <div className="rounded-lg border border-border-subtle bg-black p-4 font-mono text-xs space-y-2 shadow-panel-subtle">
          <div className="flex items-center justify-between border-b border-border-subtle/80 pb-2 text-[11px] text-text-muted">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-accent-red" />
              <span className="text-text-primary font-semibold">SWARM EXECUTION & AUDIT LOGS</span>
            </div>
            <span>STREAMS: ACTIVE // 12 WORKERS</span>
          </div>

          <div className="max-h-36 overflow-y-auto space-y-1 text-[11px] text-text-secondary pr-2">
            {logs.map((log, idx) => (
              <div key={idx} className="leading-relaxed">
                {log.startsWith("[SUCCESS]") ? (
                  <span className="text-emerald-400 font-semibold">{log}</span>
                ) : log.startsWith("[MODE]") ? (
                  <span className="text-cyan-400">{log}</span>
                ) : log.startsWith("---") ? (
                  <span className="text-yellow-400 font-semibold">{log}</span>
                ) : (
                  <span>{log}</span>
                )}
              </div>
            ))}
            <div ref={terminalBottomRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
