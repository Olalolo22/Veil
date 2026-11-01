import React from "react";
import Link from "next/link";
import { IconShield, IconTerminal } from "./Icons";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--hairline)] bg-[var(--bg-page)]/90 backdrop-blur-md px-6 py-3.5">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-2 text-[var(--text-primary)] font-medium text-base tracking-tight">
            <span className="p-1 rounded bg-[var(--bg-raised)] border border-[var(--hairline)] text-[var(--text-secondary)]">
              <IconShield size={15} />
            </span>
            <span>Veil</span>
            <span className="text-xs text-[var(--text-muted)] font-normal ml-0.5">protocol</span>
          </Link>

          <div className="hidden sm:flex items-center space-x-2 ml-4 px-2 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--hairline)] text-xs text-[var(--text-secondary)] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--positive)]"></span>
            <span>Robinhood Chain 4663</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6 text-xs text-[var(--text-secondary)]">
          <Link href="/#problem" className="hover:text-[var(--text-primary)] transition-colors">
            Surveillance problem
          </Link>
          <Link href="/#architecture" className="hover:text-[var(--text-primary)] transition-colors">
            Dual-rail settlement
          </Link>
          <Link href="/#tokenomics" className="hover:text-[var(--text-primary)] transition-colors">
            Fee engine & token
          </Link>
          <a
            href="https://github.com/Olalolo22/Veil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            Repository
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            href="/terminal"
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-md bg-[#ededed] text-[#07080d] font-medium text-xs hover:bg-white transition-colors"
          >
            <IconTerminal size={14} />
            <span>Launch terminal</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
