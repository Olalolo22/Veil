"use client";

import React, { useState } from "react";
import { IconLock, IconCheck, IconEyeOff, IconBot, IconTerminal } from "./Icons";

type View = "you" | "public";

export function LiveProduct() {
  const [view, setView] = useState<View>("you");
  const [budget, setBudget] = useState<number>(150);
  const [sla, setSla] = useState<number>(50);
  const [tested, setTested] = useState<boolean>(false);

  const handleTestRun = () => {
    setTested(true);
    setTimeout(() => setTested(false), 2000);
  };

  return (
    <section className="py-20 max-w-[1400px] mx-auto px-4 sm:px-7">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--mute)]">
            Interactive Working Modules
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-[var(--foreground)] mt-1 tracking-tight">
            See the difference on the public chain
          </h2>
        </div>

        {/* Global View Toggle */}
        <div className="flex items-center p-1 rounded-full bg-[var(--surface)] border border-[var(--line)] self-start md:self-auto">
          <button
            onClick={() => setView("you")}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-colors ${
              view === "you"
                ? "bg-[var(--ink)] text-[var(--on-ink)] font-medium shadow-sm"
                : "text-[var(--mute)] hover:text-[var(--foreground)]"
            }`}
          >
            Authorized viewing key
          </button>
          <button
            onClick={() => setView("public")}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-colors ${
              view === "public"
                ? "bg-[var(--ink)] text-[var(--on-ink)] font-medium shadow-sm"
                : "text-[var(--mute)] hover:text-[var(--foreground)]"
            }`}
          >
            Public chain view
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Agent Task Procurement */}
        <div className="gl-card p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[var(--mute)] uppercase tracking-wider">Module 01</span>
              {view === "you" ? (
                <span className="text-xs text-[var(--sealed)] font-medium flex items-center space-x-1">
                  <IconLock size={12} />
                  <span>Only authorized agents</span>
                </span>
              ) : (
                <span className="text-xs text-[var(--mute)] font-medium flex items-center space-x-1">
                  <IconEyeOff size={12} />
                  <span>Public on explorer</span>
                </span>
              )}
            </div>

            <h3 className="text-lg font-light text-[var(--foreground)]">Agent task escrow</h3>

            {/* Chips for budget */}
            <div className="space-y-1.5">
              <span className="text-[11px] text-[var(--mute)] font-mono">Escrow allocation</span>
              <div className="flex items-center space-x-2">
                {[50, 150, 500].map((b) => (
                  <button
                    key={b}
                    onClick={() => setBudget(b)}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-colors ${
                      budget === b
                        ? "bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--line-strong)]"
                        : "bg-[var(--surface)] text-[var(--mute)] border border-[var(--line)]"
                    }`}
                  >
                    {b} USDG
                  </button>
                ))}
              </div>
            </div>

            {/* Representation based on view */}
            <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--line)] font-mono text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[var(--mute)]">Dispatched by:</span>
                <span className="text-[var(--foreground)]">
                  {view === "you" ? "Client Agent #04" : "[Masked Commitment]"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--mute)]">Escrow amount:</span>
                <span className="tabular-nums font-medium">
                  {view === "you" ? (
                    `${budget}.00 USDG`
                  ) : (
                    <span className="text-[var(--sealed)]">[Hidden by SNARK]</span>
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--mute)]">Strategy payload:</span>
                <span className="text-[var(--foreground)]">
                  {view === "you" ? "Arbitrage solver" : "[Encrypted Ciphertext]"}
                </span>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-[var(--mute)] pt-2 border-t border-[var(--line)]">
            Settlement collateral is non-custodial and locked via Poseidon commitments.
          </div>
        </div>

        {/* Card 2: Enclave Execution Latency */}
        <div className="gl-card p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[var(--mute)] uppercase tracking-wider">Module 02</span>
              <span className="text-xs text-[var(--sealed)] font-medium">Intel TDX Enclave</span>
            </div>

            <h3 className="text-lg font-light text-[var(--foreground)]">Sub-slot clearing</h3>

            <div className="space-y-1.5">
              <span className="text-[11px] text-[var(--mute)] font-mono">SLA latency ceiling</span>
              <div className="flex items-center space-x-2">
                {[30, 50, 100].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSla(s)}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-colors ${
                      sla === s
                        ? "bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--line-strong)]"
                        : "bg-[var(--surface)] text-[var(--mute)] border border-[var(--line)]"
                    }`}
                  >
                    &lt; {s}ms
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--line)] font-mono text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[var(--mute)]">Hardware rail:</span>
                <span className="text-[var(--foreground)]">MagicBlock TDX Enclave</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--mute)]">Mean clearance:</span>
                <span className="text-[var(--sealed)] font-medium tabular-nums">38ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--mute)]">SLA status:</span>
                <span className="text-[var(--sealed)] font-medium">Within constraints</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleTestRun}
            className="btn btn-ghost w-full py-2.5 text-xs font-mono"
          >
            {tested ? "Verified in 38ms ✓" : "Benchmark enclave clearance"}
          </button>
        </div>

        {/* Card 3: Deflation & Buybacks */}
        <div className="gl-card p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[var(--mute)] uppercase tracking-wider">Module 03</span>
              <span className="text-xs text-[var(--sealed)] font-medium">50 bps protocol fee</span>
            </div>

            <h3 className="text-lg font-light text-[var(--foreground)]">Programmatic buybacks</h3>

            <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--line)] font-mono text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[var(--mute)]">Task volume:</span>
                <span className="tabular-nums">{budget}.00 USDG</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--mute)]">Fee captured (0.5%):</span>
                <span className="text-[var(--sealed)] font-medium tabular-nums">
                  {(budget * 0.005).toFixed(4)} USDG
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--mute)]">Destination:</span>
                <span className="text-[var(--foreground)]">$VEIL DEX pool (Burn)</span>
              </div>
            </div>

            <p className="text-xs text-[var(--mute)] leading-relaxed">
              Every settled transaction automatically market-buys and burns $VEIL from the Robinhood DEX pool,
              creating direct deflation from machine settlement volume.
            </p>
          </div>

          <div className="text-[11px] text-[var(--mute)] pt-2 border-t border-[var(--line)]">
            Verified on Robinhood Chain (ID: 4663) and Tempo Mainnet.
          </div>
        </div>
      </div>
    </section>
  );
}
