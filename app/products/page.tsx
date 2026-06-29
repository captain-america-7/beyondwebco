import Link from "next/link";

const products = [
  {
    title: "Food Delivery Engine",
    desc: "A complete white-label food ordering and delivery ecosystem, featuring dynamic menus, real-time driver tracking maps, geofenced port locations, and billing integrations.",
    features: ["Real-time GPS Tracking", "Merchant/Store Panels", "Driver iOS & Android App", "Stripe subscription & payouts"],
    color: "hsl(var(--orange))",
    icon: "🍔",
  },
  {
    title: "Grocery E-Commerce Platform",
    desc: "Offline-first grocery inventory management and checkout store built to handle thousands of SKUs, local delivery windows, slot pricing, and instant checkout flows.",
    features: ["Sub-second Search", "Time Slot Delivery Booking", "Stock Sync Alerts", "Loyalty Points Wallet"],
    color: "hsl(var(--teal))",
    icon: "🛒",
  },
  {
    title: "Multi-tenant Job Portals",
    desc: "A modern job board engine featuring custom resume parsing, automated employer matching algorithms, job alert triggers, and premium membership tiers.",
    features: ["Resume Builder & PDF Parser", "Employer Premium Plans", "Advanced Geo-Distance Filters", "Application Pipeline Status"],
    color: "hsl(var(--coral))",
    icon: "💼",
  },
  {
    title: "Clothing & Retail E-Commerce",
    desc: "Headless storefront built using Next.js 15 and custom GraphQL CMS. Features dynamic size/color product configurator and multi-currency checkouts.",
    features: ["1.2s Average Page Load", "Dynamic Product Builder", "Cart Abandonment Campaigns", "Direct Headless CMS Sync"],
    color: "hsl(var(--gold))",
    icon: "🧥",
  },
  {
    title: "ERP & Learning Management System (LMS)",
    desc: "A fully integrated ERP platform for academies and schools. Features student portal profiles, online course players, exam suites, fee bills, and reports.",
    features: ["Video Course Player", "Auto-graded Quiz Module", "Fee invoice billing", "Teacher Grading Dashboard"],
    color: "hsl(var(--teal))",
    icon: "🎓",
  },
];

export default function ProductsPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="section-pad" style={{ background: "hsl(var(--cream))", paddingTop: "5rem" }}>
        <div className="container">
          <span className="eyebrow" style={{ color: "hsl(var(--orange))" }}>
            OUR PRODUCTS
          </span>
          <h1
            style={{
              marginTop: "0.5rem",
              marginBottom: "1.5rem",
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              color: "hsl(var(--navy))",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
            }}
          >
            Customizable <span className="em-italic">software engines</span>.
          </h1>
          <p
            style={{
              fontSize: "clamp(1.125rem, 2vw, 1.35rem)",
              color: "hsl(var(--navy))",
              fontWeight: 500,
              lineHeight: 1.6,
              maxWidth: "750px",
            }}
          >
            Explore our pre-engineered customizable software platforms. Rather than building from scratch, white-label our battle-tested engines to launch your startup MVP faster.
          </p>
        </div>
      </section>

      {/* Products list */}
      <section className="section-pad" style={{ background: "hsl(var(--paper))", borderTop: "2px solid hsl(var(--navy))" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }} className="products-list-grid">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="card product-brutal-card"
                style={{
                  padding: "clamp(1.5rem, 4vw, 2.5rem)",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "2rem",
                  boxShadow: `7px 7px 0 0 ${product.color}`,
                }}
              >
                {/* Visual Icon */}
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                    fontSize: "3.5rem",
                    width: "5.5rem",
                    height: "5.5rem",
                    border: "3px solid hsl(var(--navy))",
                    borderRadius: "1.25rem",
                    background: `color-mix(in srgb, ${product.color} 15%, transparent)`,
                    boxShadow: "3px 3px 0 0 hsl(var(--navy))",
                  }}
                >
                  {product.icon}
                </div>

                {/* Details */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 900 }}>
                    {product.title}
                  </h2>
                  <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "hsl(var(--ink-soft))" }}>
                    {product.desc}
                  </p>

                  {/* Bullet features */}
                  <div style={{ marginTop: "0.5rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: product.color, letterSpacing: "0.08em", display: "block", marginBottom: "0.75rem" }}>
                      Key Capabilities Included
                    </span>
                    <ul style={{ listStyleType: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.5rem" }}>
                      {product.features.map((feat, fidx) => (
                        <li key={fidx} style={{ fontSize: "0.85rem", fontWeight: 600, color: "hsl(var(--navy))", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <span style={{ color: product.color }}>✔</span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Demo actions */}
                  <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
                    <Link href="/contact" className="btn-primary" style={{ boxShadow: `4px 4px 0 0 ${product.color}` }}>
                      Book Product Demo
                    </Link>
                    <Link href="/contact" className="btn-secondary">
                      Request White-Label Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background: "hsl(var(--navy))",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-5" />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <h2 style={{ color: "hsl(var(--paper))", marginBottom: "1rem" }}>
            Need a custom white-label <span className="em-italic">modification</span>?
          </h2>
          <p style={{ marginBottom: "2.5rem", marginInline: "auto", color: "hsl(var(--paper) / 0.6)", maxWidth: "450px" }}>
            Our senior developers can customize, integrate, and deploy our pre-built software suites to match your custom company processes exactly.
          </p>
          <Link href="/contact" className="btn-primary btn-orange" style={{ padding: "1rem 2.5rem" }}>
            Book a Strategy Call →
          </Link>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .product-brutal-card {
          background: hsl(var(--paper));
          border: 3px solid hsl(var(--navy));
          border-radius: 1.5rem;
          transition: transform 0.2s, box-shadow 0.2s;
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-start !important;
        }
        @media (min-width: 768px) {
          .product-brutal-card {
            flex-direction: row !important;
            align-items: center !important;
          }
        }
      `}} />
    </main>
  );
}
