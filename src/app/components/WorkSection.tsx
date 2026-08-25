'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Project {
  num: string;
  name: string;
  description: string;
  tech: string[];
  status?: string;
  url?: string;
}

const PROJECTS: Project[] = [
  {
    num: '01',
    name: 'PRIVCHECK',
    description:
      'A privacy policy analyser that scores and explains risk in plain English. Built to scratch an itch — most people never read these documents. I made one that does the reading for you.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'NLP'],
    status: 'Personal',
    url: '/writing/privcheck-writeup',
  },
  {
    num: '02',
    name: 'POTPLANNER',
    description:
      'A personal budgeting app built around the pot system. Currently rebuilding from scratch after a GitHub mishap during an OS migration. Some lessons are expensive.',
    tech: ['Next.js', 'PostgreSQL', 'Docker'],
    status: 'Personal',
  },
  {
    num: '03',
    name: 'HOME LAB',
    description:
      'A repurposed 2012 iMac running Proxmox, Docker, Nextcloud, Plex, Home Assistant, and Tailscale. Not because I had to — because I wanted to know how it all works.',
    tech: ['Docker', 'Proxmox', 'Linux', 'Tailscale', 'Networking'],
    status: 'Self-hosted',
    url: '/writing/home-lab-setup',
  },
];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const inView  = useInView(rowRef, { once: true, margin: '-10% 0px' });
  const reduced = useReducedMotion();

  // Number parallaxes at a different rate to the content, amplified by the larger size
  useEffect(() => {
    if (reduced) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!rowRef.current || !numRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        numRef.current,
        { y: 40 },
        {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: rowRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, [reduced]);

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, y: reduced ? 0 : 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      {/* Divider — contained within the grid */}
      <div className="container-site">
        <div className="divider" aria-hidden="true" />
      </div>

      {/* Project number — right: 0 of the full-width row = viewport right edge.
          Hidden on mobile to prevent overwhelming small screens. */}
      <div
        className="pointer-events-none absolute right-0 inset-y-0 hidden md:flex items-center select-none"
        aria-hidden="true"
      >
        <span
          ref={numRef}
          className="block font-mono font-medium leading-none opacity-[0.06] group-hover:opacity-[0.18] transition-opacity duration-500"
          style={{
            fontSize: 'clamp(4rem, 20vw, 18rem)',
            letterSpacing: '-0.05em',
            color: '#FAFAFA',
          }}
        >
          {project.num}
        </span>
      </div>

      {/* Bloom — fills the full row width on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 30% 50%, rgba(46, 125, 111, 0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Content — inside container, renders above the bleed number via DOM order */}
      <div className="container-site py-10 md:py-14 relative transition-transform duration-300 group-hover:translate-x-2">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3
            className="font-heading text-heading font-semibold text-text leading-none group-hover:text-accent transition-colors duration-300"
            style={{ letterSpacing: '-0.03em' }}
          >
            {project.url ? (
              <a
                href={project.url}
                {...(project.url.startsWith('/') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                className="hover:underline"
              >
                {project.name}
              </a>
            ) : project.name}
          </h3>

          <div className="flex items-center gap-4 shrink-0 pt-2">
            {project.status && (
              <span className="label text-muted">{project.status}</span>
            )}
            {project.url ? (
              <a
                href={project.url}
                {...(project.url.startsWith('/') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                className="text-muted group-hover:text-accent-bright transition-all duration-300 group-hover:translate-x-1 transform"
                aria-label={`View ${project.name}`}
              >
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                  <path d="M0 7h18M12 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ) : (
              <span
                className="text-border group-hover:text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 transform"
                aria-hidden="true"
              >
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                  <path d="M0 7h18M12 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            )}
          </div>
        </div>

        <p className="font-body text-base leading-relaxed max-w-[60ch] mb-6" style={{ color: 'rgba(250,250,250,0.80)' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="label text-muted bg-lift border border-border px-3 py-1.5 transition-colors duration-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const inView     = useInView(headingRef, { once: true, margin: '-15% 0px' });

  return (
    <section id="work" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      {/* Ambient light source — top-left glow behind section heading */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[900px] h-[900px] select-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at top left, rgba(46, 125, 111, 0.06) 0%, transparent 65%)',
        }}
      />

      {/* Section heading — stays contained */}
      <div className="container-site relative z-10">
        <div ref={headingRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="label text-muted">Selected Work</span>
            <div className="h-px flex-1 bg-border max-w-16" aria-hidden="true" />
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '110%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-section font-semibold text-text"
              style={{ letterSpacing: '-0.03em' }}
            >
              Personal Projects
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-body text-base max-w-[55ch]" style={{ color: 'rgba(250,250,250,0.74)' }}
          >
            Built in my own time, for my own reasons. Proof that I don&apos;t stop when the working day ends.
          </motion.p>
        </div>
      </div>

      {/* Project rows — full viewport width so numbers bleed to the right edge */}
      <div className="relative z-10">
        {PROJECTS.map((project, i) => (
          <ProjectRow key={project.name} project={project} index={i} />
        ))}
        <div className="container-site">
          <div className="divider" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
