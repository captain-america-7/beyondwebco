"use client";

import { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  // Fallback timeout in case the animation is infinite or fails to load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // 3.5 seconds fallback

    return () => clearTimeout(timer);
  }, []);

  const dotLottieRefCallback = (dotLottie: any) => {
    if (dotLottie) {
      dotLottie.addEventListener("complete", () => {
        setIsLoading(false);
      });
    }
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-tight mb-4"
            >
              BeyondWebCo
            </motion.h1>
            <div className="w-64 h-64 max-w-full max-h-full">
              <DotLottieReact
                src="/loading.lottie"
                autoplay
                loop={false}
                dotLottieRefCallback={dotLottieRefCallback}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Ensure the actual page content is visible but maybe pointer events none if loading? No, the overlay covers it. */}
      {children}
    </>
  );
}
