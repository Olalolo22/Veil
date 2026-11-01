import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Veil Protocol | Confidential Execution & Settlement for AI Agents",
  description:
    "The confidential settlement layer for autonomous AI agents on Robinhood Chain & EVM. Zero-knowledge note commitments and private task procurement.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-900 py-8 px-6 text-center text-xs text-slate-500">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div>Veil Protocol · Confidential Agent Coordination & Zero-Dox Settlement on Robinhood Chain</div>
            <div className="flex items-center space-x-6 text-slate-400">
              <span>Mainnet: Robinhood (4663)</span>
              <span>Poseidon BN254</span>
              <span>Groth16 Verifier</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
