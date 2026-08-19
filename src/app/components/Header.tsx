"use client";

import { useEffect, useState } from "react";
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
          background: "#FFFFFF",
          opacity: 1,
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.06)" : "none",
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
                width={2532}
                height={567}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-8 md:flex lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium tracking-[0.15em] text-[#171717] uppercase transition-opacity duration-[250ms] ease-out hover:opacity-100"
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
