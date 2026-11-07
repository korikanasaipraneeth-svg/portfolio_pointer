"use client";

import { useEffect, useRef } from "react";

export function VisitorTracker() {
  const sessionStartedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStartedRef.current) return;
    sessionStartedRef.current = true;

    // Detect Device
    const ua = navigator.userAgent || "";
    let device: "Desktop" | "Mobile" | "Tablet" = "Desktop";
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      device = "Tablet";
    } else if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(
        ua
      ) ||
      window.innerWidth < 768
    ) {
      device = "Mobile";
    }

    // Detect Browser
    let browser = "Chrome";
    if (ua.includes("Firefox/")) browser = "Firefox";
    else if (ua.includes("Edg/")) browser = "Edge";
    else if (ua.includes("Safari/") && !ua.includes("Chrome/")) browser = "Safari";
    else if (ua.includes("OPR/") || ua.includes("Opera/")) browser = "Opera";

    // Detect OS
    let os = "Windows";
    if (ua.includes("Macintosh") || ua.includes("Mac OS")) os = "macOS";
    else if (ua.includes("iPhone") || ua.includes("iPad")) os = "iOS";
    else if (ua.includes("Android")) os = "Android";
    else if (ua.includes("Linux")) os = "Linux";

    // Detect Timezone & Region
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
    const language = navigator.language || "en";
    let country = "Global Visitor";
    if (timezone.includes("Kolkata") || timezone.includes("Calcutta") || language.includes("IN")) {
      country = "India";
    } else if (timezone.includes("New_York") || timezone.includes("Los_Angeles") || timezone.includes("Chicago")) {
      country = "United States";
    } else if (timezone.includes("London")) {
      country = "United Kingdom";
    } else if (timezone.includes("Singapore")) {
      country = "Singapore";
    } else if (timezone.includes("Berlin") || timezone.includes("Paris")) {
      country = "Europe";
    }

    // Referrer
    let rawReferrer = document.referrer;
    let referrer = "Direct Dispatch / Portfolio Entry";
    if (rawReferrer) {
      if (rawReferrer.includes("linkedin.com")) referrer = "LinkedIn Professional Network";
      else if (rawReferrer.includes("github.com")) referrer = "GitHub Engineering Profile";
      else if (rawReferrer.includes("google.com")) referrer = "Google Search Index";
      else if (rawReferrer.includes("twitter.com") || rawReferrer.includes("x.com")) referrer = "X / Twitter";
      else referrer = rawReferrer.slice(0, 60);
    }

    // Generate lightweight fingerprint
    const fingerprint = `${device}-${browser}-${os}-${timezone}-${window.screen?.width || 0}`.replace(/\s+/g, "");

    const startTime = Date.now();
    let currentSection = "SEC_HERO";

    // Section Observer
    const sections = ["hero", "profile", "skills", "projects", "timeline", "contact"];
    const updateActiveSection = () => {
      const scrollPos = window.scrollY + 250;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          currentSection = `SEC_${sections[i].toUpperCase()}`;
          break;
        }
      }
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });

    // Send Ingest Beacon
    const sendBeacon = (isHeartbeat = false) => {
      const durationSeconds = Math.max(1, Math.round((Date.now() - startTime) / 1000));
      const payload = {
        fingerprint,
        device,
        browser,
        os,
        timezone,
        country,
        referrer,
        landingPage: window.location.pathname + window.location.hash,
        lastSection: currentSection,
        durationSeconds,
      };

      try {
        if (typeof navigator !== "undefined" && navigator.sendBeacon && !isHeartbeat) {
          const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
          navigator.sendBeacon("/api/telemetry", blob);
        } else {
          fetch("/api/telemetry", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            keepalive: true,
          }).catch(() => {});
        }
      } catch {
        // Silently handle offline/network boundary
      }
    };

    // Initial log after 1.5 seconds (ensuring genuine user engagement)
    const initialTimer = setTimeout(() => {
      sendBeacon(true);
    }, 1500);

    // Periodic heartbeat every 45s while active
    const heartbeatInterval = setInterval(() => {
      sendBeacon(true);
    }, 45000);

    // Final heartbeat on unload
    const handleUnload = () => {
      sendBeacon(false);
    };
    window.addEventListener("beforeunload", handleUnload);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(heartbeatInterval);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  return null;
}
