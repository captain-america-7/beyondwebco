import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card p-10 rounded-xl flex flex-col h-full relative overflow-hidden group",
        className
      )}
      {...props}
    >
      <div className="noise-overlay absolute inset-0" />
      {children}
    </div>
  );
}
