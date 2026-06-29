import Link from "next/link";

const servicesList = [
  {
    id: "business",
    title: "Business Websites",
    icon: "🏢",
    desc: "Premium, highly professional websites that establish your brand credibility, communicate values, and capture high-intent inbound leads.",
    tech: ["Next.js", "React", "Corporate UI", "Lead Capture"],
    color: "hsl(var(--orange))",
  },
  {
    id: "landing",
    title: "Landing Pages",
    icon: "🎯",
    desc: "High-converting single-page landing engines designed for pay-per-click (PPC) campaigns, product launches, or digital marketing funnels.",
    tech: ["PPC Optimization", "A/B Testing", "Fast Load Times", "Analytics"],
    color: "hsl(var(--teal))",
  },
  {
    id: "saas",
    title: "SaaS Platforms",
    icon: "☁️",
    desc: "Fully featured multi-tenant software-as-a-service platforms integrated with Stripe subscriptions, dashboard analytics, and REST/GraphQL APIs.",
    tech: ["Multi-Tenant", "Stripe billing", "Node.js", "GraphQL"],
    color: "hsl(var(--coral))",
  },
  {
    id: "mvp",
    title: "Startup MVPs",
    icon: "🚀",
    desc: "Rapidly build and launch a fully functional Minimum Viable Product (MVP) in 6-8 weeks to validate your product market fit and raise capital.",
    tech: ["Rapid Prototyping", "MVP Scope", "Firebase", "PostgreSQL"],
    color: "hsl(var(--gold))",
  },
  {
    id: "portfolio",
    title: "Portfolio Websites",
    icon: "🎨",
    desc: "Stunning portfolio presentations for architecture firms, luxury designers, consultants, and agencies looking to showcase their case studies.",
    tech: ["Framer Motion", "Animations", "Tailwind CSS", "Visual Showcase"],
    color: "hsl(var(--teal))",
  },
  {
    id: "web",
    title: "Custom Web Applications",
    icon: "💻",
    desc: "Custom database-driven software built to streamline complex internal processes, automate reporting pipelines, or handle complex business logic.",
    tech: ["Laravel", "Next.js", "Database Design", "Custom CMS"],
    color: "hsl(var(--orange))",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Websites",
    icon: "🛍️",
    desc: "High-performance headless e-commerce store developments with custom product builders, shopping carts, and secure multi-currency checkouts.",
    tech: ["Shopify Headless", "Stripe checkout", "TailwindCSS", "Custom CMS"],
    color: "hsl(var(--gold))",
  },
  {
    id: "redesign",
    title: "Website Redesign",
    icon: "🔄",
    desc: "Modernize your legacy web application, improve core vitals speed score, convert to responsive mobile views, and upgrade to modern UI elements.",
    tech: ["Next.js migration", "UX Audit", "Refactoring", "CSS Modernization"],
    color: "hsl(var(--coral))",
  },
  {
    id: "maintenance",
    title: "Website Maintenance",
    icon: "🛠️",
    desc: "Ongoing technical support, regular dependency security patches, database optimizations, uptime health checks, and minor content updates.",
    tech: ["Uptime Monitoring", "Patching", "Database tuneups", "DevOps support"],
    color: "hsl(var(--orange))",
  },
  {
    id: "seo",
    title: "SEO Optimization",
    icon: "📈",
    desc: "Technical search engine optimization. We optimize markup structure, increase load speeds, setup structured schema meta tags, and configure sitemaps.",
    tech: ["Google Analytics", "Schema markup", "Sitemap config", "Speed optimization"],
    color: "hsl(var(--teal))",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="section-pad" style={{ background: "transparent", paddingTop: "5rem" }}>
        <div className="container">
          <span className="eyebrow" style={{ color: "hsl(var(--orange))" }}>
            OUR SERVICES
          </span>
          <h1
            style={{
              marginTop: "0.5rem",
              marginBottom: "1.5rem",
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              color: "#fff",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
            }}
          >
            Digital agency services <span className="em-italic">built for scale</span>.
          </h1>
          <p
            style={{
              fontSize: "clamp(1.125rem, 2vw, 1.35rem)",
              color: "rgba(255, 255, 255, 0.7)",
              fontWeight: 500,
              lineHeight: 1.6,
              maxWidth: "750px",
            }}
          >
            Explore our 10 primary digital services. We focus on premium design aesthetics, modern tech stacks, fast loading speeds, and business outcomes.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section-pad" style={{ background: "transparent", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "1.5rem" }}>
            {servicesList.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "clamp(1.5rem, 3vw, 2.25rem)",
                  minHeight: "360px",
                  scrollMarginTop: "100px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {/* Icon Wrapper */}
                  <div
                    style={{
                      display: "grid",
                      placeItems: "center",
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "1rem",
                      border: `1px solid ${service.color}33`,
                      background: `color-mix(in srgb, ${service.color} 12%, transparent)`,
                      boxShadow: `0 4px 15px color-mix(in srgb, ${service.color} 10%, transparent)`,
                      fontSize: "1.75rem",
                    }}
                  >
                    {service.icon}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 700, color: "#fff" }}>
                      {service.title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "rgba(255, 255, 255, 0.65)" }}>
                      {service.desc}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                    {service.tech.map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          display: "inline-block",
                          background: `color-mix(in srgb, ${service.color} 10%, rgba(255, 255, 255, 0.02))`,
                          color: "rgba(255, 255, 255, 0.9)",
                          border: `1px solid color-mix(in srgb, ${service.color} 25%, rgba(255, 255, 255, 0.1))`,
                          paddingInline: "0.625rem",
                          paddingBlock: "0.25rem",
                          fontSize: "0.725rem",
                          fontWeight: 500,
                          borderRadius: "9999px",
                          whiteSpace: "nowrap",
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: "1.75rem", paddingTop: "1rem", borderTop: "1px dashed rgba(255, 255, 255, 0.08)" }}>
                  <Link href="/contact" className="btn-secondary" style={{ width: "100%", textAlign: "center" }}>
                    Request Quote →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background: "transparent",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-5" />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <div
            className="glass"
            style={{
              padding: "4rem 2rem",
              borderRadius: "24px",
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 15px 45px rgba(0, 0, 0, 0.3)",
              maxWidth: "800px",
              marginInline: "auto",
            }}
          >
            <h2 style={{ color: "#fff", marginBottom: "1rem" }}>
              Unsure which service <span className="em-italic">you need</span>?
            </h2>
            <p style={{ marginBottom: "2.5rem", marginInline: "auto", color: "rgba(255, 255, 255, 0.6)", maxWidth: "450px" }}>
              Book a 15-minute free strategy call. We will discuss your goals, outline requirements, and recommend the best technical route.
            </p>
            <Link href="/contact" className="btn-primary btn-orange" style={{ padding: "1rem 2.5rem" }}>
              Book a Strategy Call →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
