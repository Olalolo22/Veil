"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IconShield, IconBot, IconLock, IconCheck, IconEyeOff, IconTerminal, IconArrowRight } from "@/components/Icons";

interface AgentBid {
  id: string;
  name: string;
  latencyMs: number;
  reputation: number;
  bidAmount: number;
  score: number;
  selected: boolean;
}

export default function TerminalPage() {
  const [step, setStep] = useState<number>(1);
  const [taskType, setTaskType] = useState<string>("Arbitrage solver: Robinhood DEX orderbook scan");
  const [budget, setBudget] = useState<number>(150);
  const [maxLatency, setMaxLatency] = useState<number>(50);
  const [minRep, setMinRep] = useState<number>(90);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [processingMsg, setProcessingMsg] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"public" | "private">("public");

  // Motion states for Step 2
  const [rowsRevealed, setRowsRevealed] = useState<number>(0);
  const [scoresCounted, setScoresCounted] = useState<boolean>(false);

  const [bids] = useState<AgentBid[]>([
    {
      id: "0x8f2a...c491",
      name: "Agent-Alpha (HFT solver)",
      latencyMs: 38,
      reputation: 98,
      bidAmount: 148.5,
      score: 96.4,
      selected: true,
    },
    {
      id: "0x31bc...89e2",
      name: "Sentinel-Worker (Solver)",
      latencyMs: 46,
      reputation: 94,
      bidAmount: 142.0,
      score: 91.2,
      selected: false,
    },
    {
      id: "0x9a10...07dd",
      name: "Apex-Bot (Data relay)",
      latencyMs: 62,
      reputation: 89,
      bidAmount: 135.0,
      score: 83.5,
      selected: false,
    },
  ]);

  const [settlementResult, setSettlementResult] = useState<{
    txHash: string;
    noteCommitment: string;
    nullifierHash: string;
    protocolFee: number;
    workerPayout: number;
    timestamp: string;
  } | null>(null);

  // Trigger staggered row reveal when entering Step 2
  useEffect(() => {
    if (step === 2) {
      setRowsRevealed(0);
      setScoresCounted(false);

      const t1 = setTimeout(() => setRowsRevealed(1), 100);
      const t2 = setTimeout(() => setRowsRevealed(2), 220);
      const t3 = setTimeout(() => {
        setRowsRevealed(3);
        setScoresCounted(true);
      }, 360);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [step]);

  const handleDispatch = () => {
    setIsProcessing(true);
    setProcessingMsg("Broadcasting task intent to Robinhood Chain P2P agent mesh...");

    setTimeout(() => {
      setProcessingMsg("Evaluating candidate SLA responses via Ragent algorithm...");
    }, 450);

    setTimeout(() => {
      setIsProcessing(false);
      setProcessingMsg("");
      setStep(2);
    }, 900);
  };

  const handleSettle = () => {
    setIsProcessing(true);
    setProcessingMsg("Generating Intel TDX hardware attestation in sub-50ms enclave...");

    setTimeout(() => {
      setProcessingMsg("Deriving Poseidon BN254 note commitment and unspent nullifier...");
    }, 550);

    setTimeout(() => {
      const fee = Number((budget * 0.005).toFixed(4));
      const payout = Number((budget - fee).toFixed(4));
      setSettlementResult({
        txHash: "0x9f8c47b2e3a1058204db7c82a39281e0192a54fb2701726c04f981aa2018d18a",
        noteCommitment: "0x7a84c901e82a394bc810237e8910471b0293847561829037461829304856f1e2",
        nullifierHash: "0x3b19e0789102476582910374618293047162938475618290374618293048aa98",
        protocolFee: fee,
        workerPayout: payout,
        timestamp: new Date().toISOString(),
      });
      setIsProcessing(false);
      setProcessingMsg("");
      setStep(3);
    }, 1100);
  };

  const handleReset = () => {
    setStep(1);
    setSettlementResult(null);
    setRowsRevealed(0);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] py-8 px-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Terminal Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-[var(--hairline)] gap-4">
          <div>
            <div className="flex items-center space-x-2.5">
              <span className="p-1 rounded bg-[var(--bg-raised)] border border-[var(--hairline)] text-[var(--text-secondary)]">
                <IconTerminal size={15} />
              </span>
              <h1 className="text-base font-medium text-[var(--text-primary)] tracking-tight">
                Veil Agent Terminal
              </h1>
              <span className="text-[11px] font-mono text-[var(--text-muted)]">
                v1.0.0-rc1
              </span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] mt-1">
              Confidential agent task procurement and stealth settlement on Robinhood Chain 4663
            </p>
          </div>

          {/* Stepper Indicator */}
          <div className="flex items-center space-x-2 bg-[var(--bg-card)] border border-[var(--hairline)] px-2.5 py-1 rounded text-xs font-mono">
            <span className={step === 1 ? "text-[var(--text-primary)] font-medium" : "text-[var(--text-muted)]"}>
              1. Intent
            </span>
            <span className="text-[var(--text-muted)]">/</span>
            <span className={step === 2 ? "text-[var(--text-primary)] font-medium" : "text-[var(--text-muted)]"}>
              2. Bidding
            </span>
            <span className="text-[var(--text-muted)]">/</span>
            <span className={step === 3 ? "text-[var(--text-primary)] font-medium" : "text-[var(--text-muted)]"}>
              3. Settlement
            </span>
          </div>
        </div>

        {/* ─── STEP 1: DISPATCH INTENT ────────────────────────────── */}
        {step === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Form Controls (7 cols) */}
            <div className="lg:col-span-7 surface-card rounded-lg p-6 space-y-5">
              <div>
                <h2 className="text-sm font-medium text-[var(--text-primary)]">
                  Specify agent task and SLA constraints
                </h2>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                  Locked funds remain protected under an anonymous 32-byte client commitment until settlement.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5">
                    Task / strategy payload
                  </label>
                  <select
                    value={taskType}
                    onChange={(e) => setTaskType(e.target.value)}
                    className="w-full bg-[var(--bg-deep)] border border-[var(--hairline)] rounded-md px-3 py-2 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--hairline-strong)] font-mono"
                  >
                    <option value="Arbitrage solver: Robinhood DEX orderbook scan">
                      Arbitrage solver: Robinhood DEX orderbook scan
                    </option>
                    <option value="Perp liquidity balancer: Cross-DEX hedging">
                      Perp liquidity balancer: Cross-DEX hedging
                    </option>
                    <option value="Private memecoin execution: Zero-frontrun buy">
                      Private memecoin execution: Zero-frontrun buy
                    </option>
                    <option value="Confidential machine learning inference">
                      Confidential machine learning inference
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5">
                      Escrow budget (USDG)
                    </label>
                    <input
                      type="number"
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="w-full bg-[var(--bg-deep)] border border-[var(--hairline)] rounded-md px-3 py-2 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--hairline-strong)] font-mono tabular-nums"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5">
                      Max latency SLA
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={maxLatency}
                        onChange={(e) => setMaxLatency(Number(e.target.value))}
                        className="w-full bg-[var(--bg-deep)] border border-[var(--hairline)] rounded-md px-3 py-2 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--hairline-strong)] font-mono tabular-nums"
                      />
                      <span className="absolute right-3 top-2 text-xs text-[var(--text-muted)] font-mono">ms</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5">
                      Min reputation
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={minRep}
                        onChange={(e) => setMinRep(Number(e.target.value))}
                        className="w-full bg-[var(--bg-deep)] border border-[var(--hairline)] rounded-md px-3 py-2 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--hairline-strong)] font-mono tabular-nums"
                      />
                      <span className="absolute right-3 top-2 text-xs text-[var(--text-muted)] font-mono">/ 100</span>
                    </div>
                  </div>
                </div>

                {/* Calculation Breakdown */}
                <div className="p-3.5 rounded bg-[var(--bg-deep)] border border-[var(--hairline)] font-mono text-xs space-y-2 text-[var(--text-secondary)]">
                  <div className="flex justify-between">
                    <span>Settlement currency:</span>
                    <span className="text-[var(--text-primary)]">USDG (Robinhood Chain)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Protocol fee (0.50%):</span>
                    <span className="text-[var(--accent)] tabular-nums">{(budget * 0.005).toFixed(4)} USDG</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Net worker payout:</span>
                    <span className="text-[var(--positive)] tabular-nums font-medium">{(budget * 0.995).toFixed(4)} USDG</span>
                  </div>
                </div>

                <button
                  onClick={handleDispatch}
                  disabled={isProcessing}
                  className="w-full py-2.5 rounded-md bg-[#ededed] text-[#07080d] font-medium text-xs hover:bg-white transition-colors flex items-center justify-center space-x-2"
                >
                  {isProcessing ? (
                    <span className="font-mono text-xs animate-pulse">{processingMsg}</span>
                  ) : (
                    <>
                      <span>Dispatch intent &amp; collect bids</span>
                      <IconArrowRight size={13} />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right: Technical Notes (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="surface-card rounded-lg p-5">
                <div className="text-xs font-mono text-[var(--text-muted)] uppercase mb-2">Protocol invariant</div>
                <h3 className="text-sm font-medium text-[var(--text-primary)] mb-1">Zero strategy leakage</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  On transparent chains, escrows reveal contract interactions before execution. Veil locks collateral under an anonymous
                  hash: <code className="text-[var(--text-primary)] font-mono">Poseidon(clientId, nonce)</code>. Competitors cannot infer the target asset or timeframe.
                </p>
              </div>

              <div className="surface-card rounded-lg p-5">
                <div className="text-xs font-mono text-[var(--text-muted)] uppercase mb-2">Revenue engine</div>
                <h3 className="text-sm font-medium text-[var(--text-primary)] mb-1">Programmatic buybacks</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  50 bps from every completed task routes directly to the $VEIL DEX pool on Robinhood Chain, permanently burning tokens
                  as autonomous agent settlement volume scales.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ─── STEP 2: RAGENT BIDDING MATRIX (ANIMATED STAGGER) ───── */}
        {step === 2 && (
          <div className="surface-card rounded-lg p-6 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-[var(--hairline)] gap-3">
              <div>
                <h2 className="text-sm font-medium text-[var(--text-primary)]">
                  Autonomous bidding matrix (Ragent coordinator)
                </h2>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                  Candidate nodes evaluated against your latency and reputation constraints.
                </p>
              </div>
              <div className="text-xs font-mono text-[var(--text-secondary)] bg-[var(--bg-deep)] px-2.5 py-1 rounded border border-[var(--hairline)]">
                Budget: <span className="text-[var(--text-primary)] font-medium tabular-nums">{budget}.00 USDG</span>
              </div>
            </div>

            {/* Bids Table with Staggered Entrance */}
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-[var(--hairline)] text-[var(--text-muted)] text-[11px]">
                    <th className="py-2.5 px-3">Worker node</th>
                    <th className="py-2.5 px-3">Latency (SLA &lt; {maxLatency}ms)</th>
                    <th className="py-2.5 px-3">Reputation</th>
                    <th className="py-2.5 px-3">Proposed bid</th>
                    <th className="py-2.5 px-3">Score</th>
                    <th className="py-2.5 px-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--hairline)]">
                  {bids.map((b, idx) => (
                    <tr
                      key={b.id}
                      className={`transition-all duration-300 ${
                        rowsRevealed > idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                      } ${b.selected ? "bg-[var(--bg-raised)]/60 text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}`}
                    >
                      <td className="py-3 px-3 font-medium flex items-center space-x-2">
                        <IconBot size={13} className={b.selected ? "text-[var(--accent)]" : "text-[var(--text-muted)]"} />
                        <span>{b.name}</span>
                        <span className="text-[var(--text-muted)] text-[10px]">({b.id})</span>
                      </td>
                      <td className="py-3 px-3">
                        <span className={b.latencyMs <= maxLatency ? "text-[var(--positive)] tabular-nums" : "text-[var(--negative)] tabular-nums"}>
                          {b.latencyMs}ms
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <span className="tabular-nums">{b.reputation}%</span>
                      </td>
                      <td className="py-3 px-3 tabular-nums">{b.bidAmount} USDG</td>
                      <td className="py-3 px-3">
                        <span className="text-[var(--text-primary)] font-medium tabular-nums">
                          {scoresCounted ? b.score : "--"}
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        {b.selected ? (
                          <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-[var(--positive)]/10 text-[var(--positive)] text-[10px] font-medium border border-[var(--positive)]/20">
                            <IconCheck size={11} />
                            <span>Matched</span>
                          </span>
                        ) : (
                          <span className="text-[var(--text-muted)]">Outcompeted</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Actions & Live Enclave Ticker */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-[var(--hairline)] gap-3">
              <button
                onClick={() => setStep(1)}
                className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                &larr; Adjust intent
              </button>

              <button
                onClick={handleSettle}
                disabled={isProcessing}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-md bg-[#ededed] text-[#07080d] font-medium text-xs hover:bg-white transition-colors"
              >
                {isProcessing ? (
                  <span className="font-mono text-xs animate-pulse">{processingMsg}</span>
                ) : (
                  <>
                    <IconLock size={13} />
                    <span>Execute confidential settlement</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* ─── STEP 3: STEALTH SETTLEMENT & 20-SEC VISUAL ───────────── */}
        {step === 3 && settlementResult && (
          <div className="space-y-6">
            {/* Top Status */}
            <div className="surface-card rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded bg-[var(--positive)]/10 text-[var(--positive)] flex items-center justify-center border border-[var(--positive)]/20">
                  <IconCheck size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[var(--text-primary)]">Settlement verified on Robinhood Chain</h3>
                  <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">
                    Tx: {settlementResult.txHash.slice(0, 26)}... (Finalized in 38ms)
                  </p>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-3 py-1.5 rounded bg-[var(--bg-deep)] border border-[var(--hairline)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-mono"
              >
                Dispatch new task
              </button>
            </div>

            {/* The 20-Second Proof Inspector */}
            <div className="surface-card rounded-lg p-6 space-y-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-[var(--hairline)]">
                <div>
                  <h3 className="text-sm font-medium text-[var(--text-primary)]">
                    Zero-knowledge inspector (Public ledger vs Authorized viewing key)
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                    Compare what is visible to the public block explorer versus what the authenticated recipient reconstructs.
                  </p>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center p-0.5 rounded bg-[var(--bg-deep)] border border-[var(--hairline)]">
                  <button
                    onClick={() => setActiveTab("public")}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                      activeTab === "public"
                        ? "bg-[var(--bg-raised)] text-[var(--text-primary)] font-medium"
                        : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                    }`}
                  >
                    Public explorer view
                  </button>
                  <button
                    onClick={() => setActiveTab("private")}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                      activeTab === "private"
                        ? "bg-[var(--bg-raised)] text-[var(--text-primary)] font-medium"
                        : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                    }`}
                  >
                    Authorized viewing key
                  </button>
                </div>
              </div>

              {/* TAB CONTENT (SMOOTH CROSSFADE) */}
              {activeTab === "public" ? (
                <div className="p-4 rounded bg-[var(--bg-deep)] border border-[var(--hairline)] font-mono text-xs space-y-2.5 transition-all">
                  <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider mb-1">
                    Robinhood Chain Block Explorer (Public View)
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[var(--hairline)]">
                    <span className="text-[var(--text-muted)]">Transaction hash:</span>
                    <span className="text-[var(--text-primary)]">{settlementResult.txHash}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[var(--hairline)]">
                    <span className="text-[var(--text-muted)]">Contract method:</span>
                    <span className="text-[var(--text-secondary)]">settleShieldedTask(bytes32,bytes32,bytes32,bytes)</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[var(--hairline)]">
                    <span className="text-[var(--text-muted)]">Payer agent:</span>
                    <span className="text-[var(--text-secondary)]">[Masked commitment: 0x4a18...f809]</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[var(--hairline)]">
                    <span className="text-[var(--text-muted)]">Recipient worker:</span>
                    <span className="text-[var(--text-secondary)]">[Shielded note: {settlementResult.noteCommitment.slice(0, 22)}...]</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[var(--hairline)]">
                    <span className="text-[var(--text-muted)]">Transfer amount:</span>
                    <span className="text-[var(--positive)] font-medium">[Confidential - 192-byte SNARK proof]</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                    <span className="text-[var(--text-muted)]">Protocol fee:</span>
                    <span className="text-[var(--accent)] tabular-nums">{settlementResult.protocolFee} USDG burned for $VEIL</span>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded bg-[var(--bg-deep)] border border-[var(--hairline)] font-mono text-xs space-y-2.5 transition-all">
                  <div className="text-[11px] text-[var(--accent)] uppercase tracking-wider mb-1 flex items-center space-x-1.5">
                    <IconLock size={12} />
                    <span>Decrypted via Agent Private Viewing Key</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[var(--hairline)]">
                    <span className="text-[var(--text-muted)]">Winning worker:</span>
                    <span className="text-[var(--text-primary)] font-medium">Agent-Alpha (0x8f2a...c491)</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[var(--hairline)]">
                    <span className="text-[var(--text-muted)]">Net worker payout:</span>
                    <span className="text-[var(--positive)] font-medium tabular-nums">{settlementResult.workerPayout} USDG</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[var(--hairline)]">
                    <span className="text-[var(--text-muted)]">Strategy task:</span>
                    <span className="text-[var(--text-secondary)]">{taskType}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[var(--hairline)]">
                    <span className="text-[var(--text-muted)]">Execution result:</span>
                    <span className="text-[var(--text-primary)]">Spread detected: +1.42% arb on Raphael DEX</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                    <span className="text-[var(--text-muted)]">Latency:</span>
                    <span className="text-[var(--positive)] font-medium tabular-nums">38ms (Enclave sub-slot execution)</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
