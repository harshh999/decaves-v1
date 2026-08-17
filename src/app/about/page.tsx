"use client";

import { useEffect, useRef } from "react";
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
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const definesRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Hero Animations
      const tlHero = gsap.timeline({ defaults: { ease: "power3.out" } });
      tlHero.to(".hero-eyebrow", { opacity: 1, y: 0, duration: 1.1 }, 0.1);
      tlHero.to(".hero-heading", { opacity: 1, y: 0, duration: 1.3 }, 0.25);
      tlHero.to(".hero-desc", { opacity: 1, y: 0, duration: 1.1 }, 0.4);

      // 2. Hero Image Animations
      gsap.timeline({
        scrollTrigger: {
          trigger: heroImageRef.current,
          start: "top 80%",
          once: true,
        },
      })
      .to(".hero-img-wrap", { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "power3.out" })
      .to(".hero-img-caption", { opacity: 1, y: 0, duration: 1.1 }, 0.3);

      // 3. Intro Statement Animations
      gsap.timeline({
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
          once: true,
        },
      })
      .to(".intro-eyebrow", { opacity: 1, y: 0, duration: 1.1 })
      .to(".intro-heading", { opacity: 1, y: 0, duration: 1.2 }, 0.15)
      .to(".intro-desc", { opacity: 1, y: 0, duration: 1.1 }, 0.3);

      // 4. Mission & Vision Animations
      gsap.timeline({
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 78%",
          once: true,
        },
      })
      .to(".mission-col", { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power3.out" });

      // 5. Defines Work Animations
      gsap.timeline({
        scrollTrigger: {
          trigger: definesRef.current,
          start: "top 80%",
          once: true,
        },
      })
      .to(".defines-eyebrow", { opacity: 1, y: 0, duration: 1.1 })
      .to(".defines-heading", { opacity: 1, y: 0, duration: 1.3, ease: "power3.out" }, 0.15)
      .to(".defines-desc", { opacity: 1, y: 0, duration: 1.1 }, 0.35);

      // 6. Featured Project Animations
      gsap.timeline({
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top 78%",
          once: true,
        },
      })
      .to(".project-img-wrap", { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "power3.out" })
      .to([".project-label", ".project-heading"], { opacity: 1, y: 0, duration: 1.1, stagger: 0.15 }, 0.3);

      // 7. Services Animations
      gsap.timeline({
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          once: true,
        },
      })
      .to(".services-eyebrow", { opacity: 1, y: 0, duration: 1.1 })
      .to(".services-col", { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power3.out" }, 0.2);

      // 8. Closing CTA Animations
      gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 76%",
          once: true,
        },
      })
      .to(".cta-eyebrow", { opacity: 1, y: 0, duration: 1.1 })
      .to(".cta-heading", { opacity: 1, y: 0, duration: 1.3, ease: "power3.out" }, 0.15)
      .to(".cta-desc", { opacity: 1, y: 0, duration: 1.1 }, 0.3)
      .to(".cta-btn", { opacity: 1, y: 0, duration: 1.1 }, 0.45);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header />
      <main ref={containerRef} className="min-h-screen bg-cream text-text-primary overflow-hidden relative paper-limestone-texture">
        
        {/* 1. Hero Section */}
        <section ref={heroRef} className="pt-36 pb-16 md:pt-48 md:pb-24 max-w-6xl mx-auto px-6 text-center">
          <span className="hero-eyebrow block text-[11px] font-bold tracking-[0.35em] text-brown uppercase mb-6 opacity-0 translate-y-4">
            ABOUT DE'CAVES
          </span>
          <h1 className="hero-heading font-display text-5xl md:text-7xl lg:text-[80px] leading-[1.05] tracking-[-0.02em] text-brown-deep mb-8 opacity-0 translate-y-6 select-none">
            Spaces are not simply designed. <br className="hidden md:inline" /> They are experienced.
          </h1>
          <p className="hero-desc font-body text-[14px] md:text-[16px] tracking-[0.05em] text-brown/75 max-w-lg mx-auto leading-relaxed opacity-0 translate-y-4">
            De'Caves is an architecture and interior design practice focused on creating spaces shaped by material, light, proportion and the people who inhabit them.
          </p>
        </section>

        {/* 2. Hero Image Section */}
        <section ref={heroImageRef} className="pb-16 md:pb-24 max-w-6xl mx-auto px-6">
          <div className="hero-img-wrap w-full relative aspect-[21/9] md:h-[70vh] md:aspect-auto overflow-hidden rounded bg-brown-dark/10 opacity-0 translate-y-8 scale-[1.02]">
            <CloudinaryImage
              src={siteImage("/our_projects_1.webp")}
              alt="De'Caves completed architecture landscape project view"
              fill
              sizes="100vw"
              className="object-cover warm-editorial-filter"
            />
          </div>
          <p className="hero-img-caption font-sans text-[11px] font-bold tracking-[0.2em] text-brown/50 uppercase mt-6 text-center opacity-0 translate-y-3 select-none">
            Designed with intention. Experienced over time.
          </p>
        </section>

        {/* 3. Intro Statement Section */}
        <section ref={introRef} className="py-20 md:py-28 max-w-4xl mx-auto px-6 text-center">
          <span className="intro-eyebrow block text-[11px] font-bold tracking-[0.3em] text-brown/50 uppercase mb-6 opacity-0 translate-y-3">
            OUR APPROACH
          </span>
          <h2 className="intro-heading font-display text-3xl md:text-5xl lg:text-[52px] leading-[1.1] tracking-[-0.01em] text-brown-deep mb-8 opacity-0 translate-y-4 max-w-3xl mx-auto">
            Architecture begins long before the first line is drawn.
          </h2>
          <p className="intro-desc font-body text-[15px] md:text-[17px] tracking-[0.03em] leading-[1.8] text-brown/80 max-w-xl mx-auto opacity-0 translate-y-4">
            We begin by understanding how a space will be lived in. Its surroundings, its purpose and the small details that shape everyday experience all inform what follows.
          </p>
        </section>

        {/* 4. Mission & Vision Section */}
        <section ref={missionRef} className="py-20 md:py-28 max-w-5xl mx-auto px-6 border-t border-brown/10 border-b border-brown/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            
            {/* Philosophy Column */}
            <div className="mission-col flex flex-col items-start text-left opacity-0 translate-y-6">
              <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-brown/50 uppercase mb-4">
                OUR PHILOSOPHY
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-brown-deep mb-4">
                Design with purpose.
              </h3>
              <p className="font-body text-[14px] text-brown/70 leading-relaxed max-w-sm">
                Every decision should have a reason. From proportion and circulation to material and light, we create spaces where each element contributes to the whole.
              </p>
            </div>

            {/* Vision Column */}
            <div className="mission-col flex flex-col items-start text-left opacity-0 translate-y-6">
              <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-brown/50 uppercase mb-4">
                OUR VISION
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-brown-deep mb-4">
                Spaces that remain relevant.
              </h3>
              <p className="font-body text-[14px] text-brown/70 leading-relaxed max-w-sm">
                We aim to create architecture and interiors that move beyond passing trends and continue to feel considered, personal and appropriate over time.
              </p>
            </div>

          </div>
        </section>

        {/* 5. Large Statement Section */}
        <section ref={definesRef} className="py-24 md:py-36 max-w-4xl mx-auto px-6 text-center">
          <span className="defines-eyebrow block text-[11px] font-bold tracking-[0.3em] text-brown/50 uppercase mb-6 opacity-0 translate-y-3">
            WHAT DEFINES OUR WORK
          </span>
          <h2 className="defines-heading font-display text-4xl md:text-6xl text-brown-deep leading-tight mb-8 opacity-0 translate-y-6 select-none">
            Context. <span className="text-brown/40 mx-2 font-light">•</span> Material. <span className="text-brown/40 mx-2 font-light">•</span> Light. <span className="text-brown/40 mx-2 font-light">•</span> Experience.
          </h2>
          <p className="defines-desc font-body text-[15px] md:text-[16px] tracking-[0.05em] text-brown/75 leading-relaxed max-w-xl mx-auto opacity-0 translate-y-4">
            Our work is guided by a simple belief: a successful space should feel natural to the people who inhabit it. Not excessive. Not imposed. Simply considered.
          </p>
        </section>

        {/* 6. Featured Project Section */}
        <section ref={projectRef} className="py-12 md:py-20 max-w-6xl mx-auto px-6">
          <div className="project-img-wrap w-full relative aspect-[21/9] overflow-hidden rounded bg-brown-dark/10 opacity-0 translate-y-8 scale-[1.02]">
            <CloudinaryImage
              src={siteImage("/our_projects_2.webp")}
              alt="De'Caves project spatial detail"
              fill
              sizes="100vw"
              className="object-cover warm-editorial-filter"
            />
          </div>
          <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <span className="project-label font-sans text-[11px] font-bold tracking-[0.25em] text-brown uppercase opacity-0 translate-y-3">
              BUILT AROUND EXPERIENCE
            </span>
            <h3 className="project-heading font-display text-2xl md:text-3xl text-brown-deep max-w-md opacity-0 translate-y-3">
              Spaces designed for the way life unfolds.
            </h3>
          </div>
        </section>

        {/* 7. Services Section */}
        <section ref={servicesRef} className="py-20 md:py-32 max-w-5xl mx-auto px-6 border-t border-brown/10">
          <span className="services-eyebrow block text-[11px] font-bold tracking-[0.3em] text-brown/50 uppercase mb-16 opacity-0 translate-y-3">
            WHAT WE DO
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            
            {/* Service 01 */}
            <div className="services-col flex flex-col items-start text-left opacity-0 translate-y-4">
              <div className="flex flex-col items-start w-full mb-4">
                <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-brown">
                  01
                </span>
                <span className="h-px w-10 bg-brown/20 mt-2 origin-left" />
              </div>
              <h3 className="font-display text-2xl text-brown-deep mb-3">
                Architecture
              </h3>
              <p className="font-body text-[14px] text-brown/70 leading-relaxed">
                Thoughtful architectural spaces shaped by context, function and everyday life.
              </p>
            </div>

            {/* Service 02 */}
            <div className="services-col flex flex-col items-start text-left opacity-0 translate-y-4">
              <div className="flex flex-col items-start w-full mb-4">
                <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-brown">
                  02
                </span>
                <span className="h-px w-10 bg-brown/20 mt-2 origin-left" />
              </div>
              <h3 className="font-display text-2xl text-brown-deep mb-3">
                Interior Design
              </h3>
              <p className="font-body text-[14px] text-brown/70 leading-relaxed">
                Interiors where material, proportion and atmosphere come together with clarity.
              </p>
            </div>

            {/* Service 03 */}
            <div className="services-col flex flex-col items-start text-left opacity-0 translate-y-4">
              <div className="flex flex-col items-start w-full mb-4">
                <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-brown">
                  03
                </span>
                <span className="h-px w-10 bg-brown/20 mt-2 origin-left" />
              </div>
              <h3 className="font-display text-2xl text-brown-deep mb-3">
                Spatial Experience
              </h3>
              <p className="font-body text-[14px] text-brown/70 leading-relaxed">
                A considered approach to the details that shape how a space is seen, felt and lived in.
              </p>
            </div>

          </div>
        </section>

        {/* 8. Closing CTA Section */}
        <section ref={ctaRef} className="bg-brown-deep text-[#EFEBE4] py-28 md:py-36 relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none bg-[radial-gradient(#EFEBE4_1px,transparent_1px)] [background-size:20px_20px]" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <span className="cta-eyebrow block text-[11px] font-bold tracking-[0.35em] text-[#EFEBE4]/60 uppercase mb-6 opacity-0 translate-y-4">
              LET'S CREATE SOMETHING
            </span>
            <h2 className="cta-heading font-display text-4xl md:text-6xl text-white mb-6 opacity-0 translate-y-6 select-none">
              A space that feels right.
            </h2>
            <p className="cta-desc font-body text-[14px] md:text-[16px] tracking-[0.05em] text-[#EFEBE4]/75 max-w-md mx-auto leading-relaxed mb-12 opacity-0 translate-y-4">
              Every project begins with a conversation.
            </p>
            <div className="cta-btn opacity-0 translate-y-4">
              <Link
                href="/#contact"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-[12px] font-bold tracking-[0.2em] text-white uppercase transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-white/15 hover:border-white/40 active:scale-[0.98]"
              >
                Contact Us &rarr;
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
