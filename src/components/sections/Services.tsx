"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const services = [
  {
    icon: "desktop_windows",
    title: "Custom Web Apps",
    description: "Custom websites and web applications built with React and Next.js for speed, SEO, and exceptional user experience.",
    tags: ["React", "Node.js", "GraphQL"],
  },
  {
    icon: "smartphone",
    title: "Mobile Apps",
    description: "Beautiful, high-performance mobile applications for iOS and Android.",
    tags: ["Flutter", "Swift", "Kotlin"],
  },
  {
    icon: "cloud_done",
    title: "SaaS Platforms",
    description: "Scalable SaaS platforms with authentication, payments, dashboards, and cloud infrastructure built for growth.",
    tags: ["AWS", "Stripe", "PostgreSQL"],
  }
];

export default function Services() {
  return (
    <section className="py-[160px] px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4 leading-tight">Integrated Software Solutions</h2>
          <p className="text-on-surface-variant text-body-lg">End-to-end engineering from strategy to deployment. We specialize in complex architectures that need to scale yesterday.</p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.2, 1, 0.3, 1] }}
          >
            <GlassCard>
              <span className="material-symbols-outlined text-primary text-6xl mb-8 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </span>
              <h3 className="font-headline-md text-headline-md mb-4">{service.title}</h3>
              <p className="text-on-surface-variant mb-10 flex-grow">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-surface-container-high rounded text-[10px] font-bold tracking-widest uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
