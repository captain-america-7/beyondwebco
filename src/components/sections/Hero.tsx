import { Button, TextLink } from "@/components/ui/Button";

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

        {/* Studio Digital Showcase Container (Typography & Live Product Focus) */}
        <div className="w-full max-w-[1068px] mx-auto mt-4 rounded-2xl overflow-hidden bg-[#1d1d1f] text-white border border-[#333333] p-8 md:p-12 text-left shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-6 mb-8 gap-4">
            <div>
              <span className="text-[12px] font-mono text-[#2997ff] uppercase tracking-wider">
                Featured Flagship Platform
              </span>
              <h2 className="text-[28px] md:text-[36px] font-semibold text-white mt-1">
                Volta EV Platform
              </h2>
            </div>
            <TextLink href="https://volta.beyondwebco.com/" external onDark className="text-[15px]">
              Visit Live Site →
            </TextLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[14px]">
            <div className="bg-[#272729] p-6 rounded-xl border border-white/5">
              <span className="text-[11px] font-mono text-[#cccccc] uppercase block mb-1">Architecture</span>
              <p className="text-white font-medium">Next.js & Edge Infrastructure</p>
            </div>
            <div className="bg-[#272729] p-6 rounded-xl border border-white/5">
              <span className="text-[11px] font-mono text-[#cccccc] uppercase block mb-1">Speed Index</span>
              <p className="text-white font-medium">Sub-second Core Web Vitals</p>
            </div>
            <div className="bg-[#272729] p-6 rounded-xl border border-white/5">
              <span className="text-[11px] font-mono text-[#cccccc] uppercase block mb-1">Domain</span>
              <p className="text-[#2997ff] font-mono truncate">volta.beyondwebco.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
