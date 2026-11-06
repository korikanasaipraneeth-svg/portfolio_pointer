"use client";

import React from "react";
import { sound } from "@/lib/audio";
import { ProjectItem } from "@/data/projects";
import { X, Github, ExternalLink, ShieldCheck, Terminal, Layers, CheckCircle2 } from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg border border-border-subtle bg-bg-panel p-6 sm:p-8 shadow-2xl space-y-6 font-sans">
        {/* Top Header */}
        <div className="flex items-start justify-between border-b border-border-subtle pb-4">
          <div className="space-y-1">
            <div className="font-mono text-xs text-accent-red font-semibold uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-red" />
              <span>{project.badge}</span>
              <span className="text-text-muted">• {project.status}</span>
            </div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-text-primary">
              {project.title}
            </h3>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            onMouseEnter={() => sound.playHover()}
            className="p-2 rounded border border-border-subtle text-text-muted hover:text-text-primary hover:border-accent-red"
            aria-label="Close project modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Overview */}
        <div className="space-y-2">
          <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
            System Overview & Description
          </div>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Problem Solved & Purpose Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded border border-border-subtle bg-bg-secondary space-y-1.5">
            <div className="font-mono text-xs text-accent-red font-semibold">
              PROBLEM SOLVED
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {project.problemSolved}
            </p>
          </div>

          <div className="p-4 rounded border border-border-subtle bg-bg-secondary space-y-1.5">
            <div className="font-mono text-xs text-emerald-400 font-semibold">
              ENGINEERING PURPOSE
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {project.purpose}
            </p>
          </div>
        </div>

        {/* Architecture Details */}
        <div className="p-4 rounded border border-border-subtle bg-bg-secondary/70 space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-text-primary font-semibold">
            <Layers className="w-4 h-4 text-accent-red" />
            <span>SYSTEM ARCHITECTURE</span>
          </div>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            {project.architecture}
          </p>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
            Verified Key Capabilities & Features
          </div>
          <div className="grid grid-cols-1 gap-2">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-3 rounded border border-border-subtle/70 bg-bg-panel/40 flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary"
              >
                <CheckCircle2 className="w-4 h-4 text-accent-red shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Contribution */}
        <div className="p-4 rounded border border-accent-red/30 bg-accent-red/5 space-y-1.5">
          <div className="font-mono text-xs text-accent-red font-semibold flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span>KORIKANA SAI PRANEETH&apos;S VERIFIED CONTRIBUTION</span>
          </div>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            {project.contribution}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="space-y-2">
          <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
            Technology Stack & Libraries
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded border border-border-subtle bg-bg-secondary font-mono text-xs text-text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions & Links Footer */}
        <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
          <div className="text-text-muted text-[11px]">
            SOURCE OF TRUTH: GitHub API (korikanasaipraneeth-svg)
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="px-4 py-2 rounded border border-accent-red bg-accent-red text-text-primary font-semibold hover:bg-accent-red-hover flex items-center gap-2 shadow-crimson-glow"
            >
              <Github className="w-4 h-4" />
              <span>VIEW REPOSITORY</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="px-4 py-2 rounded border border-border-subtle bg-bg-secondary text-text-primary hover:border-accent-red flex items-center gap-2"
              >
                <span>LIVE DEMO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
