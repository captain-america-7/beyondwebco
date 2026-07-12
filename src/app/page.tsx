import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import FeaturedWork from "@/components/sections/FeaturedWork";
import AboutPreview from "@/components/sections/AboutPreview";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedWork />
      <AboutPreview />
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
