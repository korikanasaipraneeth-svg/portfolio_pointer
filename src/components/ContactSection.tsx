"use client";

import React, { useState } from "react";
import { sound } from "@/lib/audio";
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  Github,
  Twitter,
  Instagram,
  Linkedin,
  Terminal,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [linkedinModalOpen, setLinkedinModalOpen] = useState(false);

  const emailAddress = "korikanasaipraneeth@gmail.com";
  const phoneNumber = "+91 7569552087";

  const handleCopyEmail = () => {
    sound.playSuccess();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    setIsSubmitting(true);
    setSubmitSuccess(null);
    setSubmitError(null);

    // Client-side quick check
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitError("Please fill out all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        sound.playSuccess();
        setSubmitSuccess(data.message || "Message dispatched successfully.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitError(data.error || "Unable to dispatch message. Please retry or email directly.");
      }
    } catch (err: any) {
      setSubmitError("Network connectivity issue. Please reach out directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 md:px-8 border-b border-border-subtle relative bg-background/40">
      <div className="w-full max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-2 border-b border-border-subtle/80 pb-6">
          <div className="flex items-center gap-2 font-mono text-xs text-accent-red uppercase tracking-widest font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-red" />
            <span>05 // DIRECT DISPATCH & NETWORKING</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-text-primary tracking-tight">
            INITIATE CONTACT
          </h2>
          <p className="font-sans text-sm sm:text-base text-text-secondary max-w-2xl">
            Available for full-stack engineering roles, AI system collaborations, open-source initiatives, and architectural discussions.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Credentials & Copy (5 cols) */}
          <div className="lg:col-span-5 space-y-6 font-mono text-xs">
            {/* Primary Email Card with 1-Click Copy */}
            <div className="rounded-lg border border-border-subtle bg-bg-panel p-6 shadow-panel-subtle space-y-4">
              <div className="flex items-center justify-between text-text-muted border-b border-border-subtle pb-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent-red" />
                  <span className="font-semibold text-text-primary">DIRECT EMAIL INTAKE</span>
                </div>
                <span className="text-[10px] text-accent-red">PRIMARY CHANNEL</span>
              </div>

              <div className="space-y-2">
                <div className="text-text-muted text-[11px]">VERIFIED ADDRESS</div>
                <div className="font-mono text-sm text-text-primary break-all font-semibold">
                  {emailAddress}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={() => sound.playHover()}
                  className={`flex-1 py-2.5 px-3 rounded border font-semibold flex items-center justify-center gap-2 transition-all ${
                    copied
                      ? "border-emerald-500 bg-emerald-500/20 text-emerald-400"
                      : "border-accent-red/60 bg-accent-red/10 text-text-primary hover:bg-accent-red hover:text-white shadow-crimson-glow"
                  }`}
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? "COPIED TO CLIPBOARD" : "COPY EMAIL ADDRESS"}</span>
                </button>

                <a
                  href={`mailto:${emailAddress}`}
                  onMouseEnter={() => sound.playHover()}
                  className="py-2.5 px-3 rounded border border-border-subtle bg-bg-secondary text-text-secondary hover:text-text-primary hover:border-accent-red transition-colors"
                  title="Open in Mail Client"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Direct Phone Call Card */}
            <div className="rounded-lg border border-border-subtle bg-bg-panel p-5 shadow-panel-subtle space-y-3">
              <div className="flex items-center justify-between text-text-muted">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-accent-red" />
                  <span className="font-semibold text-text-primary">DIRECT TELEPHONE</span>
                </div>
                <span className="text-[10px] text-emerald-400">VOICE & WHATSAPP</span>
              </div>

              <div className="font-mono text-sm text-text-primary font-semibold">
                {phoneNumber}
              </div>

              <a
                href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                onMouseEnter={() => sound.playHover()}
                className="inline-block py-2 px-3 rounded border border-border-subtle bg-bg-secondary text-text-secondary hover:text-text-primary hover:border-accent-red transition-colors text-[11px]"
              >
                Call Now ({phoneNumber}) →
              </a>
            </div>

            {/* Social Grid */}
            <div className="rounded-lg border border-border-subtle bg-bg-panel p-5 space-y-3">
              <div className="text-text-muted text-[11px] uppercase tracking-wider font-semibold">
                Verified Social Profiles
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://github.com/korikanasaipraneeth-svg"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  className="p-2.5 rounded border border-border-subtle bg-bg-secondary hover:border-accent-red text-text-secondary hover:text-text-primary flex items-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4 text-text-primary" />
                  <span className="truncate">GitHub</span>
                </a>

                <a
                  href="https://x.com/korikanasa99534"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  className="p-2.5 rounded border border-border-subtle bg-bg-secondary hover:border-accent-red text-text-secondary hover:text-text-primary flex items-center gap-2 transition-colors"
                >
                  <Twitter className="w-4 h-4 text-cyan-400" />
                  <span className="truncate">X / Twitter</span>
                </a>

                <a
                  href="https://www.instagram.com/_mr_teddy_11/"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  className="p-2.5 rounded border border-border-subtle bg-bg-secondary hover:border-accent-red text-text-secondary hover:text-text-primary flex items-center gap-2 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span className="truncate">Instagram</span>
                </a>

                {/* LinkedIn Direct Verified Profile */}
                <a
                  href="https://www.linkedin.com/in/korikana-saipraneeth/"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  className="p-2.5 rounded border border-border-subtle bg-bg-secondary hover:border-accent-red text-text-secondary hover:text-text-primary flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span className="truncate">LinkedIn</span>
                  </div>
                  <span className="text-[9px] text-emerald-400 font-mono font-semibold">VERIFIED</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Terminal Form (7 cols) */}
          <div className="lg:col-span-7 rounded-lg border border-border-subtle bg-bg-panel p-6 sm:p-8 shadow-panel-subtle space-y-6">
            <div className="flex items-center justify-between border-b border-border-subtle pb-3 font-mono text-xs">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-accent-red" />
                <span className="font-semibold text-text-primary">ENCRYPTED MESSAGE DISPATCH</span>
              </div>
              <span className="text-text-muted">[PROTOCOL 2026]</span>
            </div>

            {submitSuccess && (
              <div className="p-4 rounded border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-mono space-y-1">
                <div className="font-bold flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>DISPATCH CONFIRMED</span>
                </div>
                <div>{submitSuccess}</div>
              </div>
            )}

            {submitError && (
              <div className="p-4 rounded border border-accent-red/40 bg-accent-red/10 text-accent-red text-xs font-mono space-y-1">
                <div className="font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>DISPATCH FAILURE</span>
                </div>
                <div>{submitError}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-text-secondary uppercase">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full rounded border border-border-subtle bg-bg-secondary p-2.5 text-text-primary font-sans focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-text-secondary uppercase">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@engineering.io"
                    className="w-full rounded border border-border-subtle bg-bg-secondary p-2.5 text-text-primary font-sans focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-text-secondary uppercase">Subject / Scope</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Full-Stack / AI Developer Opportunity"
                  className="w-full rounded border border-border-subtle bg-bg-secondary p-2.5 text-text-primary font-sans focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-text-secondary uppercase">Inquiry Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, team requirements, or collaboration idea..."
                  className="w-full rounded border border-border-subtle bg-bg-secondary p-2.5 text-text-primary font-sans focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                onMouseEnter={() => sound.playHover()}
                className={`w-full py-3 px-4 rounded border font-semibold flex items-center justify-center gap-2 transition-all ${
                  isSubmitting
                    ? "border-border-subtle bg-bg-secondary text-text-muted cursor-not-allowed"
                    : "border-accent-red bg-accent-red text-text-primary hover:bg-accent-red-hover shadow-crimson-glow"
                }`}
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "TRANSMITTING TO GATEWAY..." : "SEND SECURE DISPATCH"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* LinkedIn Configuration Modal */}
      {linkedinModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="max-w-md w-full rounded-lg border border-border-subtle bg-bg-panel p-6 shadow-panel-subtle space-y-4 font-sans">
            <div className="flex items-center justify-between border-b border-border-subtle pb-3">
              <div className="font-mono text-xs text-yellow-400 font-semibold uppercase tracking-wider">
                Verification Protocol
              </div>
              <button
                onClick={() => setLinkedinModalOpen(false)}
                className="text-text-muted hover:text-text-primary text-sm font-mono"
              >
                [ESC]
              </button>
            </div>
            <h3 className="font-heading font-bold text-lg text-text-primary">
              LinkedIn Profile Verification Status
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              In accordance with our strict non-negotiable verification policy, a fabricated LinkedIn URL has not been published. The profile is currently awaiting official verification.
            </p>
            <p className="text-xs text-text-muted">
              To connect professionally in the meantime, please utilize direct email (<code className="text-accent-red font-mono">{emailAddress}</code>) or inspect verified code on GitHub.
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setLinkedinModalOpen(false)}
                className="px-4 py-2 rounded border border-border-subtle text-xs font-mono text-text-secondary hover:text-text-primary"
              >
                Acknowledge
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
