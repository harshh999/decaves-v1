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

    let ctx: gsap.Context;
    const rafId = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
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
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <footer ref={footerRef} className="w-full flex flex-col overflow-hidden bg-[#0B1016]">

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
            background: "linear-gradient(to bottom, rgba(11,16,22,0) 0%, rgba(11,16,22,0) 15%, rgba(11,16,22,0.03) 28%, rgba(11,16,22,0.12) 42%, rgba(11,16,22,0.28) 56%, rgba(11,16,22,0.52) 70%, rgba(11,16,22,0.78) 82%, rgba(11,16,22,0.94) 92%, #0B1016 98%, #0B1016 100%)"
          }}
        />

        {/* Giant Overlapping Branding Typography */}
        <div className="absolute bottom-0 left-0 w-full z-20 text-center translate-y-[15%] pointer-events-none">
          <h2
            className="font-sans font-black uppercase tracking-[-0.06em] leading-[0.82] select-none text-[11vw]"
            style={{
              background: "linear-gradient(to bottom, rgba(242, 241, 237, 0.95) 0%, rgba(242, 241, 237, 0.65) 45%, rgba(11, 16, 22, 0.10) 88%, transparent 100%)",
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

      {/* 2. Lower Footer Information Section */}
      <div 
        className="footer-info-section relative z-30 w-full bg-[#0B1016] text-[#F2F1ED]"
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "48px 48px 50px",
          boxSizing: "border-box"
        }}
      >

        {/* Three main horizontal columns */}
        <div 
          className="w-full grid grid-cols-1 md:grid-cols-[330px_220px_260px] items-start justify-start"
          style={{ gap: "150px" }}
        >

          {/* Column 1 (Brand) */}
          <div className="footer-col flex flex-col items-start justify-start text-left w-full">
            {/* Complete logo — single image, no borders, no wrappers */}
            <img
              src="/footer-logo-transparent.png"
              alt="DE'CAVES"
              style={{
                width: "165px",
                height: "auto",
                maxHeight: "140px",
                objectFit: "contain",
                objectPosition: "left center",
                display: "block",
                margin: "0 0 24px 0",
                background: "transparent",
                border: "none",
                outline: "none",
                boxShadow: "none",
                filter: "invert(1) opacity(0.95)"
              }}
            />

            {/* Description */}
            <p 
              className="font-sans leading-[1.7] text-[#A9AFB5] text-left"
              style={{ maxWidth: "300px", fontSize: "14px", margin: "0 0 20px 0" }}
            >
              Creating spaces shaped by material, light, proportion and the people who inhabit them.
            </p>

            {/* Brand categories */}
            <p
              className="font-sans font-medium text-[#C7C9C7] uppercase tracking-[0.12em] whitespace-nowrap"
              style={{ fontSize: "12px", margin: "0 0 28px 0" }}
            >
              ARCHITECTURE &nbsp;·&nbsp; INTERIORS &nbsp;·&nbsp; SPACES
            </p>

            {/* Social links */}
            <div className="flex items-center" style={{ gap: "36px", margin: "0" }}>
              <a
                href="https://www.instagram.com/decaves_by_chittearchitects/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-[#C7C9C7] hover:text-[#F2F1ED] transition-colors duration-300 relative group pb-1"
              >
                Instagram
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#F2F1ED] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>

            </div>
          </div>

          {/* Column 2 (Explore) */}
          <div className="footer-col flex flex-col items-start text-left self-start">
            <h3 
              className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#C7C9C7] uppercase"
              style={{ marginBottom: "28px" }}
            >
              Explore
            </h3>
            <div className="flex flex-col font-sans" style={{ fontSize: "14px", fontWeight: 400, gap: "18px" }}>
              {[
                { label: "Home", href: "/" },
                { label: "Spaces", href: "/spaces" },
                { label: "About", href: "/about" },
                { label: "Contact Us", href: "/#contact" }
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#A9AFB5] hover:text-[#F2F1ED] transition-colors duration-250 w-fit relative group"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-[-1px] w-full h-[1px] bg-[#F2F1ED]/40 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 (Contact) */}
          <div className="footer-col flex flex-col items-start text-left self-start">
            <h3 
              className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#C7C9C7] uppercase"
              style={{ marginBottom: "28px" }}
            >
              Contact
            </h3>
            <div className="flex flex-col font-sans text-[13px] text-[#A9AFB5]" style={{ gap: "18px" }}>
              <a
                href="mailto:design@dcaves.in"
                className="hover:text-[#F2F1ED] transition-colors duration-250 w-fit"
              >
                design@dcaves.in
              </a>
              <a
                href="tel:+91898899133"
                className="hover:text-[#F2F1ED] transition-colors duration-250 w-fit"
              >
                +91 8988 99133
              </a>
              <p className="leading-relaxed">
                Vadodara · Gujarat · India
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div 
          className="footer-bottom-bar flex flex-col md:flex-row justify-between items-center w-full text-[12px] text-[#A9AFB5]"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.18)",
            marginTop: "64px",
            paddingTop: "24px"
          }}
        >
          <span>&copy; 2026 DE'CAVES. ALL RIGHTS RESERVED.</span>
          <span className="font-semibold uppercase tracking-[0.1em] text-[#C7C9C7]">ARCHITECTURE &amp; INTERIORS</span>
        </div>

      </div>

    </footer>
  );
}
