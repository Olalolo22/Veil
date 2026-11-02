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
 * 4. Multi-series smooth cubic-bezier curve chart with a mirrored grey baseline reflection below zero.
 */

export default function RisingConsole() {
  const [period, setPeriod] = useState<"Slot" | "Epoch" | "Quarter">("Epoch");
  const [hoveredMonth, setHoveredMonth] = useState<string | null>("Oct");

  const multiplier = period === "Slot" ? 0.12 : period === "Epoch" ? 1 : 3.4;
  const fmt = (n: number) => "$" + Math.round(n * multiplier).toLocaleString("en-US");

  const BARS = [22, 26, 24, 32, 38, 44, 49, 55, 63, 72, 94];

  return (
    <div className="w-full max-w-[1280px] mx-auto rounded-t-[16px] rounded-b-[16px] bg-[#141415] border border-[rgba(237,237,237,0.09)] shadow-[0_32px_80px_rgba(0,0,0,0.85)] overflow-hidden">
      {/* macOS Window Chrome Titlebar */}
      <div className="h-[36px] px-4 bg-[#0f0f10] border-b border-[rgba(237,237,237,0.07)] flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a2d]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a2d]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a2d]" />
        </div>
        <div className="text-[11px] font-mono text-[#717177]">
          veil.protocol — coordinator-daemon (robinhood-4663)
        </div>
        <div className="w-12" />
      </div>

      {/* App Shell Grid: 240px Sidebar + Fluid Main Column */}
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr]">
        {/* ─── LEFT SIDEBAR (240px, #0f0f10) ───────────────────────── */}
        <aside className="hidden lg:flex flex-col justify-between p-4 bg-[#0f0f10] border-r border-[rgba(237,237,237,0.07)] select-none">
          <div>
            {/* Brand Row */}
            <div className="flex items-center justify-between px-2 py-1.5 mb-4">
              <div className="flex items-center space-x-2.5">
                <span className="w-4 h-4 rounded-full bg-[#ededed] flex items-center justify-center">
                  <span className="w-1.5 h-3 bg-[#0f0f10] rotate-12 rounded-sm" />
                </span>
                <span className="text-[15px] font-medium text-[#ededed] tracking-tight">Veil</span>
              </div>
              <span className="w-5 h-5 rounded border border-[rgba(237,237,237,0.12)] flex items-center justify-center text-[10px] text-[#85858b]">
                ◧
              </span>
            </div>

            {/* Search Input with Keycaps */}
            <div className="flex items-center justify-between h-[34px] px-2.5 rounded-[8px] bg-[#161618] border border-[rgba(237,237,237,0.08)] text-[13px] text-[#85858b] mb-6">
              <div className="flex items-center space-x-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                <span>Search</span>
              </div>
              <div className="flex items-center space-x-1 font-mono text-[10px]">
                <kbd className="px-1.5 py-0.5 rounded-[4px] bg-[#232325] border border-[rgba(237,237,237,0.09)] text-[#a1a1a6]">
                  ⌘
                </kbd>
                <kbd className="px-1.5 py-0.5 rounded-[4px] bg-[#232325] border border-[rgba(237,237,237,0.09)] text-[#a1a1a6]">
                  K
                </kbd>
              </div>
            </div>

            {/* Section Label: Navigation (24px above, 8px below, sentence case mono) */}
            <div className="px-2 mb-2 text-[12px] font-mono text-[#85858b]">Navigation</div>

            <nav className="space-y-1 text-[13.5px]">
              {/* Active Row: Small tone shift inside one neutral + top highlight */}
              <div
                className="flex items-center space-x-2.5 h-[34px] px-2.5 rounded-[8px] text-[#ededed] font-medium"
                style={{
                  background: "linear-gradient(180deg, #28282b 0%, #1e1e21 100%)",
                  boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.12)",
                  border: "1px solid rgba(237, 237, 237, 0.08)",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-[#ededed]">
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" />
                </svg>
                <span>Overview</span>
              </div>

              <div className="flex items-center justify-between h-[34px] px-2.5 rounded-[8px] text-[#a1a1a6] hover:text-[#ededed] hover:bg-[#19191b] transition-colors">
                <div className="flex items-center space-x-2.5">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#85858b]">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                  <span>Intent mesh</span>
                </div>
                <span className="font-mono text-[12px] text-[#85858b] tabular-nums">12</span>
              </div>

              <div className="flex items-center justify-between h-[34px] px-2.5 rounded-[8px] text-[#a1a1a6] hover:text-[#ededed] hover:bg-[#19191b] transition-colors">
                <div className="flex items-center space-x-2.5">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#85858b]">
                    <path d="m12 2 9 4.9L12 12 3 6.9 12 2z" />
                    <path d="m3 12 9 5 9-5" />
                    <path d="m3 17 9 5 9-5" />
                  </svg>
                  <span>Shielded pools</span>
                </div>
                <span className="text-[11px] text-[#85858b]">⌄</span>
              </div>

              <div className="flex items-center justify-between h-[34px] px-2.5 rounded-[8px] text-[#a1a1a6] hover:text-[#ededed] hover:bg-[#19191b] transition-colors">
                <div className="flex items-center space-x-2.5">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#85858b]">
                    <circle cx="9" cy="7" r="4" />
                    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                  <span>Solver nodes</span>
                </div>
                <span className="text-[11px] text-[#85858b]">⌄</span>
              </div>

              <div className="flex items-center space-x-2.5 h-[34px] px-2.5 rounded-[8px] text-[#a1a1a6] hover:text-[#ededed] hover:bg-[#19191b] transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#85858b]">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16l4-2 4 2 4-2 4 2V8z" />
                </svg>
                <span>Settlement receipts</span>
              </div>

              <div className="flex items-center space-x-2.5 h-[34px] px-2.5 rounded-[8px] text-[#a1a1a6] hover:text-[#ededed] hover:bg-[#19191b] transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#85858b]">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                <span>Burn telemetry</span>
              </div>
            </nav>
          </div>

          {/* Bottom Section: Execution Rails with Colored Dots */}
          <div className="pt-6 mt-6 border-t border-[rgba(237,237,237,0.07)]">
            <div className="px-2 mb-2.5 text-[12px] font-mono text-[#85858b]">Execution rails</div>
            <div className="space-y-1.5 text-[13px]">
              {[
                { name: "Enclave TDX", count: "18", color: "#f5a623" },
                { name: "Groth16 BN254", count: "64", color: "#4cc38a" },
                { name: "Poseidon Escrow", count: "210", color: "#4b8bf5" },
                { name: "x402 Relay", count: "480", color: "#e56b92" },
                { name: "Public Fallback", count: "1.2k", color: "#9b87f5" },
              ].map((rail) => (
                <div key={rail.name} className="flex items-center justify-between px-2 py-1 text-[#a1a1a6]">
                  <div className="flex items-center space-x-2.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: rail.color, boxShadow: `0 0 8px ${rail.color}66` }}
                    />
                    <span>{rail.name}</span>
                  </div>
                  <span className="font-mono text-[12px] text-[#85858b] tabular-nums">{rail.count}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* ─── MAIN CONTENT COLUMN (#141415) ───────────────────────── */}
        <div className="p-5 sm:p-7 space-y-6">
          {/* Top Header Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-[13px] text-[#a1a1a6]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#85858b]">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              <span className="text-[#ededed]">Overview</span>
            </div>

            <div className="flex items-center space-x-2.5">
              <button
                aria-label="Notifications"
                className="w-8 h-8 rounded-[8px] bg-[#19191b] border border-[rgba(237,237,237,0.08)] flex items-center justify-center text-[#85858b] hover:text-[#ededed] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </button>
              <div className="flex items-center space-x-2 h-8 px-2.5 rounded-[8px] bg-[#19191b] border border-[rgba(237,237,237,0.08)] text-[12.5px]">
                <span className="w-5 h-5 rounded-full bg-[#262629] text-[10px] font-mono flex items-center justify-center text-[#a1a1a6]">
                  OL
                </span>
                <span className="text-[#ededed]">Agent-04</span>
                <span className="text-[#85858b] text-[10px]">⌄</span>
              </div>
            </div>
          </div>

          {/* Page Title & Segmented Controls Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-[28px] sm:text-[32px] font-normal tracking-tight leading-none">
              <span className="text-[#ededed]">November </span>
              <span className="text-[#6e6e73]">2026</span>
            </h2>

            <div className="flex items-center space-x-2.5 self-start sm:self-auto">
              <div className="flex items-center p-0.5 rounded-[8px] bg-[#19191b] border border-[rgba(237,237,237,0.08)] text-[12px]">
                {(["Slot", "Epoch", "Quarter"] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={`px-3 py-1 rounded-[6px] transition-colors ${
                      period === p
                        ? "bg-[#262629] text-[#ededed] font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                        : "text-[#85858b] hover:text-[#ededed]"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <div className="hidden sm:flex items-center space-x-2 h-[30px] px-3 rounded-[8px] bg-[#19191b] border border-[rgba(237,237,237,0.08)] text-[12px] text-[#a1a1a6] tabular-nums">
                <span>Nov 1 – Nov 30</span>
                <span className="text-[#85858b] text-[10px]">⌄</span>
              </div>
            </div>
          </div>

          {/* ─── 4 STAT CARDS ROW (With Rendered Hardware Card & Ember Histogram) ─── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3.5">
            {/* Stat Card 1: Settled this month + Studio-Lit Tilted Enclave Card Object */}
            <div className="relative h-[126px] p-4 rounded-[12px] bg-[#19191b] border border-[rgba(237,237,237,0.08)] flex flex-col justify-between overflow-hidden">
              <div className="relative z-10">
                <div className="text-[12.5px] text-[#a1a1a6]">Settled this epoch</div>
                <div className="text-[26px] font-medium text-[#ededed] tabular-nums tracking-tight mt-1">
                  {fmt(48210)}
                </div>
              </div>
              <div className="relative z-10 text-[11.5px] font-mono">
                <span className="text-[#4cc38a]">+12%</span>{" "}
                <span className="text-[#717177]">vs last epoch</span>
              </div>

              {/* Studio-Lit Tilted Physical Enclave / Stealth Cards (from unslop-dashboard-after) */}
              <div className="absolute -right-3 bottom-2 w-[124px] h-[82px] pointer-events-none select-none">
                {/* Back Card */}
                <div
                  className="absolute inset-0 rounded-[8px] border border-[rgba(255,255,255,0.12)]"
                  style={{
                    background: "linear-gradient(135deg, #2a2b30 0%, #141518 100%)",
                    transform: "rotate(12deg) translate(8px, -12px) scale(0.92)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.6)",
                  }}
                />
                {/* Front Metallic Hardware Card */}
                <div
                  className="absolute inset-0 p-2.5 rounded-[8px] border border-[rgba(255,255,255,0.18)] flex flex-col justify-between"
                  style={{
                    background: "linear-gradient(135deg, #35363b 0%, #1d1e22 52%, #111215 100%)",
                    transform: "rotate(-10deg) translate(-2px, 2px)",
                    boxShadow: "-8px 12px 24px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.22)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    {/* Metallic Enclave Chip */}
                    <span
                      className="w-5 h-3.5 rounded-[2.5px] border border-[rgba(255,255,255,0.25)]"
                      style={{
                        background: "linear-gradient(135deg, #d4d4d8 0%, #8e8e96 100%)",
                      }}
                    />
                    <span className="w-3 h-3 rounded-full bg-[#ededed]/90" />
                  </div>
                  <div className="flex items-center justify-between text-[8.5px] font-mono text-[#a1a1a6] tracking-wider">
                    <span>•••• ••••</span>
                    <span className="text-[#ededed]">4663</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stat Card 2: SLA Breaches */}
            <div className="h-[126px] p-4 rounded-[12px] bg-[#19191b] border border-[rgba(237,237,237,0.08)] flex flex-col justify-between">
              <div>
                <div className="text-[12.5px] text-[#a1a1a6]">SLA timeouts</div>
                <div className="text-[26px] font-medium text-[#ededed] tabular-nums tracking-tight mt-1">
                  07
                </div>
              </div>
              <div className="text-[11.5px] font-mono">
                <span className="text-[#4cc38a]">3 fewer</span>{" "}
                <span className="text-[#717177]">vs last epoch</span>
              </div>
            </div>

            {/* Stat Card 3: Shielded Escrow */}
            <div className="h-[126px] p-4 rounded-[12px] bg-[#19191b] border border-[rgba(237,237,237,0.08)] flex flex-col justify-between">
              <div>
                <div className="text-[12.5px] text-[#a1a1a6]">Shielded escrow</div>
                <div className="text-[26px] font-medium text-[#ededed] tabular-nums tracking-tight mt-1">
                  {fmt(18940)}
                </div>
              </div>
              <div className="text-[11.5px] font-mono">
                <span className="text-[#4cc38a]">14</span>{" "}
                <span className="text-[#717177]">open agent intents</span>
              </div>
            </div>

            {/* Stat Card 4: Protocol Volume + Single-Accent Ember Histogram */}
            <div className="relative h-[126px] p-4 rounded-[12px] bg-[#19191b] border border-[rgba(237,237,237,0.08)] flex flex-col justify-between overflow-hidden">
              <div className="relative z-10">
                <div className="text-[12.5px] text-[#a1a1a6]">Cumulative volume</div>
                <div className="text-[26px] font-medium text-[#ededed] tabular-nums tracking-tight mt-1">
                  {fmt(124860)}
                </div>
              </div>
              <div className="relative z-10 text-[11.5px] font-mono">
                <span className="text-[#4cc38a]">4.2% ↑</span>{" "}
                <span className="text-[#717177]">vs October</span>
              </div>

              {/* 11-Bar Histogram: 10 Neutral Steps + 1 Signal Ember Bar (from unslop-hero-after) */}
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
                          : "linear-gradient(180deg, #2e2e32 0%, #222225 100%)",
                        boxShadow: isLast ? "0 0 14px rgba(255, 107, 43, 0.35)" : "none",
                      }}
                      className="w-[6px] rounded-t-[2px]"
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* ─── MIRRORED MULTI-SERIES CURVE CHART (From unslop-dashboard-after) ─── */}
          <div className="p-5 sm:p-6 rounded-[12px] bg-[#19191b] border border-[rgba(237,237,237,0.08)]">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div>
                <div className="text-[13px] text-[#a1a1a6]"> Confidential settlement velocity</div>
                <div className="text-[28px] font-medium text-[#ededed] tabular-nums tracking-tight mt-0.5">
                  {fmt(524810)}
                </div>
                <div className="text-[12px] font-mono mt-1">
                  <span className="text-[#4cc38a]">18.4% ↑</span>{" "}
                  <span className="text-[#717177]">shielded vs public mempool baseline (mirrored below)</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-[11.5px] font-mono text-[#a1a1a6]">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#f5a623]" />
                  <span>Enclave TDX</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#4cc38a]" />
                  <span>Groth16 BN254</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#4b8bf5]" />
                  <span>Poseidon Escrow</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#e56b92]" />
                  <span>x402 Relay</span>
                </span>
              </div>
            </div>

            {/* SVG Multi-Series Smooth Bell Curves + Mirrored Grey Comparison */}
            <div className="relative w-full h-[250px] select-none">
              <svg viewBox="0 0 820 250" className="w-full h-full overflow-visible">
                <defs>
                  <radialGradient id="peakGlow" cx="50%" cy="42%" r="38%">
                    <stop offset="0%" stopColor="#f5a623" stopOpacity="0.16" />
                    <stop offset="55%" stopColor="#4cc38a" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
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
                      className="fill-[#6e6e73] font-mono text-[10.5px] tabular-nums"
                    >
                      {row.label}
                    </text>
                    <line
                      x1="48"
                      y1={row.y}
                      x2="800"
                      y2={row.y}
                      stroke={row.label === "0" ? "rgba(237,237,237,0.14)" : "rgba(237,237,237,0.05)"}
                      strokeWidth="1"
                    />
                  </g>
                ))}

                {/* Ambient Radial Illumination at Peak */}
                <ellipse cx="365" cy="95" rx="220" ry="75" fill="url(#peakGlow)" />

                {/* ─── TOP HALF: ACTIVE SHIELDED RAIL SERIES (Colored Smooth Curves) ─── */}
                {/* Series 1: Amber (Enclave TDX) */}
                <path
                  d="M 90 148 C 190 148, 255 24, 365 24 C 475 24, 540 148, 640 148"
                  fill="none"
                  stroke="#f5a623"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                {/* Series 2: Emerald (Groth16 BN254) */}
                <path
                  d="M 90 148 C 195 148, 260 52, 365 52 C 470 52, 535 148, 640 148"
                  fill="none"
                  stroke="#4cc38a"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                {/* Series 3: Cobalt (Poseidon Escrow) */}
                <path
                  d="M 90 148 C 200 148, 265 82, 365 82 C 465 82, 530 148, 640 148"
                  fill="none"
                  stroke="#4b8bf5"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                {/* Series 4: Rose (x402 Relay) */}
                <path
                  d="M 90 148 C 210 148, 275 110, 365 110 C 455 110, 520 148, 640 148"
                  fill="none"
                  stroke="#e56b92"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Series 5: Lavender (Public Fallback) */}
                <path
                  d="M 90 148 C 220 148, 285 132, 365 132 C 445 132, 510 148, 640 148"
                  fill="none"
                  stroke="#9b87f5"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                {/* ─── BOTTOM HALF: MIRRORED GREY COMPARISON CURVES (Previous Epoch) ─── */}
                <path
                  d="M 210 162 C 310 162, 385 236, 485 236 C 585 236, 650 162, 750 162"
                  fill="none"
                  stroke="rgba(237,237,237,0.28)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M 210 162 C 315 162, 390 216, 485 216 C 580 216, 645 162, 750 162"
                  fill="none"
                  stroke="rgba(237,237,237,0.20)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M 210 162 C 320 162, 395 198, 485 198 C 575 198, 640 162, 750 162"
                  fill="none"
                  stroke="rgba(237,237,237,0.14)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 210 162 C 325 162, 400 182, 485 182 C 570 182, 635 162, 750 162"
                  fill="none"
                  stroke="rgba(237,237,237,0.09)"
                  strokeWidth="1.4"
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
                        hoveredMonth === col.m ? "fill-[#ededed] font-medium" : "fill-[#717177]"
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
  );
}

