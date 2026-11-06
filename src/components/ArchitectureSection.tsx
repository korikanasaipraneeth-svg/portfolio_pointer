"use client";

import React, { useState } from "react";
import { sound } from "@/lib/audio";
import { ARCHITECTURE_FLOWS, ArchitectureFlow, ArchitectureNode } from "@/data/architecture";
import { Layers, ArrowRight, CheckCircle2, Cpu, Database, Network, Shield, ExternalLink } from "lucide-react";

export function ArchitectureSection() {
  const [activeFlowId, setActiveFlowId] = useState<string>(ARCHITECTURE_FLOWS[0].id);
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode | null>(null);

  const activeFlow = ARCHITECTURE_FLOWS.find((f) => f.id === activeFlowId) || ARCHITECTURE_FLOWS[0];

  const handleFlowSelect = (id: string) => {
    sound.playTabSwitch();
    setActiveFlowId(id);
    setSelectedNode(null);
  };

  const handleNodeClick = (node: ArchitectureNode) => {
    sound.playClick();
    setSelectedNode(node);
  };

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 md:px-8 border-b border-border-subtle relative">
      <div className="w-full max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-2 border-b border-border-subtle/80 pb-6">
          <div className="flex items-center gap-2 font-mono text-xs text-accent-red uppercase tracking-widest font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-red" />
            <span>05 // SCHEMATIC VERIFICATION</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-text-primary tracking-tight">
            SYSTEMS ARCHITECTURE & DATA FLOWS
          </h2>
          <p className="font-sans text-sm sm:text-base text-text-secondary max-w-2xl">
            Detailed interactive topologies mapping client interactions, microservice logic, database persistence, and AI pipelines to real implementations.
          </p>
        </div>

        {/* Flow Selector Pills */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {ARCHITECTURE_FLOWS.map((flow) => {
            const isSelected = activeFlow.id === flow.id;
            return (
              <button
                key={flow.id}
                onClick={() => handleFlowSelect(flow.id)}
                onMouseEnter={() => sound.playHover()}
                className={`px-4 py-2.5 rounded border transition-all duration-150 text-left flex items-center gap-2 ${
                  isSelected
                    ? "border-accent-red bg-accent-red/20 text-text-primary font-semibold shadow-crimson-glow"
                    : "border-border-subtle bg-bg-panel/50 text-text-secondary hover:text-text-primary hover:border-border-subtle/80"
                }`}
              >
                <Layers className={`w-3.5 h-3.5 ${isSelected ? "text-accent-red" : "text-text-muted"}`} />
                <span>{flow.title.split(" — ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Main Architectural Canvas & Interactive Node Mesh */}
        <div className="rounded-lg border border-border-subtle bg-bg-panel p-6 sm:p-8 space-y-8 shadow-panel-subtle">
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border-subtle pb-4">
            <div className="space-y-1">
              <span className="font-mono text-xs text-accent-red font-semibold">
                {activeFlow.badge}
              </span>
              <h3 className="font-heading font-bold text-2xl text-text-primary">
                {activeFlow.title}
              </h3>
            </div>
            <div className="font-mono text-xs text-text-muted px-3 py-1 rounded bg-bg-secondary border border-border-subtle">
              {activeFlow.verifiedSource}
            </div>
          </div>

          <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed">
            {activeFlow.summary}
          </p>

          {/* Interactive Node Topology Diagram */}
          <div className="p-6 rounded-lg bg-bg-secondary/70 border border-border-subtle/70 space-y-4">
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider flex items-center justify-between">
              <span>Interactive Topology (Click any node to inspect telemetry)</span>
              <span>DATA FLOW: LTR →</span>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-3 overflow-x-auto py-2">
              {activeFlow.nodes.map((node, idx) => {
                const isSelected = selectedNode?.id === node.id;
                return (
                  <React.Fragment key={node.id}>
                    <div
                      onClick={() => handleNodeClick(node)}
                      onMouseEnter={() => sound.playHover()}
                      className={`cursor-pointer min-w-[160px] p-3.5 rounded border transition-all duration-150 text-center space-y-1.5 ${
                        isSelected
                          ? "border-accent-red bg-accent-red/20 shadow-crimson-glow scale-105"
                          : "border-border-subtle bg-bg-panel hover:border-accent-red/60"
                      }`}
                    >
                      <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-black/40 text-accent-red">
                        {node.type}
                      </span>
                      <div className="font-heading font-bold text-xs text-text-primary leading-tight">
                        {node.label}
                      </div>
                      <div className="font-mono text-[10px] text-text-muted">
                        {node.subtext}
                      </div>
                    </div>

                    {idx < activeFlow.nodes.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-accent-red shrink-0 hidden md:block" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Selected Node Inspector Flyout */}
            {selectedNode && (
              <div className="p-4 rounded border border-accent-red/40 bg-accent-red/5 font-mono text-xs text-text-primary flex items-center justify-between animate-fadeIn">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent-red animate-ping" />
                  <div>
                    <span className="text-text-muted">ACTIVE NODE: </span>
                    <strong className="text-text-primary">{selectedNode.label}</strong> —{" "}
                    <span className="text-accent-red font-medium">{selectedNode.subtext}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedNode(null)}
                  className="text-text-muted hover:text-text-primary text-[10px]"
                >
                  [DISMISS]
                </button>
              </div>
            )}
          </div>

          {/* Sequential Step Execution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                Execution Sequence & Ingestion Pipeline
              </span>
              <div className="space-y-2">
                {activeFlow.steps.map((step) => (
                  <div
                    key={step.step}
                    className="p-3.5 rounded border border-border-subtle/80 bg-bg-secondary/40 space-y-1"
                  >
                    <div className="font-mono text-xs text-accent-red font-semibold">
                      PHASE 0{step.step} {"//"} {step.title}
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed font-sans">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Highlights & Guarantees */}
            <div className="space-y-3">
              <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                Architectural Guarantees & Technical Principles
              </span>
              <div className="p-4 rounded border border-border-subtle bg-bg-secondary/50 space-y-3 h-full">
                {activeFlow.keyHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary font-sans">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}

                <div className="pt-4 border-t border-border-subtle/60 font-mono text-[11px] text-text-muted">
                  SYSTEM GUARANTEE: Zero fabricated metrics. Code flows correspond to active production branches in Korikana Sai Praneeth&apos;s GitHub.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
