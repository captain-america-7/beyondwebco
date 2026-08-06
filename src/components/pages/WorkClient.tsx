"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Sri Lakshmi Automobiles",
    category: "Automotive Business Platform",
    description: "A sleek modern corporate website created for Sri Lakshmi Automobiles. Built with Next.js and Tailwind CSS, providing sub-second load times and seamless customer engagement.",
    image: "/projects/sri_lakshmi_automobiles.webp",
    tags: ["Next.js", "React", "SEO", "Responsive UI"],
    width: 800,
    height: 450
  },
  {
    title: "Pavani Studios",
    category: "Creative Photography Showcase",
    description: "An elegant interactive portfolio website designed for Pavani Studios. Features full-screen gallery showcases, smooth micro-animations, and client inquiry workflows.",
    image: "/projects/pavani_studios.webp",
    tags: ["React", "Framer Motion", "Portfolio UI", "Optimized Media"],
    width: 800,
    height: 450
  },
  {
    title: "Dr. Varun Healthcare",
    category: "Medical Clinic Website",
    description: "A professional medical consultation platform for Dr. Varun. Integrated with online appointment requests, patient educational resources, and local SEO optimizations.",
    image: "/projects/dr_varun.webp",
    tags: ["Next.js", "Healthcare", "Appointment Flow", "Local SEO"],
    width: 800,
    height: 450
  },
  {
    title: "Savoria Gourmet Restaurant",
    category: "Hospitality & Restaurant Platform",
    description: "A vibrant dining experience website featuring online menu navigation, table reservation integration, and responsive mobile-first visual design.",
    image: "/projects/restaurant_website.webp",
    tags: ["React", "Reservation Flow", "Mobile UI", "Performance"],
    width: 800,
    height: 450
  },
  {
    title: "Executive Developer Portfolio",
    category: "Personal Brand & Showcase",
    description: "A minimalist personal portfolio showcase featuring modern dark mode aesthetics, interactive case study cards, and direct contact scheduling.",
    image: "/projects/portfolio_website.webp",
    tags: ["Next.js", "TypeScript", "Glassmorphism", "Micro-Animations"],
    width: 800,
    height: 450
  }
];

export default function WorkClient() {
  return (
    <div className="pt-32 pb-[160px] px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        className="mb-24 max-w-4xl"
      >
        <h1 className="font-display-xl text-[52px] md:text-[88px] leading-tight mb-6">
          Selected Portfolio & Case Studies.
        </h1>
        <p className="text-on-surface-variant text-body-lg max-w-2xl leading-relaxed">
          Explore our recent web development and design projects. Each platform is built with custom code, precision engineering, and performance-first architecture.
        </p>
      </motion.div>

      {/* Projects Showcase */}
      <div className="mb-24">
        <h2 className="font-display-lg text-[36px] md:text-[48px] mb-12">
          Featured Digital Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease: [0.2, 1, 0.3, 1] }}
            >
              <GlassCard className="!p-6 group cursor-pointer h-full flex flex-col justify-between">
                <div>
                  <div className="aspect-[16/9] relative overflow-hidden rounded-lg mb-8 bg-surface-container-high">
                    <Image 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      src={project.image}
                      alt={`${project.title} - ${project.category}`}
                      width={project.width}
                      height={project.height}
                      quality={75}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div>
                    <span className="text-xs text-primary font-bold uppercase tracking-widest block mb-2">
                      {project.category}
                    </span>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-headline-md text-headline-md">{project.title}</h3>
                      <Link href="/work" aria-label={`View ${project.title}`} className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                      </Link>
                    </div>
                    <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 border border-outline-variant/60 rounded-full text-xs font-bold text-on-surface-variant">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Results Summary */}
      <div className="bg-surface-container-low rounded-3xl p-12 md:p-16 border border-white/10 text-center">
        <h2 className="font-display-lg text-[36px] md:text-[56px] mb-6">Have a project in mind?</h2>
        <p className="text-on-surface-variant text-body-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Whether you need a complete website redesign, a custom web app, or an enterprise landing page, BeyondWebCo delivers results on time and on budget.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-primary text-black px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
        >
          Discuss Your Project
        </Link>
      </div>
    </div>
  );
}
