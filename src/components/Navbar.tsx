"use client";

import React from "react";
import Link from "next/link";
import { IconShield, IconTerminal, IconArrowRight } from "./Icons";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full pt-3 pb-3 px-4 sm:px-7 pointer-events-none">
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-5 py-3 rounded-full gl-glass border border-white/[0.08] pointer-events-auto">
        {/* Left: Brand Identity */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-2 text-[var(--foreground)] font-medium text-sm tracking-tight group">
            <span className="w-7 h-7 rounded-full bg-[var(--surface-2)] border border-[var(--line)] flex items-center justify-center text-[var(--foreground)] group-hover:border-[var(--sealed)] transition-colors">
              <IconShield size={14} />
            </span>
            <span className="font-semibold text-base">Veil</span>
            <span className="text-[11px] font-mono text-[var(--mute)] uppercase tracking-wider hidden sm:inline-block">
              Protocol
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-2 pl-3 ml-2 border-l border-[var(--line)] text-xs font-mono text-[var(--mute)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--sealed)] animate-pulse"></span>
            <span>Robinhood Chain 4663</span>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8 text-xs font-normal text-[var(--foreground-muted)]">
          <Link href="#transformation" className="hover:text-[var(--foreground)] transition-colors">
            Transformation mesh
          </Link>
          <Link href="#modules" className="hover:text-[var(--foreground)] transition-colors">
            Interactive modules
          </Link>
          <Link href="#architecture" className="hover:text-[var(--foreground)] transition-colors">
            Dual-rail architecture
          </Link>
          <Link href="#sdk" className="hover:text-[var(--foreground)] transition-colors">
            Developer SDK
          </Link>
          <Link href="#tokenomics" className="hover:text-[var(--foreground)] transition-colors">
            Fee engine &amp; $VEIL
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-3">
          <a
            href="https://github.com/Olalolo22/Veil"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex text-xs font-mono text-[var(--mute)] hover:text-[var(--foreground)] transition-colors px-3 py-1.5"
          >
            GitHub
          </a>

          <Link
            href="/terminal"
            className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-[#f4f5f6] text-[#08090a] font-medium text-xs hover:bg-white transition-all shadow-sm"
          >
            <IconTerminal size={13} />
            <span>Terminal</span>
            <IconArrowRight size={12} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
