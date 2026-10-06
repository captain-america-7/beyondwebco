import { Metadata } from "next";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data governance practices.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 min-h-[70vh]">
      <Section>
        <div className="max-w-3xl">
          <span className="text-xs uppercase font-mono tracking-widest text-[var(--muted)]">
            Legal & Governance
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mt-3 mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-invert max-w-none text-[var(--muted)] text-base leading-relaxed space-y-6">
            <p>Last updated: October 2026</p>
            <p>
              At {siteConfig.name}, we value and respect your privacy. This Privacy Policy details our practices concerning the collection, use, and disclosure of information when you interact with our website.
            </p>
            <h2 className="text-xl font-bold text-[var(--text)] mt-8 mb-4">1. Information We Collect</h2>
            <p>
              We collect minimal information necessary to deliver and refine our services. This includes voluntarily provided contact inquiries (name, email, project details) and anonymous analytical data to understand site performance.
            </p>
            <h2 className="text-xl font-bold text-[var(--text)] mt-8 mb-4">2. Use of Information</h2>
            <p>
              We use collected information solely to respond to inquiries, facilitate contractual obligations, and enhance the technical performance of our digital products. We do not sell or rent user data.
            </p>
            <h2 className="text-xl font-bold text-[var(--text)] mt-8 mb-4">3. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please reach out directly at {siteConfig.contact.email}.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
