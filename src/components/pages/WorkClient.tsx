import Image from "next/image";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    title: "Sri Lakshmi Automobiles",
    category: "Automotive Business Platform",
    description: "A sleek modern corporate website created for Sri Lakshmi Automobiles. Built with Next.js and Tailwind CSS, providing sub-second load times and seamless customer engagement.",
    image: "/projects/sri_lakshmi_automobiles.webp",
    tags: ["Next.js", "React", "SEO", "Responsive UI"],
  },
  {
    title: "Pavani Studios",
    category: "Creative Photography Showcase",
    description: "An elegant interactive portfolio website designed for Pavani Studios. Features full-screen gallery showcases, smooth micro-animations, and client inquiry workflows.",
    image: "/projects/pavani_studios.webp",
    tags: ["React", "Portfolio UI", "Optimized Media"],
  },
  {
    title: "Dr. Varun Healthcare",
    category: "Medical Clinic Website",
    description: "A professional medical consultation platform for Dr. Varun. Integrated with online appointment requests, patient educational resources, and local SEO optimizations.",
    image: "/projects/dr_varun.webp",
    tags: ["Next.js", "Healthcare", "Appointment Flow", "Local SEO"],
  },
  {
    title: "Savoria Gourmet Restaurant",
    category: "Hospitality & Restaurant Platform",
    description: "A vibrant dining experience website featuring online menu navigation, table reservation integration, and responsive mobile-first visual design.",
    image: "/projects/restaurant_website.webp",
    tags: ["React", "Reservation Flow", "Mobile UI", "Performance"],
  },
  {
    title: "Executive Developer Portfolio",
    category: "Personal Brand & Showcase",
    description: "A minimalist personal portfolio showcase featuring modern dark mode aesthetics, interactive case study cards, and direct contact scheduling.",
    image: "/projects/portfolio_website.webp",
    tags: ["Next.js", "TypeScript", "Micro-Animations"],
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
            Selected Portfolio.
          </h1>
          <p className="text-[17px] md:text-[21px] text-[#7a7a7a] leading-[1.47] max-w-2xl">
            Explore our recent web development and design projects. Each platform is built with custom code, precision engineering, and performance-first architecture.
          </p>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-20 mb-24">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-6 border-b border-[#e0e0e0] pb-16 last:border-0"
            >
              <div className="relative aspect-[16/9] w-full rounded-[18px] overflow-hidden product-shadow bg-[#f5f5f7] border border-[#e0e0e0]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={85}
                  sizes="(max-width: 980px) 100vw, 980px"
                  className="object-cover"
                  priority={idx < 2}
                />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <span className="text-[12px] text-[#0066cc] font-semibold tracking-wide uppercase">
                    {project.category}
                  </span>
                  <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1d1d1f] mt-1 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-[15px] text-[#7a7a7a] max-w-2xl">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[12px] font-mono text-[#7a7a7a] bg-[#f5f5f7] px-2.5 py-1 rounded-[5px] border border-[#e0e0e0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
