"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { sound } from "@/lib/audio";
import { SkillItem } from "@/data/skills";

// Authentic Brand & Specialty Icons for Tech Stack
export function TechIcon({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
  switch (name.toLowerCase()) {
    case "terminal":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="24" fill="#142B1E" stroke="#22C55E" strokeWidth="4" />
          <path d="M34 40L60 64L34 88" stroke="#22C55E" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <line x1="68" y1="88" x2="98" y2="88" stroke="#22C55E" strokeWidth="10" strokeLinecap="round" />
        </svg>
      );
    case "netlify":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <circle cx="64" cy="64" r="14" fill="#00C7B7" />
          <rect x="18" y="58" width="22" height="12" rx="6" fill="#00C7B7" />
          <rect x="88" y="58" width="22" height="12" rx="6" fill="#00C7B7" />
          <rect x="58" y="18" width="12" height="22" rx="6" fill="#00C7B7" />
          <rect x="58" y="88" width="12" height="22" rx="6" fill="#00C7B7" />
          <line x1="64" y1="36" x2="64" y2="92" stroke="#00C7B7" strokeWidth="5" strokeDasharray="4 4" />
          <line x1="36" y1="64" x2="92" y2="64" stroke="#00C7B7" strokeWidth="5" strokeDasharray="4 4" />
        </svg>
      );
    case "vercel":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <polygon points="64,18 116,108 12,108" fill="#FFFFFF" />
        </svg>
      );
    case "firebase":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#FFA000" d="M24 96L46 16l18 36-16 26z" />
          <path fill="#F57C00" d="M64 52l18-36 22 80H64z" />
          <path fill="#FFCA28" d="M104 96L64 52 48 78l40 24z" />
          <path fill="#FFA000" d="M24 96l40 24 40-24L64 52z" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#FFFFFF" fillRule="evenodd" clipRule="evenodd" d="M64 0C28.7 0 0 28.7 0 64c0 28.3 18.3 52.3 43.8 60.8 3.2.6 4.4-1.4 4.4-3.1v-11.7c-17.8 3.9-21.6-8.6-21.6-8.6-2.9-7.4-7.1-9.4-7.1-9.4-5.8-4 .4-3.9.4-3.9 6.4.5 9.8 6.6 9.8 6.6 5.7 9.8 15 7 18.6 5.3 0.6-4.1 2.2-7 4.1-8.6-14.2-1.6-29.2-7.1-29.2-31.6 0-7 2.5-12.7 6.6-17.2-.7-1.6-2.9-8.1.6-17 0 0 5.4-1.7 17.6 6.6 5.1-1.4 10.6-2.2 16.1-2.2s11 0.7 16.1 2.2c12.2-8.3 17.6-6.6 17.6-6.6 3.5 8.9 1.3 15.4.6 17 4.1 4.5 6.6 10.2 6.6 17.2 0 24.6-15 30-29.3 31.6 2.3 2 4.3 5.9 4.3 11.9v17.6c0 1.7 1.2 3.7 4.5 3.1C109.7 116.3 128 92.3 128 64c0-35.3-28.7-64-64-64z"/>
        </svg>
      );
    case "git":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#F05032" d="M124.7 54.8L73.2 3.3c-4.4-4.4-11.6-4.4-16 0L3.3 57.2c-4.4 4.4-4.4 11.6 0 16l51.5 51.5c4.4 4.4 11.6 4.4 16 0l53.9-53.9c4.4-4.4 4.4-11.6 0-16z"/>
          <path fill="#FFFFFF" d="M83.4 56.4c-3.1-3.1-7.8-3.6-11.4-1.7L60.6 43.3V34c2.9-1.8 4.8-5 4.8-8.6 0-5.7-4.6-10.3-10.3-10.3s-10.3 4.6-10.3 10.3c0 3.6 1.9 6.8 4.8 8.6v35.4c-2.9 1.8-4.8 5-4.8 8.6 0 5.7 4.6 10.3 10.3 10.3s10.3-4.6 10.3-10.3c0-3.3-1.6-6.2-4.1-8.1l11.1-11.1c2 1 4.4 1.6 7 1.6 8 0 14.5-6.5 14.5-14.5 0-3.9-1.5-7.4-4.2-9.9z"/>
        </svg>
      );
    case "tailwind":
    case "tailwind css":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#06B6D4" d="M64 32c-17.6 0-28.8 8.8-33.6 26.4 6.4-8.8 14.4-12 24-9.6 5.5 1.4 9.4 5.3 13.8 9.7 7.1 7.2 15.3 15.5 33.4 15.5 17.6 0 28.8-8.8 33.6-26.4-6.4 8.8-14.4 12-24 9.6-5.5-1.4-9.4-5.3-13.8-9.7-7.1-7.2-15.3-15.5-33.4-15.5zM30.4 64C12.8 64 1.6 72.8-3.2 90.4c6.4-8.8 14.4-12 24-9.6 5.5 1.4 9.4 5.3 13.8 9.7 7.1 7.2 15.3 15.5 33.4 15.5 17.6 0 28.8-8.8 33.6-26.4-6.4 8.8-14.4 12-24 9.6-5.5-1.4-9.4-5.3-13.8-9.7-7.1-7.2-15.3-15.5-33.4-15.5z"/>
        </svg>
      );
    case "node.js":
    case "node.js (basic)":
    case "node":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <polygon points="64,10 114,38 114,90 64,118 14,90 14,38" fill="none" stroke="#22C55E" strokeWidth="8" strokeLinejoin="round" />
          <text x="64" y="78" textAnchor="middle" fill="#22C55E" fontSize="42" fontWeight="bold" fontFamily="monospace">JS</text>
        </svg>
      );
    case "express.js":
    case "express":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="24" fill="#18181B" stroke="#71717A" strokeWidth="4" />
          <text x="64" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="38" fontWeight="bold" fontFamily="monospace">ex</text>
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <ellipse cx="64" cy="64" rx="14" ry="14" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="5.5" fill="none">
            <ellipse cx="64" cy="64" rx="54" ry="20"/>
            <ellipse cx="64" cy="64" rx="54" ry="20" transform="rotate(60 64 64)"/>
            <ellipse cx="64" cy="64" rx="54" ry="20" transform="rotate(120 64 64)"/>
          </g>
        </svg>
      );
    case "next.js":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <circle cx="64" cy="64" r="56" fill="#000000" stroke="#FFFFFF" strokeWidth="6" />
          <text x="64" y="82" textAnchor="middle" fill="#FFFFFF" fontSize="54" fontWeight="900" fontFamily="sans-serif">N</text>
        </svg>
      );
    case "python":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#387EB8" d="M63.7 3.5c-15.6 0-25 6.7-25 15.6v11.4h25.7v3.7H29.1c-9.1 0-16.7 5.5-19.2 16-2.9 12.1-3 19.7 0 32.3 2.2 9.2 7.6 16 16.7 16h9.9v-14.3c0-10.3 8.8-19.4 19.4-19.4h25.4V39.4c0-8.9-9.5-15.6-25.1-15.6h-2.1V3.5h9.6zm-13.8 9.3c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7z"/>
          <path fill="#FFE052" d="M64.3 124.5c15.6 0 25-6.7 25-15.6v-11.4H63.6v-3.7h35.3c9.1 0 16.7-5.5 19.2-16 2.9-12.1 3-19.7 0-32.3-2.2-9.2-7.6-16-16.7-16h-9.9v14.3c0 10.3-8.8 19.4-19.4 19.4H46.7v25.4c0 8.9 9.5 15.6 25.1 15.6h2.1v20.3h-9.6zm13.8-9.3c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7z"/>
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="20" fill="#F7DF1E"/>
          <text x="64" y="88" textAnchor="middle" fill="#000000" fontSize="62" fontWeight="900" fontFamily="sans-serif">JS</text>
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="20" fill="#3178C6"/>
          <text x="64" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="62" fontWeight="900" fontFamily="sans-serif">TS</text>
        </svg>
      );
    case "css":
    case "css3":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="20" fill="#1572B6"/>
          <text x="64" y="82" textAnchor="middle" fill="#FFFFFF" fontSize="42" fontWeight="900" fontFamily="sans-serif">CSS</text>
        </svg>
      );
    case "html":
    case "html5":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <polygon points="20,12 108,12 98,110 64,120 30,110" fill="#E44D26"/>
          <text x="64" y="86" textAnchor="middle" fill="#FFFFFF" fontSize="66" fontWeight="900" fontFamily="sans-serif">5</text>
        </svg>
      );
    case "fastapi":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <circle cx="64" cy="64" r="60" fill="#009688"/>
          <path d="M72 16L32 72h24l-8 40 48-60H68l8-36h-4z" fill="#FFFFFF"/>
        </svg>
      );
    case "java":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#5382A1" d="M47.8 97.4c13.7 1.8 31.9 1.1 43.9-6.3-12.3 2.1-27.4.9-38.4-1.8-1.9-.4-3.7-.8-5.5-1.2v9.3zm-1.8 15.8c15 1.4 34.6 1.1 48.7-5.3-12.7 1.8-28.5 1.1-41.2-1.2-2.5-.5-5.1-1.1-7.5-1.8v8.3z"/>
          <path fill="#E76F00" d="M72.2 15.5c-7.9 12-3.1 22.8 4.2 32.5 4.8 6.4 7.2 12.8 5 19.8-1.5 4.8-4.7 8.8-8.9 11.8 8.1-4.8 12.8-11.7 12.8-20.2 0-10.4-8.8-18.4-13.1-24.9-3.7-5.5-3.3-11.9 0-19z"/>
          <path fill="#E76F00" d="M54.8 28.5c-4.9 9.8-1.6 18.2 4.1 25.8 4.1 5.4 5.9 10.7 4.1 16.5-1.2 3.9-3.9 7.2-7.4 9.6 6.8-3.9 10.6-9.6 10.6-16.5 0-8.5-7.2-15-10.7-20.3-3.1-4.6-2.7-9.8-.7-15.1z"/>
        </svg>
      );
    case "c":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <polygon points="64,12 114,38 114,90 64,116 14,90 14,38" fill="#659AD2"/>
          <text x="64" y="86" textAnchor="middle" fill="#FFFFFF" fontSize="64" fontWeight="900" fontFamily="sans-serif">C</text>
        </svg>
      );
    case "c++":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <polygon points="64,12 114,38 114,90 64,116 14,90 14,38" fill="#00599C"/>
          <text x="64" y="82" textAnchor="middle" fill="#FFFFFF" fontSize="46" fontWeight="900" fontFamily="sans-serif">C++</text>
        </svg>
      );
    case "docker":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#2496ED" d="M124.5 56.6c-1.8-1.3-4.5-1.7-6.8-1-1.3.4-2.5 1-3.6 1.8-4.2-3.8-10.2-5.7-18.1-5.7-1.1 0-2.2.1-3.3.2-3-8.8-9.4-15.1-18.4-18.2l-2.4 4.5c7.3 2.5 12.4 7.6 14.8 14.8-8.3.8-15.3 4.2-20.1 9.7H3.5C1.6 62.7 0 66.8 0 71.3c0 23.4 18.8 42.4 42 42.4 20.4 0 37.6-14.7 41.3-34.4 12.7 1.3 25-1.6 33.6-8 3.5-2.6 6.1-5.9 7.6-9.7 1.2-3.1 1.2-3.8 0-5zM22.2 46.8h11.7v11.7H22.2V46.8zm15.6 0h11.7v11.7H37.8V46.8zm15.6 0h11.7v11.7H53.4V46.8zm-31.2 15.6h11.7v11.7H22.2V62.4zm15.6 0h11.7v11.7H37.8V62.4zm15.6 0h11.7v11.7H53.4V62.4zm15.6 0h11.7v11.7H69V62.4zm-15.6-31.2h11.7v11.7H53.4V31.2z"/>
        </svg>
      );
    case "mysql":
    case "postgresql":
    case "sql":
    case "dbms":
    case "database management":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <ellipse cx="64" cy="30" rx="46" ry="16" fill="#336791"/>
          <path d="M18 30v34c0 8.8 20.6 16 46 16s46-7.2 46-16V30c0 8.8-20.6 16-46 16S18 38.8 18 30z" fill="#4B89BC"/>
          <path d="M18 64v34c0 8.8 20.6 16 46 16s46-7.2 46-16V64c0 8.8-20.6 16-46 16S18 72.8 18 64z" fill="#295475"/>
        </svg>
      );
    case "flutter":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <polygon points="78,4 18,64 38,84 118,4" fill="#47C5FB"/>
          <polygon points="78,64 48,94 68,114 118,64" fill="#02569B"/>
          <polygon points="48,94 68,74 88,94 68,114" fill="#0175C2"/>
        </svg>
      );
    case "vs code":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#007ACC" d="M96.7 125.8l24.7-12c4.4-2.1 7.2-6.5 7.2-11.4V25.6c0-4.9-2.8-9.3-7.2-11.4l-24.7-12c-3.7-1.8-8.1-1.3-11.4 1.3L37.2 43.6 18.5 29.4c-3.4-2.6-8.2-2.3-11.3.8L1.6 35.8c-2.1 2.1-2.1 5.5 0 7.6l23.5 20.6L1.6 84.6c-2.1 2.1-2.1 5.5 0 7.6l5.6 5.6c3.1 3.1 7.9 3.4 11.3.8l18.7-14.2 48.1 40.1c3.3 2.6 7.7 3.1 11.4 1.3zM96 36.3L56.9 64 96 91.7V36.3z"/>
        </svg>
      );
    case "postman":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <circle cx="64" cy="64" r="60" fill="#FF6C37"/>
          <path d="M92 48c-4.4-4.4-11.6-4.4-16 0L52 72l-12-12c-4.4-4.4-11.6-4.4-16 0s-4.4 11.6 0 16l20 20c4.4 4.4 11.6 4.4 16 0l32-32c4.4-4.4 4.4-11.6 0-16z" fill="#FFFFFF"/>
        </svg>
      );
    case "swagger":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <circle cx="64" cy="64" r="60" fill="#85EA2D"/>
          <text x="64" y="80" textAnchor="middle" fill="#000000" fontSize="54" fontWeight="900" fontFamily="sans-serif">{`{}`}</text>
        </svg>
      );
    case "vite":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#BD34FE" d="M118.2 14.5L66.7 122.3c-1.1 2.3-4.3 2.3-5.4 0L9.8 14.5c-1.3-2.6.9-5.6 3.8-5l50.4 10.7 50.4-10.7c2.9-.6 5.1 2.4 3.8 5z"/>
          <path fill="#FFD62E" d="M72 16L38 68h24l-8 40 46-58H76l8-34h-12z"/>
        </svg>
      );
    case "full-stack development":
    case "full-stack":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <polygon points="64,16 112,38 64,60 16,38" fill="#A855F7"/>
          <polygon points="64,52 112,74 64,96 16,74" fill="#C084FC" opacity="0.8"/>
          <polygon points="64,88 112,110 64,132 16,110" fill="#E9D5FF" opacity="0.6"/>
        </svg>
      );
    case "rest api integration":
    case "rest api":
    case "api":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <circle cx="28" cy="64" r="16" fill="#0284C7"/>
          <circle cx="100" cy="34" r="14" fill="#38BDF8"/>
          <circle cx="100" cy="94" r="14" fill="#38BDF8"/>
          <path d="M28 64 L100 34 M28 64 L100 94" stroke="#38BDF8" strokeWidth="6" strokeDasharray="6 4"/>
          <circle cx="64" cy="49" r="6" fill="#FFFFFF"/>
          <circle cx="64" cy="79" r="6" fill="#FFFFFF"/>
        </svg>
      );
    case "ui/ux design":
    case "ui/ux":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect x="18" y="22" width="92" height="84" rx="14" fill="none" stroke="#EC4899" strokeWidth="8"/>
          <line x1="18" y1="50" x2="110" y2="50" stroke="#EC4899" strokeWidth="6"/>
          <circle cx="36" cy="36" r="5" fill="#F472B6"/>
          <circle cx="52" cy="36" r="5" fill="#F472B6"/>
          <circle cx="68" cy="36" r="5" fill="#F472B6"/>
          <rect x="30" y="62" width="30" height="32" rx="6" fill="#EC4899"/>
          <rect x="68" y="62" width="30" height="14" rx="4" fill="#F472B6"/>
          <rect x="68" y="82" width="30" height="12" rx="4" fill="#FBCFE8"/>
        </svg>
      );
    case "ai tool integration":
    case "ai tools":
    case "ai":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <circle cx="64" cy="64" r="44" fill="#E05269" opacity="0.2"/>
          <path d="M64 16 L74 54 L112 64 L74 74 L64 112 L54 74 L16 64 L54 54 Z" fill="#E05269"/>
          <circle cx="64" cy="64" r="10" fill="#FFFFFF"/>
        </svg>
      );
    case "problem solving":
    case "problem":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <circle cx="64" cy="64" r="50" fill="none" stroke="#F59E0B" strokeWidth="8"/>
          <circle cx="64" cy="64" r="28" fill="none" stroke="#FBBF24" strokeWidth="6" strokeDasharray="10 6"/>
          <circle cx="64" cy="64" r="12" fill="#F59E0B"/>
          <line x1="64" y1="6" x2="64" y2="24" stroke="#F59E0B" strokeWidth="8" strokeLinecap="round"/>
          <line x1="64" y1="104" x2="64" y2="122" stroke="#F59E0B" strokeWidth="8" strokeLinecap="round"/>
          <line x1="6" y1="64" x2="24" y2="64" stroke="#F59E0B" strokeWidth="8" strokeLinecap="round"/>
          <line x1="104" y1="64" x2="122" y2="64" stroke="#F59E0B" strokeWidth="8" strokeLinecap="round"/>
        </svg>
      );
    case "responsive web design":
    case "responsive":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect x="16" y="20" width="76" height="54" rx="8" fill="none" stroke="#3B82F6" strokeWidth="6"/>
          <line x1="16" y1="60" x2="92" y2="60" stroke="#3B82F6" strokeWidth="4"/>
          <rect x="68" y="44" width="44" height="64" rx="8" fill="#1E293B" stroke="#60A5FA" strokeWidth="6"/>
          <line x1="84" y1="96" x2="96" y2="96" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect x="20" y="20" width="88" height="88" rx="20" fill="none" stroke="#E05269" strokeWidth="8" />
          <path d="M44 64h40M64 44v40" stroke="#E05269" strokeWidth="8" strokeLinecap="round" />
        </svg>
      );
  }
}

// Brand Glow & Theme Definitions
export const BRAND_THEMES: Record<string, { glow: string; border: string; bg: string }> = {
  python: { glow: "rgba(56, 126, 184, 0.5)", border: "border-[#387EB8]/60", bg: "rgba(10, 16, 28, 0.75)" },
  javascript: { glow: "rgba(247, 223, 30, 0.5)", border: "border-[#F7DF1E]/60", bg: "rgba(25, 23, 10, 0.75)" },
  typescript: { glow: "rgba(49, 120, 198, 0.5)", border: "border-[#3178C6]/60", bg: "rgba(10, 17, 30, 0.75)" },
  react: { glow: "rgba(97, 218, 251, 0.55)", border: "border-[#61DAFB]/60", bg: "rgba(8, 20, 28, 0.75)" },
  "node.js": { glow: "rgba(34, 197, 94, 0.5)", border: "border-[#22C55E]/60", bg: "rgba(8, 22, 14, 0.75)" },
  "node.js (basic)": { glow: "rgba(34, 197, 94, 0.5)", border: "border-[#22C55E]/60", bg: "rgba(8, 22, 14, 0.75)" },
  "express.js": { glow: "rgba(255, 255, 255, 0.4)", border: "border-white/50", bg: "rgba(20, 20, 24, 0.75)" },
  "next.js": { glow: "rgba(255, 255, 255, 0.4)", border: "border-white/50", bg: "rgba(18, 18, 22, 0.75)" },
  tailwind: { glow: "rgba(6, 182, 212, 0.55)", border: "border-[#06B6D4]/60", bg: "rgba(6, 20, 26, 0.75)" },
  "tailwind css": { glow: "rgba(6, 182, 212, 0.55)", border: "border-[#06B6D4]/60", bg: "rgba(6, 20, 26, 0.75)" },
  html5: { glow: "rgba(228, 77, 38, 0.55)", border: "border-[#E44D26]/60", bg: "rgba(26, 12, 8, 0.75)" },
  html: { glow: "rgba(228, 77, 38, 0.55)", border: "border-[#E44D26]/60", bg: "rgba(26, 12, 8, 0.75)" },
  css3: { glow: "rgba(21, 114, 182, 0.55)", border: "border-[#1572B6]/60", bg: "rgba(8, 16, 28, 0.75)" },
  css: { glow: "rgba(21, 114, 182, 0.55)", border: "border-[#1572B6]/60", bg: "rgba(8, 16, 28, 0.75)" },
  git: { glow: "rgba(240, 80, 50, 0.55)", border: "border-[#F05032]/60", bg: "rgba(26, 12, 10, 0.75)" },
  github: { glow: "rgba(255, 255, 255, 0.4)", border: "border-white/50", bg: "rgba(18, 20, 26, 0.75)" },
  terminal: { glow: "rgba(34, 197, 94, 0.55)", border: "border-[#22C55E]/60", bg: "rgba(8, 24, 12, 0.75)" },
  vercel: { glow: "rgba(255, 255, 255, 0.4)", border: "border-white/50", bg: "rgba(18, 18, 24, 0.75)" },
  netlify: { glow: "rgba(0, 199, 183, 0.55)", border: "border-[#00C7B7]/60", bg: "rgba(6, 22, 22, 0.75)" },
  firebase: { glow: "rgba(255, 179, 0, 0.55)", border: "border-[#FFB300]/60", bg: "rgba(26, 18, 6, 0.75)" },
  fastapi: { glow: "rgba(0, 150, 136, 0.55)", border: "border-[#009688]/60", bg: "rgba(6, 22, 20, 0.75)" },
  docker: { glow: "rgba(36, 150, 237, 0.55)", border: "border-[#2496ED]/60", bg: "rgba(8, 18, 30, 0.75)" },
  flutter: { glow: "rgba(71, 197, 251, 0.55)", border: "border-[#47C5FB]/60", bg: "rgba(8, 20, 32, 0.75)" },
  java: { glow: "rgba(231, 111, 0, 0.55)", border: "border-[#E76F00]/60", bg: "rgba(26, 14, 6, 0.75)" },
  c: { glow: "rgba(101, 154, 210, 0.55)", border: "border-[#659AD2]/60", bg: "rgba(10, 18, 28, 0.75)" },
  "c++": { glow: "rgba(0, 89, 156, 0.55)", border: "border-[#00599C]/60", bg: "rgba(8, 16, 28, 0.75)" },
  mysql: { glow: "rgba(0, 117, 143, 0.55)", border: "border-[#00758F]/60", bg: "rgba(6, 18, 24, 0.75)" },
  postgresql: { glow: "rgba(51, 103, 145, 0.55)", border: "border-[#336791]/60", bg: "rgba(8, 16, 26, 0.75)" },
  sql: { glow: "rgba(51, 103, 145, 0.55)", border: "border-[#336791]/60", bg: "rgba(8, 16, 26, 0.75)" },
  dbms: { glow: "rgba(51, 103, 145, 0.55)", border: "border-[#336791]/60", bg: "rgba(8, 16, 26, 0.75)" },
  "vs code": { glow: "rgba(0, 122, 204, 0.55)", border: "border-[#007ACC]/60", bg: "rgba(6, 16, 28, 0.75)" },
  postman: { glow: "rgba(255, 108, 55, 0.55)", border: "border-[#FF6C37]/60", bg: "rgba(26, 12, 8, 0.75)" },
  swagger: { glow: "rgba(133, 234, 41, 0.55)", border: "border-[#85EA29]/60", bg: "rgba(16, 24, 8, 0.75)" },
  "full-stack development": { glow: "rgba(168, 85, 247, 0.55)", border: "border-[#A855F7]/60", bg: "rgba(20, 10, 30, 0.75)" },
  "rest api integration": { glow: "rgba(14, 165, 233, 0.55)", border: "border-[#0EA5E9]/60", bg: "rgba(8, 20, 30, 0.75)" },
  "ui/ux design": { glow: "rgba(236, 72, 153, 0.55)", border: "border-[#EC4899]/60", bg: "rgba(28, 10, 22, 0.75)" },
  "database management": { glow: "rgba(20, 184, 166, 0.55)", border: "border-[#14B8A6]/60", bg: "rgba(8, 24, 22, 0.75)" },
  "ai tool integration": { glow: "rgba(224, 82, 105, 0.6)", border: "border-[#E05269]/70", bg: "rgba(28, 10, 16, 0.75)" },
  "problem solving": { glow: "rgba(245, 158, 11, 0.55)", border: "border-[#F59E0B]/60", bg: "rgba(26, 18, 6, 0.75)" },
  "responsive web design": { glow: "rgba(59, 130, 246, 0.55)", border: "border-[#3B82F6]/60", bg: "rgba(10, 18, 30, 0.75)" },
};

export function getBrandTheme(name: string) {
  return (
    BRAND_THEMES[name.toLowerCase()] || {
      glow: "rgba(224, 82, 105, 0.5)",
      border: "border-accent-red/50",
      bg: "rgba(18, 14, 20, 0.75)",
    }
  );
}

// Clean concise label formatting with zero truncation
export function formatShortLabel(name: string): string {
  const map: Record<string, string> = {
    "JavaScript": "JAVASCRIPT",
    "TypeScript": "TYPESCRIPT",
    "Tailwind CSS": "TAILWIND",
    "Tailwind": "TAILWIND",
    "Node.js (Basic)": "NODE.JS",
    "Node.js": "NODE.JS",
    "Express.js": "EXPRESS",
    "Full-Stack Development": "FULL-STACK",
    "REST API Integration": "REST API",
    "UI/UX Design": "UI / UX",
    "Database Management": "DATABASE",
    "AI Tool Integration": "AI TOOLS",
    "Problem Solving": "PROBLEM SOLVING",
    "Responsive Web Design": "RESPONSIVE",
  };
  return map[name] || name.toUpperCase();
}

interface Point3D {
  skill: SkillItem;
  x0: number;
  y0: number;
  z0: number;
  x: number;
  y: number;
  z: number;
  screenX: number;
  screenY: number;
  scale: number;
  alpha: number;
  zIndex: number;
}

export function TechStackGlobe({
  skills,
  activeSkill,
  onSelectSkill,
}: {
  skills: SkillItem[];
  activeSkill: SkillItem;
  onSelectSkill: (skill: SkillItem) => void;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [points, setPoints] = useState<Point3D[]>([]);
  const [containerDim, setContainerDim] = useState<{ w: number; h: number }>({ w: 600, h: 520 });

  // Measure container dimensions for responsive radius
  useEffect(() => {
    if (!containerRef.current) return;
    const updateDim = () => {
      if (containerRef.current) {
        setContainerDim({
          w: containerRef.current.clientWidth,
          h: containerRef.current.clientHeight,
        });
      }
    };
    updateDim();
    window.addEventListener("resize", updateDim);
    return () => window.removeEventListener("resize", updateDim);
  }, []);

  const isSingle = skills.length === 1;

  // Adaptive sphere radius guaranteeing all tiles stay inside canvas bounds on all screens
  const sphereRadius = useMemo(() => {
    const minDim = Math.min(containerDim.w, containerDim.h);
    if (minDim < 450) return 130; // Mobile screens
    if (skills.length <= 7) return 165; // Small sets like Additional Skills (plenty of breathing room)
    if (skills.length <= 16) return 195; // Daily stack
    return 220; // Full 28 skills architecture
  }, [containerDim, skills.length]);

  // Check if running under automated test runner for instantaneous stability
  const isAutomatedTest =
    typeof window !== "undefined" &&
    (window.location.search.includes("swarm=off") || (navigator as unknown as { webdriver?: boolean }).webdriver);

  // Dynamic rotation state with inertia & mouse-following direction
  const rotationRef = useRef<{
    angleX: number;
    angleY: number;
    velX: number;
    velY: number;
    isDragging: boolean;
    lastMouseX: number;
    lastMouseY: number;
    pointerX: number;
    pointerY: number;
    hasMouseOver: boolean;
  }>({
    angleX: 0.12,
    angleY: 0.2,
    velX: isAutomatedTest ? 0 : 0.0006,
    velY: isAutomatedTest ? 0 : 0.0035, // smooth orbital velocity
    isDragging: false,
    lastMouseX: 0,
    lastMouseY: 0,
    pointerX: 0,
    pointerY: 0,
    hasMouseOver: false,
  });

  // Calculate Fibonacci sphere points (or balanced orbit for small sets)
  useEffect(() => {
    const N = skills.length;
    const w = containerDim.w || 600;
    const h = containerDim.h || 520;
    const fov = 420;

    if (N === 1) {
      // Single skill mode: centered 3D interactive hero
      setPoints([
        {
          skill: skills[0],
          x0: 0,
          y0: 0,
          z0: 0,
          x: 0,
          y: 0,
          z: 0,
          screenX: w / 2,
          screenY: h / 2,
          scale: 1,
          alpha: 1,
          zIndex: 50,
        },
      ]);
      return;
    }

    const initialPoints: Point3D[] = skills.map((skill, i) => {
      let x0: number;
      let y0: number;
      let z0: number;

      if (N <= 4) {
        // Equatorial ring for 2-4 items
        const theta = (i / N) * Math.PI * 2;
        x0 = sphereRadius * Math.cos(theta);
        y0 = (i % 2 === 0 ? 30 : -30);
        z0 = sphereRadius * Math.sin(theta);
      } else {
        // Golden ratio Fibonacci distribution
        const phi = Math.acos(1 - (2 * (i + 0.5)) / N);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        x0 = sphereRadius * Math.cos(theta) * Math.sin(phi);
        y0 = sphereRadius * Math.sin(theta) * Math.sin(phi);
        z0 = sphereRadius * Math.cos(phi);
      }

      const scale = Math.max(0.65, Math.min(1.15, (fov + z0) / fov));

      return {
        skill,
        x0,
        y0,
        z0,
        x: x0,
        y: y0,
        z: z0,
        screenX: w / 2 + x0 * scale,
        screenY: h / 2 + y0 * scale,
        scale,
        alpha: 1,
        zIndex: 10,
      };
    });

    setPoints(initialPoints);
  }, [skills, sphereRadius, containerDim]);

  // Animation render loop
  useEffect(() => {
    let animId: number;

    const render = () => {
      const rot = rotationRef.current;
      const container = containerRef.current;
      const w = container ? container.clientWidth : 700;
      const h = container ? container.clientHeight : 520;
      const centerX = w / 2;
      const centerY = h / 2;

      if (isSingle) {
        // In single mode: smooth 3D tilt tracking cursor without endless spinning
        if (rot.hasMouseOver) {
          const dx = (rot.pointerX - centerX) / centerX;
          const dy = (rot.pointerY - centerY) / centerY;
          rot.angleY += (dx * 0.45 - rot.angleY) * 0.08;
          rot.angleX += (-dy * 0.35 - rot.angleX) * 0.08;
        } else {
          rot.angleY += (0 - rot.angleY) * 0.05;
          rot.angleX += (0 - rot.angleX) * 0.05;
        }

        setPoints((prev) =>
          prev.map((pt) => ({
            ...pt,
            screenX: centerX,
            screenY: centerY,
            scale: 1,
            alpha: 1,
            zIndex: 100,
          }))
        );

        animId = requestAnimationFrame(render);
        return;
      }

      // Multi-node orbital rotation:
      // Mouse-directed angular velocity: left/right rotates horizontally; up/down tilts vertically
      if (rot.hasMouseOver && !rot.isDragging) {
        const dx = rot.pointerX - centerX;
        const dy = rot.pointerY - centerY;
        const targetVelY = (dx / centerX) * 0.016;
        const targetVelX = -(dy / centerY) * 0.012;

        rot.velY += (targetVelY - rot.velY) * 0.07;
        rot.velX += (targetVelX - rot.velX) * 0.07;
      } else if (!rot.isDragging && !isAutomatedTest) {
        // Natural gentle idle orbit
        rot.velY += (0.003 - rot.velY) * 0.025;
        rot.velX += (0.0005 - rot.velX) * 0.025;
      }

      // If stationary under test runner, skip re-render
      const hasMovement = Math.abs(rot.velX) > 0.00005 || Math.abs(rot.velY) > 0.00005 || rot.isDragging;
      if (!hasMovement && isAutomatedTest) {
        animId = requestAnimationFrame(render);
        return;
      }

      // Update angles
      rot.angleY += rot.velY;
      rot.angleX += rot.velX;

      if (rot.angleY > Math.PI * 2) rot.angleY -= Math.PI * 2;
      if (rot.angleY < -Math.PI * 2) rot.angleY += Math.PI * 2;
      rot.angleX = Math.max(-Math.PI / 2.3, Math.min(Math.PI / 2.3, rot.angleX));

      const sinX = Math.sin(rot.angleX);
      const cosX = Math.cos(rot.angleX);
      const sinY = Math.sin(rot.angleY);
      const cosY = Math.cos(rot.angleY);

      const fov = 420;

      setPoints((prev) =>
        prev.map((pt) => {
          // 3D Rotation matrices
          const x1 = pt.x0 * cosY + pt.z0 * sinY;
          const y1 = pt.y0;
          const z1 = -pt.x0 * sinY + pt.z0 * cosY;

          const x = x1;
          const y = y1 * cosX - z1 * sinX;
          const z = y1 * sinX + z1 * cosX;

          // Perspective screen projection
          const scale = Math.max(0.68, Math.min(1.18, (fov + z) / fov));
          const screenX = centerX + x * scale;
          const screenY = centerY + y * scale;

          // High-fidelity depth sorting & clean backside transparency:
          // Front items (z > 0) stay bright (alpha 0.95 - 1.0); back items fade gracefully to 0.22 so they never block or clutter
          const normZ = (z + sphereRadius) / (2 * sphereRadius);
          const alpha = z > 0 ? 0.95 + normZ * 0.05 : Math.max(0.2, normZ * 1.1);
          const zIndex = Math.round((z + sphereRadius) * 2);

          return {
            ...pt,
            x,
            y,
            z,
            screenX,
            screenY,
            scale,
            alpha,
            zIndex,
          };
        })
      );

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [isAutomatedTest, isSingle, sphereRadius]);

  // Pointer interaction
  const handlePointerDown = (e: React.PointerEvent) => {
    const rot = rotationRef.current;
    rot.isDragging = true;
    rot.lastMouseX = e.clientX;
    rot.lastMouseY = e.clientY;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const rot = rotationRef.current;
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      rot.pointerX = e.clientX - rect.left;
      rot.pointerY = e.clientY - rect.top;
      rot.hasMouseOver = true;
    }

    if (rot.isDragging) {
      const deltaX = e.clientX - rot.lastMouseX;
      const deltaY = e.clientY - rot.lastMouseY;
      rot.lastMouseX = e.clientX;
      rot.lastMouseY = e.clientY;

      rot.velY = deltaX * 0.006;
      rot.velX = -deltaY * 0.006;
      rot.angleY += rot.velY;
      rot.angleX += rot.velX;
    }
  };

  const handlePointerUp = () => {
    rotationRef.current.isDragging = false;
  };

  const handlePointerLeave = () => {
    const rot = rotationRef.current;
    rot.isDragging = false;
    rot.hasMouseOver = false;
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* 3D Rotating Stack Canvas (Transparent with NO dark backside box/sheet) */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerLeave}
        className="relative w-full h-[460px] sm:h-[540px] md:h-[600px] rounded-3xl overflow-hidden select-none cursor-grab active:cursor-grabbing bg-transparent"
      >
        {/* Subtle Cyber Grid Dots matching reference images (Zero heavy background sheets) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Subtle Cyber Orbital Wireframe Rings */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-white/[0.04] pointer-events-none" />
          <div className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-full border border-accent-red/[0.06] pointer-events-none animate-pulse" />
        </div>

        {/* SINGLE ARCHITECTURE HERO VIEW (When category has 1 item, e.g. App Development / Flutter) */}
        {isSingle && points.length === 1 && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30"
            style={{
              perspective: "1000px",
            }}
          >
            <div
              style={{
                transform: `rotateX(${rotationRef.current.angleX * 25}deg) rotateY(${rotationRef.current.angleY * 25}deg)`,
                transition: "transform 0.1s ease-out",
              }}
              className="pointer-events-auto flex flex-col items-center justify-center group"
            >
              {/* Concentric Pulsing Radar Rings */}
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-8 rounded-full border border-accent-red/25 animate-ping opacity-25" />
                <div className="absolute -inset-4 rounded-full border border-accent-red/40 animate-pulse" />

                {/* Floating Hero Cube */}
                <button
                  type="button"
                  aria-label={`Inspect ${points[0].skill.name}`}
                  onClick={() => {
                    sound.playClick();
                    onSelectSkill(points[0].skill);
                  }}
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-4 flex flex-col items-center justify-center border transition-all backdrop-blur-xl bg-[#0A0D14]/80 hover:scale-110 shadow-2xl focus:outline-none ring-2 ring-accent-red"
                  style={{
                    borderColor: getBrandTheme(points[0].skill.name).glow,
                    boxShadow: `0 0 32px ${getBrandTheme(points[0].skill.name).glow}, inset 0 1px 1px rgba(255,255,255,0.25)`,
                  }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                    <TechIcon name={points[0].skill.name} className="w-full h-full drop-shadow-md" />
                  </div>
                </button>
              </div>

              {/* Title & Badge */}
              <div className="mt-4 flex flex-col items-center space-y-1">
                <span className="font-mono text-[11px] sm:text-xs font-bold tracking-widest text-white uppercase px-3 py-1 rounded-full bg-black/85 border border-accent-red/50 shadow-lg">
                  {formatShortLabel(points[0].skill.name)}
                </span>
                <span className="font-mono text-[9px] text-emerald-400 font-semibold tracking-wider">
                  ● ACTIVE PRODUCTION SPECIALIZATION
                </span>
              </div>
            </div>
          </div>
        )}

        {/* MULTI-NODE 3D ORBITAL CUBES (Small, sleek, transparent back, no clunky sheets) */}
        {!isSingle &&
          points.map((pt) => {
            const isSelected = activeSkill.name === pt.skill.name;
            const isInFront = pt.z > 0;
            const isDeepBack = pt.z < -sphereRadius * 0.35;
            const theme = getBrandTheme(pt.skill.name);
            const shortLabel = formatShortLabel(pt.skill.name);

            return (
              <button
                key={pt.skill.name}
                type="button"
                aria-label={`Inspect ${pt.skill.name}`}
                onClick={(e) => {
                  e.stopPropagation();
                  sound.playClick();
                  onSelectSkill(pt.skill);
                }}
                style={{
                  transform: `translate3d(${pt.screenX}px, ${pt.screenY}px, 0px) translate(-50%, -50%) scale(${pt.scale})`,
                  opacity: isSelected ? 1 : pt.alpha,
                  zIndex: isSelected ? 999 : pt.zIndex,
                  pointerEvents: isDeepBack ? "none" : "auto",
                }}
                className={`absolute flex flex-col items-center justify-center transition-opacity duration-75 cursor-pointer group focus:outline-none ${
                  isSelected
                    ? "scale-110 z-50"
                    : isInFront
                    ? "hover:scale-115 hover:z-40"
                    : "pointer-events-auto"
                }`}
              >
                {/* Compact, Sleek 3D Squircle Cube */}
                <div
                  className={`w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-2xl p-2 sm:p-2.5 flex flex-col items-center justify-center border transition-all duration-200 backdrop-blur-md ${
                    isSelected
                      ? "ring-2 ring-accent-red border-accent-red bg-[#0E131F]/90 scale-105"
                      : isInFront
                      ? `${theme.border} bg-[#0A0D15]/75 hover:bg-[#0E131F]/90 hover:border-white/50`
                      : "border-white/10 bg-[#070A10]/50"
                  }`}
                  style={{
                    boxShadow: isSelected
                      ? `0 0 28px rgba(224, 82, 105, 0.8), inset 0 1px 1px rgba(255,255,255,0.3)`
                      : isInFront
                      ? `0 0 16px ${theme.glow}, inset 0 1px 1px rgba(255,255,255,0.15)`
                      : `0 0 8px ${theme.glow}`,
                  }}
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center flex-shrink-0">
                    <TechIcon name={pt.skill.name} className="w-full h-full drop-shadow-md" />
                  </div>
                </div>

                {/* Sleek Floating Micro-Pill Label (Zero truncation, crystal clear) */}
                <span
                  className={`font-mono text-[8px] sm:text-[9px] font-bold tracking-wider uppercase mt-1 px-1.5 py-0.5 rounded-full border transition-all shadow-md truncate max-w-[90px] text-center ${
                    isSelected
                      ? "text-white bg-accent-red/30 border-accent-red opacity-100"
                      : isInFront
                      ? "text-zinc-300 bg-black/80 border-white/10 group-hover:text-white group-hover:border-white/30 opacity-100"
                      : "text-zinc-500 bg-black/40 border-white/5 opacity-35"
                  }`}
                >
                  {shortLabel}
                </span>
              </button>
            );
          })}

        {/* Minimal Guidance Telemetry Footer */}
        <div className="absolute bottom-3 left-6 right-6 flex items-center justify-between font-mono text-[10px] text-zinc-500 pointer-events-none">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-red animate-pulse" />
            <span>ROTATE GLOBE WITH CURSOR / DRAG</span>
          </span>
          <span className="hidden sm:inline-block">CLICK ANY MOVING ICON TO OPEN DETAILS PANEL</span>
        </div>
      </div>
    </div>
  );
}
