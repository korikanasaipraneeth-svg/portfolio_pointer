"use client";

import React, { useEffect, useRef } from "react";

interface Particle3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
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
    let centerX = 0;
    let centerY = 0;
    let particles: Particle3D[] = [];
    const CAMERA_DIST = 600;

    let mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      rawX: -1000,
      rawY: -1000,
      radius: 180,
    };
    let isVisible = true;

    // Atmospheric Crimson Aurora Orbs (SAAI.pro Noir & Crimson focus)
    const orbs = [
      { x: 0.35, y: 0.40, radius: 0.50, vx: 0.0003, vy: 0.0002, color: "rgba(239, 68, 68, 0.12)" },
      { x: 0.70, y: 0.45, radius: 0.42, vx: -0.0002, vy: 0.0003, color: "rgba(185, 28, 28, 0.09)" },
      { x: 0.50, y: 0.80, radius: 0.48, vx: 0.0002, vy: -0.0002, color: "rgba(255, 255, 255, 0.025)" },
    ];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      centerX = width / 2;
      centerY = height / 2;
      initParticles();
    };

    const initParticles = () => {
      const count = Math.min(Math.floor((width * height) / 13000), 95);
      particles = [];
      const spreadX = width * 0.9;
      const spreadY = height * 0.9;
      const spreadZ = 500;

      for (let i = 0; i < count; i++) {
        particles.push({
          x: (Math.random() - 0.5) * spreadX,
          y: (Math.random() - 0.5) * spreadY,
          z: (Math.random() - 0.5) * spreadZ,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          vz: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 1.6 + 0.8,
          baseAlpha: Math.random() * 0.4 + 0.2,
        });
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.rawX = e.clientX;
      mouse.rawY = e.clientY;
      // Mouse angle in radians between -0.2 and 0.2
      mouse.targetX = ((e.clientX - centerX) / centerX) * 0.22;
      mouse.targetY = ((e.clientY - centerY) / centerY) * 0.18;
    };

    const onMouseLeave = () => {
      mouse.rawX = -1000;
      mouse.rawY = -1000;
      mouse.targetX = 0;
      mouse.targetY = 0;
    };

    // Pre-allocated projected array to prevent GC pauses
    interface ProjectedPoint {
      px: number;
      py: number;
      pz: number;
      scale: number;
      alpha: number;
      size: number;
    }
    let projected: ProjectedPoint[] = [];

    const render = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse 3D camera rotation interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const cosY = Math.cos(mouse.x);
      const sinY = Math.sin(mouse.x);
      const cosX = Math.cos(-mouse.y);
      const sinX = Math.sin(-mouse.y);

      // 1. Render Atmospheric Crimson Aurora Orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < 0.1 || orb.x > 0.9) orb.vx *= -1;
        if (orb.y < 0.1 || orb.y > 0.9) orb.vy *= -1;

        const px = (orb.x + mouse.x * 0.2) * width;
        const py = (orb.y + mouse.y * 0.2) * height;
        const r = orb.radius * Math.min(width, height);

        const gradient = ctx.createRadialGradient(px, py, 0, px, py, r);
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      });

      // 2. High-precision interactive mouse aura
      if (mouse.rawX > 0 && mouse.rawY > 0) {
        const radGrad = ctx.createRadialGradient(
          mouse.rawX,
          mouse.rawY,
          0,
          mouse.rawX,
          mouse.rawY,
          280
        );
        radGrad.addColorStop(0, "rgba(224, 82, 105, 0.08)");
        radGrad.addColorStop(0.5, "rgba(199, 44, 70, 0.02)");
        radGrad.addColorStop(1, "rgba(8, 9, 11, 0)");
        ctx.fillStyle = radGrad;
        ctx.fillRect(0, 0, width, height);
      }

      const boundX = width * 0.55;
      const boundY = height * 0.55;
      const boundZ = 280;

      // 3. Project 3D particles into 2D camera viewport
      projected = [];
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Wrap boundaries in 3D box
        if (p.x < -boundX) p.x = boundX;
        else if (p.x > boundX) p.x = -boundX;
        if (p.y < -boundY) p.y = boundY;
        else if (p.y > boundY) p.y = -boundY;
        if (p.z < -boundZ) p.z = boundZ;
        else if (p.z > boundZ) p.z = -boundZ;

        // 3D Matrix Rotation (Y axis then X axis)
        const rotX = p.x * cosY + p.z * sinY;
        const rotZ1 = -p.x * sinY + p.z * cosY;
        const rotY = p.y * cosX - rotZ1 * sinX;
        const rotZ = p.y * sinX + rotZ1 * cosX;

        // Perspective division
        const depth = CAMERA_DIST + rotZ;
        if (depth <= 20) continue; // Behind camera plane

        const scale = CAMERA_DIST / depth;
        const projX = centerX + rotX * scale;
        const projY = centerY + rotY * scale;

        // Mouse 3D repulsion
        if (mouse.rawX > 0 && mouse.rawY > 0) {
          const dx = mouse.rawX - projX;
          const dy = mouse.rawY - projY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 1.5;
            p.x -= (dx / dist) * force * 2;
            p.y -= (dy / dist) * force * 2;
            p.z += force * 3;
          }
        }

        const alpha = Math.min(1, Math.max(0.08, p.baseAlpha * scale * 0.95));
        const renderedSize = Math.max(0.6, p.size * scale);

        projected.push({
          px: projX,
          py: projY,
          pz: rotZ,
          scale,
          alpha,
          size: renderedSize,
        });

        // Draw particle dot with depth-shaded glow
        ctx.beginPath();
        ctx.arc(projX, projY, renderedSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 82, 105, ${alpha})`;
        ctx.fill();
      }

      // 4. Render 3D Neural Constellation Interconnects
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist2d = Math.sqrt(dx * dx + dy * dy);

          if (dist2d < 125) {
            const depthDiff = Math.abs(p1.pz - p2.pz);
            if (depthDiff < 140) {
              const lineAlpha = (1 - dist2d / 125) * (1 - depthDiff / 140) * 0.18 * p1.scale;
              if (lineAlpha > 0.015) {
                ctx.beginPath();
                ctx.moveTo(p1.px, p1.py);
                ctx.lineTo(p2.px, p2.py);
                ctx.strokeStyle = `rgba(199, 44, 70, ${lineAlpha})`;
                ctx.lineWidth = Math.max(0.4, 0.7 * p1.scale);
                ctx.stroke();
              }
            }
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
      className="fixed inset-0 pointer-events-none z-0 opacity-95"
      aria-hidden="true"
    />
  );
}
