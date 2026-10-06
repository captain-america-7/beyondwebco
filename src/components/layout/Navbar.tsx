"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { navigationLinks, siteConfig } from "@/content/site";
import ThemeToggle from "@/components/ui/ThemeToggle";
import RollingButton from "@/components/ui/RollingButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-28px)] sm:w-[calc(100%-48px)] max-w-[1150px] h-[58px] px-3 sm:px-6 rounded-full flex items-center justify-between transition-all duration-300",
          scrolled
            ? "backdrop-blur-xl bg-[var(--nav-bg)] border border-[var(--border)] shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
            : "bg-transparent border border-transparent"
        )}
      >
        {/* Left: Logo + Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[var(--text)] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full p-1"
          aria-label={`${siteConfig.name} Home`}
        >
          {/* Minimalist geometric mark */}
          <div className="w-8 h-8 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] flex items-center justify-center group-hover:border-white/50 transition-colors shadow-sm">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-[var(--text)] transition-transform duration-300 group-hover:scale-110"
            >
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
              <line x1="12" y1="22" x2="12" y2="15.5" />
              <polyline points="22 8.5 12 15.5 2 8.5" />
            </svg>
          </div>
          <span className="font-bold tracking-widest text-sm uppercase text-[var(--text)]">
            {siteConfig.name}
          </span>
        </Link>

        {/* Center: Desktop Nav Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full"
        >
          {navigationLinks.map((item) => {
            const active = isActiveLink(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3.5 py-1.5 text-xs font-medium tracking-tight rounded-full transition-all duration-200 outline-none focus-visible:ring-1 focus-visible:ring-white",
                  active
                    ? "text-[var(--text)] font-semibold"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/10 dark:bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Theme Toggle + CTA button */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <ThemeToggle />

          <div className="hidden sm:inline-flex">
            <RollingButton
              text="Let's Connect"
              href="/contact"
              variant="primary"
              className="h-[38px] px-5 text-xs font-semibold"
              icon={<ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />}
            />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--border-strong)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-40 bg-[var(--bg)]/95 backdrop-blur-2xl flex flex-col justify-between px-6 pt-28 pb-10"
          >
            {/* Top decorative glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-[var(--color-accent-blue)]/20 blur-[90px] pointer-events-none" />

            <div className="flex flex-col space-y-2 mt-4">
              <span className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-2 font-mono">
                Navigation
              </span>

              {navigationLinks.map((item, index) => {
                const active = isActiveLink(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 + index * 0.04,
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "group flex items-center justify-between py-3 text-2xl tracking-tight transition-colors border-b border-[var(--border)]",
                        active
                          ? "text-[var(--text)] font-semibold"
                          : "text-[var(--muted)] hover:text-[var(--text)]"
                      )}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight
                        className={cn(
                          "w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                          active ? "opacity-100" : "opacity-30 group-hover:opacity-100"
                        )}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.3 }}
              className="flex flex-col gap-4 pt-6"
            >
              <RollingButton
                text="Let's Connect"
                href="/contact"
                variant="primary"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full h-[48px] text-sm font-semibold justify-center"
                icon={<ArrowUpRight className="w-4 h-4 ml-1" />}
              />
              <div className="flex items-center justify-between text-xs text-[var(--muted)] pt-2">
                <span>{siteConfig.contact.email}</span>
                <span>{siteConfig.contact.address}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
