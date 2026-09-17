"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LifeAtDecaves() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate header text
      gsap.fromTo(
        ".life-header-anim",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".life-header-container",
            start: "top 82%",
            once: true,
          },
        }
      );

      // Animate editorial image blocks
      const blocks = gsap.utils.toArray<HTMLElement>(".life-image-block");
      blocks.forEach((block) => {
        const innerImg = block.querySelector(".life-img-inner");
        gsap.fromTo(
          block,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 85%",
              once: true,
            },
          }
        );

        if (innerImg) {
          gsap.fromTo(
            innerImg,
            { scale: 1.04 },
            {
              scale: 1,
              duration: 1.4,
              ease: "power2.out",
              scrollTrigger: {
                trigger: block,
                start: "top 85%",
                once: true,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-28 max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 border-t border-[#8A6E5A]/15 relative z-10"
    >
      {/* 1. Section Introduction */}
      <div className="life-header-container max-w-3xl mb-16 md:mb-24">
        <div className="life-header-anim mb-4">
          <span className="font-sans text-[12px] md:text-[13px] font-medium tracking-[0.14em] text-[#8A6E5A] uppercase">
            LIFE AT DE&apos;CAVES
          </span>
        </div>
        <h2 className="life-header-anim font-display text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.08] tracking-[-0.02em] text-[#352219] mb-6">
          Where ideas take shape.
        </h2>
        <p className="life-header-anim font-body text-[16px] sm:text-[18px] md:text-[19px] leading-[1.75] text-[#5A453A] font-light max-w-2xl">
          A studio built around conversation, observation and the everyday process of making.
        </p>
      </div>

      {/* 2. Asymmetrical Editorial Gallery Layout (7 Images: 2.jpg, 3.jpg, 4.jpg, 8.jpg, 9.jpg, 10.jpg, 14.jpg) */}
      <div className="space-y-16 md:space-y-28">
        {/* Composition 1: Opening Wide Architectural Highlight (14.jpg) */}
        <div className="life-image-block relative w-full aspect-[16/9] md:aspect-[21/9] max-h-[640px] overflow-hidden rounded-[16px] bg-[#352219]/10 shadow-[0_12px_40px_rgba(53,34,25,0.06)] group">
          <div className="life-img-inner relative w-full h-full transition-transform duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.025]">
            <Image
              src="/images/about/life/14.jpg"
              alt="De'Caves architectural studio space"
              fill
              priority
              sizes="(max-width: 1360px) 100vw, 1360px"
              className="object-cover warm-editorial-filter"
            />
          </div>
        </div>

        {/* Composition 2: Vertical Contrast (8.jpg) + Landscape (3.jpg) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Vertical (8.jpg) */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="life-image-block relative w-full aspect-[3/4] overflow-hidden rounded-[16px] bg-[#352219]/10 shadow-lg group">
              <div className="life-img-inner relative w-full h-full transition-transform duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.025]">
                <Image
                  src="/images/about/life/8.jpg"
                  alt="De'Caves studio detail"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover warm-editorial-filter"
                />
              </div>
            </div>
          </div>

          {/* Landscape (3.jpg) + Typographic Pause */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col space-y-8">
            <div className="life-image-block relative w-full aspect-[16/10] overflow-hidden rounded-[16px] bg-[#352219]/10 shadow-lg group">
              <div className="life-img-inner relative w-full h-full transition-transform duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.025]">
                <Image
                  src="/images/about/life/3.jpg"
                  alt="Studio discussion area"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover warm-editorial-filter"
                />
              </div>
            </div>
            
            <p className="font-display italic text-xl sm:text-2xl text-[#8A6E5A] max-w-md pt-2">
              &ldquo;The studio is part of the practice.&rdquo;
            </p>
          </div>
        </div>

        {/* Composition 3: Dual Column - Left (2.jpg, text & 4.jpg) & Right (9.jpg vertical) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Column: Landscape (2.jpg) + Supporting Text + Landscape (4.jpg) */}
          <div className="md:col-span-6 space-y-6 md:space-y-8">
            <div className="life-image-block relative w-full aspect-[16/10] overflow-hidden rounded-[16px] bg-[#352219]/10 shadow-lg group">
              <div className="life-img-inner relative w-full h-full transition-transform duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.025]">
                <Image
                  src="/images/about/life/2.jpg"
                  alt="De'Caves drawing process"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover warm-editorial-filter"
                />
              </div>
            </div>

            <p className="font-body text-[15px] text-[#5A453A] font-light leading-relaxed py-1">
              A place for drawing, discussing, observing and making.
            </p>

            <div className="life-image-block relative w-full aspect-[16/10] overflow-hidden rounded-[16px] bg-[#352219]/10 shadow-lg group">
              <div className="life-img-inner relative w-full h-full transition-transform duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.025]">
                <Image
                  src="/images/about/life/4.jpg"
                  alt="Material exploration in studio"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover warm-editorial-filter"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Vertical (9.jpg) */}
          <div className="md:col-span-6">
            <div className="life-image-block relative w-full aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-[16px] bg-[#352219]/10 shadow-lg group">
              <div className="life-img-inner relative w-full h-full transition-transform duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.025]">
                <Image
                  src="/images/about/life/9.jpg"
                  alt="Architectural light and shadow observation"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover warm-editorial-filter"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Composition 4: Final Editorial Feature (10.jpg) */}
        <div className="life-image-block relative w-full aspect-[16/10] md:aspect-[2/1] overflow-hidden rounded-[16px] bg-[#352219]/10 shadow-xl group">
          <div className="life-img-inner relative w-full h-full transition-transform duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.025]">
            <Image
              src="/images/about/life/10.jpg"
              alt="Studio environment overview"
              fill
              sizes="(max-width: 1360px) 100vw, 1360px"
              className="object-cover warm-editorial-filter"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
