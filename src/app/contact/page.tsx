import { Metadata } from "next";
import Section from "@/components/ui/Section";
import RollingButton from "@/components/ui/RollingButton";
import { siteConfig } from "@/content/site";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Let's Connect",
  description: `Get in touch with ${siteConfig.name} to discuss your next digital project.`,
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-[70vh]">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-[var(--muted)]">
              Get In Touch
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mt-3 mb-6">
              Let&apos;s build something <span className="font-serif italic font-normal text-neutral-300 dark:text-neutral-200">exceptional.</span>
            </h1>
            <p className="text-lg text-[var(--muted)] leading-relaxed mb-10">
              Have an upcoming website redesign, new brand launch, or custom engineering challenge? Tell us about your vision.
            </p>

            <div className="space-y-6 pt-6 border-t border-[var(--border)] text-sm">
              <div className="flex items-center gap-3 text-[var(--muted)]">
                <Mail className="w-5 h-5 text-[var(--text)]" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[var(--text)] transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-[var(--muted)]">
                <Phone className="w-5 h-5 text-[var(--text)]" />
                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="hover:text-[var(--text)] transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-[var(--muted)]">
                <MapPin className="w-5 h-5 text-[var(--text)]" />
                <span>{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="agency-card p-8 md:p-10 bg-[var(--surface)]">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase font-mono tracking-wider text-[var(--muted)] mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  className="w-full h-12 px-4 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] focus:border-white focus:outline-none transition-colors text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase font-mono tracking-wider text-[var(--muted)] mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className="w-full h-12 px-4 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] focus:border-white focus:outline-none transition-colors text-sm"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-xs uppercase font-mono tracking-wider text-[var(--muted)] mb-2">
                  Estimated Budget
                </label>
                <select
                  id="budget"
                  className="w-full h-12 px-4 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] focus:border-white focus:outline-none transition-colors text-sm"
                >
                  <option value="business">₹20,000 – ₹50,000</option>
                  <option value="ecommerce">₹50,000 – ₹1,00,000</option>
                  <option value="custom">₹1,00,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase font-mono tracking-wider text-[var(--muted)] mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Describe your project, goals, and timeline..."
                  className="w-full p-4 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] focus:border-white focus:outline-none transition-colors text-sm resize-none"
                />
              </div>

              <RollingButton
                type="submit"
                text="Send Inquiry"
                variant="primary"
                className="w-full h-[48px] text-sm font-semibold justify-center"
                icon={<Send className="w-4 h-4 ml-1" />}
              />
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
