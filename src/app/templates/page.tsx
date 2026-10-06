import { Metadata } from "next";
import Section from "@/components/ui/Section";
import RollingButton from "@/components/ui/RollingButton";

export const metadata: Metadata = {
  title: "Templates & Kits",
  description: "Production-ready website templates and design engineering systems built with Next.js and Tailwind CSS.",
};

const templates = [
  { name: "Obsidian Agency", category: "Studio / Portfolio", tech: "Next.js 16 + Tailwind v4", price: "$79" },
  { name: "Vanguard SaaS", category: "B2B Software", tech: "Next.js 16 + Framer Motion", price: "$89" },
  { name: "Atelier Commerce", category: "Minimal eCommerce", tech: "Next.js 16 + Headless", price: "$99" },
];

export default function TemplatesPage() {
  return (
    <div className="pt-24 min-h-[70vh]">
      <Section>
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-[var(--muted)]">
            Design Systems
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mt-3 mb-6">
            Engineered <span className="font-serif italic font-normal text-neutral-300 dark:text-neutral-200">Templates.</span>
          </h1>
          <p className="text-lg text-[var(--muted)] leading-relaxed">
            Ultra-refined starter kits and website foundations crafted with the same obsessive standard as our bespoke client work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((tpl) => (
            <div key={tpl.name} className="agency-card p-8 flex flex-col justify-between h-[380px]">
              <div>
                <span className="text-xs font-mono text-[var(--muted)] block mb-1">{tpl.category}</span>
                <h2 className="text-2xl font-bold tracking-tight text-[var(--text)] mt-2">{tpl.name}</h2>
                <p className="text-xs font-mono text-[var(--muted)] mt-1">{tpl.tech}</p>
              </div>

              <div className="pt-6 border-t border-[var(--border)] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[var(--muted)] block">License</span>
                  <span className="text-xl font-bold text-[var(--text)]">{tpl.price}</span>
                </div>
                <RollingButton
                  text="Preview"
                  href="/contact"
                  variant="secondary"
                  className="h-[38px] px-5 text-xs font-medium"
                />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
