import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import PortfolioSection from '@/components/sections/PortfolioSection';
import InfiniteSpiral from '@/components/ui/InfiniteSpiral';
import LightPillar from '@/components/LightPillar';
import Testimonials from '@/components/Testimonials';
import DiffuseTransition from '@/components/ui/DiffuseTransition';
import { siteConfig } from '@/content/site';

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
};

const images = [
  { src: '/images/landscape-1.jpg', alt: 'Mountain lake' },
  { src: '/images/landscape-2.jpg', alt: 'Forest path' },
  { src: '/images/landscape-3.jpg', alt: 'Rocky summit' },
  { src: '/images/landscape-4.jpg', alt: 'Ocean shore' },
  { src: '/images/landscape-5.jpg', alt: 'Green meadow' },
  { src: '/images/landscape-6.jpg', alt: 'Desert light' },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Atmospheric Diffuse Transition between Hero & Portfolio */}
      <DiffuseTransition
        glowColor="#7E57C2"
        secondaryGlow="#1d69dd"
        className="-my-10 relative z-30"
        spread="sm"
      />

      <PortfolioSection />

      {/* Atmospheric Diffuse Transition into the 3D Spiral */}
      <DiffuseTransition
        glowColor="#4ee0ef"
        secondaryGlow="#110ab2"
        className="-my-10 relative z-30"
        spread="sm"
      />

      <div style={{ height: '750px', position: 'relative', overflow: 'hidden' }} className="w-full bg-black">
        {/* LightPillar WebGL Atmospheric Background */}
        <div className="absolute inset-0 z-0">
          <LightPillar
            topColor="#4ee0ef"
            bottomColor="#110ab2"
            intensity={1.25}
            glowAmount={0.0015}
            bloom={0.55}
            pillarWidth={3.8}
            pillarHeight={0.4}
            pillarRotation={34}
            rotationSpeed={0.3}
            interactive
            clickPulse
            intro
            quality="high"
            mixBlendMode="screen"
            twist={0.6}
          />
        </div>

        {/* Ambient Top & Bottom Multi-Stage Feathered Vignettes */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-44 md:h-56 bg-gradient-to-b from-black via-black/80 via-black/25 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 md:h-56 bg-gradient-to-t from-black via-black/80 via-black/25 to-transparent z-10" />

        {/* Ambient entrance & exit light pools */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#4ee0ef]/40 to-transparent blur-[1px] z-20" />
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[120px] bg-gradient-to-b from-[#4ee0ef]/10 to-transparent blur-[80px] rounded-full z-20" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#1d69dd]/40 to-transparent blur-[1px] z-20" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[120px] bg-gradient-to-t from-[#1d69dd]/10 to-transparent blur-[80px] rounded-full z-20" />

        {/* Rotating 3D Spiral Showcase */}
        <div className="relative z-10 w-full h-full">
          <InfiniteSpiral
            items={images}
            animationMode="scroll"
            speed={0.4}
            radius={320}
            cardWidth={280}
            cardHeight={180}
            verticalSpacing={90}
            perspective={1200}
            cardRadius={18}
            centerScale={1.2}
            edgeBlur={6}
            cardsPerTurn={7}
            pauseOnHover
            direction="up"
            rotation={0}
            cardTilt={0}
            edgeFade={0.3}
            imageFit="cover"
            grayscale={0}
          />
        </div>
      </div>

      {/* Atmospheric Diffuse Transition between 3D Spiral & Testimonials */}
      <DiffuseTransition
        glowColor="#1d69dd"
        secondaryGlow="#dfd1fc"
        className="-my-10 relative z-30"
        spread="sm"
      />

      <Testimonials />
    </>
  );
}
