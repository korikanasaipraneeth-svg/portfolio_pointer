"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log exception to client console for telemetry
    console.error("[CRITICAL SYSTEM FAULT]", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center font-mono space-y-6 bg-background text-text-primary">
      <div className="p-4 rounded-full border border-accent-red/50 bg-accent-red/10 text-accent-red animate-pulse">
        <AlertTriangle className="w-10 h-10" />
      </div>

      <div className="space-y-3 max-w-lg">
        <div className="text-xs text-accent-red tracking-widest font-semibold uppercase">
          500 // ARCHITECTURAL KERNEL INTERRUPT
        </div>
        <h1 className="font-heading font-black text-3xl sm:text-4xl text-text-primary tracking-tight">
          SYSTEM RECOVERY REQUIRED
        </h1>
        <p className="font-sans text-sm text-text-secondary leading-relaxed">
          An unhandled state was encountered during runtime pipeline execution. The active session has been isolated to protect client memory integrity.
        </p>
        {error.digest && (
          <div className="text-[11px] font-mono text-text-muted bg-surface/80 border border-border px-3 py-1.5 rounded inline-block">
            FAULTHASH: <span className="text-accent-red font-semibold">{error.digest}</span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          onClick={() => reset()}
          className="px-5 py-2.5 rounded border border-accent-red bg-accent-red text-white text-xs font-semibold hover:bg-accent-red-hover flex items-center gap-2 shadow-crimson-glow transition-all"
        >
          <RefreshCw className="w-4 h-4" />
          <span>REBOOT RUNTIME</span>
        </button>

        <Link
          href="/"
          className="px-5 py-2.5 rounded border border-border bg-surface text-text-primary text-xs font-semibold hover:bg-surface-elevated hover:border-accent-red/40 flex items-center gap-2 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>RETURN TO BASE</span>
        </Link>
      </div>
    </div>
  );
}
