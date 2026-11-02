"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IconTerminal, IconArrowRight, IconShield } from "@/components/Icons";
import GlyphScene from "@/components/GlyphScene";
import RisingConsole from "@/components/RisingConsole";
import RuledBento from "@/components/RuledBento";

export default function LandingPage() {
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"ts" | "sol">("ts");

  const handleCopyCode = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#141415] text-[#ededed] selection:bg-[#ff6b2b] selection:text-[#0f0f10]">
      {/* ─── 1. HERO SECTION (Asymmetric Split with Glyph Scene) ────── */}
      <section className="pt-12 sm:pt-20 pb-16 px-4 sm:px-8 max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (7 cols): Copy, Actions & Quiet Stats */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-[6px] bg-[#19191b] border border-[rgba(237,237,237,0.08)] text-[12px] font-mono text-[#a1a1a6]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b2b]" />
              <span className="text-[#ededed] font-medium">Confidential Execution Rail</span>
              <span className="text-[#717177]">/</span>
              <span className="text-[#85858b]">Robinhood Chain 4663</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-normal tracking-tight text-[#ededed] leading-[1.05]">
              AI agents that settle without leaking
            </h1>

            <p className="text-base sm:text-lg text-[#a1a1a6] font-normal max-w-xl leading-relaxed">
              Every API payment, model query, and arbitrage dispatch leaks strategy on transparent blockchains.
              Veil matches worker agents under strict latency SLAs and settles micro-task payouts via zero-knowledge note commitments.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link href="/terminal" className="btn-primary space-x-2">
                <IconTerminal size={15} />
                <span>Launch live terminal</span>
                <IconArrowRight size={14} />
              </Link>

              <a href="#console" className="btn-secondary space-x-2">
                <span>Inspect telemetry console</span>
                <span className="text-[#85858b]">&darr;</span>
              </a>
            </div>

            {/* Quiet Stats Row (from unslop tokens) */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[rgba(237,237,237,0.08)] font-mono text-xs">
              <div>
                <div className="text-[11px] text-[#85858b] uppercase tracking-wider">Settled volume</div>
                <div className="text-[17px] font-medium text-[#ededed] tabular-nums mt-0.5">$524,800</div>
                <div className="text-[10px] text-[#717177]">USDG stablecoin</div>
              </div>

              <div>
                <div className="text-[11px] text-[#85858b] uppercase tracking-wider">Median latency</div>
                <div className="text-[17px] font-medium text-[#4cc38a] tabular-nums mt-0.5">38ms</div>
                <div className="text-[10px] text-[#717177]">Intel TDX Enclave</div>
              </div>

              <div>
                <div className="text-[11px] text-[#85858b] uppercase tracking-wider">Protocol burn</div>
                <div className="text-[17px] font-medium text-[#ff6b2b] tabular-nums mt-0.5">0.50%</div>
                <div className="text-[10px] text-[#717177]">$VEIL buyback</div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Living Glyph Sculpture (unslop/effects.md) */}
          <div className="lg:col-span-6 rounded-[16px] bg-[#0f0f10] border border-[rgba(237,237,237,0.08)] overflow-hidden shadow-2xl">
            <GlyphScene />
          </div>
        </div>
      </section>

      {/* ─── 2. THE RISING CONSOLE APP SHELL (unslop-dashboard-after) ── */}
      <section id="console" className="pt-6 pb-24 px-4 sm:px-8 max-w-[1340px] mx-auto">
        <div className="mb-8">
          <div className="text-[12px] font-mono text-[#ff6b2b] uppercase tracking-wider mb-1.5">
            Living Protocol Surface
          </div>
          <h2 className="text-2xl sm:text-3xl font-medium text-[#ededed] tracking-tight">
            Real-time settlement telemetry
          </h2>
          <p className="text-[13.5px] text-[#85858b] mt-1.5">
            Full node metrics, SLA breach counters, and active shielded rail bell curves.
          </p>
        </div>

        {/* Rising Console Component */}
        <RisingConsole />
      </section>

      {/* ─── 3. RULED BENTO GRID (stageshow/examples/ruled-bento) ──── */}
      <section id="bento" className="py-24 px-4 sm:px-8 border-t border-[rgba(237,237,237,0.08)] bg-[#0f0f10]">
        <div className="max-w-[1340px] mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="text-[12px] font-mono text-[#85858b] uppercase tracking-wider mb-2">
              Mechanism Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#ededed] tracking-tight">
              Engineered for sub-slot autonomous execution
            </h2>
            <p className="text-sm text-[#85858b] mt-2.5 leading-relaxed">
              Combining Ragent dynamic policy matching with Aegis shielded UTXO note commitments on Robinhood Chain.
            </p>
          </div>

          {/* Ruled Bento Component */}
          <RuledBento />
        </div>
      </section>

      {/* ─── 4. DEVELOPER SDK & SOLIDITY INTERFACE ────────────────── */}
      <section id="sdk" className="py-24 px-4 sm:px-8 border-t border-[rgba(237,237,237,0.08)] bg-[#141415]">
        <div className="max-w-[1340px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-[12px] font-mono text-[#85858b] uppercase tracking-wider mb-1.5">
                Developer Integration
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium text-[#ededed] tracking-tight">
                Integrate confidential agent escrows in 4 lines
              </h2>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setActiveTab("ts")}
                className={`px-3 py-1.5 rounded-[6px] text-xs font-mono transition-colors ${
                  activeTab === "ts"
                    ? "bg-[#232325] text-[#ededed] border border-[rgba(237,237,237,0.14)]"
                    : "text-[#85858b] hover:text-[#ededed]"
                }`}
              >
                TypeScript SDK
              </button>
              <button
                onClick={() => setActiveTab("sol")}
                className={`px-3 py-1.5 rounded-[6px] text-xs font-mono transition-colors ${
                  activeTab === "sol"
                    ? "bg-[#232325] text-[#ededed] border border-[rgba(237,237,237,0.14)]"
                    : "text-[#85858b] hover:text-[#ededed]"
                }`}
              >
                Solidity Interface
              </button>
            </div>
          </div>

          <div className="rounded-[12px] bg-[#0f0f10] border border-[rgba(237,237,237,0.08)] p-6 font-mono text-xs overflow-hidden shadow-xl">
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[rgba(237,237,237,0.06)] text-xs text-[#85858b]">
              <span>{activeTab === "ts" ? "agentDispatch.ts" : "IVeilSettlementHub.sol"}</span>
              <button
                onClick={handleCopyCode}
                className="px-2.5 py-1 rounded-[4px] bg-[#19191b] hover:bg-[#232325] text-[#ededed] text-[11px] transition-colors"
              >
                {copied ? "Copied ✓" : "Copy code"}
              </button>
            </div>

            <pre className="overflow-x-auto text-[13px] leading-relaxed text-[#a1a1a6]">
              {activeTab === "ts" ? (
                <code>
                  {`import { VeilClient } from "@veilprotocol/sdk";

// Initialize client with local viewing key (kept in memory, never exposed)
const veil = new VeilClient({
  network: "robinhood-4663",
  viewingKey: process.env.AGENT_VIEWING_KEY,
  rpcUrl: "https://rpc.robinhood-chain.org",
});

// 1. Dispatch confidential task escrow with Poseidon note commitment
const task = await veil.dispatchConfidentialTask({
  intent: "ARBITRAGE_REBALANCE_USDG",
  budget: "150.00",
  currency: "USDG",
  slaMaxLatencyMs: 50,
  minReputation: 85,
});

// 2. Await matched worker and verify shielded settlement receipt
const receipt = await task.awaitSettlement();
console.log("Settled confidentially in:", receipt.latencyMs, "ms");
console.log("Poseidon Nullifier:", receipt.nullifierHash);`}
                </code>
              ) : (
                <code>
                  {`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IVeilSettlementHub {
    function dispatchTask(
        bytes32 taskId,
        bytes32 clientCommitment,
        uint256 escrowAmount,
        uint32 maxLatencyMs,
        uint32 minReputation
    ) external;

    function matchAgent(bytes32 taskId, bytes32 workerCommitment, uint32 latencyBid) external;

    function settleShieldedTask(
        bytes32 taskId,
        bytes32 noteCommitment,
        bytes32 nullifierHash,
        bytes calldata groth16Proof
    ) external;
}`}
                </code>
              )}
            </pre>
          </div>
        </div>
      </section>

      {/* ─── 5. TOKENOMICS & CREATOR FEE FLYWHEEL ($VEIL) ────────── */}
      <section id="tokenomics" className="py-24 px-4 sm:px-8 border-t border-[rgba(237,237,237,0.08)] bg-[#0f0f10]">
        <div className="max-w-[1340px] mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="text-[12px] font-mono text-[#ff6b2b] uppercase tracking-wider mb-2">
              Economic Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#ededed] tracking-tight">
              Dual creator fees and machine deflation
            </h2>
            <p className="text-sm text-[#85858b] mt-2.5 leading-relaxed">
              Designed to capture sustainable revenue from Robinhood Chain trading activity while establishing
              direct token deflation from machine-to-machine settlement volume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-[12px] bg-[#141415] border border-[rgba(237,237,237,0.08)] space-y-3">
              <span className="text-[12px] font-mono text-[#85858b]">01 / Launchpad Curve</span>
              <h3 className="text-[17px] font-medium text-[#ededed]">Creator fee capture</h3>
              <p className="text-xs text-[#a1a1a6] leading-relaxed">
                During the launch on Robinhood launchpads (Pons / HoodPump), 1.0% creator fees on trading volume
                route directly to the deployer treasury, generating immediate cash flow.
              </p>
            </div>

            <div className="p-6 rounded-[12px] bg-[#141415] border border-[rgba(237,237,237,0.08)] space-y-3">
              <span className="text-[12px] font-mono text-[#ff6b2b]">02 / Protocol Settlement</span>
              <h3 className="text-[17px] font-medium text-[#ededed]">Programmatic buybacks</h3>
              <p className="text-xs text-[#a1a1a6] leading-relaxed">
                Every task settled via Veil incurs a 50 bps (0.50%) protocol fee. The smart contract automatically
                market-buys and burns $VEIL from the Robinhood DEX pool.
              </p>
            </div>

            <div className="p-6 rounded-[12px] bg-[#141415] border border-[rgba(237,237,237,0.08)] space-y-3">
              <span className="text-[12px] font-mono text-[#4cc38a]">03 / Agent Staking</span>
              <h3 className="text-[17px] font-medium text-[#ededed]">Worker slashing bond</h3>
              <p className="text-xs text-[#a1a1a6] leading-relaxed">
                Worker agents must stake $VEIL to participate in high-value settlement bids. Latency spikes beyond SLA
                or corrupted proofs trigger automatic slashing, locking supply.
              </p>
            </div>
          </div>

          {/* Bottom Launch Banner */}
          <div className="mt-12 p-8 sm:p-12 rounded-[14px] bg-[#141415] border border-[rgba(237,237,237,0.08)] text-center space-y-5">
            <h3 className="text-2xl sm:text-3xl font-medium text-[#ededed] tracking-tight">
              Test the confidential settlement engine
            </h3>
            <p className="text-sm text-[#85858b] max-w-lg mx-auto">
              Simulate task dispatch, test candidate SLA bidding, and benchmark Intel TDX enclave clearance in the interactive terminal.
            </p>
            <div className="pt-2">
              <Link href="/terminal" className="btn-primary space-x-2">
                <IconTerminal size={15} />
                <span>Open live terminal</span>
                <IconArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. NOCTURNAL GRAPHITE FOOTER ─────────────────────────── */}
      <footer className="border-t border-[rgba(237,237,237,0.08)] py-10 px-4 sm:px-8 bg-[#0f0f10] text-xs font-mono text-[#85858b]">
        <div className="max-w-[1340px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center space-x-3">
            <span className="w-5 h-5 rounded-[5px] bg-[#19191b] border border-[rgba(237,237,237,0.12)] flex items-center justify-center text-[#ededed]">
              <IconShield size={11} />
            </span>
            <span className="text-[#ededed] font-medium">Veil Protocol</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://github.com/Olalolo22/Veil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ededed] transition-colors"
            >
              GitHub /Olalolo22/Veil
            </a>
            <span>•</span>
            <span>Robinhood Chain (ID: 4663)</span>
            <span>•</span>
            <span>Groth16 BN254</span>
            <span>•</span>
            <Link href="/terminal" className="hover:text-[#ededed] transition-colors">
              Terminal
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
