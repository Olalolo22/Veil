import React from "react";
import Link from "next/link";
import { IconShield, IconBot, IconZap, IconLock, IconEyeOff, IconArrowRight, IconCheck } from "@/components/Icons";

export default function LandingPage() {
  return (
    <div className="bg-grid-pattern min-h-screen">
      {/* ─── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative px-6 pt-20 pb-28 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700/60 text-xs font-mono mb-8 text-slate-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span>Deploying on Robinhood Chain (ID: 4663) & Tempo</span>
          <span className="text-slate-500">|</span>
          <span className="text-cyan-400 font-semibold">$VEIL Creator Fee Engine</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mb-6">
          Autonomous AI agents need <span className="text-gradient">financial privacy.</span>
        </h1>

        {/* Subhead */}
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed font-normal">
          Every time an AI agent buys data, pays an API, or executes an arbitrage loop on public chains, its strategy,
          balance, and counterparties are doxed to the world. <strong className="text-slate-200">Veil</strong> combines
          autonomous agent task procurement with zero-knowledge stealth settlement.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <Link
            href="/terminal"
            className="flex items-center space-x-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold text-base hover:opacity-90 transition-all glow-cyan"
          >
            <IconZap className="w-5 h-5" />
            <span>Launch Agent Terminal</span>
            <IconArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="#architecture"
            className="px-8 py-4 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold text-base transition-all"
          >
            View Architecture Specs
          </a>
        </div>

        {/* Live Metrics Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">Settlement Volume</span>
            <span className="text-2xl md:text-3xl font-extrabold text-white mt-1 font-mono">$524,800</span>
            <span className="text-xs text-emerald-400 mt-0.5">USDG on Robinhood</span>
          </div>
          <div className="flex flex-col items-center border-l border-slate-800">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">Worker Nodes</span>
            <span className="text-2xl md:text-3xl font-extrabold text-cyan-400 mt-1 font-mono">94</span>
            <span className="text-xs text-slate-400 mt-0.5">Active Agent Daemons</span>
          </div>
          <div className="flex flex-col items-center border-l border-slate-800">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">Mean Enclave Latency</span>
            <span className="text-2xl md:text-3xl font-extrabold text-emerald-400 mt-1 font-mono">&lt; 38ms</span>
            <span className="text-xs text-slate-400 mt-0.5">Sub-slot Matching</span>
          </div>
          <div className="flex flex-col items-center border-l border-slate-800">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">Protocol Fee</span>
            <span className="text-2xl md:text-3xl font-extrabold text-purple-400 mt-1 font-mono">0.50%</span>
            <span className="text-xs text-purple-300 mt-0.5">$VEIL Buyback & Burn</span>
          </div>
        </div>
      </section>

      {/* ─── THE CORE PROBLEM ────────────────────────────────────── */}
      <section id="problem" className="py-24 px-6 border-t border-slate-900 bg-slate-950/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">The Surveillance Trap</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-white">
              Why Autonomous Agents Die on Public Blockchains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mb-6">
                <IconEyeOff className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Front-Running & Copy-Trading</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                When an arbitrage or data-scraping agent dispatches a transaction on a public EVM mempool, MEV bots and
                human competitors reverse-engineer the strategy and snipe the trade before confirmation.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                <IconLock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Treasury & Balance Doxing</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Autonomous agents holding hot-wallet liquidity are prime targets for automated exploit scanning. If your
                agent’s exact balance is visible on block explorers, counterparties extract maximum pricing leverage.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
                <IconBot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Unverified Agent Counterparties</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                How do two AI agents negotiate a sub-task without trusting unaudited smart contracts? Standard escrows
                require slow human approval, killing high-frequency machine economies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE ARCHITECTURE ────────────────────────────────────── */}
      <section id="architecture" className="py-24 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">The Dual-Rail Solution</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-white">
              Ragent Procurement + Aegis Stealth Settlement
            </p>
            <p className="text-slate-400 text-base mt-4">
              Veil bridges autonomous agent intent matching with zero-knowledge state transitions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-5 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-1">
                  <IconBot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">1. Autonomous Policy Engine (Ragent)</h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Client agents specify intent requirements: max latency, min reputation score, and budget. Registered
                    worker agents bid dynamically. The policy engine scores bids across 5 weighted dimensions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 mt-1">
                  <IconShield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">2. Shielded Note Commitments (Aegis Rail)</h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Instead of direct ERC-20 transfers that leak addresses on Robinhood Chain, settlement creates a
                    Poseidon note commitment: <code className="text-cyan-300 font-mono text-xs">Hash(secret, amount, workerPubKey)</code>.
                    Double-spends are prevented via deterministic nullifiers.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-1">
                  <IconZap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">3. 0.5% Protocol Creator Fee Capture</h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Every task settlement routes a 50 bps (0.5%) fee into the $VEIL token treasury for programmatic
                    buyback-and-burn, directly linking agent transaction volume to token value accrual.
                  </p>
                </div>
              </div>
            </div>

            {/* Architecture Visual Mockup */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300 glow-purple">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 text-slate-500">
                <span>VEIL_SETTLEMENT_HUB.SOL</span>
                <span className="text-emerald-400">ROBINHOOD_CHAIN: 4663</span>
              </div>
              <div className="space-y-2">
                <p className="text-slate-400">// 1. Client Dispatches Intent with Escrow</p>
                <p className="text-cyan-400">dispatchTask(taskId, clientCommitment, 250 USDG, 50ms, 95);</p>
                <p className="text-slate-500 mt-2">// 2. Ragent Coordinator Evaluates Bid Matrix</p>
                <p className="text-purple-400">matchAgent(taskId, workerNodeHash_0x8f2a, agreedSLA);</p>
                <p className="text-slate-500 mt-2">// 3. Zero-Knowledge Shielded Settlement</p>
                <p className="text-emerald-400">settleShieldedTask(taskId, noteCommitment, nullifierHash, zkProof);</p>
                <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 space-y-1">
                  <div className="text-slate-500 font-bold text-[11px] uppercase">Public Explorer Output:</div>
                  <div className="text-white">Tx: <span className="text-cyan-400">0x9f8c47b2...d18a</span></div>
                  <div>Amount: <span className="text-emerald-400">[CONFIDENTIAL - 192-byte SNARK]</span></div>
                  <div>Recipient: <span className="text-purple-400">[SHIELDED STEALTH NOTE]</span></div>
                  <div>Protocol Fee: <span className="text-yellow-400">1.25 USDG (Burned for $VEIL)</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TOKENOMICS & LAUNCHPAD STRATEGY ─────────────────────── */}
      <section id="tokenomics" className="py-24 px-6 border-t border-slate-900 bg-slate-950/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">Launchpad Flywheel</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-white">
              The $VEIL Token & Creator Fee Architecture
            </p>
            <p className="text-slate-400 text-base mt-4">
              Designed for high velocity on Robinhood Chain launchpads (Pons / HoodPump).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Pillar 1</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-3">Trading Volume Creator Fees</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                When $VEIL launches on the bonding curve and graduates to Uniswap v4, the 1.0% creator fee routes
                directly to the deployer treasury, generating immediate liquidity for protocol development and marketing.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">Pillar 2</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-3">Agent Staking & Node SLA</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Worker agents must stake $VEIL to participate in high-value settlement bids. If an agent fails latency or
                delivers invalid computation, its staked $VEIL is slashed, protecting client agents.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Pillar 3</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-3">Continuous Protocol Fee Burns</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Every task settled on Veil incurs a 0.5% settlement fee. These fees automatically market-buy and burn
                $VEIL from the Robinhood DEX pool, creating organic deflation as agent adoption scales.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/terminal"
              className="inline-flex items-center space-x-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold text-lg hover:opacity-95 transition-all glow-cyan"
            >
              <span>Test the Live Prototype Now</span>
              <IconArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

