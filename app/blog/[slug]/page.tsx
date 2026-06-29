import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../page";

// Statically generate paths for the blog slugs at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostParams {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostParams) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main style={{ background: "hsl(var(--paper))" }}>
      {/* Breadcrumbs Banner */}
      <section
        style={{
          background: "hsl(var(--cream))",
          paddingBlock: "2rem",
          borderBottom: "2px solid hsl(var(--navy) / 0.1)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "hsl(var(--ink-soft))",
            }}
          >
            <Link href="/" style={{ color: "hsl(var(--navy))" }}>
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" style={{ color: "hsl(var(--navy))" }}>
              Blog
            </Link>
            <span>/</span>
            <span style={{ color: "hsl(var(--orange))" }}>Details</span>
          </div>
        </div>
      </section>

      {/* Main Blog Post Content */}
      <section className="section-pad">
        <div className="container" style={{ maxWidth: "800px" }}>
          {/* Post Header */}
          <header style={{ marginBottom: "3rem" }}>
            <span
              className="eyebrow"
              style={{
                background: `color-mix(in srgb, ${post.color} 15%, transparent)`,
                color: "hsl(var(--navy))",
                border: `1.5px solid ${post.color}`,
                paddingInline: "0.75rem",
                paddingBlock: "0.25rem",
                borderRadius: "9999px",
                fontSize: "0.7rem",
              }}
            >
              BeyondWebCo Insights
            </span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                lineHeight: 1.15,
                color: "hsl(var(--navy))",
                marginTop: "1rem",
                marginBottom: "1.25rem",
              }}
            >
              {post.title}
            </h1>

            {/* Author Metadata */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                borderBottom: "2px dashed hsl(var(--navy) / 0.12)",
                paddingBottom: "1.5rem",
              }}
            >
              {/* Author Circular Initials */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "2px solid hsl(var(--navy))",
                  background: post.color,
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: "#fff",
                }}
              >
                {post.icon}
              </div>
              <div>
                <span style={{ display: "block", fontWeight: 700, color: "hsl(var(--navy))", fontSize: "0.9rem" }}>
                  {post.author}
                </span>
                <span style={{ fontSize: "0.8rem", color: "hsl(var(--ink-soft))" }}>
                  Published on {post.date} · 5 min read
                </span>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <article
            className="prose-brutal"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "hsl(var(--ink))",
            }}
          />

          {/* Lead-Gen CTA Block */}
          <div
            className="card"
            style={{
              marginTop: "4rem",
              padding: "clamp(1.5rem, 4vw, 2.5rem)",
              background: "hsl(var(--navy))",
              color: "hsl(var(--paper))",
              boxShadow: "7px 7px 0 0 hsl(var(--orange))",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                color: "hsl(var(--paper))",
                fontSize: "1.35rem",
                marginBottom: "0.75rem",
              }}
            >
              Ready to build your local lead generator or custom CRM portal?
            </h3>
            <p style={{ color: "hsl(var(--paper) / 0.7)", fontSize: "0.95rem", marginBottom: "1.75rem" }}>
              Consult with our senior designers & engineers. We build responsive, high-performance web platform architectures.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
              <Link href="/contact" className="btn-primary btn-orange">
                Book a Strategy Call →
              </Link>
              <Link href="/services" className="btn-secondary-on-dark">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Styled headings for markdown contents */}
      <style dangerouslySetInnerHTML={{ __html: `
        .prose-brutal h2 {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 700;
          color: hsl(var(--navy));
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        .prose-brutal h3 {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: hsl(var(--navy));
          margin-top: 1.75rem;
          margin-bottom: 0.5rem;
        }
        .prose-brutal p {
          margin-bottom: 1.25rem;
        }
      `}} />
    </main>
  );
}
