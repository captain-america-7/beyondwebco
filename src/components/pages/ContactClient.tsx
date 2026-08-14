"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

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
            Contact
          </span>
          <h1 className="text-[34px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.07] tracking-[-0.02em] text-[#1d1d1f] mb-4">
            Contact BeyondWebCo.
          </h1>
          <p className="text-[17px] md:text-[21px] text-[#7a7a7a] leading-[1.47] max-w-2xl">
            Ready to elevate your online presence? Fill out the form below or reach out directly. We respond within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="md:col-span-7 bg-[#f5f5f7] p-8 md:p-10 rounded-[18px] border border-[#e0e0e0]">
            <h2 className="text-[21px] font-semibold text-[#1d1d1f] mb-6">
              Send Us a Message
            </h2>
            {submitted ? (
              <div className="py-12 text-center text-[#0066cc]">
                <h3 className="text-[24px] font-semibold mb-2 text-[#1d1d1f]">
                  Message Received
                </h3>
                <p className="text-[15px] text-[#7a7a7a]">
                  Thank you for reaching out. A senior engineer will review your inquiry and respond shortly.
                </p>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
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
                    placeholder="Jane Doe"
                  />
                </div>

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
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-[12px] font-semibold tracking-wider text-[#7a7a7a] uppercase mb-2"
                  >
                    PHONE NUMBER (OPTIONAL)
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    className="w-full bg-white border border-[#e0e0e0] rounded-[8px] px-4 py-3 text-[15px] text-[#1d1d1f] outline-none focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[12px] font-semibold tracking-wider text-[#7a7a7a] uppercase mb-2"
                  >
                    PROJECT DETAILS <span className="text-[#0066cc]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    aria-required="true"
                    className="w-full bg-white border border-[#e0e0e0] rounded-[8px] px-4 py-3 text-[15px] text-[#1d1d1f] outline-none focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] transition-colors resize-none"
                    placeholder="Tell us about your company, target audience, timeline, and goals..."
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" className="w-full mt-2">
                  Send Inquiry
                </Button>
              </form>
            )}
          </div>

          {/* Contact Direct Info */}
          <div className="md:col-span-5 flex flex-col justify-between gap-8">
            <div className="bg-[#f5f5f7] p-8 rounded-[18px] border border-[#e0e0e0]">
              <h2 className="text-[21px] font-semibold text-[#1d1d1f] mb-4">
                Direct Contact
              </h2>
              <div className="space-y-4 text-[15px]">
                <div>
                  <p className="text-[12px] uppercase font-semibold text-[#7a7a7a]">Email</p>
                  <a
                    href="mailto:beyondwebco@gmail.com"
                    className="text-[#0066cc] hover:underline"
                  >
                    beyondwebco@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-[12px] uppercase font-semibold text-[#7a7a7a]">Phone / WhatsApp</p>
                  <a
                    href="tel:+918019082307"
                    className="text-[#0066cc] hover:underline"
                  >
                    +91 80190 82307
                  </a>
                </div>
                <div>
                  <p className="text-[12px] uppercase font-semibold text-[#7a7a7a]">Social</p>
                  <a
                    href="https://instagram.com/beyondwebco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0066cc] hover:underline"
                  >
                    Instagram @beyondwebco
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#272729] text-white p-8 rounded-[18px]">
              <h3 className="text-[17px] font-semibold mb-3">What happens next?</h3>
              <ol className="text-[14px] text-[#cccccc] space-y-2 list-decimal list-inside">
                <li>{"We review your project requirements within 24 hours."}</li>
                <li>{"We schedule a 15-minute alignment call or send a proposal."}</li>
                <li>{"Once approved, design & engineering sprints launch immediately."}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
