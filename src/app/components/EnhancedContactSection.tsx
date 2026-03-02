"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

const EnhancedContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name:    formData.get("name") as string,
      email:   formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        setEmailSubmitted(true);
        e.currentTarget.reset();
      } else {
        setError(result.error || "Failed to send message. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "bg-[#0A1628] border border-[#1A3A5C] placeholder-[#4A6A8A]/60 text-trueAutumn-textDark text-sm rounded-xl block w-full p-3 focus:outline-none focus:ring-1 focus:ring-[#00D9FF] focus:border-[#00D9FF]/50 transition-all duration-200 font-body";

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4 bg-trueAutumn-cardDark relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="eyebrow mb-3">Let&apos;s talk</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-trueAutumn-textDark mb-4 font-heading">
            Get In Touch
          </h2>
          <p className="text-trueAutumn-textSecondaryDark text-lg max-w-content mx-auto font-body">
            Actively seeking IT support or junior systems administration roles.
            If you have an opportunity that fits, I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* ── Left: Contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact details */}
            <div className="glow-card glass border rounded-2xl p-6 space-y-5">
              {[
                {
                  icon: <EnvelopeIcon className="h-5 w-5 text-[#FF6B35]" />,
                  label: "Email",
                  value: "prkey94@gmail.com",
                  href: "mailto:prkey94@gmail.com",
                },
                {
                  icon: <PhoneIcon className="h-5 w-5 text-[#FF6B35]" />,
                  label: "Phone",
                  value: "(+44) 7711 233 307",
                  href: "tel:+447711233307",
                },
                {
                  icon: <MapPinIcon className="h-5 w-5 text-[#FF6B35]" />,
                  label: "Location",
                  value: "Pont-y-clun, South Wales",
                  href: null,
                },
                {
                  icon: <ClockIcon className="h-5 w-5 text-[#FF6B35]" />,
                  label: "Availability",
                  value: "Immediate start — open to hybrid or in-person across South Wales",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#FF6B35]/10 flex items-center justify-center shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-trueAutumn-textSecondaryDark tracking-widest uppercase mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-trueAutumn-textDark font-body text-sm hover:text-[#00D9FF] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-trueAutumn-textDark font-body text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social profiles */}
            <div className="glow-card glass border rounded-2xl p-6">
              <p className="text-xs font-mono text-trueAutumn-textSecondaryDark tracking-widest uppercase mb-4">Professional Profiles</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/peterkey"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="flex items-center gap-2.5 text-trueAutumn-textSecondaryDark hover:text-[#00D9FF] transition-colors group"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-sm font-body">github.com/peterkey</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/pkey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex items-center gap-2.5 text-trueAutumn-textSecondaryDark hover:text-[#00D9FF] transition-colors group"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-sm font-body">linkedin.com/in/pkey</span>
                </a>
              </div>
            </div>

            {/* Quick facts */}
            <div className="glow-card glass border rounded-2xl p-6">
              <p className="text-xs font-mono text-trueAutumn-textSecondaryDark tracking-widest uppercase mb-4">Quick Facts</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "CompTIA A+ (In Progress)",
                  "MS-900 (In Progress)",
                  "Right to Work — UK",
                  "Full Driving Licence",
                  "Immediate Start",
                  "South Wales based",
                ].map((fact) => (
                  <div key={fact} className="flex items-center gap-2 text-trueAutumn-textSecondaryDark text-sm font-body">
                    <CheckCircleIcon className="h-4 w-4 text-[#FF6B35] shrink-0" />
                    {fact}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="glow-card glass border rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-trueAutumn-textDark mb-1 font-heading">Send a Message</h3>
            <p className="text-trueAutumn-textSecondaryDark text-sm font-body mb-6">
              I aim to respond within 24 hours.
            </p>

            {emailSubmitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircleIcon className="h-7 w-7 text-green-500" />
                </div>
                <h4 className="text-trueAutumn-textDark font-heading font-semibold text-lg">Message sent!</h4>
                <p className="text-trueAutumn-textSecondaryDark text-sm font-body max-w-xs">
                  Thanks for getting in touch. I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setEmailSubmitted(false)}
                  className="text-[#00D9FF] text-sm font-mono hover:underline mt-2"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-trueAutumn-textDark block mb-1.5 text-sm font-medium font-body">
                      Name <span className="text-[#00D9FF]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-trueAutumn-textDark block mb-1.5 text-sm font-medium font-body">
                      Email <span className="text-[#00D9FF]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={inputClass}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-trueAutumn-textDark block mb-1.5 text-sm font-medium font-body">
                    Subject <span className="text-[#00D9FF]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className={inputClass}
                    placeholder="e.g. IT Support Engineer opportunity"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-trueAutumn-textDark block mb-1.5 text-sm font-medium font-body">
                    Message <span className="text-[#00D9FF]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell me about the role, the team, or anything you'd like to know about my background..."
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-600 text-sm p-3 bg-red-500/10 rounded-xl font-body">
                    <ExclamationCircleIcon className="h-5 w-5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#00D9FF] hover:bg-[#00B8E0] disabled:bg-[#00D9FF]/40 disabled:cursor-not-allowed text-[#060D18] font-bold py-3 px-6 rounded-full w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:ring-offset-2 focus:ring-offset-[#060D18] font-body text-sm tracking-wide"
                  style={{ boxShadow: isSubmitting ? "none" : "0 4px 14px rgba(0,217,255,0.25)" }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContactSection;
