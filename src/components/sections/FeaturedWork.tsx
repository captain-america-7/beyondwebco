"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";

const projects = [
  {
    title: "FinFlow NeoBank",
    description: "Global FinTech Disruptor",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5Pyrmc640ucBThJjLVZp7Tsah_2qyO5u86bQuit0OH1gg6Vm5Sdqw1Quvz7M04GjYX73a7kUfn5NCO-Bd4r-8ngEo2nv5qBir-neiZLE531KZxhTciGa2AuEP6wo2OAxsuYT-JK-W6rUOsMcJeErLi7bgL55NIodK_fjfV2y08OtobI0GpY0lV0937OStyJIAj-uWJAD0Q_F2mXphZPv902QbT7VGQgGJd10JRGNDwi-1rNCcmIcv",
    tags: ["NEXT.JS", "AWS LAMBDA", "WEB3"]
  },
  {
    title: "LuxeCart Engine",
    description: "Enterprise Commerce Solution",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhiS7Ffaqax2DoVIyyXWYyV2zHx4CqLSu2Gu9uTdejhT6ZoKvhW4x99vY3UMP3Z14IG085iclVDKtC3zjXJNdopn3Q7BQYS296VEpOH78kIO8ez-95dJ9DEJGswzASnmgixLXwdC-kJi07TVtb0MfzncfUxOSX1HDZB-78Vkw7MZXm41DPQ9Rh5KPuRre5ORRTl9UExmRt9FcboFu1gCYbrYDRAtGNxUpzY-rFOjO5cLJzdxu91zOW",
    tags: ["FLUTTER", "NODE.JS", "STRIPE"]
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
      
      <div className="flex gap-[32px] px-[24px] md:px-[80px] overflow-x-auto pb-12 snap-x hide-scrollbar">
        {projects.map((project, idx) => (
          <div key={idx} className="min-w-[85vw] md:min-w-[700px] snap-center">
            <div className="glass-card rounded-xl overflow-hidden group">
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={400}
                  unoptimized // since we use external non-configured domains
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
    </section>
  );
}
