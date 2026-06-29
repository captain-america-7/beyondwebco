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
  },
  {
    title: "Aether Systems",
    description: "Cloud Infrastructure Analytics",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSJrLIh2NJ3Z5imXlFVCAHr2OcjfDHtfFsSyE7bSsC8gfV59WPWeITSsP3Vs9d9_IyQchw-NDwCF-Clr4SKIUewaj7NkbB50hJ6DBUOnlQH3_7YB4BZJC1UsOMslemMBkmwOLD5hj1ovUUvIU2NPdwZSxX14zo1RqQxDLPocAsnjsS_ZNx_cjkdT0aVVqWfXD7OkY6RXpAZjlsQIMYJ9m6j9leBrSwpeTQ9X_TDYS3caLcH3HEuJXc",
    tags: ["REACT", "KUBERNETES", "DATA"]
  },
  {
    title: "Velo Mobility",
    description: "Urban Transit Platform",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqbGk0Ky-HaHQgRtWACyQosYNFmerwMqeDxa2Av9WP0gxUADsVg-hXYNFQrsI2hBLYcJQ4M-7_qwV1e9CP0LiMLXiuWx5AZioiRAdnO7YKZqnDL-p9wkdC-BUp0LWCCyuMKu-YrXUfDvaODB9Ja8-964PnWK7I1JsDxnfpAEnWJBo23zMj6sRWC37gHYSLc3mDGAOfZgH7d2IrHUUr9lCB66gqosZgv57tYlIp2zde6CAEw3oGzgjf",
    tags: ["SWIFT", "FIREBASE", "MAPS"]
  }
];

export default function WorkPage() {
  return (
    <div className="pt-32 pb-[160px] px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        className="mb-24 max-w-3xl"
      >
        <h1 className="font-display-xl text-[64px] md:text-[96px] leading-tight mb-6">Selected Work.</h1>
        <p className="text-on-surface-variant text-body-lg">
          A showcase of our premium digital products, engineered for performance and scale.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease: [0.2, 1, 0.3, 1] }}
          >
            <GlassCard className="!p-6 group cursor-pointer">
              <div className="aspect-[16/9] relative overflow-hidden rounded-lg mb-8">
                <Image 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-headline-md text-headline-md mb-2">{project.title}</h3>
                    <p className="text-on-surface-variant">{project.description}</p>
                  </div>
                  <button className="p-4 border border-white/10 rounded-full group-hover:bg-primary group-hover:text-on-primary-container transition-all">
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
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
