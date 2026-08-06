"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Footer() {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 2000], [0, 360]);

  return (
    <footer className="bg-surface-container-lowest py-[120px] w-full border-t border-outline-variant mt-auto">
      <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px] grid grid-cols-12 gap-[32px]">
        {/* Company Info */}
        <div className="col-span-12 md:col-span-6 mb-12 md:mb-0">
          <div className="flex items-center gap-4 font-display-lg text-[36px] md:text-[48px] font-black text-on-surface opacity-20 leading-none mb-6 select-none">
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center flex-shrink-0">
              <motion.div style={{ rotate }} className="flex items-center justify-center">
                <Image
                  src="/arunchalam.png"
                  alt="BeyondWebCo Footer Logo"
                  width={64}
                  height={80}
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </motion.div>
            </div>
            <span className="font-montserrat font-light">BeyondWebCo</span>
          </div>
          <p className="text-on-surface-variant max-w-md text-base leading-relaxed">
            BeyondWebCo is a modern web design and engineering studio. We build ultra-fast, SEO-optimized, and highly responsive digital products that help businesses scale online.
          </p>
          <div className="flex gap-6 mt-8">
            <a 
              href="https://www.beyondwebco.com" 
              aria-label="BeyondWebCo Website" 
              className="text-on-surface-variant hover:text-primary transition-colors p-2 bg-surface-container-high rounded-full"
            >
              <span className="material-symbols-outlined text-xl">public</span>
            </a>
            <a 
              href="mailto:beyondwebco@gmail.com" 
              aria-label="Email BeyondWebCo" 
              className="text-on-surface-variant hover:text-primary transition-colors p-2 bg-surface-container-high rounded-full"
            >
              <span className="material-symbols-outlined text-xl">mail</span>
            </a>
            <a 
              href="https://instagram.com/beyondwebco" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="BeyondWebCo Instagram" 
              className="text-on-surface-variant hover:text-primary transition-colors p-2 bg-surface-container-high rounded-full"
            >
              <span className="material-symbols-outlined text-xl">photo_camera</span>
            </a>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="col-span-6 md:col-span-2">
          <h3 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">Solutions</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="/services" className="text-on-surface-variant hover:text-primary transition-colors">
                Services Overview
              </Link>
            </li>
            <li>
              <Link href="/work" className="text-on-surface-variant hover:text-primary transition-colors">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-on-surface-variant hover:text-primary transition-colors">
                Web Development
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="col-span-6 md:col-span-2">
          <h3 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">Studio</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="/about" className="text-on-surface-variant hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-on-surface-variant hover:text-primary transition-colors">
                Contact & Quote
              </Link>
            </li>
            <li>
              <Link href="/work" className="text-on-surface-variant hover:text-primary transition-colors">
                Selected Work
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="col-span-12 md:col-span-2 mt-8 md:mt-0">
          <h3 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">Direct Contact</h3>
          <ul className="flex flex-col gap-3 text-sm text-on-surface-variant">
            <li>
              <a href="mailto:beyondwebco@gmail.com" className="hover:text-primary transition-colors">
                beyondwebco@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+917993597172" className="hover:text-primary transition-colors">
                +91 7993597172
              </a>
            </li>
          </ul>
        </div>
        
        {/* Copyright */}
        <div className="col-span-12 mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant text-xs">
          <p>© {new Date().getFullYear()} <span className="font-montserrat font-light">BeyondWebCo</span>. All rights reserved.</p>
          <p>Engineered for speed, performance & enterprise security.</p>
        </div>
      </div>
    </footer>
  );
}
