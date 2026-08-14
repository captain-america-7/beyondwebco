import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary-pill" | "dark-utility" | "pearl-capsule";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  href,
  external,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center transition-transform duration-150 active:scale-[0.95] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] font-normal cursor-pointer select-none text-center";

  let variantStyles = "";

  switch (variant) {
    case "primary":
      variantStyles =
        "bg-[#0066cc] text-white rounded-full px-[22px] py-[11px] text-[17px] leading-tight hover:bg-[#0071e3]";
      break;
    case "secondary-pill":
      variantStyles =
        "bg-transparent text-[#0066cc] border border-[#0066cc] rounded-full px-[22px] py-[11px] text-[17px] leading-tight hover:bg-[#0066cc]/5";
      break;
    case "dark-utility":
      variantStyles =
        "bg-[#1d1d1f] text-white rounded-[8px] px-[15px] py-[8px] text-[14px] leading-tight hover:bg-[#2d2d2f]";
      break;
    case "pearl-capsule":
      variantStyles =
        "bg-[#fafafc] text-[#333333] border border-[#f0f0f0] rounded-[11px] px-[14px] py-[8px] text-[14px] leading-tight hover:bg-[#f5f5f7]";
      break;
  }

  const combinedClasses = `${baseStyles} ${variantStyles} ${className}`.trim();

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

export function TextLink({
  href,
  children,
  onDark = false,
  className = "",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
  external?: boolean;
}) {
  const colorClass = onDark ? "text-[#2997ff] hover:underline" : "text-[#0066cc] hover:underline";
  const combined = `inline-flex items-center gap-1 text-[17px] font-normal transition-colors ${colorClass} ${className}`.trim();

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combined}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combined}>
      {children}
    </Link>
  );
}
