'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Monitor, Smartphone, Layers, Image as ImageIcon, FileText, Sliders } from 'lucide-react';
import SoftAurora from '@/components/ui/SoftAurora';
import SpecularButton from '@/components/ui/SpecularButton';
import RollingButton from '@/components/ui/RollingButton';
import { siteConfig } from '@/content/site';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 min-h-screen flex flex-col justify-center items-center text-center">
      {/* Fullscreen Adaptive SoftAurora Shader Canvas */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <SoftAurora
          speed={0.5}
          scale={1}
          brightness={1.05}
          color1="#f7f7f7"
          color2="#e100ff"
          noiseFrequency={2.5}
          noiseAmplitude={2.5}
          bandHeight={0.68}
          bandSpread={0.9}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1.8}
          enableMouseInteraction={false}
          mouseInfluence={0.1}
        />
        {/* Atmospheric vignette overlays that softly fade into surrounding sections */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/15 to-black/80 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-52 md:h-72 bg-gradient-to-t from-black via-black/85 via-black/35 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-28 md:h-36 bg-gradient-to-b from-black/80 via-black/25 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center">
        {/* SpecularButton Badge Pill */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <SpecularButton
            size="sm"
            radius={20}
            className="!py-2 !px-5"
            tint="#ffffff"
            tintOpacity={0}
            textColor="#f5f5f5"
            lineColor="#5457e6"
            baseColor="#525252"
            intensity={1.15}
            idleIntensity={0.3}
            shineSize={28}
            shineFade={50}
            thickness={1.2}
            glow={1.25}
            followMouse={false}
            proximity={240}
            onClick={() => console.log('clicked')}
          >
            <span
              className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium tracking-wide text-neutral-100"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#5457e6] animate-pulse" />
              Design In Details
            </span>
          </SpecularButton>
        </motion.div>

        {/* H1 Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-bold tracking-tight text-[var(--text)] leading-[1.04] max-w-5xl mx-auto drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
        >
          We Build <span className="font-serif italic font-normal text-neutral-300 dark:text-neutral-200">Websites</span>
          <br />
          That <span className="font-serif italic font-normal text-neutral-300 dark:text-neutral-200">Matter.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg sm:text-xl text-[var(--muted)] max-w-2xl mx-auto font-light leading-relaxed"
        >
          {siteConfig.subtext}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <RollingButton
            text="Get in touch"
            href="/contact"
            variant="primary"
            className="h-[48px] px-8 text-sm font-semibold"
            icon={<ArrowUpRight className="w-4 h-4 ml-1" />}
          />
          <RollingButton
            text="See our work"
            href="/works"
            variant="secondary"
            className="h-[48px] px-8 text-sm font-semibold"
          />
        </motion.div>

        {/* Website Editor UI Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 w-full max-w-5xl mx-auto rounded-[24px] border border-white/20 dark:border-white/10 bg-black/60 backdrop-blur-2xl shadow-[0_20px_80px_rgba(225,0,255,0.12),0_0_40px_rgba(10,76,255,0.15)] overflow-hidden text-left"
        >
          {/* Top Bar */}
          <div className="h-12 border-b border-white/10 px-4 md:px-6 flex items-center justify-between text-xs font-mono text-neutral-400 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="ml-2 font-medium text-white tracking-wider uppercase text-[11px]">
                {siteConfig.name} Studio Canvas
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-4">
              <div className="flex items-center bg-white/5 rounded-lg p-0.5 border border-white/10">
                <button type="button" className="p-1 px-2 rounded bg-white/10 text-white" aria-label="Desktop viewport">
                  <Monitor className="w-3.5 h-3.5" />
                </button>
                <button type="button" className="p-1 px-2 rounded text-neutral-400 hover:text-white" aria-label="Mobile viewport">
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>
              <span className="text-[11px] text-neutral-400">w 1536px | 100%</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5 overflow-hidden">
                <span className="inline-block h-6 w-6 rounded-full ring-2 ring-black bg-gradient-to-tr from-purple-500 to-indigo-500 text-[10px] text-white font-bold flex items-center justify-center">
                  ED
                </span>
                <span className="inline-block h-6 w-6 rounded-full ring-2 ring-black bg-gradient-to-tr from-fuchsia-500 to-pink-500 text-[10px] text-white font-bold flex items-center justify-center">
                  UX
                </span>
              </div>
            </div>
          </div>

          {/* Editor Body */}
          <div className="grid grid-cols-12 min-h-[380px] bg-black/40">
            {/* Left Panel: Layers */}
            <div className="hidden md:block col-span-3 border-r border-white/10 p-4 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-4 border-b border-white/10 pb-3 mb-3 text-[11px] uppercase tracking-wider text-neutral-300">
                <span className="text-white flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" /> Layers
                </span>
                <span className="text-neutral-500 hover:text-neutral-300 cursor-pointer">Pages</span>
                <span className="text-neutral-500 hover:text-neutral-300 cursor-pointer">Assets</span>
              </div>

              <div className="space-y-1.5 text-[11px]">
                <div className="text-white font-medium flex items-center gap-1.5 py-1 px-2 rounded bg-white/10">
                  <span className="text-[#e100ff]">◆</span> Home
                </div>
                <div className="pl-4 text-neutral-300 flex items-center gap-1.5 py-0.5">
                  <span className="text-blue-400">↳</span> Hero Section
                </div>
                <div className="pl-6 text-neutral-500 py-0.5">• SoftAurora Canvas</div>
                <div className="pl-6 text-neutral-500 py-0.5">• Headline & Typography</div>
                <div className="pl-6 text-neutral-500 py-0.5">• Interactive CTAs</div>
                <div className="pl-4 text-neutral-400 py-0.5">↳ Tech Stack</div>
                <div className="pl-4 text-neutral-400 py-0.5">↳ Featured Works</div>
                <div className="pl-4 text-neutral-400 py-0.5">↳ Capabilities</div>
                <div className="pl-4 text-neutral-400 py-0.5">↳ Final CTA & Footer</div>
              </div>
            </div>

            {/* Center Canvas */}
            <div className="col-span-12 md:col-span-8 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    WebGL Shader Active
                  </span>
                  <span>120 FPS • GPU Accelerated</span>
                </div>

                <div className="my-8 text-center">
                  <span className="text-xs uppercase font-mono tracking-widest text-[#e100ff] block mb-2">
                    Visual Synthesis
                  </span>
                  <p className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                    Soft Aurora Dynamics
                  </p>
                  <p className="text-xs text-neutral-400 mt-2 max-w-md mx-auto font-mono">
                    3D Perlin noise harmonic synthesis with responsive cursor telemetry.
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-4 border-t border-white/10">
                  <span>viewport: 100vw × 100vh</span>
                  <span>noiseFreq: 2.5 • amp: 2.5</span>
                </div>
              </div>
            </div>

            {/* Right Quick Controls */}
            <div className="hidden md:flex col-span-1 border-l border-white/10 p-3 flex-col items-center gap-4 text-neutral-400">
              <Sliders className="w-4 h-4 hover:text-white cursor-pointer" />
              <ImageIcon className="w-4 h-4 hover:text-white cursor-pointer" />
              <FileText className="w-4 h-4 hover:text-white cursor-pointer" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
