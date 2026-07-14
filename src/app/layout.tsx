import type { Metadata } from "next";
import { Inter, Inter_Tight, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/loading-screen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.beyondwebco.com"),
  title: "BeyondWebCo | Premium Web Design & Development",
  description: "We build fast, modern, SEO-friendly websites that help businesses grow online.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.beyondwebco.com",
    title: "BeyondWebCo | Premium Web Design & Development",
    description: "We build fast, modern, SEO-friendly websites that help businesses grow online.",
    siteName: "BeyondWebCo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BeyondWebCo Social Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BeyondWebCo | Premium Web Design & Development",
    description: "We build fast, modern, SEO-friendly websites that help businesses grow online.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL,GRAD,opsz@100..700,0..1,-50..200,20..48&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} ${montserrat.variable} bg-surface text-on-surface antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LoadingScreen>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </LoadingScreen>
        </ThemeProvider>
      </body>
    </html>
  );
}
