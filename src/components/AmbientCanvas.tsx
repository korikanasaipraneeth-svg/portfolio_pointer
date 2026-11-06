"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
}

export function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animId: number;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5, rawX: -1000, rawY: -1000, radius: 160 };
    let isVisible = true;

    // Atmospheric Crimson Aurora Orbs (SAAI.pro Noir & Crimson focus)
    const orbs = [
      { x: 0.35, y: 0.40, radius: 0.50, vx: 0.0003, vy: 0.0002, color: "rgba(239, 68, 68, 0.14)" },
      { x: 0.70, y: 0.45, radius: 0.42, vx: -0.0002, vy: 0.0003, color: "rgba(185, 28, 28, 0.10)" },
      { x: 0.50, y: 0.80, radius: 0.48, vx: 0.0002, vy: -0.0002, color: "rgba(255, 255, 255, 0.03)" },
    ];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const count = Math.min(Math.floor((width * height) / 14000), 85);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 1.5 + 0.8,
          baseAlpha: Math.random() * 0.35 + 0.15,
        });
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.rawX = e.clientX;
      mouse.rawY = e.clientY;
      mouse.targetX = e.clientX / (width || 1);
      mouse.targetY = e.clientY / (height || 1);
    };

    const onMouseLeave = () => {
      mouse.rawX = -1000;
      mouse.rawY = -1000;
    };

    const render = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse parallax easing
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // 1. Render Atmospheric Crimson Aurora Orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < 0.1 || orb.x > 0.9) orb.vx *= -1;
        if (orb.y < 0.1 || orb.y > 0.9) orb.vy *= -1;

        const px = (orb.x + (mouse.x - 0.5) * 0.06) * width;
        const py = (orb.y + (mouse.y - 0.5) * 0.06) * height;
        const r = orb.radius * Math.min(width, height);

        const gradient = ctx.createRadialGradient(px, py, 0, px, py, r);
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      });

      // 2. High-precision mouse backlight
      if (mouse.rawX > 0 && mouse.rawY > 0) {
        const radGrad = ctx.createRadialGradient(
          mouse.rawX,
          mouse.rawY,
          0,
          mouse.rawX,
          mouse.rawY,
          300
        );
        radGrad.addColorStop(0, "rgba(239, 68, 68, 0.09)");
        radGrad.addColorStop(0.5, "rgba(185, 28, 28, 0.03)");
        radGrad.addColorStop(1, "rgba(8, 9, 11, 0)");
        ctx.fillStyle = radGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // 3. Update & Draw Connected Particle Network
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        // Mouse deflection
        const dx = mouse.rawX - p.x;
        const dy = mouse.rawY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 0.8;
          p.x -= (dx / dist) * force;
          p.y -= (dy / dist) * force;
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 82, 105, ${p.baseAlpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < 130) {
            const alpha = (1 - cdist / 130) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(199, 44, 70, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            cancelAnimationFrame(animId);
            animId = requestAnimationFrame(render);
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    resize();
    animId = requestAnimationFrame(render);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-90"
      aria-hidden="true"
    />
  );
}
