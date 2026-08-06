"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "BeyondWebCo built a modern website for Sri Lakshmi Automobiles that perfectly represents our business. The team was responsive, delivered on time, and created a fast, professional website that our customers love.",
    author: "Sri Lakshmi Automobiles",
    role: "Automotive Business",
    initials: "SL"
  },
  {
    quote: "Our portfolio finally feels premium. BeyondWebCo understood our creative vision and designed a website that beautifully showcases our photography and has already helped us attract new clients.",
    author: "Pavani Studios",
    role: "Photography Studio",
    initials: "PS"
  },
  {
    quote: "The website exceeded my expectations. It is clean, professional, mobile-friendly, and makes it much easier for patients to learn about my services and get in touch.",
    author: "Dr. Varun",
    role: "Healthcare Professional",
    initials: "DV"
  }
];

export default function Testimonials() {
  return (
    <section className="py-[160px] bg-surface-container-lowest">
      <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
            className="font-display-lg text-[40px] md:text-[56px] mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <p className="text-on-surface-variant text-body-lg">
            Real feedback from growing businesses and professionals who trust BeyondWebCo with their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.2, 1, 0.3, 1] }}
            >
              <GlassCard className="!p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex gap-1 text-primary mb-6" aria-label="5 out of 5 stars rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-on-surface italic mb-8 text-base md:text-lg leading-relaxed">"{test.quote}"</p>
                </div>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary flex-shrink-0">
                    {test.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-on-surface">{test.author}</h3>
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
