"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-[160px] px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        className="mb-16 max-w-2xl"
      >
        <h1 className="font-display-xl text-[64px] leading-tight mb-4">Let's talk.</h1>
        <p className="text-on-surface-variant text-body-lg">
          Ready to build something exceptional? Fill out the form below or reach out directly.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 1, 0.3, 1] }}
        >
          <GlassCard className="!p-8">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-label-caps mb-2 text-on-surface-variant">NAME</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-outline-variant py-2 outline-none focus:border-primary transition-colors text-on-surface"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-label-caps mb-2 text-on-surface-variant">EMAIL</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-outline-variant py-2 outline-none focus:border-primary transition-colors text-on-surface"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-label-caps mb-2 text-on-surface-variant">PROJECT DETAILS</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-outline-variant py-2 outline-none focus:border-primary transition-colors text-on-surface resize-none"
                  placeholder="Tell us about your project goals..."
                ></textarea>
              </div>
              <button className="bg-primary text-on-primary-container font-bold rounded-xl py-4 hover:scale-[0.98] transition-transform w-full mt-4">
                Send Message
              </button>
            </form>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 1, 0.3, 1] }}
          className="flex flex-col gap-12"
        >
          <div>
            <h3 className="font-bold text-xl mb-2">Direct Contact</h3>
            <p className="text-on-surface-variant mb-1">Email: beyondwebco@gmail.com</p>
            <p className="text-on-surface-variant">Phone: 7993597172</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://instagram.com/beyondwebco" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-surface-container-high hover:bg-primary/20 hover:text-primary transition-colors font-medium">
                Instagram: @beyondwebco
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
