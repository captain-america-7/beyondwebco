import { Metadata } from "next";
import AboutClient from "@/components/pages/AboutClient";

export const metadata: Metadata = {
  title: "About BeyondWebCo | Senior Web & Software Engineers",
  description: "Learn about BeyondWebCo, an engineering-first web development studio building custom digital platforms, web apps, and SEO-optimized sites for growth brands.",
  alternates: {
    canonical: "https://www.beyondwebco.com/about",
  },
  openGraph: {
    title: "About BeyondWebCo | Senior Web & Software Engineers",
    description: "Learn about BeyondWebCo, an engineering-first web development studio building custom digital platforms, web apps, and SEO-optimized sites for growth brands.",
    url: "https://www.beyondwebco.com/about",
    siteName: "BeyondWebCo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About BeyondWebCo Web Engineering Studio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About BeyondWebCo | Senior Web & Software Engineers",
    description: "Learn about BeyondWebCo, an engineering-first web development studio building custom digital platforms, web apps, and SEO-optimized sites for growth brands.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
