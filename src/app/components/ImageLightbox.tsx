"use client";

import { useEffect, useRef } from "react";
import CloudinaryImage from "./CloudinaryImage";

interface Props {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (i: number) => void;
}

const MAIN_W = 621;
const THUMB_W = 148;
const THUMB_H = 83;

export default function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  onSelect,
}: Props) {
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = thumbRef.current;
    if (el) {
      const child = el.children[currentIndex] as HTMLElement;
      child?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  if (images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-brown-deep/70 backdrop-blur-lg" onClick={onClose}>
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        aria-label="Close"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label="Previous"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label="Next"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}

      <div className="flex flex-1 items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
        <div className="overflow-hidden" style={{ width: MAIN_W, height: 492 }}>
          <div
            className="flex"
            style={{
              transform: `translate3d(-${currentIndex * MAIN_W}px, 0, 0)`,
              transition: "transform 850ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="flex flex-shrink-0 items-center justify-center"
                style={{ width: MAIN_W, height: 492 }}
              >
                <CloudinaryImage
                  src={src}
                  alt=""
                  width={MAIN_W}
                  height={492}
                  className="max-h-full max-w-full object-contain"
                  loading={i === currentIndex || i === currentIndex + 1 || i === currentIndex - 1 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={thumbRef}
        className="flex justify-center gap-2 overflow-x-auto px-4 pb-4 pt-2"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className="flex-shrink-0 overflow-hidden rounded border-2 transition-all duration-200"
            style={{
              width: THUMB_W,
              height: THUMB_H,
              borderColor: i === currentIndex ? "#fff" : "transparent",
              opacity: i === currentIndex ? 1 : 0.5,
            }}
            onMouseEnter={(e) => {
              if (i !== currentIndex) e.currentTarget.style.opacity = "0.8";
            }}
            onMouseLeave={(e) => {
              if (i !== currentIndex) e.currentTarget.style.opacity = "0.5";
            }}
          >
            <CloudinaryImage src={src} alt="" width={THUMB_W} height={THUMB_H} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
