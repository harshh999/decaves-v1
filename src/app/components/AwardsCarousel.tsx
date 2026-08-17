"use client";

import { useState } from "react";

export default function AwardsCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="bg-cream py-12">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 xl:px-16">
        <h2 className="font-serif text-2xl font-light italic text-brown-deep md:text-3xl">
          Awards & Recognition
        </h2>
      </div>

      <div
        className={`mt-8 overflow-hidden ${isPaused ? "" : ""}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex w-max py-6 ${isPaused ? "animate-scroll-paused" : "animate-scroll"}`}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="mx-8 shrink-0 md:mx-12">
              <span className="font-display text-3xl font-light italic text-brown/40 md:text-4xl">
                Coming Soon
              </span>
            </div>
          ))}
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={`dup-${i}`} className="mx-8 shrink-0 md:mx-12">
              <span className="font-display text-3xl font-light italic text-brown/40 md:text-4xl">
                Coming Soon
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
