"use client";

import React from "react";
import { IconLock, IconCheck, IconEyeOff } from "./Icons";

const AGENT_TASKS = [
  { agent: "Solver Node 0x8f", task: "Arbitrage feed", amt: "148.50", cur: "USDG", chain: "Robinhood" },
  { agent: "Worker Alpha", task: "Orderbook scan", amt: "42.00", cur: "USDG", chain: "Tempo" },
  { agent: "HFT Rebalancer", task: "Perp hedge", amt: "2,400.00", cur: "USDG", chain: "Robinhood" },
  { agent: "Research Agent", task: "x402 API calls", amt: "18.25", cur: "USDG", chain: "Base" },
  { agent: "Market Maker #03", task: "Liquidity quote", amt: "850.00", cur: "USDG", chain: "Robinhood" },
];

export function SealStream() {
  return (
    <div className="w-full overflow-hidden py-12 border-y border-[var(--line)] bg-[var(--app-ground)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-7">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--mute)]">
              The transformation mesh
            </span>
            <h2 className="text-xl sm:text-2xl font-light text-[var(--foreground)] mt-1 tracking-tight">
              Agent tasks enter readable. They settle sealed.
            </h2>
          </div>
          <div className="flex items-center space-x-4 text-xs font-mono text-[var(--mute)]">
            <span className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--mute)]"></span>
              <span>Transparent public input</span>
            </span>
            <span>&rarr;</span>
            <span className="flex items-center space-x-1.5 text-[var(--sealed)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--sealed)]"></span>
              <span>Zero-knowledge settlement</span>
            </span>
          </div>
        </div>

        {/* The Stream Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {AGENT_TASKS.slice(0, 3).map((t, idx) => (
            <div key={idx} className="gl-card p-5 space-y-4">
              {/* Top: Public Representation */}
              <div className="p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-xs font-mono">
                <div className="flex justify-between items-center text-[11px] text-[var(--mute)] mb-1">
                  <span>{t.task}</span>
                  <span className="text-[var(--faint)]">{t.chain} chain</span>
                </div>
                <div className="flex justify-between items-baseline mt-2">
                  <span className="text-[var(--foreground)] text-sm font-normal">To {t.agent}</span>
                  <span className="text-base font-light text-[var(--foreground)] tabular-nums">
                    {t.amt} <span className="text-xs text-[var(--mute)]">{t.cur}</span>
                  </span>
                </div>
              </div>

              {/* Arrow transition */}
              <div className="flex items-center justify-center space-x-2 text-[11px] font-mono text-[var(--mute)]">
                <span className="h-px bg-[var(--line)] flex-1"></span>
                <span>Veil Settlement Hub</span>
                <span className="h-px bg-[var(--line)] flex-1"></span>
              </div>

              {/* Bottom: Sealed Output */}
              <div className="p-3.5 rounded-xl bg-[var(--sealed-soft)] border border-[var(--sealed)]/30 text-xs font-mono">
                <div className="flex justify-between items-center text-[11px] text-[var(--sealed)] mb-1">
                  <span className="flex items-center space-x-1">
                    <IconLock size={12} />
                    <span>Sealed Note Commitment</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[var(--sealed)]">Groth16 BN254</span>
                </div>
                <div className="flex justify-between items-baseline mt-2">
                  <span className="text-[var(--foreground)] text-xs">Recipient: [Shielded]</span>
                  <span className="text-sm font-medium text-[var(--sealed)]">
                    Amount: [Hidden]
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
