import { TextLink } from "@/components/ui/Button";

const projects = [
  {
    title: "Volta EV Platform",
    category: "Electric Mobility & Tech Web App",
    domain: "volta.beyondwebco.com",
    description: "A high-performance digital platform built for next-generation electric mobility, featuring sub-second interactive load times and responsive design.",
    url: "https://volta.beyondwebco.com/",
    tags: ["Next.js", "React 19", "Edge CDN"],
  },
  {
    title: "Sri Lakshmi Automobiles",
    category: "Automotive Business & Service Portal",
    domain: "sri-lakshmi-automobiles.vercel.app",
    description: "Corporate website and service inquiry portal built for Sri Lakshmi Automobiles, providing high SEO visibility and streamlined customer interaction.",
    url: "https://sri-lakshmi-automobiles.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Aura Luxe Interior Design",
    category: "Luxury Design Studio Showcase",
    domain: "aura-luxe-interior-design.vercel.app",
    description: "An editorial portfolio showcase for a high-end interior design studio, crafted with spatial presentation and elegant typography.",
    url: "https://aura-luxe-interior-design.vercel.app/",
    tags: ["React", "Editorial UI", "Portfolio"],
  },
  {
    title: "Forenmed Advisory",
    category: "Forensic & Medical Advisory Platform",
    domain: "forenmed-advisory.vercel.app",
    description: "A specialized professional consulting platform built for medical-legal advisory services, case scheduling, and client communication.",
    url: "https://forenmed-advisory.vercel.app/",
    tags: ["Next.js", "SEO", "Consulting Portal"],
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

        {/* Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#1d1d1f] p-8 rounded-[18px] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[12px] text-[#2997ff] font-semibold uppercase tracking-wide">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#cccccc] bg-white/5 px-2.5 py-1 rounded-[5px] border border-white/10">
                    {project.domain}
                  </span>
                </div>

                <h3 className="text-[24px] font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-[15px] text-[#cccccc] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
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
                  <TextLink href={project.url} external onDark className="text-[15px]">
                    Visit Live Site →
                  </TextLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
