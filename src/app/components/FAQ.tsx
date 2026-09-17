"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const faqs = [
  {
    q: "Will my designs be exclusive to me?",
    a: "Absolutely! We endeavour to create uniqueness with every project we do. No design, or even a furniture item, is repeated from one project to another. Your space is as exclusive as you — tailor made to your requirements and aspirations.",
  },
  {
    q: "Do you undertake projects across India?",
    a: "Absolutely! We currently have a project footprint across 5 states in India and are rapidly expanding. We hope to have an international presence in the next three years.",
  },
  {
    q: "Do you undertake only Architecture or only Interior Design?",
    a: "We undertake all kinds of work across different sectors pan India. Although, when you are proposing making a home, we love a full-service consulting — from Architecture to Interior Design — as it provides you with a very comprehensive and well thought-out design.",
  },
  {
    q: "Do you make sustainable homes?",
    a: "We love sustainable design — whether Architectural or Interiors. Making green luxury homes has always been our preferred area of work.",
  },
  {
    q: "Where do you source from?",
    a: "All over India, Europe, North America & the Far-East. We will source the best for you depending on the requirement of the space, budget & theme we are creating.",
  },
];

function FAQItem({ faq, isOpen, onClick }: { faq: typeof faqs[0], isOpen: boolean, onClick: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.7,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.7,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  return (
    <div 
      className="group border-b faq-item"
      style={{ borderColor: "rgba(90,68,54,0.12)" }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-8 text-left outline-none cursor-pointer"
      >
        <span 
          className={`font-sans text-[18px] font-normal transition-all duration-500 ease-out group-hover:translate-x-3 ${isOpen ? "text-[#5A2D13]" : "text-[#5A4436] group-hover:text-[#5A2D13]"}`}
        >
          {faq.q}
        </span>
        <span 
          className="font-sans text-[20px] font-light transition-transform duration-500 ease-out"
          style={{ 
            color: "rgba(90,68,54,0.4)",
            transform: isOpen ? "rotate(90deg)" : "rotate(0deg)"
          }}
        >
          →
        </span>
      </button>
      
      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div 
          className="pb-8 pr-12 transition-transform duration-500 ease-out"
          style={{ transform: isOpen ? "translateY(0)" : "translateY(-10px)" }}
        >
          <p 
            className="font-sans text-[16px] leading-[1.7]"
            style={{ color: "rgba(90,68,54,0.7)" }}
          >
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    let ctx: gsap.Context;
    const rafId = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        // Animate Section Header elements
        const headerElements = headerRef.current?.children;
        if (headerElements) {
          gsap.fromTo(
            headerElements,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 1.1,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                once: true,
              },
            }
          );
        }

        // Animate FAQ items staggered
        const items = gsap.utils.toArray(".faq-item");
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1.1,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 60%",
                once: true,
              },
            }
          );
        }
      }, sectionRef);
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-[140px]" style={{ backgroundColor: "#F6F2EB" }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16 md:gap-24 items-start">
        
        {/* Left Column: Section Introduction */}
        <div className="relative">
          {/* Subtle vertical architectural guideline */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px]" style={{ backgroundColor: "rgba(90,68,54,0.12)" }} />
          
          <div ref={headerRef} className="pl-6 md:pl-8">
            <span 
              className="font-sans text-[11px] uppercase tracking-[0.35em] block mb-6"
              style={{ color: "rgba(90,68,54,0.45)" }}
            >
              SECTION 05
            </span>
            <h2 
              className="font-serif italic font-light text-[48px] md:text-[60px] leading-tight mb-6"
              style={{ color: "#4A2D1F" }}
            >
              Questions
            </h2>
            <p 
              className="font-sans text-[15px] leading-relaxed max-w-[320px]"
              style={{ color: "rgba(90,68,54,0.7)" }}
            >
              Everything you may wish to know before beginning your journey with us.
            </p>
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div className="flex flex-col">
          {/* Top border for the first item */}
          <div className="w-full h-[1px]" style={{ backgroundColor: "rgba(90,68,54,0.12)" }} />
          
          {faqs.map((faq, i) => (
            <FAQItem 
              key={i} 
              faq={faq} 
              isOpen={openIndex === i} 
              onClick={() => setOpenIndex(openIndex === i ? null : i)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
