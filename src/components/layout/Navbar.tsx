"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-[1200px] h-[52px] md:h-[56px] px-6 rounded-full bg-[#1d1d1f]/85 backdrop-blur-[20px] saturate-[180%] border border-white/15 flex items-center justify-between transition-all">
        {/* Brand Logo / Title */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white hover:opacity-80 transition-opacity font-semibold text-[14px] tracking-tight"
        >
          <Image
            src="/arunchalam.webp"
            alt="BeyondWebCo"
            width={22}
            height={22}
            className="w-5 h-5 object-contain"
          />
          <span>BeyondWebCo</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Global Navigation" className="hidden md:flex items-center gap-8">
          <Link
            href="/work"
            className="text-[13px] font-normal text-white/80 hover:text-white transition-colors"
          >
            Work
          </Link>
          <Link
            href="/services"
            className="text-[13px] font-normal text-white/80 hover:text-white transition-colors"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-[13px] font-normal text-white/80 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-[13px] font-normal text-white/80 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="bg-[#0066cc] text-white rounded-full px-4 py-1.5 text-[13px] font-normal hover:bg-[#0071e3] transition-transform active:scale-95"
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
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-[68px] z-50 bg-[#1d1d1f]/95 backdrop-blur-[20px] border border-white/15 rounded-2xl p-6 flex flex-col gap-4 text-[15px] text-white shadow-2xl animate-in fade-in duration-200">
          <Link
            href="/work"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-white/10 text-white/90 hover:text-white"
          >
            Work
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-white/10 text-white/90 hover:text-white"
          >
            Services
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-white/10 text-white/90 hover:text-white"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-white/10 text-white/90 hover:text-white"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 bg-[#0066cc] text-white rounded-full py-3 text-center font-normal hover:bg-[#0071e3] transition-all active:scale-95"
          >
            Start a Project
          </Link>
        </div>
      )}
    </>
  );
}
