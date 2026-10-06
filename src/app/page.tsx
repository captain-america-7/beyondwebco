import { Metadata } from "next";
import Section from "@/components/ui/Section";
import RollingButton from "@/components/ui/RollingButton";
import { siteConfig } from "@/content/site";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
};

export default function Home() {
  return (
    <div className="relative overflow-hidden pt-28 pb-16 min-h-[85vh] flex flex-col justify-center">
      {/* Hero Edge Glows */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-[var(--color-accent-blue)]/25 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-tl from-[var(--color-accent-blue)]/25 to-transparent blur-[120px] pointer-events-none" />

      <Section className="py-12 md:py-20 text-center">
        {/* Badge Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] text-xs font-mono tracking-widest uppercase text-[var(--muted)] mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          Design In Details
        </div>

        {/* H1 Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-[var(--text)] leading-[1.05] max-w-5xl mx-auto">
          Crafted <span className="font-serif italic font-normal text-neutral-300 dark:text-neutral-200">Websites</span>
          <br />
          <span className="font-serif italic font-normal text-neutral-300 dark:text-neutral-200">Lasting</span> Impressions
        </h1>

        {/* Subtext */}
        <p className="mt-8 text-lg sm:text-xl text-[var(--muted)] max-w-2xl mx-auto font-light">
          {siteConfig.subtext}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <RollingButton
            text="Get in touch"
            href="/contact"
            variant="primary"
            className="h-[48px] px-8 text-sm font-semibold"
            icon={<ArrowUpRight className="w-4 h-4 ml-1" />}
          />
          <RollingButton
            text="See our work"
            href="/works"
            variant="secondary"
            className="h-[48px] px-8 text-sm font-semibold"
          />
        </div>

        {/* Editor Preview Placeholder Card for Step A */}
        <div className="mt-16 max-w-5xl mx-auto agency-card p-6 md:p-10 bg-[var(--surface)]/50 backdrop-blur-md border border-[var(--border-strong)] shadow-[0_0_50px_rgba(10,76,255,0.08)]">
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-4 text-xs font-mono text-[var(--muted)]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2 font-semibold text-[var(--text)]">{siteConfig.name} Studio Environment</span>
            </div>
            <span>Tokens & Layout Loaded</span>
          </div>
          <div className="py-16 text-center text-sm font-mono text-[var(--muted)]">
            Step (a) Complete: Tokens + Layout + Floating Navbar + Footer + RollingButtons active.
          </div>
        </div>
      </Section>
    </div>
  );
}
