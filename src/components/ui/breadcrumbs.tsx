import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items || items.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => {
      // Ensure absolute URLs in JSON-LD for production structured data
      const url = item.href?.startsWith("http")
        ? item.href
        : item.href
        ? `https://www.beyondwebco.com${item.href}`
        : undefined;

      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        ...(url && { item: url }),
      };
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="w-full mb-8">
        <ol className="flex flex-wrap items-center gap-2 text-[12px] md:text-[14px] text-on-surface-variant font-medium tracking-wide uppercase">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="flex items-center gap-2">
                {isLast ? (
                  <span
                    aria-current="page"
                    className="text-on-surface opacity-90 truncate max-w-[200px] md:max-w-none"
                  >
                    {item.label}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.href || "#"}
                      className="hover:text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                    <ChevronRight
                      className="w-3 h-3 opacity-50 mx-1"
                      aria-hidden="true"
                    />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
