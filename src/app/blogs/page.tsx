import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Perspectives",
  description: "Thoughts on web engineering, design systems, performance optimization, and brand craft.",
};

const samplePosts = [
  { slug: "future-of-headless-cms", title: "The Future of Headless Architecture & Content Workflows", date: "Oct 2026", readTime: "5 min read" },
  { slug: "micro-interactions-conversion", title: "How Intentional Micro-Interactions Drive 40% Higher Engagement", date: "Sep 2026", readTime: "4 min read" },
  { slug: "building-ultra-fast-nextjs", title: "Engineering Next.js 16 Apps for Zero Layout Shift and Sub-Second Loads", date: "Aug 2026", readTime: "6 min read" },
  { slug: "typography-first-design", title: "Why Typography Is 90% of Your Website’s Perceived Value", date: "Aug 2026", readTime: "3 min read" },
  { slug: "responsive-design-beyond-screens", title: "Designing Responsive Systems Beyond Standard Breakpoints", date: "Jul 2026", readTime: "5 min read" },
  { slug: "framing-agency-pricing", title: "Transparent Pricing in Modern Digital Design Studios", date: "Jun 2026", readTime: "4 min read" },
];

export default function BlogsPage() {
  return (
    <div className="pt-24 min-h-[70vh]">
      <Section>
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-[var(--muted)]">
            Journal & Writing
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mt-3 mb-6">
            Insights & <span className="font-serif italic font-normal text-neutral-300 dark:text-neutral-200">Articles.</span>
          </h1>
          <p className="text-lg text-[var(--muted)] leading-relaxed">
            Deep dives into design engineering, performance strategies, frontend architecture, and digital craftsmanship.
          </p>
        </div>

        <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {samplePosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group py-6 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors hover:bg-[var(--surface)] px-4 rounded-xl"
            >
              <div className="max-w-2xl">
                <span className="text-xs font-mono text-[var(--muted)] mb-2 block">
                  {post.date} • {post.readTime}
                </span>
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[var(--text)] group-hover:text-white transition-colors">
                  {post.title}
                </h2>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[var(--muted)] group-hover:text-[var(--text)] transition-colors">
                <span>Read Article</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
