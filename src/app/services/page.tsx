import { Metadata } from "next";
import ServicesClient from "@/components/pages/ServicesClient";

export const metadata: Metadata = {
  title: "Web Design & Development Services | BeyondWebCo",
  description: "Explore high-performance web development, custom Next.js applications, mobile apps, SaaS platforms, and UI/UX engineering services by BeyondWebCo.",
  alternates: {
    canonical: "https://www.beyondwebco.com/services",
  },
  openGraph: {
    title: "Web Design & Development Services | BeyondWebCo",
    description: "Explore high-performance web development, custom Next.js applications, mobile apps, SaaS platforms, and UI/UX engineering services by BeyondWebCo.",
    url: "https://www.beyondwebco.com/services",
    siteName: "BeyondWebCo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BeyondWebCo Software Development & Web Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Development Services | BeyondWebCo",
    description: "Explore high-performance web development, custom Next.js applications, mobile apps, SaaS platforms, and UI/UX engineering services by BeyondWebCo.",
    images: ["/og-image.webp"],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
