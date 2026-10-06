import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const formattedTitle = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `${formattedTitle} — Article`,
    description: `Article discussing ${formattedTitle}.`,
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const formattedTitle = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="pt-24 min-h-[70vh]">
      <Section>
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[var(--muted)] hover:text-[var(--text)] transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all articles</span>
        </Link>

        <article className="max-w-3xl">
          <span className="text-xs uppercase font-mono tracking-widest text-[var(--muted)]">
            Article
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mt-3 mb-6">
            {formattedTitle}
          </h1>
          <div className="flex items-center gap-4 text-xs font-mono text-[var(--muted)] pb-8 mb-10 border-b border-[var(--border)]">
            <span>Published Oct 2026</span>
            <span>•</span>
            <span>By Engineering Team</span>
            <span>•</span>
            <span>5 Min Read</span>
          </div>

          <div className="prose prose-invert max-w-none text-base sm:text-lg text-[var(--muted)] leading-relaxed space-y-6">
            <p>
              In modern web engineering, the gap between aesthetic ambition and technical execution is where great websites are made. When every interaction is calibrated with intentionality, user engagement and perceived authority naturally multiply.
            </p>
            <p>
              Our studio architecture focuses on three non-negotiables: zero layout shift, micro-interactions powered by native transforms, and semantic structure that search algorithms and assistive technologies prioritize.
            </p>
            <div className="agency-card p-8 my-8 bg-[var(--surface)] text-[var(--text)] italic border-l-2 border-l-white">
              “Speed is not just a feature; it is the fundamental foundation of digital luxury.”
            </div>
            <p>
              As browsers advance and devices diversify, investing in rock-solid foundational principles remains the highest-leverage engineering decision any brand can make.
            </p>
          </div>
        </article>
      </Section>
    </div>
  );
}
