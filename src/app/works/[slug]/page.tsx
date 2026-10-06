import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import RollingButton from "@/components/ui/RollingButton";
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
    title: `${formattedTitle} — Case Study`,
    description: `Case study and design engineering breakdown for ${formattedTitle}.`,
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const formattedTitle = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="pt-24 min-h-[70vh]">
      <Section>
        <Link
          href="/works"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[var(--muted)] hover:text-[var(--text)] transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all works</span>
        </Link>

        <div className="max-w-4xl">
          <span className="text-xs uppercase font-mono tracking-widest text-[var(--muted)]">
            Case Study
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mt-3 mb-6">
            {formattedTitle}
          </h1>
          <p className="text-xl text-[var(--muted)] leading-relaxed mb-12">
            A high-impact web design and engineering engagement focusing on exceptional visual identity, micro-interactions, and conversion rate optimization.
          </p>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-[var(--border)] text-sm mb-16">
          <div>
            <span className="text-xs font-mono text-[var(--muted)] block mb-1">Client</span>
            <span className="font-medium text-[var(--text)]">{formattedTitle} Corp</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[var(--muted)] block mb-1">Services</span>
            <span className="font-medium text-[var(--text)]">Design & Full-Stack</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[var(--muted)] block mb-1">Timeline</span>
            <span className="font-medium text-[var(--text)]">6 Weeks</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[var(--muted)] block mb-1">Year</span>
            <span className="font-medium text-[var(--text)]">2026</span>
          </div>
        </div>

        {/* Mockup Canvas */}
        <div className="agency-card h-[450px] w-full flex items-center justify-center bg-[var(--surface)] text-[var(--muted)] text-sm font-mono border-dashed">
          Interactive Case Study Showcase & Visual Assets
        </div>

        <div className="mt-16 text-center">
          <RollingButton
            text="Start a Project Like This"
            href="/contact"
            variant="primary"
            className="h-[48px] px-8 text-sm font-semibold"
          />
        </div>
      </Section>
    </div>
  );
}
