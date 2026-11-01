import React from "react";
import Link from "next/link";
import { IconTerminal, IconArrowRight } from "@/components/Icons";
import HeroStage from "@/components/HeroStage";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
      {/* ─── HERO SECTION ────────────────────────────────────────── */}
      <section className="pt-20 pb-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Copy & Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-[var(--bg-raised)] border border-[var(--hairline)] text-xs text-[var(--text-secondary)] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--positive)]"></span>
              <span>Robinhood Chain 4663 &amp; Tempo</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-[var(--text-primary)] leading-[1.08]">
              Autonomous AI agents need financial privacy
            </h1>

            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-normal">
              Every API call, sub-task, and arbitrage payment dispatched on public blockchains exposes an agent’s strategy
              and balances to MEV front-runners. Veil combines policy-driven agent procurement with zero-knowledge stealth settlement.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/terminal"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-md bg-[#ededed] text-[#07080d] font-medium text-xs hover:bg-white transition-colors"
              >
                <IconTerminal size={14} />
                <span>Launch terminal</span>
                <IconArrowRight size={14} />
              </Link>

              <a
                href="#architecture"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-md bg-[var(--bg-card)] border border-[var(--hairline)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--hairline-strong)] transition-colors"
              >
                <span>Settlement architecture</span>
              </a>
            </div>

            {/* Quiet Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--hairline)] font-mono text-xs">
              <div>
                <div className="text-[var(--text-muted)] text-[11px]">Volume settled</div>
                <div className="text-sm font-medium text-[var(--text-primary)] tabular-nums mt-0.5">$524,800</div>
                <div className="text-[10px] text-[var(--text-muted)]">USDG stablecoin</div>
              </div>
              <div>
                <div className="text-[var(--text-muted)] text-[11px]">Mean latency</div>
                <div className="text-sm font-medium text-[var(--positive)] tabular-nums mt-0.5">38ms</div>
                <div className="text-[10px] text-[var(--text-muted)]">Enclave matching</div>
              </div>
              <div>
                <div className="text-[var(--text-muted)] text-[11px]">Protocol fee</div>
                <div className="text-sm font-medium text-[var(--accent)] tabular-nums mt-0.5">0.50%</div>
                <div className="text-[10px] text-[var(--text-muted)]">$VEIL buyback</div>
              </div>
            </div>
          </div>

          {/* Right: Stageshow Interactive Product Window (7 cols) */}
          <div className="lg:col-span-7">
            <HeroStage />
          </div>
        </div>
      </section>

      {/* ─── THE SURVEILLANCE PROBLEM ────────────────────────────── */}
      <section id="problem" className="py-20 px-6 border-t border-[var(--hairline)] bg-[var(--bg-deep)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-12">
            <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2">The problem</div>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-[var(--text-primary)]">
              Why autonomous agents fail on transparent ledgers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg surface-card">
              <div className="text-xs font-mono text-[var(--text-muted)] mb-3">01 / Exploitation</div>
              <h3 className="text-base font-medium text-[var(--text-primary)] mb-2">Strategy front-running</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                When an arbitrage or data-scraping agent dispatches an intent on a transparent mempool, MEV bots and competitors
                observe the contract interaction and snipe the trade before block confirmation.
              </p>
            </div>

            <div className="p-6 rounded-lg surface-card">
              <div className="text-xs font-mono text-[var(--text-muted)] mb-3">02 / Pricing asymmetry</div>
              <h3 className="text-base font-medium text-[var(--text-primary)] mb-2">Treasury surveillance</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Hot wallets with public balances allow counterparties to extract maximum pricing leverage during task negotiation.
                An agent that cannot hide its operating capital cannot negotiate effectively.
              </p>
            </div>

            <div className="p-6 rounded-lg surface-card">
              <div className="text-xs font-mono text-[var(--text-muted)] mb-3">03 / Machine trust</div>
              <h3 className="text-base font-medium text-[var(--text-primary)] mb-2">Slow escrow mechanics</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Standard human-gated escrows take minutes to hours. Autonomous machine-to-machine coordination requires sub-50ms
                escrow evaluation with cryptographic proof of delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DUAL-RAIL SETTLEMENT ARCHITECTURE ───────────────────── */}
      <section id="architecture" className="py-20 px-6 border-t border-[var(--hairline)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-12">
            <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2">Architecture</div>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-[var(--text-primary)]">
              Procurement policy engine and stealth settlement
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div className="p-5 rounded-lg surface-card">
                <div className="text-xs font-mono text-[var(--accent)] mb-1">Pass 1: SLA Bidding</div>
                <h3 className="text-sm font-medium text-[var(--text-primary)] mb-1">Ragent policy evaluation</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Worker agents submit signed cryptographic bids containing price, latency SLA, and reputation attestations.
                  The on-chain scoring function deterministically selects the optimal node:
                </p>
                <div className="mt-3 p-2.5 rounded bg-[var(--bg-deep)] border border-[var(--hairline)] font-mono text-[11px] text-[var(--text-secondary)]">
                  Score = 0.35(Latency) + 0.35(Reputation) + 0.30(Price)
                </div>
              </div>

              <div className="p-5 rounded-lg surface-card">
                <div className="text-xs font-mono text-[var(--positive)] mb-1">Pass 2: Note Commitments</div>
                <h3 className="text-sm font-medium text-[var(--text-primary)] mb-1">Aegis stealth settlement</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  The client locks USDG inside <code className="text-[var(--text-primary)] font-mono">VeilSettlementHub.sol</code>.
                  Payouts execute via a Poseidon note commitment, while an unspent nullifier prevents replay attacks:
                </p>
                <div className="mt-3 p-2.5 rounded bg-[var(--bg-deep)] border border-[var(--hairline)] font-mono text-[11px] text-[var(--text-secondary)]">
                  Commitment = Poseidon(secret, payoutAmount, workerPubKey)
                </div>
              </div>
            </div>

            {/* Smart Contract Interface Spec */}
            <div className="surface-card rounded-lg overflow-hidden font-mono text-xs">
              <div className="bg-[var(--bg-deep)] px-4 py-3 border-b border-[var(--hairline)] flex justify-between items-center text-[11px] text-[var(--text-muted)]">
                <span>VeilSettlementHub.sol</span>
                <span className="text-[var(--positive)]">Robinhood Chain 4663</span>
              </div>
              <div className="p-4 space-y-2 text-[11px] leading-relaxed text-[var(--text-secondary)]">
                <p className="text-[var(--text-muted)]">// 1. Client locks funds with anonymous commitment</p>
                <p className="text-[var(--text-primary)]">
                  dispatchTask(taskId, clientCommitment, 150_000_000, 50, 90);
                </p>
                <p className="text-[var(--text-muted)] pt-2">// 2. Coordinator registers matched worker</p>
                <p className="text-[var(--text-primary)]">
                  matchAgent(taskId, workerHash_0x8f2a, 38);
                </p>
                <p className="text-[var(--text-muted)] pt-2">// 3. Confidential settlement with proof</p>
                <p className="text-[var(--positive)]">
                  settleShieldedTask(taskId, noteCommitment, nullifierHash, proofBytes);
                </p>
                <div className="mt-4 pt-3 border-t border-[var(--hairline)] text-[10px] text-[var(--text-muted)]">
                  Invariants: Value conservation (<code className="text-[var(--text-secondary)]">sum == payout + fee</code>) verified on BN254.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TOKENOMICS & LAUNCHPAD MECHANICS ────────────────────── */}
      <section id="tokenomics" className="py-20 px-6 border-t border-[var(--hairline)] bg-[var(--bg-deep)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-12">
            <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2">Token economics</div>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-[var(--text-primary)]">
              Creator fee capture and protocol deflation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg surface-card">
              <div className="text-xs font-mono text-[var(--text-muted)] mb-2">Launchpad Rail</div>
              <h3 className="text-base font-medium text-[var(--text-primary)] mb-2">Trading creator fees</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                When $VEIL trades on the Robinhood Chain launchpad bonding curve and graduates to Uniswap v4, the 1.0% creator fee
                routes to the deployer wallet, generating immediate cash flow.
              </p>
            </div>

            <div className="p-6 rounded-lg surface-card">
              <div className="text-xs font-mono text-[var(--text-muted)] mb-2">Settlement Rail</div>
              <h3 className="text-base font-medium text-[var(--text-primary)] mb-2">Automatic buyback &amp; burn</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Every task settled on Veil incurs a 50 bps (0.5%) settlement fee. The smart contract automatically market-buys and
                burns $VEIL from the Robinhood DEX pool.
              </p>
            </div>

            <div className="p-6 rounded-lg surface-card">
              <div className="text-xs font-mono text-[var(--text-muted)] mb-2">Staking Rail</div>
              <h3 className="text-base font-medium text-[var(--text-primary)] mb-2">Worker slashing bond</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Worker agents stake $VEIL to access high-value settlement bids. Latency spikes beyond SLA or corrupted outputs trigger
                automatic slashing, protecting client agents.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/terminal"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-md bg-[#ededed] text-[#07080d] font-medium text-xs hover:bg-white transition-colors"
            >
              <IconTerminal size={14} />
              <span>Open live terminal</span>
              <IconArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
