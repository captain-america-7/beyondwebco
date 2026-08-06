import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import FeaturedWork from "@/components/sections/FeaturedWork";
import AboutPreview from "@/components/sections/AboutPreview";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "BeyondWebCo | High-Performance Web Design & App Studio",
  description: "BeyondWebCo designs and builds ultra-fast, modern, SEO-optimized websites and web applications engineered to convert visitors and scale your business online.",
  alternates: {
    canonical: "https://www.beyondwebco.com",
  },
  openGraph: {
    title: "BeyondWebCo | High-Performance Web Design & App Studio",
    description: "BeyondWebCo designs and builds ultra-fast, modern, SEO-optimized websites and web applications engineered to convert visitors and scale your business online.",
    url: "https://www.beyondwebco.com",
    siteName: "BeyondWebCo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BeyondWebCo Web Studio Homepage Showcase",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BeyondWebCo | High-Performance Web Design & App Studio",
    description: "BeyondWebCo designs and builds ultra-fast, modern, SEO-optimized websites and web applications engineered to convert visitors and scale your business online.",
    images: ["/og-image.png"],
  },
};

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
