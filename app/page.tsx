import Link from "next/link";

const stats = [
  { value: "50+", label: "Projects Launched" },
  { value: "100%", label: "Satisfaction" },
  { value: "10+ yrs", label: "Design & Dev" },
  { value: "24/7", label: "Support" },
];

const mainServices = [
  {
    title: "Websites & Custom Apps",
    desc: "Next.js, React, Node.js, and custom web systems engineered for hyper-growth. Performance-first, fully responsive, and SEO-optimized.",
    chips: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    color: "hsl(var(--orange))",
    icon: "🌐",
    href: "/services#web",
  },
  {
    title: "SaaS & Startup MVPs",
    desc: "Multi-tenant SaaS platforms with subscription billing, analytics dashboards, role-based controls, and highly scalable cloud backend integrations.",
    chips: ["SaaS", "Stripe", "Multi-Tenant", "AWS"],
    color: "hsl(var(--teal))",
    icon: "☁️",
    href: "/services#saas",
  },
  {
    title: "Mobile App Development",
    desc: "Premium cross-platform iOS & Android mobile apps engineered with React Native and Flutter, featuring offline sync and push notifications.",
    chips: ["React Native", "Flutter", "iOS", "Android"],
    color: "hsl(var(--coral))",
    icon: "📱",
    href: "/services#mobile",
  },
];

const marqueeProjects = [
  {
    num: "01",
    type: "SaaS · 2026",
    title: "SaaS Analytics Platform",
    desc: "Real-time business intelligence metrics dashboard with Stripe billing and role-based access controls.",
    tech: "React + 2 more",
    url: "https://analytics.beyondwebco.com",
    color: "hsl(var(--orange))",
    bg: "hsl(226, 58%, 14%)",
  },
  {
    num: "02",
    type: "Mobile · 2026",
    title: "Delivery & Logistics App",
    desc: "Cross-platform driver & customer app featuring offline sync and high-accuracy live GPS tracking.",
    tech: "React Native + 2 more",
    url: "https://logistics.beyondwebco.com",
    color: "hsl(var(--teal))",
    bg: "hsl(226, 45%, 12%)",
  },
  {
    num: "03",
    type: "Web · 2026",
    title: "Custom E-Commerce Portal",
    desc: "High-performance headless store featuring dynamic product configurator and multi-currency checkout.",
    tech: "Next.js + 2 more",
    url: "https://shop.beyondwebco.com",
    color: "hsl(var(--gold))",
    bg: "hsl(226, 52%, 16%)",
  },
  {
    num: "04",
    type: "AI SaaS · 2026",
    title: "AI Content Studio",
    desc: "Multi-model creative suite generating search-optimized marketing copy, images, and audio tracks.",
    tech: "Next.js + 2 more",
    url: "https://ai.beyondwebco.com",
    color: "hsl(var(--coral))",
    bg: "hsl(226, 48%, 13%)",
  },
  {
    num: "05",
    type: "Cloud · 2026",
    title: "Telehealth CRM Platform",
    desc: "Secure, HIPAA-compliant patient communication portal with encrypted video call API integration.",
    tech: "React + 2 more",
    url: "https://health.beyondwebco.com",
    color: "hsl(var(--teal))",
    bg: "hsl(226, 40%, 11%)",
  },
  {
    num: "06",
    type: "Web · 2026",
    title: "PropTech Marketplace",
    desc: "Interactive property search platform with live Mapbox search, 3D home tours, and financial filters.",
    tech: "Next.js + 2 more",
    url: "https://homes.beyondwebco.com",
    color: "hsl(var(--orange))",
    bg: "hsl(226, 50%, 15%)",
  },
];

const clients = [
  "Malik Logistics Group",
  "Dhallo Financial Services",
  "Woodvilla Furniture",
  "Innovit USA",
  "Willowood Dental Clinic",
  "Lower Bucks Dental",
  "INFI IT Consulting",
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: "transparent",
          minHeight: "clamp(580px, calc(100vh - var(--header-h, 72px)), 960px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />
        <div
          className="blob-orange"
          style={{
            width: "clamp(400px, 55vw, 800px)",
            height: "clamp(400px, 55vw, 800px)",
            right: "clamp(-200px, -10vw, -100px)",
            top: "clamp(-200px, -10vw, -100px)",
          }}
        />
        <div
          className="blob-orange"
          style={{
            background: "hsl(var(--teal) / 0.14)",
            width: "clamp(300px, 40vw, 600px)",
            height: "clamp(300px, 40vw, 600px)",
            left: "clamp(-150px, -8vw, -80px)",
            bottom: "clamp(-150px, -8vw, -80px)",
          }}
        />

        <div
          className="container-wide"
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            paddingTop: "clamp(3rem, 8vw, 5rem)",
            paddingBottom: "clamp(4rem, 8vw, 6rem)",
          }}
        >
          {/* Badge */}
          <div
            className="animate-blur-in"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.625rem",
              flexWrap: "wrap",
              marginBottom: "clamp(1rem, 3vw, 1.5rem)",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                borderRadius: "9999px",
                border: "1.5px solid rgba(255, 255, 255, 0.1)",
                background: "rgba(255, 255, 255, 0.03)",
                paddingInline: "0.75rem",
                paddingBlock: "0.3rem",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(4px)",
              }}
            >
              <span
                style={{
                  position: "relative",
                  display: "inline-flex",
                  width: "7px",
                  height: "7px",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: "hsl(var(--teal))",
                    animation: "ping 1.4s cubic-bezier(0, 0, 0.2, 1) infinite",
                    opacity: 0.75,
                  }}
                />
                <span
                  style={{
                    position: "relative",
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "hsl(var(--teal))",
                  }}
                />
              </span>
              Available for new projects
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              fontSize: "clamp(2.2rem, 5.5vw, 5rem)",
              color: "#fff",
              maxWidth: "860px",
              marginBottom: "clamp(1.25rem, 3vw, 2rem)",
              wordBreak: "keep-all",
            }}
          >
            We build premium Web. Mobile. SaaS. Scale.
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-up-custom"
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
              lineHeight: 1.7,
              maxWidth: "600px",
              color: "rgba(255, 255, 255, 0.7)",
              marginBottom: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Custom web platforms, mobile apps, and SaaS products designed and engineered by senior builders.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up-custom"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.875rem",
              marginBottom: "clamp(3rem, 6vw, 5rem)",
            }}
          >
            <Link href="/contact" className="btn-primary btn-orange">
              Start a Project →
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              View Our Work
            </Link>
          </div>

          {/* Stats strip */}
          <div
            className="animate-fade-up-custom hero-stats-strip glass"
            style={{
              borderRadius: "1rem",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              background: "rgba(255, 255, 255, 0.02)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
            }}
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="hero-stat-item">
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
                    color: "hsl(var(--orange))",
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "clamp(0.6rem, 1.2vw, 0.7rem)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p
            className="animate-fade-in-custom"
            style={{
              marginTop: "clamp(1.25rem, 2.5vw, 1.75rem)",
              fontFamily: "var(--font-hand)",
              fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
              color: "hsl(var(--orange) / 0.8)",
            }}
          >
            ✺ Senior designers & engineers only — no junior developers, no hand-offs.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div
          className="hero-scroll-indicator animate-fade-in-custom"
          style={{
            position: "absolute",
            bottom: "1.75rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Scroll
          </span>
          <div
            style={{
              width: "20px",
              height: "32px",
              borderRadius: "10px",
              border: "1.5px solid rgba(255, 255, 255, 0.2)",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              paddingTop: "4px",
            }}
          >
            <div
              style={{
                width: "4px",
                height: "8px",
                borderRadius: "2px",
                background: "hsl(var(--orange))",
                animation: "heroScroll 1s ease infinite",
              }}
            />
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes heroScroll {
            0%, 100% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(6px); opacity: 0.6; }
          }
          .hero-stats-strip {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            width: fit-content;
            margin-inline: auto;
          }
          .hero-stat-item {
            padding: clamp(0.875rem, 2vw, 1.25rem) clamp(1.25rem, 3vw, 2.5rem);
            text-align: center;
            min-width: clamp(80px, 15vw, 130px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .hero-stat-item:not(:last-child) {
            border-right: 1px solid rgba(255, 255, 255, 0.08);
          }
          @media (max-width: 640px) {
            .hero-stats-strip {
              grid-template-columns: repeat(2, 1fr);
              width: 100%;
              max-width: 480px;
            }
            .hero-stat-item {
              border-right: none !important;
              border-bottom: none !important;
            }
            .hero-stat-item:nth-child(odd) {
              border-right: 1px solid rgba(255, 255, 255, 0.08) !important;
            }
            .hero-stat-item:navy-child(-n+2) {
              border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
            }
          }
          @media (max-height: 820px) {
            .hero-scroll-indicator { display: none !important; }
          }
          @media (max-width: 1023px) {
            .hero-scroll-indicator { display: none !important; }
          }
        `}} />
      </section>

      {/* What We Build Section */}
      <section className="section-pad" style={{ background: "transparent" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 5vw, 3rem)" }}>
            <span className="eyebrow">WHAT WE DESIGN & BUILD</span>
            <h2 style={{ marginTop: "0.5rem", color: "#fff" }}>
              Integrated software <span className="em-italic">solutions</span>
            </h2>
            <p style={{ marginTop: "0.75rem", marginInline: "auto", maxWidth: "520px", color: "rgba(255, 255, 255, 0.6)" }}>
              End-to-end product design and engineering across web, mobile, and cloud. Elite partners only — no offshore hand-offs.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1.25rem" }}>
            {mainServices.map((service, index) => (
              <Link
                href={service.href}
                key={index}
                className="card service-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "clamp(1.25rem, 3vw, 1.75rem)",
                  minHeight: "340px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div
                    style={{
                      display: "grid",
                      placeItems: "center",
                      width: "3.25rem",
                      height: "3.25rem",
                      borderRadius: "0.875rem",
                      border: `1px solid ${service.color}33`,
                      background: `color-mix(in srgb, ${service.color} 12%, transparent)`,
                      boxShadow: `0 4px 15px color-mix(in srgb, ${service.color} 10%, transparent)`,
                      fontSize: "1.5rem",
                      flexShrink: 0,
                    }}
                  >
                    {service.icon}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                        fontWeight: 700,
                        color: "#fff",
                        lineHeight: 1.2,
                      }}
                    >
                      {service.title}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)", lineHeight: 1.6 }}>
                      {service.desc}
                    </p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                    {service.chips.map((chip, chipIdx) => (
                      <span
                        key={chipIdx}
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
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    marginTop: "1.25rem",
                    paddingTop: "1rem",
                    borderTop: `1px solid rgba(255, 255, 255, 0.06)`,
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    color: service.color,
                  }}
                >
                  Learn more →
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/services" className="btn-secondary">
              All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section
        style={{
          background: "transparent",
          paddingTop: "4rem",
          paddingBottom: "1.5rem",
          overflow: "hidden",
        }}
      >
        <div className="container-wide" style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
            <div>
              <span className="eyebrow" style={{ color: "hsl(var(--orange))" }}>
                RECENT WORK · LOCKED IN
              </span>
              <h2 style={{ marginTop: "0.5rem", color: "#fff" }}>
                Real builds. <span className="em-italic">Real results.</span>
              </h2>
            </div>
            <span style={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.4)", fontWeight: 500, fontFamily: "var(--font-sans)" }}>
              Drag to explore ✺ Click card to visit site
            </span>
          </div>
        </div>

        {/* Scrolling Track */}
        <div className="marquee-wrapper">
          <div
            className="edge-overlay edge-overlay-left"
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: "8%",
              background: "linear-gradient(to right, hsl(var(--cream)) 20%, transparent)",
              zIndex: 10,
              pointerEvents: "none",
            }}
          />
          <div
            className="edge-overlay edge-overlay-right"
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              width: "8%",
              background: "linear-gradient(to left, hsl(var(--cream)) 20%, transparent)",
              zIndex: 10,
              pointerEvents: "none",
            }}
          />

          <div className="marquee-track">
            {/* Loop projects twice to make loop seamless */}
            {[...marqueeProjects, ...marqueeProjects].map((project, index) => {
              return (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`project-card project-card-0${(index % 6) + 1}`}
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.5rem", color: "rgba(255, 255, 255, 0.08)", lineHeight: 1 }}>
                        {project.num}
                      </span>
                      <span
                        style={{
                          borderRadius: "9999px",
                          padding: "0.2rem 0.6rem",
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          border: `1px solid color-mix(in srgb, ${project.color} 30%, rgba(255,255,255,0.15))`,
                          color: project.color,
                          background: `color-mix(in srgb, ${project.color} 10%, rgba(255, 255, 255, 0.02))`,
                        }}
                      >
                        {project.type}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "clamp(1.2rem, 2vw, 1.45rem)",
                        color: "#fff",
                        lineHeight: 1.25,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.65)", lineHeight: 1.5, minHeight: "4.5rem" }}>
                      {project.desc}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "0.75rem",
                      borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "rgba(255, 255, 255, 0.4)",
                    }}
                  >
                    <span style={{ fontSize: "0.7rem", color: "rgba(255, 255, 255, 0.5)" }}>{project.tech}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "2px", color: project.color, fontWeight: "700" }}>
                      Visit Link
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ marginLeft: "1px" }}>
                        <path d="M7 17L17 7" />
                        <path d="M7 7H17V17" />
                      </svg>
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-pad-sm" style={{ background: "transparent", overflow: "hidden" }}>
        <div className="container">
          <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255, 255, 255, 0.4)", textAlign: "center", marginBottom: "1.5rem" }}>
            TRUSTED BY RECENT PROJECTS & CLIENTS
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "0.75rem" }}>
            {clients.map((client, idx) => (
              <div
                key={idx}
                style={{
                  padding: "0.625rem 1.25rem",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  background: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "0.5rem",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                  transition: "all 0.2s ease",
                }}
                className="client-tag-item"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .client-tag-item:hover {
            background: rgba(255, 255, 255, 0.08) !important;
            border-color: rgba(255, 255, 255, 0.18) !important;
            transform: translateY(-2px);
          }
        `}} />
      </section>

      {/* Client Testimonial Social Proof Section */}
      <section className="section-pad" style={{ background: "transparent" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="eyebrow">WHAT CLIENTS SAY</span>
            <h2 style={{ marginTop: "0.5rem", color: "#fff" }}>
              Over 200+ satisfied <span className="em-italic">inquiries</span>
            </h2>
            <p style={{ marginTop: "0.75rem", marginInline: "auto", maxWidth: "520px", color: "rgba(255, 255, 255, 0.6)" }}>
              Highly responsive project scheduling, clear engineering timelines, and beautiful Brutalist UI design.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            <div className="card" style={{ padding: "2rem" }}>
              <div style={{ fontSize: "1.5rem", color: "hsl(var(--orange))", marginBottom: "1rem" }}>★★★★★</div>
              <p style={{ fontStyle: "italic", marginBottom: "1.5rem", fontSize: "0.95rem", color: "rgba(255, 255, 255, 0.85)", lineHeight: "1.6" }}>
                &ldquo;BeyondWebCo restructured our logistics dispatch portal. Their senior engineers delivered the Next.js platform in under 10 weeks, reducing dispatch latency to near zero. A phenomenal agency!&rdquo;
              </p>
              <div>
                <strong style={{ display: "block", color: "#fff", fontSize: "0.9rem" }}>Founder & CEO</strong>
                <span style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.5)" }}>Malik Logistics Group</span>
              </div>
            </div>

            <div className="card" style={{ padding: "2rem" }}>
              <div style={{ fontSize: "1.5rem", color: "hsl(var(--teal))", marginBottom: "1rem" }}>★★★★★</div>
              <p style={{ fontStyle: "italic", marginBottom: "1.5rem", fontSize: "0.95rem", color: "rgba(255, 255, 255, 0.85)", lineHeight: "1.6" }}>
                &ldquo;Their design system matches premium aesthetics perfectly. The e-commerce portal loads in under 2 seconds and handles complex checkout sequences flawlessly. Absolute professionals.&rdquo;
              </p>
              <div>
                <strong style={{ display: "block", color: "#fff", fontSize: "0.9rem" }}>E-Commerce Director</strong>
                <span style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.5)" }}>Woodvilla Luxury Catalog</span>
              </div>
            </div>
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
              Ready to build your <span className="em-italic">custom product</span>?
            </h2>
            <p style={{ marginBottom: "2.5rem", marginInline: "auto", color: "rgba(255, 255, 255, 0.6)", maxWidth: "450px" }}>
              Book a strategy call to discuss your project requirements, get a custom estimate, and consult with our senior builders.
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
