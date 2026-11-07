"use client";

import React, { useState } from "react";
import { sound } from "@/lib/audio";
import { Github, Twitter, Instagram, ArrowUp, Terminal, Shield } from "lucide-react";
import { VisitorTelemetryModal } from "@/components/VisitorTelemetryModal";

export function Footer() {
  const [telemetryOpen, setTelemetryOpen] = useState(false);

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 md:px-8 border-t border-border-subtle bg-background relative z-10 font-mono text-xs text-text-muted">
      <div className="w-full max-w-6xl mx-auto space-y-8">
        {/* Top Footer Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle/60 pb-6">
          <div className="space-y-1">
            <div className="font-heading font-black text-lg text-text-primary tracking-wider">
              PRANEETH<span className="text-accent-red">.AI</span>
            </div>
            <div className="text-[11px] text-text-secondary">
              BUILDING INTELLIGENT DIGITAL EXPERIENCES.
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/korikanasaipraneeth-svg"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/korikanasa99534"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="X / Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/_mr_teddy_11/"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              onMouseEnter={() => sound.playHover()}
              className="p-2 rounded border border-border-subtle text-text-muted hover:text-text-primary hover:border-accent-red transition-colors flex items-center gap-1.5"
              title="Return to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Attribution & Verification Guarantee */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px]">
          <div className="space-y-1">
            <div>
              © 2026 Korikana Sai Praneeth. All rights reserved.
            </div>
            <div className="text-text-muted/80">
              Designed with Noir & Crimson Op-Art. Built from first principles. Zero corporate fluff.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[10px]">
            <button
              onClick={() => {
                sound.playClick();
                setTelemetryOpen(true);
              }}
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer group"
              title="Open Visitor Intelligence & Security Access Monitor"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="group-hover:underline">STATUS: OPERATIONAL (ACCESS MONITOR)</span>
            </button>
            <span>AIML UNDERGRADUATE // SRI SIVANI COE</span>
            <span>100% VERIFIED EVIDENCE</span>
          </div>
        </div>
      </div>

      {/* Visitor Intelligence & Security Access Monitor Console */}
      <VisitorTelemetryModal
        isOpen={telemetryOpen}
        onClose={() => setTelemetryOpen(false)}
      />
    </footer>
  );
}
