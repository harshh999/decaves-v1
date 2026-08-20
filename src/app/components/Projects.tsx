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
    title: "The Floating boxes ",
    location: "Vadodara",
    year: "2026",
    image: "https://res.cloudinary.com/diqslwugu/image/upload/c_limit,w_1920/f_auto/q_auto/v1787238405/floatingboxes2_wpxpwj.webp",
    href: "/spaces/our-project-p1",
  },
  {
    title: "The Hanging Pyramids ",
    location: "Sherkhi, Vadodara",
    year: "2026",
    image: "https://res.cloudinary.com/diqslwugu/image/upload/c_limit,w_1920/f_auto/q_auto/v1787252823/ay_mggfm9.webp",
    href: "/spaces/our-project-p2",
  },
  {
    title: "Villa Hacienda",
    location: "Vadodara",
    year: "2026",
    image: "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_1920/f_auto/q_auto/v1/our-project-p3/image-4?_a=BAVT+ODY0",
    href: "/spaces/our-project-p3",
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
        {project.image.startsWith("http") ? (
          <img
            ref={imgRef as any}
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-[120%] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <CloudinaryImage
            ref={imgRef}
            src={project.image}
            alt={project.title}
            width={1920}
            height={1080}
            className="h-[120%] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
        )}
      </div>

      <a href={project.href} className="group absolute inset-0 z-10 flex flex-col justify-end">
        {/* Permanent Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 35%, rgba(0,0,0,0.12) 55%, rgba(0,0,0,0.58) 100%)'
          }}
        />

        {/* Permanent Text Overlay Container */}
        <div className="relative z-20 w-full px-6 pb-6 md:w-[65%] md:px-12 md:pb-8 lg:w-[42%] xl:w-[38%] xl:px-12 xl:pb-10">
          <h3
            className="font-serif text-[28px] md:text-[34px] lg:text-[38px] leading-tight drop-shadow-sm"
            style={{ fontWeight: 400, color: 'rgba(255, 255, 255, 0.95)' }}
          >
            {project.title}
          </h3>

          <div
            className="w-full h-[1px]"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.28)',
              marginTop: '16px',
              marginBottom: '16px'
            }}
          />

          <div
            className="flex flex-row justify-between items-center text-[10px] md:text-[11px] lg:text-[12px] uppercase drop-shadow-sm"
            style={{
              letterSpacing: '0.18em',
              color: 'rgba(255, 255, 255, 0.72)'
            }}
          >
            <span>{project.location}</span>
            <span>{project.year}</span>
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
