"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";
import { 
  Building2, 
  Globe, 
  Image as ImageIcon, 
  Store, 
  AppWindow, 
  Palette, 
  RefreshCw, 
  Zap, 
  SearchCheck 
} from "lucide-react";

const servicesList = [
  { 
    title: "Custom Business Websites", 
    desc: "Enterprise-grade corporate websites optimized for brand trust, rapid load speeds, and high conversion lead generation.", 
    icon: Building2,
    details: ["Next.js & React Core", "Custom CMS Integration", "95+ Lighthouse Score"]
  },
  { 
    title: "High-Conversion Landing Pages", 
    desc: "Single-page marketing engines tailored for paid ad campaigns, product launches, and fast customer acquisition.", 
    icon: Globe,
    details: ["A/B Testing Ready", "Fast Interactive Load", "Conversion Focused UI"]
  },
  { 
    title: "Creative Showcase Portfolios", 
    desc: "Premium interactive showcases for agencies, photographers, executives, and creative professionals.", 
    icon: ImageIcon,
    details: ["Smooth Micro-Animations", "High-Res Image Optimization", "Mobile First Design"]
  },
  { 
    title: "Custom E-Commerce Platforms", 
    desc: "High-performance custom storefronts integrated with Stripe, Shopify Headless, and custom inventory workflows.", 
    icon: Store,
    details: ["Secure Checkout Flow", "Headless Commerce Architecture", "Sub-second Page Load"]
  },
  { 
    title: "Web Applications & SaaS", 
    desc: "Complex web applications, SaaS dashboards, and workflow tools built with modern frameworks and robust backend APIs.", 
    icon: AppWindow,
    details: ["Role-Based Authentication", "Real-Time Cloud Backends", "Scalable SQL/NoSQL Databases"]
  },
  { 
    title: "UI/UX & Product Design", 
    desc: "User-centric design systems, wireframes, interactive prototypes, and modern interface visual design.", 
    icon: Palette,
    details: ["Comprehensive Design Systems", "Figma Design Tokens", "Accessibility WCAG Compliance"]
  },
  { 
    title: "Website Redesign & Modernization", 
    desc: "Transforming slow, outdated websites into fast, responsive, modern digital assets built on contemporary technology stacks.", 
    icon: RefreshCw,
    details: ["Zero Downtime Migration", "Preserved SEO Rankings", "Modern Tech Stack Upgrade"]
  },
  { 
    title: "Speed & Performance Optimization", 
    desc: "Auditing and optimizing existing web codebases to dramatically boost Core Web Vitals, LCP, INP, and CLS scores.", 
    icon: Zap,
    details: ["Bundle & Asset Reduction", "Server-Side Caching", "Image Compression Pipeline"]
  },
  { 
    title: "Technical SEO & Architecture", 
    desc: "Engineering site structure, semantic markup, schema headers, dynamic sitemaps, and indexing optimizations for search engines.", 
    icon: SearchCheck,
    details: ["Rich JSON-LD Schemas", "Canonical Tag Management", "Robots & Sitemap Optimization"]
  }
];

export default function ServicesClient() {
  return (
    <div className="pt-32 pb-[160px] px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        className="mb-24 max-w-4xl"
      >
        <h1 className="font-display-xl text-[52px] md:text-[88px] leading-tight mb-6">
          Our Development Services.
        </h1>
        <p className="text-on-surface-variant text-body-lg max-w-2xl leading-relaxed">
          BeyondWebCo offers an end-to-end suite of digital development and design services crafted to help businesses establish authority, attract customers, and scale online.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="mb-24">
        <h2 className="font-display-lg text-[36px] md:text-[48px] mb-12">
          Specialized Engineering Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.2, 1, 0.3, 1] }}
              >
                <GlassCard className="!p-8 flex flex-col h-full">
                  <Icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="font-headline-md text-[24px] mb-3">{service.title}</h3>
                  <p className="text-on-surface-variant text-sm mb-6 flex-grow leading-relaxed">{service.desc}</p>
                  <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-on-surface-variant font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Process Highlight */}
      <div className="bg-surface-container-low rounded-3xl p-12 md:p-16 border border-white/10 mb-24">
        <h2 className="font-display-lg text-[36px] md:text-[48px] mb-6">
          Why Choose BeyondWebCo Services?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-3 text-primary">Custom Code, No Bloat</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              We avoid heavy bloated website builders. Everything is hand-crafted with modern Next.js and clean CSS for maximum performance and security.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3 text-primary">Conversion Driven UI</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              We design with clarity, clear call-to-action buttons, intuitive navigation, and micro-interactions that turn visitors into paying clients.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3 text-primary">Ongoing Maintenance</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              We don't leave you stranded after launch. We provide continuous support, updates, speed monitoring, and feature enhancements.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="font-display-lg text-[36px] md:text-[56px] mb-6">Need a custom solution for your business?</h2>
        <p className="text-on-surface-variant text-body-lg max-w-xl mx-auto mb-8">
          Tell us about your project requirements and let's craft a custom proposal tailored to your goals.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-primary text-black px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
        >
          Request a Quote
        </Link>
      </div>
    </div>
  );
}
