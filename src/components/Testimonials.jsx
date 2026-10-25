'use client';

import React from 'react';
import { Star } from 'lucide-react';
import GhostFibers from './GhostFibers';

// Real client quotes from BeyondWebCo partners
const TESTIMONIALS = [
  {
    quote:
      'BeyondWebCo built a modern website that perfectly represents our business. The team was responsive, delivered on time, and created a fast, professional website.',
    name: 'Sri Lakshmi Automobiles',
    role: 'Automotive Dealer',
    rating: 5,
  },
  {
    quote:
      'Our portfolio finally feels premium. BeyondWebCo understood our creative vision and created an experience that showcases our photography beautifully.',
    name: 'Pavani Studios',
    role: 'Photography Studio',
    rating: 5,
  },
  {
    quote:
      'The website exceeded my expectations. It is clean, professional, mobile-friendly, and makes it easier for people to understand my services and contact me.',
    name: 'Dr. Varun Healthcare',
    role: 'Healthcare Practice',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-black py-32 md:py-48 min-h-[95vh] flex flex-col justify-center"
    >
      {/* GhostFibers WebGL Animated Atmosphere */}
      <div className="absolute inset-0 z-0">
        <GhostFibers
          glowColor="#1d69dd"
          lineColor="#dfd1fc"
          secondaryColor="#1d69dd"
          layers={3}
          twist={1.2}
          threads={76}
          fiberStyle="dots"
          depthOfField={0.85}
          hoverEffect="focus"
          intro
          mouseInteraction
          vignette={0.25}
          brightness={1.05}
        />
        {/* Soft edge blend overlays — center remains transparent so fibers shine through */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/60 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 w-full">
        <div className="mb-16 md:mb-20 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1d69dd]/40 bg-[#1d69dd]/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[#dfd1fc] backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#dfd1fc] animate-pulse" />
            BeyondWebCo • Client Endorsements
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Loved by bold brands.{' '}
            <span className="block mt-2 font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#dfd1fc] via-white to-[#1d69dd]">
              Crafted by BeyondWebCo.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base md:text-lg text-neutral-400 font-light">
            What founders and creative leaders say about partnering with BeyondWebCo.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="group relative flex flex-col justify-between min-h-[380px] md:min-h-[420px] rounded-[28px] border border-white/[0.12] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-white/[0.005] p-8 md:p-10 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#1d69dd]/60 hover:bg-white/[0.05] shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2),0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.35),0_25px_60px_rgba(29,105,221,0.25)]"
            >
              {/* Card top row: glowing quotation and 5 stars */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl font-serif leading-none text-[#1d69dd] drop-shadow-[0_0_12px_rgba(29,105,221,0.5)]">
                    “
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-3.5 h-3.5 fill-[#dfd1fc] text-[#dfd1fc]/90 drop-shadow-[0_0_6px_rgba(223,209,252,0.6)]"
                      />
                    ))}
                  </div>
                </div>

                {/* Quote copy */}
                <blockquote className="text-[15px] sm:text-[16px] leading-[1.75] font-light text-neutral-100 tracking-wide">
                  {t.quote}
                </blockquote>
              </div>

              {/* Card footer: glass avatar and author info */}
              <figcaption className="mt-8 flex items-center gap-4 border-t border-white/[0.08] pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-gradient-to-tr from-[#1d69dd]/30 via-white/10 to-[#dfd1fc]/25 text-base font-semibold text-white backdrop-blur-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_4px_12px_rgba(0,0,0,0.4)]">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm md:text-[15px] font-semibold text-white tracking-tight">
                    {t.name}
                  </div>
                  <div className="text-xs text-neutral-400 font-mono mt-0.5">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
