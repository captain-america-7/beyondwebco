"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { useState } from "react";
import { CheckCircle2, Mail, Phone, Camera } from "lucide-react";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-[160px] px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        className="mb-16 max-w-3xl"
      >
        <h1 className="font-display-xl text-[52px] md:text-[88px] leading-tight mb-4">
          Contact BeyondWebCo.
        </h1>
        <p className="text-on-surface-variant text-body-lg leading-relaxed">
          Ready to elevate your online presence? Fill out the contact form below or reach out to our team directly. We respond to all inquiries within 24 business hours.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 1, 0.3, 1] }}
        >
          <GlassCard className="!p-8">
            <h2 className="font-display-lg text-[28px] mb-6">Send Us a Message</h2>
            {submitted ? (
              <div className="py-12 text-center text-primary">
                <CheckCircle2 className="w-16 h-16 mx-auto mb-4" />
                <h3 className="font-bold text-2xl mb-2 text-on-surface">Message Received!</h3>
                <p className="text-on-surface-variant text-sm">Thank you for reaching out. A senior engineer will review your inquiry and respond shortly.</p>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-label-caps mb-2 text-on-surface-variant tracking-wider">
                    FULL NAME <span className="text-primary">*</span>
                  </label>
                  <input 
                    id="contact-name"
                    name="name"
                    type="text" 
                    required
                    aria-required="true"
                    className="w-full bg-transparent border-b border-outline-variant py-3 outline-none focus:border-primary transition-colors text-on-surface text-base"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-label-caps mb-2 text-on-surface-variant tracking-wider">
                    WORK EMAIL ADDRESS <span className="text-primary">*</span>
                  </label>
                  <input 
                    id="contact-email"
                    name="email"
                    type="email" 
                    required
                    aria-required="true"
                    className="w-full bg-transparent border-b border-outline-variant py-3 outline-none focus:border-primary transition-colors text-on-surface text-base"
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-label-caps mb-2 text-on-surface-variant tracking-wider">
                    PHONE NUMBER (OPTIONAL)
                  </label>
                  <input 
                    id="contact-phone"
                    name="phone"
                    type="tel" 
                    className="w-full bg-transparent border-b border-outline-variant py-3 outline-none focus:border-primary transition-colors text-on-surface text-base"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-label-caps mb-2 text-on-surface-variant tracking-wider">
                    PROJECT GOALS & DETAILS <span className="text-primary">*</span>
                  </label>
                  <textarea 
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    aria-required="true"
                    className="w-full bg-transparent border-b border-outline-variant py-3 outline-none focus:border-primary transition-colors text-on-surface resize-none text-base"
                    placeholder="Tell us about your company, target audience, timeline, and project requirements..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  aria-label="Send Project Message"
                  className="bg-primary text-black font-bold rounded-xl py-4 hover:scale-[0.99] active:scale-[0.97] transition-all w-full mt-4 text-lg shadow-lg shadow-primary/20"
                >
                  Send Project Inquiry
                </button>
              </form>
            )}
          </GlassCard>
        </motion.div>

        {/* Contact Info & Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 1, 0.3, 1] }}
          className="flex flex-col gap-8 justify-between"
        >
          <div className="flex flex-col gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8 border border-white/10">
              <h2 className="font-bold text-2xl mb-4 text-on-surface">Direct Contact Details</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-on-surface-variant">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs uppercase tracking-wider font-bold text-on-surface-variant">Email</p>
                    <a href="mailto:beyondwebco@gmail.com" className="text-on-surface font-medium hover:text-primary transition-colors">
                      beyondwebco@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs uppercase tracking-wider font-bold text-on-surface-variant">Phone / WhatsApp</p>
                    <a href="tel:+917993597172" className="text-on-surface font-medium hover:text-primary transition-colors">
                      +91 7993597172
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-2xl p-8 border border-white/10">
              <h2 className="font-bold text-2xl mb-4 text-on-surface">Connect on Socials</h2>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/beyondwebco" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="BeyondWebCo Instagram Profile"
                  className="px-6 py-3 rounded-xl bg-surface-container-high hover:bg-primary/20 hover:text-primary transition-all font-medium flex items-center gap-2"
                >
                  <Camera className="w-5 h-5" />
                  <span>Instagram: @beyondwebco</span>
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-primary/20 bg-primary/5">
            <h3 className="font-bold text-lg mb-2 text-primary">What happens after you reach out?</h3>
            <ol className="text-sm text-on-surface-variant space-y-2 list-decimal list-inside">
              <li>We analyze your website requirements and goals within 24 hours.</li>
              <li>We schedule a brief 15-minute discovery call or send a comprehensive proposal.</li>
              <li>Once aligned, we initiate design wireframes and development sprints immediately.</li>
            </ol>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
