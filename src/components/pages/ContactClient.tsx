"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const serviceOptions = [
  "Website",
  "Web Application",
  "E-commerce",
  "SaaS",
  "UI/UX Design",
  "SEO / Performance",
  "Cloud / Infrastructure",
  "Application Development",
  "Other",
];

const budgetOptions = [
  "< $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
  "To be discussed",
];

const timelineOptions = [
  "Immediate (< 2 weeks)",
  "2 – 4 weeks",
  "1 – 2 months",
  "Flexible / Planning phase",
];

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Website");
  const [selectedBudget, setSelectedBudget] = useState<string>("$2,500 - $5,000");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("2 – 4 weeks");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#ffffff] text-[#1d1d1f] pt-28 pb-24 px-6 md:px-12 w-full min-h-screen">
      <div className="max-w-[980px] mx-auto">
        {/* Page Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-[12px] font-semibold tracking-[0.1em] text-[#7a7a7a] uppercase mb-3 block">
            Project Inquiry
          </span>
          <h1 className="text-[34px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.07] tracking-[-0.02em] text-[#1d1d1f] mb-4">
            Tell us what you're building.
          </h1>
          <p className="text-[17px] md:text-[21px] text-[#7a7a7a] leading-[1.47] max-w-2xl font-normal">
            Ready to elevate your online presence? Fill out the project form below or contact us directly. We respond within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="md:col-span-7 bg-[#f5f5f7] p-8 md:p-10 rounded-[18px] border border-[#e0e0e0]">
            <h2 className="text-[21px] font-semibold text-[#1d1d1f] mb-6">
              Start the Conversation
            </h2>

            {submitted ? (
              <div className="py-12 text-center text-[#0066cc]">
                <h3 className="text-[24px] font-semibold mb-2 text-[#1d1d1f]">
                  Inquiry Received
                </h3>
                <p className="text-[15px] text-[#7a7a7a]">
                  Thank you for reaching out to BeyondWebCo. A senior engineer will review your project requirements and get in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[12px] font-semibold tracking-wider text-[#7a7a7a] uppercase mb-2"
                  >
                    FULL NAME <span className="text-[#0066cc]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    aria-required="true"
                    className="w-full bg-white border border-[#e0e0e0] rounded-[8px] px-4 py-3 text-[15px] text-[#1d1d1f] outline-none focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label
                    htmlFor="contact-company"
                    className="block text-[12px] font-semibold tracking-wider text-[#7a7a7a] uppercase mb-2"
                  >
                    COMPANY / ORGANIZATION
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    className="w-full bg-white border border-[#e0e0e0] rounded-[8px] px-4 py-3 text-[15px] text-[#1d1d1f] outline-none focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] transition-colors"
                    placeholder="Acme Inc."
                  />
                </div>

                {/* Work Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[12px] font-semibold tracking-wider text-[#7a7a7a] uppercase mb-2"
                  >
                    WORK EMAIL ADDRESS <span className="text-[#0066cc]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    className="w-full bg-white border border-[#e0e0e0] rounded-[8px] px-4 py-3 text-[15px] text-[#1d1d1f] outline-none focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-[12px] font-semibold tracking-wider text-[#7a7a7a] uppercase mb-2"
                  >
                    PHONE / WHATSAPP
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    className="w-full bg-white border border-[#e0e0e0] rounded-[8px] px-4 py-3 text-[15px] text-[#1d1d1f] outline-none focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] transition-colors"
                    placeholder="+91 80190 82307"
                  />
                </div>

                {/* Service Required */}
                <div>
                  <label className="block text-[12px] font-semibold tracking-wider text-[#7a7a7a] uppercase mb-2">
                    SERVICE REQUIRED <span className="text-[#0066cc]">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelectedService(opt)}
                        className={`px-3 py-1.5 rounded-[6px] text-[13px] font-medium transition-all border ${
                          selectedService === opt
                            ? "bg-[#0066cc] text-white border-[#0066cc]"
                            : "bg-white text-[#1d1d1f] border-[#e0e0e0] hover:bg-[#fafafa]"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-[12px] font-semibold tracking-wider text-[#7a7a7a] uppercase mb-2">
                    ESTIMATED BUDGET
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelectedBudget(opt)}
                        className={`px-3 py-1.5 rounded-[6px] text-[13px] font-medium transition-all border ${
                          selectedBudget === opt
                            ? "bg-[#1d1d1f] text-white border-[#1d1d1f]"
                            : "bg-white text-[#1d1d1f] border-[#e0e0e0] hover:bg-[#fafafa]"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-[12px] font-semibold tracking-wider text-[#7a7a7a] uppercase mb-2">
                    EXPECTED TIMELINE
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {timelineOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelectedTimeline(opt)}
                        className={`px-3 py-1.5 rounded-[6px] text-[13px] font-medium transition-all border ${
                          selectedTimeline === opt
                            ? "bg-[#1d1d1f] text-white border-[#1d1d1f]"
                            : "bg-white text-[#1d1d1f] border-[#e0e0e0] hover:bg-[#fafafa]"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[12px] font-semibold tracking-wider text-[#7a7a7a] uppercase mb-2"
                  >
                    PROJECT DESCRIPTION <span className="text-[#0066cc]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    aria-required="true"
                    className="w-full bg-white border border-[#e0e0e0] rounded-[8px] px-4 py-3 text-[15px] text-[#1d1d1f] outline-none focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] transition-colors resize-none"
                    placeholder="Share your goals, scope, reference websites, or technical requirements..."
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" className="w-full mt-2 py-3.5 text-[16px]">
                  Start the Conversation →
                </Button>
              </form>
            )}
          </div>

          {/* Contact Direct Info Sidebar */}
          <div className="md:col-span-5 flex flex-col justify-between gap-8">
            <div className="bg-[#f5f5f7] p-8 rounded-[18px] border border-[#e0e0e0]">
              <h2 className="text-[21px] font-semibold text-[#1d1d1f] mb-6">
                Direct Studio Contact
              </h2>
              <div className="space-y-6 text-[15px]">
                <div>
                  <p className="text-[12px] uppercase font-semibold text-[#7a7a7a] mb-1">Direct Email</p>
                  <a
                    href="mailto:beyondwebco@gmail.com"
                    className="text-[#0066cc] font-medium hover:underline text-[16px]"
                  >
                    beyondwebco@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-[12px] uppercase font-semibold text-[#7a7a7a] mb-1">Phone / WhatsApp</p>
                  <a
                    href="tel:+918019082307"
                    className="text-[#0066cc] font-medium hover:underline text-[16px]"
                  >
                    +91 80190 82307
                  </a>
                </div>
                <div>
                  <p className="text-[12px] uppercase font-semibold text-[#7a7a7a] mb-1">Social Channel</p>
                  <a
                    href="https://instagram.com/beyondwebco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0066cc] font-medium hover:underline text-[16px]"
                  >
                    Instagram @beyondwebco
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#272729] text-white p-8 rounded-[18px]">
              <h3 className="text-[17px] font-semibold mb-4">What happens next?</h3>
              <ol className="text-[14px] text-[#cccccc] space-y-3 list-decimal list-inside leading-relaxed">
                <li>We review your project requirements within 24 hours.</li>
                <li>We schedule a 15-minute alignment call or send a proposal.</li>
                <li>Once approved, design & engineering sprints launch immediately.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
