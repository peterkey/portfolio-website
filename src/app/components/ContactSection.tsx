'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8% 0px' });
  const reduced = useReducedMotion();

  // Parallax — ghost word drifts upward relative to the section content
  useEffect(() => {
    if (reduced) return;
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const ghost = sectionRef.current!.querySelector<HTMLElement>('[data-ghost-word]');
      if (ghost) {
        gsap.to(ghost, {
          yPercent: -18,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef.current);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 md:py-48 bg-ink overflow-hidden">
      {/* Ambient light source — upper-center glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 w-[980px] h-[980px] select-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(46, 125, 111, 0.12) 0%, transparent 60%)',
        }}
      />

      {/* Ghost "HELLO" — oversized, parallaxed on scroll */}
      <div
        data-ghost-word=""
        className="pointer-events-none absolute inset-0 flex items-center overflow-hidden select-none"
        aria-hidden="true"
      >
        <span
          className="font-heading font-bold leading-none text-text block"
          style={{
            fontSize: 'clamp(10rem, 36vw, 30rem)',
            letterSpacing: '-0.06em',
            opacity: 0.08,
            marginLeft: '-2%',
          }}
        >
          HELLO
        </span>
      </div>

      <div className="container-site relative z-10" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="label text-muted">Contact</span>
          <div className="h-px flex-1 bg-white/10 max-w-16" aria-hidden="true" />
        </motion.div>

        {/* Signature heading — per-line clip reveal, unconstrained width */}
        <div className="mb-14 md:mb-20">
          <h2
            className="font-heading font-bold text-text"
            style={{ letterSpacing: '-0.04em', lineHeight: '0.88' }}
          >
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: reduced ? '0%' : '110%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="block"
                style={{ fontSize: 'clamp(3.5rem, 11vw, 12rem)' }}
              >
                Let&apos;s build
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: reduced ? '0%' : '110%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{ duration: 0.9, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="block"
                style={{ fontSize: 'clamp(3.5rem, 11vw, 12rem)', color: '#2E7D6F' }}
              >
                something.
              </motion.span>
            </div>
          </h2>
        </div>

        {/* Supporting content — constrained to readable width */}
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-body text-text/60 text-lg max-w-[50ch] leading-relaxed mb-12"
          >
            Open to service desk and IT support roles across South Wales —
            on-site, hybrid, or remote. If you&apos;re hiring, or just want to
            talk infrastructure, get in touch.
          </motion.p>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="label text-text/60 mb-3">Email</div>
            <a
              href="mailto:prkey94@gmail.com"
              className="font-heading font-semibold text-text hover:text-accent-bright transition-colors duration-300 inline-block"
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                letterSpacing: '-0.02em',
              }}
            >
              prkey94@gmail.com
            </a>
          </motion.div>

          {/* CV Download */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-3 border border-white/20 text-text/60 hover:border-accent hover:text-accent transition-colors duration-200 px-5 py-2.5 label"
            >
              Download CV
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true">
                <path d="M6 0v10M1 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.64 }}
            className="mt-12 flex items-center gap-8 border-t border-border pt-8"
          >
            {[
              { label: 'GitHub',   href: 'https://github.com/peterkey'  },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/pkey'  },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hit label text-muted hover:text-accent-bright transition-colors duration-200"
              >
                {link.label} ↗
              </a>
            ))}

            <div className="ml-auto">
              <span className="label text-muted">Wales, UK · GMT</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
