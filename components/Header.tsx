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
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

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
          margin: 0,
          width: "100%",
          borderRadius: 0,
          minHeight: scrolled ? "56px" : "70px",
          display: "flex",
          alignItems: "center",
          background: scrolled ? "rgba(9, 13, 22, 0.85)" : "rgba(9, 13, 22, 0.4)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: scrolled ? "0 8px 32px rgba(0, 0, 0, 0.4)" : "none",
          backdropFilter: "blur(16px) saturate(150%)",
          WebkitBackdropFilter: "blur(16px) saturate(150%)",
          paddingInline: "clamp(1rem, 5vw, 3rem)",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <div
          className="container-wide"
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            width: "100%",
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
                fontSize: "clamp(1.25rem, 3.5vw, 1.55rem)",
                fontWeight: 900,
                color: "#fff",
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
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    transition: "color 0.2s, background 0.2s, border-color 0.2s",
                    color: active ? "#fff" : "rgba(255, 255, 255, 0.7)",
                    background: active
                      ? "rgba(255, 255, 255, 0.08)"
                      : "transparent",
                    border: active
                      ? "1px solid rgba(255, 255, 255, 0.12)"
                      : "1px solid transparent",
                    paddingInline: "0.9rem",
                    paddingBlock: "0.4rem",
                    whiteSpace: "nowrap",
                  }}
                  className="nav-item-link"
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
                border: "1px solid rgba(255, 255, 255, 0.1)",
                fontSize: "0.85rem",
                fontWeight: 600,
                transition: "background 0.15s, color 0.15s, border-color 0.15s",
                background: "rgba(255, 255, 255, 0.03)",
                color: "rgba(255, 255, 255, 0.8)",
                paddingInline: "1rem",
                paddingBlock: "0.45rem",
                whiteSpace: "nowrap",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
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

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
                transition: "all 0.2s",
                flexShrink: 0,
              }}
              className="theme-toggle-btn"
            >
              {theme === "dark" ? (
                /* Sun Icon */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              ) : (
                /* Moon Icon */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>

            {/* CTA */}
            <Link
              href="/contact"
              className="btn-primary quote-btn"
              style={{
                paddingInline: "1.125rem",
                paddingBlock: "0.55rem",
                fontSize: "0.85rem",
                background: "linear-gradient(135deg, hsl(var(--orange) / 0.85), hsl(var(--coral) / 0.7))",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 4px 15px rgba(242, 107, 42, 0.15)",
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
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                background: "rgba(255, 255, 255, 0.04)",
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
                    background: "#fff",
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
                    background: "#fff",
                    transition: "all 0.25s",
                    transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
                  }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Media queries style block */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @media (min-width: 1024px) {
            .md-nav { display: flex !important; }
            .ham-btn { display: none !important; }
          }
          @media (min-width: 1200px) {
            .phone-btn { display: inline-flex !important; }
          }
          .nav-item-link:hover {
            color: #fff !important;
            background: rgba(255,255,255,0.04) !important;
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
          background: "rgba(9, 13, 22, 0.85)",
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
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
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.35rem",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-0.03em",
            }}
          >
            BeyondWebCo
            <span style={{ color: "hsl(var(--orange))" }}>.</span>
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
              }}
              className="theme-toggle-btn"
            >
              {theme === "dark" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                background: "rgba(255, 255, 255, 0.05)",
                color: "#fff",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
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
                    padding: "0.75rem 1.25rem",
                    borderRadius: "12px",
                    border: active
                      ? "1px solid rgba(242, 107, 42, 0.3)"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    background: active
                      ? "rgba(242, 107, 42, 0.08)"
                      : "rgba(255, 255, 255, 0.02)",
                    color: active ? "hsl(var(--orange))" : "rgba(255, 255, 255, 0.9)",
                    fontFamily: "var(--font-display)",
                    fontSize: "1.15rem",
                    fontWeight: 700,
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
              border: "1px solid rgba(255, 255, 255, 0.08)",
              background: "rgba(255, 255, 255, 0.02)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "rgba(255, 255, 255, 0.4)",
                  letterSpacing: "0.1em",
                }}
              >
                Let&apos;s Talk Shop
              </span>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255, 255, 255, 0.7)",
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
                border: "1px solid rgba(255, 255, 255, 0.15)",
                background: "rgba(255, 255, 255, 0.05)",
                color: "#fff",
                fontSize: "0.85rem",
                fontWeight: 600,
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
                paddingBlock: "0.65rem",
                borderRadius: "9999px",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                background: "linear-gradient(135deg, hsl(var(--orange) / 0.85), hsl(var(--coral) / 0.7))",
                color: "white",
                fontWeight: 700,
                fontSize: "0.85rem",
                boxShadow: "0 4px 15px rgba(242, 107, 42, 0.15)",
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
