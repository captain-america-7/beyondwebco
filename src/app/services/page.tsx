import { Metadata } from "next";
import Section from "@/components/ui/Section";
import RollingButton from "@/components/ui/RollingButton";
import { siteConfig } from "@/content/site";
import {
  Monitor,
  RefreshCw,
  ShoppingBag,
  FileCode,
  Layout,
  Palette,
  Sparkles,
  Target,
  Zap,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description: "End-to-end design engineering services: bespoke web design, Next.js engineering, eCommerce, and performance tuning.",
};

const serviceList = [
  { icon: Monitor, title: "Crafted Websites", desc: "Bespoke digital flagships tailored with unmatched typography and interaction design." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Transform outdated sites into conversion engines with modern UX and lightning speed." },
  { icon: ShoppingBag, title: "eCommerce Design", desc: "High-converting online stores built for seamless checkout and memorable brand polish." },
  { icon: FileCode, title: "CMS & Dynamic Sites", desc: "Empower your team with intuitive content workflows on modern headless platforms." },
  { icon: Layout, title: "Landing Pages & Microsites", desc: "Focused campaign pages optimized for maximum click-through rates and leads." },
  { icon: Palette, title: "Consistent Identity", desc: "Design systems, typography pairings, and digital guidelines that reinforce brand authority." },
  { icon: Sparkles, title: "Motion & Interaction", desc: "Delightful, GPU-accelerated micro-animations that make interfaces feel alive." },
  { icon: Target, title: "UX Centric Strategy", desc: "Customer journeys mapped to maximize dwell time, engagement, and conversion." },
  { icon: Zap, title: "Performance Tuning", desc: "Core Web Vitals optimization achieving sub-second loads and zero layout shifts." },
  { icon: ShieldCheck, title: "Ongoing Support", desc: "Proactive maintenance, security patches, and iteration for growing teams." },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-[70vh]">
      <Section>
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-[var(--muted)]">
            Capabilities
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mt-3 mb-6">
            Elevate your <span className="font-serif italic font-normal text-neutral-300 dark:text-neutral-200">Digital</span> Footprint.
          </h1>
          <p className="text-lg text-[var(--muted)] leading-relaxed">
            From initial discovery and brand architecture to production-grade Next.js development and continuous optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((srv) => {
            const Icon = srv.icon;
            return (
              <div key={srv.title} className="agency-card p-8 flex flex-col justify-between h-[280px]">
                <div className="w-12 h-12 rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)] flex items-center justify-center text-[var(--text)]">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[var(--text)] tracking-tight">{srv.title}</h2>
                  <p className="text-sm text-[var(--muted)] mt-2 leading-relaxed">{srv.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <RollingButton
            text="Start a Project"
            href="/contact"
            variant="primary"
            className="h-[48px] px-8 text-sm font-semibold"
          />
        </div>
      </Section>
    </div>
  );
}
