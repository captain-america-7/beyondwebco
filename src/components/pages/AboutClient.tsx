"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { Code2, Zap, SearchCheck } from "lucide-react";

export default function AboutClient() {
  return (
    <div className="pt-32 pb-[160px] px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
          className="font-display-xl text-[52px] md:text-[88px] leading-tight mb-6"
        >
          We are <span className="text-primary font-montserrat font-light">BeyondWebCo.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 1, 0.3, 1] }}
          className="text-on-surface-variant text-body-lg max-w-3xl mx-auto leading-relaxed"
        >
          A dedicated web design and development studio focused on building high-converting, high-speed digital products for modern companies, ambitious startups, creators, and market leaders.
        </motion.p>
      </div>

      {/* Mission & Story Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        >
          <div className="aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden relative border border-white/10">
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"></div>
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB__OW0d9kLOzUNoFpeX9vbp2qvo5fZTQ_4dWHY0jr8oEUmQN2cgK2r9gKyzvBWputuyvkxnFo-EbuUaUKzSZx-UPb6MfaD6CHsu8fwZyd9XmNxMSbEVctY1TptFwE45VnL7hhtKpFFq6fzjsy6ig2jFyG00Nj8s9ceya2ECZQuPoLeTjLbMicw82jED8OT94_jquDreHx41H0FjEJfZbGaKzZxleqYjOqKpiSO6mUDSa4eW_5a5cU5" 
              alt="BeyondWebCo Engineering Excellence and Digital Innovation" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              priority
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        >
          <h2 className="font-display-lg text-[36px] md:text-[48px] mb-6 leading-tight">
            Engineering-First Studio for Growing Brands
          </h2>
          <p className="text-on-surface-variant text-body-lg mb-6 leading-relaxed">
            At BeyondWebCo, our mission is to redefine how digital experiences are built. We combine sleek modern aesthetic design with senior-level software engineering to give businesses a significant competitive edge online.
          </p>
          <p className="text-on-surface-variant text-body-lg mb-8 leading-relaxed">
            We believe your website should be your company's most productive revenue driver. Every digital platform we build is engineered from scratch for lightning-fast speeds, seamless Core Web Vitals, enterprise security, and maximum SEO visibility.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/30">
            <div>
              <p className="font-display-lg text-primary text-[40px] font-bold">100%</p>
              <p className="font-label-caps text-on-surface-variant text-xs">SENIOR ENGINEERS</p>
            </div>
            <div>
              <p className="font-display-lg text-primary text-[40px] font-bold">30+</p>
              <p className="font-label-caps text-on-surface-variant text-xs">PROJECTS LAUNCHED</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Core Pillars */}
      <div className="mb-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display-lg text-[36px] md:text-[48px] mb-4">Our Core Development Principles</h2>
          <p className="text-on-surface-variant text-body-lg">
            How we maintain unmatched quality, speed, and architectural longevity across every project we launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard className="!p-8">
            <Code2 className="w-10 h-10 text-primary mb-6" />
            <h3 className="font-headline-md text-[24px] mb-4">Senior Engineering</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
              We eliminate technical debt before it happens. All codebases are architected by experienced engineers utilizing strict TypeScript, clean modular structure, and automated testing patterns.
            </p>
            <ul className="text-xs text-on-surface-variant space-y-2 list-disc list-inside">
              <li>Type-safe architectures</li>
              <li>Reusable design systems</li>
              <li>Maintainable clean code</li>
            </ul>
          </GlassCard>

          <GlassCard className="!p-8">
            <Zap className="w-10 h-10 text-primary mb-6" />
            <h3 className="font-headline-md text-[24px] mb-4">Performance Obsession</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
              Speed is directly correlated to conversion rate and search rankings. We optimize asset sizes, bundle splits, web fonts, and dynamic caching strategies to guarantee 95+ Lighthouse scores.
            </p>
            <ul className="text-xs text-on-surface-variant space-y-2 list-disc list-inside">
              <li>Sub-second LCP speeds</li>
              <li>Zero Layout Shift (CLS)</li>
              <li>Next.js automatic asset compression</li>
            </ul>
          </GlassCard>

          <GlassCard className="!p-8">
            <SearchCheck className="w-10 h-10 text-primary mb-6" />
            <h3 className="font-headline-md text-[24px] mb-4">Technical SEO Built-In</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
              SEO is never an afterthought. We implement semantic HTML5, custom metadata controls, JSON-LD structured data, dynamic XML sitemaps, and canonical link configurations out of the box.
            </p>
            <ul className="text-xs text-on-surface-variant space-y-2 list-disc list-inside">
              <li>Rich JSON-LD schemas</li>
              <li>Open Graph & Twitter Cards</li>
              <li>Clean URL structures & tags</li>
            </ul>
          </GlassCard>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-surface-container-low rounded-3xl p-12 md:p-20 border border-white/10">
        <h2 className="font-display-lg text-[36px] md:text-[56px] mb-6">Ready to work with senior web engineers?</h2>
        <p className="text-on-surface-variant text-body-lg max-w-2xl mx-auto mb-8">
          Let's discuss how BeyondWebCo can engineer a high-performing digital platform tailored specifically to your business goals.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-primary text-black px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
        >
          Start Your Project
        </Link>
      </div>
    </div>
  );
}
