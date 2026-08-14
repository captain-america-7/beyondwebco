import { TextLink } from "@/components/ui/Button";

export default function AboutPreview() {
  return (
    <section className="bg-[#2a2a2c] text-white py-24 px-6 md:px-12 w-full">
      <div className="max-w-[980px] mx-auto text-center md:text-left">
        <span className="text-[12px] font-semibold tracking-[0.1em] text-[#cccccc] uppercase mb-4 block">
          Philosophy
        </span>

        <h2 className="text-[34px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.07] tracking-[-0.02em] text-white mb-8 max-w-3xl">
          Good websites should feel obvious.
        </h2>

        <p className="text-[17px] md:text-[24px] font-light leading-[1.5] text-[#cccccc] max-w-3xl mb-12">
          We remove unnecessary complexity and focus on what matters — clarity, speed, usability, storytelling, and engineering that can scale.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-12 text-left">
          <div>
            <h3 className="text-[17px] font-semibold text-white mb-2">
              Performance First
            </h3>
            <p className="text-[14px] text-[#cccccc] leading-relaxed">
              Fast digital experiences engineered around real-world performance.
            </p>
          </div>
          <div>
            <h3 className="text-[17px] font-semibold text-white mb-2">
              Design With Purpose
            </h3>
            <p className="text-[14px] text-[#cccccc] leading-relaxed">
              Every interaction and visual decision exists for a reason.
            </p>
          </div>
          <div>
            <h3 className="text-[17px] font-semibold text-white mb-2">
              Scale Ready
            </h3>
            <p className="text-[14px] text-[#cccccc] leading-relaxed">
              Modern architecture designed to grow alongside the business.
            </p>
          </div>
        </div>

        <div className="mt-12 text-left">
          <TextLink href="/about" onDark className="text-[15px]">
            About BeyondWebCo →
          </TextLink>
        </div>
      </div>
    </section>
  );
}
