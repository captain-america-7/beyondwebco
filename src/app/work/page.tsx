import { Metadata } from "next";
import WorkClient from "@/components/pages/WorkClient";

export const metadata: Metadata = {
  title: "Featured Case Studies & Portfolio | BeyondWebCo",
  description: "Explore BeyondWebCo's portfolio of custom websites, high-speed web apps, client case studies, and digital transformations for businesses worldwide.",
  alternates: {
    canonical: "https://www.beyondwebco.com/work",
  },
  openGraph: {
    title: "Featured Case Studies & Portfolio | BeyondWebCo",
    description: "Explore BeyondWebCo's portfolio of custom websites, high-speed web apps, client case studies, and digital transformations for businesses worldwide.",
    url: "https://www.beyondwebco.com/work",
    siteName: "BeyondWebCo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BeyondWebCo Web Engineering Case Studies",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Featured Case Studies & Portfolio | BeyondWebCo",
    description: "Explore BeyondWebCo's portfolio of custom websites, high-speed web apps, client case studies, and digital transformations for businesses worldwide.",
    images: ["/og-image.webp"],
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
