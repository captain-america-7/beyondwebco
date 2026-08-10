import Image from "next/image";
import { TextLink } from "@/components/ui/Button";

const projects = [
  {
    title: "Sri Lakshmi Automobiles",
    category: "Automotive Platform & Business Site",
    description: "A fast, SEO-optimized business portal built to drive customer inquiries and showcase services with clarity.",
    image: "/projects/sri_lakshmi_automobiles.webp",
    href: "/work",
  },
  {
    title: "Pavani Studios",
    category: "Photography & Creative Portfolio",
    description: "A sleek, photography-first showcase crafted to highlight high-resolution visual work with fluid performance.",
    image: "/projects/pavani_studios.webp",
    href: "/work",
  },
  {
    title: "Dr. Varun Healthcare",
    category: "Medical Clinic & Patient Portal",
    description: "Clean healthcare architecture featuring instant appointment scheduling and accessible information architecture.",
    image: "/projects/dr_varun.webp",
    href: "/work",
  },
];

export default function FeaturedWork() {
  return (
    <section className="bg-[#272729] text-white py-24 px-6 md:px-12 w-full">
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

        {/* Alternating Project Showcases */}
        <div className="flex flex-col gap-24">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-8 items-start border-b border-white/10 pb-16 last:border-0 last:pb-0"
            >
              {/* Project Image Frame */}
              <div className="w-full relative aspect-[16/9] rounded-lg overflow-hidden product-shadow bg-[#1d1d1f]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={85}
                  sizes="(max-width: 1068px) 100vw, 1068px"
                  className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              {/* Project Metadata & Link */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
                <div>
                  <span className="text-[12px] text-[#2997ff] font-medium tracking-wide uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-[24px] md:text-[28px] font-semibold text-white mt-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[15px] md:text-[17px] text-[#cccccc] max-w-2xl">
                    {project.description}
                  </p>
                </div>
                <TextLink href={project.href} onDark className="flex-shrink-0 mt-2 md:mt-0">
                  View case study →
                </TextLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
