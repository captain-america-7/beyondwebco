import { TextLink } from "@/components/ui/Button";

const capabilities = [
  {
    title: "Web Design",
    description: "Photography-first, editorial interface design focused on brand presence, seamless conversion, and crisp user experience.",
    specs: "Figma · Design Systems · UI/UX",
  },
  {
    title: "Next.js Development",
    description: "High-performance web applications built using Next.js App Router, Server Components, and zero-runtime overhead.",
    specs: "Next.js 16 · React 19 · TypeScript",
  },
  {
    title: "SEO & Speed Optimization",
    description: "Obsessive Core Web Vitals engineering ensuring 95+ performance scores, instant page loads, and top search engine indexability.",
    specs: "Core Web Vitals · Schema.org · Edge CDN",
  },
  {
    title: "Custom Web Software",
    description: "Tailored enterprise web applications, e-commerce architectures, and scalable API integrations built for growth.",
    specs: "REST / GraphQL · PostgreSQL · Cloud Infrastructure",
  },
];

export default function Services() {
  return (
    <section className="bg-[#f5f5f7] text-[#1d1d1f] py-24 px-6 md:px-12 w-full border-t border-[#e0e0e0]">
      <div className="max-w-[1068px] mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-[12px] font-semibold tracking-[0.1em] text-[#7a7a7a] uppercase mb-2 block">
            Capabilities
          </span>
          <h2 className="text-[34px] md:text-[40px] font-semibold tracking-tight text-[#1d1d1f] mb-3">
            Services built as products.
          </h2>
          <p className="text-[17px] md:text-[21px] text-[#7a7a7a] max-w-2xl font-normal">
            End-to-end digital engineering from architectural strategy to high-performance launch.
          </p>
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-[18px] border border-[#e0e0e0] flex flex-col justify-between"
            >
              <div>
                <span className="text-[12px] text-[#7a7a7a] font-mono block mb-3">
                  0{idx + 1}
                </span>
                <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-3">
                  {item.title}
                </h3>
                <p className="text-[15px] text-[#7a7a7a] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0f0f0] flex items-center justify-between">
                <span className="text-[12px] font-mono text-[#7a7a7a]">
                  {item.specs}
                </span>
                <TextLink href="/services" className="text-[14px]">
                  Learn more →
                </TextLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
