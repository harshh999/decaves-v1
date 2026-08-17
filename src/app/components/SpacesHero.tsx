"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SpacesHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLHRElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Animate title with a cinematic fade and rise
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1.4, ease: "power3.out" },
        0.1
      );

      // Animate subtitle
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        0.45
      );

      // Animate line scale from center
      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.6, ease: "power4.inOut" },
        0.2
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="px-6 pb-2 pt-12 md:px-12 xl:px-16 text-center max-w-4xl mx-auto">
      <h1
        ref={titleRef}
        className="font-display text-6xl text-brown-deep md:text-8xl select-none"
        style={{ willChange: "transform, opacity" }}
      >
        <span className="font-bold">Spaces</span>
        <span className="mx-3 font-normal">&amp;</span>
        <span className="italic">Style</span>
      </h1>
      
      <p
        ref={subtitleRef}
        className="font-body mt-5 text-[14px] md:text-[15px] tracking-[0.08em] text-brown/70 max-w-lg mx-auto leading-relaxed select-none"
        style={{ willChange: "transform, opacity" }}
      >
        A curated selection of architectural spaces crafted with intention and design discipline.
      </p>

      <hr
        ref={lineRef}
        className="mt-8 border-brown/15 origin-center w-full"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
