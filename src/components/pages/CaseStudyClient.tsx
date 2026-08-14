import Link from "next/link";
import { Button, TextLink } from "@/components/ui/Button";

export interface CaseStudyData {
  slug: string;
  title: string;
  category: string;
  industry: string;
  domain: string;
  liveUrl: string;
  overview: string;
  challenge: string;
  strategy: string;
  design: string;
  development: string;
  technology: string[];
  performance: string[];
  results: string[];
  nextProjectSlug?: string;
  nextProjectTitle?: string;
}

export const caseStudiesData: Record<string, CaseStudyData> = {
  volta: {
    slug: "volta",
    title: "Volta EV Platform",
    category: "Digital Platforms",
    industry: "Electric Mobility & Technology",
    domain: "volta.beyondwebco.com",
    liveUrl: "https://volta.beyondwebco.com/",
    overview: "A high-performance digital platform created for next-generation electric mobility.",
    challenge: "Volta required an ultra-fast, visually immersive web application showcasing EV technology, vehicle telemetry features, and instant charging location interactive previews without compromising load speed.",
    strategy: "BeyondWebCo engineered a Next.js App Router architecture leveraging Server Components and Edge CDN distribution to ensure zero-bundle bloat and instant interactivity.",
    design: "Minimalist dark editorial aesthetic with precision grid alignments, interactive 3D/canvas showcases, and bold typography hierarchy designed for modern EV enthusiasts.",
    development: "Built using React 19, TypeScript, and custom CSS module styling. Core Web Vitals optimization was baked directly into the asset pipeline, achieving a 99/100 Lighthouse score.",
    technology: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Vercel Edge Network"],
    performance: ["99/100 Lighthouse Performance", "Sub-second LCP (Largest Contentful Paint)", "0.0 Cumulative Layout Shift"],
    results: ["100% Increase in interactive session length", "Sub-400ms page transition latency", "Global edge caching with 99.99% uptime"],
    nextProjectSlug: "sri-lakshmi-automobiles",
    nextProjectTitle: "Sri Lakshmi Automobiles",
  },
  "sri-lakshmi-automobiles": {
    slug: "sri-lakshmi-automobiles",
    title: "Sri Lakshmi Automobiles",
    category: "Automotive",
    industry: "Automotive & Agricultural Machinery",
    domain: "sri-lakshmi-automobiles.vercel.app",
    liveUrl: "https://sri-lakshmi-automobiles.vercel.app/",
    overview: "A modern corporate and customer inquiry platform designed for visibility, speed, and conversion.",
    challenge: "Traditional tractor dealership sites were outdated, slow, and non-optimized for mobile searchers seeking sales, servicing, and authentic spare parts.",
    strategy: "We built a clean, accessible business platform with dedicated service inquiry flows, Mahindra tractor specifications, and localized SEO landing pages.",
    design: "Clean, high-contrast visual design prioritizing clarity, quick phone/WhatsApp contact triggers, and structured equipment cards.",
    development: "Developed with Next.js, TypeScript, and responsive Tailwind CSS layout. Implemented Schema.org LocalBusiness metadata for dominant regional search rankings.",
    technology: ["Next.js", "TypeScript", "Tailwind CSS", "Schema.org JSON-LD"],
    performance: ["98/100 Mobile Performance", "Instant WhatsApp lead routing", "Fully responsive across all screen sizes"],
    results: ["3x Increase in monthly online test drive and service inquiries", "Top 3 regional Google search ranking for Mahindra dealership keywords"],
    nextProjectSlug: "pavani-studios",
    nextProjectTitle: "Pavani Studios",
  },
  "pavani-studios": {
    slug: "pavani-studios",
    title: "Pavani Studios",
    category: "Creative",
    industry: "Luxury Photography Studio",
    domain: "pavanistudios.shop",
    liveUrl: "https://pavanistudios.shop",
    overview: "A premium digital experience designed around photography, storytelling, and visual presentation.",
    challenge: "Displaying high-resolution wedding, portrait, and newborn photography portfolios without incurring heavy page load times and layout shifts.",
    strategy: "Implemented an automated WebP image transformation and lazy-loading image pipeline paired with an elegant editorial layout.",
    design: "Spatial photography presentation, subtle micro-animations, and luxurious typography that elevates the brand presence.",
    development: "Custom Next.js frontend with dynamic picture sets and responsive image breakpoints tailored for Retina displays.",
    technology: ["React", "Next.js", "Editorial UI", "WebP Asset Compression"],
    performance: ["Sub-second gallery rendering", "Seamless touch gesture mobile gallery", "Zero layout shift"],
    results: ["Significant increase in high-ticket wedding inquiry conversion", "Flawless visual experience across all mobile devices"],
    nextProjectSlug: "volta",
    nextProjectTitle: "Volta EV Platform",
  },
};

export default function CaseStudyClient({ slug }: { slug: string }) {
  const data = caseStudiesData[slug] || caseStudiesData["volta"];

  return (
    <div className="bg-[#ffffff] text-[#1d1d1f] pt-28 pb-24 px-6 md:px-12 w-full min-h-screen">
      <div className="max-w-[980px] mx-auto">
        {/* Back link */}
        <div className="mb-8">
          <Link href="/work" className="text-[13px] text-[#7a7a7a] hover:text-[#0066cc] font-medium transition-colors">
            ← Back to All Selected Work
          </Link>
        </div>

        {/* Hero */}
        <div className="mb-16 border-b border-[#e0e0e0] pb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[12px] text-[#0066cc] font-semibold uppercase tracking-wide">
              {data.industry}
            </span>
            <span className="text-[12px] font-mono text-[#7a7a7a] bg-[#f5f5f7] px-3 py-1 rounded-[5px] border border-[#e0e0e0]">
              {data.domain}
            </span>
          </div>
          <h1 className="text-[34px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.07] tracking-[-0.02em] text-[#1d1d1f] mb-6">
            {data.title}
          </h1>
          <p className="text-[17px] md:text-[22px] text-[#7a7a7a] leading-[1.47] max-w-3xl mb-8">
            {data.overview}
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary" href={data.liveUrl} external>
              Visit Live Site ↗
            </Button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Main Copy */}
          <div className="md:col-span-8 space-y-12 text-[16px] text-[#333333] leading-relaxed">
            <div>
              <h2 className="text-[24px] font-semibold text-[#1d1d1f] mb-4">The Challenge</h2>
              <p className="text-[#7a7a7a]">{data.challenge}</p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold text-[#1d1d1f] mb-4">Architectural Strategy</h2>
              <p className="text-[#7a7a7a]">{data.strategy}</p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold text-[#1d1d1f] mb-4">Design & User Experience</h2>
              <p className="text-[#7a7a7a]">{data.design}</p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold text-[#1d1d1f] mb-4">Development & Engineering</h2>
              <p className="text-[#7a7a7a]">{data.development}</p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold text-[#1d1d1f] mb-4">Key Results & Impact</h2>
              <ul className="list-disc list-inside space-y-2 text-[#7a7a7a]">
                {data.results.map((r, rIdx) => (
                  <li key={rIdx}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-8">
            <div className="bg-[#f5f5f7] p-6 rounded-[18px] border border-[#e0e0e0]">
              <h3 className="text-[14px] uppercase font-semibold text-[#1d1d1f] mb-4 tracking-wider">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.technology.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[12px] font-mono text-[#1d1d1f] bg-white px-2.5 py-1 rounded-[5px] border border-[#e0e0e0]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#f5f5f7] p-6 rounded-[18px] border border-[#e0e0e0]">
              <h3 className="text-[14px] uppercase font-semibold text-[#1d1d1f] mb-4 tracking-wider">
                Performance Metrics
              </h3>
              <ul className="space-y-2 text-[13px] text-[#7a7a7a]">
                {data.performance.map((p, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-12 border-t border-[#e0e0e0] flex flex-col sm:flex-row justify-between items-center gap-6">
          {data.nextProjectSlug ? (
            <Link
              href={`/work/${data.nextProjectSlug}`}
              className="text-[15px] font-medium text-[#1d1d1f] hover:text-[#0066cc] transition-colors"
            >
              Next Case Study: {data.nextProjectTitle} →
            </Link>
          ) : (
            <div />
          )}
          <TextLink href="/work" className="text-[15px]">
            Explore All Work →
          </TextLink>
        </div>
      </div>
    </div>
  );
}
