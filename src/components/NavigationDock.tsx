"use client";

import React, { useState, useEffect } from "react";
import { sound } from "@/lib/audio";
import { Volume2, VolumeX, Menu, X, Terminal, Radio } from "lucide-react";

const NAV_ITEMS = [
  { label: "Profile", href: "#profile" },
  { label: "Skills", href: "#skills" },
  { label: "Autonomous AI", href: "#agents" },
  { label: "Showcase", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
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

      // Identify active section
      const sections = ["hero", "profile", "skills", "agents", "projects", "architecture", "timeline", "contact"];
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 px-4 md:px-8 flex justify-center ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border-subtle/60" : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl flex items-center justify-between">
          {/* Logo / Callout */}
          <a
            href="#hero"
            onClick={() => handleNavClick("#hero")}
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-7 h-7 rounded border border-border-subtle bg-bg-panel flex items-center justify-center group-hover:border-accent-red transition-colors shadow-panel-subtle">
              <span className="font-heading font-bold text-xs text-accent-red tracking-wider">KP</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-widest text-text-primary group-hover:text-accent-red transition-colors">
                PRANEETH<span className="text-accent-red">.AI</span>
              </span>
              <span className="font-mono text-[9px] text-text-muted tracking-tight hidden sm:block">
                SYSTEMS ARCHITECT
              </span>
            </div>
          </a>

          {/* Desktop Navigation Pill Dock */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border border-border-subtle/80 bg-bg-panel/70 backdrop-blur-lg shadow-panel-subtle">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  onMouseEnter={() => sound.playHover()}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-150 ${
                    isActive
                      ? "text-accent-red bg-accent-red/10 border border-accent-red/30 shadow-crimson-glow font-medium"
                      : "text-text-secondary hover:text-text-primary hover:bg-white/[0.04]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Status + Audio + CTA */}
          <div className="flex items-center gap-3">
            {/* Live Operational Status */}
            <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded border border-border-subtle/60 bg-bg-panel/40 font-mono text-[10px] text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>SYSTEM: ONLINE</span>
            </div>

            {/* Audio Toggle */}
            <button
              onClick={toggleMute}
              onMouseEnter={() => sound.playHover()}
              title={isMuted ? "Unmute Audio Synthesis" : "Mute Audio Synthesis"}
              className={`p-2 rounded border transition-colors ${
                isMuted
                  ? "border-border-subtle text-text-muted hover:text-text-secondary hover:border-border-subtle"
                  : "border-accent-red/40 text-accent-red bg-accent-red/10 shadow-crimson-glow"
              }`}
              aria-label="Toggle sound synthesis"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Quick Connect CTA */}
            <a
              href="#contact"
              onClick={() => handleNavClick("#contact")}
              onMouseEnter={() => sound.playHover()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded border border-accent-red/60 bg-accent-red/15 hover:bg-accent-red text-text-primary text-xs font-mono tracking-wider transition-all duration-200 shadow-crimson-glow group"
            >
              <span>CONNECT</span>
              <span className="text-accent-red group-hover:text-text-primary transition-colors">→</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-red"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-background/95 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 border-b border-border-subtle">
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

          <div className="mt-8 pt-6 border-t border-border-subtle/60 flex flex-col gap-3 font-mono text-xs text-text-muted">
            <div className="flex items-center gap-2">
              <Radio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
              <span>STATUS: ONLINE & VERIFIED</span>
            </div>
            <div>IDENTITY: KORIKANA SAI PRANEETH</div>
            <div>LOCATION: SRI SIVANI COLLEGE OF ENGINEERING</div>
          </div>
        </div>
      )}
    </>
  );
}
