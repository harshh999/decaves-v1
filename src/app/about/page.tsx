"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import CloudinaryImage from "../components/CloudinaryImage";
import LifeAtDecaves from "../components/LifeAtDecaves";
import Image from "next/image";
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

  // Contact form state & validation
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormValidate = () => {
    const next: Record<string, string> = {};
    if (!formValues.name.trim()) next.name = "Please enter your name.";
    if (!formValues.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!formValues.message.trim()) next.message = "Please enter a message.";
    setFormErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (handleFormValidate()) {
      setFormSubmitted(true);
      
      const text = `Hello De'Caves,

I would like to enquire about a project.

Name: ${formValues.name}
Email: ${formValues.email}
Project / Subject: ${formValues.projectType || "N/A"}
Message: ${formValues.message}

Thank you.`;

      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/919662320660?text=${encodedText}`;
      window.open(whatsappUrl, '_blank');
    }
  };

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

      // 7. Philosophy Manifesto & Supporting Narrative
      if (philosophyRef.current) {
        gsap.fromTo(
          ".philosophy-manifesto",
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: philosophyRef.current,
              start: "top 78%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          ".philosophy-col",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".philosophy-spread",
              start: "top 82%",
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

      // 9. Final Architectural Contact Section
      if (ctaRef.current) {
        gsap.fromTo(
          ".cta-header-anim",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          ".cta-panel-anim",
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".cta-panels-container",
              start: "top 80%",
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
              <div className="font-sans font-semibold text-4xl sm:text-5xl lg:text-6xl text-[#352219] tracking-tight mb-2">
                4100<span className="text-[#8A6E5A]/60 font-light">+</span>
              </div>
              <p className="font-sans text-[12px] md:text-[13px] font-medium text-[#8A6E5A] tracking-[0.08em] uppercase">
                Projects Designed
              </p>
            </div>

            {/* Metric 2 */}
            <div className="metric-item pt-6 sm:pt-0 sm:px-6">
              <div className="font-sans font-semibold text-4xl sm:text-5xl lg:text-6xl text-[#352219] tracking-tight mb-2">
                38<span className="text-[#8A6E5A]/60 font-light">+</span>
              </div>
              <p className="font-sans text-[12px] md:text-[13px] font-medium text-[#8A6E5A] tracking-[0.08em] uppercase">
                Years of Experience
              </p>
            </div>

            {/* Metric 3 */}
            <div className="metric-item pt-6 sm:pt-0 sm:px-6 last:sm:pr-0">
              <div className="font-sans font-semibold text-4xl sm:text-5xl lg:text-6xl text-[#352219] tracking-tight mb-2">
                1M<span className="text-[#8A6E5A]/60 font-light">+</span>
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
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] max-h-[640px] overflow-hidden rounded-[16px] bg-[#352219]/10 shadow-[0_10px_35px_rgba(53,34,25,0.05)]">
            <div className="featured-img-inner absolute inset-0 w-full h-full">
              <Image
                src="/images/about/life/1.jpg"
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
        {/* SECTION: LIFE AT DE'CAVES (Editorial Office Environment Feature)           */}
        {/* ========================================================================= */}
        <LifeAtDecaves />

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
              <div className="split-img-container relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-[16px] bg-[#352219]/10 shadow-[0_12px_40px_rgba(53,34,25,0.05)]">
                <Image
                  src="/images/about/life/15.jpg"
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
        </section>        {/* ========================================================================= */}
        {/* SECTION 7: PHILOSOPHY (Minimal Architectural Manifesto)                    */}
        {/* ========================================================================= */}
        <section
          ref={philosophyRef}
          className="py-24 md:py-36 max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 border-t border-[#8A6E5A]/15 relative z-10"
        >
          {/* Eyebrow Label */}
          <div className="mb-8 md:mb-12">
            <span className="font-sans text-[12px] md:text-[13px] font-medium tracking-[0.16em] text-[#8A6E5A] uppercase">
              OUR PHILOSOPHY
            </span>
          </div>

          {/* Hero Manifesto Statement (Visual Anchor) */}
          <div className="philosophy-manifesto max-w-5xl mb-20 md:mb-32">
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-normal leading-[1.06] tracking-[-0.025em] text-[#352219]">
              Spaces should not shout. <br className="hidden sm:block" />
              They should age beautifully.
            </h2>
          </div>

          {/* Asymmetric Editorial Spread for Philosophy & Vision */}
          <div className="philosophy-spread grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 pt-16 border-t border-[#8A6E5A]/15">
            {/* Philosophy Narrative */}
            <div className="philosophy-col md:col-span-6 space-y-4">
              <span className="font-sans text-[11px] md:text-[12px] font-semibold tracking-[0.16em] text-[#8A6E5A] uppercase block">
                OUR PHILOSOPHY
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-[32px] text-[#352219] leading-snug">
                Design with purpose.
              </h3>
              <p className="font-body text-[16px] sm:text-[17px] text-[#5A453A] leading-[1.8] font-light max-w-lg">
                Every decision should have a reason. From proportion and circulation to material and light, we create spaces where each element contributes to the whole.
              </p>
            </div>

            {/* Vision Narrative */}
            <div className="philosophy-col md:col-span-6 space-y-4 md:border-l md:border-[#8A6E5A]/15 md:pl-12 lg:pl-20">
              <span className="font-sans text-[11px] md:text-[12px] font-semibold tracking-[0.16em] text-[#8A6E5A] uppercase block">
                OUR VISION
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-[32px] text-[#352219] leading-snug">
                Spaces that remain relevant.
              </h3>
              <p className="font-body text-[16px] sm:text-[17px] text-[#5A453A] leading-[1.8] font-light max-w-lg">
                We aim to create architecture and interiors that move beyond passing trends and continue to feel considered, personal and appropriate over time.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: AREAS OF PRACTICE (Full-Width Numbered Editorial Index)         */}
        {/* ========================================================================= */}
        <section
          ref={servicesRef}
          className="py-20 md:py-36 max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 border-t border-[#8A6E5A]/15 relative z-10"
        >
          {/* Main Section Header */}
          <div className="service-col mb-16 md:mb-24">
            <span className="font-sans text-[12px] md:text-[13px] font-medium tracking-[0.16em] text-[#8A6E5A] uppercase block mb-3">
              PRACTICE DISCIPLINES
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-[-0.025em] text-[#352219]">
              Areas of Practice
            </h2>
          </div>

          {/* Numbered Editorial Index List */}
          <div className="divide-y divide-[#8A6E5A]/20 border-t border-b border-[#8A6E5A]/20">
            {/* 01 Architecture */}
            <div className="service-col py-10 md:py-14 group cursor-default transition-colors duration-400">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start md:items-center">
                <div className="md:col-span-2">
                  <span className="font-mono text-[13px] font-medium text-[#8A6E5A] tracking-widest block">
                    01
                  </span>
                </div>
                <div className="md:col-span-5 flex items-center justify-between pr-4">
                  <h3 className="font-display text-3xl sm:text-4xl md:text-[44px] text-[#352219] group-hover:text-[#8A6E5A] group-hover:translate-x-1.5 transition-all duration-300">
                    Architecture
                  </h3>
                </div>
                <div className="md:col-span-4">
                  <p className="font-body text-[15px] sm:text-[17px] text-[#5A453A] leading-[1.75] font-light">
                    Thoughtful architectural spaces shaped by context, function and everyday life.
                  </p>
                </div>
                <div className="md:col-span-1 text-right hidden md:block">
                  <span className="text-xl text-[#8A6E5A] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 inline-block">
                    →
                  </span>
                </div>
              </div>
            </div>

            {/* 02 Interior Design */}
            <div className="service-col py-10 md:py-14 group cursor-default transition-colors duration-400">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start md:items-center">
                <div className="md:col-span-2">
                  <span className="font-mono text-[13px] font-medium text-[#8A6E5A] tracking-widest block">
                    02
                  </span>
                </div>
                <div className="md:col-span-5 flex items-center justify-between pr-4">
                  <h3 className="font-display text-3xl sm:text-4xl md:text-[44px] text-[#352219] group-hover:text-[#8A6E5A] group-hover:translate-x-1.5 transition-all duration-300">
                    Interior Design
                  </h3>
                </div>
                <div className="md:col-span-4">
                  <p className="font-body text-[15px] sm:text-[17px] text-[#5A453A] leading-[1.75] font-light">
                    Interiors where material, proportion and atmosphere come together with clarity.
                  </p>
                </div>
                <div className="md:col-span-1 text-right hidden md:block">
                  <span className="text-xl text-[#8A6E5A] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 inline-block">
                    →
                  </span>
                </div>
              </div>
            </div>

            {/* 03 Spatial Experience */}
            <div className="service-col py-10 md:py-14 group cursor-default transition-colors duration-400">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start md:items-center">
                <div className="md:col-span-2">
                  <span className="font-mono text-[13px] font-medium text-[#8A6E5A] tracking-widest block">
                    03
                  </span>
                </div>
                <div className="md:col-span-5 flex items-center justify-between pr-4">
                  <h3 className="font-display text-3xl sm:text-4xl md:text-[44px] text-[#352219] group-hover:text-[#8A6E5A] group-hover:translate-x-1.5 transition-all duration-300">
                    Spatial Experience
                  </h3>
                </div>
                <div className="md:col-span-4">
                  <p className="font-body text-[15px] sm:text-[17px] text-[#5A453A] leading-[1.75] font-light">
                    A considered approach to the details that shape how a space is seen, felt and lived in.
                  </p>
                </div>
                <div className="md:col-span-1 text-right hidden md:block">
                  <span className="text-[#8A6E5A] text-xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 inline-block">
                    →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: ARCHITECTURAL CONTACT COMPOSITION (Editorial 2-Panel Layout)     */}
        {/* ========================================================================= */}
        <section
          ref={ctaRef}
          className="py-20 md:py-36 max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 border-t border-[#8A6E5A]/15 relative z-10"
        >
          {/* Editorial Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 md:mb-16">
            <div className="lg:col-span-7">
              <div className="cta-header-anim mb-4 sm:mb-6">
                <span className="font-mono text-[11px] sm:text-[12px] font-medium tracking-[0.22em] text-[#8A6E5A] uppercase block">
                  CONTACT US
                </span>
              </div>
              <h2 className="cta-header-anim font-display text-4xl sm:text-6xl lg:text-[72px] leading-[1.04] tracking-[-0.025em] text-[#352219] max-w-[650px]">
                Let&apos;s create a space that feels right.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:justify-self-end">
              <p className="cta-header-anim font-body text-[16px] sm:text-[18px] text-[#5A453A] font-light leading-[1.7] max-w-[420px]">
                Every project begins with a conversation. Tell us about your space, your ideas, and what you want it to become.
              </p>
            </div>
          </div>

          {/* Two-Panel Architectural Body Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch cta-panels-container">
            {/* Left Panel: De'Caves Philosophy / Visual Panel */}
            <div className="cta-panel-anim rounded-[28px] bg-[#171310] p-8 sm:p-10 lg:p-12 text-[#F2F0EB] flex flex-col justify-between overflow-hidden shadow-2xl border border-[#26201B] h-full min-h-[560px]">
              <div>
                <span className="font-mono text-[11px] font-medium tracking-[0.22em] text-[#B9B1A9] uppercase mb-4 block">
                  DE&apos;CAVES PHILOSOPHY
                </span>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-[36px] text-[#F2F0EB] leading-[1.18] tracking-tight mb-4 max-w-lg">
                  Spaces should not shout. They should age beautifully.
                </h3>
                <p className="font-body text-[14px] sm:text-[15px] text-[#B9B1A9] leading-[1.7] font-light max-w-md mb-8">
                  We design with intention, considering how architecture, material, light and everyday life come together over time.
                </p>
              </div>

              {/* Architectural Office Photo inside Dark Panel */}
              <div className="group relative w-full h-[260px] sm:h-[300px] lg:h-[320px] overflow-hidden rounded-[18px] mt-auto border border-white/10">
                <Image
                  src="/images/about/life/14.jpg"
                  alt="De'Caves Studio Environment"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171310]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Panel: Minimal Contact Form */}
            <div className="cta-panel-anim rounded-[28px] bg-[#F8F6F1] border border-[#E6E0D5] p-8 sm:p-10 lg:p-12 text-[#352219] flex flex-col justify-between h-full min-h-[560px] shadow-sm">
              {formSubmitted ? (
                <div className="flex h-full min-h-[440px] flex-col items-center justify-center text-center my-auto py-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#171310] text-[#F2F0EB] mb-6">
                    <Check className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-[#8A6E5A] uppercase mb-2">
                    ENQUIRY RECEIVED
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl text-[#352219] tracking-tight mb-3">
                    Thank you
                  </h3>
                  <p className="font-body text-[14px] sm:text-[15px] leading-relaxed text-[#5A453A] font-light max-w-[360px] mb-8">
                    We&apos;ve received your message and will reach out to discuss your space within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormValues({ name: "", email: "", phone: "", projectType: "", message: "" });
                      setFormErrors({});
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-[#352219]/30 px-7 py-3 text-[11px] font-mono tracking-[0.18em] uppercase text-[#352219] transition-colors duration-300 hover:bg-[#352219] hover:text-[#F2F0EB] outline-none cursor-pointer"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} noValidate className="flex flex-col justify-between h-full gap-6">
                  <div>
                    <div className="mb-6">
                      <span className="font-mono text-[11px] font-medium tracking-[0.22em] text-[#8A6E5A] uppercase mb-2 block">
                        START A CONVERSATION
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl text-[#352219] tracking-tight">
                        Tell us about your project.
                      </h3>
                    </div>

                    <div className="space-y-5">
                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col">
                          <label htmlFor="cta-name" className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A6E5A] mb-1.5">
                            FULL NAME <span className="text-red-700">*</span>
                          </label>
                          <input
                            id="cta-name"
                            type="text"
                            placeholder="Your name"
                            value={formValues.name}
                            onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                            className="w-full bg-transparent border-b border-[#D8D0C5] py-2.5 text-[14px] text-[#352219] placeholder:text-[#A09587] outline-none transition-colors duration-300 focus:border-[#171310] font-body"
                          />
                          {formErrors.name && (
                            <p className="text-[11px] text-red-700 mt-1 tracking-wide font-mono">{formErrors.name}</p>
                          )}
                        </div>

                        <div className="flex flex-col">
                          <label htmlFor="cta-email" className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A6E5A] mb-1.5">
                            EMAIL <span className="text-red-700">*</span>
                          </label>
                          <input
                            id="cta-email"
                            type="email"
                            placeholder="you@example.com"
                            value={formValues.email}
                            onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                            className="w-full bg-transparent border-b border-[#D8D0C5] py-2.5 text-[14px] text-[#352219] placeholder:text-[#A09587] outline-none transition-colors duration-300 focus:border-[#171310] font-body"
                          />
                          {formErrors.email && (
                            <p className="text-[11px] text-red-700 mt-1 tracking-wide font-mono">{formErrors.email}</p>
                          )}
                        </div>
                      </div>

                      {/* Phone & Project Type Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col">
                          <label htmlFor="cta-phone" className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A6E5A] mb-1.5">
                            PHONE
                          </label>
                          <input
                            id="cta-phone"
                            type="tel"
                            placeholder="Your phone number"
                            value={formValues.phone}
                            onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
                            className="w-full bg-transparent border-b border-[#D8D0C5] py-2.5 text-[14px] text-[#352219] placeholder:text-[#A09587] outline-none transition-colors duration-300 focus:border-[#171310] font-body"
                          />
                        </div>

                        <div className="flex flex-col">
                          <label htmlFor="cta-project" className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A6E5A] mb-1.5">
                            PROJECT TYPE
                          </label>
                          <input
                            id="cta-project"
                            type="text"
                            placeholder="Architecture / Interior Design / Other"
                            value={formValues.projectType}
                            onChange={(e) => setFormValues({ ...formValues, projectType: e.target.value })}
                            className="w-full bg-transparent border-b border-[#D8D0C5] py-2.5 text-[14px] text-[#352219] placeholder:text-[#A09587] outline-none transition-colors duration-300 focus:border-[#171310] font-body"
                          />
                        </div>
                      </div>

                      {/* Message Field */}
                      <div className="flex flex-col pt-1">
                        <label htmlFor="cta-message" className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A6E5A] mb-1.5">
                          MESSAGE <span className="text-red-700">*</span>
                        </label>
                        <textarea
                          id="cta-message"
                          rows={3}
                          placeholder="Tell us a little about your project..."
                          value={formValues.message}
                          onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                          className="w-full bg-transparent border-b border-[#D8D0C5] py-2.5 text-[14px] text-[#352219] placeholder:text-[#A09587] outline-none transition-colors duration-300 focus:border-[#171310] font-body resize-none"
                        />
                        {formErrors.message && (
                          <p className="text-[11px] text-red-700 mt-1 tracking-wide font-mono">{formErrors.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[#171310] text-[#F2F0EB] px-8 py-4 text-[12px] font-mono tracking-[0.18em] uppercase transition-all duration-300 ease-out hover:bg-[#352219] active:scale-[0.98] group mt-4 self-start cursor-pointer shadow-sm"
                  >
                    <span>SEND AN ENQUIRY</span>
                    <span className="text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 inline-block">↗</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
