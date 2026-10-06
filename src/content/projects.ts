export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  year: string;
  image: string;
  url?: string;
  metrics?: string;
}

export const featuredProjects: Project[] = [
  {
    id: "apex-studio",
    title: "Apex Studio",
    category: "Architecture & Design",
    description: "Digital flagship platform crafted for an elite architectural studio with immersive spatial showcases.",
    year: "2026",
    image: "/auraluxe.avif",
    metrics: "3.4x Dwell Time",
  },
  {
    id: "lumina-cloud",
    title: "Lumina Intelligence",
    category: "AI & Cloud Infrastructure",
    description: "Next-generation dashboard and marketing portal for real-time edge computing solutions.",
    year: "2026",
    image: "/nactura.avif",
    metrics: "99 Core Web Vitals",
  },
  {
    id: "veloce-mobility",
    title: "Veloce Mobility",
    category: "Automotive & Fleet",
    description: "Ultra-sleek vehicle configurator and reservation system with GPU-accelerated micro-animations.",
    year: "2025",
    image: "/pattepastries.avif",
    metrics: "+62% Preorders",
  },
  {
    id: "solstice-watch",
    title: "Solstice Horology",
    category: "Luxury eCommerce",
    description: "Bespoke timepieces rendered with interactive 3D perspective details and frictionless checkout.",
    year: "2025",
    image: "/auraluxe.avif",
    metrics: "1.8s Load Speed",
  },
  {
    id: "zenith-capital",
    title: "Zenith Capital",
    category: "Venture Fund",
    description: "Clean typography-first portfolio platform showcasing high-impact global technology investments.",
    year: "2025",
    image: "/nactura.avif",
    metrics: "Zero CLS",
  },
  {
    id: "kinetics-fit",
    title: "Kinetics Performance",
    category: "Athletic Technology",
    description: "High-energy interactive web app for biometric athletic tracking and membership enrollment.",
    year: "2025",
    image: "/pattepastries.avif",
    metrics: "+48% Conversion",
  },
  {
    id: "prism-audio",
    title: "Prism Acoustics",
    category: "High-Fidelity Sound",
    description: "Minimalist soundscape exploration platform engineered for audiophile hardware reveals.",
    year: "2025",
    image: "/auraluxe.avif",
    metrics: "Award Winner",
  },
  {
    id: "atelier-forma",
    title: "Atelier Forma",
    category: "Ceramics & Homeware",
    description: "Editorial gallery and direct-to-consumer store with nuanced editorial styling.",
    year: "2024",
    image: "/nactura.avif",
    metrics: "+85% Mobile Sales",
  },
  {
    id: "strata-energy",
    title: "Strata Energy",
    category: "Renewable Tech",
    description: "Interactive sustainability dashboard and investor briefing site with live carbon telemetry.",
    year: "2024",
    image: "/pattepastries.avif",
    metrics: "Global Reach",
  },
  {
    id: "orbit-agency",
    title: "Orbit Collective",
    category: "Creative Production",
    description: "Dynamic showcase featuring fluid page transitions and bespoke typography systems.",
    year: "2024",
    image: "/auraluxe.avif",
    metrics: "Top Showcase",
  },
];
