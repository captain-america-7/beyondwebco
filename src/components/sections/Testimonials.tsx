const testimonials = [
  {
    quote: "BeyondWebCo built a modern website for Sri Lakshmi Automobiles that perfectly represents our business. The team was responsive, delivered on time, and created a fast, professional website that our customers love.",
    author: "Sri Lakshmi Automobiles",
    role: "Automotive Business",
  },
  {
    quote: "Our portfolio finally feels premium. BeyondWebCo understood our creative vision and designed a website that beautifully showcases our photography and has already helped us attract new clients.",
    author: "Pavani Studios",
    role: "Photography Studio",
  },
  {
    quote: "The website exceeded my expectations. It is clean, professional, mobile-friendly, and makes it much easier for patients to learn about my services and get in touch.",
    author: "Dr. Varun Healthcare",
    role: "Healthcare Professional",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f5f5f7] text-[#1d1d1f] py-24 px-6 md:px-12 w-full border-t border-[#e0e0e0]">
      <div className="max-w-[1068px] mx-auto">
        <div className="mb-16">
          <span className="text-[12px] font-semibold tracking-[0.1em] text-[#7a7a7a] uppercase mb-2 block">
            Endorsements
          </span>
          <h2 className="text-[34px] md:text-[40px] font-semibold tracking-tight text-[#1d1d1f] mb-3">
            What our clients say.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-[18px] border border-[#e0e0e0] flex flex-col justify-between"
            >
              <p className="text-[15px] md:text-[17px] text-[#1d1d1f] leading-relaxed mb-8">
                {`"${test.quote}"`}
              </p>

              <div className="pt-4 border-t border-[#f0f0f0]">
                <h3 className="text-[14px] font-semibold text-[#1d1d1f]">
                  {test.author}
                </h3>
                <p className="text-[12px] text-[#7a7a7a]">
                  {test.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
