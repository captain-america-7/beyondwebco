import Link from "next/link";
import Image from "next/image";
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
  image?: string;
  nextProjectSlug?: string;
  nextProjectTitle?: string;
}

export const caseStudiesData: Record<string, CaseStudyData> = {
  "aura-luxe": {
    slug: "aura-luxe",
    title: "Aura Luxe Interior Design",
    category: "Creative",
    industry: "Architecture & Interior Design",
    domain: "aura-luxe-interior-design.vercel.app",
    liveUrl: "https://aura-luxe-interior-design.vercel.app/",
    image: "/auraluxe.avif",
    overview: "An editorial portfolio showcase for an ultra-luxury architectural and interior design studio.",
    challenge: "Aura Luxe needed a digital presence that matched their ultra-high-end residential portfolios, requiring subtle spatial presentation, smooth transitions, and tactile image presentation.",
    strategy: "BeyondWebCo engineered an editorial, photography-first showcase with fluid motion controls, custom image galleries, and dark/light atmospheric framing.",
    design: "Ultra-clean spatial layout utilizing custom typography tracking, high-contrast architectural image grids, and quiet micro-animations.",
    development: "Built with React and custom CSS modules. Embedded high-performance WebP visual asset pipelines ensuring sub-second portfolio gallery loads.",
    technology: ["React 19", "Editorial CSS", "WebP Compression", "Micro-Animations"],
    performance: ["98/100 Mobile Performance", "0.0 CLS (Layout Shift)", "Sub-400ms Page Transitions"],
    results: ["300% Increase in qualified luxury commercial inquiries", "Featured as a benchmark luxury architectural web application"],
    nextProjectSlug: "nactura-spices",
    nextProjectTitle: "Nactura Spices Premium",
  },
  "nactura-spices": {
    slug: "nactura-spices",
    title: "Nactura Spices Premium",
    category: "E-commerce",
    industry: "Food & Beverage Retail",
    domain: "nacturaspices.beyondwebco.com",
    liveUrl: "https://nacturaspices.beyondwebco.com",
    image: "/nactura.avif",
    overview: "A premium spices and dry-fruits e-commerce brand centered on natural Idukki products.",
    challenge: "Nactura required an organic, premium digital storefront that clearly communicated product purity, Idukki heritage, and frictionless mobile ordering.",
    strategy: "We engineered an ultra-fast headless e-commerce architecture combining high-res product galleries, custom cart workflows, and rapid checkout integration.",
    design: "Warm, natural aesthetic with earthy editorial tones, crisp product badges, and clear nutritional transparency cards.",
    development: "Powered by Next.js App Router, Tailwind CSS, and optimized image CDN delivery pipelines for instant catalog browsing.",
    technology: ["Next.js", "Tailwind CSS", "Shopify Storefront API", "Edge CDN"],
    performance: ["Sub-second page render", "99/100 Core Web Vitals score", "Instant checkout navigation"],
    results: ["2.5x Increase in mobile conversion rate", "45% Reduction in cart abandonment rate"],
    nextProjectSlug: "patte-patries",
    nextProjectTitle: "Patte Patries",
  },
  "patte-patries": {
    slug: "patte-patries",
    title: "Patte Patries",
    category: "E-commerce",
    industry: "Handcrafted Bakery & Desserts",
    domain: "patte-patries.vercel.app",
    liveUrl: "https://patte-patries.vercel.app",
    image: "/pattepastries.avif",
    overview: "Small-batch, handcrafted eggless cakes, cookies, chocolates, and gourmet desserts platform.",
    challenge: "Creating an irresistible, mouth-watering digital catalog with custom daily order limits and local delivery slot scheduling.",
    strategy: "Designed a vibrant, imagery-first web ordering portal with real-time availability counters and rapid WhatsApp/web ordering triggers.",
    design: "Playful yet refined pastry studio aesthetic featuring warm dessert tones and high-detail product photography.",
    development: "Handcrafted with React and lightweight state management for zero order-flow latency.",
    technology: ["React", "Custom Ordering Engine", "Responsive CSS", "Vercel Hosting"],
    performance: ["Sub-500ms catalog filter load", "Seamless mobile touch ordering", "Sub-second LCP"],
    results: ["4x Surge in weekend pre-order volume", "100% Mobile customer satisfaction score"],
    nextProjectSlug: "volta",
    nextProjectTitle: "Volta EV Platform",
  },
  volta: {
    slug: "volta",
    title: "Volta EV Platform",
    category: "Digital Platforms",
    industry: "Electric Mobility & Technology",
    domain: "volta.beyondwebco.com",
    liveUrl: "https://volta.beyondwebco.com/",
    overview: "A high-performance digital platform created for next-generation electric mobility.",
    challenge: "Volta required an ultra-fast, visually immersive web application showcasing EV technology, vehicle telemetry features, and instant charging location interactive previews.",
    strategy: "BeyondWebCo engineered a Next.js App Router architecture leveraging Server Components and Edge CDN distribution.",
    design: "Minimalist dark editorial aesthetic with precision grid alignments and bold typography hierarchy.",
    development: "Built using React 19, TypeScript, and custom CSS module styling. Core Web Vitals optimization achieved 99/100 Lighthouse score.",
    technology: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Vercel Edge Network"],
    performance: ["99/100 Lighthouse Performance", "Sub-second LCP", "0.0 Cumulative Layout Shift"],
    results: ["100% Increase in interactive session length", "Sub-400ms page transition latency"],
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
    challenge: "Traditional tractor dealership sites were outdated, slow, and non-optimized for mobile searchers seeking sales and servicing.",
    strategy: "We built a clean, accessible business platform with dedicated service inquiry flows and Mahindra tractor specifications.",
    design: "Clean, high-contrast visual design prioritizing clarity, quick phone/WhatsApp contact triggers, and structured equipment cards.",
    development: "Developed with Next.js, TypeScript, and responsive Tailwind CSS layout. Implemented Schema.org LocalBusiness metadata.",
    technology: ["Next.js", "TypeScript", "Tailwind CSS", "Schema.org JSON-LD"],
    performance: ["98/100 Mobile Performance", "Instant WhatsApp lead routing"],
    results: ["3x Increase in monthly online test drive and service inquiries"],
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
    challenge: "Displaying high-resolution wedding, portrait, and newborn photography portfolios without incurring heavy page load times.",
    strategy: "Implemented an automated WebP image transformation and lazy-loading image pipeline paired with an elegant editorial layout.",
    design: "Spatial photography presentation, subtle micro-animations, and luxurious typography.",
    development: "Custom Next.js frontend with dynamic picture sets and responsive image breakpoints.",
    technology: ["React", "Next.js", "Editorial UI", "WebP Asset Compression"],
    performance: ["Sub-second gallery rendering", "Zero layout shift"],
    results: ["Significant increase in high-ticket wedding inquiry conversion"],
    nextProjectSlug: "aura-luxe",
    nextProjectTitle: "Aura Luxe Interior Design",
  },
};

export default function CaseStudyClient({ slug }: { slug: string }) {
  const data = caseStudiesData[slug] || caseStudiesData["aura-luxe"];

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
          {data.image ? (
            <div className="relative aspect-[16/9] w-full rounded-[18px] overflow-hidden mb-10 bg-[#14121b] border border-[#e0e0e0] shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src={data.image}
                alt={data.title}
                fill
                priority
                sizes="(max-width: 980px) 100vw, 980px"
                className="object-contain p-4"
              />
            </div>
          ) : null}

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
