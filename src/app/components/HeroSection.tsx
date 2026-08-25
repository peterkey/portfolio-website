'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useAnimation, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroTopology from './HeroTopology';

const LINE_ONE   = 'PETER';
const LINE_TWO   = 'WILLIAMS';
const LINE_THREE = '—KEY';

export default function HeroSection() {
  const reduced      = useReducedMotion();
  const pathname     = usePathname();
  const nameControls = useAnimation();
  const descControls = useAnimation();
  const ctaControls  = useAnimation();
  const sectionRef   = useRef<HTMLElement>(null);

  const onCtaMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const r  = el.getBoundingClientRect();
    const x  = (e.clientX - r.left - r.width  / 2) * 0.42;
    const y  = (e.clientY - r.top  - r.height / 2) * 0.42;
    el.style.transform  = `translate(${x}px, ${y}px)`;
    el.style.transition = 'transform 0.08s cubic-bezier(0.16, 1, 0.3, 1)';
  };

  const onCtaMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform  = '';
    e.currentTarget.style.transition = 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
  };

  const scrollTo = (selector: string) => {
    const lenis = (window as any).__lenis;
    if (lenis) { lenis.scrollTo(selector, { offset: -64, duration: 1.2 }); }
    else { document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' }); }
  };

  useEffect(() => {
    const ease = [0.16, 1, 0.3, 1] as const;
    const dur  = reduced ? 0.3 : 0.85;

    nameControls.set({ y: reduced ? '0%' : '110%' });
    descControls.set({ opacity: 0, y: reduced ? 0 : 16 });
    ctaControls .set({ opacity: 0, y: reduced ? 0 : 12 });

    nameControls.start((i: number) => ({
      y: '0%',
      transition: { duration: dur, delay: 0.06 + i * 0.12, ease },
    }));
    descControls.start({ opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.52, ease } });
    ctaControls .start({ opacity: 1, y: 0, transition: { duration: 0.5,  delay: 0.68, ease } });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (reduced) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const bgEl   = section.querySelector<HTMLElement>('[data-hero-bg]');
      const topoEl = section.querySelector<HTMLElement>('[data-hero-topo]');

      if (bgEl) {
        gsap.to(bgEl, {
          yPercent: 35,
          ease: 'none',
          scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true },
        });
      }
      if (topoEl) {
        gsap.to(topoEl, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true },
        });
      }
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex flex-col justify-between min-h-svh px-4 pt-28 pb-8 overflow-hidden bg-base"
      aria-labelledby="hero-heading"
    >
      {/* Radial glows — parallaxed */}
      <div
        data-hero-bg=""
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 98% 70% at 20% 15%, rgba(46,125,111,0.12) 0%, transparent 70%),' +
            'radial-gradient(ellipse 70% 91% at 80% 80%, rgba(46,125,111,0.10) 0%, transparent 60%),' +
            'radial-gradient(ellipse 49% 49% at 55% 45%, rgba(91,127,166,0.05) 0%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      {/* Signature — the actual home lab, etched behind the name */}
      <div
        data-hero-topo=""
        className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-end select-none lg:pr-[3vw]"
        aria-hidden="true"
      >
        <HeroTopology className="h-[72%] max-h-[600px] w-auto opacity-[0.35] sm:opacity-70 lg:opacity-100 translate-x-[30%] sm:translate-x-[10%] lg:translate-x-0" />
      </div>

      {/* Main name block */}
      <div className="relative z-10 flex-1 flex flex-col justify-center container-site">
        <div
          className="pointer-events-none absolute"
          style={{
            top: '50%', left: '-5%',
            transform: 'translateY(-55%)',
            width: '91vw', height: '77vh',
            background: 'radial-gradient(ellipse at center, rgba(46,125,111,0.10) 0%, transparent 65%)',
            zIndex: -1,
          }}
          aria-hidden="true"
        />

        <div className="label text-muted mb-6 select-none">
          IT Support &amp; Infrastructure — Wales, UK
        </div>

        <h1
          id="hero-heading"
          className="font-heading font-bold leading-none select-none"
          style={{ letterSpacing: '-0.04em' }}
        >
          <div className="overflow-hidden">
            <motion.span custom={0} animate={nameControls} className="block text-display-xl text-text">
              {LINE_ONE}
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span custom={1} animate={nameControls} className="block text-display-xl text-text">
              {LINE_TWO}
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span custom={2} animate={nameControls} className="block text-display-xl" style={{ color: '#2E7D6F' }}>
              {LINE_THREE}
            </motion.span>
          </div>
        </h1>

        <motion.p
          animate={descControls}
          className="mt-8 text-lg font-body text-text/60 max-w-[42ch] leading-relaxed"
        >
          First-line IT support in a high-volume environment — backed by a
          self-hosted home lab that taught me how the infrastructure actually
          works. CompTIA Network+ in progress.
        </motion.p>

        <motion.div
          animate={ctaControls}
          className="mt-10 flex items-center gap-6"
        >
          <a
            href="#experience"
            data-cursor="view"
            onClick={(e) => { e.preventDefault(); scrollTo('#experience'); }}
            onMouseMove={onCtaMouseMove}
            onMouseLeave={onCtaMouseLeave}
            className="inline-flex items-center gap-3 bg-accent text-text font-heading font-semibold text-sm tracking-widest uppercase px-7 py-3.5 hover:bg-accent/90"
            style={{ letterSpacing: '0.12em', willChange: 'transform' }}
          >
            See My Experience
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M0 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
            onMouseMove={onCtaMouseMove}
            onMouseLeave={onCtaMouseLeave}
            className="hit label text-muted hover:text-text transition-colors duration-200 underline underline-offset-4 decoration-text/20 hover:decoration-text"
            style={{ willChange: 'transform' }}
          >
            Say Hello
          </a>
          <a
            href="/cv.pdf"
            download
            onMouseMove={onCtaMouseMove}
            onMouseLeave={onCtaMouseLeave}
            className="hit label text-muted hover:text-text transition-colors duration-200 underline underline-offset-4 decoration-text/20 hover:decoration-text"
            style={{ willChange: 'transform' }}
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.85 }}
        className="relative z-10 container-site flex items-center justify-between border-t border-border pt-6"
      >
        <div className="flex items-center gap-2.5">
          <span
            className="status-dot inline-block w-1.5 h-1.5 rounded-full bg-accent"
            aria-hidden="true"
          />
          <span className="label text-muted">Available — IT support or service desk — remote or South Wales</span>
        </div>

        <div className="hidden sm:flex items-center gap-6">
          <a
            href="https://github.com/peterkey"
            target="_blank"
            rel="noopener noreferrer"
            className="hit label text-muted hover:text-text transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/pkey"
            target="_blank"
            rel="noopener noreferrer"
            className="hit label text-muted hover:text-text transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>

        <motion.div
          animate={reduced ? { y: 0 } : { y: [0, 6, 0] }}
          transition={reduced ? {} : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
          className="label text-muted flex flex-col items-center gap-1.5"
        >
          <span>Scroll</span>
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
            <path d="M5 0v12M1 9l4 4 4-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
