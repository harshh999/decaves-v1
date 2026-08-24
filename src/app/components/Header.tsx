"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import CloudinaryImage from "./CloudinaryImage";
import { siteImage } from "@/data/images";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/spaces", label: "Spaces" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeHref =
    pathname === "/"
      ? "/"
      : pathname.startsWith("/spaces")
        ? "/spaces"
        : pathname.startsWith("/about")
          ? "/about"
          : pathname;

  const activeIndex = navLinks.findIndex((link) => link.href === activeHref);

  const updatePillPosition = (targetIndex: number) => {
    const el = linkRefs.current[targetIndex];
    if (el) {
      setPillStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
        opacity: 1,
      });
    }
  };

  useEffect(() => {
    const targetIndex = hoveredIndex !== null ? hoveredIndex : (activeIndex !== -1 ? activeIndex : null);
    if (targetIndex !== null) {
      updatePillPosition(targetIndex);
    } else {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [hoveredIndex, activeIndex]);

  // Handle window resizing to keep pill correctly aligned
  useEffect(() => {
    const handleResize = () => {
      const targetIndex = hoveredIndex !== null ? hoveredIndex : (activeIndex !== -1 ? activeIndex : null);
      if (targetIndex !== null) {
        updatePillPosition(targetIndex);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [hoveredIndex, activeIndex]);

  return (
    <header
      className="fixed left-0 top-0 z-[1000] flex w-full select-none justify-center px-5 md:px-8"
      style={{ paddingTop: 12 }}
    >
      <div
        className="flex w-full max-w-[900px] items-center justify-between rounded-full px-5 transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] md:px-8"
        style={{
          height: scrolled ? "56px" : "74px",
          background: "rgba(255, 255, 255, 0.40)",
          backgroundColor: "rgba(255, 255, 255, 0.40)",
          opacity: 1,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.35)",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
        }}
      >
        <div className="flex flex-1 justify-start">
          <Link
            href="/"
            className="flex select-none items-center justify-start transition-all duration-[400ms] ease-out hover:opacity-90 pl-1 md:pl-4"
          >
            <div className={`relative transition-all duration-[400ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${scrolled ? 'w-[110px] md:w-[130px]' : 'w-[130px] md:w-[160px]'}`}>
              <Image
                src="/decaves-wordmark.png"
                alt="De'Caves"
                width={1024}
                height={228}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        <nav className="relative hidden items-center justify-center gap-[2px] lg:gap-1 md:flex">
          {/* Shared Sliding Pill Indicator */}
          <div
            className="absolute top-1/2 -translate-y-1/2 h-[34px] rounded-full pointer-events-none"
            style={{
              left: `${pillStyle.left}px`,
              width: `${pillStyle.width}px`,
              opacity: pillStyle.opacity,
              background: "rgba(255, 255, 255, 0.32)",
              border: "1px solid rgba(255, 255, 255, 0.45)",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
              transitionProperty: "left, width, opacity",
              transitionDuration: "500ms, 500ms, 250ms",
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />

          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              ref={(el) => {
                linkRefs.current[index] = el;
              }}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="px-4 py-1.5 text-[14px] font-medium tracking-[0.15em] text-[#171717] uppercase transition-all duration-[250ms] ease-out hover:text-black relative z-10 rounded-full"
              style={{
                opacity:
                  hoveredIndex === index || (hoveredIndex === null && activeIndex === index)
                    ? 1
                    : 0.6,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 justify-end">
          <div className="hidden md:block">
            <Link
              href="/#contact"
              className="inline-block rounded-full border border-black/20 bg-transparent px-6 py-2.5 text-[13px] font-medium tracking-[0.1em] text-[#171717] uppercase transition-all duration-[400ms] ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-black/5 hover:border-black/40 active:scale-[0.98]"
            >
              Contact Us
            </Link>
          </div>

          <div className="md:hidden">
            <Link
              href="/#contact"
              className="inline-block rounded-full border border-black/20 bg-transparent px-4 py-2 text-[12px] font-medium tracking-[0.1em] text-[#171717] uppercase transition-all duration-[400ms] ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-black/5 hover:border-black/40"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
