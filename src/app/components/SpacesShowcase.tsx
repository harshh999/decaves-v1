"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import type { Project } from "@/data/projects";
import CloudinaryImage from "./CloudinaryImage";
import NonHeroProjectImage from "./NonHeroProjectImage";

interface SpacesShowcaseProps {
  projects: Project[];
}

export default function SpacesShowcase({ projects }: SpacesShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textContentRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const indicatorRef = useRef<HTMLDivElement>(null);
  
  const isTransitioningRef = useRef(false);
  const touchStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Update active project and trigger GSAP animations
  const goToProject = useCallback(
    (newIndex: number) => {
      if (newIndex === activeIndex || isTransitioningRef.current) return;
      
      const targetIndex = (newIndex + projects.length) % projects.length;
      isTransitioningRef.current = true;
      setPrevIndex(activeIndex);
      setActiveIndex(targetIndex);

      // Lock rapid transitions for smooth GSAP playback
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, 750);
    },
    [activeIndex, projects.length]
  );

  const nextProject = useCallback(() => {
    goToProject(activeIndex + 1);
  }, [activeIndex, goToProject]);

  const prevProject = useCallback(() => {
    goToProject(activeIndex - 1);
  }, [activeIndex, goToProject]);

  // Preload adjacent project hero images
  useEffect(() => {
    if (typeof window === "undefined" || projects.length === 0) return;

    const nextIdx = (activeIndex + 1) % projects.length;
    const prevIdx = (activeIndex - 1 + projects.length) % projects.length;

    [nextIdx, prevIdx].forEach((idx) => {
      const src = projects[idx]?.heroImage;
      if (src && src.startsWith("http")) {
        const img = new Image();
        img.src = src;
      }
    });
  }, [activeIndex, projects]);

  // Animate hero image crossfade & scale with GSAP
  useEffect(() => {
    if (typeof window === "undefined") return;

    const currentEl = imageRefs.current[activeIndex];
    const prevEl = prevIndex !== null ? imageRefs.current[prevIndex] : null;

    if (currentEl) {
      // Bring active layer to front and fade in smoothly
      gsap.killTweensOf([currentEl, prevEl]);

      gsap.set(currentEl, { zIndex: 10, display: "block" });
      if (prevEl) {
        gsap.set(prevEl, { zIndex: 5 });
      }

      // Animate active image fade in and subtle scale down
      gsap.fromTo(
        currentEl,
        { opacity: prevIndex === null ? 1 : 0, scale: 1.05 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.0,
          ease: "power2.out",
        }
      );

      // Fade out previous image
      if (prevEl && prevEl !== currentEl) {
        gsap.to(prevEl, {
          opacity: 0,
          duration: 0.9,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(prevEl, { display: "none" });
          },
        });
      }
    }
  }, [activeIndex, prevIndex]);

  // Animate text info content entrance
  useEffect(() => {
    if (!textContentRef.current || typeof window === "undefined") return;

    const children = textContentRef.current.children;
    gsap.fromTo(
      children,
      { opacity: 0, y: 22 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: "power3.out",
      }
    );
  }, [activeIndex]);

  // Position active indicator and scroll bottom index item into view
  useEffect(() => {
    const activeItem = itemRefs.current[activeIndex];
    const navContainer = navContainerRef.current;
    const indicator = indicatorRef.current;

    if (activeItem && navContainer && indicator) {
      // Calculate offset relative to parent container
      const containerRect = navContainer.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      const leftOffset = activeItem.offsetLeft;
      const width = activeItem.offsetWidth;

      // Animate indicator line position
      gsap.to(indicator, {
        left: leftOffset,
        width: width,
        duration: 0.45,
        ease: "power3.out",
      });

      // Smooth scroll bottom nav container to center active project
      const scrollLeft =
        leftOffset - containerRect.width / 2 + itemRect.width / 2;
      navContainer.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  // Wheel / Trackpad scroll listener with debounce lock
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Prevent default page scroll on desktop to create full showcase experience
      if (Math.abs(e.deltaY) > 25) {
        e.preventDefault();
        if (isTransitioningRef.current) return;

        if (e.deltaY > 0) {
          nextProject();
        } else {
          prevProject();
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [nextProject, prevProject]);

  // Keyboard Arrow Key listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        nextProject();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prevProject();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextProject, prevProject]);

  // Touch Swipe Handlers for mobile / tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const deltaX = e.changedTouches[0].clientX - touchStartRef.current.x;
    const deltaY = e.changedTouches[0].clientY - touchStartRef.current.y;

    // Horizontal swipe threshold check (ensure horizontal intent > vertical)
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        nextProject();
      } else {
        prevProject();
      }
    }
  };

  const activeProject = projects[activeIndex];

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[100dvh] overflow-hidden bg-[#120D0A] select-none text-white"
    >
      {/* 1. Full-Screen Background Hero Images Layer (Hero Image Rule: 0px border-radius, rectangular) */}
      <div className="absolute inset-0 z-0 rounded-none" style={{ borderRadius: "0px" }}>
        {projects.map((project, idx) => {
          const isInitial = idx === 0;
          return (
            <div
              key={project.slug}
              ref={(el) => {
                imageRefs.current[idx] = el;
              }}
              className="absolute inset-0 w-full h-full rounded-none"
              style={{
                borderRadius: "0px",
                opacity: isInitial ? 1 : 0,
                display: isInitial ? "block" : "none",
                willChange: "opacity, transform",
              }}
            >
              {project.heroImage.startsWith("http") ? (
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-center rounded-none"
                  style={{ borderRadius: "0px" }}
                />
              ) : (
                <CloudinaryImage
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  priority={isInitial}
                  sizes="100vw"
                  className="w-full h-full object-cover object-center rounded-none"
                  style={{ borderRadius: "0px" }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* 2. Sophisticated Architectural Gradient Overlays */}
      {/* Top Overlay for Header Readability */}
      <div className="absolute top-0 left-0 right-0 h-40 z-10 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />

      {/* Bottom Editorial Overlay for Content Readability */}
      <div className="absolute bottom-0 left-0 right-0 h-[65dvh] z-10 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />

      {/* 3. Floating Left/Right Navigation Arrows (Desktop & Mobile subtle controls) */}
      <button
        onClick={prevProject}
        aria-label="Previous Project"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 md:p-3 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/10 text-white/70 hover:text-white transition-all duration-300 active:scale-95 group hidden sm:flex items-center justify-center"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-x-0.5" />
      </button>

      <button
        onClick={nextProject}
        aria-label="Next Project"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 md:p-3 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/10 text-white/70 hover:text-white transition-all duration-300 active:scale-95 group hidden sm:flex items-center justify-center"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* 4. Active Project Information & Metadata Area */}
      {activeProject && (
        <div className="absolute bottom-24 md:bottom-28 left-6 sm:left-12 lg:left-16 right-6 z-20 max-w-3xl pointer-events-auto">
          <div ref={textContentRef} className="flex flex-col items-start">
            {/* Category / Location & Project Counter */}
            <div className="flex items-center gap-3 mb-2">
              <span className="font-sans text-[11px] md:text-[12px] uppercase tracking-[0.25em] font-semibold text-white/70 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
              {activeProject.location && (
                <span className="font-sans text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-medium text-white/80">
                  {activeProject.location}
                </span>
              )}
            </div>

            {/* Prominent Display Title */}
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-[-0.01em] text-white drop-shadow-md my-1">
              {activeProject.title}
            </h2>

            {/* Brief Metadata / Subtitle */}
            <p className="font-body text-xs sm:text-sm text-white/75 max-w-xl line-clamp-2 mt-1 mb-4 leading-relaxed font-light hidden sm:block">
              {activeProject.description || "Architectural space designed with intention, proportion, and elemental discipline."}
            </p>

            {/* Minimal Architectural EXPLORE PROJECT Button */}
            <Link
              href={`/spaces/${activeProject.slug}`}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-[11px] font-bold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 group shadow-lg active:scale-95"
            >
              <span>EXPLORE PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      )}

      {/* 5. Bottom Horizontal Project Index Bar (19 Projects) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-4 pt-6 px-4 md:px-8 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
        <div
          ref={navContainerRef}
          className="relative flex items-center gap-6 md:gap-8 overflow-x-auto scrollbar-none px-2 py-2 select-none scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Active Sliding Indicator Underline */}
          <div
            ref={indicatorRef}
            className="absolute bottom-0 h-[2px] bg-white rounded-full pointer-events-none"
            style={{ left: 0, width: 0 }}
          />

          {projects.map((project, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={project.slug}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                onClick={() => goToProject(idx)}
                className={`group relative flex items-center gap-2.5 pb-2 text-[11px] md:text-[12px] font-sans uppercase tracking-[0.18em] whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-white font-bold opacity-100"
                    : "text-white/40 hover:text-white/80 font-medium"
                }`}
              >
                {/* Non-Hero Project Image Thumbnail - Smooth 16px Rounded Corners via NonHeroProjectImage */}
                <NonHeroProjectImage
                  src={project.heroImage}
                  alt={project.title}
                  sizes="60px"
                  className="w-10 h-7 md:w-12 md:h-8 flex-shrink-0 border border-white/20 shadow-md group-hover:scale-105 transition-transform duration-300"
                />

                <span className="text-[10px] opacity-60 font-mono">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span>{project.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
