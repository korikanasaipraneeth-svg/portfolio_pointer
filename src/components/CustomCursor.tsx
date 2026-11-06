"use client";

import React, { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animId: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: targetX, y: targetY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          "a, button, input, textarea, select, [role='button'], .clickable, .hud-card, .glass-card, .interactive-node"
        );
        setIsHovering(!!interactive);
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev.slice(-3), newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    };

    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const updateTrail = () => {
      // High-precision smooth damping (matching SAAI / creative portfolios)
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;
      setTrailPos({ x: currentX, y: currentY });
      animId = requestAnimationFrame(updateTrail);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    animId = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block" aria-hidden="true">
      {/* Click Shockwave Ripples */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="fixed rounded-full border border-accent-red pointer-events-none animate-ping"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: "36px",
            height: "36px",
            transform: "translate(-50%, -50%)",
            opacity: 0.8,
          }}
        />
      ))}

      {/* Center High-Precision Reticle Dot */}
      <div
        className="fixed w-1.5 h-1.5 rounded-full bg-accent-red pointer-events-none transition-transform duration-75 shadow-crimson-glow"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.6 : isHovering ? 1.5 : 1})`,
        }}
      />

      {/* Smooth Trailing Precision Ring with Crosshair Ticks */}
      <div
        className={`fixed rounded-full pointer-events-none transition-all duration-150 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center ${
          isHovering
            ? "w-12 h-12 border border-accent-red bg-accent-red/15 scale-110 shadow-crimson-glow"
            : "w-8 h-8 border border-accent-red/40 bg-transparent"
        } ${isClicking ? "scale-90" : ""}`}
        style={{
          left: `${trailPos.x}px`,
          top: `${trailPos.y}px`,
        }}
      >
        {/* Architectural Crosshair Reticle Micro-Ticks */}
        <span className="absolute top-0 w-[1px] h-1 bg-accent-red/60" />
        <span className="absolute bottom-0 w-[1px] h-1 bg-accent-red/60" />
        <span className="absolute left-0 h-[1px] w-1 bg-accent-red/60" />
        <span className="absolute right-0 h-[1px] w-1 bg-accent-red/60" />
      </div>
    </div>
  );
}
