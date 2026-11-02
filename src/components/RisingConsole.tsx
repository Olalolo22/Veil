"use client";

import React, { useState } from "react";

/**
 * RisingConsole — Built from unslop/references/refs/unslop-hero-after.webp
 * and unslop-dashboard-after.webp.
 *
 * Features:
 * 1. Full desktop app shell (240px sidebar + fluid overview canvas) rising from the hero bottom edge.
 * 2. Studio-lit tilted Hardware Enclave / Stealth Card overlapping Stat Card 1.
 * 3. 11-bar vertical progression histogram with a single Signal Ember active bar in Stat Card 4.
 * 4. Multi-series smooth cubic-bezier curve chart with a mirrored baseline reflection below zero.
 * 5. Full dark / light mode adaptive styling with mobile responsive layout.
 */

export default function RisingConsole() {
  const [period, setPeriod] = useState<"Slot" | "Epoch" | "Quarter">("Epoch");
  const [hoveredMonth, setHoveredMonth] = useState<string | null>("Oct");

  const multiplier = period === "Slot" ? 0.12 : period === "Epoch" ? 1 : 3.4;
  const fmt = (n: number) => "$" + Math.round(n * multiplier).toLocaleString("en-US");

  const BARS = [22, 26, 24, 32, 38, 44, 49, 55, 63, 72, 94];

  return (
    <div className="w-full max-w-[1280px] mx-auto rounded-[16px] bg-[var(--console-bg)] border border-[var(--hairline)] shadow-[0_24px_64px_rgba(0,0,0,0.4)] overflow-hidden transition-colors duration-200">
      {/* macOS Window Chrome Titlebar */}
      <div className="h-[36px] px-4 bg-[var(--console-sidebar)] border-b border-[var(--hairline)] flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--hairline-strong)]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--hairline-strong)]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--hairline-strong)]" />
        </div>
        <div className="text-[11px] font-mono text-[var(--text-muted)] truncate px-2">
          veil.protocol — coordinator-daemon (robinhood-4663)
        </div>
        <div className="w-10" />
      </div>

      {/* App Shell Grid: 240px Sidebar + Fluid Main Column */}
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr]">
        {/* ─── LEFT SIDEBAR (240px) ───────────────────────── */}
        <aside className="hidden lg:flex flex-col justify-between p-4 bg-[var(--console-sidebar)] border-r border-[var(--hairline)] select-none">
          <div>
            {/* Brand Row */}
            <div className="flex items-center justify-between px-2 py-1.5 mb-4">
              <div className="flex items-center space-x-2.5">
                <span className="w-4 h-4 rounded-full bg-[var(--text-primary)] flex items-center justify-center">
                  <span className="w-1.5 h-3 bg-[var(--console-sidebar)] rotate-12 rounded-sm" />
                </span>
                <span className="text-[15px] font-medium text-[var(--text-primary)] tracking-tight">Veil</span>
              </div>
              <span className="w-5 h-5 rounded border border-[var(--hairline)] flex items-center justify-center text-[10px] text-[var(--text-muted)]">
                ◧
              </span>
            </div>

            {/* Search Input with Keycaps */}
            <div className="flex items-center justify-between h-[34px] px-2.5 rounded-[8px] bg-[var(--bg-card)] border border-[var(--hairline)] text-[13px] text-[var(--text-muted)] mb-6">
              <div className="flex items-center space-x-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                <span>Search</span>
              </div>
              <div className="flex items-center space-x-1 font-mono text-[10px]">
                <kbd className="px-1.5 py-0.5 rounded-[4px] bg-[var(--bg-raised)] border border-[var(--hairline)] text-[var(--text-secondary)]">
                  ⌘
                </kbd>
                <kbd className="px-1.5 py-0.5 rounded-[4px] bg-[var(--bg-raised)] border border-[var(--hairline)] text-[var(--text-secondary)]">
                  K
                </kbd>
              </div>
            </div>

            {/* Section Label */}
            <div className="px-2 mb-2 text-[12px] font-mono text-[var(--text-muted)]">Navigation</div>

            <nav className="space-y-1 text-[13.5px]">
              {/* Active Row */}
              <div className="flex items-center space-x-2.5 h-[34px] px-2.5 rounded-[8px] bg-[var(--console-active-tab)] text-[var(--text-primary)] font-medium border border-[var(--hairline)] shadow-sm">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" />
                </svg>
                <span>Overview</span>
              </div>

              <div className="flex items-center justify-between h-[34px] px-2.5 rounded-[8px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-raised)] transition-colors">
                <div className="flex items-center space-x-2.5">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                  <span>Intent mesh</span>
                </div>
                <span className="font-mono text-[12px] text-[var(--text-muted)] tabular-nums">12</span>
              </div>

              <div className="flex items-center justify-between h-[34px] px-2.5 rounded-[8px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-raised)] transition-colors">
                <div className="flex items-center space-x-2.5">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="m12 2 9 4.9L12 12 3 6.9 12 2z" />
                    <path d="m3 12 9 5 9-5" />
                    <path d="m3 17 9 5 9-5" />
                  </svg>
                  <span>Shielded pools</span>
                </div>
                <span className="text-[11px] text-[var(--text-muted)]">⌄</span>
              </div>

              <div className="flex items-center justify-between h-[34px] px-2.5 rounded-[8px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-raised)] transition-colors">
                <div className="flex items-center space-x-2.5">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="9" cy="7" r="4" />
                    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                  <span>Solver nodes</span>
                </div>
                <span className="text-[11px] text-[var(--text-muted)]">⌄</span>
              </div>

              <div className="flex items-center space-x-2.5 h-[34px] px-2.5 rounded-[8px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-raised)] transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16l4-2 4 2 4-2 4 2V8z" />
                </svg>
                <span>Settlement receipts</span>
              </div>

              <div className="flex items-center space-x-2.5 h-[34px] px-2.5 rounded-[8px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-raised)] transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                <span>Burn telemetry</span>
              </div>
            </nav>
          </div>

          {/* Bottom Section: Execution Rails with Colored Dots */}
          <div className="pt-6 mt-6 border-t border-[var(--hairline)]">
            <div className="px-2 mb-2.5 text-[12px] font-mono text-[var(--text-muted)]">Execution rails</div>
            <div className="space-y-1.5 text-[13px]">
              {[
                { name: "Enclave TDX", count: "18", color: "#f5a623" },
                { name: "Groth16 BN254", count: "64", color: "#4cc38a" },
                { name: "Poseidon Escrow", count: "210", color: "#4b8bf5" },
                { name: "x402 Relay", count: "480", color: "#e56b92" },
                { name: "Public Fallback", count: "1.2k", color: "#9b87f5" },
              ].map((rail) => (
                <div key={rail.name} className="flex items-center justify-between px-2 py-1 text-[var(--text-secondary)]">
                  <div className="flex items-center space-x-2.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: rail.color, boxShadow: `0 0 8px ${rail.color}66` }}
                    />
                    <span>{rail.name}</span>
                  </div>
                  <span className="font-mono text-[12px] text-[var(--text-muted)] tabular-nums">{rail.count}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* ─── MAIN CONTENT COLUMN ───────────────────────── */}
        <div className="p-4 sm:p-7 space-y-6">
          {/* Top Header Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-[13px] text-[var(--text-secondary)]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              <span className="text-[var(--text-primary)] font-medium">Overview</span>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-2.5">
              <button
                aria-label="Notifications"
                className="w-8 h-8 rounded-[8px] bg-[var(--console-card)] border border-[var(--hairline)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </button>
              <div className="flex items-center space-x-2 h-8 px-2.5 rounded-[8px] bg-[var(--console-card)] border border-[var(--hairline)] text-[12.5px]">
                <span className="w-5 h-5 rounded-full bg-[var(--bg-raised)] text-[10px] font-mono flex items-center justify-center text-[var(--text-secondary)]">
                  OL
                </span>
                <span className="text-[var(--text-primary)] hidden xs:inline">Agent-04</span>
                <span className="text-[var(--text-muted)] text-[10px]">⌄</span>
              </div>
            </div>
          </div>

          {/* Page Title & Segmented Controls Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-[24px] sm:text-[30px] font-normal tracking-tight leading-none">
              <span className="text-[var(--text-primary)]">November </span>
              <span className="text-[var(--text-muted)]">2026</span>
            </h2>

            <div className="flex items-center space-x-2 self-start sm:self-auto">
              <div className="flex items-center p-0.5 rounded-[8px] bg-[var(--bg-card)] border border-[var(--hairline)] text-[12px]">
                {(["Slot", "Epoch", "Quarter"] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={`px-3 py-1 rounded-[6px] transition-colors ${
                      period === p
                        ? "bg-[var(--console-active-tab)] text-[var(--text-primary)] font-medium shadow-sm"
                        : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <div className="hidden sm:flex items-center space-x-2 h-[30px] px-3 rounded-[8px] bg-[var(--bg-card)] border border-[var(--hairline)] text-[12px] text-[var(--text-secondary)] tabular-nums">
                <span>Nov 1 – Nov 30</span>
                <span className="text-[var(--text-muted)] text-[10px]">⌄</span>
              </div>
            </div>
          </div>

          {/* ─── 4 STAT CARDS ROW ─── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3.5">
            {/* Stat Card 1: Settled this epoch + Studio-Lit Tilted Enclave Card */}
            <div className="relative h-[126px] p-4 rounded-[12px] bg-[var(--console-card)] border border-[var(--hairline)] flex flex-col justify-between overflow-hidden shadow-sm">
              <div className="relative z-10">
                <div className="text-[12.5px] text-[var(--text-secondary)]">Settled this epoch</div>
                <div className="text-[26px] font-medium text-[var(--text-primary)] tabular-nums tracking-tight mt-1">
                  {fmt(48210)}
                </div>
              </div>
              <div className="relative z-10 text-[11.5px] font-mono">
                <span className="text-[#4cc38a] font-medium">+12%</span>{" "}
                <span className="text-[var(--text-muted)]">vs last epoch</span>
              </div>

              {/* Studio-Lit Tilted Enclave Physical Cards */}
              <div className="absolute -right-3 bottom-2 w-[124px] h-[82px] pointer-events-none select-none opacity-90">
                {/* Back Card */}
                <div
                  className="absolute inset-0 rounded-[8px] border border-[var(--hairline-strong)]"
                  style={{
                    background: "linear-gradient(135deg, rgba(140,140,150,0.2) 0%, rgba(30,30,35,0.4) 100%)",
                    transform: "rotate(12deg) translate(8px, -12px) scale(0.92)",
                    boxShadow: "0 8px 18px rgba(0,0,0,0.25)",
                  }}
                />
                {/* Front Metallic Hardware Card */}
                <div
                  className="absolute inset-0 p-2.5 rounded-[8px] border border-[var(--hairline-strong)] flex flex-col justify-between"
                  style={{
                    background: "linear-gradient(135deg, rgba(160,165,180,0.3) 0%, rgba(50,55,65,0.6) 100%)",
                    transform: "rotate(-10deg) translate(-2px, 2px)",
                    boxShadow: "-4px 8px 20px rgba(0,0,0,0.35)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="w-5 h-3.5 rounded-[2.5px] border border-[var(--hairline-strong)]"
                      style={{
                        background: "linear-gradient(135deg, #d4d4d8 0%, #8e8e96 100%)",
                      }}
                    />
                    <span className="w-3 h-3 rounded-full bg-[var(--text-primary)] opacity-80" />
                  </div>
                  <div className="flex items-center justify-between text-[8.5px] font-mono text-[var(--text-secondary)] tracking-wider">
                    <span>•••• ••••</span>
                    <span className="text-[var(--text-primary)] font-medium">4663</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stat Card 2: SLA Timeouts */}
            <div className="h-[126px] p-4 rounded-[12px] bg-[var(--console-card)] border border-[var(--hairline)] flex flex-col justify-between shadow-sm">
              <div>
                <div className="text-[12.5px] text-[var(--text-secondary)]">SLA timeouts</div>
                <div className="text-[26px] font-medium text-[var(--text-primary)] tabular-nums tracking-tight mt-1">
                  07
                </div>
              </div>
              <div className="text-[11.5px] font-mono">
                <span className="text-[#4cc38a] font-medium">3 fewer</span>{" "}
                <span className="text-[var(--text-muted)]">vs last epoch</span>
              </div>
            </div>

            {/* Stat Card 3: Shielded Escrow */}
            <div className="h-[126px] p-4 rounded-[12px] bg-[var(--console-card)] border border-[var(--hairline)] flex flex-col justify-between shadow-sm">
              <div>
                <div className="text-[12.5px] text-[var(--text-secondary)]">Shielded escrow</div>
                <div className="text-[26px] font-medium text-[var(--text-primary)] tabular-nums tracking-tight mt-1">
                  {fmt(18940)}
                </div>
              </div>
              <div className="text-[11.5px] font-mono">
                <span className="text-[#4cc38a] font-medium">14</span>{" "}
                <span className="text-[var(--text-muted)]">open agent intents</span>
              </div>
            </div>

            {/* Stat Card 4: Cumulative Volume + Single-Accent Ember Histogram */}
            <div className="relative h-[126px] p-4 rounded-[12px] bg-[var(--console-card)] border border-[var(--hairline)] flex flex-col justify-between overflow-hidden shadow-sm">
              <div className="relative z-10">
                <div className="text-[12.5px] text-[var(--text-secondary)]">Cumulative volume</div>
                <div className="text-[26px] font-medium text-[var(--text-primary)] tabular-nums tracking-tight mt-1">
                  {fmt(124860)}
                </div>
              </div>
              <div className="relative z-10 text-[11.5px] font-mono">
                <span className="text-[#4cc38a] font-medium">4.2% ↑</span>{" "}
                <span className="text-[var(--text-muted)]">vs October</span>
              </div>

              {/* 11-Bar Histogram: 10 Neutral Steps + 1 Signal Ember Bar */}
              <div className="absolute right-4 bottom-3.5 flex items-end space-x-[4px] h-[72px]">
                {BARS.map((h, i) => {
                  const isLast = i === BARS.length - 1;
                  return (
                    <div
                      key={i}
                      style={{
                        height: `${h}%`,
                        background: isLast
                          ? "linear-gradient(180deg, #ff934f 0%, #ff6b2b 100%)"
                          : "var(--hairline-strong)",
                        boxShadow: isLast ? "0 0 12px rgba(255, 107, 43, 0.4)" : "none",
                      }}
                      className="w-[6px] rounded-t-[2px]"
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* ─── MIRRORED MULTI-SERIES CURVE CHART ─── */}
          <div className="p-4 sm:p-6 rounded-[12px] bg-[var(--console-card)] border border-[var(--hairline)] shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div>
                <div className="text-[13px] text-[var(--text-secondary)]">Confidential settlement velocity</div>
                <div className="text-[26px] sm:text-[28px] font-medium text-[var(--text-primary)] tabular-nums tracking-tight mt-0.5">
                  {fmt(524810)}
                </div>
                <div className="text-[12px] font-mono mt-1">
                  <span className="text-[#4cc38a] font-medium">18.4% ↑</span>{" "}
                  <span className="text-[var(--text-muted)]">shielded vs public mempool baseline (mirrored below)</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[11.5px] font-mono text-[var(--text-secondary)]">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#f5a623]" />
                  <span>Enclave TDX</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#4cc38a]" />
                  <span>Groth16</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#4b8bf5]" />
                  <span>Poseidon</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#e56b92]" />
                  <span>x402 Relay</span>
                </span>
              </div>
            </div>

            {/* SVG Multi-Series Curves (Responsive Scroll Container on mobile) */}
            <div className="relative w-full overflow-x-auto sm:overflow-visible">
              <div className="min-w-[620px] sm:min-w-full h-[250px] select-none">
                <svg viewBox="0 0 820 250" className="w-full h-full overflow-visible">
                  <defs>
                    <radialGradient id="peakGlow" cx="50%" cy="42%" r="38%">
                      <stop offset="0%" stopColor="#f5a623" stopOpacity="0.18" />
                      <stop offset="55%" stopColor="#4cc38a" stopOpacity="0.08" />
                      <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Horizontal Muted Grid Lines & Y-Axis Labels */}
                  {[
                    { y: 20, label: "160k" },
                    { y: 52, label: "120k" },
                    { y: 84, label: "80k" },
                    { y: 116, label: "40k" },
                    { y: 148, label: "0" },
                    { y: 180, label: "40k" },
                    { y: 212, label: "80k" },
                    { y: 242, label: "120k" },
                  ].map((row, idx) => (
                    <g key={idx}>
                      <text
                        x="32"
                        y={row.y + 4}
                        textAnchor="end"
                        className="fill-[var(--text-muted)] font-mono text-[10.5px] tabular-nums"
                      >
                        {row.label}
                      </text>
                      <line
                        x1="48"
                        y1={row.y}
                        x2="800"
                        y2={row.y}
                        stroke={row.label === "0" ? "var(--hairline-strong)" : "var(--hairline)"}
                        strokeWidth="1"
                      />
                    </g>
                  ))}

                  {/* Ambient Radial Illumination at Peak */}
                  <ellipse cx="365" cy="95" rx="220" ry="75" fill="url(#peakGlow)" />

                  {/* TOP HALF: ACTIVE SHIELDED RAIL SERIES */}
                  <path
                    d="M 90 148 C 190 148, 255 24, 365 24 C 475 24, 540 148, 640 148"
                    fill="none"
                    stroke="#f5a623"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 90 148 C 195 148, 260 52, 365 52 C 470 52, 535 148, 640 148"
                    fill="none"
                    stroke="#4cc38a"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 90 148 C 200 148, 265 82, 365 82 C 465 82, 530 148, 640 148"
                    fill="none"
                    stroke="#4b8bf5"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 90 148 C 210 148, 275 110, 365 110 C 455 110, 520 148, 640 148"
                    fill="none"
                    stroke="#e56b92"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 90 148 C 220 148, 285 132, 365 132 C 445 132, 510 148, 640 148"
                    fill="none"
                    stroke="#9b87f5"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  {/* BOTTOM HALF: MIRRORED BASELINE CURVES (Previous Epoch) */}
                  <path
                    d="M 210 162 C 310 162, 385 236, 485 236 C 585 236, 650 162, 750 162"
                    fill="none"
                    stroke="var(--hairline-strong)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 210 162 C 315 162, 390 216, 485 216 C 580 216, 645 162, 750 162"
                    fill="none"
                    stroke="var(--hairline)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 210 162 C 320 162, 395 198, 485 198 C 575 198, 640 162, 750 162"
                    fill="none"
                    stroke="var(--hairline)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  {/* X-Axis Month Labels along the Zero Line */}
                  {[
                    { x: 100, m: "Aug" },
                    { x: 230, m: "Sep" },
                    { x: 365, m: "Oct" },
                    { x: 500, m: "Nov" },
                    { x: 635, m: "Dec" },
                    { x: 765, m: "Jan" },
                  ].map((col) => (
                    <g
                      key={col.m}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredMonth(col.m)}
                    >
                      <text
                        x={col.x}
                        y="162"
                        textAnchor="middle"
                        className={`font-mono text-[11px] transition-colors ${
                          hoveredMonth === col.m
                            ? "fill-[var(--text-primary)] font-medium"
                            : "fill-[var(--text-muted)]"
                        }`}
                      >
                        {col.m}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
