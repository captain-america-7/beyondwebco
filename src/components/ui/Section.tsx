import React from "react";
import { cn } from "@/lib/cn";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div" | "article";
}

export function Section({
  children,
  id,
  className,
  containerClassName,
  as: Component = "section",
  ...props
}: SectionProps) {
  return (
    <Component
      id={id}
      className={cn("relative w-full py-20 md:py-24", className)}
      {...props}
    >
      <div className={cn("max-w-7xl mx-auto px-6 md:px-10", containerClassName)}>
        {children}
      </div>
    </Component>
  );
}

export default Section;
