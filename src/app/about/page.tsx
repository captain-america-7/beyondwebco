import { Metadata } from "next";
import Section from "@/components/ui/Section";
import RollingButton from "@/components/ui/RollingButton";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${siteConfig.name} — Crafting high-performance digital experiences for ambitious brands.`,
};

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-[70vh]">
      <Section>
        <div className="max-w-4xl mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-[var(--muted)]">
            About {siteConfig.name}
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mt-3 mb-8">
            Obsessed with <span className="font-serif italic font-normal text-neutral-300 dark:text-neutral-200">Craft</span> & Execution.
          </h1>
          <p className="text-xl sm:text-2xl text-[var(--muted)] font-light leading-relaxed">
            We are an independent digital studio operating at the intersection of rigorous engineering, high aesthetics, and conversion architecture.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 border-y border-[var(--border)]">
          <div>
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Our Philosophy</h2>
            <p className="text-base text-[var(--muted)] leading-relaxed">
              We believe websites should feel effortless to use, arresting to look at, and lightning fast under the hood. No bloat, no generic templates, and no compromises. Every line of code and every interaction is tailored to elevate your brand’s perceived market value.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Technical Rigor</h2>
            <p className="text-base text-[var(--muted)] leading-relaxed">
              Leveraging Next.js 16, modern React 19 paradigms, and Tailwind CSS v4, we build websites that attain near-perfect Core Web Vitals scores and rock-solid SEO indexing from day one.
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 py-16 text-center">
          <div className="agency-card p-6">
            <span className="text-4xl md:text-5xl font-bold text-[var(--text)] block">30+</span>
            <span className="text-xs font-mono text-[var(--muted)] mt-1 block">Projects Delivered</span>
          </div>
          <div className="agency-card p-6">
            <span className="text-4xl md:text-5xl font-bold text-[var(--text)] block">98%</span>
            <span className="text-xs font-mono text-[var(--muted)] mt-1 block">Client Satisfaction</span>
          </div>
          <div className="agency-card p-6">
            <span className="text-4xl md:text-5xl font-bold text-[var(--text)] block">12+</span>
            <span className="text-xs font-mono text-[var(--muted)] mt-1 block">Years Experience</span>
          </div>
        </div>

        <div className="text-center pt-8">
          <RollingButton
            text="Let's Work Together"
            href="/contact"
            variant="primary"
            className="h-[48px] px-8 text-sm font-semibold"
          />
        </div>
      </Section>
    </div>
  );
}
