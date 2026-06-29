"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const testimonials = [
  {
    quote: "BeyondWebCo took our legacy architecture and completely revitalized it into a cloud-native SaaS that tripled our throughput in 6 months.",
    author: "Jason Drax",
    role: "CTO, Aether Systems",
    initials: "JD"
  },
  {
    quote: "The precision and attention to detail is unmatched. It's rare to find a studio that truly understands the business logic behind the code.",
    author: "Sarah Lin",
    role: "Founder, Velo App",
    initials: "SL"
  },
  {
    quote: "Their engineering-first approach saved us over $200k in potential technical debt. They are truly strategic partners.",
    author: "Mark Kovak",
    role: "Head of Product, Quantix",
    initials: "MK"
  }
];

export default function Testimonials() {
  return (
    <section className="py-[160px] bg-surface-container-lowest">
      <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.2, 1, 0.3, 1] }}
            >
              <GlassCard>
                <div className="flex gap-1 text-primary mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <p className="text-on-surface italic mb-8 text-lg">"{test.quote}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                    {test.initials}
                  </div>
                  <div>
                    <p className="font-bold">{test.author}</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest">{test.role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
