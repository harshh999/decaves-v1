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
    number: "01",
    title: "The Hanging Pyramids",
    location: "Woods Ville, Vadodara",
    year: "2025",
    image: "https://res.cloudinary.com/diqslwugu/image/upload/c_limit,w_1920/f_auto/q_auto/v1787252823/ay_mggfm9.webp",
    href: "/spaces/our-project-p2",
  },
  {
    number: "02",
    title: "Tathastu",
    location: "Woods Ville, Vadodara",
    year: "2025",
    image: "https://res.cloudinary.com/diqslwugu/image/upload/v1789573486/Screenshot_2026-09-16_at_9.06.45_PM_ssrxt4.png",
    href: "/spaces/tathastu-woods-ville",
  },
  {
    number: "03",
    title: "The Cottage House",
    location: "",
    year: "2025",
    image: "https://res.cloudinary.com/diqslwugu/image/upload/v1789576016/Screenshot_2026-09-16_at_9.55.00_PM_h0jjsn.png",
    href: "/spaces/cottage-house",
  },
  {
    number: "04",
    title: "Villa Hacienda",
    location: "Sherkhi, Vadodara",
    year: "2022",
    image: "https://res.cloudinary.com/diqslwugu/image/upload/v1789582804/Screenshot_2026-09-16_at_11.12.33_PM_rbovmg.png",
    href: "/spaces/our-project-p3",
  }
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Reveal with clip-path (GPU accelerated) instead of layout-triggering width
      gsap.fromTo(
        wrapperRef.current,
        { clipPath: "inset(0% 7.5%)" },
        {
          clipPath: "inset(0% 0%)",
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

  const Container = project.href ? "a" : "div";
  const containerProps = project.href ? { href: project.href } : {};

  return (
    <div ref={containerRef} className="project-card relative h-[100svh] w-full overflow-hidden">
      <div
        ref={wrapperRef}
        className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#F5F3EE]"
      >
        {project.image.startsWith("http") || project.image.startsWith("/") ? (
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

      <Container {...containerProps} className="group absolute inset-0 z-10 flex flex-col justify-end">
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
            className="font-serif text-[28px] md:text-[34px] lg:text-[38px] leading-tight drop-shadow-sm flex items-baseline gap-4"
            style={{ fontWeight: 400, color: 'rgba(255, 255, 255, 0.95)' }}
          >
            {project.number && <span className="font-sans text-[12px] md:text-[14px] font-bold tracking-[0.2em] opacity-80">{project.number}</span>}
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
      </Container>
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
