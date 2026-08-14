import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function AboutClient() {
  return (
    <div className="bg-[#ffffff] text-[#1d1d1f] pt-28 pb-24 px-6 md:px-12 w-full min-h-screen">
      <div className="max-w-[980px] mx-auto">
        {/* Header / Hero */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-[12px] font-semibold tracking-[0.1em] text-[#7a7a7a] uppercase mb-3 block">
            About BeyondWebCo
          </span>
          <h1 className="text-[34px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.07] tracking-[-0.02em] text-[#1d1d1f] mb-6">
            We are BeyondWebCo.
          </h1>
          <p className="text-[17px] md:text-[21px] text-[#7a7a7a] leading-[1.47] max-w-2xl">
            A dedicated web design and development studio focused on building high-converting, high-speed digital products for modern companies and ambitious leaders.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 pb-20 border-b border-[#e0e0e0]">
          <div className="relative aspect-[4/3] w-full rounded-[18px] overflow-hidden product-shadow bg-[#fafafc] border border-[#e0e0e0]">
            <Image
              src="/arunchalam.webp"
              alt="BeyondWebCo Engineering"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h2 className="text-[28px] md:text-[34px] font-semibold text-[#1d1d1f] leading-tight mb-4">
              Engineering-First Studio
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#7a7a7a] leading-[1.47] mb-4">
              At BeyondWebCo, our mission is to redefine how digital experiences are built. We combine sleek modern aesthetic design with senior-level software engineering to give businesses a significant competitive edge online.
            </p>
            <p className="text-[15px] md:text-[17px] text-[#7a7a7a] leading-[1.47] mb-6">
              {"We believe your website should be your company's most productive revenue driver. Every digital platform we build is engineered from scratch for lightning-fast speeds, seamless Core Web Vitals, and maximum SEO visibility."}
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#f0f0f0]">
              <div>
                <span className="text-[34px] font-semibold text-[#0066cc] block">100%</span>
                <span className="text-[12px] text-[#7a7a7a] font-semibold uppercase tracking-wider">Senior Engineers</span>
              </div>
              <div>
                <span className="text-[34px] font-semibold text-[#0066cc] block">30+</span>
                <span className="text-[12px] text-[#7a7a7a] font-semibold uppercase tracking-wider">Projects Delivered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles Section */}
        <div className="mb-24">
          <div className="mb-12">
            <h2 className="text-[28px] md:text-[34px] font-semibold text-[#1d1d1f] mb-3">
              Core Principles
            </h2>
            <p className="text-[17px] text-[#7a7a7a]">
              How we maintain quality, speed, and architectural longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f5f5f7] p-8 rounded-[18px] border border-[#e0e0e0]">
              <span className="text-[12px] font-mono text-[#0066cc] font-semibold block mb-2">01</span>
              <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">Senior Engineering</h3>
              <p className="text-[14px] text-[#7a7a7a] leading-relaxed">
                Clean, type-safe Next.js codebases built with modular architecture and zero technical bloat.
              </p>
            </div>
            <div className="bg-[#f5f5f7] p-8 rounded-[18px] border border-[#e0e0e0]">
              <span className="text-[12px] font-mono text-[#0066cc] font-semibold block mb-2">02</span>
              <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">Performance Focus</h3>
              <p className="text-[14px] text-[#7a7a7a] leading-relaxed">
                Sub-second LCP speeds, zero layout shift (CLS), and asset compression pipelines.
              </p>
            </div>
            <div className="bg-[#f5f5f7] p-8 rounded-[18px] border border-[#e0e0e0]">
              <span className="text-[12px] font-mono text-[#0066cc] font-semibold block mb-2">03</span>
              <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">Built-in SEO</h3>
              <p className="text-[14px] text-[#7a7a7a] leading-relaxed">
                Semantic HTML5, Schema.org JSON-LD structured data, dynamic XML sitemaps, and Open Graph controls.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#272729] text-white p-12 rounded-[18px] text-center flex flex-col items-center">
          <h2 className="text-[28px] md:text-[34px] font-semibold mb-4">
            Ready to work with senior web engineers?
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#cccccc] max-w-xl mx-auto mb-8">
            {"Let's discuss how BeyondWebCo can engineer a high-performing digital platform tailored specifically to your goals."}
          </p>
          <Button variant="primary" href="/contact">
            Start Your Project
          </Button>
        </div>
      </div>
    </div>
  );
}
