"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 2000], [0, 360]);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[1440px] rounded-full backdrop-blur-xl border border-white/10 z-50 flex justify-between items-center px-[32px] transition-all duration-300",
        scrolled ? "py-3 shadow-2xl bg-surface/50 dark:bg-surface/80" : "py-4 bg-surface/30 dark:bg-surface/60"
      )}
    >
      <Link href="/" className="flex items-center gap-3 font-display-lg-mobile text-[32px] md:text-display-lg-mobile font-bold text-on-surface tracking-tighter hover:text-[#186ede] transition-colors group">
        <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0">
          <motion.div style={{ rotate }} className="flex items-center justify-center">
            <Image
              src="/arunchalam.png"
              alt="BeyondWebCo Logo"
              width={45}
              height={56}
              className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              unoptimized
            />
          </motion.div>
        </div>
        <span className="font-montserrat">BeyondWebCo</span>
      </Link>
      
      <div className="hidden md:flex gap-8 items-center">
        <Link href="/" className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md font-medium font-montserrat">Home</Link>
        <Link href="/about" className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md font-medium font-montserrat">About</Link>
        <Link href="/services" className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md font-medium font-montserrat">Services</Link>
        <Link href="/work" className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md font-medium font-montserrat">Work</Link>
        <Link href="/contact" className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md font-medium font-montserrat">Contact</Link>
      </div>

      <div className="flex items-center gap-6">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-on-surface-variant hover:text-on-surface"
            aria-label="Toggle Dark Mode"
          >
            <span className="material-symbols-outlined text-[20px]">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>
        )}
        <Link href="/contact" className="hidden lg:block bg-primary text-black px-6 py-2 rounded-xl font-bold font-montserrat hover:scale-95 active:scale-90 transition-transform">
          Start a Project
        </Link>
      </div>
    </nav>
  );
}
