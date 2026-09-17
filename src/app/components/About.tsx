"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CloudinaryImage from "./CloudinaryImage";
import Image from "next/image";
import { siteImage } from "@/data/images";

export default function About() {
  const [hovered, setHovered] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Create a single timeline for the entire section entrance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // Trigger when 25% of section is visible
          once: true,
        },
      });

      // Hide elements initially
      gsap.set(
        [
          labelRef.current,
          headingRef.current,
          p1Ref.current,
          p2Ref.current,
          quoteRef.current,
          ctaRef.current,
        ],
        { opacity: 0, y: 28 }
      );

      gsap.set(imageRef.current, { scale: 1.04 });

      // Subtle Image Reveal
      tl.to(
        imageRef.current,
        { scale: 1, duration: 1.8, ease: "power2.out" },
        0
      );

      // Staggered Text Reveal
      tl.to(
        [
          labelRef.current,
          headingRef.current,
          p1Ref.current,
          p2Ref.current,
          quoteRef.current,
          ctaRef.current,
        ],
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.12,
          ease: "power3.out",
        },
        0.2
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("projects-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="pt-20 pb-10 md:pt-[120px] md:pb-[60px] text-text-primary overflow-hidden relative paper-limestone-texture"
    >
      {/* Background Accent: Soft Radial Light */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-[120px] pointer-events-none z-0 select-none"
        style={{ backgroundColor: "#D8C5AF" }}
      />

      {/* Technical Corner Crosshair Marks */}
      <div className="absolute top-8 left-8 w-6 h-6 pointer-events-none opacity-[0.06] z-0 select-none">
        <div className="absolute top-1/2 left-0 w-full h-[1px]" style={{ backgroundColor: "#8A776A" }} />
        <div className="absolute left-1/2 top-0 h-full w-[1px]" style={{ backgroundColor: "#8A776A" }} />
      </div>
      <div className="absolute top-8 right-8 w-6 h-6 pointer-events-none opacity-[0.06] z-0 select-none">
        <div className="absolute top-1/2 left-0 w-full h-[1px]" style={{ backgroundColor: "#8A776A" }} />
        <div className="absolute left-1/2 top-0 h-full w-[1px]" style={{ backgroundColor: "#8A776A" }} />
      </div>
      <div className="absolute bottom-8 left-8 w-6 h-6 pointer-events-none opacity-[0.06] z-0 select-none">
        <div className="absolute top-1/2 left-0 w-full h-[1px]" style={{ backgroundColor: "#8A776A" }} />
        <div className="absolute left-1/2 top-0 h-full w-[1px]" style={{ backgroundColor: "#8A776A" }} />
      </div>
      <div className="absolute bottom-8 right-8 w-6 h-6 pointer-events-none opacity-[0.06] z-0 select-none">
        <div className="absolute top-1/2 left-0 w-full h-[1px]" style={{ backgroundColor: "#8A776A" }} />
        <div className="absolute left-1/2 top-0 h-full w-[1px]" style={{ backgroundColor: "#8A776A" }} />
      </div>

      {/* Architectural Blueprint Guide Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 select-none opacity-[0.09]" viewBox="0 0 1600 1000" preserveAspectRatio="none">
        <defs>
          <pattern id="material-hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="8" stroke="#A18E7C" strokeWidth="0.8" />
          </pattern>
          <marker id="slash-tick" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <line x1="1" y1="9" x2="9" y2="1" stroke="#A18E7C" strokeWidth="1.0" />
          </marker>
        </defs>

        {/* Global Construction Grid lines */}
        <line x1="0" y1="200" x2="180" y2="200" stroke="#A18E7C" strokeWidth="0.8" />
        <line x1="1380" y1="200" x2="1600" y2="200" stroke="#A18E7C" strokeWidth="0.8" />
        <line x1="0" y1="500" x2="100" y2="500" stroke="#A18E7C" strokeWidth="0.8" strokeDasharray="4 4" />
        <line x1="1450" y1="500" x2="1600" y2="500" stroke="#A18E7C" strokeWidth="0.8" strokeDasharray="4 4" />
        <line x1="0" y1="800" x2="250" y2="800" stroke="#A18E7C" strokeWidth="0.8" />
        <line x1="1300" y1="800" x2="1600" y2="800" stroke="#A18E7C" strokeWidth="0.8" />

        {/* Column Grid Axes */}
        <line x1="180" y1="0" x2="180" y2="150" stroke="#A18E7C" strokeWidth="0.8" />
        <line x1="180" y1="850" x2="180" y2="1000" stroke="#A18E7C" strokeWidth="0.8" />
        <line x1="450" y1="0" x2="450" y2="120" stroke="#A18E7C" strokeWidth="0.8" />
        <line x1="450" y1="880" x2="450" y2="1000" stroke="#A18E7C" strokeWidth="0.8" />
        <line x1="780" y1="0" x2="780" y2="120" stroke="#A18E7C" strokeWidth="0.8" />
        <line x1="780" y1="880" x2="780" y2="1000" stroke="#A18E7C" strokeWidth="0.8" />
        <line x1="1380" y1="0" x2="1380" y2="180" stroke="#A18E7C" strokeWidth="0.8" />
        <line x1="1380" y1="820" x2="1380" y2="1000" stroke="#A18E7C" strokeWidth="0.8" />

        {/* Column Grid Axis Bubble Labels */}
        <g transform="translate(180, 24)" className="stroke-[#A18E7C] fill-none" strokeWidth="0.8">
          <circle cx="0" cy="0" r="10" fill="#ECE7E1" />
          <text x="-4" y="3" className="font-mono text-[9px] fill-[#A18E7C] stroke-none font-medium">1</text>
        </g>
        <g transform="translate(450, 24)" className="stroke-[#A18E7C] fill-none" strokeWidth="0.8">
          <circle cx="0" cy="0" r="10" fill="#ECE7E1" />
          <text x="-4" y="3" className="font-mono text-[9px] fill-[#A18E7C] stroke-none font-medium">2</text>
        </g>
        <g transform="translate(780, 24)" className="stroke-[#A18E7C] fill-none" strokeWidth="0.8">
          <circle cx="0" cy="0" r="10" fill="#ECE7E1" />
          <text x="-4" y="3" className="font-mono text-[9px] fill-[#A18E7C] stroke-none font-medium">3</text>
        </g>
        <g transform="translate(1380, 24)" className="stroke-[#A18E7C] fill-none" strokeWidth="0.8">
          <circle cx="0" cy="0" r="10" fill="#ECE7E1" />
          <text x="-4" y="3" className="font-mono text-[9px] fill-[#A18E7C] stroke-none font-medium">4</text>
        </g>

        {/* Floor Plan Overlay */}
        <g className="stroke-[#A18E7C] fill-none" strokeWidth="0.8" transform="scale(1.5) translate(-10, 150)">
          <path d="M50,50 L250,50 L250,200 L150,200 L150,250 L50,250 Z" strokeWidth="1.5" />
          <path d="M54,54 L246,54 L246,196 L146,196 L146,246 L54,246 Z" strokeWidth="0.5" />
          <line x1="120" y1="50" x2="120" y2="120" />
          <line x1="50" y1="120" x2="90" y2="120" />
          <line x1="180" y1="50" x2="180" y2="200" />
          <path d="M90,120 Q105,120 105,105 L90,105" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="90" y1="120" x2="90" y2="105" strokeWidth="1" />
          <path d="M120,80 Q135,80 135,95 L120,95" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="120" y1="80" x2="120" y2="95" strokeWidth="1" />
          <line x1="60" y1="50" x2="100" y2="50" strokeWidth="3" />
          <line x1="200" y1="50" x2="230" y2="50" strokeWidth="3" />
          <line x1="160" y1="200" x2="220" y2="200" strokeWidth="3" />
          <line x1="50" y1="150" x2="50" y2="200" strokeWidth="3" />
          <rect x="210" y="60" width="30" height="60" />
          <line x1="210" y1="70" x2="240" y2="70" />
          <line x1="210" y1="80" x2="240" y2="80" />
          <line x1="210" y1="90" x2="240" y2="90" />
          <line x1="210" y1="100" x2="240" y2="100" />
          <line x1="210" y1="110" x2="240" y2="110" />
          <path d="M225,120 L225,65 L220,70 M225,65 L230,70" strokeWidth="0.5" />
          <rect x="60" y="140" width="40" height="20" rx="2" />
          <rect x="130" y="60" width="20" height="30" />
          <circle cx="160" cy="75" r="5" />
          <circle cx="120" cy="75" r="5" />
          <rect x="190" y="160" width="40" height="15" rx="1" />
          <rect x="200" y="180" width="20" height="10" />
          <line x1="50" y1="40" x2="250" y2="40" strokeWidth="0.5" markerStart="url(#slash-tick)" markerEnd="url(#slash-tick)" />
          <text x="150" y="35" className="font-mono text-[4px] fill-[#A18E7C] stroke-none" textAnchor="middle">12000</text>
          <line x1="40" y1="50" x2="40" y2="250" strokeWidth="0.5" markerStart="url(#slash-tick)" markerEnd="url(#slash-tick)" />
          <text x="35" y="150" className="font-mono text-[4px] fill-[#A18E7C] stroke-none" textAnchor="middle" transform="rotate(-90 35 150)">8000</text>
        </g>
      </svg>

      <div className="mx-auto max-w-[1600px] px-8 md:px-[120px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[46%_54%] gap-12 md:gap-[90px] items-center relative">
          {/* Editorial vertical divider */}
          <div className="hidden md:block absolute left-[46%] top-[10%] bottom-[10%] w-[1px] bg-[#8A776A] opacity-[0.12] pointer-events-none" />

          {/* Left Column: Image Container */}
          <div className="relative w-full flex flex-col">
            {/* Blueprint Corner Brackets */}
            <div className="absolute top-[-12px] left-[-12px] w-6 h-6 border-t border-l pointer-events-none opacity-[0.18]" style={{ borderColor: "#8A776A" }} />
            <div className="absolute top-[-24px] left-[-1px] w-[1px] h-4 pointer-events-none opacity-[0.18]" style={{ backgroundColor: "#8A776A" }} />
            <div className="absolute top-[-1px] left-[-24px] w-4 h-[1px] pointer-events-none opacity-[0.18]" style={{ backgroundColor: "#8A776A" }} />

            <div className="absolute top-[-12px] right-[-12px] w-6 h-6 border-t border-r pointer-events-none opacity-[0.18]" style={{ borderColor: "#8A776A" }} />
            <div className="absolute top-[-24px] right-[-1px] w-[1px] h-4 pointer-events-none opacity-[0.18]" style={{ backgroundColor: "#8A776A" }} />
            <div className="absolute top-[-1px] right-[-24px] w-4 h-[1px] pointer-events-none opacity-[0.18]" style={{ backgroundColor: "#8A776A" }} />

            <div className="absolute bottom-[16px] left-[-12px] w-6 h-6 border-b border-l pointer-events-none opacity-[0.18]" style={{ borderColor: "#8A776A" }} />
            <div className="absolute bottom-[4px] left-[-1px] w-[1px] h-4 pointer-events-none opacity-[0.18]" style={{ backgroundColor: "#8A776A" }} />
            <div className="absolute bottom-[27px] left-[-24px] w-4 h-[1px] pointer-events-none opacity-[0.18]" style={{ backgroundColor: "#8A776A" }} />

            <div className="absolute bottom-[16px] right-[-12px] w-6 h-6 border-b border-r pointer-events-none opacity-[0.18]" style={{ borderColor: "#8A776A" }} />
            <div className="absolute bottom-[4px] right-[-1px] w-[1px] h-4 pointer-events-none opacity-[0.18]" style={{ backgroundColor: "#8A776A" }} />
            <div className="absolute bottom-[27px] right-[-24px] w-4 h-[1px] pointer-events-none opacity-[0.18]" style={{ backgroundColor: "#8A776A" }} />

            <div className="absolute top-[-20px] left-[-20px] w-4 h-4 rounded-full border border-[#8A776A] opacity-[0.15] flex items-center justify-center pointer-events-none select-none">
              <div className="w-[1px] h-full bg-[#8A776A]" />
              <div className="h-[1px] w-full bg-[#8A776A] absolute" />
            </div>

            <div
              className="relative w-full max-w-[540px] h-[480px] md:h-[600px] overflow-hidden rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] bg-neutral-900 mx-auto md:mx-0"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div ref={imageRef} className="absolute inset-0 w-full h-full">
                <Image
                  src="https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_3840/f_auto/q_auto/v1/images/about/founders?_a=BAVT+ODY0"
                  alt="De'Caves founders"
                  width={1600}
                  height={2000}
                  className="absolute inset-0 h-full w-full object-cover object-[center_18%] warm-editorial-filter"
                  style={{
                    transform: `scale(${hovered ? 1.025 : 1})`,
                    transition: hovered ? "transform 800ms ease-out" : "transform 400ms ease-out",
                  }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Vertical Bronze Divider */}
            <div
              className="hidden md:block absolute right-[-60px] top-1/2 -translate-y-1/2 w-[1px] h-[420px] pointer-events-none z-10"
              style={{ backgroundColor: "rgba(74,45,31,0.12)" }}
            />
          </div>

          {/* Right Column: Centered Editorial Content */}
          <div className="flex flex-col justify-center text-left max-w-[560px] z-10 pt-4">

            {/* Label */}
            <div ref={labelRef} className="mb-8 text-left">
              <span
                className="font-sans text-[11px] font-medium tracking-[0.35em] uppercase"
                style={{ color: "#8A6E5A" }}
              >
                OUR APPROACH
              </span>
            </div>

            {/* Heading */}
            <h3
              ref={headingRef}
              className="font-serif text-4xl md:text-[64px] leading-[1.12] font-light tracking-[-0.03em] mb-12 max-w-[520px]"
              style={{ color: "#4A2D1F" }}
            >
              Spaces designed around the way you live.
            </h3>

            {/* Body Paragraphs */}
            <div className="space-y-8 font-serif text-[18px] leading-[2.0] font-light max-w-[480px]" style={{ color: "#5E4C41" }}>
              <p ref={p1Ref}>
                Every project begins with listening before drawing.
              </p>
              <p ref={p2Ref}>
                We design with light, proportion and craftsmanship, creating homes that feel calm, timeless and deeply personal.
              </p>
            </div>

            {/* Closing Quote */}
            <div ref={quoteRef} className="mt-16 pl-6 border-l border-[#8A6E5A]/30 max-w-[480px]">
              <p className="font-serif text-[24px] md:text-[26px] leading-[1.4] font-medium" style={{ color: "#4A2D1F" }}>
                Spaces should not shout. They should age beautifully.
              </p>
            </div>

            {/* Editorial Link CTA */}
            <div ref={ctaRef} className="mt-20 group">
              <a
                href="#projects-section"
                onClick={handleExploreClick}
                className="inline-flex items-center text-[12px] font-medium tracking-[0.08em] uppercase relative pb-2"
                style={{ color: "#4A2D1F" }}
              >
                Explore Projects
                <span className="ml-3 transform transition-transform duration-500 ease-out group-hover:translate-x-1">→</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#4A2D1F]/20" />
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#4A2D1F] origin-left transform scale-x-0 transition-transform duration-450 ease-out group-hover:scale-x-100" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
