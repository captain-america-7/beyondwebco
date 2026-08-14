const faqs = [
  {
    q: "How long does a typical web project take?",
    a: "Most website and web application builds take between 2 to 6 weeks from initial architecture planning through deployment.",
  },
  {
    q: "Do you work with startups and enterprise clients?",
    a: "Yes. We partner with growing startups, local businesses, and enterprise teams seeking high-performance Next.js applications.",
  },
  {
    q: "What technical stack do you utilize?",
    a: "Our core stack is Next.js, React, TypeScript, Tailwind CSS, and Edge infrastructure, engineered strictly for maximum performance.",
  },
  {
    q: "How do you handle website maintenance and post-launch?",
    a: "We offer continuous performance optimization, security updates, and technical maintenance packages.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#ffffff] text-[#1d1d1f] py-24 px-6 md:px-12 w-full border-t border-[#e0e0e0]">
      <div className="max-w-[1068px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <span className="text-[12px] font-semibold tracking-[0.1em] text-[#7a7a7a] uppercase mb-2 block">
            Questions
          </span>
          <h2 className="text-[34px] font-semibold tracking-tight text-[#1d1d1f] mb-3">
            Frequently asked questions.
          </h2>
          <p className="text-[15px] text-[#7a7a7a] leading-relaxed">
            Everything you need to know about our engineering methodology, timelines, and deliverables.
          </p>
        </div>

        <div className="md:col-span-8 flex flex-col divide-y divide-[#e0e0e0]">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-6 first:pt-0 last:pb-0">
              <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">
                {faq.q}
              </h3>
              <p className="text-[15px] text-[#7a7a7a] leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
