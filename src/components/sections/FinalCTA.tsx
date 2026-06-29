"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative py-[160px] px-margin-mobile md:px-margin-desktop overflow-hidden mt-20">
      <div className="absolute inset-0 bg-primary/10 -z-20"></div>
      <div 
        className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-surface to-secondary-container/10 -z-10 animate-pulse" 
        style={{ animationDuration: '8s' }}
      ></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="font-display-xl text-[56px] md:text-[110px] mb-12">
          Ready to build something exceptional?
        </h2>
        <p className="font-body-lg text-[20px] text-on-surface-variant mb-12">
          Let's discuss your project. Our senior engineers are ready to architect your vision into reality.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/contact" className="bg-primary text-black px-12 py-6 rounded-xl font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-primary/20">
            Get Started Now
          </Link>
          <Link href="/contact" className="border border-white/20 px-12 py-6 rounded-xl font-bold text-xl backdrop-blur-xl hover:bg-white/10 transition-colors">
            Book a Consultation
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
