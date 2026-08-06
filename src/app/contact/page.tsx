import { Metadata } from "next";
import ContactClient from "@/components/pages/ContactClient";

export const metadata: Metadata = {
  title: "Contact BeyondWebCo | Start Your Web Project Today",
  description: "Get in touch with BeyondWebCo to discuss your web design, Next.js web application, or custom software project. Receive a prompt proposal within 24 hours.",
  alternates: {
    canonical: "https://www.beyondwebco.com/contact",
  },
  openGraph: {
    title: "Contact BeyondWebCo | Start Your Web Project Today",
    description: "Get in touch with BeyondWebCo to discuss your web design, Next.js web application, or custom software project. Receive a prompt proposal within 24 hours.",
    url: "https://www.beyondwebco.com/contact",
    siteName: "BeyondWebCo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact BeyondWebCo Team",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact BeyondWebCo | Start Your Web Project Today",
    description: "Get in touch with BeyondWebCo to discuss your web design, Next.js web application, or custom software project. Receive a prompt proposal within 24 hours.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
