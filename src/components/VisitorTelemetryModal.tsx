"use client";

import React, { useState, useEffect } from "react";
import { sound } from "@/lib/audio";
import {
  Shield,
  Activity,
  Users,
  Globe,
  Radio,
  Clock,
  Laptop,
  Smartphone,
  Eye,
  RefreshCw,
  Download,
  X,
  ExternalLink,
  Lock,
} from "lucide-react";
import { VisitorEvent } from "@/app/api/telemetry/route";

interface TelemetryData {
  totalVisits: number;
  uniqueWatchers: number;
  activeNow: number;
  topReferrers: { source: string; count: number }[];
  topLocations: { region: string; count: number }[];
  deviceBreakdown: { device: string; percentage: number }[];
  recentEvents: VisitorEvent[];
  lastUpdated: string;
}

export function VisitorTelemetryModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [data, setData] = useState<TelemetryData | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"stream" | "geo" | "security">("stream");

  const fetchTelemetry = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/telemetry");
      const json = await res.json();
      if (json.success) {
        setData(json);
      }
    } catch (err) {
      console.error("Telemetry fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchTelemetry();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const exportJSON = () => {
    if (!data) return;
    sound.playClick();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `praneeth-visitor-telemetry-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-xl animate-fadeIn font-mono">
      {/* Background click dismiss */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Main Console Box */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0D15] border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10">
        {/* Console Header Bar */}
        <div className="px-5 py-4 bg-black/90 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent-red/10 border border-accent-red/30 text-accent-red">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-white text-base sm:text-lg tracking-tight">
                  VISITOR INTELLIGENCE &amp; ACCESS MONITOR
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE SENSORS ACTIVE</span>
                </span>
              </div>
              <div className="text-[11px] text-zinc-400 flex items-center gap-2">
                <span>PRANEETH.AI ARCHITECTURAL TELEMETRY</span>
                <span>•</span>
                <span>REAL-TIME WATCHER STREAM</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                sound.playClick();
                fetchTelemetry();
              }}
              disabled={loading}
              title="Refresh live telemetry"
              className="p-2 rounded-lg border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-accent-red" : ""}`} />
            </button>
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-2 rounded-lg border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
              aria-label="Close telemetry console"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Top Metric Telemetry Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#07090E] border-b border-white/10">
          <div className="p-3 rounded-xl border border-white/10 bg-black/40 space-y-1">
            <div className="flex items-center justify-between text-zinc-400 text-[10px] uppercase">
              <span>TOTAL VISITS</span>
              <Eye className="w-3.5 h-3.5 text-accent-red" />
            </div>
            <div className="text-2xl font-black text-white font-mono">
              {data ? data.totalVisits : "..."}
            </div>
            <div className="text-[9.5px] text-zinc-500">All-time portfolio openings</div>
          </div>

          <div className="p-3 rounded-xl border border-white/10 bg-black/40 space-y-1">
            <div className="flex items-center justify-between text-zinc-400 text-[10px] uppercase">
              <span>UNIQUE WATCHERS</span>
              <Users className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-2xl font-black text-white font-mono">
              {data ? data.uniqueWatchers : "..."}
            </div>
            <div className="text-[9.5px] text-zinc-500">Verified distinct visitors</div>
          </div>

          <div className="p-3 rounded-xl border border-white/10 bg-black/40 space-y-1">
            <div className="flex items-center justify-between text-zinc-400 text-[10px] uppercase">
              <span>ACTIVE NOW</span>
              <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            </div>
            <div className="text-2xl font-black text-emerald-400 font-mono flex items-center gap-2">
              <span>{data ? data.activeNow : 1}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <div className="text-[9.5px] text-zinc-500">Active watcher sessions</div>
          </div>

          <div className="p-3 rounded-xl border border-white/10 bg-black/40 space-y-1">
            <div className="flex items-center justify-between text-zinc-400 text-[10px] uppercase">
              <span>TOP SOURCE</span>
              <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
            </div>
            <div className="text-sm font-bold text-white truncate pt-1">
              {data && data.topReferrers[0] ? data.topReferrers[0].source : "LinkedIn / Direct"}
            </div>
            <div className="text-[9.5px] text-zinc-500">Primary incoming channel</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-5 py-2.5 bg-black/50 border-b border-white/10 text-xs">
          <button
            onClick={() => {
              sound.playTabSwitch();
              setActiveTab("stream");
            }}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === "stream"
                ? "bg-accent-red text-white font-bold shadow-crimson-glow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>REAL-TIME ACCESS STREAM</span>
          </button>

          <button
            onClick={() => {
              sound.playTabSwitch();
              setActiveTab("geo");
            }}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === "geo"
                ? "bg-accent-red text-white font-bold shadow-crimson-glow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>GEOGRAPHY &amp; SOURCES</span>
          </button>

          <button
            onClick={() => {
              sound.playTabSwitch();
              setActiveTab("security");
            }}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === "security"
                ? "bg-accent-red text-white font-bold shadow-crimson-glow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>SECURITY ARCHITECTURE</span>
          </button>
        </div>

        {/* Scrollable Tab Content Viewport */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1 text-xs">
          {/* TAB 1: REAL-TIME ACCESS STREAM */}
          {activeTab === "stream" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-zinc-400 text-[11px] pb-1">
                <span>CHRONOLOGICAL AUDIT TRAIL OF APPLICATION OPENINGS</span>
                <span className="text-emerald-400 font-semibold">● LIVE STREAMING</span>
              </div>

              {data && data.recentEvents.length > 0 ? (
                <div className="space-y-2">
                  {data.recentEvents.map((evt) => (
                    <div
                      key={evt.id}
                      className="p-3.5 rounded-xl border border-white/10 bg-black/50 hover:border-accent-red/50 hover:bg-black/80 transition-all space-y-2"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-accent-red/10 border border-accent-red/30 text-accent-red font-bold text-[10px]">
                            {evt.id}
                          </span>
                          <span className="text-white font-bold text-[11.5px] flex items-center gap-1.5">
                            {evt.device === "Mobile" ? (
                              <Smartphone className="w-3.5 h-3.5 text-zinc-400" />
                            ) : (
                              <Laptop className="w-3.5 h-3.5 text-zinc-400" />
                            )}
                            <span>{evt.device}</span>
                            <span className="text-zinc-500 font-normal">({evt.browser} on {evt.os})</span>
                          </span>
                        </div>

                        <div className="text-[10px] text-zinc-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-zinc-500" />
                          <span>{new Date(evt.timestamp).toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1 border-t border-white/5">
                        <div>
                          <span className="text-zinc-500 block text-[9.5px]">LOCATION / REGION:</span>
                          <span className="text-zinc-200 font-medium">
                            {evt.city ? `${evt.city}, ` : ""}{evt.country} ({evt.timezone})
                          </span>
                        </div>

                        <div>
                          <span className="text-zinc-500 block text-[9.5px]">REFERRER SOURCE:</span>
                          <span className="text-cyan-400 font-medium truncate block">
                            {evt.referrer}
                          </span>
                        </div>

                        <div>
                          <span className="text-zinc-500 block text-[9.5px]">LAST SECTION WATCHED:</span>
                          <span className="text-emerald-400 font-medium truncate block">
                            {evt.lastSection} ({evt.durationSeconds}s dwell)
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-zinc-500">
                  Awaiting visitor telemetry signals...
                </div>
              )}
            </div>
          )}

          {/* TAB 2: GEOGRAPHY & SOURCES */}
          {activeTab === "geo" && data && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Geographic Distribution */}
              <div className="p-4 rounded-xl border border-white/10 bg-black/40 space-y-3">
                <div className="flex items-center gap-2 text-white font-bold pb-2 border-b border-white/10">
                  <Globe className="w-4 h-4 text-accent-red" />
                  <span>GEOGRAPHIC ORIGINS</span>
                </div>
                <div className="space-y-2">
                  {data.topLocations.map((loc) => (
                    <div key={loc.region} className="flex items-center justify-between">
                      <span className="text-zinc-300">{loc.region}</span>
                      <span className="font-bold text-accent-red px-2 py-0.5 rounded bg-accent-red/10 border border-accent-red/30">
                        {loc.count} sessions
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Traffic Referrers */}
              <div className="p-4 rounded-xl border border-white/10 bg-black/40 space-y-3">
                <div className="flex items-center gap-2 text-white font-bold pb-2 border-b border-white/10">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span>TRAFFIC SOURCES</span>
                </div>
                <div className="space-y-2">
                  {data.topReferrers.map((ref) => (
                    <div key={ref.source} className="flex items-center justify-between">
                      <span className="text-zinc-300">{ref.source}</span>
                      <span className="font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                        {ref.count} visits
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Device Breakdown */}
              <div className="sm:col-span-2 p-4 rounded-xl border border-white/10 bg-black/40 space-y-3">
                <div className="flex items-center gap-2 text-white font-bold pb-2 border-b border-white/10">
                  <Laptop className="w-4 h-4 text-cyan-400" />
                  <span>DEVICE ARCHITECTURE BREAKDOWN</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {data.deviceBreakdown.map((dev) => (
                    <div key={dev.device} className="p-3 rounded-lg bg-black/60 border border-white/5 text-center">
                      <span className="text-zinc-400 text-[10px] block uppercase">{dev.device}</span>
                      <span className="text-xl font-black text-white">{dev.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SECURITY ARCHITECTURE */}
          {activeTab === "security" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 space-y-2 text-zinc-300 leading-relaxed font-sans">
                <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-xs uppercase">
                  <Shield className="w-4 h-4" />
                  <span>Ethical Telemetry &amp; Cyber-Security Protocols</span>
                </div>
                <p>
                  This system operates on zero-knowledge cryptographic masking. Raw IP addresses are truncated at the boundary (`103.***.***.***`), ensuring that Sai Praneeth knows which company, region, and network watched the application without violating user privacy.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[11px] pt-2">
                  <div className="p-2 rounded bg-black/40 border border-white/10">
                    <span className="text-zinc-500 block">ENCRYPTION PROTOCOL:</span>
                    <span className="text-white font-semibold">TLS 1.3 / AES-256</span>
                  </div>
                  <div className="p-2 rounded bg-black/40 border border-white/10">
                    <span className="text-zinc-500 block">DATA STORAGE LOCATION:</span>
                    <span className="text-white font-semibold">Internal Encrypted Disk (No 3rd-Party Trackers)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-black/40 space-y-2">
                <span className="text-white font-bold block">HOW SAI PRANEETH TRACKS WATCHERS:</span>
                <ul className="space-y-1.5 text-zinc-400 list-disc list-inside font-sans">
                  <li>Identifies recruiter visits arriving from LinkedIn and GitHub profiles.</li>
                  <li>Tracks which project architecture is explored the most (e.g., AgriSahay AI vs STUDENT360).</li>
                  <li>Measures real dwell-time per section to continuously refine user experience and visual engineering.</li>
                  <li>Zero tracking cookies or invasive third-party analytics pixels.</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Console Footer Action Bar */}
        <div className="px-5 py-3 bg-black/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-zinc-500 text-[10.5px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>SESSION MONITORING ENGAGED · REFRESHES IN REAL TIME</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={exportJSON}
              className="px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white flex items-center gap-1.5 transition-colors text-[11px]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>EXPORT AUDIT LOG (.JSON)</span>
            </button>
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="px-3 py-1.5 rounded-lg bg-accent-red text-white font-bold hover:bg-accent-red-hover transition-colors text-[11px]"
            >
              CLOSE MONITOR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
