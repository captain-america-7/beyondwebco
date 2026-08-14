import { Button } from "@/components/ui/Button";

const servicesList = [
  {
    title: "Custom Business Websites",
    desc: "Enterprise-grade corporate websites optimized for brand trust, rapid load speeds, and high conversion lead generation.",
    details: ["Next.js & React Core", "Custom CMS Integration", "95+ Lighthouse Score"],
  },
  {
    title: "High-Conversion Landing Pages",
    desc: "Single-page marketing engines tailored for paid ad campaigns, product launches, and fast customer acquisition.",
    details: ["A/B Testing Ready", "Fast Interactive Load", "Conversion Focused UI"],
  },
  {
    title: "Creative Showcase Portfolios",
    desc: "Premium interactive showcases for agencies, photographers, executives, and creative professionals.",
    details: ["Smooth Micro-Animations", "High-Res Image Optimization", "Mobile First Design"],
  },
  {
    title: "Custom E-Commerce Platforms",
    desc: "High-performance custom storefronts integrated with Stripe, Shopify Headless, and custom inventory workflows.",
    details: ["Secure Checkout Flow", "Headless Commerce Architecture", "Sub-second Page Load"],
  },
  {
    title: "Web Applications & SaaS",
    desc: "Complex web applications, SaaS dashboards, and workflow tools built with modern frameworks and robust backend APIs.",
    details: ["Role-Based Authentication", "Real-Time Cloud Backends", "Scalable SQL/NoSQL Databases"],
  },
  {
    title: "UI/UX & Product Design",
    desc: "User-centric design systems, wireframes, interactive prototypes, and modern interface visual design.",
    details: ["Comprehensive Design Systems", "Figma Design Tokens", "Accessibility WCAG Compliance"],
  },
];

export default function ServicesClient() {
  return (
    <div className="bg-[#ffffff] text-[#1d1d1f] pt-28 pb-24 px-6 md:px-12 w-full min-h-screen">
      <div className="max-w-[980px] mx-auto">
        {/* Page Header */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-[12px] font-semibold tracking-[0.1em] text-[#7a7a7a] uppercase mb-3 block">
            Capabilities
          </span>
          <h1 className="text-[34px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.07] tracking-[-0.02em] text-[#1d1d1f] mb-6">
            Development Services.
          </h1>
          <p className="text-[17px] md:text-[21px] text-[#7a7a7a] leading-[1.47] max-w-2xl">
            BeyondWebCo offers a focused suite of digital engineering and design services crafted to help ambitious businesses scale online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#f5f5f7] p-8 rounded-[18px] border border-[#e0e0e0] flex flex-col justify-between"
            >
              <div>
                <span className="text-[12px] font-mono text-[#0066cc] font-semibold block mb-2">
                  0{idx + 1}
                </span>
                <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-3">
                  {service.title}
                </h3>
                <p className="text-[15px] text-[#7a7a7a] leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#e0e0e0] flex flex-wrap gap-2">
                {service.details.map((detail, dIdx) => (
                  <span
                    key={dIdx}
                    className="text-[12px] font-mono text-[#1d1d1f] bg-white px-2.5 py-1 rounded-[5px] border border-[#e0e0e0]"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-[#272729] text-white p-12 rounded-[18px] mb-20">
          <h2 className="text-[28px] md:text-[34px] font-semibold mb-8">
            Why BeyondWebCo Engineering?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[17px] font-semibold text-white mb-2">Custom Code, No Bloat</h3>
              <p className="text-[14px] text-[#cccccc] leading-relaxed">
                Everything is hand-crafted with Next.js and clean CSS for speed, accessibility, and enterprise security.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-semibold text-white mb-2">Conversion Driven UI</h3>
              <p className="text-[14px] text-[#cccccc] leading-relaxed">
                Designed with clear editorial visual hierarchy and intuitive user navigation.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-semibold text-white mb-2">Ongoing Optimization</h3>
              <p className="text-[14px] text-[#cccccc] leading-relaxed">
                {"We don't leave you stranded after launch. Continuous support and Core Web Vitals monitoring included."}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <h2 className="text-[28px] md:text-[34px] font-semibold text-[#1d1d1f] mb-4">
            Need a custom solution for your business?
          </h2>
          <p className="text-[17px] text-[#7a7a7a] max-w-lg mx-auto mb-8">
            {"Tell us about your project requirements and let's craft a proposal tailored to your goals."}
          </p>
          <Button variant="primary" href="/contact">
            Request a Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
