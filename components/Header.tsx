"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Work", href: "/portfolio" },
  { label: "Team", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close menu and restore scrolling when path changes
    document.body.style.overflow = "";
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="sticky top-0 z-40 transition-all duration-300"
        style={{
          minHeight: "var(--header-h, 72px)",
          background: scrolled ? "hsl(var(--paper))" : "hsl(var(--cream))",
          borderBottom: scrolled
            ? "2px solid hsl(var(--navy) / 0.12)"
            : "2px solid transparent",
          boxShadow: scrolled
            ? "0 2px 20px hsl(var(--navy) / 0.06)"
            : "none",
        }}
      >
        <div
          className="container-wide"
          style={{
            height: "100%",
            minHeight: "var(--header-h, 72px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="BeyondWebCo home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.4rem, 3.5vw, 1.75rem)",
                fontWeight: 900,
                color: "hsl(var(--navy))",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              BeyondWebCo
              <span style={{ color: "hsl(var(--orange))" }}>.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            style={{
              display: "none",
              alignItems: "center",
              gap: "0.25rem",
              flex: 1,
              justifyContent: "center",
            }}
            className="md-nav"
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "inline-block",
                    borderRadius: "9999px",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    transition: "color 0.15s, background 0.15s",
                    color: active ? "hsl(var(--orange))" : "hsl(var(--ink))",
                    background: active
                      ? "hsl(var(--orange) / 0.08)"
                      : "transparent",
                    paddingInline: "1rem",
                    paddingBlock: "0.5rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
            {/* Phone support */}
            <a
              href="tel:+18883219320"
              className="phone-btn"
              title="Call us"
              style={{
                display: "none",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: "9999px",
                border: "2px solid hsl(var(--navy))",
                fontSize: "0.875rem",
                fontWeight: 700,
                transition: "background 0.15s, color 0.15s",
                background: "hsl(var(--paper))",
                color: "hsl(var(--ink))",
                paddingInline: "1.125rem",
                paddingBlock: "0.5rem",
                whiteSpace: "nowrap",
              }}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ flexShrink: 0 }}
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
              <span>+1 (888) 321-9320</span>
              <span
                style={{
                  position: "relative",
                  display: "flex",
                  width: "8px",
                  height: "8px",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: "hsl(var(--teal))",
                    opacity: 0.75,
                    animation: "ping 1.4s cubic-bezier(0, 0, 0.2, 1) infinite",
                  }}
                />
                <span
                  style={{
                    position: "relative",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "hsl(var(--teal))",
                  }}
                />
              </span>
            </a>

            {/* CTA */}
            <Link
              href="/contact"
              className="btn-primary quote-btn"
              style={{
                paddingInline: "1.125rem",
                paddingBlock: "0.625rem",
                fontSize: "0.875rem",
              }}
            >
              Book a Strategy Call
            </Link>

            {/* Hamburger (Mobile Menu Toggle) */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="ham-btn"
              style={{
                display: "grid",
                placeItems: "center",
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                border: "2px solid hsl(var(--navy))",
                background: "hsl(var(--paper))",
                boxShadow: "3px 3px 0 0 hsl(var(--navy))",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    height: "2px",
                    width: menuOpen ? "20px" : "22px",
                    borderRadius: "2px",
                    background: "hsl(var(--ink))",
                    transition: "all 0.25s",
                    transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
                  }}
                />
                <span
                  style={{
                    display: "block",
                    height: "2px",
                    width: "14px",
                    borderRadius: "2px",
                    background: "hsl(var(--orange))",
                    marginLeft: "4px",
                    alignSelf: "flex-start",
                    transition: "opacity 0.25s",
                    opacity: menuOpen ? 0 : 1,
                  }}
                />
                <span
                  style={{
                    display: "block",
                    height: "2px",
                    width: menuOpen ? "20px" : "22px",
                    borderRadius: "2px",
                    background: "hsl(var(--ink))",
                    transition: "all 0.25s",
                    transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
                  }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Media queries style block */}
        <style dangerouslySetInnerHTML={{ __html: `
          @media (min-width: 768px) {
            .md-nav { display: flex !important; }
            .ham-btn { display: none !important; }
          }
          @media (min-width: 1024px) {
            .phone-btn { display: inline-flex !important; }
          }
        `}} />
      </header>

      {/* Mobile Navigation Menu Dialog */}
      <div
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Navigation menu"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          background: "hsl(var(--navy))",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-16px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          overflow: "hidden",
        }}
      >
        {/* Mobile Header */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.25rem 1.5rem",
            borderBottom: "1.5px solid hsl(var(--paper) / 0.12)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "hsl(var(--paper))",
              letterSpacing: "-0.03em",
            }}
          >
            BeyondWebCo
            <span style={{ color: "hsl(var(--orange))" }}>.</span>
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              border: "2px solid hsl(var(--paper))",
              background: "hsl(var(--orange))",
              color: "white",
              display: "grid",
              placeItems: "center",
              boxShadow: "3px 3px 0 0 hsl(var(--paper))",
              cursor: "pointer",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Links */}
        <div
          style={{
            flex: 1,
            width: "100%",
            overflowY: "auto",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <nav
            aria-label="Mobile navigation"
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.875rem 1.25rem",
                    borderRadius: "12px",
                    border: `2px solid ${active ? "hsl(var(--orange))" : "hsl(var(--paper) / 0.15)"}`,
                    background: active
                      ? "hsl(var(--orange) / 0.08)"
                      : "hsl(var(--paper) / 0.03)",
                    color: active ? "hsl(var(--orange))" : "hsl(var(--paper))",
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    transition: "all 0.15s ease",
                    textDecoration: "none",
                  }}
                >
                  <span>{link.label}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </Link>
              );
            })}
          </nav>

          {/* Contact Box */}
          <div
            style={{
              padding: "1.25rem",
              borderRadius: "1rem",
              border: "2px solid hsl(var(--paper) / 0.15)",
              background: "hsl(var(--paper) / 0.02)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <span
                style={{
                  fontSize: 0.75 + "rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "hsl(var(--paper) / 0.5)",
                  letterSpacing: "0.1em",
                }}
              >
                Let&apos;s Talk Shop
              </span>
              <p
                style={{
                  fontSize: 0.85 + "rem",
                  color: "hsl(var(--paper) / 0.8)",
                  fontWeight: 500,
                  lineHeight: 1.4,
                  margin: 0,
                }}
              >
                Direct access to senior partners & developers. No middle managers.
              </p>
            </div>
            <a
              href="tel:+18883219320"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.75rem 1.125rem",
                borderRadius: "9999px",
                border: "2px solid hsl(var(--paper))",
                background: "hsl(var(--paper))",
                color: "hsl(var(--navy))",
                fontSize: "0.875rem",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ flexShrink: 0 }}
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
              <span>+1 (888) 321-9320</span>
              <span
                style={{
                  position: "relative",
                  display: "flex",
                  width: "8px",
                  height: "8px",
                  marginLeft: "auto",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: "hsl(var(--teal))",
                    opacity: 0.75,
                    animation: "ping 1.4s infinite",
                  }}
                />
                <span
                  style={{
                    position: "relative",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "hsl(var(--teal))",
                  }}
                />
              </span>
            </a>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                textAlign: "center",
                paddingBlock: "0.75rem",
                borderRadius: "9999px",
                border: "2px solid hsl(var(--paper))",
                background: "hsl(var(--orange))",
                color: "white",
                fontWeight: 800,
                fontSize: "0.9rem",
                boxShadow: "3px 3px 0 0 hsl(var(--paper))",
                textDecoration: "none",
              }}
            >
              Book a Strategy Call →
            </Link>
          </div>

          <div style={{ textAlign: "center", marginTop: "auto", paddingTop: "1rem" }}>
            <p style={{ fontFamily: "var(--font-hand)", color: "hsl(var(--orange))", fontSize: "1.25rem", margin: 0 }}>
              Premium digital design agency
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
