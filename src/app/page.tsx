import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import PortfolioSection from '@/components/sections/PortfolioSection';
import InfiniteSpiral from '@/components/ui/InfiniteSpiral';
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
      <div style={{ height: '750px', position: 'relative', overflow: 'hidden' }}>
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
    </>
  );
}
