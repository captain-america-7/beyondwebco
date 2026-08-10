"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000000]/70 backdrop-blur-xl border-b border-white/15 shadow-sm h-[44px] transition-all">
      <div className="max-w-[1440px] mx-auto h-full px-4 md:px-8 flex items-center justify-between text-[12px] tracking-[-0.12px] text-[#ffffff]/90 font-normal">
        {/* Brand Logo / Title */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity font-semibold"
        >
          <Image
            src="/arunchalam.webp"
            alt="BeyondWebCo"
            width={20}
            height={20}
            className="w-5 h-5 object-contain"
          />
          <span>BeyondWebCo</span>
        </Link>

        {/* Desktop Links */}
        <nav aria-label="Global" className="hidden md:flex items-center gap-6">
          <Link
            href="/work"
            className="text-[#ffffff]/80 hover:text-white transition-colors"
          >
            Work
          </Link>
          <Link
            href="/services"
            className="text-[#ffffff]/80 hover:text-white transition-colors"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-[#ffffff]/80 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-[#ffffff]/80 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Action / CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="bg-[#0066cc] text-white rounded-full px-3 py-1 text-[12px] font-normal hover:bg-[#0071e3] transition-transform active:scale-95"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-1"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[44px] bg-[#000000] border-b border-white/10 py-6 px-6 flex flex-col gap-4 text-[15px] text-white">
          <Link
            href="/work"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 border-b border-white/10"
          >
            Work
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 border-b border-white/10"
          >
            Services
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 border-b border-white/10"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 border-b border-white/10"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 bg-[#0066cc] text-white rounded-full py-2.5 text-center font-normal hover:bg-[#0071e3] transition-all"
          >
            Start a Project
          </Link>
        </div>
      )}
    </header>
  );
}
