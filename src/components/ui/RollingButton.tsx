"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

export interface RollingButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export function RollingButton({
  text,
  href,
  onClick,
  variant = "primary",
  className,
  icon,
  iconPosition = "right",
  disabled = false,
  type = "button",
  target,
  rel,
  ariaLabel,
}: RollingButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const baseStyles = cn(
    "relative inline-flex items-center justify-center gap-2.5 h-[44px] px-6 rounded-full text-sm font-medium transition-all duration-300 select-none cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
    variant === "primary"
      ? "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
      : "bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)] border border-[var(--btn-secondary-border)] hover:border-white/40",
    className
  );

  const letters = Array.from(text);

  const content = (
    <>
      <span className="sr-only">{text}</span>
      {icon && iconPosition === "left" && (
        <span className="inline-flex shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}

      {shouldReduceMotion ? (
        <span aria-hidden="true">{text}</span>
      ) : (
        <span aria-hidden="true" className="relative inline-flex overflow-hidden leading-tight py-0.5">
          {/* Default Layer (slides up on hover) */}
          <span className="inline-flex">
            {letters.map((char, i) => (
              <motion.span
                key={`primary-${i}`}
                initial={{ y: "0%" }}
                animate={{ y: isHovered ? "-105%" : "0%" }}
                transition={{
                  duration: 0.32,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.018,
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>

          {/* Duplicate Layer (slides in from bottom) */}
          <span className="absolute inset-0 inline-flex pointer-events-none">
            {letters.map((char, i) => (
              <motion.span
                key={`secondary-${i}`}
                initial={{ y: "105%" }}
                animate={{ y: isHovered ? "0%" : "105%" }}
                transition={{
                  duration: 0.32,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.018,
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </span>
      )}

      {icon && iconPosition === "right" && (
        <span className="inline-flex shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a
          href={href}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          className={cn(baseStyles, "group")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-label={ariaLabel || text}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={cn(baseStyles, "group")}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={ariaLabel || text}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, "group")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel || text}
    >
      {content}
    </button>
  );
}

export default RollingButton;
