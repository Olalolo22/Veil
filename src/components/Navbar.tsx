"use client";

import React from "react";
import Link from "next/link";
import { IconShield, IconTerminal, IconArrowRight } from "./Icons";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full h-[60px] bg-[#0f0f10]/95 backdrop-blur-md border-b border-[rgba(237,237,237,0.07)] px-4 sm:px-8">
      <div className="max-w-[1340px] h-full mx-auto flex items-center justify-between">
        {/* Left: Brand & Network Badge */}
        <div className="flex items-center space-x-3.5">
          <Link href="/" className="flex items-center space-x-2.5 group">
            <span className="w-7 h-7 rounded-[7px] bg-[#19191b] border border-[rgba(237,237,237,0.12)] flex items-center justify-center text-[#ededed] group-hover:border-[#ff6b2b] transition-colors">
              <IconShield size={14} />
            </span>
            <span className="font-semibold text-[15px] text-[#ededed] tracking-tight">Veil</span>
            <span className="text-[11px] font-mono text-[#85858b] uppercase tracking-wider hidden sm:inline-block">
              Protocol
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-2 pl-3 ml-2 border-l border-[rgba(237,237,237,0.08)] text-[12px] font-mono text-[#85858b]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4cc38a]" />
            <span>Robinhood Chain 4663</span>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-[13px] font-normal text-[#a1a1a6]">
          <Link href="#console" className="hover:text-[#ededed] transition-colors">
            Console
          </Link>
          <Link href="#bento" className="hover:text-[#ededed] transition-colors">
            Architecture
          </Link>
          <Link href="#sdk" className="hover:text-[#ededed] transition-colors">
            Developer SDK
          </Link>
          <Link href="#tokenomics" className="hover:text-[#ededed] transition-colors">
            Tokenomics &amp; $VEIL
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center space-x-3">
          <a
            href="https://github.com/Olalolo22/Veil"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex text-[12.5px] font-mono text-[#85858b] hover:text-[#ededed] transition-colors px-2 py-1"
          >
            GitHub
          </a>

          <Link
            href="/terminal"
            className="inline-flex items-center space-x-2 h-[34px] px-3.5 rounded-[8px] bg-[#ededed] text-[#0f0f10] font-medium text-[12.5px] hover:bg-white transition-all shadow-sm"
          >
            <IconTerminal size={13} />
            <span>Terminal</span>
            <IconArrowRight size={12} />
          </Link>
        </div>
      </div>
    </header>
  );
}
