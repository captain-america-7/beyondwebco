import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import RollingButton from "@/components/ui/RollingButton";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Selected Works",
  description: "Explore our portfolio of bespoke, high-performance web experiences crafted for modern businesses.",
};

const placeholderWorks = [
  { slug: "apex-design", title: "Apex Studio", category: "Web Design & Development", year: "2026" },
  { slug: "lumina-cloud", title: "Lumina Cloud", category: "SaaS Platform & System", year: "2026" },
  { slug: "veloce-mobility", title: "Veloce Mobility", category: "Automotive Platform", year: "2025" },
  { slug: "solstice-watch", title: "Solstice Horology", category: "Luxury eCommerce", year: "2025" },
  { slug: "zenith-labs", title: "Zenith Intelligence", category: "AI Technology Portal", year: "2025" },
  { slug: "kinetics-fit", title: "Kinetics Performance", category: "Digital Flagship", year: "2025" },
];

export default function WorksPage() {
  return (
    <div className="pt-24 min-h-[70vh]">
      <Section>
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-[var(--muted)]">
            Portfolio
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mt-3 mb-6">
            Selected <span className="font-serif italic font-normal text-neutral-300 dark:text-neutral-200">Works.</span>
          </h1>
          <p className="text-lg text-[var(--muted)] leading-relaxed">
            A curated collection of websites, web applications, and digital platforms engineered for performance, precision, and conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {placeholderWorks.map((work) => (
            <Link
              key={work.slug}
              href={`/works/${work.slug}`}
              className="agency-card p-8 flex flex-col justify-between h-[360px] group"
            >
              <div className="flex items-center justify-between text-xs text-[var(--muted)] font-mono">
                <span>{work.category}</span>
                <span>{work.year}</span>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] group-hover:text-white transition-colors">
                  {work.title}
                </h2>
                <p className="text-sm text-[var(--muted)] mt-2">
                  Comprehensive strategy, architecture, and interactive design engineering.
                </p>
              </div>

              <div className="flex items-center text-xs font-semibold text-[var(--text)] gap-1 group-hover:translate-x-1 transition-transform">
                <span>View Case Study</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
