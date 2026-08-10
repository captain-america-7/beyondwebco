"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-[1200px] h-[56px] md:h-[60px] px-6 md:px-8 rounded-full bg-[#14121b]/60 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex items-center justify-between transition-all">
        {/* Brand Logo / Title */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white hover:opacity-80 transition-opacity font-semibold text-[17px] tracking-tight"
        >
          <Image
            src="/arunchalam.webp"
            alt="BeyondWebCo"
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
          <span>BeyondWebCo</span>
        </Link>

        {/* Desktop Navigation Links - White & Larger Text (16px) */}
        <nav aria-label="Global Navigation" className="hidden md:flex items-center gap-8">
          <Link
            href="/work"
            className="text-[16px] font-medium text-white hover:opacity-80 transition-opacity"
          >
            Work
          </Link>
          <Link
            href="/services"
            className="text-[16px] font-medium text-white hover:opacity-80 transition-opacity"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-[16px] font-medium text-white hover:opacity-80 transition-opacity"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-[16px] font-medium text-white hover:opacity-80 transition-opacity"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="bg-[#0066cc] text-white rounded-full px-5 py-2 text-[15px] font-medium hover:bg-[#0071e3] transition-transform active:scale-95 shadow-sm"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-[72px] z-50 bg-[#14121b]/90 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col gap-4 text-[17px] text-white shadow-2xl animate-in fade-in duration-200">
          <Link
            href="/work"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-white/10 text-white font-medium hover:opacity-80"
          >
            Work
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-white/10 text-white font-medium hover:opacity-80"
          >
            Services
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-white/10 text-white font-medium hover:opacity-80"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-white/10 text-white font-medium hover:opacity-80"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 bg-[#0066cc] text-white rounded-full py-3 text-center font-medium text-[16px] hover:bg-[#0071e3] transition-all active:scale-95"
          >
            Start a Project
          </Link>
        </div>
      )}
    </>
  );
}
