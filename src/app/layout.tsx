import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/loading-screen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.beyondwebco.com"),
  title: {
    default: "BeyondWebCo | Premium Web Design & Development Studio",
    template: "%s | BeyondWebCo",
  },
  description: "BeyondWebCo is a modern web design & engineering studio crafting high-performance, SEO-optimized, and scalable websites for growing businesses.",
  keywords: [
    "Web Design Studio",
    "Next.js Development",
    "React Web Apps",
    "SEO Optimization",
    "Custom Software Engineering",
    "High Performance Websites",
  ],
  authors: [{ name: "BeyondWebCo", url: "https://www.beyondwebco.com" }],
  creator: "BeyondWebCo",
  publisher: "BeyondWebCo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.beyondwebco.com",
    title: "BeyondWebCo | Premium Web Design & Development Studio",
    description: "BeyondWebCo is a modern web design & engineering studio crafting high-performance, SEO-optimized, and scalable websites for growing businesses.",
    siteName: "BeyondWebCo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BeyondWebCo Digital Studio Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BeyondWebCo | Premium Web Design & Development Studio",
    description: "BeyondWebCo is a modern web design & engineering studio crafting high-performance, SEO-optimized, and scalable websites for growing businesses.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.beyondwebco.com/#organization",
      name: "BeyondWebCo",
      url: "https://www.beyondwebco.com",
      logo: "https://www.beyondwebco.com/logo.png",
      sameAs: [
        "https://instagram.com/beyondwebco",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7993597172",
        contactType: "customer service",
        email: "beyondwebco@gmail.com",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.beyondwebco.com/#website",
      url: "https://www.beyondwebco.com",
      name: "BeyondWebCo",
      publisher: {
        "@id": "https://www.beyondwebco.com/#organization",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.beyondwebco.com/#service",
      name: "BeyondWebCo Web Development",
      image: "https://www.beyondwebco.com/og-image.png",
      priceRange: "$$$",
      telephone: "+91-7993597172",
      email: "beyondwebco@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} ${montserrat.variable} bg-surface text-on-surface antialiased min-h-screen flex flex-col`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] bg-primary text-black px-6 py-3 rounded-xl font-bold shadow-2xl transition-all"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LoadingScreen>
            <Navbar />
            <main id="main-content" className="flex-grow">{children}</main>
            <Footer />
          </LoadingScreen>
        </ThemeProvider>
      </body>
    </html>
  );
}
