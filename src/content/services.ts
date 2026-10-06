export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  tags: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "crafted-websites",
    title: "Crafted Websites",
    iconName: "Monitor",
    description: "Bespoke digital flagships tailored with unmatched typography and interaction design.",
    tags: ["Custom Code", "Responsive", "Accessible"],
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    iconName: "RefreshCw",
    description: "Transform outdated sites into conversion engines with modern UX and lightning speed.",
    tags: ["Rebrand", "Modernization", "Conversion"],
  },
  {
    id: "ecommerce-design",
    title: "eCommerce Website Design",
    iconName: "ShoppingBag",
    description: "High-converting online stores built for seamless checkout and memorable brand polish.",
    tags: ["Shopify", "Headless", "High-Volume"],
  },
  {
    id: "cms-dynamic",
    title: "CMS & Dynamic Websites",
    iconName: "FileCode",
    description: "Empower your team with intuitive content workflows on modern headless platforms.",
    tags: ["Sanity", "Strapi", "MDX"],
  },
  {
    id: "landing-pages",
    title: "Landing Pages & Microsites",
    iconName: "Layout",
    description: "Focused campaign pages optimized for maximum click-through rates and leads.",
    tags: ["A/B Testing", "High-Converting", "Analytics"],
  },
  {
    id: "consistent-identity",
    title: "Consistent Identity",
    iconName: "Palette",
    description: "Design systems, typography pairings, and digital guidelines that reinforce brand authority.",
    tags: ["Design System", "Style Guide", "Tokens"],
  },
  {
    id: "motion-design",
    title: "Motion & Interaction Design",
    iconName: "Sparkles",
    description: "Delightful, GPU-accelerated micro-animations that make interfaces feel alive.",
    tags: ["Framer Motion", "Physics", "Zero Lag"],
  },
  {
    id: "ux-strategy",
    title: "UX Centric Strategy",
    iconName: "Target",
    description: "Customer journeys mapped to maximize dwell time, engagement, and conversion.",
    tags: ["User Flow", "Wireframing", "Architecture"],
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization",
    iconName: "Zap",
    description: "Core Web Vitals optimization achieving sub-second loads and zero layout shifts.",
    tags: ["95+ Lighthouse", "Edge Caching", "AVIF/WebP"],
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Ongoing Support",
    iconName: "ShieldCheck",
    description: "Proactive maintenance, security patches, and iteration for growing teams.",
    tags: ["Uptime", "Security", "Continuous CI/CD"],
  },
];
