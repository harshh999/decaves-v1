"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CloudinaryImage from "./CloudinaryImage";
import { siteImage } from "@/data/images";

const inputClasses =
  "w-full rounded-lg border border-[#E0D9CD] bg-[#FAF8F5] px-4 py-4 text-[14px] text-text-primary outline-none transition-all duration-300 placeholder:text-text-muted/35 hover:border-black/20 focus:border-brown focus:bg-white";

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
    <div className="flex flex-col gap-2.5">
      <label htmlFor={id} className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5A453A]/70">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-[11px] text-red-600 mt-1 tracking-wide">
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

    let ctx: gsap.Context;
    const rafId = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
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
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (ctx) ctx.revert();
    };
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
    if (validate()) {
      setSubmitted(true);
      
      const text = `Hello De'Caves,

I would like to enquire about a project.

Name: ${values.name}
Email: ${values.email}
Project / Subject: ${values.subject || "N/A"}
Message: ${values.message}

Thank you.`;

      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/919662320660?text=${encodedText}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="overflow-hidden py-[100px] md:py-[120px]" style={{ backgroundColor: "#F6F2EB" }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        {/* Intro */}
        <div ref={introRef} className="grid grid-cols-1 items-end gap-8 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div>
            <span className="mb-5 block text-[11px] font-semibold uppercase tracking-[0.35em]" style={{ color: "rgba(90,68,54,0.45)" }}>
              Contact Us
            </span>
            <h2 className="font-serif text-[42px] font-light italic leading-[1.12] tracking-tight text-brown-deep md:text-[60px]" style={{ letterSpacing: "-0.015em" }}>
              Let&rsquo;s help you find the right home
            </h2>
          </div>
          <p className="max-w-[380px] text-[14px] leading-relaxed md:justify-self-end md:mb-2" style={{ color: "rgba(90,68,54,0.65)" }}>
            Whether you&rsquo;re looking to buy, rent, or just explore, we&rsquo;ll guide every step with clarity.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="mt-12 grid grid-cols-1 gap-8 md:mt-16 lg:grid-cols-[48%_52%] items-stretch">
          {/* Commitment card */}
          <div className="flex flex-col justify-between overflow-hidden rounded-[28px] bg-[#171310] p-8 text-cream md:rounded-[32px] md:p-10 h-full">
            <div>
              <span className="mb-2.5 block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FAF8F5]/40">
                DE'CAVES PHILOSOPHY
              </span>
              <h3 className="font-serif text-[22px] font-medium tracking-tight text-white uppercase">Our Commitment</h3>
              <p className="mt-4 max-w-[420px] text-[14px] font-light leading-relaxed tracking-wide text-[#FAF8F5]/60">
                Helping you discover homes that truly match your lifestyle with clarity, trust, and simplicity.
              </p>
            </div>

            <div className="mt-12">
              <div className="group relative overflow-hidden rounded-[16px] md:rounded-[20px]">
                <CloudinaryImage
                  src="https://res.cloudinary.com/diqslwugu/image/upload/v1789582802/Screenshot_2026-09-16_at_11.12.24_PM_uc1ldq.png"
                  alt="De'Caves designed residence"
                  width={1200}
                  height={800}
                  className="h-[280px] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05] md:h-[360px]"
                  loading="lazy"
                  style={{
                    filter: "brightness(0.85) contrast(1.02) sepia(0.08)"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Form card */}
          <div className="flex flex-col justify-between rounded-[28px] border border-[#EADFD0]/40 bg-[#FCFAF7] p-8 shadow-[0_12px_40px_rgba(53,34,25,0.03)] md:rounded-[32px] md:p-10 h-full">
            {submitted ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center my-auto">
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
                  className="mt-8 inline-flex items-center gap-2 rounded-lg border border-brown/25 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brown transition-colors duration-300 hover:bg-brown hover:text-cream outline-none"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col justify-between h-full gap-6">
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 self-start rounded-lg bg-brown-deep px-8 py-4.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream transition-all duration-[400ms] ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-[#2A1B14] active:scale-[0.98] outline-none sm:w-auto"
                >
                  SEND AN ENQUIRY ↗
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
