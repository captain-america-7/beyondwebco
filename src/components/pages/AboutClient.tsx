import Image from "next/image";
import { Button } from "@/components/ui/Button";

const engineeringPrinciples = [
  {
    num: "01",
    title: "Senior Engineering",
    desc: "Clean, type-safe Next.js codebases built with modular architecture and zero technical bloat.",
  },
  {
    num: "02",
    title: "Performance Focus",
    desc: "Sub-second LCP speeds, zero layout shift (CLS), and asset compression pipelines.",
  },
  {
    num: "03",
    title: "Built-in SEO",
    desc: "Semantic HTML5, Schema.org JSON-LD structured data, dynamic XML sitemaps, and Open Graph controls.",
  },
];

const visionAreas = [
  "SaaS Products",
  "Application Development",
  "Cloud Development",
  "Cloud Cost Optimization",
  "Automation Solutions",
  "Augmented Reality",
  "Advanced Digital Experiences",
];

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
            We believe great digital products are equal parts design and engineering.
          </h1>
          <p className="text-[17px] md:text-[21px] text-[#7a7a7a] leading-[1.47] max-w-3xl font-normal">
            BeyondWebCo is a modern web design and engineering studio building high-performance digital experiences for ambitious businesses. We combine thoughtful visual design with modern engineering to create websites, applications, e-commerce platforms, SaaS products, and custom digital solutions that are fast, scalable, and designed around real business goals.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 pb-20 border-b border-[#e0e0e0]">
          <div className="relative aspect-[4/3] w-full rounded-[18px] overflow-hidden bg-[#fafafc] border border-[#e0e0e0]">
            <Image
              src="/arunchalam.webp"
              alt="BeyondWebCo Engineering Studio"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h2 className="text-[28px] md:text-[34px] font-semibold text-[#1d1d1f] leading-tight mb-4">
              Our Story & Focus
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#7a7a7a] leading-[1.47] mb-4">
              BeyondWebCo was founded with a clear goal: eliminate the compromise between aesthetic craftsmanship and deep technical speed. Many agencies deliver attractive sites that are bloated and slow; others deliver fast code with uninspired design.
            </p>
            <p className="text-[15px] md:text-[17px] text-[#7a7a7a] leading-[1.47] mb-6">
              We bridge both worlds. Every platform we release is custom-coded, search-optimized, and built to act as a company's highest-converting digital channel.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#f0f0f0]">
              <div>
                <span className="text-[34px] font-semibold text-[#0066cc] block">100%</span>
                <span className="text-[12px] text-[#7a7a7a] font-semibold uppercase tracking-wider">Custom Codebase</span>
              </div>
              <div>
                <span className="text-[34px] font-semibold text-[#0066cc] block">35+</span>
                <span className="text-[12px] text-[#7a7a7a] font-semibold uppercase tracking-wider">Platforms Built</span>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy & What We Believe */}
        <div className="mb-24">
          <div className="mb-12">
            <span className="text-[12px] font-semibold tracking-[0.1em] text-[#7a7a7a] uppercase mb-2 block">
              Our Philosophy
            </span>
            <h2 className="text-[28px] md:text-[34px] font-semibold text-[#1d1d1f] mb-4">
              What We Believe
            </h2>
            <p className="text-[17px] text-[#7a7a7a] max-w-2xl">
              We reject artificial complexity, slow page loads, and generic web templates. We believe in:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f5f5f7] p-8 rounded-[18px] border border-[#e0e0e0]">
              <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">Clarity Over Noise</h3>
              <p className="text-[14px] text-[#7a7a7a] leading-relaxed">
                Design decisions should illuminate the message and make interaction effortless, not add visual clutter.
              </p>
            </div>
            <div className="bg-[#f5f5f7] p-8 rounded-[18px] border border-[#e0e0e0]">
              <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">Speed as a Feature</h3>
              <p className="text-[14px] text-[#7a7a7a] leading-relaxed">
                Page speed directly affects user trust, SEO rankings, and conversion rates. Speed is non-negotiable.
              </p>
            </div>
            <div className="bg-[#f5f5f7] p-8 rounded-[18px] border border-[#e0e0e0]">
              <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">Engineering Quality</h3>
              <p className="text-[14px] text-[#7a7a7a] leading-relaxed">
                Code should be modular, maintainable, type-safe, and ready to scale alongside growing business demands.
              </p>
            </div>
          </div>
        </div>

        {/* Engineering Principles */}
        <div className="mb-24 pb-20 border-b border-[#e0e0e0]">
          <div className="mb-12">
            <h2 className="text-[28px] md:text-[34px] font-semibold text-[#1d1d1f] mb-3">
              Engineering Principles
            </h2>
            <p className="text-[17px] text-[#7a7a7a]">
              How we maintain quality, speed, and architectural longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engineeringPrinciples.map((item, idx) => (
              <div key={idx} className="bg-[#f5f5f7] p-8 rounded-[18px] border border-[#e0e0e0]">
                <span className="text-[12px] font-mono text-[#0066cc] font-semibold block mb-2">{item.num}</span>
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-[14px] text-[#7a7a7a] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Growth Direction */}
        <div className="bg-[#272729] text-white p-12 rounded-[18px] mb-20">
          <span className="text-[12px] font-mono text-[#2997ff] uppercase tracking-wider block mb-2">
            Long-Term Direction
          </span>
          <h2 className="text-[28px] md:text-[34px] font-semibold mb-4">
            BeyondWebCo Vision
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#cccccc] max-w-3xl mb-8 leading-relaxed">
            As web technology evolves, BeyondWebCo continues to expand into advanced digital engineering disciplines—building SaaS software, enterprise web applications, automated cloud pipelines, and next-generation interactive experiences.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {visionAreas.map((area, idx) => (
              <span
                key={idx}
                className="text-[13px] font-mono text-white bg-[#1d1d1f] px-3.5 py-1.5 rounded-[6px] border border-white/10"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center pt-8">
          <h2 className="text-[28px] md:text-[34px] font-semibold text-[#1d1d1f] mb-4">
            Ready to build with BeyondWebCo?
          </h2>
          <p className="text-[17px] text-[#7a7a7a] max-w-lg mx-auto mb-8 font-normal">
            Let's discuss how we can partner on your next digital product or website engineering initiative.
          </p>
          <Button variant="primary" href="/contact">
            Start Your Project →
          </Button>
        </div>
      </div>
    </div>
  );
}
