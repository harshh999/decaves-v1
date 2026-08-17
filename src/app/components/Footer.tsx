"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Staggered reveal for the info columns
      gsap.fromTo(
        ".footer-col",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer-info-section",
            start: "top 88%",
            once: true,
          },
        }
      );

      // Subtle rise on the bottom bar
      gsap.fromTo(
        ".footer-bottom-bar",
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer-bottom-bar",
            start: "top 95%",
            once: true,
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="w-full flex flex-col overflow-hidden bg-[#0B0F14]">

      {/* 1. Upper Hero Image Section (72% total desktop height) */}
      <div className="relative w-full h-[50vh] md:h-[72vh] overflow-hidden select-none pointer-events-none">
        {/* Full Bleed Image */}
        <Image
          src="/images/footer/footer-architecture.webp"
          alt="De'Caves premium architectural project exterior"
          fill
          sizes="100vw"
          className="object-cover w-full h-full warm-editorial-filter"
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, black 25%, rgba(0,0,0,0.92) 45%, rgba(0,0,0,0.7) 65%, rgba(0,0,0,0.35) 82%, transparent 96%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 25%, rgba(0,0,0,0.92) 45%, rgba(0,0,0,0.7) 65%, rgba(0,0,0,0.35) 82%, transparent 96%)"
          }}
        />

        {/* Seamless Vertical Dark Gradient Overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(11,15,20,0) 0%, rgba(11,15,20,0) 15%, rgba(11,15,20,0.03) 28%, rgba(11,15,20,0.12) 42%, rgba(11,15,20,0.28) 56%, rgba(11,15,20,0.52) 70%, rgba(11,15,20,0.78) 82%, rgba(11,15,20,0.94) 92%, #0B0F14 98%, #0B0F14 100%)"
          }}
        />

        {/* Giant Overlapping Branding Typography */}
        <div className="absolute bottom-0 left-0 w-full z-20 text-center translate-y-[15%] pointer-events-none">
          <h2
            className="font-sans font-black uppercase tracking-[-0.06em] leading-[0.82] select-none text-[11vw]"
            style={{
              background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(245, 243, 238, 0.32) 35%, rgba(245, 243, 238, 0.12) 65%, rgba(11, 15, 20, 0.02) 88%, transparent 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              mixBlendMode: "screen"
            }}
          >
            DE'CAVES
          </h2>
        </div>
      </div>

      {/* 2. Lower Footer Information Section (28% total desktop height) */}
      <div className="footer-info-section relative z-30 w-full pt-16 pb-8 px-6 md:px-[12vw] bg-[#0B0F14] text-[#F5F3EE]">

        {/* Three main horizontal columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start w-full">

          {/* Left Column (45% width on desktop) */}
          <div className="footer-col md:col-span-5 flex flex-col items-start text-left">
            <span className="font-serif text-2xl font-bold tracking-[0.1em] text-white uppercase mb-4">
              DE'CAVES
            </span>
            <p className="font-sans text-[13px] leading-relaxed text-[#F5F3EE]/70 mb-6 max-w-sm">
              Creating spaces shaped by material, light, proportion and the people who inhabit them.
            </p>
            <div className="flex gap-6 items-center">
              <a
                href="https://www.instagram.com/decaves_by_chittearchitects/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-[#F5F3EE]/55 hover:text-white transition-colors duration-300 relative group pb-1"
              >
                Instagram
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
              <a
                href="https://in.pinterest.com/decaves_by_chittearchitects/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-[#F5F3EE]/55 hover:text-white transition-colors duration-300 relative group pb-1"
              >
                Pinterest
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            </div>
          </div>

          {/* Center Column (25% width on desktop) */}
          <div className="footer-col md:col-span-3 md:col-start-7 flex flex-col items-start text-left">
            <h3 className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#F5F3EE]/45 uppercase mb-6">
              Explore
            </h3>
            <div className="flex flex-col gap-3 font-sans" style={{ fontSize: "14px", fontWeight: 400 }}>
              {[
                { label: "Home", href: "/" },
                { label: "Spaces", href: "/spaces" },
                { label: "About", href: "/about" },
                { label: "Contact Us", href: "/#contact" }
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#F5F3EE]/75 hover:text-white transition-colors duration-250 w-fit relative group"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-[-1px] w-full h-[1px] bg-white/40 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column (30% width on desktop) */}
          <div className="footer-col md:col-span-3 flex flex-col items-start text-left">
            <h3 className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#F5F3EE]/45 uppercase mb-6">
              Contact
            </h3>
            <div className="flex flex-col gap-4 font-sans text-[13px] text-[#F5F3EE]/75">
              <a
                href="mailto:design@dcaves.in"
                className="hover:text-white transition-colors duration-250 w-fit"
              >
                design@dcaves.in
              </a>
              <a
                href="tel:+919898899133"
                className="hover:text-white transition-colors duration-250 w-fit"
              >
                +91 98988 99133
              </a>
              <p className="leading-relaxed">
                Vadodara · Gujarat · India
              </p>
            </div>
          </div>

        </div>

        {/* 3. Bottom Bar */}
        <div className="footer-bottom-bar flex flex-col md:flex-row justify-between items-center text-center gap-4 md:gap-0 mt-16 pt-6 border-t border-white/12 text-[12px] text-[#F5F3EE]/55">
          <span>&copy; 2026 DE'CAVES. ALL RIGHTS RESERVED.</span>
          <span className="font-semibold uppercase tracking-[0.1em]">ARCHITECTURE &amp; INTERIORS</span>

        </div>

      </div>

    </footer>
  );
}
