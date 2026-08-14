import Image from "next/image";
import { TextLink } from "@/components/ui/Button";

interface SelectedProject {
  title: string;
  category: string;
  domain: string;
  description: string;
  internalUrl: string;
  liveUrl: string;
  tags: string[];
  image?: string;
}

const selectedHomepageProjects: SelectedProject[] = [
  {
    title: "Aura Luxe Interior Design",
    category: "Architecture & Interior Design",
    domain: "aura-luxe-interior-design.vercel.app",
    description: "Ultra-luxury residential and commercial architecture showcase crafted with spatial presentation and elegant typography.",
    internalUrl: "/work/aura-luxe",
    liveUrl: "https://aura-luxe-interior-design.vercel.app/",
    tags: ["React", "Architectural UI", "Micro-Animations"],
    image: "/auraluxe.avif",
  },
  {
    title: "Nactura Spices Premium",
    category: "Food & Beverage Retail",
    domain: "nacturaspices.beyondwebco.com",
    description: "A premium spices and dry-fruits brand centred on natural, handpicked Idukki products.",
    internalUrl: "/work/nactura-spices",
    liveUrl: "https://nacturaspices.beyondwebco.com",
    tags: ["Next.js", "E-commerce UI", "Tailwind CSS"],
    image: "/nactura.avif",
  },
  {
    title: "Patte Patries",
    category: "Handcrafted Bakery & Desserts",
    domain: "patte-patries.vercel.app",
    description: "Small-batch, handcrafted eggless cakes, cookies, chocolates, and gourmet desserts web shop.",
    internalUrl: "/work/patte-patries",
    liveUrl: "https://patte-patries.vercel.app",
    tags: ["React", "Custom Order Flow", "Fast Load"],
    image: "/pattepastries.avif",
  },
];

export default function FeaturedWork() {
  return (
    <section className="bg-[#2a2a2c] text-white py-24 px-6 md:px-12 w-full border-t border-white/10">
      <div className="max-w-[1068px] mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-[12px] font-semibold tracking-[0.1em] text-[#cccccc] uppercase mb-2 block">
            Portfolio
          </span>
          <h2 className="text-[34px] md:text-[40px] font-semibold tracking-tight text-white mb-3">
            Selected Work
          </h2>
          <p className="text-[17px] md:text-[21px] text-[#cccccc] max-w-2xl font-normal">
            Digital experiences designed to perform, convert, and scale.
          </p>
        </div>

        {/* Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {selectedHomepageProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#1d1d1f] p-6 rounded-[18px] border border-white/10 flex flex-col justify-between"
            >
              <div>
                {project.image ? (
                  <div className="relative aspect-[16/9] w-full rounded-[12px] overflow-hidden mb-6 bg-[#14121b] border border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.3)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain w-full h-full hover:scale-105 transition-transform duration-500 p-1.5"
                    />
                  </div>
                ) : null}

                <div className="flex justify-between items-center mb-3">
                  <span className="text-[12px] text-[#2997ff] font-semibold uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-[22px] font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-[14px] text-[#cccccc] leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono text-[#cccccc] bg-[#272729] px-2.5 py-1 rounded-[5px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <TextLink href={project.internalUrl} onDark className="text-[14px]">
                    View Project →
                  </TextLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 text-center md:text-left">
          <TextLink href="/work" onDark className="text-[15px]">
            Explore All Work →
          </TextLink>
        </div>
      </div>
    </section>
  );
}
