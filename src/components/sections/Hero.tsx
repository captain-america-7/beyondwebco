import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-[#ffffff] text-[#1d1d1f] pt-28 pb-16 md:pt-36 md:pb-24 px-6 md:px-12 flex flex-col items-center text-center overflow-hidden">
      <div className="max-w-[980px] mx-auto flex flex-col items-center">
        {/* Subtle Category/Eyebrow */}
        <span className="text-[12px] font-semibold tracking-[0.1em] text-[#7a7a7a] uppercase mb-4">
          BeyondWebCo Studio
        </span>

        {/* Hero Title */}
        <h1 className="font-semibold text-[34px] sm:text-[48px] md:text-[56px] leading-[1.07] tracking-[-0.02em] text-[#1d1d1f] max-w-4xl mx-auto mb-6">
          We build digital experiences people remember.
        </h1>

        {/* Subcopy */}
        <p className="text-[17px] md:text-[21px] leading-[1.47] text-[#7a7a7a] max-w-2xl mx-auto mb-8 font-normal">
          High-performance websites and custom digital products engineered for ambitious businesses.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
          <Button variant="primary" href="/contact">
            Start a Project
          </Button>
          <Button variant="secondary-pill" href="/work">
            View Selected Work
          </Button>
        </div>

        {/* Hero Visual Showcase with Resting Shadow */}
        <div className="w-full max-w-[1068px] mx-auto mt-4 rounded-xl overflow-hidden product-shadow bg-[#f5f5f7] border border-[#e0e0e0]">
          <div className="bg-[#1d1d1f] px-4 py-3 flex items-center gap-2 border-b border-[#333333]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="text-[11px] text-[#7a7a7a] mx-auto font-mono">https://www.beyondwebco.com</span>
          </div>
          <div className="relative aspect-[16/9] w-full bg-[#fafafc] overflow-hidden">
            <Image
              src="/projects/sri_lakshmi_automobiles.webp"
              alt="BeyondWebCo High Performance Showcase"
              fill
              priority
              quality={90}
              className="object-cover object-top"
              sizes="(max-width: 1068px) 100vw, 1068px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
