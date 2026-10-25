'use client';

import React from 'react';
import GhostFibers from './GhostFibers';

// Real client quotes from BeyondWebCo partners
const TESTIMONIALS = [
  {
    quote:
      'BeyondWebCo built a modern website that perfectly represents our business. The team was responsive, delivered on time, and created a fast, professional website.',
    name: 'Sri Lakshmi Automobiles',
    role: 'Automotive Dealer',
  },
  {
    quote:
      'Our portfolio finally feels premium. BeyondWebCo understood our creative vision and created an experience that showcases our photography beautifully.',
    name: 'Pavani Studios',
    role: 'Photography Studio',
  },
  {
    quote:
      'The website exceeded my expectations. It is clean, professional, mobile-friendly, and makes it easier for people to understand my services and contact me.',
    name: 'Dr. Varun Healthcare',
    role: 'Healthcare Practice',
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-black py-24 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <GhostFibers
          glowColor="#1d69dd"
          lineColor="#dfd1fc"
          secondaryColor="#1d69dd"
          layers={3}
          twist={1.2}
          threads={72}
          fiberStyle="dots"
          depthOfField={0.85}
          hoverEffect="focus"
          intro
          mouseInteraction
          vignette={0.35}
          brightness={0.9}
        />
        {/* readability overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-[#1d69dd]/40 bg-[#1d69dd]/15 px-4 py-1 text-xs uppercase tracking-[0.2em] text-[#dfd1fc]">
            Testimonials
          </span>
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Loved by bold brands.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-400">
            What clients say after we ship.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#1d69dd]/50 hover:bg-white/[0.06] hover:shadow-[0_10px_30px_rgba(29,105,221,0.2)]"
            >
              <div className="mb-4 text-3xl leading-none text-[#1d69dd]">“</div>
              <blockquote className="flex-1 text-[15px] leading-relaxed text-neutral-200">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1d69dd]/20 text-sm font-medium text-[#dfd1fc]">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{t.name}</div>
                  <div className="text-xs text-neutral-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
