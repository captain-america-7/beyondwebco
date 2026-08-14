const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Cloudflare",
  "Vercel",
  "AWS",
];

export default function Technology() {
  return (
    <section className="bg-[#f5f5f7] text-[#1d1d1f] py-20 px-6 md:px-12 w-full border-t border-[#e0e0e0]">
      <div className="max-w-[1068px] mx-auto text-center md:text-left">
        <span className="text-[12px] font-semibold tracking-[0.1em] text-[#7a7a7a] uppercase mb-3 block">
          Technology Architecture
        </span>
        <h2 className="text-[28px] md:text-[34px] font-semibold tracking-tight text-[#1d1d1f] mb-8">
          Engineered on modern web standards.
        </h2>

        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-[13px] font-mono font-medium text-[#1d1d1f] bg-white px-4 py-2.5 rounded-[8px] border border-[#e0e0e0] shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
