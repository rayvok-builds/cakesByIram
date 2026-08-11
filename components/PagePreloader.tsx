"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePreloader } from "./PreloaderContext";
import { siteConfig } from "@/data/site.config";

export default function PagePreloader() {
  const { isLoaded, setIsLoaded, shouldPlay } = usePreloader();
  const [progress, setProgress] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (!shouldPlay) {
      setAnimationComplete(true);
      return;
    }

    // Disable scrolling when preloader is active
    document.body.style.overflow = "hidden";

    let startTime = Date.now();
    const duration = 1200; // Minimal and short duration (1.2s)

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progressPercent = Math.min(elapsed / duration, 1);
      
      // Decelerating progress curve (easeOutQuad)
      const easeProgress = progressPercent * (2 - progressPercent);
      const currentVal = Math.floor(easeProgress * 100);
      
      setProgress(currentVal);

      if (progressPercent < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setProgress(100);

        // Wait a very brief moment, then trigger content reveal
        setTimeout(() => {
          setIsLoaded(true);
          // Allow time for panel slide exit (0.85s) before unmounting
          setTimeout(() => {
            setAnimationComplete(true);
            document.body.style.overflow = "";
          }, 1000);
        }, 200);
      }
    };

    const animFrameId = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(animFrameId);
      document.body.style.overflow = "";
    };
  }, [shouldPlay, setIsLoaded]);

  // If the preloader shouldn't play or has finished its exit animation, remove from DOM
  if (!shouldPlay || animationComplete) return null;

  const panelVariants = {
    initial: {
      y: 0,
    },
    exitTop: {
      y: "-100%",
      transition: {
        duration: 0.85,
        ease: [0.85, 0, 0.15, 1],
      },
    },
    exitBottom: {
      y: "100%",
      transition: {
        duration: 0.85,
        ease: [0.85, 0, 0.15, 1],
      },
    },
  } as const;

  const contentVariants = {
    initial: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <div className="fixed inset-0 z-[9999] select-none overflow-hidden">
      {/* Horizontal split panels that slide away */}
      <div className="absolute inset-0 flex flex-col pointer-events-none">
        {/* Top Half Panel */}
        <motion.div
          variants={panelVariants}
          initial="initial"
          animate={isLoaded ? "exitTop" : "initial"}
          className="w-full h-[50.5vh] bg-plum pointer-events-auto "
        />
        {/* Bottom Half Panel */}
        <motion.div
          variants={panelVariants}
          initial="initial"
          animate={isLoaded ? "exitBottom" : "initial"}
          className="w-full h-[50.5vh] bg-plum pointer-events-auto "
        />
      </div>

      {/* Loading content centered overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            variants={contentVariants}
            initial="initial"
            exit="exit"
            className="absolute inset-0 flex flex-col items-center justify-center z-[10000] pointer-events-none px-6 text-center"
          >
         

            {/* Percentage Progress Counter */}
            <div className="font-display text-6xl md:text-8xl font-light text-blush tracking-tight mb-4">
              {progress}<span className="text-gold text-4xl md:text-6xl font-normal">%</span>
            </div>

            {/* Subtle Progress Bar */}
            <div className="w-36 md:w-52 h-[2px] bg-gold/20 rounded-full mb-6 overflow-hidden relative">
              <div
                className="h-full bg-gold transition-all duration-100 ease-out rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Brand Title */}
            <h2 className="font-display text-2xl md:text-4xl font-normal text-ivory tracking-[0.25em] uppercase">
              {siteConfig.business.name}
            </h2>

            {/* Location */}
            <p className="font-body text-xs md:text-sm text-blush/70 tracking-[0.2em] uppercase mt-2">
              {siteConfig.business.location}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
