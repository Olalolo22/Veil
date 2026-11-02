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
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] font-geist transition-colors duration-200">
      {/* ─── 1. HERO SECTION (Asymmetric Split with Glyph Scene) ────── */}
      <section className="pt-10 sm:pt-16 pb-14 px-4 sm:px-8 max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (6 cols): Copy, Actions & Quiet Stats */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-[6px] bg-[var(--bg-card)] border border-[var(--hairline)] text-[11.5px] sm:text-[12px] font-mono text-[var(--text-secondary)] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b2b]" />
              <span className="text-[var(--text-primary)] font-medium">Confidential Execution Rail</span>
              <span className="text-[var(--text-muted)]">/</span>
              <span className="text-[var(--text-muted)]">Robinhood Chain 4663</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-normal tracking-tight text-[var(--text-primary)] leading-[1.08]">
              AI agents that settle without leaking
            </h1>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal max-w-xl leading-relaxed">
              Every API payment, model query, and arbitrage dispatch leaks strategy on transparent blockchains.
              Veil matches worker agents under strict latency SLAs and settles micro-task payouts via zero-knowledge note commitments.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link href="/terminal" className="btn-primary space-x-2">
                <IconTerminal size={15} />
                <span>Launch live terminal</span>
                <IconArrowRight size={14} />
              </Link>

              <a href="#console" className="btn-secondary space-x-2">
                <span>Inspect telemetry</span>
                <span className="text-[var(--text-muted)]">&darr;</span>
              </a>
            </div>

            {/* Quiet Stats Row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-[var(--hairline)] font-mono text-xs">
              <div>
                <div className="text-[10.5px] sm:text-[11px] text-[var(--text-muted)] uppercase tracking-wider">Settled volume</div>
                <div className="text-[15px] sm:text-[17px] font-medium text-[var(--text-primary)] tabular-nums mt-0.5">$524,800</div>
                <div className="text-[10px] text-[var(--text-muted)]">USDG stablecoin</div>
              </div>

              <div>
                <div className="text-[10.5px] sm:text-[11px] text-[var(--text-muted)] uppercase tracking-wider">Median latency</div>
                <div className="text-[15px] sm:text-[17px] font-medium text-[#4cc38a] tabular-nums mt-0.5">38ms</div>
                <div className="text-[10px] text-[var(--text-muted)]">Intel TDX Enclave</div>
              </div>

              <div>
                <div className="text-[10.5px] sm:text-[11px] text-[var(--text-muted)] uppercase tracking-wider">Protocol burn</div>
                <div className="text-[15px] sm:text-[17px] font-medium text-[#ff6b2b] tabular-nums mt-0.5">0.50%</div>
                <div className="text-[10px] text-[var(--text-muted)]">$VEIL buyback</div>
              </div>
            </div>
          </div>

          {/* Right Column (6 cols): Living Glyph Sculpture */}
          <div className="lg:col-span-6 rounded-[16px] bg-[var(--bg-card)] border border-[var(--hairline)] overflow-hidden shadow-xl">
            <GlyphScene />
          </div>
        </div>
      </section>

      {/* ─── 2. THE RISING CONSOLE APP SHELL ─────────────────────── */}
      <section id="console" className="pt-6 pb-20 px-4 sm:px-8 max-w-[1340px] mx-auto">
        <div className="mb-7">
          <div className="text-[12px] font-mono text-[#ff6b2b] uppercase tracking-wider mb-1.5 font-medium">
            Living Protocol Surface
          </div>
          <h2 className="text-2xl sm:text-3xl font-medium text-[var(--text-primary)] tracking-tight">
            Real-time settlement telemetry
          </h2>
          <p className="text-[13.5px] text-[var(--text-muted)] mt-1.5">
            Full node metrics, SLA breach counters, and active shielded rail bell curves.
          </p>
        </div>

        {/* Rising Console Component */}
        <RisingConsole />
      </section>

      {/* ─── 3. RULED BENTO GRID ─────────────────────────────────── */}
      <section id="bento" className="py-20 px-4 sm:px-8 border-t border-[var(--hairline)] bg-[var(--bg-deep)]">
        <div className="max-w-[1340px] mx-auto">
          <div className="max-w-2xl mb-10">
            <div className="text-[12px] font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2">
              Mechanism Architecture
            </div>
            <h2 className="text-2xl sm:text-4xl font-medium text-[var(--text-primary)] tracking-tight">
              Engineered for sub-slot autonomous execution
            </h2>
            <p className="text-sm text-[var(--text-muted)] mt-2.5 leading-relaxed">
              Combining Ragent dynamic policy matching with Aegis shielded UTXO note commitments on Robinhood Chain.
            </p>
          </div>

          {/* Ruled Bento Component */}
          <RuledBento />
        </div>
      </section>

      {/* ─── 4. DEVELOPER SDK & SOLIDITY INTERFACE ────────────────── */}
      <section id="sdk" className="py-20 px-4 sm:px-8 border-t border-[var(--hairline)] bg-[var(--bg-page)]">
        <div className="max-w-[1340px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-[12px] font-mono text-[var(--text-muted)] uppercase tracking-wider mb-1.5">
                Developer Integration
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium text-[var(--text-primary)] tracking-tight">
                Integrate confidential agent escrows in 4 lines
              </h2>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setActiveTab("ts")}
                className={`px-3 py-1.5 rounded-[6px] text-xs font-mono transition-colors ${
                  activeTab === "ts"
                    ? "bg-[var(--bg-raised)] text-[var(--text-primary)] border border-[var(--hairline-strong)] font-medium shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                TypeScript SDK
              </button>
              <button
                onClick={() => setActiveTab("sol")}
                className={`px-3 py-1.5 rounded-[6px] text-xs font-mono transition-colors ${
                  activeTab === "sol"
                    ? "bg-[var(--bg-raised)] text-[var(--text-primary)] border border-[var(--hairline-strong)] font-medium shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                Solidity Interface
              </button>
            </div>
          </div>

          <div className="rounded-[12px] bg-[var(--bg-card)] border border-[var(--hairline)] p-4 sm:p-6 font-mono text-xs overflow-hidden shadow-lg">
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[var(--hairline)] text-xs text-[var(--text-muted)]">
              <span>{activeTab === "ts" ? "agentDispatch.ts" : "IVeilSettlementHub.sol"}</span>
              <button
                onClick={handleCopyCode}
                className="px-2.5 py-1 rounded-[4px] bg-[var(--bg-raised)] hover:bg-[var(--bg-deep)] text-[var(--text-primary)] text-[11px] transition-colors border border-[var(--hairline)]"
              >
                {copied ? "Copied ✓" : "Copy code"}
              </button>
            </div>

            <pre className="overflow-x-auto text-[12px] sm:text-[13px] leading-relaxed text-[var(--text-secondary)]">
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
      <section id="tokenomics" className="py-20 px-4 sm:px-8 border-t border-[var(--hairline)] bg-[var(--bg-deep)]">
        <div className="max-w-[1340px] mx-auto">
          <div className="max-w-2xl mb-10">
            <div className="text-[12px] font-mono text-[#ff6b2b] uppercase tracking-wider mb-2 font-medium">
              Economic Architecture
            </div>
            <h2 className="text-2xl sm:text-4xl font-medium text-[var(--text-primary)] tracking-tight">
              Dual creator fees and machine deflation
            </h2>
            <p className="text-sm text-[var(--text-muted)] mt-2.5 leading-relaxed">
              Designed to capture sustainable revenue from Robinhood Chain trading activity while establishing
              direct token deflation from machine-to-machine settlement volume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-[12px] bg-[var(--bg-card)] border border-[var(--hairline)] space-y-3 shadow-sm">
              <span className="text-[12px] font-mono text-[var(--text-muted)]">01 / Launchpad Curve</span>
              <h3 className="text-[17px] font-medium text-[var(--text-primary)]">Creator fee capture</h3>
              <p className="text-xs sm:text-[13px] text-[var(--text-secondary)] leading-relaxed">
                During the launch on Robinhood launchpads (Pons / HoodPump), 1.0% creator fees on trading volume
                route directly to the deployer treasury, generating immediate cash flow.
              </p>
            </div>

            <div className="p-6 rounded-[12px] bg-[var(--bg-card)] border border-[var(--hairline)] space-y-3 shadow-sm">
              <span className="text-[12px] font-mono text-[#ff6b2b]">02 / Protocol Settlement</span>
              <h3 className="text-[17px] font-medium text-[var(--text-primary)]">Programmatic buybacks</h3>
              <p className="text-xs sm:text-[13px] text-[var(--text-secondary)] leading-relaxed">
                Every task settled via Veil incurs a 50 bps (0.50%) protocol fee. The smart contract automatically
                market-buys and burns $VEIL from the Robinhood DEX pool.
              </p>
            </div>

            <div className="p-6 rounded-[12px] bg-[var(--bg-card)] border border-[var(--hairline)] space-y-3 shadow-sm">
              <span className="text-[12px] font-mono text-[#4cc38a]">03 / Agent Staking</span>
              <h3 className="text-[17px] font-medium text-[var(--text-primary)]">Worker slashing bond</h3>
              <p className="text-xs sm:text-[13px] text-[var(--text-secondary)] leading-relaxed">
                Worker agents must stake $VEIL to participate in high-value settlement bids. Latency spikes beyond SLA
                or corrupted proofs trigger automatic slashing, locking supply.
              </p>
            </div>
          </div>

          {/* Bottom Launch Banner */}
          <div className="mt-10 p-7 sm:p-12 rounded-[14px] bg-[var(--bg-card)] border border-[var(--hairline)] text-center space-y-4 shadow-sm">
            <h3 className="text-2xl sm:text-3xl font-medium text-[var(--text-primary)] tracking-tight">
              Test the confidential settlement engine
            </h3>
            <p className="text-sm text-[var(--text-muted)] max-w-lg mx-auto">
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

      {/* ─── 6. FOOTER ────────────────────────────────────────────── */}
      <footer className="border-t border-[var(--hairline)] py-10 px-4 sm:px-8 bg-[var(--bg-deep)] text-xs font-mono text-[var(--text-muted)]">
        <div className="max-w-[1340px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center space-x-3">
            <span className="w-5 h-5 rounded-[5px] bg-[var(--bg-card)] border border-[var(--hairline)] flex items-center justify-center text-[var(--text-primary)]">
              <IconShield size={11} />
            </span>
            <span className="text-[var(--text-primary)] font-medium">Veil Protocol</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://github.com/Olalolo22/Veil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              GitHub /Olalolo22/Veil
            </a>
            <span>•</span>
            <span>Robinhood Chain (4663)</span>
            <span>•</span>
            <span>Groth16 BN254</span>
            <span>•</span>
            <Link href="/terminal" className="hover:text-[var(--text-primary)] transition-colors">
              Terminal
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
