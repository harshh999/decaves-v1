"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import CloudinaryImage from "../components/CloudinaryImage";
import { siteImage } from "@/data/images";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const featuredImageRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<HTMLDivElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [hoveredPrinciple, setHoveredPrinciple] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Intro Section Animation
      const tlIntro = gsap.timeline({ defaults: { ease: "power3.out" } });
      tlIntro
        .fromTo(
          ".intro-label",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
        )
        .fromTo(
          ".intro-title",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 1.1 },
          "-=0.6"
        )
        .fromTo(
          ".intro-body",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.7"
        );

      // 2. Metrics Section Animation
      gsap.fromTo(
        ".metric-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: metricsRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // 3. Featured Architectural Image Animation
      if (featuredImageRef.current) {
        gsap.fromTo(
          ".featured-img-inner",
          { scale: 1.04, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: featuredImageRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // 4. Our Approach Section
      if (approachRef.current) {
        gsap.fromTo(
          ".approach-animate",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: approachRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // 5. Split Image & Text Composition
      if (splitRef.current) {
        gsap.fromTo(
          ".split-img-container",
          { scale: 1.03, opacity: 0, y: 16 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: splitRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          ".split-text-item",
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: splitRef.current,
              start: "top 78%",
              once: true,
            },
          }
        );
      }

      // 6. Design Principles
      if (principlesRef.current) {
        gsap.fromTo(
          ".principle-item",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: principlesRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      // 7. Philosophy & Vision
      if (philosophyRef.current) {
        gsap.fromTo(
          ".philosophy-col",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: philosophyRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // 8. Services Three-Column Grid
      if (servicesRef.current) {
        gsap.fromTo(
          ".service-col",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: servicesRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      // 9. Final CTA
      if (ctaRef.current) {
        gsap.fromTo(
          ".cta-item",
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const principles = ["Context", "Material", "Light", "Experience"];

  return (
    <>
      <Header />
      <main
        ref={containerRef}
        className="min-h-screen bg-[#ECE7E1] text-[#352219] overflow-hidden relative paper-limestone-texture"
      >
        {/* Ambient Warm Accent */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[120px] pointer-events-none z-0 select-none bg-[#D8C5AF]" />

        {/* ========================================================================= */}
        {/* SECTION 1: ABOUT INTRO (Confident, Human Opening)                         */}
        {/* ========================================================================= */}
        <section
          ref={introRef}
          className="pt-32 pb-14 md:pt-44 md:pb-20 max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
        >
          {/* Subtle, Readable Section Label */}
          <div className="intro-label mb-6 md:mb-8">
            <span className="font-sans text-[12px] md:text-[13px] font-medium tracking-[0.12em] text-[#8A6E5A] uppercase">
              About De&apos;Caves
            </span>
          </div>

          {/* Asymmetrical Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Dominant Headline */}
            <div className="lg:col-span-7">
              <h1 className="intro-title font-display text-4xl sm:text-5xl md:text-6xl lg:text-[66px] leading-[1.08] tracking-[-0.025em] text-[#352219]">
                Architecture is not only what you see. It is what you experience every day.
              </h1>
            </div>

            {/* Supporting Copy & Exploration Link */}
            <div className="lg:col-span-5 lg:pt-3 flex flex-col justify-between space-y-8">
              <p className="intro-body font-body text-[16px] sm:text-[17px] md:text-[18px] leading-[1.75] text-[#5A453A] font-light">
                De&apos;Caves is an architecture and interior design practice focused on creating spaces shaped by material, light, proportion and the people who inhabit them.
              </p>

              <div className="intro-body">
                <Link
                  href="/spaces"
                  className="editorial-cta-link text-[13px] font-medium tracking-[0.12em] text-[#352219] uppercase inline-flex items-center gap-2 group"
                >
                  <span>Explore Our Work</span>
                  <span className="cta-arrow transition-transform duration-300 ease-out group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: CREDIBILITY METRICS (Simple, Confident, Clean)                 */}
        {/* ========================================================================= */}
        <section
          ref={metricsRef}
          className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 py-10 md:py-14 border-t border-b border-[#8A6E5A]/15 relative z-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#8A6E5A]/15">
            {/* Metric 1 */}
            <div className="metric-item pt-4 sm:pt-0 sm:px-6 first:sm:pl-0">
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#352219] tracking-tight mb-2">
                25<span className="text-[#8A6E5A]/60 font-light">+</span>
              </div>
              <p className="font-sans text-[12px] md:text-[13px] font-medium text-[#8A6E5A] tracking-[0.08em] uppercase">
                Projects Designed
              </p>
            </div>

            {/* Metric 2 */}
            <div className="metric-item pt-6 sm:pt-0 sm:px-6">
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#352219] tracking-tight mb-2">
                08<span className="text-[#8A6E5A]/60 font-light">+</span>
              </div>
              <p className="font-sans text-[12px] md:text-[13px] font-medium text-[#8A6E5A] tracking-[0.08em] uppercase">
                Years of Experience
              </p>
            </div>

            {/* Metric 3 */}
            <div className="metric-item pt-6 sm:pt-0 sm:px-6 last:sm:pr-0">
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#352219] tracking-tight mb-2">
                100k<span className="text-[#8A6E5A]/60 font-light">+</span>
              </div>
              <p className="font-sans text-[12px] md:text-[13px] font-medium text-[#8A6E5A] tracking-[0.08em] uppercase">
                Sq. Ft. Crafted
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: FEATURED ARCHITECTURE IMAGE (Generous, Clean Frame)            */}
        {/* ========================================================================= */}
        <section
          ref={featuredImageRef}
          className="pt-14 pb-14 md:pt-20 md:pb-20 max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
        >
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] max-h-[640px] overflow-hidden rounded-[2px] bg-[#352219]/10 shadow-[0_10px_35px_rgba(53,34,25,0.05)]">
            <div className="featured-img-inner absolute inset-0 w-full h-full">
              <CloudinaryImage
                src={siteImage("/our_projects_1.webp")}
                alt="De'Caves architecture landscape view"
                fill
                priority
                sizes="(max-width: 1360px) 100vw, 1360px"
                className="object-cover warm-editorial-filter"
              />
            </div>
          </div>

          <div className="mt-4">
            <p className="font-sans text-[12px] md:text-[13px] font-medium text-[#8A6E5A]">
              Designed with intention. Experienced over time.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: OUR APPROACH (Two-Column Editorial Clarity)                     */}
        {/* ========================================================================= */}
        <section
          ref={approachRef}
          className="py-14 md:py-20 max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 border-t border-[#8A6E5A]/15 relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left Column: Clear Section Label */}
            <div className="lg:col-span-4 approach-animate">
              <span className="font-sans text-[12px] md:text-[13px] font-medium tracking-[0.12em] text-[#8A6E5A] uppercase">
                Our Approach
              </span>
            </div>

            {/* Right Column: Statement & Thoughtful Narrative */}
            <div className="lg:col-span-8 space-y-6 approach-animate">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[50px] leading-[1.12] tracking-[-0.02em] text-[#352219]">
                Architecture begins long before the first line is drawn.
              </h2>
              <p className="font-body text-[16px] sm:text-[17px] md:text-[18px] leading-[1.8] text-[#5A453A] font-light max-w-2xl">
                We begin by understanding how a space will be lived in. Its surroundings, purpose and the small details that shape everyday experience all inform what follows.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: BUILT AROUND EXPERIENCE (60/40 Split Composition)               */}
        {/* ========================================================================= */}
        <section
          ref={splitRef}
          className="py-12 md:py-20 max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Image (60% on desktop = 7 cols) */}
            <div className="lg:col-span-7">
              <div className="split-img-container relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-[2px] bg-[#352219]/10 shadow-[0_12px_40px_rgba(53,34,25,0.05)]">
                <CloudinaryImage
                  src={siteImage("/our_projects_2.webp")}
                  alt="De'Caves interior architectural spatial experience"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover warm-editorial-filter hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Text Composition (40% on desktop = 5 cols) */}
            <div className="lg:col-span-5 space-y-6 lg:pl-4">
              <div className="split-text-item">
                <span className="font-sans text-[12px] md:text-[13px] font-medium tracking-[0.12em] text-[#8A6E5A] uppercase">
                  Built Around Experience
                </span>
              </div>

              <h3 className="split-text-item font-display text-3xl sm:text-4xl text-[#352219] leading-[1.15] tracking-[-0.015em]">
                Spaces designed for the way life unfolds.
              </h3>

              <p className="split-text-item font-body text-[16px] sm:text-[17px] leading-[1.8] text-[#5A453A] font-light">
                Our work is guided by a simple belief: a successful space should feel natural to the people who inhabit it. Not excessive. Not imposed. Simply considered.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: DESIGN PRINCIPLES (Art-Directed Typographic Statement)         */}
        {/* ========================================================================= */}
        <section
          ref={principlesRef}
          className="py-16 md:py-24 max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 border-t border-b border-[#8A6E5A]/15 relative z-10"
        >
          {/* Editorial Principle Flow */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-3 md:gap-y-4 text-center max-w-4xl mx-auto">
            {principles.map((item, idx) => (
              <div
                key={item}
                className="principle-item inline-flex items-center group cursor-default"
                onMouseEnter={() => setHoveredPrinciple(idx)}
                onMouseLeave={() => setHoveredPrinciple(null)}
              >
                <span
                  className={`font-display text-3xl sm:text-5xl md:text-6xl lg:text-[68px] tracking-[-0.02em] transition-all duration-300 ease-out select-none ${
                    hoveredPrinciple === idx
                      ? "text-[#352219] translate-y-[-2px]"
                      : hoveredPrinciple !== null
                      ? "text-[#352219]/35"
                      : "text-[#352219]"
                  }`}
                >
                  {item}
                </span>
                {idx < principles.length - 1 && (
                  <span className="text-[#8A6E5A]/30 text-xl sm:text-3xl md:text-4xl font-light ml-6 sm:ml-10 select-none">
                    /
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="font-body text-[15px] sm:text-[16px] text-[#5A453A] text-center max-w-xl mx-auto mt-10 md:mt-12 font-light leading-relaxed">
            Every material choice, architectural volume and passage of light is considered to create an enduring sense of proportion and warmth.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: PHILOSOPHY & VISION (Confident Structured Statements)           */}
        {/* ========================================================================= */}
        <section
          ref={philosophyRef}
          className="py-16 md:py-24 max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* Philosophy */}
            <div className="philosophy-col flex flex-col items-start text-left space-y-4">
              <span className="font-sans text-[12px] md:text-[13px] font-medium tracking-[0.12em] text-[#8A6E5A] uppercase">
                Our Philosophy
              </span>
              
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#352219] leading-snug">
                Design with purpose.
              </h3>
              
              <p className="font-body text-[16px] text-[#5A453A] leading-[1.8] font-light max-w-md">
                Every decision should have a reason. From proportion and circulation to material and light, we create spaces where each element contributes to the whole.
              </p>
            </div>

            {/* Vision */}
            <div className="philosophy-col flex flex-col items-start text-left space-y-4 md:border-l md:border-[#8A6E5A]/15 md:pl-16">
              <span className="font-sans text-[12px] md:text-[13px] font-medium tracking-[0.12em] text-[#8A6E5A] uppercase">
                Our Vision
              </span>
              
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#352219] leading-snug">
                Spaces that remain relevant.
              </h3>
              
              <p className="font-body text-[16px] text-[#5A453A] leading-[1.8] font-light max-w-md">
                We aim to create architecture and interiors that move beyond passing trends and continue to feel considered, personal and appropriate over time.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: AREAS OF PRACTICE (Clean Three-Column Grid)                    */}
        {/* ========================================================================= */}
        <section
          ref={servicesRef}
          className="py-16 md:py-24 max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 border-t border-[#8A6E5A]/15 relative z-10"
        >
          {/* Main Heading */}
          <div className="mb-12 md:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-[42px] text-[#352219]">
              Areas of Practice
            </h2>
          </div>

          {/* Three-Column Editorial Disciplines with Clear Numbering */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
            {/* 01 Architecture */}
            <div className="service-col flex flex-col items-start border-t border-[#8A6E5A]/25 pt-6 group">
              <span className="font-mono text-[12px] font-medium text-[#8A6E5A] mb-4">
                01
              </span>
              <h3 className="font-display text-2xl md:text-[26px] text-[#352219] mb-3">
                Architecture
              </h3>
              <p className="font-body text-[15px] sm:text-[16px] text-[#5A453A] leading-[1.75] font-light">
                Thoughtful architectural spaces shaped by context, function and everyday life.
              </p>
            </div>

            {/* 02 Interior Design */}
            <div className="service-col flex flex-col items-start border-t border-[#8A6E5A]/25 pt-6 group">
              <span className="font-mono text-[12px] font-medium text-[#8A6E5A] mb-4">
                02
              </span>
              <h3 className="font-display text-2xl md:text-[26px] text-[#352219] mb-3">
                Interior Design
              </h3>
              <p className="font-body text-[15px] sm:text-[16px] text-[#5A453A] leading-[1.75] font-light">
                Interiors where material, proportion and atmosphere come together with clarity.
              </p>
            </div>

            {/* 03 Spatial Experience */}
            <div className="service-col flex flex-col items-start border-t border-[#8A6E5A]/25 pt-6 group">
              <span className="font-mono text-[12px] font-medium text-[#8A6E5A] mb-4">
                03
              </span>
              <h3 className="font-display text-2xl md:text-[26px] text-[#352219] mb-3">
                Spatial Experience
              </h3>
              <p className="font-body text-[15px] sm:text-[16px] text-[#5A453A] leading-[1.75] font-light">
                A considered approach to the details that shape how a space is seen, felt and lived in.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: FINAL CTA (Warm, Human, Restrained)                            */}
        {/* ========================================================================= */}
        <section
          ref={ctaRef}
          className="pt-12 pb-20 md:pt-16 md:pb-28 max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 border-t border-[#8A6E5A]/15 relative z-10"
        >
          <div className="relative rounded-[4px] overflow-hidden bg-[#ECE7E1] border border-[#8A6E5A]/20 p-8 sm:p-12 md:p-16 lg:p-20 shadow-[0_8px_30px_rgba(53,34,25,0.03)]">
            {/* Subtle Architectural Atmosphere Accent */}
            <div className="absolute right-0 bottom-0 top-0 w-full lg:w-1/2 opacity-15 pointer-events-none select-none">
              <CloudinaryImage
                src={siteImage("/images/cta/cta-architectural-exterior.webp")}
                alt="Architecture perspective"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-right warm-editorial-filter"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#ECE7E1] via-[#ECE7E1]/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-2xl">
              <div className="cta-item mb-4">
                <span className="font-sans text-[12px] md:text-[13px] font-medium tracking-[0.12em] text-[#8A6E5A] uppercase">
                  Start a Conversation
                </span>
              </div>

              <h2 className="cta-item font-display text-3xl sm:text-5xl md:text-6xl text-[#352219] leading-[1.08] tracking-[-0.02em] mb-6">
                A space that feels right.
              </h2>

              <p className="cta-item font-body text-[16px] sm:text-[17px] text-[#5A453A] font-light leading-relaxed mb-10 max-w-lg">
                Every project begins with a conversation. Let&apos;s discuss how we can bring your architectural vision into reality.
              </p>

              <div className="cta-item">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-3 rounded-full bg-[#352219] text-[#ECE7E1] px-8 py-4 text-[13px] font-medium tracking-[0.12em] uppercase transition-all duration-300 ease-out hover:bg-[#5A453A] active:scale-[0.98] group"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
