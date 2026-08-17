"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CloudinaryImage from "./CloudinaryImage";
import { siteImage } from "@/data/images";

const inputClasses =
  "w-full rounded-xl border border-black/10 bg-[#FAF9F7] px-4 py-3.5 text-[15px] text-text-primary outline-none transition-all duration-300 placeholder:text-text-muted/60 hover:border-black/20 focus:border-brown focus:bg-white focus:ring-4 focus:ring-brown/10";

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-[12px] text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (introRef.current) {
        gsap.fromTo(
          introRef.current.children,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: introRef.current, start: "top 78%", once: true },
          }
        );
      }
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: cardsRef.current, start: "top 80%", once: true },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  return (
    <section id="contact" ref={sectionRef} className="overflow-hidden py-[100px] md:py-[120px]" style={{ backgroundColor: "#F6F2EB" }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        {/* Intro */}
        <div ref={introRef} className="grid grid-cols-1 items-end gap-8 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div>
            <span className="mb-6 block text-[11px] font-semibold uppercase tracking-[0.35em]" style={{ color: "rgba(90,68,54,0.45)" }}>
              Contact Us
            </span>
            <h2 className="font-serif text-[44px] font-light italic leading-[1.08] tracking-tight text-brown-deep md:text-[64px]">
              Let&rsquo;s help you find the right home
            </h2>
          </div>
          <p className="max-w-[380px] text-[15px] leading-relaxed md:justify-self-end" style={{ color: "rgba(90,68,54,0.7)" }}>
            Whether you&rsquo;re looking to buy, rent, or just explore, we&rsquo;ll guide every step with clarity.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 md:mt-16 lg:gap-8">
          {/* Commitment card */}
          <div className="flex flex-col overflow-hidden rounded-[28px] bg-[#171310] p-8 text-cream md:rounded-[32px] md:p-10">
            <h3 className="font-body text-[26px] font-semibold tracking-tight text-white">Our Commitment</h3>
            <p className="mt-3 max-w-[420px] text-[15px] leading-relaxed text-white/70">
              Helping you discover homes that truly match your lifestyle &mdash; with clarity, trust, and simplicity.
            </p>
            <div className="mt-auto pt-8">
              <div className="group relative overflow-hidden rounded-2xl">
                <CloudinaryImage
                  src={siteImage("/Biren's Villa/image_1.webp")}
                  alt="De'Caves designed residence"
                  width={1200}
                  height={800}
                  className="h-[240px] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05] md:h-[300px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>

          {/* Form card */}
          <div className="rounded-[28px] border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(53,34,25,0.08)] md:rounded-[32px] md:p-10">
            {submitted ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brown-deep text-cream">
                  <Check className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-serif text-[28px] font-light italic text-brown-deep">Thank you</h3>
                <p className="mt-3 max-w-[340px] text-[14px] leading-relaxed text-text-secondary">
                  We&rsquo;ve received your message and will get back to you within 24 hours. For anything urgent,
                  write to us at design@dcaves.in.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setValues({ name: "", email: "", subject: "", message: "" });
                    setErrors({});
                  }}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-brown/25 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brown transition-colors duration-300 hover:bg-brown hover:text-cream focus-visible:ring-4 focus-visible:ring-brown/20 outline-none"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field id="contact-name" label="Full Name" error={errors.name}>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="John Doe"
                      value={values.name}
                      onChange={(e) => setValues({ ...values, name: e.target.value })}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      className={inputClasses}
                    />
                  </Field>
                  <Field id="contact-email" label="Email" error={errors.email}>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="john@example.com"
                      value={values.email}
                      onChange={(e) => setValues({ ...values, email: e.target.value })}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      className={inputClasses}
                    />
                  </Field>
                </div>

                <Field id="contact-subject" label="Subject">
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Enter subject..."
                    value={values.subject}
                    onChange={(e) => setValues({ ...values, subject: e.target.value })}
                    className={inputClasses}
                  />
                </Field>

                <Field id="contact-message" label="Message" error={errors.message}>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Enter your message..."
                    value={values.message}
                    onChange={(e) => setValues({ ...values, message: e.target.value })}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    className={`${inputClasses} resize-none`}
                  />
                </Field>

                <button
                  type="submit"
                  className="mt-1 inline-flex w-full items-center justify-center gap-2 self-start rounded-full bg-brown-deep px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-cream transition-all duration-[400ms] ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-brown-dark active:scale-[0.98] focus-visible:ring-4 focus-visible:ring-brown/25 outline-none sm:w-auto"
                >
                  Submit
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
