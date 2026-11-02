"use client";

import React, { useState, useEffect } from "react";

/**
 * RuledBento — Built from stageshow/examples/ruled-bento/
 *
 * One rounded container with 1px hairline rules created by the container background
 * showing through 1px gaps between cells.
 * Layout: 2×1 + 1×1, then 1×1 + 2×1, then 3×1 full-width band.
 */

export default function RuledBento() {
  // Tile 1: Terminal simulation state
  const [termStep, setTermStep] = useState<number>(0);
  // Tile 2: Latency stat state
  const [latencyChoice, setLatencyChoice] = useState<"standard" | "ultra">("standard");
  // Tile 4: Payout flow state
  const [payoutState, setPayoutState] = useState<"idle" | "settling" | "settled">("idle");

  // Terminal auto-run loop
  useEffect(() => {
    const timer = setInterval(() => {
      setTermStep((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleTriggerPayout = () => {
    if (payoutState !== "idle") return;
    setPayoutState("settling");
    setTimeout(() => {
      setPayoutState("settled");
      setTimeout(() => setPayoutState("idle"), 4000);
    }, 1200);
  };

  return (
    <div className="w-full select-none">
      {/* ─── THE RULED GRID CONTAINER (1px gap reveals border color) ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] rounded-[18px] bg-[#222226] border border-[#222226] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
        
        {/* ─── TILE 1: HERO TERMINAL (Span 2x1) ────────────────────────── */}
        <section className="lg:col-span-2 min-h-[380px] p-6 sm:p-8 bg-[#0e0e10] flex flex-col justify-between">
          <div>
            <div className="text-[12px] font-mono text-[#85858b] uppercase tracking-wider mb-2">
              01 / SLA Procurement
            </div>
            <h3 className="text-[20px] sm:text-[22px] font-medium text-[#ededed] tracking-tight leading-snug">
              Sub-50ms autonomous agent matching
            </h3>
            <p className="text-[13.5px] text-[#85858b] max-w-[500px] mt-2 leading-relaxed font-normal">
              Worker nodes submit cryptographic latency guarantees and reputation attestations.
              The deterministic on-chain scoring function executes inside an Intel TDX hardware enclave.
            </p>
          </div>

          {/* Terminal Window Widget */}
          <div className="mt-6 rounded-[10px] bg-[#141416] border border-[rgba(237,237,237,0.08)] overflow-hidden font-mono text-xs shadow-lg">
            <div className="h-7 px-3 bg-[#0a0a0c] border-b border-[rgba(237,237,237,0.06)] flex items-center justify-between text-[11px] text-[#717177]">
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-[#262629]" />
                <span className="w-2 h-2 rounded-full bg-[#262629]" />
                <span className="w-2 h-2 rounded-full bg-[#262629]" />
                <span className="ml-2 text-[#a1a1a6]">veil match — zsh</span>
              </div>
              <span>TDX-01</span>
            </div>

            <div className="p-4 space-y-2.5 text-[12px] text-[#a1a1a6]">
              <div className="flex items-center space-x-2 text-[#ededed]">
                <span className="text-[#ff6b2b]">➜</span>
                <span className="text-[#717177]">~/veil</span>
                <span>veil match --intent arbitrage-scan --max-latency 50ms</span>
              </div>

              <div className="text-[#85858b]">
                [daemon] Ingesting task intent #1042 · 150.00 USDG escrow locked...
              </div>

              {termStep >= 1 && (
                <div className="flex items-center space-x-3 text-[#ededed]">
                  <span className="text-[#717177]">Evaluating candidates:</span>
                  <div className="w-36 h-2 rounded-full bg-[#1c1c1f] overflow-hidden">
                    <div
                      className="h-full bg-[#4cc38a] transition-all duration-700 ease-out"
                      style={{ width: termStep >= 2 ? "100%" : "45%" }}
                    />
                  </div>
                  <span className="text-[11px] text-[#4cc38a] tabular-nums">
                    {termStep >= 2 ? "14/14" : "6/14"}
                  </span>
                </div>
              )}

              {termStep >= 2 && (
                <div className="text-[#4cc38a] flex items-center space-x-1.5 font-medium">
                  <span>✓</span>
                  <span>Matched Worker Node 0x8f2a in 38ms (Score: 96.4 pts)</span>
                </div>
              )}

              {termStep >= 3 && (
                <div className="text-[11px] text-[#717177] pt-1 border-t border-[rgba(237,237,237,0.06)] flex justify-between">
                  <span>SLA Guarantee: Latency ≤ 40ms</span>
                  <span className="text-[#ff6b2b]">Bond: 500 $VEIL locked</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ─── TILE 2: LATENCY STAT (Span 1x1) ─────────────────────────── */}
        <section className="min-h-[380px] p-6 sm:p-8 bg-[#0e0e10] flex flex-col justify-between">
          <div>
            <div className="text-[12px] font-mono text-[#85858b] uppercase tracking-wider mb-2">
              02 / Latency Metric
            </div>
            <h3 className="text-[20px] font-medium text-[#ededed] tracking-tight leading-snug">
              38ms median clearance
            </h3>
            <p className="text-[13px] text-[#85858b] mt-2 leading-relaxed">
              Sub-slot settlement leaves zero mempool window for MEV searchers to front-run trades.
            </p>
          </div>

          <div className="my-auto py-6">
            <div className="text-[64px] font-light text-[#ededed] tracking-tight leading-none tabular-nums">
              {latencyChoice === "standard" ? "38" : "24"}
              <span className="text-[24px] text-[#4cc38a] font-normal ml-1">ms</span>
            </div>
            <div className="text-[12px] font-mono text-[#85858b] mt-2">
              6.8x faster than browser WASM ZK
            </div>
          </div>

          <div className="flex items-center p-1 rounded-[8px] bg-[#161618] border border-[rgba(237,237,237,0.08)] text-[12px] font-mono">
            <button
              onClick={() => setLatencyChoice("standard")}
              className={`flex-1 py-1 rounded-[6px] transition-colors ${
                latencyChoice === "standard"
                  ? "bg-[#232326] text-[#ededed] font-medium shadow-sm"
                  : "text-[#85858b] hover:text-[#ededed]"
              }`}
            >
              Standard TDX
            </button>
            <button
              onClick={() => setLatencyChoice("ultra")}
              className={`flex-1 py-1 rounded-[6px] transition-colors ${
                latencyChoice === "ultra"
                  ? "bg-[#232326] text-[#ededed] font-medium shadow-sm"
                  : "text-[#85858b] hover:text-[#ededed]"
              }`}
            >
              PER Sub-slot
            </button>
          </div>
        </section>

        {/* ─── TILE 3: ZK NULLIFIER TOPOLOGY (Span 1x1) ───────────────── */}
        <section className="min-h-[340px] p-6 sm:p-8 bg-[#0e0e10] flex flex-col justify-between">
          <div>
            <div className="text-[12px] font-mono text-[#85858b] uppercase tracking-wider mb-2">
              03 / Privacy Invariant
            </div>
            <h3 className="text-[20px] font-medium text-[#ededed] tracking-tight leading-snug">
              Zero mempool exposure
            </h3>
            <p className="text-[13px] text-[#85858b] mt-2 leading-relaxed">
              Poseidon commitments on BN254 shield task budgets, strategies, and worker balances.
            </p>
          </div>

          {/* Interactive Cryptographic Node Flow */}
          <div className="my-auto py-4 space-y-2.5 font-mono text-xs">
            <div className="p-3 rounded-[8px] bg-[#141416] border border-[rgba(237,237,237,0.08)] flex items-center justify-between">
              <span className="text-[#85858b]">Client Commitment:</span>
              <span className="text-[#ededed]">Poseidon(secret, 150)</span>
            </div>
            <div className="flex justify-center text-[#717177] text-[11px]">↓ Groth16 Verifier</div>
            <div className="p-3 rounded-[8px] bg-[#141416] border border-[rgba(76,195,138,0.25)] flex items-center justify-between">
              <span className="text-[#4cc38a]">Nullifier State:</span>
              <span className="text-[#4cc38a] font-medium">0x7f4a... Unspent ✓</span>
            </div>
          </div>

          <div className="text-[11px] font-mono text-[#717177] pt-2 border-t border-[rgba(237,237,237,0.06)]">
            Verified on Robinhood Chain 4663
          </div>
        </section>

        {/* ─── TILE 4: CONNECTOR PAYOUT FLOW (Span 2x1) ────────────────── */}
        <section className="lg:col-span-2 min-h-[340px] p-6 sm:p-8 bg-[#0e0e10] flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <div className="text-[12px] font-mono text-[#85858b] uppercase tracking-wider mb-2">
                04 / Non-Custodial Settlement
              </div>
              <h3 className="text-[20px] sm:text-[22px] font-medium text-[#ededed] tracking-tight leading-snug">
                Verifiable note payout &amp; burn
              </h3>
              <p className="text-[13.5px] text-[#85858b] max-w-[480px] mt-2 leading-relaxed">
                Escrow funds remain locked in smart contracts until the worker submits valid execution output.
                Settlement executes privately without revealing the recipient.
              </p>
            </div>

            <button
              onClick={handleTriggerPayout}
              className="self-start px-4 py-2 rounded-[8px] bg-[#ededed] text-[#0f0f10] text-xs font-medium hover:bg-white transition-colors shadow-sm whitespace-nowrap"
            >
              {payoutState === "idle" && "Simulate Settlement"}
              {payoutState === "settling" && "Proving on BN254..."}
              {payoutState === "settled" && "Settled & Burned ✓"}
            </button>
          </div>

          {/* Interactive Dual-Node Connector Diagram */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-5 gap-3 items-center font-mono text-xs">
            {/* Left Node: Escrow */}
            <div className="sm:col-span-2 p-4 rounded-[10px] bg-[#141416] border border-[rgba(237,237,237,0.08)] space-y-1.5">
              <div className="flex justify-between text-[#85858b] text-[11px]">
                <span>Escrow Vault</span>
                <span>VeilSettlementHub</span>
              </div>
              <div className="text-sm font-medium text-[#ededed] tabular-nums">150.00 USDG</div>
              <div className="text-[11px] text-[#4cc38a]">Status: Collateral Locked</div>
            </div>

            {/* Center: Connector Flow Indicator */}
            <div className="flex flex-col items-center justify-center py-2 text-[11px] text-[#717177]">
              <span className="hidden sm:inline">──── 38ms ───▶</span>
              <span className="sm:hidden">▼ 38ms</span>
              <span className="text-[10px] text-[#ff6b2b]">50 bps burn</span>
            </div>

            {/* Right Node: Shielded Payout */}
            <div className="sm:col-span-2 p-4 rounded-[10px] bg-[#141416] border border-[rgba(237,237,237,0.08)] space-y-1.5">
              <div className="flex justify-between text-[#85858b] text-[11px]">
                <span>Worker Note</span>
                <span className="text-[#4cc38a]">Shielded</span>
              </div>
              <div className="text-sm font-medium text-[#ededed] tabular-nums">
                {payoutState === "settled" ? "149.25 USDG Payout" : "[Poseidon Commitment]"}
              </div>
              <div className="text-[11px] text-[#ff6b2b]">
                {payoutState === "settled" ? "Burned: 0.75 $VEIL" : "0.5% Protocol Fee"}
              </div>
            </div>
          </div>
        </section>

        {/* ─── TILE 5: PROTOCOL FEE DEFLATION BAND (Span 3x1) ──────────── */}
        <section className="col-span-1 md:col-span-2 lg:col-span-3 p-6 sm:p-8 bg-[#0c0c0e] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-[11.5px] font-mono text-[#ff6b2b]">
              <span className="w-2 h-2 rounded-full bg-[#ff6b2b] animate-ping" />
              <span>Programmatic Deflation Engine</span>
            </div>
            <h4 className="text-[18px] font-medium text-[#ededed]">
              0.50% of all settled machine volume market-buys and burns $VEIL
            </h4>
            <p className="text-[13px] text-[#85858b]">
              Direct value accrual from autonomous execution volume, not speculative emissions.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
            <div className="px-3.5 py-2 rounded-[8px] bg-[#161618] border border-[rgba(237,237,237,0.08)] text-[#ededed]">
              <span className="text-[#85858b]">Total Burned:</span>{" "}
              <span className="text-[#ff6b2b] font-medium tabular-nums">2,624.00 $VEIL</span>
            </div>
            <div className="px-3.5 py-2 rounded-[8px] bg-[#161618] border border-[rgba(237,237,237,0.08)] text-[#ededed]">
              <span className="text-[#85858b]">Bonded Staking:</span>{" "}
              <span className="text-[#4cc38a] font-medium tabular-nums">480,000 $VEIL</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
