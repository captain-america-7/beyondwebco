import { TextLink } from "@/components/ui/Button";

const homepageServices = [
  {
    title: "Web Design",
    description: "Thoughtful digital experiences built around brand, usability, and conversion.",
    specs: "Figma · Design Systems · UI/UX",
  },
  {
    title: "Web Development",
    description: "High-performance websites and applications engineered using modern web technologies.",
    specs: "Next.js · React · TypeScript",
  },
  {
    title: "SEO & Performance",
    description: "Technical optimization focused on search visibility, Core Web Vitals, and loading speed.",
    specs: "Core Web Vitals · Schema.org · Edge CDN",
  },
  {
    title: "Custom Digital Products",
    description: "Scalable web software, business platforms, SaaS products, and custom integrations.",
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
            Services Preview
          </span>
          <h2 className="text-[34px] md:text-[40px] font-semibold tracking-tight text-[#1d1d1f] mb-3">
            Services built as products.
          </h2>
          <p className="text-[17px] md:text-[21px] text-[#7a7a7a] max-w-2xl font-normal">
            End-to-end digital engineering from architectural strategy to high-performance launch.
          </p>
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {homepageServices.map((item, idx) => (
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
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <TextLink href="/services" className="text-[15px]">
            View All Services →
          </TextLink>
        </div>
      </div>
    </section>
  );
}
