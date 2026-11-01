import React from "react";
import Link from "next/link";
import { IconShield, IconZap } from "./Icons";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-2 text-white font-bold text-xl tracking-wider">
            <span className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <IconShield className="w-5 h-5" />
            </span>
            <span className="text-gradient">VEIL</span>
            <span className="text-xs uppercase px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
              Protocol
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-2 ml-4 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Robinhood Chain (ID: 4663)</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm text-slate-300">
          <Link href="/#problem" className="hover:text-cyan-400 transition-colors">
            Surveillance Problem
          </Link>
          <Link href="/#architecture" className="hover:text-cyan-400 transition-colors">
            Dual-Rail Settlement
          </Link>
          <Link href="/#tokenomics" className="hover:text-cyan-400 transition-colors">
            $VEIL Token & Fees
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/terminal"
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold text-sm hover:opacity-90 transition-all glow-cyan"
          >
            <IconZap className="w-4 h-4" />
            <span>Launch Terminal</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

