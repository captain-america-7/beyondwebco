import Link from "next/link";

const portfolioProjects = [
  {
    id: "p1",
    tag: "SaaS Platform",
    duration: "12 weeks",
    title: "SaaS Analytics Dashboard",
    client: "FinTech Enterprise",
    desc: "Multi-tenant analytics SaaS with real-time dashboards, role-based access control, and Stripe subscription billing.",
    results: "60% query speedup · Stripe subscription engine",
    tech: ["React", "Node.js", "PostgreSQL", "GraphQL"],
    color: "hsl(var(--orange))",
    bg: "hsl(226, 58%, 14%)",
    mockType: "dashboard",
  },
  {
    id: "p2",
    tag: "Mobile App",
    duration: "10 weeks",
    title: "Last-Mile Delivery App",
    client: "Swift Logistics Ltd",
    desc: "Cross-platform iOS/Android app for a logistics company. Real-time GPS tracking, push notifications, and offline geofence synchronization.",
    results: "99.2% GPS sync uptime · Offline dispatch sync",
    tech: ["React Native", "Firebase", "Node.js", "Maps API"],
    color: "hsl(var(--teal))",
    bg: "hsl(226, 45%, 12%)",
    mockType: "phone",
  },
  {
    id: "p3",
    tag: "Web App",
    duration: "8 weeks",
    title: "Custom E-Commerce Portal",
    client: "Retail Brands Group",
    desc: "Headless e-commerce platform with dynamic product configurator, multi-currency checkout, and a powerful admin CMS.",
    results: "1.9s average load time · Headless CMS integration",
    tech: ["Next.js", "Laravel", "MySQL", "Stripe"],
    color: "hsl(var(--coral))",
    bg: "hsl(226, 50%, 22%)",
    mockType: "ecommerce",
  },
  {
    id: "p4",
    tag: "Web App",
    duration: "16 weeks",
    title: "School ERP & LMS System",
    client: "Apex Education Academy",
    desc: "Full-stack school management system with student portal, fee management, timetable builder, parent app, and report generation.",
    results: "90% administrative time saved · Multi-role portal",
    tech: ["React", "Node.js", "MySQL", "Razorpay"],
    color: "hsl(var(--gold))",
    bg: "hsl(var(--navy))",
    mockType: "lms",
  },
  {
    id: "p5",
    tag: "SaaS Platform",
    duration: "20 weeks",
    title: "Telehealth SaaS Platform",
    client: "CareGrid Health Inc",
    desc: "HIPAA-compliant telemedicine platform with video consultations, appointment scheduling, EHR, and prescription management.",
    results: "HIPAA compliant · WebRTC video streaming",
    tech: ["Next.js", "WebRTC", "Twilio", "AWS"],
    color: "hsl(var(--teal))",
    bg: "hsl(226, 42%, 16%)",
    mockType: "telehealth",
  },
  {
    id: "p6",
    tag: "Web App",
    duration: "14 weeks",
    title: "Real Estate Marketplace",
    client: "Elite Realty Group",
    desc: "Property listing marketplace with advanced geo-search, AI-powered price estimation, virtual tours, and agent dashboard.",
    results: "Mapbox geosearch integration · Agent portal",
    tech: ["Next.js", "Django", "ElasticSearch", "Maps API"],
    color: "hsl(var(--orange))",
    bg: "hsl(226, 55%, 18%)",
    mockType: "marketplace",
  },
];

const industries = [
  "🏦 FinTech & Banking",
  "🏥 Healthcare & Telemedicine",
  "🛒 E-Commerce & Retail",
  "🎓 EdTech & LMS",
  "🚚 Logistics & Supply Chain",
  "☁️ SaaS & B2B Software",
  "🏢 Real Estate & PropTech",
  "🍔 Food & Restaurant Tech",
  "✈️ Travel & Hospitality",
  "⚙️ Manufacturing ERP",
  "📡 Media & Publishing",
  "🎮 Gaming & Entertainment",
];

export default function PortfolioPage() {
  return (
    <main>
      <section className="section-pad" style={{ background: "hsl(var(--cream))", paddingTop: "5rem" }}>
        <div className="container">
          <div style={{ marginBottom: "3rem" }}>
            <span className="eyebrow" style={{ color: "hsl(var(--orange))" }}>
              OUR PORTFOLIO
            </span>
            <h1
              style={{
                marginTop: "0.5rem",
                marginBottom: "1rem",
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                color: "hsl(var(--navy))",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 1.1,
              }}
            >
              Our <span style={{ color: "hsl(var(--orange))" }}>Work</span>
            </h1>
            <p
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
                color: "hsl(var(--navy))",
                fontWeight: 500,
                lineHeight: 1.6,
                maxWidth: "600px",
              }}
            >
              50+ apps and sites launched across SaaS, Mobile, E-Commerce, and Enterprise platforms.
            </p>
          </div>

          {/* Trusted Industries list */}
          <div style={{ marginBottom: "4rem" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "hsl(var(--ink-soft))",
                textAlign: "center",
                marginBottom: "1.25rem",
              }}
            >
              TRUSTED BY RECENT PROJECTS & CLIENTS
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "0.75rem" }}>
              {["Malik Logistics Group", "Dhallo Financial Services", "Woodvilla Furniture", "Innovit USA", "Willowood Dental Clinic", "Lower Bucks Dental", "INFI IT Consulting"].map((client) => (
                <div
                  key={client}
                  style={{
                    padding: "0.625rem 1.25rem",
                    border: "2px solid hsl(var(--navy))",
                    background: "hsl(var(--paper))",
                    borderRadius: "0.5rem",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    boxShadow: "3px 3px 0 0 hsl(var(--navy))",
                    color: "hsl(var(--navy))",
                  }}
                >
                  {client}
                </div>
              ))}
            </div>
          </div>

          {/* Featured Case Study */}
          <div
            className="featured-case-study-grid"
            style={{
              border: "3px solid hsl(var(--navy))",
              background: "hsl(var(--paper))",
              borderRadius: "1.5rem",
              boxShadow: "8px 8px 0 0 hsl(var(--orange))",
              overflow: "hidden",
              marginBottom: "4rem",
              display: "grid",
              gridTemplateColumns: "1fr",
            }}
          >
            {/* Featured Left Graphic */}
            <div
              style={{
                position: "relative",
                background: "hsl(var(--navy))",
                minHeight: "260px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
              {/* CSS-rendered Mock Dispatcher Dashboard */}
              <div
                style={{
                  width: "80%",
                  height: "70%",
                  background: "hsl(var(--paper))",
                  borderRadius: "0.75rem",
                  border: "2.5px solid hsl(var(--navy))",
                  boxShadow: "5px 5px 0 0 hsl(var(--orange))",
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  zIndex: 2,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1.5px solid hsl(var(--navy) / 0.1)", paddingBottom: "0.5rem" }}>
                  <div style={{ display: "flex", gap: "4px" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "hsl(var(--orange))" }} />
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "hsl(var(--teal))" }} />
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "hsl(var(--navy))" }} />
                  </div>
                  <div style={{ width: "50px", height: "6px", background: "hsl(var(--navy) / 0.2)", borderRadius: "3px" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "0.5rem", flex: 1 }}>
                  <div style={{ background: "hsl(var(--cream))", border: "1.5px solid hsl(var(--navy) / 0.1)", borderRadius: "4px", padding: "0.25rem", display: "flex", flexDirection: "column", gap: "3px" }}>
                    <div style={{ height: "4px", width: "80%", background: "hsl(var(--navy))" }} />
                    <div style={{ height: "3px", width: "50%", background: "hsl(var(--orange))" }} />
                    <div style={{ height: "3px", width: "60%", background: "hsl(var(--navy) / 0.3)" }} />
                  </div>
                  <div style={{ background: "hsl(var(--paper))", border: "1.5px solid hsl(var(--navy) / 0.1)", borderRadius: "4px", padding: "0.25rem", display: "flex", flexDirection: "column", gap: "3px" }}>
                    <div style={{ height: "6px", width: "90%", background: "hsl(var(--teal))" }} />
                    <div style={{ height: "4px", width: "40%", background: "hsl(var(--navy) / 0.2)" }} />
                    <div style={{ height: "4px", width: "70%", background: "hsl(var(--navy) / 0.1)" }} />
                  </div>
                </div>
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  left: "1.25rem",
                  background: "hsl(var(--orange))",
                  color: "#fff",
                  padding: "0.375rem 1rem",
                  borderRadius: "9999px",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  border: "2px solid hsl(var(--navy))",
                  boxShadow: "2px 2px 0 0 hsl(var(--navy))",
                  zIndex: 3,
                }}
              >
                ★ FEATURED CASE STUDY
              </div>
            </div>

            {/* Featured Right Content */}
            <div style={{ padding: "clamp(1.5rem, 4vw, 3rem)" }}>
              <span className="eyebrow" style={{ color: "hsl(var(--orange))" }}>
                CASE STUDY
              </span>
              <h2 style={{ marginTop: "0.5rem", marginBottom: "0.25rem", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.2rem)", lineHeight: 1.15 }}>
                Enterprise Logistics Dispatch System
              </h2>
              <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "hsl(var(--ink-soft))", marginBottom: "1.75rem" }}>
                Client: Malik Logistics Group · Timeline: 10 Weeks
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem", marginBottom: "2rem" }} className="cs-details-grid">
                <div>
                  <h4 style={{ fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "hsl(var(--orange))", marginBottom: "0.5rem" }}>
                    The Challenge
                  </h4>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.55 }}>
                    Malik Logistics Group managed a growing fleet of 150+ trucks across multiple container ports. Manual boards and phone-based dispatching led to delays, routing bottlenecks, and costly demurrage fees.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "hsl(var(--teal))", marginBottom: "0.5rem" }}>
                    The Solution
                  </h4>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.55 }}>
                    We engineered a custom real-time logistics dashboard, integrating GPS tracking, geofenced port terminal alerts, driver assignment flows, and automated route calculations to streamline their entire drayage pipeline.
                  </p>
                </div>
              </div>

              <div style={{ borderTop: "2px dashed hsl(var(--navy) / 0.15)", paddingTop: "1.5rem", display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }} className="cs-meta-grid">
                <div>
                  <span style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "hsl(var(--ink-soft))", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
                    Technologies Used
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                    {["React", "Node.js", "AWS IoT Core", "PostgreSQL", "Google Maps"].map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: "9999px",
                          background: "hsl(var(--navy) / 0.06)",
                          border: "1.5px solid hsl(var(--navy) / 0.1)",
                          color: "hsl(var(--ink))",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "hsl(var(--ink-soft))", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.3rem" }}>
                    Results Delivered
                  </span>
                  <span style={{ fontSize: "1rem", fontWeight: 800, color: "hsl(var(--teal))", lineHeight: 1.4, display: "block" }}>
                    25% dispatch time reduced · Demurrage fees reduced to zero · Real-time vehicle telematics
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Delivered Projects Grid Header */}
          <div style={{ marginBottom: "2rem" }}>
            <span className="eyebrow" style={{ color: "hsl(var(--teal))" }}>
              CASE STUDIES
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>Delivered Projects</h2>
          </div>

          {/* Grid of Projects */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "clamp(1rem, 3vw, 1.5rem)" }}>
            {portfolioProjects.map((project) => (
              <div
                key={project.id}
                className="card"
                style={{
                  boxShadow: "5px 5px 0 0 hsl(var(--navy))",
                  padding: 0,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Visual Graphic Header */}
                <div
                  style={{
                    position: "relative",
                    minHeight: "180px",
                    background: project.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    flex: "0 0 auto",
                  }}
                >
                  <div className="absolute inset-0 bg-grid opacity-5" />

                  {/* Draw CSS Graphics based on type */}
                  {project.mockType === "dashboard" && (
                    <div style={{ width: "65%", height: "55%", background: "hsl(var(--paper))", border: "2px solid hsl(var(--navy))", borderRadius: "6px", padding: "0.5rem", display: "flex", flexDirection: "column", gap: "4px" }}>
                      <div style={{ height: "4px", width: "40%", background: "hsl(var(--navy))" }} />
                      <div style={{ display: "flex", gap: "4px", flex: 1, alignItems: "flex-end" }}>
                        <div style={{ height: "30%", width: "20%", background: "hsl(var(--orange))" }} />
                        <div style={{ height: "70%", width: "20%", background: "hsl(var(--teal))" }} />
                        <div style={{ height: "50%", width: "20%", background: "hsl(var(--navy))" }} />
                      </div>
                    </div>
                  )}

                  {project.mockType === "phone" && (
                    <div style={{ width: "45px", height: "85px", background: "hsl(var(--paper))", border: "3.5px solid hsl(var(--navy))", borderRadius: "10px", padding: "4px", display: "flex", flexDirection: "column", gap: "3px" }}>
                      <div style={{ height: "3px", width: "40%", background: "hsl(var(--navy))", marginInline: "auto", borderRadius: "1.5px" }} />
                      <div style={{ height: "30px", width: "100%", background: "hsl(var(--orange) / 0.15)", border: "1px solid hsl(var(--navy))", borderRadius: "3px" }} />
                      <div style={{ height: "4px", width: "70%", background: "hsl(var(--navy))" }} />
                      <div style={{ height: "4px", width: "50%", background: "hsl(var(--teal))" }} />
                    </div>
                  )}

                  {project.mockType === "ecommerce" && (
                    <div style={{ width: "65%", height: "55%", background: "hsl(var(--paper))", border: "2px solid hsl(var(--navy))", borderRadius: "6px", padding: "0.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
                      <div style={{ background: "hsl(var(--navy) / 0.06)", borderRadius: "4px", border: "1.5px solid hsl(var(--navy) / 0.1)" }} />
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <div style={{ height: "5px", width: "90%", background: "hsl(var(--navy))" }} />
                        <div style={{ height: "4px", width: "50%", background: "hsl(var(--coral))" }} />
                        <div style={{ height: "8px", width: "70%", background: "hsl(var(--navy))", marginTop: "auto", borderRadius: "2px" }} />
                      </div>
                    </div>
                  )}

                  {project.mockType === "lms" && (
                    <div style={{ width: "75%", borderRadius: "0.75rem", border: "2px solid color-mix(in srgb, hsl(var(--gold)) 30%, transparent)", background: "hsl(var(--paper) / 0.06)", padding: "0.875rem", display: "flex", flexDirection: "column", gap: "4px" }}>
                      <div style={{ height: "8px", width: "60%", borderRadius: "4px", background: "hsl(var(--gold))", marginBottom: "4px" }} />
                      <div style={{ height: "6px", width: "85%", borderRadius: "4px", background: "hsl(var(--paper) / 0.2)", marginBottom: "4px" }} />
                      <div style={{ height: "6px", width: "70%", borderRadius: "4px", background: "hsl(var(--paper) / 0.15)", marginBottom: "8px" }} />
                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        <div style={{ height: "20px", width: "50px", borderRadius: "10px", background: "hsl(var(--gold))" }} />
                        <div style={{ height: "20px", width: "40px", borderRadius: "10px", background: "hsl(var(--paper) / 0.15)", border: "1px solid color-mix(in srgb, hsl(var(--gold)) 40%, transparent)" }} />
                      </div>
                    </div>
                  )}

                  {project.mockType === "telehealth" && (
                    <div style={{ width: "65%", height: "55%", background: "hsl(var(--paper))", border: "2px solid hsl(var(--navy))", borderRadius: "6px", padding: "0.5rem", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "4px" }}>
                      <div style={{ background: "hsl(var(--teal) / 0.1)", border: "1.5px solid hsl(var(--navy) / 0.1)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: "1rem" }}>👤</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                        <div style={{ height: "12px", width: "100%", background: "hsl(var(--teal))", borderRadius: "2px" }} />
                        <div style={{ height: "12px", width: "100%", background: "hsl(var(--navy) / 0.2)", borderRadius: "2px" }} />
                      </div>
                    </div>
                  )}

                  {project.mockType === "marketplace" && (
                    <div style={{ width: "65%", height: "55%", background: "hsl(var(--paper))", border: "2px solid hsl(var(--navy))", borderRadius: "6px", padding: "0.5rem", display: "flex", flexDirection: "column", gap: "4px" }}>
                      <div style={{ height: "14px", width: "100%", background: "hsl(var(--orange))", borderRadius: "2px", display: "flex", alignItems: "center", paddingLeft: "4px" }}>
                        <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#fff" }} />
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px", flex: 1 }}>
                        <div style={{ background: "hsl(var(--navy) / 0.05)", border: "1px solid hsl(var(--navy) / 0.1)" }} />
                        <div style={{ background: "hsl(var(--navy) / 0.05)", border: "1px solid hsl(var(--navy) / 0.1)" }} />
                      </div>
                    </div>
                  )}

                  <span style={{ position: "absolute", top: "0.75rem", left: "0.75rem", fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "9999px", background: `color-mix(in srgb, ${project.color} 20%, transparent)`, border: `1.5px solid color-mix(in srgb, ${project.color} 50%, transparent)`, color: project.color, backdropFilter: "blur(4px)", whiteSpace: "nowrap", zIndex: 2 }}>
                    {project.tag}
                  </span>
                  <span style={{ position: "absolute", top: "0.75rem", right: "0.75rem", fontSize: "0.7rem", fontWeight: 600, padding: "3px 10px", borderRadius: "9999px", background: "hsl(var(--paper) / 0.1)", border: "1px solid hsl(var(--paper) / 0.15)", color: "hsl(var(--paper) / 0.7)", whiteSpace: "nowrap", zIndex: 2 }}>
                    {project.duration}
                  </span>
                </div>

                {/* Details */}
                <div style={{ padding: "clamp(1rem, 3vw, 1.25rem)", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1rem, 2vw, 1.1rem)", marginBottom: "0.25rem", color: "hsl(var(--navy))" }}>
                    {project.title}
                  </h3>
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "hsl(var(--ink-soft))", marginBottom: "0.625rem", display: "block" }}>
                    Built for <strong style={{ color: "hsl(var(--navy))" }}>{project.client}</strong>
                  </span>
                  <p style={{ fontSize: "0.875rem", color: "hsl(var(--ink-soft))", lineHeight: 1.6, marginBottom: "0.625rem", flex: 1 }}>
                    {project.desc}
                  </p>
                  <p style={{ fontSize: "0.75rem", fontWeight: 700, color: project.color, marginBottom: "0.75rem" }}>
                    {project.results}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                    {project.tech.map((t) => (
                      <span key={t} style={{ fontSize: "0.7rem", fontWeight: 600, padding: "2px 8px", borderRadius: "9999px", background: "hsl(var(--navy) / 0.06)", border: "1.5px solid hsl(var(--navy) / 0.1)", color: "hsl(var(--ink))", whiteSpace: "nowrap" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trusted Sectors banner */}
          <div style={{ marginTop: "4rem", padding: "2rem", background: "hsl(var(--navy))", border: "3px solid hsl(var(--navy))", borderRadius: "1rem", boxShadow: "5px 5px 0 0 hsl(var(--orange))", textAlign: "center" }}>
            <p style={{ margin: 0, fontSize: "clamp(0.95rem, 2vw, 1.15rem)", fontWeight: 800, color: "hsl(var(--paper))", lineHeight: 1.6 }}>
              ✦ Trusted by businesses across{" "}
              <span style={{ color: "hsl(var(--orange))" }}>Logistics</span>,{" "}
              <span style={{ color: "hsl(var(--teal))" }}>Healthcare</span>,{" "}
              <span style={{ color: "hsl(var(--gold))" }}>Finance</span>, Education, Furniture, SaaS, and Enterprise sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="section-pad" style={{ background: "hsl(var(--paper))" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "clamp(1.5rem, 4vw, 2.5rem)" }}>
            <span className="eyebrow">INDUSTRIES WE SERVE</span>
            <h2 style={{ marginTop: "0.5rem" }}>
              Built for every <span className="em-italic">industry</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "0.75rem" }}>
            {industries.map((ind) => (
              <div
                key={ind}
                className="card"
                style={{
                  padding: "0.875rem 1rem",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  textAlign: "center",
                  boxShadow: "3px 3px 0 0 hsl(var(--navy))",
                  lineHeight: 1.3,
                }}
              >
                {ind}
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
          <h2 style={{ color: "hsl(var(--paper))" }}>
            Let&apos;s build your <span className="em-italic">custom product</span>
          </h2>
          <p style={{ marginTop: "1rem", marginBottom: "2rem", marginInline: "auto", color: "hsl(var(--paper) / 0.6)", maxWidth: "450px" }}>
            Book a strategy call to discuss your project requirements, get a custom estimate, and consult directly with our senior team.
          </p>
          <Link href="/contact" className="btn-primary btn-orange" style={{ padding: "1rem 2.5rem" }}>
            Book a Strategy Call →
          </Link>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 1024px) {
          .featured-case-study-grid {
            grid-template-columns: 1.1fr 1.5fr !important;
          }
        }
        @media (min-width: 640px) {
          .cs-details-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .cs-meta-grid {
            grid-template-columns: 1.2fr 1fr !important;
          }
        }
      `}} />
    </main>
  );
}
