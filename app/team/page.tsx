import Link from "next/link";

const crew = [
  {
    name: "Veera",
    role: "Founder & Product Lead",
    desc: "Leads architecture, delivery, and client strategy across all projects. Over 8 years of engineering experience with dozens of production systems.",
    highlights: [
      "Architected 50+ production systems across web and mobile.",
      "8+ years of experience leading senior engineering teams.",
      "Specialist in Next.js, Node.js, and high-performance Laravel.",
    ],
    skills: ["Architecture", "Next.js", "Laravel", "React Native", "Strategy"],
    initials: "V",
    color: "hsl(var(--orange))",
    isFounder: true,
  },
  {
    name: "Narayana S",
    role: "Senior Full Stack Engineer",
    desc: "6+ Years Experience. Next.js & Node.js Specialist. Led 30+ production deployments of high-performance, multi-tenant SaaS applications.",
    highlights: [],
    skills: ["Next.js", "Node.js", "React", "TypeScript", "PostgreSQL", "AWS"],
    initials: "NS",
    color: "hsl(var(--teal))",
    isFounder: false,
  },
  {
    name: "Bhanu Teja Reddy",
    role: "Mobile & Integration Specialist",
    desc: "React Native & Flutter Expert. Specializes in building secure, cross-platform mobile apps with complex payment and hardware integrations.",
    highlights: [],
    skills: ["React Native", "Flutter", "iOS & Android", "API Integrations", "Firebase"],
    initials: "BT",
    color: "hsl(var(--coral))",
    isFounder: false,
  },
  {
    name: "Keerthi",
    role: "Frontend & UI Engineer",
    desc: "Focused on premium user experiences, advanced web animations, responsive layouts, accessibility compliance, and design system engineering.",
    highlights: [],
    skills: ["React", "Next.js", "TailwindCSS", "Animations", "UI Design", "WCAG"],
    initials: "K",
    color: "hsl(var(--gold))",
    isFounder: false,
  },
  {
    name: "Diva Sri Reddy",
    role: "Sales & Client Success Manager",
    desc: "Bridges client requirements with our core engineering talent, managing timelines, communications, and project scoping for seamless delivery.",
    highlights: [],
    skills: ["Client Strategy", "Project Scoping", "Operations", "Milestones"],
    initials: "DS",
    color: "hsl(var(--teal))",
    isFounder: false,
  },
  {
    name: "Vijay Kumar",
    role: "Sales & Onboarding Consultant",
    desc: "Consults on startup product strategy, helps businesses navigate project scope definition, and guarantees smooth onboarding for new ventures.",
    highlights: [],
    skills: ["Startup Strategy", "Requirement Analysis", "Client Relations", "Strategy"],
    initials: "VK",
    color: "hsl(var(--orange))",
    isFounder: false,
  },
];

export default function TeamPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="section-pad" style={{ background: "hsl(var(--cream))", paddingTop: "5rem" }}>
        <div className="container">
          <span className="eyebrow" style={{ color: "hsl(var(--orange))" }}>
            MEET THE TEAM
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
            The BeyondWebCo Crew
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
            A collaborative team of senior designers, engineers, and product builders creating state-of-the-art software solutions.
          </p>
        </div>
      </section>

      {/* Grid statistics */}
      <section className="section-pad" style={{ background: "hsl(var(--paper))", borderTop: "2px solid hsl(var(--navy))" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", marginBottom: "4rem" }}>
            {[
              { label: "Projects Delivered", value: "50+" },
              { label: "Average Experience", value: "8+ Years" },
              { label: "Technologies Mastered", value: "20+" },
              { label: "Global Clients", value: "Active" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: "1.5rem 1rem",
                  textAlign: "center",
                  background: "hsl(var(--paper))",
                  border: "2px solid hsl(var(--navy))",
                  borderRadius: "1rem",
                  boxShadow: "4px 4px 0 0 hsl(var(--navy))",
                }}
              >
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 900, color: "hsl(var(--orange))", marginBottom: "0.25rem", lineHeight: 1.1 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "hsl(var(--navy) / 0.6)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Team Grid */}
          <div className="team-grid">
            {crew.map((member, idx) => (
              <div
                key={idx}
                className={`card team-card ${member.isFounder ? "founder-card" : ""}`}
                style={{
                  padding: 0,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  background: "hsl(var(--paper))",
                  border: "2px solid hsl(var(--navy))",
                  borderRadius: "1rem",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  boxShadow: `6px 6px 0 0 ${member.color}`,
                }}
              >
                {/* Visual Initials Avatar */}
                <div
                  className="member-image-wrapper"
                  style={{
                    position: "relative",
                    aspectRatio: "1/1",
                    background: "hsl(var(--cream))",
                    borderBottom: "2px solid hsl(var(--navy))",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {member.isFounder && (
                    <span
                      style={{
                        position: "absolute",
                        top: "1rem",
                        left: "1rem",
                        zIndex: 10,
                        fontSize: "0.7rem",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        background: "hsl(var(--orange))",
                        color: "#fff",
                        padding: "4px 10px",
                        border: "2px solid hsl(var(--navy))",
                        boxShadow: "2px 2px 0 0 hsl(var(--navy))",
                        borderRadius: "4px",
                      }}
                    >
                      Founder & Lead
                    </span>
                  )}
                  {/* Brutalist Circle Initials Avatar */}
                  <div
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      border: "3px solid hsl(var(--navy))",
                      background: member.color,
                      display: "grid",
                      placeItems: "center",
                      fontFamily: "var(--font-display)",
                      fontSize: "3rem",
                      fontWeight: 900,
                      color: "#fff",
                      boxShadow: "4px 4px 0 0 hsl(var(--navy))",
                    }}
                  >
                    {member.initials}
                  </div>
                </div>

                {/* Member Details */}
                <div className="member-details" style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.2rem, 2.5vw, 1.4rem)", color: "hsl(var(--navy))", marginBottom: "0.25rem" }}>
                    {member.name}
                  </h3>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: member.color, marginBottom: "0.75rem", display: "inline-block" }}>
                    {member.role}
                  </span>
                  <p style={{ fontSize: "0.875rem", color: "hsl(var(--ink-soft))", lineHeight: 1.6, margin: 0 }}>
                    {member.desc}
                  </p>

                  {/* Highlights (if any) */}
                  {member.highlights.length > 0 && (
                    <ul style={{ listStyleType: "none", padding: 0, margin: "1.25rem 0", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {member.highlights.map((high, hIdx) => (
                        <li key={hIdx} style={{ fontSize: "0.85rem", color: "hsl(var(--navy))", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <span style={{ color: member.color }}>⚡</span>
                          {high}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Skills tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1.25rem" }}>
                    {member.skills.map((skill, sIdx) => (
                      <span key={sIdx} style={{ fontSize: "0.7rem", fontWeight: 700, padding: "2px 8px", border: "1.5px solid hsl(var(--navy))", borderRadius: "6px", background: "hsl(var(--cream-deep))", color: "hsl(var(--navy))" }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Privacy Note */}
          <div style={{ marginTop: "4rem", textAlign: "center", padding: "1.5rem", background: "hsl(var(--paper))", border: "2px dashed hsl(var(--navy) / 0.3)", borderRadius: "1rem", maxWidth: "700px", marginInline: "auto" }}>
            <p style={{ fontSize: "0.875rem", color: "hsl(var(--ink-soft))", lineHeight: 1.5, margin: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
              🔒 <span>For confidentiality and privacy reasons, some team member details have been abstracted. Our team consists of active senior designers & engineers.</span>
            </p>
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
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-0.04" />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <h2 style={{ color: "hsl(var(--paper))" }}>
            Want to work with <span className="em-italic">us</span>?
          </h2>
          <p style={{ marginTop: "1rem", marginBottom: "2rem", marginInline: "auto", color: "hsl(var(--paper) / 0.6)", maxWidth: "440px" }}>
            Get senior-level development and strategy directly. No middle management, no hassle.
          </p>
          <Link href="/contact" className="btn-primary btn-orange">
            Work With Our Team →
          </Link>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .team-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1.5rem, 4vw, 2.5rem);
        }
        @media (min-width: 640px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .founder-card {
            grid-column: span 2;
          }
        }
        @media (min-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (min-width: 768px) {
          .founder-card {
            flex-direction: row !important;
          }
          .founder-card .member-image-wrapper {
            width: 40% !important;
            border-bottom: none !important;
            border-right: 2px solid hsl(var(--navy)) !important;
            aspect-ratio: auto !important;
          }
          .founder-card .member-details {
            width: 60% !important;
            justify-content: center;
            padding: 2.5rem !important;
          }
        }
        .team-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .team-card:hover {
          transform: translateY(-8px);
        }
      `}} />
    </main>
  );
}
