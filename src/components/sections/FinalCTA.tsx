import { Button } from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="bg-[#252527] text-white py-28 px-6 md:px-12 w-full text-center flex flex-col items-center justify-center">
      <div className="max-w-[800px] mx-auto flex flex-col items-center">
        <span className="text-[12px] font-semibold tracking-[0.1em] text-[#cccccc] uppercase mb-4">
          START A PROJECT
        </span>

        <h2 className="text-[34px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.07] tracking-[-0.02em] text-white mb-6">
          Have a project in mind?
        </h2>

        <p className="text-[17px] md:text-[21px] text-[#cccccc] max-w-xl mx-auto mb-10 font-normal leading-[1.47]">
          Let's build something fast, thoughtful, and engineered to scale.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button variant="primary" href="/contact">
            Start a Project →
          </Button>
          <Button variant="secondary-pill" href="/work" className="border-white/30 text-white hover:bg-white/10">
            Explore All Work
          </Button>
        </div>
      </div>
    </section>
  );
}
