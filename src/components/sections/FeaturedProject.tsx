import { TextLink, Button } from "@/components/ui/Button";

export default function FeaturedProject() {
  return (
    <section className="bg-[#14121b] text-white py-20 px-6 md:px-12 w-full border-t border-white/10">
      <div className="max-w-[1068px] mx-auto">
        <div className="w-full rounded-2xl overflow-hidden bg-[#1d1d1f] text-white border border-[#333333] p-8 md:p-12 text-left shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-6 mb-8 gap-4">
            <div>
              <span className="text-[12px] font-mono text-[#2997ff] uppercase tracking-wider block mb-1">
                Featured Flagship Platform
              </span>
              <h2 className="text-[28px] md:text-[36px] font-semibold text-white">
                Volta EV Platform
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" href="/work/volta" className="text-[14px] px-4 py-2">
                Explore Project →
              </Button>
              <TextLink href="https://volta.beyondwebco.com/" external onDark className="text-[15px]">
                Visit Live Site ↗
              </TextLink>
            </div>
          </div>

          <p className="text-[16px] md:text-[18px] text-[#cccccc] mb-8 font-normal max-w-3xl">
            A high-performance platform built for next-generation electric mobility.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[13px]">
            <div className="bg-[#272729] p-4 rounded-xl border border-white/5 font-mono text-[#cccccc]">
              Next.js
            </div>
            <div className="bg-[#272729] p-4 rounded-xl border border-white/5 font-mono text-[#cccccc]">
              React
            </div>
            <div className="bg-[#272729] p-4 rounded-xl border border-white/5 font-mono text-[#cccccc]">
              Edge Infrastructure
            </div>
            <div className="bg-[#272729] p-4 rounded-xl border border-white/5 font-mono text-[#cccccc]">
              Performance Engineering
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
