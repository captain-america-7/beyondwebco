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
    <main style={{ background: "transparent" }}>
      {/* Breadcrumbs Banner */}
      <section
        style={{
          background: "transparent",
          paddingBlock: "2rem",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
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
              color: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <Link href="/" style={{ color: "#fff" }}>
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" style={{ color: "#fff" }}>
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
                background: `color-mix(in srgb, ${post.color} 10%, rgba(255, 255, 255, 0.02))`,
                color: "rgba(255, 255, 255, 0.9)",
                border: `1px solid color-mix(in srgb, ${post.color} 25%, rgba(255, 255, 255, 0.1))`,
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
                color: "#fff",
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
                borderBottom: "1px dashed rgba(255, 255, 255, 0.12)",
                paddingBottom: "1.5rem",
              }}
            >
              {/* Author Circular Initials */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  background: post.color,
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: "#fff",
                  boxShadow: `0 4px 15px color-mix(in srgb, ${post.color} 25%, transparent)`,
                }}
              >
                {post.icon}
              </div>
              <div>
                <span style={{ display: "block", fontWeight: 700, color: "#fff", fontSize: "0.9rem" }}>
                  {post.author}
                </span>
                <span style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.5)" }}>
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
              color: "rgba(255, 255, 255, 0.8)",
            }}
          />

          {/* Lead-Gen CTA Block */}
          <div
            className="glass"
            style={{
              marginTop: "4rem",
              padding: "clamp(1.5rem, 4vw, 2.5rem)",
              borderRadius: "24px",
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 15px 45px rgba(0, 0, 0, 0.3)",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                color: "#fff",
                fontSize: "1.35rem",
                marginBottom: "0.75rem",
              }}
            >
              Ready to build your local lead generator or custom CRM portal?
            </h3>
            <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.95rem", marginBottom: "1.75rem" }}>
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
          color: #fff;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        .prose-brutal h3 {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
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
