import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import PortfolioSection from '@/components/sections/PortfolioSection';
import InfiniteSpiral from '@/components/ui/InfiniteSpiral';
import LightPillar from '@/components/LightPillar';
import Testimonials from '@/components/Testimonials';
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
      <PortfolioSection />
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

        {/* Ambient Top & Bottom Vignettes for Seamless Blending */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />

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
      <Testimonials />
    </>
  );
}
