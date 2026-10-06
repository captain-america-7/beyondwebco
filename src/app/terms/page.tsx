import { Metadata } from "next";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing our digital services and engagements.",
};

export default function TermsPage() {
  return (
    <div className="pt-24 min-h-[70vh]">
      <Section>
        <div className="max-w-3xl">
          <span className="text-xs uppercase font-mono tracking-widest text-[var(--muted)]">
            Legal & Governance
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mt-3 mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-invert max-w-none text-[var(--muted)] text-base leading-relaxed space-y-6">
            <p>Last updated: October 2026</p>
            <p>
              These Terms of Service govern your use of the website operated by {siteConfig.name}. By accessing or using our services, you agree to be bound by these terms.
            </p>
            <h2 className="text-xl font-bold text-[var(--text)] mt-8 mb-4">1. Scope of Engagement</h2>
            <p>
              All client engagements are subject to mutually agreed-upon project proposals and statements of work detailing timelines, milestones, intellectual property, and deliverables.
            </p>
            <h2 className="text-xl font-bold text-[var(--text)] mt-8 mb-4">2. Intellectual Property</h2>
            <p>
              Unless otherwise specified in a formal contract, all custom code, design assets, and brand deliverables become the property of the client upon final settlement of invoices.
            </p>
            <h2 className="text-xl font-bold text-[var(--text)] mt-8 mb-4">3. Governing Law</h2>
            <p>
              These terms are construed in accordance with applicable laws governing digital commerce and software services in India, without regard to conflict of law principles.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
