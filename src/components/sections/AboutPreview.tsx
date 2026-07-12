"use client";

import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section className="py-[160px] px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto text-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="font-display-lg text-[40px] md:text-[72px] leading-tight mb-stack-lg">
          Engineering-first methodology. <br />
          <span className="text-on-surface-variant/40">No junior developers. No outsourcing.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 text-left">
          <div>
            <h4 className="font-bold text-xl mb-4 text-primary">Experienced Development</h4>
            <p className="text-on-surface-variant">Every project is crafted using modern development practices, clean code, and attention to performance.</p>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-4 text-primary">Performance Obsessed</h4>
            <p className="text-on-surface-variant">Every website is optimized for speed, SEO, accessibility, and Core Web Vitals.</p>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-4 text-primary">Scale-Ready Architecture</h4>
            <p className="text-on-surface-variant">We build maintainable websites and applications that are easy to expand as your business grows.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
