import { TextLink } from "@/components/ui/Button";

const capabilitiesPreview = [
  "Web Design",
  "Web Engineering",
  "Digital Products",
  "Performance",
  "SEO",
  "Cloud",
];

export default function BrandPositioning() {
  return (
    <section className="bg-[#ffffff] text-[#1d1d1f] py-20 px-6 md:px-12 w-full border-t border-[#e0e0e0]">
      <div className="max-w-[1068px] mx-auto">
        <span className="text-[12px] font-semibold tracking-[0.1em] text-[#7a7a7a] uppercase mb-4 block">
          Brand Positioning
        </span>

        <h2 className="text-[34px] sm:text-[44px] font-semibold tracking-[-0.02em] text-[#1d1d1f] mb-6 max-w-3xl">
          Design meets engineering.
        </h2>

        <p className="text-[17px] md:text-[21px] text-[#7a7a7a] leading-[1.47] max-w-3xl mb-10 font-normal">
          BeyondWebCo combines thoughtful design, modern web architecture, and performance engineering to create digital products that look exceptional and perform even better.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          {capabilitiesPreview.map((item, idx) => (
            <span
              key={idx}
              className="text-[13px] font-mono text-[#1d1d1f] bg-[#f5f5f7] px-4 py-2 rounded-[8px] border border-[#e0e0e0]"
            >
              {item}
            </span>
          ))}
        </div>

        <div>
          <TextLink href="/services" className="text-[15px]">
            Explore Services →
          </TextLink>
        </div>
      </div>
    </section>
  );
}
