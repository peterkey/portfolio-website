'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const FACTS = [
  { label: 'Based in',    value: 'Wales, UK'              },
  { label: 'Education',   value: 'BSc Sound Technology'   },
  { label: 'Seeking',     value: 'IT Support Role'        },
  { label: 'Stack',       value: 'React, Next.js, FastAPI' },
  { label: 'Interests',   value: 'Systems, Automation'    },
];

export default function AboutSection() {
  const ref     = useRef<HTMLDivElement>(null);
  const inView  = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduced = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: reduced ? 0 : 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section id="about" className="py-24 md:py-32 bg-base">
      <div className="container-site" ref={ref}>
        {/* Section header */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-16">
          <span className="label text-muted">About</span>
          <div className="h-px bg-border max-w-16 flex-1" aria-hidden="true" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24 items-start">
          {/* Main text */}
          <div>
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: reduced ? '0%' : '110%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-section font-semibold text-text"
                style={{ letterSpacing: '-0.03em' }}
              >
                I got here via a sound studio,
                <br />
                <span style={{ color: '#2E7D6F' }}>not a bootcamp.</span>
              </motion.h2>
            </div>

            <div className="space-y-5 font-body text-base leading-relaxed" style={{ color: 'rgba(250,250,250,0.80)' }}>
              <motion.p {...fadeUp(0.2)}>
                I got into tech slowly — not a lightbulb moment, more like being pulled in
                deeper over time until there was no going back. It started with breaking things
                and wanting to understand why they broke. It never really stopped being that.
              </motion.p>

              <motion.p {...fadeUp(0.28)}>
                The Sound Technology degree was a genuine passion at the time, and I don&apos;t
                regret a day of it. I don&apos;t make music anymore, but I still think about systems
                the same way I thought about audio: signal flow, feedback loops, what happens
                when you change one thing and everything else shifts. The degree just came with
                different tools.
              </motion.p>

              <motion.p {...fadeUp(0.36)}>
                What actually gets me is the stuff underneath the abstractions — containers,
                networking, how computers actually work. I self-host everything I can, run a
                home lab on a repurposed iMac, put Linux on a MacBook Apple abandoned. Not
                because I had to — because I wanted to know how. I&apos;ve built full-stack applications
                for real clients, but the home lab is where I go when I want to think. They&apos;re
                the same impulse. Right now I&apos;m looking for IT support or service desk work
                where I can actually get stuck in — somewhere that values people who fix things
                properly the first time.
              </motion.p>
            </div>

            {/* Pull quote */}
            <motion.blockquote
              {...fadeUp(0.44)}
              className="mt-12 relative pl-5"
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent"
                aria-hidden="true"
              />
              <p
                className="font-heading font-semibold text-text"
                style={{
                  fontSize: 'clamp(1.2rem, 2.8vw, 1.9rem)',
                  letterSpacing: '-0.025em',
                  lineHeight: '1.2',
                }}
              >
                &ldquo;Signal flow, feedback loops, what happens when you change one thing and everything else shifts.&rdquo;
              </p>
              <footer className="mt-4 label text-muted">
                — On how audio taught him systems thinking
              </footer>
            </motion.blockquote>
          </div>

          {/* Right column: workspace photo + facts */}
          <motion.div {...fadeUp(0.2)} className="space-y-0">
            {/* Quick Facts */}
            <div className="label text-muted mb-6">Quick Facts</div>
            {FACTS.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, x: reduced ? 0 : 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="flex justify-between items-baseline py-4 border-b border-border last:border-0"
              >
                <span className="label text-muted">{fact.label}</span>
                <span className="font-body text-text text-sm text-right max-w-[60%]">{fact.value}</span>
              </motion.div>
            ))}

            {/* Stack visual */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 p-5 bg-lift border border-accent/15"
            >
              <div className="label text-muted mb-4">Core Stack</div>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'Docker', 'Tailwind'].map((t) => (
                  <span key={t} className="font-mono text-[0.7rem] text-text px-2.5 py-1 border border-border hover:border-accent/50 hover:text-accent transition-colors duration-200">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
