"use client";

import Link from "next/link";
import { Terminal, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center font-mono space-y-6">
      <div className="p-3 rounded-full border border-accent-red/40 bg-accent-red/10 text-accent-red">
        <Terminal className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <div className="text-xs text-accent-red tracking-widest font-semibold">
          404 // ROUTE NOT FOUND
        </div>
        <h1 className="font-heading font-black text-4xl sm:text-5xl text-text-primary">
          DISCONNECTED FROM NODE
        </h1>
        <p className="font-sans text-sm text-text-secondary max-w-md mx-auto">
          The requested system pathway does not exist in Korikana Sai Praneeth&apos;s architecture directory.
        </p>
      </div>

      <Link
        href="/"
        className="px-5 py-2.5 rounded border border-accent-red bg-accent-red text-text-primary text-xs font-semibold hover:bg-accent-red-hover flex items-center gap-2 shadow-crimson-glow"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>RETURN TO BASE</span>
      </Link>
    </div>
  );
}
