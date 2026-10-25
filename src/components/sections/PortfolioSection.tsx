'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import RollingButton from '@/components/ui/RollingButton';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ProjectCardData {
  id: string;
  title: string;
  category: string;
  image: string;
}

const row1Projects: ProjectCardData[] = [
  { id: 'apex-architecture', title: 'Apex Studio', category: 'Spatial Design', image: '/auraluxe.avif' },
  { id: 'lumina-intelligence', title: 'Lumina Cloud', category: 'AI Infrastructure', image: '/nactura.avif' },
  { id: 'veloce-mobility', title: 'Veloce Mobility', category: 'Automotive Configurator', image: '/pattepastries.avif' },
  { id: 'solstice-horology', title: 'Solstice Watches', category: 'Luxury eCommerce', image: '/auraluxe.avif' },
  { id: 'zenith-intelligence', title: 'Zenith Labs', category: 'Next.js Platform', image: '/nactura.avif' },
  { id: 'kinetics-performance', title: 'Kinetics Athletic', category: 'Digital Flagship', image: '/pattepastries.avif' },
  { id: 'prism-acoustics', title: 'Prism Acoustics', category: 'Sound Hardware', image: '/auraluxe.avif' },
];

const row2Projects: ProjectCardData[] = [
  { id: 'atelier-forma', title: 'Atelier Forma', category: 'Ceramics & Homeware', image: '/nactura.avif' },
  { id: 'strata-energy', title: 'Strata Energy', category: 'Renewable Tech', image: '/pattepastries.avif' },
  { id: 'orbit-agency', title: 'Orbit Collective', category: 'Creative Production', image: '/auraluxe.avif' },
  { id: 'chrono-heritage', title: 'Chrono Timepieces', category: 'Direct-to-Consumer', image: '/nactura.avif' },
  { id: 'kanso-living', title: 'Kanso Living', category: 'Minimal Architecture', image: '/pattepastries.avif' },
  { id: 'vector-systems', title: 'Vector AI', category: 'Autonomous Fleet', image: '/auraluxe.avif' },
  { id: 'nexus-bio', title: 'Nexus Bio', category: 'Health Technology', image: '/nactura.avif' },
];

const row3Projects: ProjectCardData[] = [
  { id: 'nova-collective', title: 'Nova Collective', category: 'Brand Architecture', image: '/pattepastries.avif' },
  { id: 'horizon-mobility', title: 'Horizon Mobility', category: 'Electric Transport', image: '/auraluxe.avif' },
  { id: 'aethel-capital', title: 'Aethel Capital', category: 'Venture Capital', image: '/nactura.avif' },
  { id: 'studio-monolith', title: 'Studio Monolith', category: 'Exhibition Design', image: '/pattepastries.avif' },
  { id: 'lumos-audio', title: 'Lumos Sound', category: 'Acoustic Engineering', image: '/auraluxe.avif' },
  { id: 'vertex-system', title: 'Vertex Studio', category: 'Design Systems', image: '/nactura.avif' },
  { id: 'ethereal-goods', title: 'Ethereal Goods', category: 'Luxury Apparel', image: '/pattepastries.avif' },
];

export function PortfolioCard({
  project,
}: {
  project: ProjectCardData;
}) {
  return (
    <Link
      href={`/works/${project.id}`}
      className="group relative shrink-0 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] h-[170px] sm:h-[195px] md:h-[225px] lg:h-[245px] rounded-[8px] overflow-hidden bg-[#111111] border border-white/[0.06] cursor-pointer block"
      style={{ willChange: 'transform' }}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 360px"
        className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {/* Subtle bottom gradient overlay for readability on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-0.5">
          {project.category}
        </span>
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-white tracking-tight">
            {project.title}
          </h4>
          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 opacity-80" />
        </div>
      </div>
    </Link>
  );
}

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const row1Ref = useRef<HTMLDivElement | null>(null);
  const row2Ref = useRef<HTMLDivElement | null>(null);
  const row3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Calculate dynamic travel distance based on actual row scrollWidth and container width
      const getRowMoveDistance = (
        row: HTMLDivElement | null,
        containerWidth: number
      ) => {
        if (!row) return Math.max(containerWidth * 0.55, 220);
        const totalRowWidth = row.scrollWidth;
        const overflow = Math.max(0, totalRowWidth - containerWidth);
        return Math.min(overflow * 0.45, Math.max(containerWidth * 0.55, 220));
      };

      const getContainerWidth = () =>
        containerRef.current?.offsetWidth || window.innerWidth;

      // Single synchronized timeline linked to section entering & leaving viewport
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.3,
          invalidateOnRefresh: true,
        },
      });

      // ROW 1: Moves horizontally to the LEFT as user scrolls down
      if (row1Ref.current) {
        tl.fromTo(
          row1Ref.current,
          { x: 0 },
          {
            x: () => -getRowMoveDistance(row1Ref.current, getContainerWidth()),
            ease: 'none',
          },
          0
        );
      }

      // ROW 2: Moves horizontally to the RIGHT as user scrolls down
      if (row2Ref.current) {
        tl.fromTo(
          row2Ref.current,
          {
            x: () => -getRowMoveDistance(row2Ref.current, getContainerWidth()),
          },
          {
            x: 0,
            ease: 'none',
          },
          0
        );
      }

      // ROW 3: Moves horizontally to the LEFT as user scrolls down
      if (row3Ref.current) {
        tl.fromTo(
          row3Ref.current,
          {
            x: () => -getRowMoveDistance(row3Ref.current, getContainerWidth()) * 0.25,
          },
          {
            x: () => -getRowMoveDistance(row3Ref.current, getContainerWidth()) * 1.25,
            ease: 'none',
          },
          0
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#000000] text-white py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Ambient Diffuse Light Auras behind the section */}
      <div className="pointer-events-none absolute -top-32 left-1/4 w-[750px] h-[380px] bg-gradient-to-br from-[#7E57C2]/15 via-[#1d69dd]/10 to-transparent blur-[140px] rounded-full z-0" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 w-[750px] h-[380px] bg-gradient-to-tl from-[#1d69dd]/15 via-[#a2e7ff]/8 to-transparent blur-[140px] rounded-full z-0" />

      {/* Top & Bottom feathered edge blending */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 md:h-44 bg-gradient-to-b from-black via-black/70 to-transparent z-20" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 md:h-44 bg-gradient-to-t from-black via-black/70 to-transparent z-20" />

      <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-0 relative z-10">
        {/* LEFT COLUMN: ~38% desktop width, editorial text */}
        <div className="w-full lg:w-[38%] shrink-0 flex flex-col justify-center px-6 sm:px-10 lg:pl-16 lg:pr-8 z-20 relative bg-gradient-to-b lg:bg-gradient-to-r from-black via-black/95 to-transparent">
          <div className="max-w-[480px]">
            {/* Large Bold Heading */}
            <h2 className="text-[36px] sm:text-[46px] md:text-[54px] lg:text-[60px] font-bold tracking-[-0.04em] leading-[0.98] text-white">
              Design that speaks.
              <br />
              <span className="text-neutral-200">Delivery that converts.</span>
            </h2>

            {/* Paragraph below with muted gray text */}
            <p className="mt-6 text-[16px] sm:text-[17px] md:text-[18px] text-[#8a8a8a] leading-[1.55] max-w-[450px] font-light">
              We engineer conversion-driven digital platforms that merge architectural precision with high-converting interaction design.
            </p>

            {/* Two Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="/about"
                className="bg-white text-black hover:bg-neutral-200 transition-all duration-200 px-5 py-3 rounded-full text-sm font-semibold inline-flex items-center justify-center active:scale-95"
              >
                About Us
              </Link>
              <Link
                href="/works"
                className="bg-transparent text-white border border-[#333333] hover:border-white/50 transition-all duration-200 px-5 py-3 rounded-full text-sm font-semibold inline-flex items-center justify-center active:scale-95"
              >
                See our work
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: ~62% desktop width, 3 alternating moving rows */}
        <div
          ref={containerRef}
          className="w-full lg:w-[62%] flex flex-col justify-center overflow-hidden z-10 py-2 lg:py-0 relative"
        >
          {/* Subtle fade gradient overlay on the left & right edge of cards for smooth emergence */}
          <div className="hidden lg:block absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="hidden lg:block absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

          {/* 3 Horizontal Moving Rows */}
          <div className="flex flex-col gap-2 md:gap-2.5 w-full">
            {/* ROW 1: Moves LEFT */}
            <div
              ref={row1Ref}
              className="portfolio-row portfolio-row-1 flex gap-2.5 md:gap-3 select-none"
              style={{ willChange: 'transform' }}
            >
              {row1Projects.map((p) => (
                <PortfolioCard key={`r1-${p.id}`} project={p} />
              ))}
            </div>

            {/* ROW 2: Moves RIGHT */}
            <div
              ref={row2Ref}
              className="portfolio-row portfolio-row-2 flex gap-2.5 md:gap-3 select-none"
              style={{ willChange: 'transform' }}
            >
              {row2Projects.map((p) => (
                <PortfolioCard key={`r2-${p.id}`} project={p} />
              ))}
            </div>

            {/* ROW 3: Moves LEFT */}
            <div
              ref={row3Ref}
              className="portfolio-row portfolio-row-3 flex gap-2.5 md:gap-3 select-none"
              style={{ willChange: 'transform' }}
            >
              {row3Projects.map((p) => (
                <PortfolioCard key={`r3-${p.id}`} project={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
