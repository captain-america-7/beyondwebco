"use client";

import { useState } from "react";

const budgetTiers = [
  "Under $5k",
  "$5k - $10k",
  "$10k - $25k",
  "$25k - $50k",
  "$50k+",
];

const servicesList = [
  "Business Website",
  "Landing Page",
  "SaaS Platform",
  "Startup MVP",
  "Portfolio Website",
  "Custom Web App",
  "E-Commerce Website",
  "Website Redesign",
  "Website Maintenance",
  "SEO Optimization",
  "Other / Unsure",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service || !formData.budget) {
      setError("Please fill out all required fields (*).");
      return;
    }

    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
        });
      } else {
        const data = await res.json();
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to submit inquiry. Please check your network connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      {/* Page Header */}
      <section className="section-pad" style={{ background: "hsl(var(--cream))", paddingTop: "5rem" }}>
        <div className="container">
          <span className="eyebrow" style={{ color: "hsl(var(--orange))" }}>
            GET IN TOUCH
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
            Start a project <span style={{ color: "hsl(var(--orange))" }}>estimate</span>
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
            Tell us about your project requirements. We will draft a custom estimate scoping and roadmap within 2 business days.
          </p>
        </div>
      </section>

      {/* Form and info split */}
      <section className="section-pad" style={{ background: "hsl(var(--paper))", borderTop: "2px solid hsl(var(--navy))" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }} id="contact-split">
          {/* Left Column: Form Card */}
          <div
            className="card"
            style={{
              padding: "clamp(1.25rem, 4vw, 2.5rem)",
              boxShadow: "7px 7px 0 0 hsl(var(--navy))",
            }}
          >
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>
              Request a quote
            </h2>

            {success ? (
              <div
                style={{
                  border: "2px solid hsl(var(--teal))",
                  background: "hsl(var(--teal) / 0.08)",
                  borderRadius: "0.75rem",
                  padding: "1.5rem",
                  color: "hsl(var(--navy))",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🎉</div>
                <h3 style={{ color: "hsl(var(--navy))", fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Inquiry Received!
                </h3>
                <p style={{ fontSize: "0.9rem", color: "hsl(var(--ink-soft))", margin: 0 }}>
                  Thank you for reaching out. A senior partner from BeyondWebCo will review your project requirements and follow up with scheduling links or scoped details shortly.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="btn-secondary"
                  style={{ marginTop: "1.5rem", fontSize: "0.85rem" }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {error && (
                  <div
                    style={{
                      border: "2px solid hsl(var(--coral))",
                      background: "hsl(var(--coral) / 0.08)",
                      borderRadius: "0.5rem",
                      padding: "0.875rem",
                      fontSize: "0.875rem",
                      color: "hsl(var(--navy))",
                      fontWeight: 600,
                    }}
                  >
                    ⚠️ {error}
                  </div>
                )}

                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }} className="form-row-2">
                  <div>
                    <label htmlFor="name" style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", color: "hsl(var(--navy))", marginBottom: "0.4rem" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Surendra Narayana"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", color: "hsl(var(--navy))", marginBottom: "0.4rem" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. contact@beyondwebco.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }} className="form-row-2">
                  <div>
                    <label htmlFor="phone" style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", color: "hsl(var(--navy))", marginBottom: "0.4rem" }}>
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +1 (888) 321-9320"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", color: "hsl(var(--navy))", marginBottom: "0.4rem" }}>
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">-- Select Service --</option>
                      {servicesList.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", color: "hsl(var(--navy))", marginBottom: "0.4rem" }}>
                    Project Budget *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">-- Select Budget --</option>
                    {budgetTiers.map((tier) => (
                      <option key={tier} value={tier}>
                        {tier}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", color: "hsl(var(--navy))", marginBottom: "0.4rem" }}>
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your goals, targets, required timeline, and specific technology preferences."
                    className="form-input"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary btn-orange"
                  style={{ marginTop: "0.5rem", paddingBlock: "1rem", width: "100%" }}
                >
                  {submitting ? "Sending inquiry..." : "Send Project Inquiry →"}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Process & Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* What happens next box */}
            <div
              className="card"
              style={{
                padding: "2rem",
                background: "hsl(var(--navy))",
                color: "hsl(var(--paper))",
                boxShadow: "5px 5px 0 0 hsl(var(--orange))",
              }}
            >
              <h3 style={{ color: "hsl(var(--paper))", fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: "1.25rem" }}>
                What happens next?
              </h3>
              <ol style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <li style={{ display: "flex", gap: "0.875rem" }}>
                  <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "hsl(var(--orange))", color: "#fff", display: "grid", placeItems: "center", fontSize: "0.75rem", fontWeight: 800, flexShrink: 0 }}>
                    1
                  </span>
                  <div>
                    <strong style={{ display: "block", fontSize: "0.9rem", color: "hsl(var(--paper))" }}>Project Discovery & Scoping</strong>
                    <span style={{ display: "block", fontSize: "0.8rem", color: "hsl(var(--paper) / 0.6)", marginTop: "0.2rem" }}>We review your inquiry and schedule a 15-minute alignment call within 24 hours.</span>
                  </div>
                </li>
                <li style={{ display: "flex", gap: "0.875rem" }}>
                  <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "hsl(var(--teal))", color: "#fff", display: "grid", placeItems: "center", fontSize: "0.75rem", fontWeight: 800, flexShrink: 0 }}>
                    2
                  </span>
                  <div>
                    <strong style={{ display: "block", fontSize: "0.9rem", color: "hsl(var(--paper))" }}>Custom Scoping Proposal</strong>
                    <span style={{ display: "block", fontSize: "0.8rem", color: "hsl(var(--paper) / 0.6)", marginTop: "0.2rem" }}>We draft a detailed milestone checklist, tech stack recommendation, and timeline estimate.</span>
                  </div>
                </li>
                <li style={{ display: "flex", gap: "0.875rem" }}>
                  <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "hsl(var(--gold))", color: "#fff", display: "grid", placeItems: "center", fontSize: "0.75rem", fontWeight: 800, flexShrink: 0 }}>
                    3
                  </span>
                  <div>
                    <strong style={{ display: "block", fontSize: "0.9rem", color: "hsl(var(--paper))" }}>Engineering Roadmap Definition</strong>
                    <span style={{ display: "block", fontSize: "0.8rem", color: "hsl(var(--paper) / 0.6)", marginTop: "0.2rem" }}>We outline sprints, wireframe designs, and deploy staging build loops on day one.</span>
                  </div>
                </li>
              </ol>
            </div>

            {/* Direct Contact info box */}
            <div className="card" style={{ padding: "1.5rem" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                Direct Channels
              </h3>
              <p style={{ fontSize: "0.875rem", color: "hsl(var(--ink-soft))", marginBottom: "1rem" }}>
                Need help immediately? Email or call our senior partners directly.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", listStyleType: "none", padding: 0 }}>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem" }}>
                  <span style={{ color: "hsl(var(--orange))" }}>✉</span>
                  <a href="mailto:hello@beyondwebco.com" style={{ color: "hsl(var(--navy))", fontWeight: 700, textDecoration: "underline" }}>
                    hello@beyondwebco.com
                  </a>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem" }}>
                  <span style={{ color: "hsl(var(--orange))" }}>📞</span>
                  <a href="tel:+18883219320" style={{ color: "hsl(var(--navy))", fontWeight: 700, textDecoration: "underline" }}>
                    +1 (888) 321-9320
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 1024px) {
          #contact-split {
            grid-template-columns: 1.5fr 1fr !important;
          }
        }
        @media (min-width: 640px) {
          .form-row-2 {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}} />
    </main>
  );
}
