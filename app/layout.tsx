import type { Metadata } from "next";
import { Fraunces, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  weight: ["400", "600", "700"],
});

export const viewport = {
  themeColor: "#F26B2A",
};

export const metadata: Metadata = {
  title: "BeyondWebCo — Premium Web Design & Development Agency",
  description: "Senior designers and engineers building high-performance custom web applications, SaaS platforms, and conversion-focused business websites.",
  keywords: ["web design agency", "custom web development", "SaaS development", "next.js agency", "React development", "BeyondWebCo", "startup MVP builder"],
  authors: [{ name: "BeyondWebCo Team" }],
  openGraph: {
    title: "BeyondWebCo — Premium Web Design & Development Agency",
    description: "Senior designers and engineers building high-performance custom web applications, SaaS platforms, and conversion-focused business websites.",
    url: "https://beyondwebco.com",
    siteName: "BeyondWebCo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BeyondWebCo — Premium Web Design & Development Agency",
    description: "Senior designers and engineers building high-performance custom web applications, SaaS platforms, and conversion-focused business websites.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${dmSans.variable} ${caveat.variable} font-sans antialiased`}
      >
        <Header />
        {children}
        <Footer />

        {/* Floating WhatsApp Action Trigger */}
        <a
          href="https://wa.me/18883219320"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          title="Chat on WhatsApp"
          className="wa-float-btn"
          style={{
            position: "fixed",
            bottom: "1.75rem",
            left: "1.75rem",
            zIndex: 999,
            width: "58px",
            height: "58px",
            borderRadius: "50%",
            background: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(37, 211, 102, 0.45), 0 2px 8px rgba(0,0,0,0.18)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              position: "absolute",
              inset: "-4px",
              borderRadius: "50%",
              background: "rgba(37, 211, 102, 0.35)",
              animation: "waPulse 2s ease-in-out infinite",
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 32 32"
            fill="white"
            style={{ position: "relative", zIndex: 1 }}
          >
            <path d="M16.003 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.35.629 4.552 1.724 6.456L2.667 29.333l7.09-1.7A13.27 13.27 0 0 0 16.003 29.333C23.37 29.333 29.333 23.364 29.333 16S23.37 2.667 16.003 2.667Zm0 2.4c5.92 0 10.93 5.01 10.93 10.933 0 5.922-5.01 10.933-10.93 10.933a10.9 10.9 0 0 1-5.554-1.516l-.397-.236-4.209 1.008.994-4.094-.259-.41A10.88 10.88 0 0 1 5.07 16c0-5.922 5.01-10.933 10.933-10.933Zm-3.347 5.6c-.23 0-.6.086-.916.43-.314.344-1.2 1.173-1.2 2.86s1.23 3.32 1.402 3.548c.172.23 2.393 3.803 5.893 5.178 2.918 1.148 3.505.92 4.137.862.63-.058 2.034-.83 2.32-1.634.286-.804.286-1.492.2-1.635-.086-.143-.314-.23-.658-.4-.343-.172-2.032-1.002-2.346-1.117-.315-.115-.545-.172-.775.172-.23.343-.887 1.116-1.087 1.347-.2.23-.4.258-.744.086-.343-.172-1.45-.535-2.76-1.705-1.02-.912-1.71-2.038-1.91-2.382-.2-.343-.021-.529.15-.7.155-.154.344-.4.516-.6.17-.2.228-.344.342-.573.115-.23.058-.43-.029-.601-.086-.172-.769-1.867-1.064-2.553-.274-.654-.555-.567-.775-.577l-.659-.01Z" />
          </svg>
        </a>

        {/* Inline CSS for Float Hover & Animations */}
        <style dangerouslySetInnerHTML={{ __html: `
          .wa-float-btn::before {
            content: "Chat with us";
            position: absolute;
            left: calc(100% + 12px);
            top: 50%;
            transform: translateY(-50%);
            background: #111;
            color: #fff;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 5px 10px;
            border-radius: 6px;
            white-space: nowrap;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s ease;
            font-family: system-ui, sans-serif;
          }
          .wa-float-btn:hover::before {
            opacity: 1;
          }
          .wa-float-btn:hover {
            transform: scale(1.1) !important;
            box-shadow: 0 6px 28px rgba(37, 211, 102, 0.55), 0 3px 12px rgba(0,0,0,0.22) !important;
          }
          @keyframes waPulse {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.3); opacity: 0; }
          }
        `}} />
      </body>
    </html>
  );
}
