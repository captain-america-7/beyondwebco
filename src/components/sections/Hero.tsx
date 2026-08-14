import { Button, TextLink } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-[#ffffff] text-[#1d1d1f] pt-28 pb-16 md:pt-36 md:pb-20 px-6 md:px-12 flex flex-col items-center text-center overflow-hidden">
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
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button variant="primary" href="/contact">
            Start a Project
          </Button>
          <Button variant="secondary-pill" href="/work">
            Explore Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
