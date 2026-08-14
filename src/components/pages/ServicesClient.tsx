import { Button } from "@/components/ui/Button";

interface DetailedServiceCategory {
  num: string;
  title: string;
  description: string;
  services: string[];
  isExpansion?: boolean;
}

const detailedCategories: DetailedServiceCategory[] = [
  {
    num: "01",
    title: "Web Design & UI/UX",
    description: "Photography-first, editorial visual interfaces built around brand presence, intuitive navigation, and high conversion rates.",
    services: [
      "Website design",
      "UI/UX design",
      "Wireframing",
      "Prototyping",
      "Design systems",
      "Responsive interfaces",
      "Interaction design",
      "Conversion-focused design",
    ],
  },
  {
    num: "02",
    title: "Website Development",
    description: "High-performance websites and digital experiences engineered using Next.js 16 App Router, React 19, and type-safe architecture.",
    services: [
      "Next.js development",
      "React development",
      "Corporate websites",
      "Business websites",
      "Dynamic websites",
      "CMS development",
      "Landing pages",
      "Custom frontend development",
    ],
  },
  {
    num: "03",
    title: "E-commerce",
    description: "Fast, conversion-driven digital storefronts and headless commerce platforms engineered for frictionless user purchasing.",
    services: [
      "E-commerce websites",
      "Product management",
      "Cart and checkout systems",
      "Payment gateway integrations",
      "Order management",
      "Shopify customization",
      "Headless commerce",
      "Custom commerce platforms",
    ],
  },
  {
    num: "04",
    title: "Web Applications & SaaS",
    description: "Scalable SaaS platforms, custom enterprise web applications, and real-time operational software.",
    services: [
      "SaaS platforms",
      "Business dashboards",
      "Admin panels",
      "Client portals",
      "Booking systems",
      "Internal tools",
      "Workflow applications",
      "API integrations",
    ],
  },
  {
    num: "05",
    title: "SEO & Performance",
    description: "Deep technical SEO optimization and Core Web Vitals engineering ensuring sub-second load times and search dominance.",
    services: [
      "Technical SEO",
      "Core Web Vitals",
      "PageSpeed optimization",
      "Schema markup",
      "Metadata",
      "Sitemap configuration",
      "Search Console setup",
      "Image optimization",
      "Performance monitoring",
    ],
  },
  {
    num: "06",
    title: "Cloud & Infrastructure",
    description: "Modern serverless hosting, edge network CDN distribution, and optimized cloud database infrastructure.",
    services: [
      "Vercel deployment",
      "Cloudflare",
      "AWS",
      "Supabase",
      "Database infrastructure",
      "CDN configuration",
      "Hosting architecture",
      "Cloud performance optimization",
      "Cloud cost optimization",
    ],
  },
  {
    num: "07",
    title: "Application Development",
    description: "Tailored business software applications, PWAs, and custom API-driven application backends.",
    services: [
      "Business applications",
      "Web applications",
      "Progressive Web Apps",
      "Custom application interfaces",
      "Backend integrations",
      "API-driven applications",
      "Internal business tools",
    ],
  },
  {
    num: "08",
    title: "Emerging Digital Products",
    description: "Next-generation capabilities and technological expansion areas BeyondWebCo is actively engineering.",
    isExpansion: true,
    services: [
      "SaaS product development",
      "Automation solutions",
      "Cloud engineering",
      "Cloud cost optimization",
      "Augmented Reality experiences",
      "Experimental digital products",
    ],
  },
];

export default function ServicesClient() {
  return (
    <div className="bg-[#ffffff] text-[#1d1d1f] pt-28 pb-24 px-6 md:px-12 w-full min-h-screen">
      <div className="max-w-[1068px] mx-auto">
        {/* Page Header */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-[12px] font-semibold tracking-[0.1em] text-[#7a7a7a] uppercase mb-3 block">
            Complete Capabilities
          </span>
          <h1 className="text-[34px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.07] tracking-[-0.02em] text-[#1d1d1f] mb-6">
            Design, engineering and technology working together.
          </h1>
          <p className="text-[17px] md:text-[21px] text-[#7a7a7a] leading-[1.47] max-w-3xl font-normal">
            From strategy and interface design to engineering, optimization, infrastructure, and deployment, BeyondWebCo builds complete digital experiences.
          </p>
        </div>

        {/* 8 Detailed Service Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {detailedCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-[18px] border flex flex-col justify-between ${
                cat.isExpansion
                  ? "bg-[#272729] text-white border-white/10"
                  : "bg-[#f5f5f7] text-[#1d1d1f] border-[#e0e0e0]"
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span
                    className={`text-[12px] font-mono font-semibold ${
                      cat.isExpansion ? "text-[#2997ff]" : "text-[#0066cc]"
                    }`}
                  >
                    {cat.num}
                  </span>
                  {cat.isExpansion ? (
                    <span className="text-[11px] font-mono text-[#2997ff] bg-white/10 px-2.5 py-0.5 rounded-[4px]">
                      Growth Capability
                    </span>
                  ) : null}
                </div>

                <h2 className="text-[24px] font-semibold mb-3">{cat.title}</h2>
                <p
                  className={`text-[15px] leading-relaxed mb-6 font-normal ${
                    cat.isExpansion ? "text-[#cccccc]" : "text-[#7a7a7a]"
                  }`}
                >
                  {cat.description}
                </p>
              </div>

              <div className="pt-4 border-t border-current/10">
                <span
                  className={`text-[11px] uppercase font-semibold block mb-3 tracking-wider ${
                    cat.isExpansion ? "text-[#cccccc]" : "text-[#7a7a7a]"
                  }`}
                >
                  Services & Deliverables
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.services.map((item, sIdx) => (
                    <span
                      key={sIdx}
                      className={`text-[12px] font-medium px-2.5 py-1 rounded-[6px] border ${
                        cat.isExpansion
                          ? "bg-[#1d1d1f] text-white border-white/10"
                          : "bg-white text-[#1d1d1f] border-[#e0e0e0]"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Banner */}
        <div className="bg-[#272729] text-white p-12 rounded-[18px] mb-20">
          <h2 className="text-[28px] md:text-[34px] font-semibold mb-6">
            The BeyondWebCo Engineering Standard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[14px] text-[#cccccc] leading-relaxed">
            <div>
              <h3 className="text-[17px] font-semibold text-white mb-2">Clean Code & Zero Bloat</h3>
              <p>
                Every project is hand-engineered using clean Next.js architecture, minimal dependencies, and optimized asset pipelines.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-semibold text-white mb-2">Core Web Vitals Focus</h3>
              <p>
                We build for real-world performance, targeting sub-second load speeds and top Lighthouse ratings out of the box.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-semibold text-white mb-2">Scalable Architecture</h3>
              <p>
                Codebases designed with type-safety and modularity so your platform can seamlessly evolve as your business expands.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <h2 className="text-[28px] md:text-[34px] font-semibold text-[#1d1d1f] mb-4">
            Need a custom solution for your business?
          </h2>
          <p className="text-[17px] text-[#7a7a7a] max-w-lg mx-auto mb-8 font-normal">
            Tell us about your project requirements and let's craft a proposal tailored to your goals.
          </p>
          <Button variant="primary" href="/contact">
            Start a Project →
          </Button>
        </div>
      </div>
    </div>
  );
}
