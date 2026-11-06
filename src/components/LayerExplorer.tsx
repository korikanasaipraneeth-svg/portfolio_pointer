"use client";

import React, { useState } from "react";
import { sound } from "@/lib/audio";
import {
  Cpu,
  Wrench,
  Database,
  Users,
  GitBranch,
  ShieldCheck,
  Terminal,
  Layers,
  Sparkles,
  Server,
  Zap,
} from "lucide-react";

export interface SystemLayer {
  number: string;
  badge: string;
  title: string;
  shortDesc: string;
  description: string;
  hardware: string;
  protocol: string;
  metrics: { label: string; value: string }[];
  tags: string[];
}

export const SEVEN_LAYERS: SystemLayer[] = [
  {
    number: "01",
    badge: "LAYER 01 // COGNITIVE CORE",
    title: "Autonomous Decision Engine & Heuristic Policies",
    shortDesc: "Self-reflective neural reasoning loop with chain-of-thought verification.",
    description:
      "Core decision-making engine executing continuous perception-action cycles. Integrates heuristic search algorithms, prompt self-refinement, and confidence scoring. Operates locally without external cloud dependencies, ensuring zero-latency decision velocity and complete execution sovereignty.",
    hardware: "Local Silicon • RTX GPU & Edge Accelerators",
    protocol: "Native Python / AsyncIO Micro-Runtime",
    metrics: [
      { label: "Reasoning Latency", value: "< 45ms" },
      { label: "Reflection Cycles", value: "Continuous" },
      { label: "Cloud Dependency", value: "0% Offline" },
    ],
    tags: ["ChainOfThought", "SelfReflection", "LocalInference", "HeuristicSearch"],
  },
  {
    number: "02",
    badge: "LAYER 02 // TOOL INTEGRATION & MCP PROTOCOL",
    title: "Tool Execution Mesh & Model Context Protocol (MCP)",
    shortDesc: "Standardized tool ecosystem spanning code execution, vision, and system APIs.",
    description:
      "Model Context Protocol (MCP) compliant server mesh exposing sandboxed file system operations, OpenCV computer vision pipelines, live market pricing feeds, and geospatial routing. Every tool is strictly bounded with human-in-the-loop permission gates and cryptographic audit logging.",
    hardware: "Sandboxed POSIX / WebAssembly Workers",
    protocol: "Model Context Protocol (MCP) • JSON-RPC 2.0",
    metrics: [
      { label: "Protocol", value: "MCP Standard" },
      { label: "Sandbox Isolation", value: "Memory & Origin" },
      { label: "Audit Trail", value: "Cryptographic" },
    ],
    tags: ["MCPProtocol", "ToolSandbox", "OpenCVBridge", "JSONRPC"],
  },
  {
    number: "03",
    badge: "LAYER 03 // 4-TIER PERSISTENT MEMORY",
    title: "Multi-Tier Cognitive Persistence Framework",
    shortDesc: "Episodic, semantic, procedural, and working memory architectures.",
    description:
      "Comprehensive 4-tier memory architecture that eliminates session amnesia: (1) Working Memory holding active session context, (2) Episodic Memory capturing temporal event logs, (3) Semantic Memory indexed via vector similarity search, and (4) Procedural Memory storing validated tool workflows and skill chains.",
    hardware: "Local SQLite + Vector Store / NVMe Cache",
    protocol: "Vector Cosine Indexing • ACID Relational",
    metrics: [
      { label: "Memory Tiers", value: "4 Distinct" },
      { label: "Vector Search", value: "HNSW Indexed" },
      { label: "Session Coherence", value: "Multi-Session" },
    ],
    tags: ["EpisodicMemory", "SemanticVectors", "ProceduralSkills", "WorkingContext"],
  },
  {
    number: "04",
    badge: "LAYER 04 // MULTI-AGENT SWARM ORCHESTRATION",
    title: "Hierarchical Agent Delegation & Consensus Swarm",
    shortDesc: "Specialized agent workers collaborating through structured debate and consensus.",
    description:
      "Hierarchical multi-agent runtime orchestrating 12 specialized agents (NOVA, ATLAS, PIXEL, FORGE, API, SCRIBE, SENTINEL, DEBUG, etc.). Agents communicate through structured JSON message channels, cross-verifying outputs, detecting edge-case hallucinations, and voting on architectural consensus before code release.",
    hardware: "Concurrent Asynchronous Agent Threads",
    protocol: "Peer-to-Peer Actor Model • WebSocket Bus",
    metrics: [
      { label: "Specialized Agents", value: "12 Roles" },
      { label: "Consensus Model", value: "Quorum Vote" },
      { label: "Cross-Verification", value: "Mandatory" },
    ],
    tags: ["MultiAgent", "SwarmIntelligence", "ActorModel", "ConsensusVoting"],
  },
  {
    number: "05",
    badge: "LAYER 05 // PLANNING & DAG ENGINE",
    title: "Directed Acyclic Graph Task Decomposition",
    shortDesc: "Dynamic dependency-ordered task scheduling with real-time replanning.",
    description:
      "Decomposes high-level natural language system goals into topological directed acyclic graphs (DAGs). Each node specifies prerequisite deliverables, inputs, validation gates, and fallback paths. If a downstream build step fails, the replanning engine dynamically calculates corrective branches without re-executing valid sub-graphs.",
    hardware: "Topological Sort Engine • Dynamic DAG",
    protocol: "Deterministic Graph Dispatcher",
    metrics: [
      { label: "Graph Resolution", value: "Topological" },
      { label: "Re-planning Latency", value: "< 15ms" },
      { label: "Fault Recovery", value: "Branch Pruning" },
    ],
    tags: ["DAGPlanning", "TopologicalSort", "FaultTolerance", "DynamicReplanning"],
  },
  {
    number: "06",
    badge: "LAYER 06 // SAFETY, SANDBOX & ALIGNMENT",
    title: "Constitutional Constraints & Validation Gates",
    shortDesc: "Deterministic runtime policy enforcement and isolated preview execution.",
    description:
      "Enforces strict constitutional constraints against unauthorized system operations. All synthesized code is evaluated within isolated sandboxes where eval() and unrestricted network access are blocked. Pre-deployment checks verify type correctness, WCAG accessibility, and input sanitization before human sign-off.",
    hardware: "Isolated Execution Container / Iframe Sandbox",
    protocol: "Content Security Policy (CSP) • Strict Origin",
    metrics: [
      { label: "Sandbox Security", value: "Zero Eval" },
      { label: "Type Safety", value: "TypeScript Strict" },
      { label: "Verification Gate", value: "Human-In-Loop" },
    ],
    tags: ["ConstitutionalAI", "SandboxIsolation", "CSPPolicy", "AutomatedAudits"],
  },
  {
    number: "07",
    badge: "LAYER 07 // INTERFACE & PROTOCOL LAYER",
    title: "Omni-Channel Client Surface & API Gateway",
    shortDesc: "Next.js dashboard, CLI terminal, and high-contrast telemetry.",
    description:
      "The client presentation and operator control surface. Features a high-density, noir-and-crimson architectural HUD, real-time WebSocket telemetry, interactive 3D and canvas particle dynamics, and responsive cross-device views for desktop, tablet, and mobile operators.",
    hardware: "Modern Web Standards • Edge CDN",
    protocol: "HTTP/3 • WebSockets • Web Audio API",
    metrics: [
      { label: "Lighthouse Performance", value: "99/100" },
      { label: "First Paint", value: "< 250ms" },
      { label: "Audio Engine", value: "Procedural Synth" },
    ],
    tags: ["NextJS15", "WebAudioSynth", "EdgeCDN", "NoirAndCrimson"],
  },
];

export function LayerExplorer() {
  const [activeLayerIdx, setActiveLayerIdx] = useState<number>(0);
  const activeLayer = SEVEN_LAYERS[activeLayerIdx];

  const handleLayerClick = (idx: number) => {
    sound.playTabSwitch();
    setActiveLayerIdx(idx);
  };

  return (
    <section className="py-24 px-4 sm:px-6 md:px-8 border-b border-border-subtle relative bg-bg-secondary/40">
      <div className="w-full max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-2 border-b border-border-subtle/80 pb-6">
          <div className="flex items-center gap-2 font-mono text-xs text-accent-red uppercase tracking-widest font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-red animate-pulse" />
            <span>04 // 7-LAYER AUTONOMOUS SYSTEM STACK</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-text-primary tracking-tight">
            THE 7-LAYER AUTONOMOUS ARCHITECTURE
          </h2>
          <p className="font-sans text-sm sm:text-base text-text-secondary max-w-2xl">
            A comprehensive, modular autonomous AI stack engineered from first principles — localized memory, multi-agent consensus, MCP tool integration, and deterministic execution.
          </p>
        </div>

        {/* 7-Layer Interactive Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Layer Selection Tabs (5 cols) */}
          <div className="lg:col-span-5 space-y-2 font-mono text-xs">
            {SEVEN_LAYERS.map((layer, idx) => {
              const isSelected = activeLayerIdx === idx;
              return (
                <div
                  key={layer.number}
                  onClick={() => handleLayerClick(idx)}
                  onMouseEnter={() => sound.playHover()}
                  className={`cursor-pointer p-3.5 rounded-lg border transition-all duration-150 flex items-center justify-between ${
                    isSelected
                      ? "border-accent-red bg-accent-red/15 text-text-primary shadow-crimson-glow"
                      : "border-border-subtle bg-bg-panel/70 text-text-secondary hover:border-accent-red/50 hover:bg-bg-panel"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-heading font-bold text-sm px-2 py-0.5 rounded ${
                        isSelected
                          ? "bg-accent-red text-white"
                          : "bg-black/50 text-accent-red border border-border-subtle"
                      }`}
                    >
                      {layer.number}
                    </span>
                    <div>
                      <div className="font-bold text-text-primary">{layer.title.split(" & ")[0]}</div>
                      <div className="text-[10px] text-text-muted">{layer.badge.split(" // ")[1]}</div>
                    </div>
                  </div>
                  <span className="text-accent-red font-bold text-sm">
                    {isSelected ? "●" : "›"}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right: Deep Architectural Inspector Panel (7 cols) */}
          <div className="lg:col-span-7 rounded-lg border border-border-subtle bg-bg-panel p-6 sm:p-8 space-y-6 shadow-panel-subtle sticky top-24">
            <div className="flex items-start justify-between border-b border-border-subtle pb-4">
              <div className="space-y-1">
                <span className="font-mono text-xs text-accent-red font-semibold tracking-wider">
                  {activeLayer.badge}
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-text-primary">
                  {activeLayer.title}
                </h3>
              </div>
              <div className="p-2 rounded border border-accent-red/30 bg-accent-red/10 text-accent-red">
                <Layers className="w-5 h-5" />
              </div>
            </div>

            <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed">
              {activeLayer.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 font-mono text-xs">
              {activeLayer.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded border border-border-subtle bg-bg-secondary text-center space-y-0.5">
                  <div className="text-accent-red font-bold text-sm">{m.value}</div>
                  <div className="text-[10px] text-text-muted uppercase tracking-tight">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Hardware & Protocol Specs */}
            <div className="space-y-2 pt-2 border-t border-border-subtle font-mono text-xs text-text-muted">
              <div className="flex justify-between">
                <span>TARGET ENVIRONMENT:</span>
                <span className="text-text-primary">{activeLayer.hardware}</span>
              </div>
              <div className="flex justify-between">
                <span>COMMUNICATION PROTOCOL:</span>
                <span className="text-accent-red font-medium">{activeLayer.protocol}</span>
              </div>
            </div>

            {/* Architectural Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {activeLayer.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-bg-secondary border border-border-subtle font-mono text-xs text-text-secondary"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
