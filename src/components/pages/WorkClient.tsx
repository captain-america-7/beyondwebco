"use client";

import { useState } from "react";
import Image from "next/image";
import { Button, TextLink } from "@/components/ui/Button";

type ProjectCategory =
  | "All"
  | "Business Websites"
  | "Digital Platforms"
  | "E-commerce"
  | "Creative"
  | "Healthcare"
  | "Automotive";

interface Project {
  title: string;
  category: ProjectCategory;
  industry: string;
  domain: string;
  description: string;
  url: string;
  slug?: string;
  tags: string[];
  services: string[];
  image?: string;
}

const allProjects: Project[] = [
  {
    title: "Aura Luxe Interior Design",
    category: "Creative",
    industry: "Architecture & Interior Design",
    domain: "aura-luxe-interior-design.vercel.app",
    description: "Ultra-luxury residential and commercial architecture showcase crafted with spatial presentation and elegant typography.",
    url: "https://aura-luxe-interior-design.vercel.app/",
    slug: "aura-luxe",
    tags: ["React", "Architectural UI", "Micro-Animations"],
    services: ["Brand Experience", "Web Design", "Portfolio Showcase"],
    image: "/auraluxe.avif",
  },
  {
    title: "Nactura Spices Premium",
    category: "E-commerce",
    industry: "Food & Beverage Retail",
    domain: "nacturaspices.beyondwebco.com",
    description: "A premium spices and dry-fruits brand centred on natural, handpicked Idukki products.",
    url: "https://nacturaspices.beyondwebco.com",
    slug: "nactura-spices",
    tags: ["Next.js", "Shopify Integration", "Tailwind CSS"],
    services: ["E-commerce Platform", "Brand Design", "Payment Gateway"],
    image: "/nactura.avif",
  },
  {
    title: "Patte Patries",
    category: "E-commerce",
    industry: "Handcrafted Bakery & Desserts",
    domain: "patte-patries.vercel.app",
    description: "Small-batch, handcrafted eggless cakes, cookies, chocolates, and gourmet desserts web shop.",
    url: "https://patte-patries.vercel.app",
    slug: "patte-patries",
    tags: ["React", "Custom Order Flow", "Fast Load"],
    services: ["Gourmet Storefront", "Menu UI", "Local Ordering"],
    image: "/pattepastries.avif",
  },
  {
    title: "Volta EV Platform",
    category: "Digital Platforms",
    industry: "Electric Mobility & Technology",
    domain: "volta.beyondwebco.com",
    description: "A high-performance digital platform built for next-generation electric mobility, featuring sub-second interactive load times.",
    url: "https://volta.beyondwebco.com/",
    slug: "volta",
    tags: ["Next.js", "React 19", "Edge CDN"],
    services: ["Web Architecture", "UI/UX Design", "Performance Engineering"],
  },
  {
    title: "Sri Lakshmi Automobiles",
    category: "Automotive",
    industry: "Automotive & Agricultural Machinery",
    domain: "sri-lakshmi-automobiles.vercel.app",
    description: "Authorised Mahindra tractor dealer web platform with sales, service, parts, and lead generation.",
    url: "https://sri-lakshmi-automobiles.vercel.app/",
    slug: "sri-lakshmi-automobiles",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    services: ["Corporate Website", "Lead Capture", "Technical SEO"],
  },
  {
    title: "Pavani Studios",
    category: "Creative",
    industry: "Luxury Photography Studio",
    domain: "pavanistudios.shop",
    description: "Luxury wedding, maternity, newborn, and portrait photography studio platform with spatial image gallery presentation.",
    url: "https://pavanistudios.shop",
    slug: "pavani-studios",
    tags: ["React", "Editorial UI", "Image Optimization"],
    services: ["Portfolio Design", "High-Res Image Pipeline", "Responsive UI"],
  },
  {
    title: "Forenmed Advisory",
    category: "Healthcare",
    industry: "Medicolegal Consultancy",
    domain: "forenmed-advisory.vercel.app",
    description: "Forensic medicine, medical documentation, and healthcare legal-compliance advisory services platform.",
    url: "https://forenmed-advisory.vercel.app/",
    slug: "forenmed-advisory",
    tags: ["Next.js", "SEO", "Healthcare Security"],
    services: ["Consulting Portal", "Document Architecture", "SEO Optimization"],
  },
  {
    title: "Sri Shiva Sai Physiotherapy",
    category: "Healthcare",
    industry: "Physiotherapy & Spine Clinic",
    domain: "sri-shiva-sai-physiotherapy.vercel.app",
    description: "Hyderabad physiotherapy clinic website focused on orthopaedics, back pain, and sports rehabilitation.",
    url: "https://sri-shiva-sai-physiotherapy.vercel.app",
    tags: ["Next.js", "Local SEO", "Mobile First"],
    services: ["Healthcare Web Design", "Patient Booking UI", "Core Web Vitals"],
  },
  {
    title: "House of Nayu",
    category: "E-commerce",
    industry: "Luxury Handloom Textiles",
    domain: "houseofnayu.vercel.app",
    description: "Luxury handloom sarees custom-woven by Indian master artisans showcased on an artisan e-commerce platform.",
    url: "https://houseofnayu.vercel.app",
    tags: ["Next.js", "E-commerce UI", "High-Res Gallery"],
    services: ["Digital Storefront", "Product Showcase", "Mobile Optimization"],
  },
  {
    title: "Makhana Healthy Snacks",
    category: "E-commerce",
    industry: "Healthy FMCG Snacks",
    domain: "makhana-iota.vercel.app",
    description: "Premium roasted, high-protein, gluten-free makhana snacks in multiple gourmet flavours.",
    url: "https://makhana-iota.vercel.app",
    tags: ["Next.js", "Conversion UI", "FMCG Design"],
    services: ["Product Landing Page", "Cart Experience", "SEO"],
  },
  {
    title: "Vendo Nexa",
    category: "Digital Platforms",
    industry: "Enterprise Software & Cybersecurity",
    domain: "vendo-nexa.vercel.app",
    description: "Vendor and hospital management systems alongside VAPT and SOC cybersecurity services portal.",
    url: "https://vendo-nexa.vercel.app",
    tags: ["Next.js", "SaaS Dashboard", "TypeScript"],
    services: ["SaaS Architecture", "Security Portal", "API Integrations"],
  },
  {
    title: "Zilogicx Logistics",
    category: "Digital Platforms",
    industry: "Logistics Technology",
    domain: "zilogicx.vercel.app",
    description: "A 24-hour delivery platform for fulfillment, returns, exchanges, and automated refunds.",
    url: "https://zilogicx.vercel.app",
    tags: ["Next.js", "Real-Time Tracking", "API Driven"],
    services: ["Logistics App", "Customer Portal", "Cloud Infrastructure"],
  },
  {
    title: "LuxStep AI",
    category: "Digital Platforms",
    industry: "Fashion Technology",
    domain: "luxstep-ai.vercel.app",
    description: "Luxury footwear shopping with AI try-on, 3D visualization, and automated outfit matching.",
    url: "https://luxstep-ai.vercel.app",
    tags: ["React", "Three.js / 3D", "AI Integration"],
    services: ["3D Product Viewer", "AI Integration", "Web Application"],
  },
  {
    title: "Soda Limes",
    category: "Digital Platforms",
    industry: "Beverage Brand Platform",
    domain: "sodalimes.beyondwebco.com",
    description: "A zero-sugar diet soda brand focused on crisp, low-calorie refreshment and interactive storytelling.",
    url: "https://sodalimes.beyondwebco.com",
    tags: ["Next.js", "Interactive Animations", "Tailwind CSS"],
    services: ["Interactive Brand Site", "WebGL Animation", "Product Landing"],
  },
  {
    title: "Pure Foods",
    category: "Business Websites",
    industry: "Food & Beverage Manufacturing",
    domain: "pure-foods.vercel.app",
    description: "A Navi Mumbai B2B beverage manufacturer offering formulation, processing, filling, and packaging.",
    url: "https://pure-foods.vercel.app",
    tags: ["Next.js", "B2B Portal", "Manufacturing"],
    services: ["Corporate Site", "B2B Lead Form", "Technical SEO"],
  },
  {
    title: "CIBL Financial",
    category: "Business Websites",
    industry: "Financial Advisory & Credit Services",
    domain: "cibl.vercel.app",
    description: "Credit-health guidance platform for understanding, managing, and improving credit profiles.",
    url: "https://cibl.vercel.app",
    tags: ["Next.js", "Fintech UI", "Calculators"],
    services: ["Financial Portal", "Interactive Tools", "SEO"],
  },
  {
    title: "Velocity Marketing",
    category: "Business Websites",
    industry: "Marketing Agency",
    domain: "velocity-marketing-liart.vercel.app",
    description: "BTL marketing, retail execution, brand activations, events, and field campaigns agency portal.",
    url: "https://velocity-marketing-liart.vercel.app",
    tags: ["React", "Agency Showcase", "Case Studies"],
    services: ["Agency Website", "Portfolio Showcase", "Lead Generation"],
  },
  {
    title: "PK Associates",
    category: "Business Websites",
    industry: "Accounting & Tax Advisory",
    domain: "pkassociates.vercel.app",
    description: "Accounting, taxation, payroll, compliance, and outsourced finance for global businesses.",
    url: "https://pkassociates.vercel.app",
    tags: ["Next.js", "Corporate UI", "Trust Design"],
    services: ["Financial Firm Website", "Service Pages", "Compliance Portal"],
  },
  {
    title: "Swami Enterprise",
    category: "Business Websites",
    industry: "Financial Advisory",
    domain: "swami-enterprise.vercel.app",
    description: "Personal and business advice for investments, insurance, borrowing, and tax compliance.",
    url: "https://swami-enterprise.vercel.app",
    tags: ["Next.js", "Corporate Web", "SEO"],
    services: ["Corporate Advisory Site", "Lead Inquiry", "Content Strategy"],
  },
  {
    title: "Only Space Realty",
    category: "Business Websites",
    industry: "Real Estate Advisory",
    domain: "only-space-realty.vercel.app",
    description: "Ahmedabad consultancy for buying, selling, and investing in premium residential and commercial property.",
    url: "https://only-space-realty.vercel.app",
    tags: ["Next.js", "Property Listings", "Search UI"],
    services: ["Real Estate Platform", "Property Search", "Lead Management"],
  },
  {
    title: "Vega Towers",
    category: "Business Websites",
    industry: "Luxury Real Estate",
    domain: "vega-towers.vercel.app",
    description: "Ultra-luxury lake-view residences and private sky duplexes in Gandipet, Hyderabad.",
    url: "https://vega-towers.vercel.app",
    tags: ["React", "Luxury Real Estate", "3D Floorplans"],
    services: ["Luxury Property Site", "Virtual Tour UI", "Lead Capture"],
  },
  {
    title: "White Edge Kolkata",
    category: "Business Websites",
    industry: "Signage & Architectural Branding",
    domain: "white-edge-kolkata.vercel.app",
    description: "Custom commercial signage, architectural branding, fabrication, installation, and maintenance.",
    url: "https://white-edge-kolkata.vercel.app",
    tags: ["Next.js", "Industrial UI", "Gallery"],
    services: ["Architectural Branding Site", "Project Gallery", "Quote Engine"],
  },
];

const categories: ProjectCategory[] = [
  "All",
  "Business Websites",
  "Digital Platforms",
  "E-commerce",
  "Creative",
  "Healthcare",
  "Automotive",
];

export default function WorkClient() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#ffffff] text-[#1d1d1f] pt-28 pb-24 px-6 md:px-12 w-full min-h-screen">
      <div className="max-w-[1068px] mx-auto">
        {/* Page Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-[12px] font-semibold tracking-[0.1em] text-[#7a7a7a] uppercase mb-3 block">
            Selected Work
          </span>
          <h1 className="text-[34px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.07] tracking-[-0.02em] text-[#1d1d1f] mb-6">
            Selected work.
          </h1>
          <p className="text-[17px] md:text-[21px] text-[#7a7a7a] leading-[1.47] max-w-2xl font-normal">
            Digital products and experiences designed to perform, convert, and scale.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-[#e0e0e0] pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-[8px] text-[13px] font-medium transition-all ${
                activeCategory === cat
                  ? "bg-[#1d1d1f] text-white shadow-sm"
                  : "bg-[#f5f5f7] text-[#7a7a7a] hover:bg-[#e0e0e0] hover:text-[#1d1d1f]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#f5f5f7] p-8 rounded-[18px] border border-[#e0e0e0] flex flex-col justify-between"
            >
              <div>
                {project.image ? (
                  <div className="relative aspect-[16/9] w-full rounded-[12px] overflow-hidden mb-6 border border-[#e0e0e0] shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : null}

                <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                  <span className="text-[12px] text-[#0066cc] font-semibold tracking-wide uppercase">
                    {project.industry}
                  </span>
                  <span className="text-[11px] font-mono text-[#7a7a7a] bg-white px-2.5 py-1 rounded-[5px] border border-[#e0e0e0]">
                    {project.domain}
                  </span>
                </div>

                <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1d1d1f] mb-3">
                  {project.title}
                </h2>
                <p className="text-[15px] text-[#7a7a7a] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="mb-4">
                  <span className="text-[11px] uppercase font-semibold text-[#7a7a7a] block mb-2">
                    Services Delivered
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.services.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] text-[#333333] bg-white px-2 py-0.5 rounded-[4px] border border-[#e0e0e0]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono text-[#7a7a7a] bg-white px-2.5 py-1 rounded-[5px] border border-[#e0e0e0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#e0e0e0] flex items-center justify-between gap-4">
                  {project.slug ? (
                    <TextLink href={`/work/${project.slug}`} className="text-[14px] font-medium">
                      View Case Study →
                    </TextLink>
                  ) : null}
                  <TextLink href={project.url} external className="text-[14px] font-medium">
                    Visit Live Site ↗
                  </TextLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#272729] text-white p-12 rounded-[18px] text-center flex flex-col items-center">
          <h2 className="text-[28px] md:text-[34px] font-semibold mb-4">
            Have a project in mind?
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#cccccc] max-w-xl mx-auto mb-8 font-normal">
            Whether you need a complete website redesign, a custom web app, or an enterprise digital platform, BeyondWebCo delivers engineered results.
          </p>
          <Button variant="primary" href="/contact">
            Start a Project →
          </Button>
        </div>
      </div>
    </div>
  );
}
