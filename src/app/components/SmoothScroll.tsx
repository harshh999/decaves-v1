"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect user preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.2,
      wheelMultiplier: 0.85,
      touchMultiplier: 1,
      // @ts-ignore - Some lenis types may not include smoothWheel directly based on version, but it's safe
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    // Sync Lenis scroll with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const updateRaf = (time: number) => {
      lenis.raf(time * 1000);
    };

    // Add Lenis's requestAnimationFrame (raf) to GSAP's ticker
    // This ensures GSAP and Lenis are perfectly in sync
    gsap.ticker.add(updateRaf);
    
    // Disable GSAP's internal lag smoothing so it doesn't fight Lenis
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Cleanup on unmount
      gsap.ticker.remove(updateRaf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
