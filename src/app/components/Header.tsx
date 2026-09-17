"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import CloudinaryImage from "./CloudinaryImage";
import { siteImage } from "@/data/images";
import gsap from "gsap";

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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileMenuRef.current) return;
    
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(mobileMenuRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.fromTo(
        ".mobile-nav-item > a",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out", delay: 0.1 }
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

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
    let rId: number;
    const handleResize = () => {
      cancelAnimationFrame(rId);
      rId = requestAnimationFrame(() => {
        const targetIndex = hoveredIndex !== null ? hoveredIndex : (activeIndex !== -1 ? activeIndex : null);
        if (targetIndex !== null) {
          updatePillPosition(targetIndex);
        }
      });
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      cancelAnimationFrame(rId);
      window.removeEventListener("resize", handleResize);
    };
  }, [hoveredIndex, activeIndex]);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }

    if (pathname === "/") {
      e.preventDefault();
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(0, { duration: 0.45, immediate: false });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  };

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
            onClick={handleLogoClick}
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

        <div className="flex flex-1 justify-end items-center">
          <div className="hidden md:block">
            <Link
              href="/#contact"
              className="inline-block rounded-full border border-black/20 bg-transparent px-6 py-2.5 text-[13px] font-medium tracking-[0.1em] text-[#171717] uppercase transition-all duration-[400ms] ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-black/5 hover:border-black/40 active:scale-[0.98]"
            >
              Contact Us
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="inline-block rounded-full border border-black/20 bg-transparent px-4 py-2 text-[12px] font-medium tracking-[0.1em] text-[#171717] uppercase transition-all duration-[400ms] ease-[cubic-bezier(0.25,1,0.5,1)] active:scale-[0.95]"
            >
              MENU
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-[1005] flex flex-col justify-center items-center bg-[#F6F2EB]/95 backdrop-blur-md md:hidden pointer-events-none opacity-0"
        style={{
          paddingTop: "env(safe-area-inset-top, 0px)",
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
          paddingLeft: "env(safe-area-inset-left, 0px)",
          paddingRight: "env(safe-area-inset-right, 0px)",
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
          className="absolute flex h-11 w-11 items-center justify-center rounded-full text-[#352219] transition-all duration-300 hover:opacity-70 active:scale-95 focus:outline-none"
          style={{
            top: "max(1.25rem, calc(env(safe-area-inset-top, 0px) + 0.75rem))",
            right: "max(1.25rem, calc(env(safe-area-inset-right, 0px) + 0.75rem))",
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-[22px] h-[22px]"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <nav className="flex flex-col items-center gap-10">
          {[
            { href: "/about", label: "ABOUT" },
            { href: "/spaces", label: "SPACES" },
            { href: "/#contact", label: "CONTACT US" },
          ].map((link) => (
            <div key={link.href} className="mobile-nav-item overflow-hidden">
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-display text-4xl tracking-tight text-[#352219] transition-opacity duration-300 active:opacity-70"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
