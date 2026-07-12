"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";

const projects = [
  {
    title: "Sri Lakshmi Automobiles",
    description: "Modern Business Website",
    image: "/projects/sri_lakshmi_automobiles.png",
    tags: ["Next.js", "React", "Responsive Design"]
  },
  {
    title: "Pavani Studios",
    description: "Photography Portfolio Website",
    image: "/projects/pavani_studios.png",
    tags: ["React", "GSAP", "Responsive Design"]
  },
  {
    title: "Dr. Varun",
    description: "Medical Clinic Website",
    image: "/projects/dr_varun.png",
    tags: ["Next.js", "SEO", "Appointment Integration"]
  },
  {
    title: "Restaurant Website",
    description: "Restaurant Landing Page",
    image: "/projects/restaurant_website.png",
    tags: ["React", "Responsive Design"]
  },
  {
    title: "Portfolio Website",
    description: "Personal Portfolio",
    image: "/projects/portfolio_website.png",
    tags: ["Next.js", "Framer Motion"]
  }
];

export default function FeaturedWork() {
  return (
    <section className="py-[160px] overflow-hidden bg-surface-container-low">
      <div className="px-[24px] md:px-[80px] max-w-[1440px] mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
          className="font-display-lg text-[48px] md:text-display-lg"
        >
          Selected Case Studies
        </motion.h2>
      </div>
      
      <div className="overflow-hidden flex w-full">
        <div className="flex animate-marquee-slow w-max">
          {[1, 2].map((i) => (
            <div key={i} className="flex gap-[32px] pr-[32px] flex-shrink-0">
              {projects.map((project, idx) => (
                <div key={`${i}-${idx}`} className="w-[85vw] md:w-[700px] flex-shrink-0">
                  <div className="glass-card rounded-xl overflow-hidden group">
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <Image 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        src={project.image}
                        alt={project.title}
                        width={700}
                        height={400}
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                    </div>
                    <div className="p-8 relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-headline-md text-headline-md mb-2">{project.title}</h3>
                          <p className="text-on-surface-variant">{project.description}</p>
                        </div>
                        <button className="p-4 border border-white/10 rounded-full hover:bg-primary hover:text-on-primary-container transition-all">
                          <span className="material-symbols-outlined">north_east</span>
                        </button>
                      </div>
                      <div className="flex gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 border border-outline-variant rounded-full text-xs font-bold">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
