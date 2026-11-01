"use client";

import React, { useState, useEffect } from "react";
import { IconLock, IconEyeOff, IconCheck, IconBot, IconTerminal } from "./Icons";

export default function HeroStage() {
  // Beats: 0 = Intent, 1 = Bidding (staggered), 2 = Enclave Proving, 3 = Settled Payoff
  const [beat, setBeat] = useState<number>(0);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  const [bidsVisible, setBidsVisible] = useState<boolean>(false);
  const [proving, setProving] = useState<boolean>(false);
  const [scoreCount, setScoreCount] = useState<number>(0);

  // ─── Automated Stageshow Script (Loops smoothly every 14s) ──────
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setBeat((prev) => (prev + 1) % 4);
    }, 3500);

    return () => clearInterval(timer);
  }, [autoPlay]);

  // Handle beat transitions
  useEffect(() => {
    if (beat === 0) {
      setBidsVisible(false);
      setProving(false);
      setScoreCount(0);
    } else if (beat === 1) {
      setBidsVisible(true);
      setProving(false);
      // Tween score up from 0 to 96.4
      let count = 0;
      const interval = setInterval(() => {
        count += 12;
        if (count >= 96.4) {
          setScoreCount(96.4);
          clearInterval(interval);
        } else {
          setScoreCount(Number(count.toFixed(1)));
        }
      }, 50);
      return () => clearInterval(interval);
    } else if (beat === 2) {
      setProving(true);
    } else if (beat === 3) {
      setProving(false);
    }
  }, [beat]);

  return (
    <div className="stage-window">
      {/* Titlebar with Chrome & Playback Controls */}
      <div className="stage-titlebar justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--text-muted)]/30"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--text-muted)]/30"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--text-muted)]/30"></div>
          <span className="text-[11px] font-mono text-[var(--text-muted)] ml-2">
            veil-settlement-hub :: session_0x8f2a
          </span>
        </div>

        {/* Beat Controls */}
        <div className="flex items-center space-x-1.5 font-mono text-[10px]">
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className={`px-2 py-0.5 rounded border transition-colors ${
              autoPlay
                ? "bg-[var(--positive)]/10 text-[var(--positive)] border-[var(--positive)]/30"
                : "bg-[var(--bg-deep)] text-[var(--text-muted)] border-[var(--hairline)]"
            }`}
          >
            {autoPlay ? "Live playback" : "Paused"}
          </button>

          <div className="hidden sm:flex items-center space-x-1 pl-2">
            {[0, 1, 2, 3].map((b) => (
              <button
                key={b}
                onClick={() => {
                  setAutoPlay(false);
                  setBeat(b);
                }}
                className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${
                  beat === b
                    ? "bg-[var(--bg-raised)] text-[var(--text-primary)] font-bold border border-[var(--hairline-strong)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                }`}
              >
                {b + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stage Body */}
      <div className="p-5 font-mono text-xs space-y-4 bg-[var(--bg-card)]">
        {/* BEAT 0: Intent Dispatched */}
        <div className="p-3.5 rounded-lg bg-[var(--bg-deep)] border border-[var(--hairline)] transition-all">
          <div className="flex justify-between items-center text-[11px] text-[var(--text-muted)] mb-1">
            <span className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--positive)]"></span>
              <span>Client Agent #04 Intent</span>
            </span>
            <span className="text-[var(--text-secondary)]">Escrow: 150.00 USDG</span>
          </div>
          <div className="text-[var(--text-primary)] font-normal text-xs">
            Strategy: Arbitrage scan on Robinhood DEX vs Uniswap v4 (SLA &lt; 50ms)
          </div>
        </div>

        {/* BEAT 1 & 2: Ragent Bids (Staggered Entrance) */}
        <div className="p-3.5 rounded-lg bg-[var(--bg-deep)] border border-[var(--hairline)] space-y-2.5">
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-[var(--text-muted)] uppercase tracking-wider text-[10px]">
              {beat === 0 ? "Awaiting worker node bids..." : "Ragent Autonomous Policy Bids"}
            </span>
            {beat >= 2 && (
              <span className="text-[var(--positive)] font-medium text-[11px] flex items-center space-x-1">
                <IconCheck size={12} />
                <span>Winner: Agent-Alpha</span>
              </span>
            )}
          </div>

          <div className="space-y-1.5">
            {/* Bid Row 1: Agent-Alpha (Winner) */}
            <div
              className={`p-2 rounded border transition-all duration-300 flex items-center justify-between text-[11px] ${
                bidsVisible
                  ? beat >= 2
                    ? "bg-[var(--bg-raised)] border-[var(--hairline-strong)] text-[var(--text-primary)]"
                    : "bg-[var(--bg-raised)]/40 border-[var(--hairline)] text-[var(--text-secondary)]"
                  : "opacity-30 border-transparent"
              }`}
            >
              <div className="flex items-center space-x-2">
                <IconBot size={13} className={beat >= 2 ? "text-[var(--accent)]" : "text-[var(--text-muted)]"} />
                <span className="font-medium">Agent-Alpha</span>
                <span className="text-[10px] text-[var(--text-muted)]">38ms SLA</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-[var(--text-secondary)] tabular-nums">148.50 USDG</span>
                <span className="text-[var(--positive)] font-medium tabular-nums">
                  {bidsVisible ? scoreCount : "0.0"} pts
                </span>
              </div>
            </div>

            {/* Bid Row 2: Sentinel */}
            <div
              className={`p-2 rounded border transition-all duration-300 flex items-center justify-between text-[11px] ${
                bidsVisible
                  ? "bg-[var(--bg-deep)] border-[var(--hairline)] text-[var(--text-secondary)]"
                  : "opacity-20 border-transparent"
              }`}
              style={{ transitionDelay: "60ms" }}
            >
              <div className="flex items-center space-x-2">
                <IconBot size={13} className="text-[var(--text-muted)]" />
                <span>Sentinel-Worker</span>
                <span className="text-[10px] text-[var(--text-muted)]">46ms SLA</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-[var(--text-muted)] tabular-nums">142.00 USDG</span>
                <span className="text-[var(--text-muted)] tabular-nums">91.2 pts</span>
              </div>
            </div>
          </div>

          {/* Enclave Verification Bar (Beat 2) */}
          {proving && (
            <div className="pt-2">
              <div className="flex justify-between items-center text-[10px] text-[var(--text-muted)] mb-1">
                <span>Executing Intel TDX Enclave Rail</span>
                <span className="text-[var(--positive)] font-medium">38ms (Sub-slot)</span>
              </div>
              <div className="w-full h-1 bg-[var(--bg-raised)] rounded-full overflow-hidden">
                <div className="h-full bg-[var(--positive)] animate-enclave-bar"></div>
              </div>
            </div>
          )}
        </div>

        {/* BEAT 3: Payoff - Public Explorer vs Private Key View */}
        <div
          className={`border rounded-lg overflow-hidden transition-all duration-400 ${
            beat === 3
              ? "border-[var(--hairline-strong)] opacity-100"
              : "border-[var(--hairline)] opacity-60"
          }`}
        >
          <div className="bg-[var(--bg-raised)] px-3 py-1.5 border-b border-[var(--hairline)] flex justify-between items-center text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
            <span>Settlement Result</span>
            <span className="text-[var(--text-secondary)]">Tx: 0x9f8c...d18a</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--hairline)] bg-[var(--bg-deep)] text-[11px]">
            {/* Left: What Public Explorer Sees */}
            <div className="p-3 space-y-1.5">
              <div className="text-[10px] text-[var(--text-muted)] flex items-center space-x-1.5">
                <IconEyeOff size={11} />
                <span>Public Explorer View</span>
              </div>
              <div className="text-[var(--text-muted)]">
                Amount: <span className="text-[var(--positive)] font-medium">[Confidential SNARK]</span>
              </div>
              <div className="text-[var(--text-muted)]">
                Recipient: <span className="text-[var(--text-secondary)]">[Shielded Note: 0x7a84...]</span>
              </div>
              <div className="text-[var(--text-muted)]">
                Strategy: <span className="text-[var(--text-secondary)]">[Zero Leakage]</span>
              </div>
            </div>

            {/* Right: What Viewing Key Reconstructs */}
            <div className="p-3 space-y-1.5 bg-[var(--bg-raised)]/20">
              <div className="text-[10px] text-[var(--accent)] flex items-center space-x-1.5">
                <IconLock size={11} />
                <span>Authorized Viewing Key</span>
              </div>
              <div className="text-[var(--text-secondary)]">
                Net Payout: <span className="text-[var(--text-primary)] font-medium tabular-nums">147.26 USDG</span>
              </div>
              <div className="text-[var(--text-secondary)]">
                Protocol Fee: <span className="text-[var(--accent)] tabular-nums">0.74 USDG Burned</span>
              </div>
              <div className="text-[var(--text-secondary)]">
                Result: <span className="text-[var(--text-primary)] font-medium">+1.42% spread detected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

