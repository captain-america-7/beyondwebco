"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center opacity-60"
        aria-hidden="true"
      >
        <Moon className="w-4 h-4 text-neutral-400" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)] flex items-center justify-center transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-white"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <motion.div
        key={isDark ? "dark" : "light"}
        initial={{ scale: 0.6, rotate: -30, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0.6, rotate: 30, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-neutral-200 hover:text-white transition-colors" />
        ) : (
          <Moon className="w-4 h-4 text-neutral-800 hover:text-black transition-colors" />
        )}
      </motion.div>
    </button>
  );
}

export default ThemeToggle;
