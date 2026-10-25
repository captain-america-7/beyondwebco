'use client';

import React from 'react';

interface DiffuseTransitionProps {
  glowColor?: string;
  secondaryGlow?: string;
  className?: string;
  beam?: boolean;
  spread?: 'sm' | 'md' | 'lg';
  position?: 'top' | 'bottom' | 'center';
}

export default function DiffuseTransition({
  glowColor = '#1d69dd',
  secondaryGlow = '#7E57C2',
  className = '',
  beam = true,
  spread = 'md',
}: DiffuseTransitionProps) {
  const heights = {
    sm: 'h-20 md:h-28',
    md: 'h-32 md:h-44',
    lg: 'h-44 md:h-64',
  };

  return (
    <div
      className={`relative w-full overflow-hidden pointer-events-none select-none z-20 flex items-center justify-center ${heights[spread]} ${className}`}
      aria-hidden="true"
    >
      {/* Deep smooth vertical diffuse fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-transparent" />

      {/* Primary diffuse ambient radial aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[180px] rounded-full blur-[110px] opacity-35 mix-blend-screen"
        style={{
          background: `radial-gradient(ellipse at center, ${glowColor} 0%, ${secondaryGlow} 50%, transparent 80%)`,
        }}
      />

      {/* Secondary soft colored aura pool */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[90px] rounded-full blur-[70px] opacity-30 mix-blend-screen"
        style={{
          background: `radial-gradient(ellipse at center, ${secondaryGlow} 0%, transparent 70%)`,
        }}
      />

      {beam && (
        <>
          {/* Luminous diffuse beam */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] max-w-4xl h-[1.5px] opacity-40 blur-[1px]"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${glowColor} 25%, #ffffff 50%, ${glowColor} 75%, transparent 100%)`,
            }}
          />
          {/* Ultra-fine center hairline */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] max-w-2xl h-[1px] opacity-60"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.1) 75%, transparent 100%)',
            }}
          />
        </>
      )}
    </div>
  );
}
