"use client";

import React, { useState, useEffect } from "react";
import { sound } from "@/lib/audio";
import { Volume2, VolumeX, Menu, X, MousePointer2 } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#profile" },
  { label: "Matrix", href: "#skills" },
  { label: "Flagships", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export function NavigationDock() {
  const [isMuted, setIsMuted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    setIsMuted(sound.getMuted());

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["hero", "profile", "skills", "projects", "timeline", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMute = () => {
    const nextState = sound.toggleMute();
    setIsMuted(nextState);
    if (!nextState) sound.playClick();
  };

  const handleNavClick = (href: string) => {
    sound.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3.5 px-4 md:px-8 flex justify-center ${
          isScrolled ? "bg-background/85 backdrop-blur-md border-b border-border-subtle/70" : "bg-transparent"
        }`}
      >
        {/* Floating Centered Dock Container */}
        <div className="w-full max-w-5xl flex items-center justify-between">
          {/* Logo / Badge */}
          <a
            href="#hero"
            onClick={() => handleNavClick("#hero")}
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-2 group"
          >
            <div className="w-6 h-6 rounded-sm bg-accent-red flex items-center justify-center font-bebas text-white text-xs tracking-wider shadow-sm">
              KP
            </div>
            <span className="font-bebas text-lg tracking-wider text-text-primary group-hover:text-accent-red transition-colors">
              SAI PRANEETH<span className="text-accent-red">.</span>
            </span>
          </a>

          {/* Centered Navigation Pill Dock (Exact SAAI.pro styling) */}
          <nav className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full border border-border-subtle/80 bg-bg-panel/80 backdrop-blur-xl shadow-panel-subtle">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  onMouseEnter={() => sound.playHover()}
                  className={`px-3 py-1 rounded-full text-xs font-sans tracking-wide transition-all duration-150 ${
                    isActive
                      ? "text-white bg-accent-red font-medium shadow-crimson-glow"
                      : "text-text-secondary hover:text-text-primary hover:bg-white/[0.05]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Status + Audio + Dispatch CTA */}
          <div className="flex items-center gap-2.5">
            {/* Swarm Rebuild Trigger */}
            <button
              onClick={() => {
                sound.playClick();
                if (typeof window !== "undefined") {
                  const w = window as any;
                  if (w.triggerSwarmRebuild) w.triggerSwarmRebuild();
                  else if (w.__swarmRebuild) w.__swarmRebuild.toggle();
                }
              }}
              onMouseEnter={() => sound.playHover()}
              title="Trigger Full-Screen Swarm Cursor Rebuild"
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded border border-border-subtle bg-bg-panel text-text-secondary hover:text-accent-red hover:border-accent-red/60 text-[11px] font-mono transition-colors"
            >
              <MousePointer2 className="w-3 h-3 text-accent-red" />
              <span>SWARM BUILD</span>
            </button>

            {/* Audio Toggle */}
            <button
              onClick={toggleMute}
              onMouseEnter={() => sound.playHover()}
              title={isMuted ? "Unmute Sound FX" : "Mute Sound FX"}
              className={`p-1.5 rounded border transition-colors ${
                isMuted
                  ? "border-border-subtle text-text-muted hover:text-text-secondary"
                  : "border-accent-red/40 text-accent-red bg-accent-red/10 shadow-crimson-glow"
              }`}
              aria-label="Toggle sound synthesis"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>

            {/* Available DISPATCH CTA (Exact SAAI.pro pill) */}
            <a
              href="#contact"
              onClick={() => handleNavClick("#contact")}
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle/80 bg-bg-panel/90 hover:border-accent-red transition-all group"
            >
              <span className="flex items-center gap-1.5 text-[10px] font-mono text-text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="hidden sm:inline">Available</span>
              </span>
              <span className="font-mono text-xs font-semibold text-purple-400 group-hover:text-accent-red flex items-center gap-1 transition-colors">
                DISPATCH →
              </span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-1.5 rounded border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-red"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-background/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6 border-b border-border-subtle">
          <div className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">
            Navigation Index
          </div>
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="py-2.5 px-3 rounded border border-border-subtle/50 bg-bg-panel/40 text-text-primary font-mono text-sm hover:border-accent-red hover:text-accent-red flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-text-muted text-xs">→</span>
              </a>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-border-subtle/60 flex flex-col gap-2 font-mono text-xs text-text-muted">
            <div className="text-accent-red font-semibold">KORIKANA SAI PRANEETH</div>
            <div>B.TECH AIML — SRI SIVANI COE</div>
            <div>ROLL NO: 24W61A6119</div>
          </div>
        </div>
      )}
    </>
  );
}
