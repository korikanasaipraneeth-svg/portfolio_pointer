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
  color: string;
}

interface Polyhedron3D {
  cx: number;
  cy: number;
  cz: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  speedX: number;
  speedY: number;
  speedZ: number;
  color: string;
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
    let polyhedra: Polyhedron3D[] = [];
    const CAMERA_DIST = 650;

    let mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      rawX: -1000,
      rawY: -1000,
      radius: 200,
    };
    let isVisible = true;
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;
    let scrollVelocity = 0;

    // Atmospheric Crimson & Obsidian Nebula Orbs
    const orbs = [
      { x: 0.35, y: 0.40, radius: 0.52, vx: 0.0003, vy: 0.0002, color: "rgba(224, 82, 105, 0.12)" },
      { x: 0.70, y: 0.45, radius: 0.45, vx: -0.0002, vy: 0.0003, color: "rgba(185, 28, 28, 0.09)" },
      { x: 0.50, y: 0.80, radius: 0.50, vx: 0.0002, vy: -0.0002, color: "rgba(120, 20, 40, 0.05)" },
      { x: 0.20, y: 0.75, radius: 0.38, vx: -0.00015, vy: -0.0002, color: "rgba(56, 189, 248, 0.03)" },
    ];

    // Octahedron canonical vertices
    const OCTA_VERTICES = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1],
    ];

    // Octahedron edges connecting vertex indices
    const OCTA_EDGES = [
      [0, 2], [2, 1], [1, 3], [3, 0], // Middle ring
      [4, 0], [4, 1], [4, 2], [4, 3], // Top pyramid
      [5, 0], [5, 1], [5, 2], [5, 3], // Bottom pyramid
    ];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      centerX = width / 2;
      centerY = height / 2;
      initScene();
    };

    const initScene = () => {
      const count = Math.min(Math.floor((width * height) / 12000), 105);
      particles = [];
      const spreadX = width * 1.0;
      const spreadY = height * 1.0;
      const spreadZ = 600;

      const colors = [
        "rgba(224, 82, 105,", // Crimson
        "rgba(244, 114, 182,", // Soft Rose
        "rgba(56, 189, 248,",  // Cyan accent
        "rgba(255, 255, 255,", // Pure starlight
      ];

      for (let i = 0; i < count; i++) {
        const colorPrefix = colors[Math.floor(Math.random() * colors.length)];
        particles.push({
          x: (Math.random() - 0.5) * spreadX,
          y: (Math.random() - 0.5) * spreadY,
          z: (Math.random() - 0.5) * spreadZ,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          vz: (Math.random() - 0.5) * 0.35,
          size: Math.random() * 1.8 + 0.8,
          baseAlpha: Math.random() * 0.45 + 0.2,
          color: colorPrefix,
        });
      }

      // Initialize 4 drifting 3D wireframe polyhedra
      polyhedra = [
        {
          cx: -width * 0.32,
          cy: -height * 0.25,
          cz: 120,
          vx: 0.12,
          vy: 0.08,
          vz: 0.05,
          radius: 54,
          rotX: 0.2,
          rotY: 0.4,
          rotZ: 0.1,
          speedX: 0.007,
          speedY: 0.012,
          speedZ: 0.005,
          color: "rgba(224, 82, 105, 0.22)",
        },
        {
          cx: width * 0.36,
          cy: -height * 0.15,
          cz: -80,
          vx: -0.1,
          vy: 0.06,
          vz: -0.04,
          radius: 68,
          rotX: 1.1,
          rotY: 0.6,
          rotZ: 0.3,
          speedX: -0.006,
          speedY: 0.009,
          speedZ: 0.008,
          color: "rgba(239, 68, 68, 0.18)",
        },
        {
          cx: width * 0.28,
          cy: height * 0.32,
          cz: 60,
          vx: -0.08,
          vy: -0.09,
          vz: 0.03,
          radius: 46,
          rotX: 0.5,
          rotY: 1.2,
          rotZ: 0.8,
          speedX: 0.009,
          speedY: -0.008,
          speedZ: 0.006,
          color: "rgba(56, 189, 248, 0.16)",
        },
        {
          cx: -width * 0.38,
          cy: height * 0.28,
          cz: -120,
          vx: 0.07,
          vy: -0.06,
          vz: -0.02,
          radius: 60,
          rotX: 0.8,
          rotY: 0.3,
          rotZ: 1.4,
          speedX: 0.005,
          speedY: 0.008,
          speedZ: -0.007,
          color: "rgba(199, 44, 70, 0.15)",
        },
      ];
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.rawX = e.clientX;
      mouse.rawY = e.clientY;
      mouse.targetX = ((e.clientX - centerX) / centerX) * 0.25;
      mouse.targetY = ((e.clientY - centerY) / centerY) * 0.2;
    };

    const onMouseLeave = () => {
      mouse.rawX = -1000;
      mouse.rawY = -1000;
      mouse.targetX = 0;
      mouse.targetY = 0;
    };

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
      scrollVelocity += (delta * 0.35 - scrollVelocity) * 0.4;
    };

    interface ProjectedPoint {
      px: number;
      py: number;
      pz: number;
      scale: number;
      alpha: number;
      size: number;
      color: string;
    }
    let projected: ProjectedPoint[] = [];

    const render = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse 3D camera rotation interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Dampen scroll velocity
      scrollVelocity *= 0.92;

      const cosY = Math.cos(mouse.x);
      const sinY = Math.sin(mouse.x);
      const cosX = Math.cos(-mouse.y);
      const sinX = Math.sin(-mouse.y);

      // 1. Render Atmospheric Crimson & Deep Aura Orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < 0.1 || orb.x > 0.9) orb.vx *= -1;
        if (orb.y < 0.1 || orb.y > 0.9) orb.vy *= -1;

        const px = (orb.x + mouse.x * 0.15) * width;
        const py = (orb.y + mouse.y * 0.15) * height;
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
          320
        );
        radGrad.addColorStop(0, "rgba(224, 82, 105, 0.09)");
        radGrad.addColorStop(0.5, "rgba(199, 44, 70, 0.025)");
        radGrad.addColorStop(1, "rgba(8, 9, 11, 0)");
        ctx.fillStyle = radGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // 3. Render 3D Floating Polyhedra (Wireframe Octahedrons)
      polyhedra.forEach((poly) => {
        poly.rotX += poly.speedX;
        poly.rotY += poly.speedY;
        poly.rotZ += poly.speedZ;

        poly.cx += poly.vx;
        poly.cy += poly.vy;
        poly.cz += poly.vz - scrollVelocity * 0.2;

        const boundPX = width * 0.55;
        const boundPY = height * 0.55;
        if (poly.cx < -boundPX) poly.cx = boundPX;
        else if (poly.cx > boundPX) poly.cx = -boundPX;
        if (poly.cy < -boundPY) poly.cy = boundPY;
        else if (poly.cy > boundPY) poly.cy = -boundPY;
        if (poly.cz < -200) poly.cz = 200;
        else if (poly.cz > 200) poly.cz = -200;

        // Rotate polyhedra local vertices
        const cX = Math.cos(poly.rotX);
        const sX = Math.sin(poly.rotX);
        const cY = Math.cos(poly.rotY);
        const sY = Math.sin(poly.rotY);
        const cZ = Math.cos(poly.rotZ);
        const sZ = Math.sin(poly.rotZ);

        // Project vertices
        const projectedVertices: { x: number; y: number; visible: boolean }[] = [];

        OCTA_VERTICES.forEach((vert) => {
          // Local rotation
          let lx = vert[0] * poly.radius;
          let ly = vert[1] * poly.radius;
          let lz = vert[2] * poly.radius;

          // X rot
          let y1 = ly * cX - lz * sX;
          let z1 = ly * sX + lz * cX;
          // Y rot
          let x2 = lx * cY + z1 * sY;
          let z2 = -lx * sY + z1 * cY;
          // Z rot
          let x3 = x2 * cZ - y1 * sZ;
          let y3 = x2 * sZ + y1 * cZ;

          // World pos
          const wx = poly.cx + x3;
          const wy = poly.cy + y3;
          const wz = poly.cz + z2;

          // Camera world rotation
          const rX = wx * cosY + wz * sinY;
          const rZ1 = -wx * sinY + wz * cosY;
          const rY = wy * cosX - rZ1 * sinX;
          const rZ = wy * sinX + rZ1 * cosX;

          const depth = CAMERA_DIST + rZ;
          if (depth > 20) {
            const scale = CAMERA_DIST / depth;
            projectedVertices.push({
              x: centerX + rX * scale,
              y: centerY + rY * scale,
              visible: true,
            });
          } else {
            projectedVertices.push({ x: 0, y: 0, visible: false });
          }
        });

        // Draw wireframe edges
        ctx.strokeStyle = poly.color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        OCTA_EDGES.forEach(([i, j]) => {
          const v1 = projectedVertices[i];
          const v2 = projectedVertices[j];
          if (v1 && v2 && v1.visible && v2.visible) {
            ctx.moveTo(v1.x, v1.y);
            ctx.lineTo(v2.x, v2.y);
          }
        });
        ctx.stroke();

        // Small glowing vertex dots
        projectedVertices.forEach((v) => {
          if (v.visible) {
            ctx.fillStyle = poly.color;
            ctx.beginPath();
            ctx.arc(v.x, v.y, 1.8, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      });

      const boundX = width * 0.58;
      const boundY = height * 0.58;
      const boundZ = 300;

      // 4. Project 3D particles into 2D camera viewport
      projected = [];
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz - scrollVelocity * 0.15; // Warp on scroll

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

        // Mouse 3D gentle magnetic repulsion
        if (mouse.rawX > 0 && mouse.rawY > 0) {
          const dx = mouse.rawX - projX;
          const dy = mouse.rawY - projY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 1.6;
            p.x -= (dx / dist) * force * 2.2;
            p.y -= (dy / dist) * force * 2.2;
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
          color: p.color,
        });

        // Draw particle dot with depth-shaded glow
        ctx.beginPath();
        ctx.arc(projX, projY, renderedSize, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${alpha})`;
        ctx.fill();
      }

      // 5. Render 3D Neural Constellation Interconnects
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist2d = Math.sqrt(dx * dx + dy * dy);

          if (dist2d < 120) {
            const depthDiff = Math.abs(p1.pz - p2.pz);
            if (depthDiff < 130) {
              const lineAlpha = (1 - dist2d / 120) * (1 - depthDiff / 130) * 0.16 * p1.scale;
              if (lineAlpha > 0.015) {
                ctx.beginPath();
                ctx.moveTo(p1.px, p1.py);
                ctx.lineTo(p2.px, p2.py);
                ctx.strokeStyle = `rgba(199, 44, 70, ${lineAlpha})`;
                ctx.lineWidth = Math.max(0.3, 0.6 * p1.scale);
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
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    resize();
    animId = requestAnimationFrame(render);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
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
