import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Our Products", href: "/products" },
    { label: "Our Work", href: "/portfolio" },
    { label: "Our Team", href: "/team" },
    { label: "Our Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Business Websites", href: "/services#business" },
    { label: "Landing Pages", href: "/services#landing" },
    { label: "SaaS Platforms", href: "/services#saas" },
    { label: "Startup MVPs", href: "/services#mvp" },
    { label: "E-Commerce", href: "/services#ecommerce" },
    { label: "SEO Optimization", href: "/services#seo" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refunds" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const socials = [
  {
    label: "Twitter / X",
    href: "https://twitter.com/beyondwebco",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L2.055 2.25H8.08l4.276 5.65 5.887-5.65ZM17.176 20.01h1.834L6.908 4.114H4.95L17.176 20.01Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/beyondwebco",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/beyondwebco",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/beyondwebco",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "hsl(var(--navy))",
        color: "hsl(var(--paper))",
        borderTop: "3px solid hsl(var(--orange))",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          borderBottom: "2px solid hsl(var(--paper) / 0.08)",
          padding: "clamp(2rem, 5vw, 3rem) 0",
        }}
      >
        <div className="container-wide">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
            }}
            className="footer-grid"
          >
            {/* Branding Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Link
                href="/"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.4rem, 3.5vw, 1.75rem)",
                  fontWeight: 900,
                  color: "hsl(var(--paper))",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  display: "inline-block",
                  marginBottom: "0.75rem",
                }}
              >
                BeyondWebCo
                <span style={{ color: "hsl(var(--orange))" }}>.</span>
              </Link>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "hsl(var(--paper) / 0.55)",
                  maxWidth: "340px",
                  lineHeight: 1.6,
                  marginBottom: "1.25rem",
                }}
              >
                Premium web agency designing and engineering hyper-performance digital products for modern companies.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="hsl(var(--orange))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:hello@beyondwebco.com" className="footer-link" style={{ wordBreak: "break-all" }}>
                    hello@beyondwebco.com
                  </a>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="hsl(var(--orange))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                  </svg>
                  <a href="tel:+18883219320" className="footer-link">
                    +1 (888) 321-9320
                  </a>
                </li>
              </ul>
              {/* Social icons */}
              <div style={{ display: "flex", gap: "0.625rem", marginTop: "1.25rem", flexWrap: "wrap" }}>
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-icon"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "2rem",
                flexGrow: 1,
              }}
              className="footer-links-container"
            >
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h5
                    style={{
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      marginBottom: "1rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "hsl(var(--orange))",
                    }}
                  >
                    {category}
                  </h5>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="footer-link">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Info */}
      <div style={{ padding: "1.5rem 0" }}>
        <div
          className="container-wide"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "center",
            textAlign: "center",
            fontSize: "0.875rem",
            color: "hsl(var(--paper) / 0.4)",
          }}
        >
          <p>© {currentYear} BeyondWebCo. All Rights Reserved.</p>
          <p style={{ fontFamily: "var(--font-hand)", fontSize: "1rem", color: "hsl(var(--orange) / 0.7)" }}>
            Built with ♥ for the web.
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .footer-grid {
            flex-direction: row !important;
            justify-content: space-between !important;
          }
        }
      `}} />
    </footer>
  );
}
