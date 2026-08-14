import { TextLink } from "@/components/ui/Button";

const selectedHomepageProjects = [
  {
    title: "Volta EV Platform",
    category: "Electric Mobility & Technology",
    domain: "volta.beyondwebco.com",
    description: "A high-performance digital platform created for next-generation electric mobility.",
    internalUrl: "/work/volta",
    liveUrl: "https://volta.beyondwebco.com/",
    tags: ["Next.js", "React", "Edge Infrastructure"],
  },
  {
    title: "Sri Lakshmi Automobiles",
    category: "Automotive Business Platform",
    domain: "sri-lakshmi-automobiles.vercel.app",
    description: "A modern corporate and customer inquiry platform designed for visibility, speed, and conversion.",
    internalUrl: "/work/sri-lakshmi-automobiles",
    liveUrl: "https://sri-lakshmi-automobiles.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Pavani Studios",
    category: "Photography & Creative Studio",
    domain: "pavanistudios.shop",
    description: "A premium digital experience designed around photography, storytelling, and visual presentation.",
    internalUrl: "/work/pavani-studios",
    liveUrl: "https://pavanistudios.shop",
    tags: ["React", "Editorial UI", "Showcase"],
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
              className="bg-[#1d1d1f] p-8 rounded-[18px] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[12px] text-[#2997ff] font-semibold uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-[24px] font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-[15px] text-[#cccccc] leading-relaxed mb-6 font-normal">
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
