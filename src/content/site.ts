export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  platform: string;
  href: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const siteConfig = {
  name: "BRAND",
  tagline: "Crafted Websites, Lasting Impressions",
  headline: "Crafted Websites, Lasting Impressions",
  subtext: "Premium websites crafted for bold brands.",
  description:
    "BRAND is an elite web design & engineering studio crafting high-performance, aesthetically arresting digital experiences and websites for forward-thinking brands worldwide.",
  url: "https://brandstudio.example.com",
  ogImage: "/og-image.webp",
  contact: {
    email: "hello@brandstudio.example",
    phone: "+91 98765 43210",
    address: "Based in India, serving worldwide",
  },
  socials: [
    { platform: "Instagram", href: "https://instagram.com", label: "@brandstudio" },
    { platform: "LinkedIn", href: "https://linkedin.com", label: "BRAND Studio" },
    { platform: "Twitter", href: "https://x.com", label: "@brandstudio" },
    { platform: "WhatsApp", href: "https://whatsapp.com", label: "+91 98765 43210" },
  ] as SocialLink[],
};

export const navigationLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Templates", href: "/templates" },
];

export const footerContent = {
  cta: {
    heading: "Create Bold. Deliver Better.",
    subheading: "Ready to elevate your brand presence with a tailored, high-converting digital experience?",
    primaryCta: { label: "Let's Connect", href: "/contact" },
    secondaryCta: { label: "Explore Works", href: "/works" },
  },
  columns: [
    {
      title: "Socials",
      links: [
        { label: "Instagram", href: "https://instagram.com", isExternal: true },
        { label: "LinkedIn", href: "https://linkedin.com", isExternal: true },
        { label: "Twitter (X)", href: "https://x.com", isExternal: true },
        { label: "WhatsApp", href: "https://whatsapp.com", isExternal: true },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Works", href: "/works" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Crafted Websites", href: "/services#crafted-websites" },
        { label: "Website Redesign", href: "/services#website-redesign" },
        { label: "eCommerce Stores", href: "/services#ecommerce" },
        { label: "CMS & Dynamic Sites", href: "/services#cms" },
        { label: "Performance Tuning", href: "/services#performance" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blogs", href: "/blogs" },
        { label: "Templates", href: "/templates" },
        { label: "FAQs", href: "/#faq" },
        { label: "Cookie Policy", href: "/privacy" },
      ],
    },
  ] as FooterSection[],
  contact: {
    title: "Contact",
    email: "hello@brandstudio.example",
    phone: "+91 98765 43210",
    location: "Based in India, serving worldwide",
  },
  copyright: `© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.`,
  oversizedWordmark: "BRAND",
};
