"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery & Strategy", desc: "We analyze your business goals, target audience, and technical requirements to form a comprehensive blueprint." },
  { num: "02", title: "Design & Development Planning", desc: "Planning the UI/UX visual language and system architecture to ensure scalability and a premium user experience." },
  { num: "03", title: "Engineering", desc: "Our senior developers build your product using modern, high-performance tech stacks with clean, maintainable code." },
  { num: "04", title: "Launch & Scale", desc: "Rigorous testing, optimized deployment, and ongoing support to ensure your product grows with your business." }
];

export default function Process() {
  return (
    <section className="py-[160px] px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto bg-surface-container-low rounded-[32px] overflow-hidden">
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
          className="font-display-lg text-[48px] md:text-[72px]"
        >
          Our Process
        </motion.h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.2, 1, 0.3, 1] }}
            className="flex flex-col relative"
          >
            <span className="font-display-lg text-[80px] text-primary/20 dark:text-black leading-none mb-4 font-black">{step.num}</span>
            <h3 className="font-headline-md text-[24px] mb-4">{step.title}</h3>
            <p className="text-on-surface-variant">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
