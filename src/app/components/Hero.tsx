"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import CloudinaryImage from "./CloudinaryImage";
import { projects } from "@/data/projects";

const images = [
  "https://res.cloudinary.com/diqslwugu/image/upload/v1787251347/th1_ds5o3z.webp",
  "https://res.cloudinary.com/diqslwugu/image/upload/v1789573484/Screenshot_2026-09-16_at_9.05.49_PM_izrwlh.png",
  "https://res.cloudinary.com/diqslwugu/image/upload/v1789621863/Screenshot_2026-09-17_at_10.38.01_AM_pteyil.png",
  "https://res.cloudinary.com/diqslwugu/image/upload/v1789625768/Screenshot_2026-09-17_at_11.38.45_AM_cszabf.png"
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Page Load Timeline
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Ensure elements are hidden before animation starts
      gsap.set([headlineRef.current, descriptionRef.current, ctaRef.current], {
        opacity: 0,
        y: 30,
      });

      // Background subtle scale down
      gsap.fromTo(
        bgRef.current,
        { scale: 1.05 },
        { scale: 1, duration: 2.4, ease: "power2.out" }
      );


      // Headline
      tl.to(
        headlineRef.current,
        { opacity: 1, y: 0, duration: 1.3, ease: "power3.out" },
        0.6
      );

      // Description
      tl.to(
        descriptionRef.current,
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        0.8
      );

      // CTA
      tl.to(
        ctaRef.current,
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        0.95
      );
    }, containerRef);

    return () => {
      ctx.revert(); // Cleanup GSAP
    };
  }, []);



  return (
    <section
      ref={containerRef}
      aria-label="Hero"
      className="relative h-svh w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Background Slideshow Container */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full">
        <BackgroundSlideshow />
      </div>

      {/* Cinematic Asymmetric Gradient Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: "linear-gradient(90deg, rgba(20,18,16,0.72) 0%, rgba(20,18,16,0.58) 25%, rgba(20,18,16,0.40) 50%, rgba(20,18,16,0.18) 75%, rgba(20,18,16,0.05) 100%)"
        }}
      />

      {/* Subtle radial glow behind ONLY the headline block */}
      <div 
        className="pointer-events-none absolute left-1/2 top-1/2 z-11 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "750px",
          height: "500px",
          background: "radial-gradient(circle, rgba(20,18,16,0.32) 0%, rgba(20,18,16,0.15) 55%, transparent 100%)",
          filter: "blur(45px)",
        }}
      />

      {/* Warm Beige Tint (8–10% opacity) */}
      <div 
        className="pointer-events-none absolute inset-0 z-12 bg-[#E8DDD0]"
        style={{ opacity: 0.09 }}
      />

      {/* Film Grain Layer (2–3% opacity) */}
      <div 
        className="pointer-events-none absolute inset-0 z-13 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Edge Vignette */}
      <div 
        className="pointer-events-none absolute inset-0 z-14"
        style={{
          boxShadow: "inset 0 0 180px rgba(0,0,0,0.22)"
        }}
      />

      {/* Centered Editorial Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen w-full px-6 py-20 text-center">
        <div className="flex flex-col items-center max-w-[1100px] w-full space-y-8 md:space-y-12">
          
          {/* Main Title */}
          <h1 
            ref={headlineRef}
            className="font-serif font-normal text-4xl md:text-7xl lg:text-[100px] leading-[0.92] tracking-[-0.03em] max-w-[1000px] uppercase"
            style={{
              color: "#FAF8F5",
              textShadow: "0px 2px 18px rgba(0,0,0,0.28)"
            }}
          >
            <span className="block">SPACES DESIGNED TO</span>
            <span className="block">OUTLIVE TRENDS.</span>
          </h1>

          {/* Body Copy */}
          <p 
            ref={descriptionRef}
            className="font-serif font-light text-lg md:text-xl lg:text-[24px] leading-[1.7] max-w-[650px]"
            style={{
              color: "#FAF8F5",
              textShadow: "0px 2px 18px rgba(0,0,0,0.28)"
            }}
          >
            Thoughtful architecture rooted in place, crafted to remain timeless for generations.
          </p>

          {/* Button CTA */}
          <div ref={ctaRef} className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-6">
            <Link
              href="/spaces"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out hover:bg-[#ffffff] hover:text-[#222222]"
              style={{
                border: "1px solid rgba(255,255,255,0.7)",
                background: "rgba(255,255,255,0.08)",
                color: "#ffffff",
                fontSize: "11px",
                letterSpacing: "0.22em",
                padding: "16px 30px"
              }}
            >
              EXPLORE SPACES
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out hover:bg-[#ffffff] hover:text-[#222222]"
              style={{
                border: "1px solid rgba(255,255,255,0.7)",
                background: "rgba(255,255,255,0.08)",
                color: "#ffffff",
                fontSize: "11px",
                letterSpacing: "0.22em",
                padding: "16px 30px"
              }}
            >
              ABOUT US
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

function BackgroundSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <CloudinaryImage
            src={src}
            alt=""
            fill
            sizes="100vw"
            className="h-full w-full object-cover"
            style={{
              transform: i === current ? "scale(1.03)" : "scale(1.0)",
              filter: "brightness(0.92) contrast(0.96) saturate(0.94)",
              transition: "transform 12000ms ease-out",
            }}
            fetchPriority={i === 0 ? "high" : "low"}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </>
  );
}
