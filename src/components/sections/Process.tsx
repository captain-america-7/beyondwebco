const steps = [
  {
    num: "01",
    title: "Understand",
    desc: "We study the business, users, objectives, competition, and technical requirements.",
  },
  {
    num: "02",
    title: "Design",
    desc: "We create the visual direction, interaction system, and responsive experience.",
  },
  {
    num: "03",
    title: "Build",
    desc: "We engineer fast, scalable, maintainable digital products using modern web technology.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "We test, optimize, deploy, monitor, and continuously improve performance.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#ffffff] text-[#1d1d1f] py-24 px-6 md:px-12 w-full border-t border-[#e0e0e0]">
      <div className="max-w-[1068px] mx-auto">
        <div className="mb-16">
          <span className="text-[12px] font-semibold tracking-[0.1em] text-[#7a7a7a] uppercase mb-2 block">
            Methodology
          </span>
          <h2 className="text-[34px] md:text-[40px] font-semibold tracking-tight text-[#1d1d1f] mb-3">
            How we build.
          </h2>
          <p className="text-[17px] md:text-[21px] text-[#7a7a7a] max-w-xl">
            A disciplined engineering process designed for precision and predictability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col border-t border-[#e0e0e0] pt-6"
            >
              <span className="text-[14px] font-mono text-[#0066cc] font-semibold mb-2">
                {step.num}
              </span>
              <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-3">
                {step.title}
              </h3>
              <p className="text-[14px] text-[#7a7a7a] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
