"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IconShield, IconTerminal, IconArrowRight, IconSun, IconMoon } from "./Icons";

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const isLight = document.documentElement.classList.contains("light");
    setTheme(isLight ? "light" : "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "light") {
      document.documentElement.classList.add("light");
      localStorage.setItem("veil-theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("veil-theme", "dark");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full h-[58px] bg-[var(--bg-deep)]/90 backdrop-blur-md border-b border-[var(--hairline)] px-4 sm:px-8 transition-colors duration-200">
      <div className="max-w-[1340px] h-full mx-auto flex items-center justify-between">
        {/* Left: Brand & Network Badge */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="w-7 h-7 rounded-[7px] bg-[var(--bg-card)] border border-[var(--hairline-strong)] flex items-center justify-center text-[var(--text-primary)] group-hover:border-[#ff6b2b] transition-colors shadow-sm">
              <IconShield size={14} />
            </span>
            <span className="font-semibold text-[15px] text-[var(--text-primary)] tracking-tight">Veil</span>
            <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider hidden sm:inline-block">
              Protocol
            </span>
          </Link>

          {/* Network Badge */}
          <div className="flex items-center space-x-1.5 pl-2.5 ml-1 border-l border-[var(--hairline)] text-[11.5px] font-mono text-[var(--text-muted)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4cc38a] shadow-[0_0_6px_#4cc38a]" />
            <span className="hidden sm:inline">Robinhood Chain 4663</span>
            <span className="sm:hidden text-[11px]">4663</span>
          </div>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-[13px] font-normal text-[var(--text-secondary)]">
          <Link href="#console" className="hover:text-[var(--text-primary)] transition-colors">
            Console
          </Link>
          <Link href="#bento" className="hover:text-[var(--text-primary)] transition-colors">
            Architecture
          </Link>
          <Link href="#sdk" className="hover:text-[var(--text-primary)] transition-colors">
            Developer SDK
          </Link>
          <Link href="#tokenomics" className="hover:text-[var(--text-primary)] transition-colors">
            Tokenomics &amp; $VEIL
          </Link>
        </nav>

        {/* Right: Theme Toggle & Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-8 h-8 rounded-[8px] bg-[var(--bg-card)] border border-[var(--hairline)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--hairline-strong)] transition-all shadow-sm"
          >
            {theme === "dark" ? (
              <IconSun size={14} className="text-[#ff934f]" />
            ) : (
              <IconMoon size={14} className="text-[#3b82f6]" />
            )}
          </button>

          {/* GitHub link */}
          <a
            href="https://github.com/Olalolo22/Veil"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex text-[12.5px] font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors px-1.5 py-1"
          >
            GitHub
          </a>

          {/* Terminal Launch CTA */}
          <Link
            href="/terminal"
            className="inline-flex items-center space-x-1.5 h-[32px] sm:h-[34px] px-3 sm:px-3.5 rounded-[8px] bg-[var(--text-primary)] text-[var(--bg-page)] font-medium text-[12px] sm:text-[12.5px] hover:opacity-90 transition-all shadow-sm"
          >
            <IconTerminal size={13} />
            <span>Terminal</span>
            <IconArrowRight size={12} className="hidden sm:inline" />
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="lg:hidden w-8 h-8 rounded-[8px] bg-[var(--bg-card)] border border-[var(--hairline)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[58px] left-0 w-full bg-[var(--bg-deep)] border-b border-[var(--hairline)] px-4 py-4 space-y-3 shadow-xl z-50">
          <Link
            href="#console"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-2 py-1.5 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-card)] rounded"
          >
            Console
          </Link>
          <Link
            href="#bento"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-2 py-1.5 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-card)] rounded"
          >
            Architecture
          </Link>
          <Link
            href="#sdk"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-2 py-1.5 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-card)] rounded"
          >
            Developer SDK
          </Link>
          <Link
            href="#tokenomics"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-2 py-1.5 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-card)] rounded"
          >
            Tokenomics &amp; $VEIL
          </Link>
          <div className="pt-2 border-t border-[var(--hairline)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
            <span>Robinhood Chain (4663)</span>
            <a
              href="https://github.com/Olalolo22/Veil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-primary)] hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
