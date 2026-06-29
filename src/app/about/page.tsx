"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-[160px] px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
          className="font-display-xl text-[64px] md:text-[96px] leading-tight mb-6"
        >
          We are <span className="text-primary">BeyondWebCo.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 1, 0.3, 1] }}
          className="text-on-surface-variant text-body-lg max-w-2xl mx-auto"
        >
          A modern web design and development studio focused on building premium websites for startups, businesses, creators, and growing brands.
        </motion.p>
      </div>

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
              alt="Engineering" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              unoptimized
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        >
          <h2 className="font-display-lg text-[48px] mb-6">Our Mission</h2>
          <p className="text-on-surface-variant text-body-lg mb-6">
            Our goal is to help businesses establish a premium digital presence. We believe that your website should be your hardest working asset.
          </p>
          <p className="text-on-surface-variant text-body-lg mb-8">
            We don't compromise on performance or design. By employing senior talent and leveraging cutting-edge web technologies, we build products that scale from day one.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/30">
            <div>
              <p className="font-display-lg text-primary text-[40px]">8+</p>
              <p className="font-label-caps text-on-surface-variant">YEARS AVG EXP</p>
            </div>
            <div>
              <p className="font-display-lg text-primary text-[40px]">0</p>
              <p className="font-label-caps text-on-surface-variant">JUNIOR DEVS</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
