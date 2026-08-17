"use client";

import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CloudinaryImage from "./CloudinaryImage";
import { siteImage } from "@/data/images";

const projects = [
  {
    title: "Project One",
    location: "India",
    year: "2026",
    image: siteImage("/Our_Project_p1/image_1.webp"),
    href: "/spaces/our-project-p1",
  },
  {
    title: "Project Two",
    location: "India",
    year: "2026",
    image: siteImage("/Our_Project_p2/image_1.webp"),
    href: "/spaces/our-project-p2",
  },
  {
    title: "Project Three",
    location: "India",
    year: "2026",
    image: siteImage("/Our_Project_p3/image_1.webp"),
    href: "/spaces/our-project-p3",
  },
  {
    title: "Project Four",
    location: "India",
    year: "2026",
    image: siteImage("/Our_Project_p4/image_1.webp"),
    href: "/spaces/our-project-p4",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Scale width from 85% to 100% as it scrolls into center
      gsap.fromTo(
        wrapperRef.current,
        { width: "85%" },
        {
          width: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );

      // Subtle Image Parallax effect
      gsap.fromTo(
        imgRef.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="project-card relative h-[100svh] w-full overflow-hidden">
      <div
        ref={wrapperRef}
        className="relative mx-auto flex h-full items-center justify-center overflow-hidden bg-[#F5F3EE]"
      >
        <CloudinaryImage
          ref={imgRef}
          src={project.image}
          alt={project.title}
          width={1920}
          height={1080}
          className="h-[120%] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      <a href={project.href} className="group absolute inset-0 z-10">
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 mx-auto w-[85%] pb-8 md:pb-12">
          <div className="grid translate-y-8 grid-cols-[1fr_auto] items-end opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            <div>
              <h3 className="font-display text-xl font-light leading-tight tracking-tight text-cream drop-shadow-lg md:text-2xl">
                {project.title}
              </h3>
              <p className="mt-1 text-xs tracking-[0.18em] text-cream uppercase drop-shadow-lg md:text-sm">
                {project.location}
                <span className="mx-2">·</span>
                {project.year}
              </p>
            </div>
            <div className="mb-1">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors group-hover:border-brown group-hover:bg-tan-light group-hover:text-brown-deep">
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header text reveal
      gsap.fromTo(
        [titleRef.current, subtitleRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Footer Button reveal
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="projects-section" 
      ref={sectionRef} 
      className="bg-[#F5F3EE] relative z-20"
    >
      <div className="px-6 pt-[100px] pb-[70px] text-center md:px-12 xl:px-20 flex flex-col items-center">
        <h2 
          ref={titleRef}
          className="font-serif italic font-light text-4xl md:text-[68px] leading-[1.1] text-[#171717] tracking-normal"
        >
          Selected Architecture
        </h2>
        <p 
          ref={subtitleRef}
          className="mt-[32px] max-w-[620px] mx-auto text-[17px] md:text-[18px] leading-[1.8] text-[#55514C] font-serif font-light"
        >
          An ongoing collection of homes where architecture becomes timeless.
        </p>
      </div>

      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}

      <div ref={buttonRef} className="flex h-[80px] md:h-[100px] lg:h-[110px] w-full items-center justify-center px-6">
        <Link
          href="/spaces"
          className="inline-flex items-center gap-2 rounded-full border border-[#171717]/20 hover:border-[#171717] bg-transparent px-[24px] py-[12px] text-[10px] md:text-[11px] font-medium tracking-[0.18em] text-[#171717] uppercase transition-colors hover:bg-[#171717] hover:text-[#F5F3EE]"
        >
          See All Projects
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
