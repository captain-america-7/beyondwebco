"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-margin-mobile md:px-margin-desktop text-center overflow-hidden pt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-surface -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        className="flex flex-col items-center"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-caps text-label-caps font-montserrat mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          AVAILABLE FOR NEW PROJECTS
        </span>
        
        <h1 className="font-display-xl text-[64px] leading-[1.1] md:text-display-xl max-w-5xl mx-auto mb-stack-lg">
          We Build Websites That <span className="text-[#9D4EDD]">Grow Businesses.</span>
        </h1>
        
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
          High-performance websites and digital products engineered for speed, scalability, SEO, and exceptional user experience.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <Link href="/contact" className="w-full sm:w-auto px-10 py-4 bg-primary text-black font-bold rounded-xl text-lg hover:scale-105 transition-transform">
            Start a Project
          </Link>
          <Link href="/work" className="w-full sm:w-auto px-10 py-4 border border-outline-variant hover:bg-white/5 font-bold rounded-xl text-lg transition-all">
            View Our Work
          </Link>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 1, 0.3, 1] }}
        className="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-24 w-full max-w-4xl"
      >
        <div className="flex flex-col items-center">
          <span className="font-display-lg text-display-lg text-[#9D4EDD]">30+</span>
          <span className="text-on-surface-variant font-label-caps text-label-caps">PROJECTS DELIVERED</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-display-lg text-display-lg text-[#9D4EDD]">100%</span>
          <span className="text-on-surface-variant font-label-caps text-label-caps">CLIENT SATISFACTION</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-display-lg text-display-lg text-[#9D4EDD]">2+</span>
          <span className="text-on-surface-variant font-label-caps text-label-caps">YEARS OF EXPERIENCE</span>
        </div>
      </motion.div>
    </section>
  );
}
