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
      <body className="bg-[var(--bg-page)] text-[var(--text-primary)] min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[var(--hairline)] py-8 px-6 text-xs text-[var(--text-muted)] bg-[var(--bg-deep)]">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
            <div>Veil Protocol · Confidential agent coordination and settlement</div>
            <div className="flex items-center space-x-5 text-[var(--text-secondary)]">
              <span>Robinhood Chain 4663</span>
              <span>Poseidon BN254</span>
              <span>Groth16 verifier</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
