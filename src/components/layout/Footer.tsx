import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[#333333] border-t border-[#e0e0e0] py-16 px-6 md:px-12 w-full mt-auto">
      <div className="max-w-[980px] mx-auto">
        {/* Upper Brand / Info Note */}
        <div className="border-b border-[#e0e0e0] pb-6 mb-8 text-[12px] text-[#7a7a7a] leading-relaxed">
          <p>
            BeyondWebCo is a modern web design and engineering studio. We build ultra-fast, SEO-optimized, and highly responsive digital products and web applications for ambitious businesses worldwide.
          </p>
        </div>

        {/* Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-[#e0e0e0] text-[12px]">
          {/* Solutions Column */}
          <div>
            <h3 className="font-semibold text-[12px] text-[#1d1d1f] mb-3 tracking-tight">
              Solutions & Services
            </h3>
            <ul className="flex flex-col space-y-1.5 text-[#333333]">
              <li>
                <Link href="/services" className="hover:text-[#0066cc] transition-colors">
                  Web Design & Architecture
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#0066cc] transition-colors">
                  Next.js Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#0066cc] transition-colors">
                  React Applications
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#0066cc] transition-colors">
                  SEO & Speed Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#0066cc] transition-colors">
                  Custom Software Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Portfolio Column */}
          <div>
            <h3 className="font-semibold text-[12px] text-[#1d1d1f] mb-3 tracking-tight">
              Selected Work
            </h3>
            <ul className="flex flex-col space-y-1.5 text-[#333333]">
              <li>
                <Link href="/work" className="hover:text-[#0066cc] transition-colors">
                  All Case Studies
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-[#0066cc] transition-colors">
                  Digital Platforms
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-[#0066cc] transition-colors">
                  High-Performance Web Apps
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-[12px] text-[#1d1d1f] mb-3 tracking-tight">
              Studio
            </h3>
            <ul className="flex flex-col space-y-1.5 text-[#333333]">
              <li>
                <Link href="/about" className="hover:text-[#0066cc] transition-colors">
                  About BeyondWebCo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#0066cc] transition-colors">
                  Start a Project
                </Link>
              </li>
              <li>
                <a
                  href="https://instagram.com/beyondwebco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0066cc] transition-colors"
                >
                  Instagram @beyondwebco
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div>
            <h3 className="font-semibold text-[12px] text-[#1d1d1f] mb-3 tracking-tight">
              Direct Contact
            </h3>
            <ul className="flex flex-col space-y-1.5 text-[#333333]">
              <li>
                <a
                  href="mailto:beyondwebco@gmail.com"
                  className="hover:text-[#0066cc] transition-colors"
                >
                  beyondwebco@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917993597172"
                  className="hover:text-[#0066cc] transition-colors"
                >
                  +91 7993597172
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Fine Print Row */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-[#7a7a7a]">
          <div className="flex items-center gap-2">
            <Image
              src="/arunchalam.webp"
              alt="BeyondWebCo Logo"
              width={16}
              height={16}
              className="w-4 h-4 object-contain opacity-70"
            />
            <span>Copyright © {new Date().getFullYear()} BeyondWebCo Inc. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <span className="hover:text-[#1d1d1f]">Privacy Policy</span>
            <span className="hover:text-[#1d1d1f]">Terms of Service</span>
            <span className="hover:text-[#1d1d1f]">Site Map</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
