"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Project } from "@/data/projects";
import CloudinaryImage from "./CloudinaryImage";
import NonHeroProjectImage from "./NonHeroProjectImage";

export default function SpacesList({ projects }: { projects: Project[] }) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".space-row").forEach((row) => {
        const imgClip = row.querySelector(".space-img-clip");
        const imgInner = row.querySelector(".space-img-inner");
        const rules = row.querySelectorAll(".space-title-line, .space-rule");
        const reveals = row.querySelectorAll(".space-reveal");

        if (!imgClip || !imgInner) return;

        gsap.fromTo(
          imgClip,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.3,
            ease: "power3.inOut",
            scrollTrigger: { trigger: row, start: "top 78%", once: true },
          }
        );

        gsap.fromTo(
          imgInner,
          { scale: 1.18, yPercent: -6 },
          {
            scale: 1,
            yPercent: 6,
            ease: "none",
            scrollTrigger: { trigger: row, start: "top bottom", end: "bottom top", scrub: true },
          }
        );

        gsap.fromTo(
          rules,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: { trigger: row, start: "top 72%", once: true },
          }
        );

        gsap.fromTo(
          reveals,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            stagger: 0.14,
            scrollTrigger: { trigger: row, start: "top 72%", once: true },
          }
        );
      });
    }, listRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={listRef}>
      {projects.map((project, i) => {
        const alternate = i % 2 === 1;
        const rowContent = (
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-0">
            {/* Image Container */}
            <div className={`md:col-span-7 ${alternate ? "md:order-2" : "md:order-1"}`}>
              <div className="space-img-clip relative aspect-[4/3]">
                <NonHeroProjectImage
                  src={project.heroImage}
                  alt={project.title}
                  sizes="(max-width: 767px) 100vw, 58vw"
                  className="space-img-inner absolute inset-0 w-full h-full"
                  imageClassName="transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.025] warm-editorial-filter"
                />
                
                {/* Hover Metadata Overlay */}
                <div className="absolute bottom-5 left-5 z-10 opacity-0 translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:opacity-100 group-hover:translate-y-0 hidden md:block">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-semibold text-white bg-[#2C1A11]/60 backdrop-blur-md px-3.5 py-2 rounded border border-white/5">
                    {getProjectCategoryAndYear(project)}
                  </span>
                </div>
              </div>
            </div>

            {/* Text Content Container */}
            <div
              className={`flex flex-col justify-center items-start md:col-span-5 ${
                alternate
                  ? "md:order-1 md:pr-12 lg:pr-20"
                  : "md:order-2 md:pl-12 lg:pl-20"
              } mt-6 md:mt-0`}
            >
              {/* Project Number */}
              <div className="space-reveal flex flex-col items-start w-full">
                <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-brown">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="space-title-line mt-2.5 h-px w-12 bg-brown/20 origin-left" />
              </div>

              {/* Project Title */}
              <h3 className="space-reveal font-display mt-5 text-4xl md:text-5xl lg:text-[54px] font-normal leading-[1.1] tracking-[-0.01em] text-brown-deep">
                {project.title}
              </h3>

              {/* Location */}
              {project.location ? (
                <p className="space-reveal mt-3 font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-brown/70">
                  {project.location}
                </p>
              ) : null}

              {/* View Space CTA */}
              <div className="space-reveal mt-8">
                <span className="editorial-cta-link text-[11px] font-bold tracking-[0.2em] uppercase">
                  View Space
                  <ArrowRight className="cta-arrow h-3.5 w-3.5 transition-transform duration-300" />
                </span>
              </div>
            </div>
          </div>
        );

        if (project.isPlaceholder) {
          return (
            <div key={project.slug} className="space-row group relative block">
              {rowContent}
              {/* Separator line */}
              <div className="space-rule mx-auto my-12 h-px w-full bg-brown/10 md:my-16" />
            </div>
          );
        }

        return (
          <Link
            key={project.slug}
            href={`/spaces/${project.slug}`}
            className="space-row group relative block"
          >
            {rowContent}
            {/* Separator line */}
            <div className="space-rule mx-auto my-12 h-px w-full bg-brown/10 md:my-16" />
          </Link>
        );
      })}
    </div>
  );
}

// Helper to provide metadata on hover
function getProjectCategoryAndYear(project: Project) {
  const meta: Record<string, string> = {
    "spinal-stone": "Residential",
    "ankur-bhai": "Residential",
    "anhaya-store-kolhapur": "Retail",
    "suramya-altis": "Residential",
    "colortek-bhayli": "Commercial",
    "panchal-residence-sama": "Residential",
    "thavrani-residence": "Residential",
    "vayu-villa": "Residential",
    "arpita-sidhhpura": "Residential",
    "cafe-lemon": "Commercial",
  };
  
  const category = meta[project.slug] || "Architecture";
  const suffix = project.status === "Ongoing" ? "ONGOING" : (project.completion || "2026");
  
  return `${category} / ${suffix}`;
}