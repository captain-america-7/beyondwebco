"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const servicesList = [
  { title: "Business Websites", desc: "Corporate sites optimized for brand trust and lead generation.", icon: "domain" },
  { title: "Landing Pages", desc: "High-conversion single pages for marketing campaigns.", icon: "web" },
  { title: "Portfolio Websites", desc: "Premium showcases for creators and agencies.", icon: "photo_library" },
  { title: "E-Commerce Websites", desc: "Custom storefronts designed to maximize sales.", icon: "storefront" },
  { title: "Web Applications", desc: "Complex SaaS and internal tools with modern frameworks.", icon: "app_shortcut" },
  { title: "UI/UX Design", desc: "User-centric design systems and interfaces.", icon: "design_services" },
  { title: "Website Redesign", desc: "Modernizing legacy sites for better performance.", icon: "update" },
  { title: "Website Maintenance", desc: "Ongoing support, security, and updates.", icon: "build" },
  { title: "Performance Optimization", desc: "Speeding up load times for better SEO and UX.", icon: "speed" },
  { title: "SEO-Friendly Development", desc: "Built from the ground up to rank on search engines.", icon: "search" }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-[160px] px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        className="mb-24 max-w-3xl"
      >
        <h1 className="font-display-xl text-[64px] md:text-[96px] leading-tight mb-6">Our Services.</h1>
        <p className="text-on-surface-variant text-body-lg">
          We offer a comprehensive suite of digital services designed to elevate your brand and drive results.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.2, 1, 0.3, 1] }}
          >
            <GlassCard className="!p-8">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">{service.icon}</span>
              <h3 className="font-headline-md text-[24px] mb-3">{service.title}</h3>
              <p className="text-on-surface-variant text-sm">{service.desc}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
