"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/spaces", label: "Spaces" },
  { href: "/concierge", label: "Concierge" },
  { href: "/about", label: "About us" },
  { href: "/career", label: "Careers" },
];

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        className={`fixed inset-0 z-[99] bg-brown-deep/55 backdrop-blur-md transition-opacity duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed right-0 top-0 z-[100] flex h-full w-full max-w-[90vw] flex-col border-l border-brown/25 bg-cream/95 p-8 shadow-2xl backdrop-blur-md transition-transform duration-500 sm:w-[440px] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)" }}
      >
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brown/30 text-brown-deep transition-colors hover:border-brown hover:bg-tan-light"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-12 flex flex-1 flex-col gap-2">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-display text-3xl font-light text-brown-deep transition-all duration-500 hover:text-brown md:text-4xl ${
                open
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[30px] opacity-0"
              }`}
              style={{
                transitionDelay: open ? `${i * 80}ms` : "0ms",
                transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)",
              }}
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="space-y-4 border-t border-brown/10 pt-6">
          <a
            href="mailto:design@dcaves.in"
            className="block text-sm text-brown-dark transition-colors hover:text-brown-deep"
          >
            design@dcaves.in
          </a>
          <p className="text-sm text-brown-dark">Hyderabad, India</p>

          <div className="flex gap-4 pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brown transition-colors hover:text-brown-deep"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brown transition-colors hover:text-brown-deep"
              aria-label="YouTube"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
