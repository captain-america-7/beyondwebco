import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig, footerContent } from "@/content/site";
import RollingButton from "@/components/ui/RollingButton";

export function Footer() {
  return (
    <footer className="relative w-full border-t border-[var(--border)] bg-[var(--surface)] text-[var(--text)] overflow-hidden transition-colors duration-300">
      {/* Background ambient radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[var(--color-accent-blue)]/5 via-transparent to-transparent blur-[120px] pointer-events-none" />

      {/* Final CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-20 border-b border-[var(--border)]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase border border-[var(--border-strong)] bg-[var(--bg)] text-[var(--muted)] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for New Projects
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Create <span className="font-serif italic font-normal text-neutral-300 dark:text-neutral-200">Bold.</span>
              <br />
              Deliver <span className="font-serif italic font-normal text-neutral-300 dark:text-neutral-200">Better.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[var(--muted)] max-w-xl">
              {footerContent.cta.subheading}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <RollingButton
              text={footerContent.cta.primaryCta.label}
              href={footerContent.cta.primaryCta.href}
              variant="primary"
              className="h-[48px] px-8 text-sm font-semibold"
              icon={<ArrowUpRight className="w-4 h-4 ml-1" />}
            />
            <RollingButton
              text={footerContent.cta.secondaryCta.label}
              href={footerContent.cta.secondaryCta.href}
              variant="secondary"
              className="h-[48px] px-8 text-sm font-semibold"
            />
          </div>
        </div>
      </div>

      {/* Main Footer Navigation Columns */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Socials */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-widest text-[var(--muted)] mb-5">
              Socials
            </h3>
            <ul className="space-y-3">
              {footerContent.columns[0].links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-widest text-[var(--muted)] mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {footerContent.columns[1].links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-widest text-[var(--muted)] mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {footerContent.columns[2].links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-widest text-[var(--muted)] mb-5">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerContent.columns[3].links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-1">
            <h3 className="text-xs uppercase font-mono tracking-widest text-[var(--muted)] mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-[var(--muted)]">
              <li>
                <a
                  href={`mailto:${footerContent.contact.email}`}
                  className="inline-flex items-center gap-2 hover:text-[var(--text)] transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>{footerContent.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footerContent.contact.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 hover:text-[var(--text)] transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>{footerContent.contact.phone}</span>
                </a>
              </li>
              <li className="inline-flex items-center gap-2 pt-1 text-xs">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{footerContent.contact.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Status Row */}
        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[var(--text)] tracking-wider">{siteConfig.name}</span>
            <span>•</span>
            <span>{footerContent.copyright}</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[var(--text)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--text)] transition-colors">
              Terms of Service
            </Link>
            <span>All Systems Operational</span>
          </div>
        </div>
      </div>

      {/* Oversized faint wordmark at bottom */}
      <div
        className="w-full text-center overflow-hidden pointer-events-none select-none pb-2 pt-6 opacity-[0.035] dark:opacity-[0.05] transition-opacity"
        aria-hidden="true"
      >
        <span className="inline-block text-[19vw] font-black tracking-tighter uppercase leading-none text-[var(--text)]">
          {footerContent.oversizedWordmark}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
