"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IconShield, IconBot, IconZap, IconLock, IconCheck, IconEyeOff } from "@/components/Icons";

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
  const [taskType, setTaskType] = useState<string>("Arb Solver: Scrape Robinhood DEX Orderbook");
  const [budget, setBudget] = useState<number>(150);
  const [maxLatency, setMaxLatency] = useState<number>(50);
  const [minRep, setMinRep] = useState<number>(90);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"public" | "private">("public");

  // Mock bids scored by Ragent algorithm
  const [bids, setBids] = useState<AgentBid[]>([
    {
      id: "0x8f2a...c491",
      name: "Agent-Alpha (HFT Node)",
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
      name: "Apex-Bot (Data Relay)",
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

  // ─── Step 1 -> Step 2: Dispatch Intent ──────────────────────────
  const handleDispatch = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(2);
    }, 800);
  };

  // ─── Step 2 -> Step 3: Execute Settlement ────────────────────────
  const handleSettle = () => {
    setIsProcessing(true);
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
      setStep(3);
    }, 1200);
  };

  const handleReset = () => {
    setStep(1);
    setSettlementResult(null);
  };

  return (
    <div className="bg-grid-pattern min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Terminal Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-4">
          <div>
            <div className="flex items-center space-x-3">
              <span className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <IconShield className="w-5 h-5" />
              </span>
              <h1 className="text-2xl font-extrabold text-white tracking-wide">
                VEIL <span className="text-gradient">AGENT TERMINAL</span>
              </h1>
              <span className="px-2 py-0.5 rounded-full bg-slate-800 text-xs text-slate-400 border border-slate-700 font-mono">
                v1.0.0-rc1
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              Confidential Agent Intent Procurement & Zero-Dox Settlement on Robinhood Chain (ID: 4663)
            </p>
          </div>

          {/* Stepper Indicator */}
          <div className="flex items-center space-x-3 bg-slate-900/80 border border-slate-800 p-2 rounded-xl text-xs font-mono">
            <span className={`px-3 py-1 rounded-lg ${step === 1 ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40" : "text-slate-500"}`}>
              1. Intent
            </span>
            <span className="text-slate-600">→</span>
            <span className={`px-3 py-1 rounded-lg ${step === 2 ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40" : "text-slate-500"}`}>
              2. Bidding
            </span>
            <span className="text-slate-600">→</span>
            <span className={`px-3 py-1 rounded-lg ${step === 3 ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40" : "text-slate-500"}`}>
              3. Stealth Settlement
            </span>
          </div>
        </div>

        {/* ─── STEP 1: DISPATCH INTENT ────────────────────────────── */}
        {step === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 p-8 rounded-2xl bg-slate-900/70 border border-slate-800 glow-cyan">
              <h2 className="text-lg font-bold text-white mb-2 flex items-center space-x-2">
                <IconBot className="w-5 h-5 text-cyan-400" />
                <span>Specify Autonomous Agent Intent</span>
              </h2>
              <p className="text-xs text-slate-400 mb-6">
                Your agent locks funds in the Veil Settlement Vault without revealing task strategy or counterparty on-chain.
              </p>

              <div className="space-y-5">
                <div>
                  <label className="block text-xs uppercase font-mono text-slate-400 mb-2">
                    Task / Strategy Payload
                  </label>
                  <select
                    value={taskType}
                    onChange={(e) => setTaskType(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-400 font-mono"
                  >
                    <option value="Arb Solver: Scrape Robinhood DEX Orderbook">
                      Arb Solver: Scrape Robinhood DEX Orderbook & Solve Route
                    </option>
                    <option value="Perp Liquidity Balancer: Cross-DEX Hedging">
                      Perp Liquidity Balancer: Cross-DEX Hedging & Rebalance
                    </option>
                    <option value="Private Memecoin Sniper: Zero-Frontrun Buy">
                      Private Memecoin Sniper: Zero-Frontrun Buy Execution
                    </option>
                    <option value="Confidential Machine Learning Inference">
                      Confidential Machine Learning Inference (Market Sentiment)
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-mono text-slate-400 mb-2">
                      Escrow Budget (USDG)
                    </label>
                    <input
                      type="number"
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-400 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono text-slate-400 mb-2">
                      Max Latency SLA
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={maxLatency}
                        onChange={(e) => setMaxLatency(Number(e.target.value))}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-400 font-mono"
                      />
                      <span className="absolute right-3 top-3 text-xs text-slate-500 font-mono">ms</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono text-slate-400 mb-2">
                      Min Reputation
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={minRep}
                        onChange={(e) => setMinRep(Number(e.target.value))}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-400 font-mono"
                      />
                      <span className="absolute right-3 top-3 text-xs text-slate-500 font-mono">/ 100</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono space-y-2 text-slate-400">
                  <div className="flex justify-between">
                    <span>Settlement Token:</span>
                    <span className="text-cyan-400">USDG (Robinhood Chain Native)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Protocol Fee (0.5% for $VEIL buybacks):</span>
                    <span className="text-purple-400">{(budget * 0.005).toFixed(4)} USDG</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Worker Payout Commitment:</span>
                    <span className="text-emerald-400">{(budget * 0.995).toFixed(4)} USDG</span>
                  </div>
                </div>

                <button
                  onClick={handleDispatch}
                  disabled={isProcessing}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center space-x-2"
                >
                  {isProcessing ? (
                    <span>Registering Intent with Veil Vault...</span>
                  ) : (
                    <>
                      <IconZap className="w-4 h-4" />
                      <span>Dispatch Intent & Open Bidding</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider mb-3">
                  Why Zero-Dox Escrow?
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  On standard EVM chains, when Agent A escrows funds for an arbitrage script, competitors observe the target contract and front-run the trade.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-400">
                  <strong className="text-cyan-400">Veil Invariant:</strong> The vault locks tokens under an anonymous 32-byte client commitment. Only the selected worker can redeem with the nullifier.
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider mb-3">
                  $VEIL Creator Engine
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  50 bps from every execution routes automatically to the launchpad fee wallet, creating high continuous cash flow for $VEIL holders.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ─── STEP 2: RAGENT BIDDING MATRIX ──────────────────────── */}
        {step === 2 && (
          <div className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800 glow-purple">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                  <IconBot className="w-5 h-5 text-purple-400" />
                  <span>Ragent Autonomous Bidding Engine</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Three autonomous agent daemons submitted bids. The policy scoring algorithm automatically selected the optimal node.
                </p>
              </div>
              <div className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                Task Budget: <span className="text-cyan-400 font-bold">{budget} USDG</span>
              </div>
            </div>

            {/* Bids Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-500 uppercase">
                    <th className="py-3 px-4">Agent Node</th>
                    <th className="py-3 px-4">Latency (SLA &lt; {maxLatency}ms)</th>
                    <th className="py-3 px-4">Reputation</th>
                    <th className="py-3 px-4">Proposed Bid</th>
                    <th className="py-3 px-4">Policy Score</th>
                    <th className="py-3 px-4">Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {bids.map((b) => (
                    <tr
                      key={b.id}
                      className={b.selected ? "bg-cyan-500/10 border-l-2 border-cyan-400 text-white" : "text-slate-400"}
                    >
                      <td className="py-4 px-4 font-bold flex items-center space-x-2">
                        <IconBot className={`w-4 h-4 ${b.selected ? "text-cyan-400" : "text-slate-600"}`} />
                        <span>{b.name}</span>
                        <span className="text-slate-600 text-[10px]">({b.id})</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={b.latencyMs <= maxLatency ? "text-emerald-400" : "text-red-400"}>
                          {b.latencyMs}ms
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={b.reputation >= minRep ? "text-cyan-400 font-bold" : "text-slate-500"}>
                          {b.reputation}%
                        </span>
                      </td>
                      <td className="py-4 px-4">{b.bidAmount} USDG</td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-white font-bold">{b.score}</span>
                      </td>
                      <td className="py-4 px-4">
                        {b.selected ? (
                          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/40">
                            <IconCheck className="w-3 h-3" />
                            <span>WINNER (Matched)</span>
                          </span>
                        ) : (
                          <span className="text-slate-600">Outcompeted</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
              <button
                onClick={() => setStep(1)}
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                ← Edit Intent Constraints
              </button>

              <button
                onClick={handleSettle}
                disabled={isProcessing}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-slate-950 font-bold text-sm hover:opacity-95 transition-all glow-purple flex items-center space-x-2"
              >
                {isProcessing ? (
                  <span>Generating Shielded Settlement Note...</span>
                ) : (
                  <>
                    <IconLock className="w-4 h-4" />
                    <span>Execute Confidential Settlement via TEE Enclave</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* ─── STEP 3: STEALTH SETTLEMENT & 20-SEC VISUAL ───────────── */}
        {step === 3 && settlementResult && (
          <div className="space-y-8">
            {/* Top Success Banner */}
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <IconCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Settlement Verified on Robinhood Chain</h3>
                  <p className="text-xs text-emerald-400 font-mono mt-0.5">
                    Tx: {settlementResult.txHash.slice(0, 24)}... (Status: Finalized)
                  </p>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-300 hover:text-white transition-colors font-mono"
              >
                Dispatch New Task
              </button>
            </div>

            {/* THE 20-SECOND VISUAL HOOK: Public vs Private Explorer */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <IconEyeOff className="w-5 h-5 text-cyan-400" />
                    <span>The Zero-Knowledge Inspector (The 20-Second Proof)</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Toggle between the public block explorer and the authorized agent viewing key to see what is hidden.
                  </p>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center p-1 rounded-xl bg-slate-950 border border-slate-800">
                  <button
                    onClick={() => setActiveTab("public")}
                    className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      activeTab === "public"
                        ? "bg-cyan-500 text-slate-950 font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Public Explorer View
                  </button>
                  <button
                    onClick={() => setActiveTab("private")}
                    className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      activeTab === "private"
                        ? "bg-purple-500 text-white font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Authorized Agent Key View
                  </button>
                </div>
              </div>

              {/* TAB A: WHAT PUBLIC SEES */}
              {activeTab === "public" ? (
                <div className="p-6 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-xs space-y-3">
                  <div className="text-slate-500 text-[11px] uppercase tracking-wider mb-2">
                    Robinhood Chain Block Explorer (Public View)
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-500">Transaction Hash:</span>
                    <span className="text-cyan-400">{settlementResult.txHash}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-500">Method:</span>
                    <span className="text-slate-300">settleShieldedTask(bytes32,bytes32,bytes32,bytes)</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-500">Payer Agent:</span>
                    <span className="text-amber-400">[MASKED COMMITMENT: 0x4a18...f809]</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-500">Recipient Worker:</span>
                    <span className="text-amber-400">[SHIELDED STEALTH NOTE: {settlementResult.noteCommitment.slice(0, 20)}...]</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-500">Transfer Amount:</span>
                    <span className="text-emerald-400 font-bold">[CONFIDENTIAL - 192-byte SNARK PROOF]</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-500">Task Strategy Payload:</span>
                    <span className="text-slate-500">[ENCRYPTED CIPHERTEXT - ZERO STRATEGY LEAK]</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                    <span className="text-slate-500">Protocol Fee Captured:</span>
                    <span className="text-purple-400 font-bold">{settlementResult.protocolFee} USDG (Burned for $VEIL)</span>
                  </div>
                </div>
              ) : (
                /* TAB B: WHAT AUTHORIZED AGENT SEES */
                <div className="p-6 rounded-xl bg-purple-950/20 border border-purple-500/30 font-mono text-xs space-y-3">
                  <div className="text-purple-400 text-[11px] uppercase tracking-wider mb-2 flex items-center space-x-2">
                    <IconLock className="w-3.5 h-3.5" />
                    <span>Decrypted via Agent Private Viewing Key</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-purple-900/40">
                    <span className="text-slate-400">Winning Worker:</span>
                    <span className="text-white font-bold">Agent-Alpha (0x8f2a...c491)</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-purple-900/40">
                    <span className="text-slate-400">Net Worker Payout:</span>
                    <span className="text-emerald-400 font-bold">{settlementResult.workerPayout} USDG</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-purple-900/40">
                    <span className="text-slate-400">Strategy Task:</span>
                    <span className="text-cyan-300">{taskType}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-purple-900/40">
                    <span className="text-slate-400">Task Execution Output:</span>
                    <span className="text-slate-200">
                      "Spread detected: +1.42% arb between Raphael DEX and Uniswap v4 on Robinhood Chain."
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                    <span className="text-slate-400">Execution Speed:</span>
                    <span className="text-emerald-400 font-bold">38ms (Enclave Sub-Slot Execution)</span>
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
