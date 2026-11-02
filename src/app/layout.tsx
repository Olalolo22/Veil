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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              try {
                var stored = localStorage.getItem('veil-theme');
                if (stored === 'light' || (!stored && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.remove('light');
                }
              } catch(e) {}
            })()`,
          }}
        />
      </head>
      <body className="bg-[var(--bg-page)] text-[var(--text-primary)] min-h-screen flex flex-col antialiased selection:bg-[#ff6b2b] selection:text-[#0f0f10]">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
