import { Button, TextLink } from "@/components/ui/Button";

const projects = [
  {
    title: "Volta EV Platform",
    category: "Electric Mobility & Tech Web App",
    domain: "volta.beyondwebco.com",
    description: "A high-performance digital platform built for next-generation electric mobility, featuring sub-second interactive load times and responsive design.",
    url: "https://volta.beyondwebco.com/",
    tags: ["Next.js", "React 19", "Edge CDN", "Interactive UI"],
  },
  {
    title: "Sri Lakshmi Automobiles",
    category: "Automotive Business & Service Portal",
    domain: "sri-lakshmi-automobiles.vercel.app",
    description: "Corporate website and service inquiry portal built for Sri Lakshmi Automobiles, providing high SEO visibility and streamlined customer interaction.",
    url: "https://sri-lakshmi-automobiles.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
  },
  {
    title: "Aura Luxe Interior Design",
    category: "Luxury Design Studio Showcase",
    domain: "aura-luxe-interior-design.vercel.app",
    description: "An editorial portfolio showcase for a high-end interior design studio, crafted with spatial presentation and elegant typography.",
    url: "https://aura-luxe-interior-design.vercel.app/",
    tags: ["React", "Editorial UI", "Portfolio", "Animations"],
  },
  {
    title: "Forenmed Advisory",
    category: "Forensic & Medical Advisory Platform",
    domain: "forenmed-advisory.vercel.app",
    description: "A specialized professional consulting platform built for medical-legal advisory services, case scheduling, and client communication.",
    url: "https://forenmed-advisory.vercel.app/",
    tags: ["Next.js", "SEO", "Consulting Portal", "Security"],
  },
];

export default function WorkClient() {
  return (
    <div className="bg-[#ffffff] text-[#1d1d1f] pt-28 pb-24 px-6 md:px-12 w-full min-h-screen">
      <div className="max-w-[980px] mx-auto">
        {/* Page Header */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-[12px] font-semibold tracking-[0.1em] text-[#7a7a7a] uppercase mb-3 block">
            Portfolio
          </span>
          <h1 className="text-[34px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.07] tracking-[-0.02em] text-[#1d1d1f] mb-6">
            Selected Portfolio & Projects.
          </h1>
          <p className="text-[17px] md:text-[21px] text-[#7a7a7a] leading-[1.47] max-w-2xl">
            Explore our recent web development and engineering projects. Each platform is built with custom code, precision engineering, and performance-first architecture.
          </p>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-12 mb-24">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#f5f5f7] p-8 md:p-10 rounded-[18px] border border-[#e0e0e0] flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                  <span className="text-[12px] text-[#0066cc] font-semibold tracking-wide uppercase">
                    {project.category}
                  </span>
                  <span className="text-[12px] font-mono text-[#7a7a7a] bg-white px-3 py-1 rounded-[5px] border border-[#e0e0e0]">
                    {project.domain}
                  </span>
                </div>

                <h2 className="text-[28px] md:text-[32px] font-semibold text-[#1d1d1f] mb-3">
                  {project.title}
                </h2>
                <p className="text-[15px] md:text-[17px] text-[#7a7a7a] leading-relaxed max-w-3xl mb-6">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#e0e0e0] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[12px] font-mono text-[#1d1d1f] bg-white px-2.5 py-1 rounded-[5px] border border-[#e0e0e0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <TextLink href={project.url} external className="text-[15px] font-medium">
                  Visit Live Site →
                </TextLink>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#272729] text-white p-12 rounded-[18px] text-center flex flex-col items-center">
          <h2 className="text-[28px] md:text-[34px] font-semibold mb-4">
            Have a project in mind?
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#cccccc] max-w-xl mx-auto mb-8">
            Whether you need a complete website redesign, a custom web app, or an enterprise landing page, BeyondWebCo delivers results on time and on budget.
          </p>
          <Button variant="primary" href="/contact">
            Discuss Your Project
          </Button>
        </div>
      </div>
    </div>
  );
}
