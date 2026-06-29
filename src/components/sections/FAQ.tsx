"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Depending on the scope, most projects take between 4 to 12 weeks from strategy to deployment."
  },
  {
    q: "Do you work with startups or enterprise clients?",
    a: "We work with both. Our architecture is designed to scale, whether you are finding product-market fit or serving millions of users."
  },
  {
    q: "What technologies do you use?",
    a: "We specialize in React, Next.js, Flutter, Node.js, and AWS, focusing on performance-first engineering."
  }
];

export default function FAQ() {
  return (
    <section className="py-[160px] px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
          className="md:w-1/3"
        >
          <h2 className="font-display-lg text-[48px] leading-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-on-surface-variant text-body-lg">Everything you need to know about our process, pricing, and how we build world-class digital products.</p>
        </motion.div>
        
        <div className="md:w-2/3 flex flex-col gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.2, 1, 0.3, 1] }}
            >
              <GlassCard className="!p-8">
                <h3 className="font-headline-md text-[24px] mb-4">{faq.q}</h3>
                <p className="text-on-surface-variant">{faq.a}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
