"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
        : pathname;

  return (
    <header
      className="fixed left-0 top-0 z-[1000] flex w-full select-none justify-center px-5 md:px-8"
      style={{ paddingTop: 12 }}
    >
      <div
        className="flex w-full max-w-[900px] items-center justify-between rounded-full px-5 transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] md:px-8"
        style={{
          height: scrolled ? "56px" : "74px",
          background: scrolled
            ? "rgba(26, 21, 18, 0.62)"
            : "rgba(26, 21, 18, 0.14)",
          backdropFilter: scrolled ? "blur(18px)" : "blur(12px)",
          WebkitBackdropFilter: scrolled ? "blur(18px)" : "blur(12px)",
          border: scrolled
            ? "1px solid rgba(255, 255, 255, 0.10)"
            : "1px solid rgba(255, 255, 255, 0.03)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0, 0, 0, 0.12)"
            : "none",
        }}
      >
        <div className="flex flex-1 justify-start">
          <Link
            href="/"
            className="flex select-none items-center justify-center transition-all duration-[400ms] ease-out hover:opacity-90"
            style={{
              height: scrolled ? "38px" : "50px",
              width: scrolled ? "38px" : "50px",
            }}
          >
            <CloudinaryImage
              src={siteImage("/De'Caves_logo.webp")}
              alt="De'Caves"
              width={72}
              height={72}
              className="h-full w-full object-contain"
            />
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-8 md:flex lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium tracking-[0.15em] text-white uppercase transition-opacity duration-[250ms] ease-out hover:opacity-100"
              style={{ opacity: activeHref === link.href ? 1 : 0.6 }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 justify-end">
          <div className="hidden md:block">
            <Link
              href="/#contact"
              className="inline-block rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-[13px] font-medium tracking-[0.1em] text-white uppercase transition-all duration-[400ms] ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-white/15 hover:border-white/40 active:scale-[0.98]"
            >
              Contact Us
            </Link>
          </div>

          <div className="md:hidden">
            <Link
              href="/#contact"
              className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[12px] font-medium tracking-[0.1em] text-white uppercase transition-all duration-[400ms] ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-white/15"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
