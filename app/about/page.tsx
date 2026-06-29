import Link from "next/link";

const principles = [
  {
    num: "01",
    title: "Performance First",
    desc: "We write clean, lightweight TypeScript and CSS. No bloated frameworks or slow widgets. Every page is optimized for sub-second load times and perfect SEO core web vitals.",
    color: "hsl(var(--orange))",
  },
  {
    num: "02",
    title: "Premium Aesthetics",
    desc: "We believe in bold, state-of-the-art designs. Utilizing clean Neo-Brutalist borders, warm cream backdrops, high-impact typography, and smooth micro-animations to wow users.",
    color: "hsl(var(--teal))",
  },
  {
    num: "03",
    title: "Direct Collaboration",
    desc: "No middle managers. No offshore outsourcing. You consult directly with our senior builders from day one, ensuring clear communication, faster timelines, and precise execution.",
    color: "hsl(var(--coral))",
  },
  {
    num: "04",
    title: "Conversion-Focused",
    desc: "A beautiful site is useless if it doesn't sell. Every section, layout, and call-to-action is strategically engineered to turn casual visitors into high-intent leads and customers.",
    color: "hsl(var(--gold))",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="section-pad" style={{ background: "hsl(var(--cream))", paddingTop: "5rem" }}>
        <div className="container">
          <span className="eyebrow" style={{ color: "hsl(var(--orange))" }}>
            WHO WE ARE
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
            We design & build <span className="em-italic">high-performance</span> digital products.
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
            BeyondWebCo is an elite design and development studio. We build custom web apps, custom SaaS engines, e-commerce stores, and landing pages that represent premium brands.
          </p>
        </div>
      </section>

      {/* Our Story / Philosophy */}
      <section className="section-pad" style={{ background: "hsl(var(--paper))", borderTop: "2px solid hsl(var(--navy))" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }} id="story-grid">
          <div>
            <span className="eyebrow">OUR STORY</span>
            <h2 style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
              Developers and designers <span className="em-italic">in command</span>.
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              BeyondWebCo was founded with a simple realization: the traditional agency model is broken. Clients are often sold products by sales reps, only to have their projects handed off to junior offshore developers managed by non-technical middle managers. This leads to bloated codebases, delayed timelines, and misaligned layouts.
            </p>
            <p>
              We did away with all of that. BeyondWebCo is a partner-led studio. When you work with us, you work directly with senior engineers and senior UI designers. We build state-of-the-art web products using modern technologies like Next.js 15, React, Node.js, and Tailwind CSS.
            </p>
          </div>

          <div
            className="card"
            style={{
              padding: "clamp(1.5rem, 4vw, 2.5rem)",
              background: "hsl(var(--navy))",
              color: "hsl(var(--paper))",
              boxShadow: "6px 6px 0 0 hsl(var(--orange))",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3 style={{ color: "hsl(var(--paper))", fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: "1rem" }}>
              Why choose BeyondWebCo?
            </h3>
            <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.95rem" }}>
                <span style={{ color: "hsl(var(--orange))" }}>✦</span>
                <span>Direct access to senior partners — zero communication gaps.</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.95rem" }}>
                <span style={{ color: "hsl(var(--orange))" }}>✦</span>
                <span>Fast, clean TypeScript codebases optimized for loading times under 2 seconds.</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.95rem" }}>
                <span style={{ color: "hsl(var(--orange))" }}>✦</span>
                <span>SEO-focused structure built-in to maximize search visibility from day one.</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.95rem" }}>
                <span style={{ color: "hsl(var(--orange))" }}>✦</span>
                <span>High-converting Brutalist layouts that stand out and win customer trust.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section-pad" style={{ background: "hsl(var(--cream))", borderTop: "2px solid hsl(var(--navy))" }}>
        <div className="container">
          <div style={{ marginBottom: "3rem", textAlign: "center" }}>
            <span className="eyebrow">OUR CORE PRINCIPLES</span>
            <h2 style={{ marginTop: "0.5rem" }}>
              How we guarantee <span className="em-italic">excellence</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", gap: "1.5rem" }}>
            {principles.map((pr, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: "1.75rem",
                      color: "hsl(var(--navy) / 0.15)",
                    }}
                  >
                    {pr.num}
                  </span>
                  <span style={{ fontSize: "1.5rem" }}>✺</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700 }}>
                  {pr.title}
                </h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "hsl(var(--ink-soft))" }}>
                  {pr.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Redirect CTA */}
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
            Want to meet our <span className="em-italic">engineering crew</span>?
          </h2>
          <p style={{ marginBottom: "2.5rem", marginInline: "auto", color: "hsl(var(--paper) / 0.6)", maxWidth: "450px" }}>
            Check out our profiles, experience, and the core technologies we use to build your custom software.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <Link href="/team" className="btn-primary btn-orange">
              Meet the Crew →
            </Link>
            <Link href="/contact" className="btn-secondary-on-dark">
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 1024px) {
          #story-grid {
            grid-template-columns: 1.4fr 1fr !important;
          }
        }
      `}} />
    </main>
  );
}
