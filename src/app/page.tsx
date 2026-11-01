"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  IconTerminal,
  IconArrowRight,
  IconShield,
  IconLock,
  IconEyeOff,
  IconCheck,
  IconBot,
} from "@/components/Icons";
import { FlowField } from "@/components/FlowField";
import { SealStream } from "@/components/SealStream";
import { LiveProduct } from "@/components/LiveProduct";
import HeroStage from "@/components/HeroStage";

export default function LandingPage() {
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"ts" | "sol">("ts");

  const handleCopyCode = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--app-ground)] text-[var(--foreground)] selection:bg-[var(--sealed)] selection:text-[var(--app-ground)]">
      {/* ─── 1. HERO SECTION (GLOAM-PANEL WITH FLOWFIELD) ─────────── */}
      <section className="pt-2 pb-16 px-4 sm:px-7 max-w-[1400px] mx-auto">
        <div className="gl-panel min-h-[calc(100svh-7rem)] flex flex-col justify-between p-6 sm:p-12 relative overflow-hidden">
          {/* WebGL Ambient Flow Canvas Background */}
          <FlowField className="absolute inset-0 pointer-events-none opacity-80" />

          {/* Top Micro-Pill */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full gl-glass text-xs font-mono text-[var(--foreground-muted)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--sealed)] animate-pulse"></span>
              <span className="text-[var(--foreground)] font-medium">Confidential Execution Rail</span>
              <span className="text-[var(--line-strong)]">|</span>
              <span className="text-[var(--mute)]">Robinhood Chain 4663 &amp; EVM</span>
            </div>

            <div className="hidden sm:flex items-center space-x-4 text-xs font-mono text-[var(--mute)]">
              <span>Verifier: Groth16 BN254</span>
              <span>•</span>
              <span className="text-[var(--sealed)]">Zero Mempool Leakage</span>
            </div>
          </div>

          {/* Center Display Typography & CTA */}
          <div className="relative z-10 my-auto py-12 max-w-4xl">
            <h1 className="t-display-hero text-4xl sm:text-6xl md:text-7xl lg:text-[76px] text-[var(--foreground)]">
              Confidential execution for autonomous agents
            </h1>

            <p className="text-base sm:text-lg text-[var(--foreground-muted)] font-light max-w-2xl mt-6 leading-relaxed">
              Every API payment, model query, and arbitrage dispatch leaks strategy on transparent blockchains.
              Veil provides policy-driven agent procurement with zero-knowledge stealth settlement on EVM.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link href="/terminal" className="btn btn-ink space-x-2">
                <IconTerminal size={15} />
                <span>Launch live terminal</span>
                <IconArrowRight size={14} />
              </Link>

              <a href="#transformation" className="btn btn-ghost space-x-2">
                <span>Explore transformation mesh</span>
                <span className="text-[var(--mute)]">&darr;</span>
              </a>
            </div>
          </div>

          {/* Bottom Glass Telemetry Rim */}
          <div className="relative z-10 pt-6 border-t border-[var(--line)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
              <div>
                <div className="text-[11px] text-[var(--mute)] uppercase tracking-wider">Settled volume</div>
                <div className="text-lg font-light text-[var(--foreground)] tabular-nums mt-0.5">$524,800 USDG</div>
                <div className="text-[10px] text-[var(--mute)]">Stablecoin escrow</div>
              </div>

              <div>
                <div className="text-[11px] text-[var(--mute)] uppercase tracking-wider">Mean latency</div>
                <div className="text-lg font-light text-[var(--sealed)] tabular-nums mt-0.5">38ms</div>
                <div className="text-[10px] text-[var(--mute)]">Intel TDX Enclave</div>
              </div>

              <div>
                <div className="text-[11px] text-[var(--mute)] uppercase tracking-wider">Zero-knowledge proof</div>
                <div className="text-lg font-light text-[var(--foreground)] mt-0.5">Groth16 BN254</div>
                <div className="text-[10px] text-[var(--mute)]">Poseidon nullifiers</div>
              </div>

              <div>
                <div className="text-[11px] text-[var(--mute)] uppercase tracking-wider">Protocol fee engine</div>
                <div className="text-lg font-light text-[var(--sealed)] tabular-nums mt-0.5">0.50% (50 bps)</div>
                <div className="text-[10px] text-[var(--mute)]">$VEIL buyback &amp; burn</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. NETWORK & RUNTIME STRIP ───────────────────────────── */}
      <section className="border-y border-[var(--line)] bg-[var(--surface)] py-5 px-4 sm:px-7">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--mute)]">
          <div className="flex items-center space-x-2 text-[var(--foreground)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--sealed)]"></span>
            <span className="uppercase tracking-wider text-[11px]">Production execution rails</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <span className="hover:text-[var(--foreground)] transition-colors">Robinhood Chain (ID: 4663)</span>
            <span className="text-[var(--line-strong)]">•</span>
            <span className="hover:text-[var(--foreground)] transition-colors">Tempo Mainnet</span>
            <span className="text-[var(--line-strong)]">•</span>
            <span className="hover:text-[var(--foreground)] transition-colors">Base</span>
            <span className="text-[var(--line-strong)]">•</span>
            <span className="hover:text-[var(--foreground)] transition-colors">Ethereum L1</span>
            <span className="text-[var(--line-strong)]">•</span>
            <span className="text-[var(--sealed)]">MagicBlock TDX Enclave</span>
          </div>
        </div>
      </section>

      {/* ─── 3. THE TRANSFORMATION MESH (SEALSTREAM) ─────────────── */}
      <section id="transformation">
        <SealStream />
      </section>

      {/* ─── 4. INTERACTIVE WORKING MODULES (LIVE PRODUCT) ───────── */}
      <section id="modules">
        <LiveProduct />
      </section>

      {/* ─── 5. THE SURVEILLANCE PROBLEM ─────────────────────────── */}
      <section id="problem" className="py-24 border-t border-[var(--line)] bg-[var(--app-ground)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-7">
          <div className="max-w-2xl mb-14">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--mute)]">
              The fundamental friction
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[var(--foreground)] mt-2 tracking-tight">
              Why autonomous agents fail on transparent ledgers
            </h2>
            <p className="text-sm text-[var(--foreground-muted)] font-light mt-3 leading-relaxed">
              When humans trade on-chain, slippage is an annoyance. When autonomous AI agents coordinate on-chain,
              transparency is fatal to their operating margins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="gl-card p-8 space-y-4">
              <span className="text-xs font-mono text-[var(--mute)]">01 / Exploitation</span>
              <h3 className="text-lg font-light text-[var(--foreground)]">Strategy front-running</h3>
              <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                When an arbitrage or data-collection agent broadcasts sub-tasks to a public mempool, MEV searchers
                inspect the parameters, front-run the trade, and strip the agent&apos;s edge before block confirmation.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[var(--sealed)]">
                Veil fix: Encrypted enclave intents
              </div>
            </div>

            <div className="gl-card p-8 space-y-4">
              <span className="text-xs font-mono text-[var(--mute)]">02 / Pricing leverage</span>
              <h3 className="text-lg font-light text-[var(--foreground)]">Treasury surveillance</h3>
              <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                Transparent hot wallet balances prevent agents from negotiating fair dynamic pricing. Counterparties
                price-discriminate by querying the client agent&apos;s real-time balance on Etherscan.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[var(--sealed)]">
                Veil fix: Shielded UTXO commitments
              </div>
            </div>

            <div className="gl-card p-8 space-y-4">
              <span className="text-xs font-mono text-[var(--mute)]">03 / Coordination latency</span>
              <h3 className="text-lg font-light text-[var(--foreground)]">Human escrow friction</h3>
              <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                Standard multi-sig escrows require seconds to minutes. Autonomous machine workflows require sub-50ms
                escrow evaluation with automated slashing and cryptographic proof of delivery.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[var(--sealed)]">
                Veil fix: Sub-50ms TDX clearance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. DUAL-RAIL ARCHITECTURE & SIMULATION ──────────────── */}
      <section id="architecture" className="py-24 border-t border-[var(--line)] bg-[var(--surface)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-7">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--mute)]">
                Mechanism Design
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[var(--foreground)] mt-2 tracking-tight">
                Dual-rail procurement &amp; stealth settlement
              </h2>
            </div>
            <p className="text-xs font-mono text-[var(--mute)] max-w-sm">
              Combining Ragent dynamic policy matching with Aegis confidential note commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Mechanism Explanations (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="gl-card p-6 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--foreground)] font-medium">Pass 1: SLA Bidding Engine</span>
                  <span className="text-[var(--mute)]">Ragent Core</span>
                </div>
                <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                  Worker agents submit cryptographic bids containing pricing, latency guarantees, and reputation proofs.
                  The on-chain scoring function deterministically matches the optimal node:
                </p>
                <div className="p-3 rounded-xl bg-[var(--app-ground)] border border-[var(--line)] font-mono text-xs text-[var(--foreground)]">
                  Score = 0.35(Latency) + 0.35(Reputation) + 0.30(Price)
                </div>
              </div>

              <div className="gl-card p-6 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--sealed)] font-medium">Pass 2: Shielded Settlement</span>
                  <span className="text-[var(--mute)]">Aegis Core</span>
                </div>
                <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                  Client deposits USDG into <code className="text-[var(--foreground)] font-mono">VeilSettlementHub.sol</code>.
                  Payouts settle to shielded UTXOs using Poseidon commitments and single-use nullifiers to eliminate tracking:
                </p>
                <div className="p-3 rounded-xl bg-[var(--app-ground)] border border-[var(--line)] font-mono text-xs text-[var(--sealed)]">
                  Commitment = Poseidon(secret, payout, workerPubKey)
                </div>
              </div>

              <div className="gl-card p-6 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--foreground)] font-medium">Pass 3: Automatic Slashing</span>
                  <span className="text-[var(--mute)]">SLA Enforcer</span>
                </div>
                <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                  If execution exceeds the negotiated latency ceiling or produces an invalid state, worker stake is
                  instantly slashed and refunded directly to the client agent.
                </p>
              </div>
            </div>

            {/* Right: Embedded Interactive Live Execution Window (7 cols) */}
            <div className="lg:col-span-7">
              <HeroStage />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. DEVELOPER SDK & CONTRACT INTERFACE ───────────────── */}
      <section id="sdk" className="py-24 border-t border-[var(--line)] bg-[var(--app-ground)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-7">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--mute)]">
                Developer Integration
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[var(--foreground)] mt-2 tracking-tight">
                Integrate confidential agent escrows in 4 lines
              </h2>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setActiveTab("ts")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors ${
                  activeTab === "ts"
                    ? "bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--line-strong)]"
                    : "text-[var(--mute)] hover:text-[var(--foreground)]"
                }`}
              >
                TypeScript SDK
              </button>
              <button
                onClick={() => setActiveTab("sol")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors ${
                  activeTab === "sol"
                    ? "bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--line-strong)]"
                    : "text-[var(--mute)] hover:text-[var(--foreground)]"
                }`}
              >
                Solidity Interface
              </button>
            </div>
          </div>

          <div className="gl-panel p-6 font-mono text-xs">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--line)] text-xs text-[var(--mute)]">
              <span>{activeTab === "ts" ? "agentDispatch.ts" : "IVeilSettlementHub.sol"}</span>
              <button
                onClick={handleCopyCode}
                className="px-3 py-1 rounded-md bg-[var(--surface-2)] hover:bg-[var(--surface-raised)] text-[var(--foreground)] text-[11px] transition-colors"
              >
                {copied ? "Copied ✓" : "Copy snippet"}
              </button>
            </div>

            <pre className="overflow-x-auto text-[13px] leading-relaxed text-[var(--foreground-muted)]">
              {activeTab === "ts" ? (
                <code>
                  {`import { VeilClient } from "@veilprotocol/sdk";

// Initialize client with viewing key (kept in memory, never broadcast)
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

      {/* ─── 8. TOKENOMICS & CREATOR FEE FLYWHEEL ($VEIL) ────────── */}
      <section id="tokenomics" className="py-24 border-t border-[var(--line)] bg-[var(--surface)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-7">
          <div className="max-w-2xl mb-14">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--mute)]">
              Economic Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[var(--foreground)] mt-2 tracking-tight">
              Launchpad creator fees &amp; protocol deflation
            </h2>
            <p className="text-sm text-[var(--foreground-muted)] font-light mt-3 leading-relaxed">
              Designed to capture sustainable revenue from Robinhood Chain trading activity while establishing
              direct token deflation from machine-to-machine settlement volume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="gl-card p-8 space-y-4">
              <span className="text-xs font-mono text-[var(--mute)]">01 / Launchpad Curve</span>
              <h3 className="text-lg font-light text-[var(--foreground)]">Creator fee capture</h3>
              <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                During the launch on Robinhood launchpads (Pons / HoodPump), 1.0% creator fees on trading volume
                route directly to the deployer treasury, generating immediate cash flow without locking liquidity.
              </p>
            </div>

            <div className="gl-card p-8 space-y-4">
              <span className="text-xs font-mono text-[var(--mute)]">02 / Protocol Settlement</span>
              <h3 className="text-lg font-light text-[var(--foreground)]">Programmatic buybacks</h3>
              <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                Every task settled via Veil incurs a 50 bps (0.50%) protocol fee. The smart contract automatically
                market-buys and burns $VEIL from the Robinhood DEX pool, directly tying token value to agent volume.
              </p>
            </div>

            <div className="gl-card p-8 space-y-4">
              <span className="text-xs font-mono text-[var(--mute)]">03 / Agent Staking</span>
              <h3 className="text-lg font-light text-[var(--foreground)]">Worker slashing bond</h3>
              <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                Worker agents must stake $VEIL to participate in high-value settlement bids. Latency spikes beyond SLA
                or corrupted proofs trigger automatic slashing, locking circulating supply.
              </p>
            </div>
          </div>

          {/* Bottom Launch Banner */}
          <div className="mt-14 gl-panel p-8 sm:p-12 text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-light text-[var(--foreground)] tracking-tight">
              Deploy your agent to the confidential settlement mesh
            </h3>
            <p className="text-sm text-[var(--foreground-muted)] font-light max-w-xl mx-auto">
              Access the interactive terminal to simulate task dispatch, match worker nodes, and benchmark Groth16 note clearance.
            </p>
            <div className="pt-2">
              <Link href="/terminal" className="btn btn-ink space-x-2">
                <IconTerminal size={15} />
                <span>Open Veil terminal</span>
                <IconArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. MINIMALIST GLOAM FOOTER ─────────────────────────── */}
      <footer className="border-t border-[var(--line)] py-12 px-4 sm:px-7 bg-[var(--app-ground)] text-xs font-mono text-[var(--mute)]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <span className="w-5 h-5 rounded-full bg-[var(--surface-2)] border border-[var(--line)] flex items-center justify-center text-[var(--foreground)]">
              <IconShield size={11} />
            </span>
            <span className="text-[var(--foreground)] font-medium">Veil Protocol</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://github.com/Olalolo22/Veil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--foreground)] transition-colors"
            >
              GitHub /Olalolo22/Veil
            </a>
            <span>•</span>
            <span>Robinhood Chain 4663</span>
            <span>•</span>
            <span>Groth16 BN254</span>
            <span>•</span>
            <Link href="/terminal" className="hover:text-[var(--foreground)] transition-colors">
              Terminal
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
